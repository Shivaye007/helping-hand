// Pure routing code. Gemini never invents routes: it only rewords what this file finds.
export function buildGraph(campus) {
  const floors = Object.fromEntries(campus.floors.map((f) => [f.id, f]));
  const nodes = {};
  for (const p of campus.places) if (p.n) nodes[p.id] = { ...p, cx: p.x + p.w / 2, cy: p.y + p.h / 2, place: true };
  for (const j of campus.junctions) nodes[j.id] = { ...j, cx: j.x, cy: j.y };
  const adj = Object.fromEntries(Object.keys(nodes).map((id) => [id, []]));
  for (const [a, b, type = "walk", secs] of campus.edges) {
    if (!nodes[a] || !nodes[b]) throw new Error(`Bad edge: ${a} - ${b}`);
    const s = secs ?? Math.max(4, Math.round(Math.hypot(nodes[a].cx - nodes[b].cx, nodes[a].cy - nodes[b].cy) * 0.06));
    adj[a].push({ to: b, type, secs: s });
    adj[b].push({ to: a, type, secs: s });
  }
  return { floors, nodes, adj };
}

export function findPath({ nodes, adj }, from, to) {
  const dist = {}, prev = {}, todo = new Set(Object.keys(nodes));
  for (const id of todo) dist[id] = Infinity;
  dist[from] = 0;
  while (todo.size) {
    let u = null;
    for (const id of todo) if (u === null || dist[id] < dist[u]) u = id;
    if (dist[u] === Infinity) break;
    todo.delete(u);
    if (u === to) break;
    for (const e of adj[u]) if (dist[u] + e.secs < dist[e.to]) { dist[e.to] = dist[u] + e.secs; prev[e.to] = u; }
  }
  if (dist[to] === Infinity) return null;
  const path = [to];
  while (path[0] !== from) path.unshift(prev[path[0]]);
  return { path, secs: dist[to] };
}

export const fmtTime = (s) => (s < 60 ? "under a minute" : `about ${Math.round(s / 60)} min`);
export const label = (n) => n.n + (n.s ? ` (${n.s})` : "");

export function describe(g, path) {
  const out = [];
  let seg = [path[0]], secs = 0;
  const flush = () => {
    if (seg.length > 1) {
      const a = g.nodes[seg[0]], b = g.nodes[seg[seg.length - 1]];
      const via = seg.slice(1, -1).map((i) => g.nodes[i]).filter((n) => n.place).slice(0, 3).map((n) => n.n);
      out.push({ type: "walk", text: `Walk from ${label(a)} to ${label(b)}${via.length ? `, passing ${via.join(", ")}` : ""} (${fmtTime(secs)}).` });
    }
    seg = [seg[seg.length - 1]]; secs = 0;
  };
  for (let i = 1; i < path.length; i++) {
    const a = g.nodes[path[i - 1]], b = g.nodes[path[i]];
    const e = g.adj[a.id].find((x) => x.to === b.id);
    if (e.type === "walk") { seg.push(b.id); secs += e.secs; continue; }
    flush();
    const up = a.f === "g";
    out.push(e.type === "lift"
      ? { type: "lift", text: `Take the lift ${up ? "up" : "down"} from the ${g.floors[a.f].name} to the ${g.floors[b.f].name}.` }
      : { type: "slope", text: `Take the slope ${up ? "up to the 2nd floor" : "down to the main lobby"}.` });
    seg = [b.id]; secs = 0;
  }
  flush();
  return out;
}
