process.env.NODE_ENV = "test";
import test from "node:test";
import assert from "node:assert/strict";
import { app } from "../server.js";

let server;
let baseUrl;

test.before(async () => {
  await new Promise((resolve) => {
    server = app.listen(0, "127.0.0.1", () => {
      const port = server.address().port;
      baseUrl = `http://127.0.0.1:${port}`;
      resolve();
    });
  });
});

test.after(async () => {
  await new Promise((resolve) => server.close(resolve));
});

test("GET /api/campus returns campus layout", async () => {
  const res = await fetch(`${baseUrl}/api/campus`);
  assert.equal(res.status, 200);
  const data = await res.json();
  assert.ok(Array.isArray(data.floors));
  assert.ok(Array.isArray(data.places));
  assert.ok(Array.isArray(data.edges));
});

test("GET /api/academics returns academic branches and syllabus", async () => {
  const res = await fetch(`${baseUrl}/api/academics`);
  assert.equal(res.status, 200);
  const data = await res.json();
  assert.ok(data.branches["cs-a"]);
  assert.ok(data.branches["aiml"]);
  assert.ok(data.branches["el"]);
  assert.ok(data.syllabus);
});

test("GET /api/events returns campus notices and events", async () => {
  const res = await fetch(`${baseUrl}/api/events`);
  assert.equal(res.status, 200);
  const data = await res.json();
  assert.ok(Array.isArray(data));
  assert.ok(data.length >= 3);
  assert.ok(data[0].title);
  assert.ok(data[0].badge);
});

test("POST /api/route returns valid route and lift steps", async () => {
  const res = await fetch(`${baseUrl}/api/route`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ from: "entr", to: "b202" })
  });
  assert.equal(res.status, 200);
  const data = await res.json();
  assert.ok(Array.isArray(data.path));
  assert.equal(data.from, "Main entrance");
  assert.equal(data.to, "B-202");
  assert.ok(data.steps.some((s) => s.type === "lift"));
});

test("POST /api/route handles Hinglish language parameter", async () => {
  const res = await fetch(`${baseUrl}/api/route`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ from: "entr", to: "b202", lang: "hi" })
  });
  assert.equal(res.status, 200);
  const data = await res.json();
  assert.ok(data.path);
  assert.ok(data.steps);
});

test("POST /api/route rejects same start and destination", async () => {
  const res = await fetch(`${baseUrl}/api/route`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ from: "entr", to: "entr" })
  });
  assert.equal(res.status, 400);
  const data = await res.json();
  assert.match(data.error, /already there/i);
});

test("POST /api/route rejects unknown place", async () => {
  const res = await fetch(`${baseUrl}/api/route`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ from: "entr", to: "mars_rover_room" })
  });
  assert.equal(res.status, 400);
});

test("POST /api/ask answers academic questions accurately", async () => {
  const res = await fetch(`${baseUrl}/api/ask`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      branch: "aiml",
      subject: "fece",
      question: "who",
      group: 1
    })
  });
  assert.equal(res.status, 200);
  const data = await res.json();
  assert.ok(data.answer);
  assert.match(data.answer, /Shashank Srivastava/i);
});

test("POST /api/ask handles Hinglish language parameter", async () => {
  const res = await fetch(`${baseUrl}/api/ask`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      branch: "aiml",
      subject: "fece",
      question: "where",
      group: 1,
      lang: "hi"
    })
  });
  assert.equal(res.status, 200);
  const data = await res.json();
  assert.ok(data.answer);
  assert.match(data.answer, /B-202/i);
});

test("POST /api/ask rejects invalid subject or question", async () => {
  const res = await fetch(`${baseUrl}/api/ask`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      branch: "aiml",
      subject: "nonexistent_sub",
      question: "who"
    })
  });
  assert.equal(res.status, 400);
});
