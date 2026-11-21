const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const root = $("#root");
const BRANCH = "cse-aiml";
const MASCOT = `<svg class="mascot" viewBox="-10 -5 220 225" role="img" aria-label="Helping Hand mascot">
<g stroke="#14213D" stroke-width="5" stroke-linejoin="round" fill="#FFC83D">
<rect x="54" y="38" width="22" height="92" rx="11"/><rect x="78" y="22" width="22" height="108" rx="11"/>
<rect x="102" y="30" width="22" height="100" rx="11"/><rect x="126" y="56" width="20" height="76" rx="10"/>
<g transform="rotate(-40 42 150)"><rect x="30" y="118" width="24" height="70" rx="12"/></g>
<rect x="44" y="100" width="112" height="104" rx="44"/></g>
<circle cx="84" cy="150" r="8" fill="#14213D"/><circle cx="120" cy="150" r="8" fill="#14213D"/>
<circle cx="87" cy="147" r="3" fill="#fff"/><circle cx="123" cy="147" r="3" fill="#fff"/>
<path d="M88 168 Q102 186 116 168" fill="none" stroke="#14213D" stroke-width="5" stroke-linecap="round"/>
<circle cx="70" cy="168" r="8" fill="#FF8FA3" opacity=".75"/><circle cx="134" cy="168" r="8" fill="#FF8FA3" opacity=".75"/></svg>`;
const ICON = {
  chev: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>`,
  swap: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 4v16M4 16l4 4 4-4M16 20V4M12 8l4-4 4 4"/></svg>`,
};

let C, A, B, N = {}, me = null;
let from = "entr", to = null, floor = "g", route = null, day = "Monday", askSub = null, askQ = null;

