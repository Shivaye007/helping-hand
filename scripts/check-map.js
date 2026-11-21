// npm run check: makes sure every selectable place can reach every other one.
import fs from "fs";
import { buildGraph, findPath } from "../lib/graph.js";
const g = buildGraph(JSON.parse(fs.readFileSync("data/campus.json", "utf8")));
const ids = Object.values(g.nodes).filter((n) => n.place).map((n) => n.id);
const bad = ids.filter((id) => !findPath(g, "lobby", id));
console.log(`${ids.length} places checked.`, bad.length ? `UNREACHABLE: ${bad.join(", ")}` : "All reachable.");
process.exit(bad.length ? 1 : 0);
