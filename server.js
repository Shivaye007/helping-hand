import "dotenv/config";
import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI } from "@google/genai";
import { buildGraph, findPath, describe, fmtTime, label } from "./lib/graph.js";

const app = express();
app.use(express.json());
app.use(express.static("public"));

const read = (f) => JSON.parse(fs.readFileSync(`data/${f}`, "utf8"));
const campus = read("campus.json");
const academics = read("academics.json");
const graph = buildGraph(campus);
const MODEL = process.env.GEMINI_MODEL || "gemini-3.5-flash";
const ai = process.env.GEMINI_API_KEY ? new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY }) : null;

// Persistent User Store with Supabase Cloud Sync Support
const USERS_FILE = path.resolve("data/users.json");
let memoryUsers = null;

function loadServerUsers() {
  if (process.env.NODE_ENV === "test") {
    if (!memoryUsers) {
      try {
        memoryUsers = fs.existsSync(USERS_FILE) ? JSON.parse(fs.readFileSync(USERS_FILE, "utf8")) : {};
      } catch {
        memoryUsers = {};
      }
    }
    return memoryUsers;
  }
  try {
    if (fs.existsSync(USERS_FILE)) {
      return JSON.parse(fs.readFileSync(USERS_FILE, "utf8")) || {};
    }
  } catch (err) {
    console.error("Error reading users.json:", err.message);
  }
  return {};
}

function saveServerUsers(users) {
  if (process.env.NODE_ENV === "test") {
    memoryUsers = users;
    return;
  }
  try {
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), "utf8");
  } catch (err) {
    console.error("Error writing users.json:", err.message);
  }
}

// Optional Supabase Cloud Database Integration
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_ANON_KEY || process.env.SUPABASE_KEY;

async function syncUserToSupabase(profile) {
  if (!SUPABASE_URL || !SUPABASE_KEY) return null;
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/profiles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": SUPABASE_KEY,
        "Authorization": `Bearer ${SUPABASE_KEY}`,
        "Prefer": "resolution=merge-duplicates"
      },
      body: JSON.stringify({
        username: profile.username,
        name: profile.name,
        branch: profile.branch,
        group: profile.group,
        password: profile.password || "",
        data: profile,
        updated_at: new Date().toISOString()
      })
    });
    if (!res.ok) {
      console.warn("Supabase sync warning:", await res.text());
    }
  } catch (e) {
    console.warn("Supabase network error:", e.message);
  }
}

// Campus events / noticeboard data
const events = [
  {
    id: "hack2026",
    title: "AITD CodeSprint 2026 - Hackathon",
    date: "Saturday, 10:00 AM",
    venue: "Seminar Hall & Computer Lab",
    where: "sem",
    badge: "Hackathon",
    desc: "24-hour inter-branch coding challenge. Cash prizes and internship referrals for winning teams!"
  },
  {
    id: "iot-workshop",
    title: "Hands-on IoT & Microcontrollers Workshop",
    date: "Wednesday, 3:00 PM",
    venue: "Workshop 1 (D-104)",
    badge: "Workshop",
    desc: "Learn breadboarding, ESP32 sensors, and MQTT protocols with the Electronics department faculty."
  },
  {
    id: "caed-sub",
    title: "CAED Lab Sheet 1 to 4 Submission",
    date: "Friday, 5:00 PM",
    venue: "Graphics Lab (D-102-103)",
    badge: "Lab Deadline",
    desc: "Final deadline for orthographic projections and isometric drawing sheets submission."
  },
  {
    id: "library-drive",
    title: "AKTU Book Bank & Digital Library Access Drive",
    date: "Daily, 10:00 AM - 4:00 PM",
    venue: "Central Library, 2nd Floor",
    where: "lib",
    badge: "Academic",
    desc: "Collect your semester book bundle and activate your National Digital Library of India (NDLI) credentials."
  }
];

