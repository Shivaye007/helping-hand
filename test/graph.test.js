import test from "node:test";
import assert from "node:assert/strict";
import fs from "fs";
import { buildGraph, findPath, describe, fmtTime, label } from "../lib/graph.js";

const campus = JSON.parse(fs.readFileSync("data/campus.json", "utf8"));
const graph = buildGraph(campus);

test("Graph construction", () => {
  assert.ok(graph.floors.g, "1st floor exists");
  assert.ok(graph.floors.s, "2nd floor exists");
  const placeNodes = Object.values(graph.nodes).filter((n) => n.place);
  assert.equal(placeNodes.length, 38, "Exactly 38 selectable places exist");
});

test("All 38 campus places are reachable from main entrance/lobby", () => {
  const placeIds = Object.values(graph.nodes).filter((n) => n.place).map((n) => n.id);
  for (const id of placeIds) {
    const res = findPath(graph, "entr", id);
    assert.ok(res, `Place ${id} should be reachable from entr`);
    assert.ok(Array.isArray(res.path), `Path to ${id} must be an array`);
    assert.equal(res.path[0], "entr", "Path should start at entr");
    assert.equal(res.path.at(-1), id, `Path should end at ${id}`);
    assert.ok(res.secs >= 0, "Walking seconds must be non-negative");
  }
});

test("Cross-floor routing prioritizes the lift between 1st and 2nd floor", () => {
  const res = findPath(graph, "entr", "b202");
  assert.ok(res, "Path from entr to b202 must exist");
  assert.ok(res.path.includes("lift1"), "Path must use lift1 on 1st floor");
  assert.ok(res.path.includes("lift2"), "Path must use lift2 on 2nd floor");
  
  const steps = describe(graph, res.path);
  const liftStep = steps.find((s) => s.type === "lift");
  assert.ok(liftStep, "Steps must contain a lift direction");
  assert.match(liftStep.text, /lift up/i, "Step should describe taking the lift up");
});

test("Route to library uses valid path", () => {
  const res = findPath(graph, "entr", "lib");
  assert.ok(res, "Path to library must exist");
  assert.equal(res.path.at(-1), "lib");
  const steps = describe(graph, res.path);
  assert.ok(steps.length > 0, "Should generate steps");
});

test("Helper utilities fmtTime and label work correctly", () => {
  assert.equal(fmtTime(30), "under a minute");
  assert.equal(fmtTime(120), "about 2 min");
  const node = graph.nodes["b202"];
  assert.equal(label(node), "B-202");
  const smart = graph.nodes["a101"];
  assert.equal(label(smart), "A-101 (Smart class)");
});
