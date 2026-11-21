import "dotenv/config";
import express from "express";
import fs from "fs";
import { GoogleGenAI } from "@google/genai";
import { buildGraph, findPath, describe, fmtTime, label } from "./lib/graph.js";

const app = express();
app.use(express.json());
app.use(express.static("public"));

const read = (f) => JSON.parse(fs.readFileSync(`data/${f}`, "utf8"));
const campus = read("campus.json"), academics = read("academics.json");
const graph = buildGraph(campus);
const MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash";
const ai = process.env.GEMINI_API_KEY ? new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY }) : null;

// Gemini only rewords facts that our own code already worked out. If it fails, the plain facts are shown.
async function reword(prompt) {
  if (!ai) return null;
  try { return (await ai.models.generateContent({ model: MODEL, contents: prompt })).text.replace(/[*_#`]/g, "").trim(); }
  catch (err) { console.error("Gemini error:", err.message); return null; }
}

app.get("/api/campus", (req, res) => res.json(campus));
app.get("/api/academics", (req, res) => res.json(academics));

app.post("/api/route", async (req, res) => {
  const { from, to } = req.body || {};
  if (!graph.nodes[from]?.place || !graph.nodes[to]?.place) return res.status(400).json({ error: "Pick both places from the list." });
  if (from === to) return res.status(400).json({ error: "You are already there! Pick a different place." });
  const p = findPath(graph, from, to);
  if (!p) return res.status(404).json({ error: "No walking route found between these places." });
  const steps = describe(graph, p.path);
  const friendly = await reword(
    `You are "Helping Hand", a friendly campus guide for first-year students at AITD Kanpur. ` +
    `Rewrite these steps as short, warm, numbered directions in plain text. Do NOT add, remove or rename any place.\n\n` +
    steps.map((s) => s.text).join("\n"));
  res.json({ path: p.path, time: fmtTime(p.secs), from: label(graph.nodes[from]), to: label(graph.nodes[to]), steps, friendly });
});

function facts(b, sub, q, group) {
  const times = Object.fromEntries(b.periods.map((p) => [p[0], p]));
  const slots = [];
  for (const [day, list] of Object.entries(b.days))
    for (const [p, span, id, g] of list)
      if (id === sub.id && (!g || g === group)) slots.push(`${day} ${times[p][1]} to ${times[p + span - 1][2]}${g ? ` (Group ${g})` : ""}`);
  const named = `${sub.name}${sub.code ? ` (${sub.code})` : ""}`;
  if (q === "who") return `${named} is taught by ${sub.teacher || "a faculty member who is not listed in the timetable"}.`;
  if (q === "when") return slots.length ? `${named} runs on: ${slots.join("; ")}.` : `${named} is not in the timetable for this group.`;
  if (q === "where") return `${named} is held at ${sub.venue || "a venue not listed in the timetable"}.`;
  const cr = /^\d/.test(sub.credits) ? `${sub.credits} credits` : "no credits (non-credit)";
  return sub.credits ? `${named}: ${cr}, ${sub.ltp} (lecture-tutorial-practical hours per week), assessed as ${sub.marks}.` : `${named} has no credits or marks listed in the scheme.`;
}

app.post("/api/ask", async (req, res) => {
  const { branch, subject, question, group } = req.body || {};
  const b = academics.branches[branch], sub = b?.subjects.find((s) => s.id === subject);
  if (!sub || !academics.questions.some((q) => q.id === question)) return res.status(400).json({ error: "Pick a subject and a question from the lists." });
  const plain = facts(b, sub, question, Number(group));
  const nice = await reword(
    `You are "Helping Hand", a friendly academic helper for first-year ${b.name} students at AITD Kanpur. ` +
    `Say the following in one or two short, warm sentences. Do not add any new facts.\n\n${plain}`);
  res.json({ answer: nice || plain });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Helping Hand running at http://localhost:${PORT}`));