const api = async (url, body) => {
  const r = await fetch(url, body ? { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) } : undefined);
  const d = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(d.error || "Something went wrong. Please try again.");
  return d;
};
const save = () => { try { localStorage.setItem("hh_me", JSON.stringify(me)); } catch {} };
const load = () => { try { return JSON.parse(localStorage.getItem("hh_me")); } catch { return null; } };
let toastT;
function toast(msg) { const t = $("#toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove("show"), 2600); }
function shake(el) { el.classList.remove("shake"); void el.offsetWidth; el.classList.add("shake"); }
const subj = (id) => B.subjects.find((s) => s.id === id);
const pName = (p) => p.n + (p.s ? ` (${p.s})` : "");
const fName = (id) => C.floors.find((f) => f.id === id).name;

async function init() {
  try {
    [C, A] = await Promise.all([api("/api/campus"), api("/api/academics")]);
  } catch (e) { root.innerHTML = `<div class="wrap"><div class="card err">Could not load the campus data. Start the server with <b>npm start</b> and refresh.</div></div>`; return; }
  B = A.branches[BRANCH];
  for (const p of C.places) if (p.n) N[p.id] = { ...p, cx: p.x + p.w / 2, cy: p.y + p.h / 2 };
  for (const j of C.junctions) N[j.id] = { ...j, cx: j.x, cy: j.y };
  me = load();
  if (me && me.name && me.branch === BRANCH) showApp(); else showWelcome();
}

/* ---------- welcome / profile ---------- */
function showWelcome(prefill) {
  const pick = prefill || { name: "", group: 1, subjects: B.subjects.filter((s) => !s.extra).map((s) => s.id) };
  const sel = new Set(pick.subjects); let group = pick.group;
  root.innerHTML = `<div class="wrap"><section class="card welcome in wave">
    <div class="mascot-lg">${MASCOT}</div><h1>Hi, I'm Helping Hand</h1>
    <p>Tell me about you and I'll set up your classes and campus routes.</p>
    <label for="nm">Your name</label><input id="nm" type="text" maxlength="30" autocomplete="given-name" placeholder="Type your name" value="${esc(pick.name)}">
    <div class="lab">Your branch</div><div class="chips"><button class="chip on" aria-pressed="true">${esc(B.name)}</button></div>
    <p class="hint">Semester ${B.semester}, section ${esc(B.section)}</p>
    <div class="lab">Your lab group</div><div class="chips" id="gr">${B.groups.map((g) => `<button class="chip ${g === group ? "on" : ""}" data-g="${g}" aria-pressed="${g === group}">Group ${g}</button>`).join("")}</div>
    <div class="lab">Your subjects</div><div class="chips" id="sb">${B.subjects.filter((s) => !s.extra).map((s) => `<button class="chip ${sel.has(s.id) ? "on" : ""}" data-s="${s.id}" aria-pressed="${sel.has(s.id)}">${esc(s.short)}</button>`).join("")}</div>
    <p class="hint">Taken from your timetable. Tap to switch off any you don't have.</p>
    <button class="btn primary" id="start">Start exploring</button></section></div>`;
  $("#gr").onclick = (e) => { const b = e.target.closest("[data-g]"); if (!b) return; group = +b.dataset.g; $$("#gr .chip").forEach((c) => { const on = c === b; c.classList.toggle("on", on); c.setAttribute("aria-pressed", on); }); };
  $("#sb").onclick = (e) => { const b = e.target.closest("[data-s]"); if (!b) return; const id = b.dataset.s; sel.has(id) ? sel.delete(id) : sel.add(id); b.classList.toggle("on", sel.has(id)); b.setAttribute("aria-pressed", sel.has(id)); };
  $("#start").onclick = () => {
    const name = $("#nm").value.trim();
    if (!name) { shake($("#nm")); $("#nm").focus(); return toast("Type your name first."); }
    if (!sel.size) return toast("Keep at least one subject on.");
    me = { name, branch: BRANCH, group, subjects: [...sel] }; save(); showApp();
  };
  $("#nm").onkeydown = (e) => { if (e.key === "Enter") $("#start").click(); };
}

/* ---------- app shell ---------- */
function showApp() {
  const todayName = new Date().toLocaleDateString("en-US", { weekday: "long" });
  day = B.days[todayName] ? todayName : "Monday";
  askSub = me.subjects[0]; askQ = null; route = null; to = null; from = "entr"; floor = "g";
  root.innerHTML = `<header class="top"><div class="in"><button class="mbtn wave" id="mas" aria-label="Wave hello">${MASCOT}</button>
    <div class="hello"><h1>Hi, ${esc(me.name)}!</h1><p>${esc(B.name)}, semester ${B.semester}, group ${me.group}</p></div>
    <button class="ghost" id="edit">Edit profile</button></div></header>
    <div class="wrap"><nav class="tabs" role="tablist"><i class="ink"></i>
      <button role="tab" data-t="0" class="on">Find a place</button><button role="tab" data-t="1">My classes</button><button role="tab" data-t="2">Ask</button></nav>
    <main id="view"></main></div>`;
  $("#mas").onclick = (e) => { const b = e.currentTarget; b.classList.remove("wave"); void b.offsetWidth; b.classList.add("wave"); };
  $("#edit").onclick = () => showWelcome(me);
  $(".tabs").onclick = (e) => { const b = e.target.closest("[data-t]"); if (b) tab(+b.dataset.t); };
  tab(0);
}
function tab(i) {
  $$(".tabs button").forEach((b, k) => { b.classList.toggle("on", k === i); b.setAttribute("aria-selected", k === i); });
  $(".tabs .ink").style.transform = `translateX(${i * 100}%)`;
  const v = $("#view"); v.className = "panel"; void v.offsetWidth;
  [viewFind, viewClasses, viewAsk][i](v);
}

/* ---------- picker sheet ---------- */
function openPicker(title, current, onPick) {
  const opener = document.activeElement;
  const el = document.createElement("div"); el.className = "sheet-wrap";
  el.innerHTML = `<div class="sheet" role="dialog" aria-modal="true" aria-label="${esc(title)}"><div class="grab"></div><h2>${esc(title)}</h2>
    ${C.floors.map((f) => `<h3>${esc(f.name)}, ${esc(f.sub)}</h3><div class="opts">${C.places.filter((p) => p.f === f.id && p.n).sort((a, b) => a.n.localeCompare(b.n, "en", { numeric: true })).map((p) =>
      `<button class="opt ${p.id === current ? "on" : ""}" data-id="${p.id}">${esc(p.n)}${p.s ? `<small>${esc(p.s)}</small>` : ""}</button>`).join("")}</div>`).join("")}</div>`;
  document.body.append(el);
  const close = () => { document.removeEventListener("keydown", key); el.classList.add("out"); setTimeout(() => { el.remove(); opener?.focus?.(); }, 200); };
  const key = (e) => { if (e.key === "Escape") close(); };
  document.addEventListener("keydown", key);
  el.onclick = (e) => { if (e.target === el) return close(); const b = e.target.closest("[data-id]"); if (b) { onPick(b.dataset.id); close(); } };
  ($(".opt.on", el) || $(".opt", el)).focus({ preventScroll: true });
  $(".opt.on", el)?.scrollIntoView({ block: "center" });
}

/* ---------- find a place ---------- */
function fieldHTML(id, lab, pid) {
  const p = N[pid];
  return `<span class="lab" style="margin:0 0 6px">${lab}</span><button class="field ${p ? "" : "empty"}" id="${id}"><div class="txt">${p ? `<span>${esc(fName(p.f))}</span>` : ""}<b>${p ? esc(pName(p)) : "Choose a place"}</b></div>${ICON.chev}</button>`;
}
function viewFind(v) {
  v.innerHTML = `<div class="card"><div id="f1"></div><div class="swapRow"><button class="swap" id="swap" aria-label="Swap start and destination">${ICON.swap}</button></div><div id="f2" style="margin-top:6px"></div>
    <button class="btn primary" id="go">Show me the way</button></div><div id="result"></div>`;
  const paint = () => { $("#f1").innerHTML = fieldHTML("fromBtn", "Where are you?", from); $("#f2").innerHTML = fieldHTML("toBtn", "Where do you want to go?", to);
    $("#fromBtn").onclick = () => openPicker("Where are you?", from, (id) => { from = id; paint(); });
    $("#toBtn").onclick = () => openPicker("Where do you want to go?", to, (id) => { to = id; paint(); }); };
  paint();
  $("#swap").onclick = (e) => { [from, to] = [to, from]; if (!from) from = "entr"; e.currentTarget.classList.toggle("flip"); paint(); };
  $("#go").onclick = go;
  if (route) renderResult();
}
async function go() {
  if (!to) { shake($("#toBtn")); return toast("Choose where you want to go."); }
  const b = $("#go"); b.classList.add("busy");
  try {
    route = await api("/api/route", { from, to });
    floor = N[route.path[0]].f; renderResult();
    $("#result").scrollIntoView({ behavior: "smooth", block: "start" });
  } catch (e) { route = null; $("#result").innerHTML = `<div class="err card in">${esc(e.message)}</div>`; }
  b.classList.remove("busy");
}
function renderResult() {
  const fl = new Set(route.path.map((id) => N[id].f));
  const legend = `<div class="map-legend">
    <span><i class="leg-from"></i>Start</span>
    <span><i class="leg-to"></i>Destination</span>
    <span><i class="leg-route"></i>Route</span>
    <span><i class="leg-lift"></i>Lift / slope</span>
  </div>`;
  $("#result").innerHTML = `<div class="card in">
    <div class="sum"><b>${esc(route.time)}</b><span>${esc(route.from)} → ${esc(route.to)}</span></div>
    ${route.friendly ? `<div class="bubble">${esc(route.friendly)}</div>` : ""}
    <div class="seg" id="floors">${C.floors.map((f) => `<button data-f="${f.id}" class="${f.id === floor ? "on" : ""}">${esc(f.name)}${fl.has(f.id) ? '<i class="dot" title="Route passes through this floor"></i>' : ""}</button>`).join("")}</div>
    <div class="mapbox" id="mapbox">${mapSVG(floor)}</div>
    ${legend}
    <p class="note" id="mnote">${esc(C.floors.find((f) => f.id === floor).note)}</p>
    <ol class="steps">${route.steps.map((s, i) => `<li class="${s.type}" style="animation-delay:${i * 90}ms">${esc(s.text)}</li>`).join("")}</ol>
  </div>`;
  $("#floors").onclick = (e) => {
    const b = e.target.closest("[data-f]"); if (!b) return; floor = b.dataset.f;
    $$("#floors button").forEach((x) => x.classList.toggle("on", x === b));
    $("#mapbox").innerHTML = mapSVG(floor);
    $("#mnote").textContent = C.floors.find((f) => f.id === floor).note;
  };
}
function wrap(t, max) { const L = []; let c = ""; for (const w of t.split(" ")) { if (c && (c + " " + w).length > max) { L.push(c); c = w; } else c = c ? c + " " + w : w; } L.push(c); return L; }
function label(p) {
  // Minimum legible font size 14; scale up by room width
  const fs = p.w < 80 ? 14 : p.w < 120 ? 17 : p.w < 160 ? 21 : 26;
  const cx = p.x + p.w / 2;
  const charsPerLine = Math.max(4, Math.floor((p.w - 10) / (fs * 0.55)));
  const subFs = Math.max(12, fs - 4);
  const subChars = Math.max(4, Math.floor((p.w - 10) / (subFs * 0.52)));
  const lines = p.n ? wrap(p.n, charsPerLine).map((t) => [t, fs, 800])
    : p.l ? p.l.split("|").map((t) => [t, 17, 600]) : [];
  if (p.s) wrap(p.s, subChars).forEach((t) => lines.push([t, subFs, 600]));
  if (!lines.length || (p.k === "shade" && !p.n)) return "";
  // Skip subtitle lines that don't fit (height guard)
  const maxLines = Math.max(1, Math.floor(p.h / (fs * 1.25)));
  const visible = lines.slice(0, maxLines);
  const lh = (l) => l[1] * 1.25;
  const total = visible.reduce((a, l) => a + lh(l), 0);
  let y = p.y + p.h / 2 - total / 2;
  const opacity = p.k === "corr" ? ' fill-opacity=".55"' : "";
  return visible.map((l) => { y += lh(l); return `<text x="${cx}" y="${y - l[1] * 0.22}" font-size="${l[1]}" font-weight="${l[2]}" text-anchor="middle"${opacity}>${esc(l[0])}</text>`; }).join("");
}
function mapSVG(fid) {
  const f = C.floors.find((x) => x.id === fid), ps = C.places.filter((p) => p.f === fid);
  const order = { corr: 0, shade: 1, open: 2, room: 3, svc: 3, arrow: 4 };
  const start = route?.path[0], end = route?.path.at(-1);
  // hatch pattern + white floor background
  let s = `<svg viewBox="0 0 ${f.w} ${f.h}" role="img" aria-label="${esc(f.name)} map">
<defs>
  <pattern id="hatch" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
    <rect width="12" height="12" fill="#E8EEF8"/>
    <line x1="0" y1="0" x2="0" y2="12" stroke="#B8C8E0" stroke-width="2.5"/>
  </pattern>
</defs>
<rect width="${f.w}" height="${f.h}" fill="#F7FAFF"/>`;
  for (const p of [...ps].sort((a, b) => order[a.k] - order[b.k])) {
    if (p.k === "arrow") {
      s += `<path d="M${p.x} ${p.y}V${p.y + p.h}m-10-12l10 12 10-12" fill="none" stroke="#14213D" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>`;
      continue;
    }
    const cls = `r ${p.k} ${p.id === start ? "from" : p.id === end ? "to" : ""}`;
    const rx = p.k === "corr" ? 0 : p.k === "svc" ? 8 : 6;
    s += `<rect class="${cls}" x="${p.x}" y="${p.y}" width="${p.w}" height="${p.h}" rx="${rx}"/>`;
  }
  let lab = ""; for (const p of ps) if (p.k !== "arrow") lab += label(p);
  if (route) {
    const segs = []; let cur = null;
    for (const id of route.path) {
      const n = N[id];
      if (n.f === fid) (cur ||= []).push(`${n.cx},${n.cy}`);
      else if (cur) { segs.push(cur); cur = null; }
    }
    if (cur) segs.push(cur);
    for (const sg of segs) if (sg.length > 1) s += `<polyline class="rt" pathLength="1" points="${sg.join(" ")}"/>`;
    route.path.forEach((id, i) => {
      const n = N[id];
      if (n.f !== fid || !n.n) return;
      const isCross = [route.path[i - 1], route.path[i + 1]].some((x) => x && N[x].f !== fid);
      const col = id === start ? "#12B5A6" : id === end ? "#FF6B5E" : isCross ? "#7B5CFA" : null;
      if (col) s += `<circle class="pulse" cx="${n.cx}" cy="${n.cy}" r="12" stroke="${col}"/><circle cx="${n.cx}" cy="${n.cy}" r="9" fill="${col}" stroke="#fff" stroke-width="2.5"/>`;
    });
  }
  return s + lab + "</svg>";
}

/* ---------- my classes ---------- */
function slotTimes(p, span) { const t = Object.fromEntries(B.periods.map((x) => [x[0], x])); return [t[p][1], t[p + span - 1][2]]; }
function viewClasses(v) {
  const todayName = new Date().toLocaleDateString("en-US", { weekday: "long" });
  const rows = (B.days[day] || []).filter(([, , id, g]) => (!g || g === me.group) && (me.subjects.includes(id) || subj(id).extra)).sort((a, b) => a[0] - b[0]);
  let html = "", lunch = false;
  rows.forEach(([p, span, id], i) => {
    if (!lunch && p > 4) { html += `<div class="lunch">Lunch break, 1:00 to 2:00</div>`; lunch = true; }
    const s = subj(id), [a, b] = slotTimes(p, span);
    html += `<div class="slot" style="animation-delay:${i * 60}ms"><div class="t">${a}<small>to ${b}</small></div><div class="b"><h3>${esc(s.short)}${s.type.startsWith("Lab") ? '<span class="tag">Lab</span>' : ""}</h3>
      <p>${esc(s.name)}${s.code ? `, ${esc(s.code)}` : ""}</p><p>${esc(s.teacher || "Coordinator activity")}, ${esc(s.venue)}</p>
      ${s.where ? `<button class="go" data-w="${s.where}">Take me there</button>` : ""}</div></div>`;
  });
  v.innerHTML = `<div class="card"><div class="days" id="days">${Object.keys(B.days).map((d) => `<button class="chip ${d === day ? "on" : ""}" data-d="${d}">${d.slice(0, 3)}${d === todayName ? '<i class="today"></i>' : ""}</button>`).join("")}</div>
    ${html || '<p class="hint">No classes on this day.</p>'}</div>
    <div class="card"><h2>Your subjects</h2>${me.subjects.map((id) => { const s = subj(id); return `<div class="subj"><h3>${esc(s.name)}</h3><p>${esc(s.code)}, ${esc(s.teacher)}</p><p>${esc(s.type)}, ${/^\d/.test(s.credits) ? esc(s.credits) + " credits" : "no credits"}, ${esc(s.marks)}</p></div>`; }).join("")}</div>`;
  $("#days").onclick = (e) => { const b = e.target.closest("[data-d]"); if (b) { day = b.dataset.d; viewClasses(v); } };
  v.onclick = (e) => { const b = e.target.closest("[data-w]"); if (!b) return; if (b.dataset.w === from) return toast("You are already there."); to = b.dataset.w; tab(0); go(); };
}

/* ---------- ask ---------- */
function viewAsk(v) {
  v.innerHTML = `<div class="card"><div class="lab">Which subject?</div><div class="chips" id="as">${me.subjects.map((id) => `<button class="chip ${id === askSub ? "on" : ""}" data-s="${id}">${esc(subj(id).short)}</button>`).join("")}</div>
    <div class="lab">What do you want to know?</div><div class="chips" id="aq">${A.questions.map((q) => `<button class="chip ${q.id === askQ ? "on" : ""}" data-q="${q.id}">${esc(q.t)}</button>`).join("")}</div>
    <button class="btn primary" id="ask">Ask Helping Hand</button><div id="ans"></div></div>`;
  const pickOne = (sel, attr, set) => ($(sel).onclick = (e) => { const b = e.target.closest(`[data-${attr}]`); if (!b) return; set(b.dataset[attr]); $$(`${sel} .chip`).forEach((c) => c.classList.toggle("on", c === b)); });
  pickOne("#as", "s", (x) => (askSub = x)); pickOne("#aq", "q", (x) => (askQ = x));
  $("#ask").onclick = async () => {
    if (!askQ) { shake($("#aq")); return toast("Choose what you want to know."); }
    const b = $("#ask"); b.classList.add("busy"); $("#ans").innerHTML = `<div class="ans typing"><i></i><i></i><i></i></div>`;
    try { const d = await api("/api/ask", { branch: BRANCH, subject: askSub, question: askQ, group: me.group }); $("#ans").innerHTML = `<div class="ans">${esc(d.answer)}</div>`; }
    catch (e) { $("#ans").innerHTML = `<div class="ans err">${esc(e.message)}</div>`; }
    b.classList.remove("busy");
  };
}
init();