// Gemini only rewords facts that our own code already worked out. If it fails or in test, plain facts are returned.
export async function reword(prompt) {
  if (!ai || process.env.NODE_ENV === "test") return null;
  try {
    const res = await Promise.race([
      ai.models.generateContent({ model: MODEL, contents: prompt }),
      new Promise((_, reject) => setTimeout(() => reject(new Error("Gemini request timeout")), 4000))
    ]);
    return res.text.replace(/[*_#`]/g, "").trim();
  } catch (err) {
    console.error("Gemini error:", err.message);
    return null;
  }
}

app.get("/api/campus", (req, res) => res.json(campus));
app.get("/api/academics", (req, res) => res.json(academics));
app.get("/api/events", (req, res) => res.json(events));

// User Profile Endpoints with Server Persistence & Supabase sync
app.get("/api/users", (req, res) => {
  const users = loadServerUsers();
  res.json({ users, supabaseEnabled: Boolean(SUPABASE_URL && SUPABASE_KEY) });
});

app.post("/api/user", async (req, res) => {
  const profile = req.body;
  if (!profile || !profile.username) {
    return res.status(400).json({ error: "Username is required." });
  }
  const key = profile.username.trim().toLowerCase();
  const users = loadServerUsers();
  users[key] = { ...profile, username: key, updatedAt: new Date().toISOString() };
  saveServerUsers(users);
  // Asynchronously sync to Supabase if configured
  syncUserToSupabase(users[key]).catch(() => {});
  res.json({ ok: true, user: users[key] });
});

app.post("/api/route", async (req, res) => {
  const { from, to, lang = "en" } = req.body || {};
  if (!graph.nodes[from]?.place || !graph.nodes[to]?.place) {
    return res.status(400).json({ error: "Pick both places from the list." });
  }
  if (from === to) {
    return res.status(400).json({ error: "You are already there! Pick a different place." });
  }
  const p = findPath(graph, from, to);
  if (!p) {
    return res.status(404).json({ error: "No walking route found between these places." });
  }
  const steps = describe(graph, p.path);
  const isHinglish = lang === "hi" || lang === "hinglish";
  const prompt = isHinglish
    ? `You are "Helping Hand", a friendly, upbeat campus guide mascot for first-year college students at AITD Kanpur. ` +
      `Rewrite these walking steps in warm, natural college Hinglish (Hindi written in Roman script, e.g. "Main lobby se lift lo aur seedhe 2nd floor par utar jao..."). Keep it short and easy to follow. Do NOT add, remove or rename any place.\n\n` +
      steps.map((s) => s.text).join("\n")
    : `You are "Helping Hand", a friendly campus guide for first-year students at AITD Kanpur. ` +
      `Rewrite these steps as short, warm, numbered directions in plain text. Do NOT add, remove or rename any place.\n\n` +
      steps.map((s) => s.text).join("\n");

  const friendly = await reword(prompt);
  res.json({
    path: p.path,
    time: fmtTime(p.secs),
    from: label(graph.nodes[from]),
    to: label(graph.nodes[to]),
    steps,
    friendly
  });
});

export function facts(b, sub, q, group) {
  const times = Object.fromEntries(b.periods.map((p) => [p[0], p]));
  const slots = [];
  for (const [day, list] of Object.entries(b.days)) {
    for (const [p, span, id, g] of list) {
      if (id === sub.id && (!g || g === group)) {
        slots.push(`${day} ${times[p][1]} to ${times[p + span - 1][2]}${g ? ` (Group ${g})` : ""}`);
      }
    }
  }
  const named = `${sub.name}${sub.code ? ` (${sub.code})` : ""}`;
  if (q === "who") return `${named} is taught by ${sub.teacher || "a faculty member who is not listed in the timetable"}.`;
  if (q === "when") return slots.length ? `${named} runs on: ${slots.join("; ")}.` : `${named} is not in the timetable for this group.`;
  if (q === "where") return `${named} is held at ${sub.venue || "a venue not listed in the timetable"}.`;
  const cr = /^\d/.test(sub.credits) ? `${sub.credits} credits` : "no credits (non-credit)";
  return sub.credits
    ? `${named}: ${cr}, ${sub.ltp} (lecture-tutorial-practical hours per week), assessed as ${sub.marks}.`
    : `${named} has no credits or marks listed in the scheme.`;
}

app.post("/api/ask", async (req, res) => {
  const { branch, subject, question, group, lang = "en" } = req.body || {};
  const b = academics.branches[branch];
  const sub = b?.subjects.find((s) => s.id === subject);
  if (!sub || !academics.questions.some((q) => q.id === question)) {
    return res.status(400).json({ error: "Pick a subject and a question from the lists." });
  }
  const plain = facts(b, sub, question, Number(group) || 1);
  const isHinglish = lang === "hi" || lang === "hinglish";
  const prompt = isHinglish
    ? `You are "Helping Hand", a friendly, caring academic helper for first-year ${b.name} students at AITD Kanpur. ` +
      `Explain the following fact in natural, encouraging college Hinglish (Hindi written in Roman script) in one or two short sentences. Do not invent any new facts.\n\n${plain}`
    : `You are "Helping Hand", a friendly academic helper for first-year ${b.name} students at AITD Kanpur. ` +
      `Say the following in one or two short, warm sentences. Do not add any new facts.\n\n${plain}`;

  const nice = await reword(prompt);
  res.json({ answer: nice || plain });
});

export { app, graph, campus, academics, events };

const PORT = process.env.PORT || 3000;
const isDirectRun = process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1]);
if (isDirectRun && process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => console.log(`Helping Hand running at http://localhost:${PORT}`));
}
