const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const root = $("#root");

function mascotSVG(mood = "wave", extra = "") {
  const baseFace = `
    <circle cx="84" cy="150" r="8" fill="#14213D"/><circle cx="120" cy="150" r="8" fill="#14213D"/>
    <circle cx="87" cy="147" r="3" fill="#fff"/><circle cx="123" cy="147" r="3" fill="#fff"/>
    <path d="M88 168 Q102 186 116 168" fill="none" stroke="#14213D" stroke-width="5" stroke-linecap="round"/>
    <circle cx="70" cy="168" r="8" fill="#FF8FA3" opacity=".8"/><circle cx="134" cy="168" r="8" fill="#FF8FA3" opacity=".8"/>
  `;

  if (mood === "point") {
    return `<svg class="mascot mascot-point ${extra}" viewBox="-10 -25 220 245" role="img" aria-label="Helping Hand pointing">
      <path d="M58 14 L42 -4 M88 -5 L88 -22 M118 14 L134 -4" stroke="#14213D" stroke-width="5" stroke-linecap="round"/>
      <g stroke="#14213D" stroke-width="5" stroke-linejoin="round" fill="#FFC83D">
        <rect x="98" y="76" width="22" height="52" rx="11"/>
        <rect x="118" y="82" width="22" height="46" rx="11"/>
        <rect x="138" y="92" width="20" height="38" rx="10"/>
        <rect x="76" y="2" width="24" height="128" rx="12"/>
        <g transform="rotate(-38 42 150)"><rect x="30" y="118" width="24" height="70" rx="12"/></g>
        <rect x="44" y="100" width="112" height="104" rx="44"/>
      </g>
      ${baseFace}
    </svg>`;
  }

  if (mood === "think") {
    return `<svg class="mascot mascot-think ${extra}" viewBox="-10 -30 230 250" role="img" aria-label="Helping Hand thinking">
      <g stroke="#14213D" stroke-width="4.5" fill="#fff">
        <circle cx="160" cy="46" r="6"/>
        <circle cx="174" cy="30" r="10"/>
        <ellipse cx="186" cy="2" rx="28" ry="18"/>
      </g>
      <g stroke="#14213D" stroke-width="5" stroke-linejoin="round" fill="#FFC83D">
        <rect x="54" y="38" width="22" height="92" rx="11"/><rect x="78" y="22" width="22" height="108" rx="11"/>
        <rect x="102" y="30" width="22" height="100" rx="11"/><rect x="126" y="56" width="20" height="76" rx="10"/>
        <g transform="rotate(-40 42 150)"><rect x="30" y="118" width="24" height="70" rx="12"/></g>
        <rect x="44" y="100" width="112" height="104" rx="44"/>
      </g>
      <circle cx="84" cy="146" r="8" fill="#14213D"/><circle cx="120" cy="146" r="8" fill="#14213D"/>
      <circle cx="87" cy="143" r="3" fill="#fff"/><circle cx="123" cy="143" r="3" fill="#fff"/>
      <path d="M92 168 Q102 178 112 168" fill="none" stroke="#14213D" stroke-width="5" stroke-linecap="round"/>
      <circle cx="70" cy="168" r="8" fill="#FF8FA3" opacity=".8"/><circle cx="134" cy="168" r="8" fill="#FF8FA3" opacity=".8"/>
    </svg>`;
  }

  if (mood === "thumbsup") {
    return `<svg class="mascot mascot-thumbsup ${extra}" viewBox="-15 -25 225 245" role="img" aria-label="Helping Hand thumbs up">
      <path d="M38 10 L24 -4 M68 -2 L68 -18 M98 12 L112 -2" stroke="#14213D" stroke-width="5" stroke-linecap="round"/>
      <g stroke="#14213D" stroke-width="5" stroke-linejoin="round" fill="#FFC83D">
        <rect x="74" y="74" width="24" height="54" rx="12"/>
        <rect x="96" y="78" width="24" height="50" rx="12"/>
        <rect x="118" y="84" width="22" height="44" rx="11"/>
        <rect x="138" y="92" width="20" height="38" rx="10"/>
        <rect x="56" y="14" width="26" height="110" rx="13"/>
        <rect x="44" y="100" width="114" height="104" rx="44"/>
      </g>
      <circle cx="84" cy="148" r="8" fill="#14213D"/><circle cx="120" cy="148" r="8" fill="#14213D"/>
      <circle cx="87" cy="145" r="3" fill="#fff"/><circle cx="123" cy="145" r="3" fill="#fff"/>
      <path d="M85 166 Q102 192 119 166" fill="none" stroke="#14213D" stroke-width="5" stroke-linecap="round"/>
      <circle cx="68" cy="166" r="8" fill="#FF8FA3" opacity=".85"/><circle cx="136" cy="166" r="8" fill="#FF8FA3" opacity=".85"/>
    </svg>`;
  }

  // Default: Wave
  return `<svg class="mascot mascot-wave ${extra}" viewBox="-10 -15 225 235" role="img" aria-label="Helping Hand mascot">
    <path d="M174 38 C186 52 188 70 184 84" fill="none" stroke="#14213D" stroke-width="5" stroke-linecap="round"/>
    <path d="M190 28 C206 48 208 72 202 96" fill="none" stroke="#14213D" stroke-width="5" stroke-linecap="round"/>
    <g stroke="#14213D" stroke-width="5" stroke-linejoin="round" fill="#FFC83D">
      <rect x="54" y="38" width="22" height="92" rx="11"/><rect x="78" y="22" width="22" height="108" rx="11"/>
      <rect x="102" y="30" width="22" height="100" rx="11"/><rect x="126" y="56" width="20" height="76" rx="10"/>
      <g transform="rotate(-40 42 150)"><rect x="30" y="118" width="24" height="70" rx="12"/></g>
      <rect x="44" y="100" width="112" height="104" rx="44"/>
    </g>
    ${baseFace}
  </svg>`;
}

const MASCOT = mascotSVG("wave");
const ICON = {
  chev: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>`,
  swap: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 4v16M4 16l4 4 4-4M16 20V4M12 8l4-4 4 4"/></svg>`,
  bell: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
  bellOn: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
  speak: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`,
  stop: `<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  starOn: `<svg viewBox="0 0 24 24" fill="#FFC83D" stroke="#D9A21C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
};

let C, A, B, N = {}, me = null, EVENTS = [];
let from = "entr", to = null, floor = "g", route = null, day = "Monday", askSub = null, askQ = null;
let currentLang = "en"; // "en" | "hi"

const api = async (url, body) => {
  const r = await fetch(url, body ? { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) } : undefined);
  const d = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(d.error || "Something went wrong. Please try again.");
  return d;
};

// User Profile & Registry Storage with Cloud / Server Synchronization
let isServerOnline = true;
const getUsers = () => {
  try {
    return JSON.parse(localStorage.getItem("hh_users")) || {};
  } catch {
    return {};
  }
};

const saveUsers = (users) => {
  try {
    localStorage.setItem("hh_users", JSON.stringify(users));
  } catch {}
};

const saveMe = (user) => {
  me = user;
  if (!me.interested) me.interested = { classes: [], events: [] };
  if (!me.reminders) me.reminders = [];
  if (!me.attendance) me.attendance = {};
  if (!me.streak) me.streak = 1;
  try {
    localStorage.setItem("hh_me", JSON.stringify(me));
    if (me.username) {
      const users = getUsers();
      users[me.username.toLowerCase()] = me;
      saveUsers(users);
      // Background sync to server & Supabase
      api("/api/user", me).catch(() => {});
    }
  } catch {}
};

const loadMe = () => {
  try {
    const data = JSON.parse(localStorage.getItem("hh_me"));
    if (data && !data.interested) data.interested = { classes: [], events: [] };
    if (data && !data.reminders) data.reminders = [];
    if (data && !data.attendance) data.attendance = {};
    return data;
  } catch {
    return null;
  }
};

// ─── Sound Effects (Web Audio API Synthesizer) ─────────────────────────
let audioCtx = null;
let isSoundMuted = localStorage.getItem("hh_sound_muted") === "true";

function toggleSound() {
  isSoundMuted = !isSoundMuted;
  localStorage.setItem("hh_sound_muted", isSoundMuted);
  playSynthSound(isSoundMuted ? "click" : "success");
  toast(isSoundMuted ? "Sound muted 🔇" : "Sound enabled 🔊");
  const btn = $("#btnSound");
  if (btn) btn.innerHTML = isSoundMuted ? "🔇 Muted" : "🔊 Sound";
}

function playSynthSound(type = "click") {
  if (isSoundMuted) return;
  try {
    const AudioCtor = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtor) return;
    audioCtx = audioCtx || new AudioCtor();
    if (audioCtx.state === "suspended") audioCtx.resume();
    const now = audioCtx.currentTime;

    if (type === "click") {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.type = "sine";
      osc.frequency.setValueAtTime(480, now);
      osc.frequency.exponentialRampToValueAtTime(720, now + 0.04);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
      osc.start(now);
      osc.stop(now + 0.04);
    } else if (type === "success") {
      [523.25, 659.25, 783.99].forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, now + idx * 0.07);
        gain.gain.setValueAtTime(0.12, now + idx * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.22);
        osc.start(now + idx * 0.07);
        osc.stop(now + idx * 0.07 + 0.22);
      });
    } else if (type === "celebrate") {
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
        gain.gain.setValueAtTime(0.14, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.35);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.35);
      });
    }
  } catch (e) {}
}

// ─── Haptic Feedback ──────────────────────────────────────────────────
function haptic(pattern = [15]) {
  try {
    if (navigator.vibrate) navigator.vibrate(pattern);
  } catch (e) {}
}

// ─── Lightweight Canvas Confetti Engine ───────────────────────────────
let confettiActive = false;
function launchConfetti(durationMs = 2400) {
  const canvas = document.getElementById("confetti-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ["#FFC83D", "#12B5A6", "#FF6B5E", "#7B5CFA", "#FF6EB4", "#38BDF8", "#A3E635"];
  const particles = Array.from({ length: 65 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * -canvas.height * 0.3,
    size: Math.random() * 8 + 4,
    color: colors[Math.floor(Math.random() * colors.length)],
    speedX: (Math.random() - 0.5) * 6,
    speedY: Math.random() * 4 + 3,
    rot: Math.random() * 360,
    rotSpeed: (Math.random() - 0.5) * 10
  }));

  confettiActive = true;
  const startTime = Date.now();

  function render() {
    if (!confettiActive) return;
    const elapsed = Date.now() - startTime;
    if (elapsed > durationMs) {
      confettiActive = false;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const p of particles) {
      p.x += p.speedX;
      p.y += p.speedY;
      p.rot += p.rotSpeed;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rot * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.4);
      ctx.restore();
    }
    requestAnimationFrame(render);
  }
  render();
}

// ─── Dark Mode Toggle ─────────────────────────────────────────────────
function initDarkMode() {
  const isDark = localStorage.getItem("hh_dark_mode") === "true";
  document.body.classList.toggle("dark", isDark);
}
function toggleDarkMode() {
  const willBeDark = !document.body.classList.contains("dark");
  document.body.classList.toggle("dark", willBeDark);
  localStorage.setItem("hh_dark_mode", willBeDark);
  playSynthSound("click");
  haptic([12]);
  toast(willBeDark ? "Dark mode on 🌙" : "Light mode on ☀️");
  const btn = $("#btnDark");
  if (btn) btn.innerHTML = willBeDark ? "☀️ Light" : "🌙 Dark";
}

// ─── Time-Aware Hinglish Greetings ────────────────────────────────────
function getTimeGreeting(name) {
  const hr = new Date().getHours();
  const cleanName = (name || "Dost").split(" ")[0];
  if (hr >= 5 && hr < 12) {
    return {
      title: `Shubh Prabhat, ${cleanName}! ☀️`,
      wish: "Ready for your first lecture today?"
    };
  }
  if (hr >= 12 && hr < 17) {
    return {
      title: `Good Afternoon, ${cleanName}! 🌤️`,
      wish: "Lunch ho gaya ya agla lab session hai?"
    };
  }
  if (hr >= 17 && hr < 21) {
    return {
      title: `Good Evening, ${cleanName}! 🌆`,
      wish: "Aaj ki classes aur campus day kaisa raha?"
    };
  }
  return {
    title: `Late Night Grind, ${cleanName}! 🌙`,
    wish: "Paani peelo aur aaram se padho dost!"
  };
}

// ─── Campus Streak Tracker ───────────────────────────────────────────
function updateStreak(user) {
  if (!user) return;
  const todayStr = new Date().toISOString().slice(0, 10);
  if (!user.streak) user.streak = 1;
  if (!user.lastVisitDate) {
    user.lastVisitDate = todayStr;
  } else if (user.lastVisitDate !== todayStr) {
    const prev = new Date(user.lastVisitDate);
    const curr = new Date(todayStr);
    const diffDays = Math.round((curr - prev) / (1000 * 60 * 60 * 24));
    if (diffDays === 1) {
      user.streak = (user.streak || 0) + 1;
    } else if (diffDays > 1) {
      user.streak = 1;
    }
    user.lastVisitDate = todayStr;
    saveMe(user);
  }
}

// ─── Daily College Quotes (Humorous & Encouraging) ─────────────────────
const CAMPUS_QUOTES = [
  { q: "Theory me 40 marks, practical me 60 marks, aur campus walk me 5000 steps! 🚶‍♂️", a: "Daily College Fact" },
  { q: "Assignment deadline ke 5 minute pehle sabse tezi aati hai! ⚡", a: "Hostel Legend" },
  { q: "Engineering is 10% coding, 20% maths, aur 70% agla classroom dhoondhna! 🗺️", a: "AITD Senior" },
  { q: "Chai + canteen samosa = 100% attendance motivation! ☕", a: "Canteen Vibes" },
  { q: "Attendance 75% se upar rakho, exam time sukoon se bitega! 📚", a: "Faculty Advice" },
  { q: "Jab rasta na samjhe, toh Helping Hand se pooch lo! 🤖✨", a: "AITD Companion" }
];
function getDailyQuote() {
  const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
  return CAMPUS_QUOTES[dayOfYear % CAMPUS_QUOTES.length];
}

// ─── Pomodoro Focus Timer State ───────────────────────────────────────
let pomodoroSeconds = 25 * 60;
let pomodoroTimerId = null;
let pomodoroRunning = false;
let pomodoroMode = "study"; // "study" | "break"
let showPomodoroWidget = false;

function togglePomodoro() {
  showPomodoroWidget = !showPomodoroWidget;
  const pCard = $("#pomodoroCard");
  if (pCard) {
    pCard.style.display = showPomodoroWidget ? "block" : "none";
    if (showPomodoroWidget) pCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

function tickPomodoro() {
  if (pomodoroSeconds > 0) {
    pomodoroSeconds--;
    updatePomodoroDisplay();
  } else {
    clearInterval(pomodoroTimerId);
    pomodoroRunning = false;
    launchConfetti();
    playSynthSound("celebrate");
    haptic([100, 100, 100]);
    if (pomodoroMode === "study") {
      pomodoroMode = "break";
      pomodoroSeconds = 5 * 60;
      toast("Great study session! 25 min done 🎉 Chai break time ☕");
    } else {
      pomodoroMode = "study";
      pomodoroSeconds = 25 * 60;
      toast("Break over! Ready for next 25 min focus sprint 📚");
    }
    updatePomodoroDisplay();
  }
}

function updatePomodoroDisplay() {
  const digits = $("#pomodoroDigits");
  const sub = $("#pomodoroSub");
  if (!digits) return;
  const m = String(Math.floor(pomodoroSeconds / 60)).padStart(2, "0");
  const s = String(pomodoroSeconds % 60).padStart(2, "0");
  digits.textContent = `${m}:${s}`;
  if (sub) sub.textContent = pomodoroMode === "study" ? "🎯 25-Min Study Sprint" : "☕ 5-Min Chai Break";
}

let toastT;
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastT);
  toastT = setTimeout(() => t.classList.remove("show"), 2800);
}
function shake(el) {
  if (!el) return;
  el.classList.remove("shake");
  void el.offsetWidth;
  el.classList.add("shake");
}

const subj = (id) => B.subjects.find((s) => s.id === id) || { id, short: id, name: id, type: "Course", teacher: "Faculty", venue: "Classroom" };
const pName = (p) => p.n + (p.s ? ` (${p.s})` : "");
const fName = (id) => C.floors.find((f) => f.id === id)?.name || id;

// Client Dijkstra for Instant 1-Tap Amenities
function clientShortestDistance(startId, candidates) {
  if (!startId || !candidates || !candidates.length) return null;
  const nodes = Object.keys(N);
  const adj = Object.fromEntries(nodes.map(id => [id, []]));
  for (const [a, b, , secs] of C.edges) {
    if (!N[a] || !N[b]) continue;
    const s = secs ?? Math.max(4, Math.round(Math.hypot(N[a].cx - N[b].cx, N[a].cy - N[b].cy) * 0.06));
    adj[a].push({ to: b, secs: s });
    adj[b].push({ to: a, secs: s });
  }

  const dist = {}, todo = new Set(nodes);
  for (const id of nodes) dist[id] = Infinity;
  dist[startId] = 0;

  while (todo.size) {
    let u = null;
    for (const id of todo) if (u === null || dist[id] < dist[u]) u = id;
    if (dist[u] === Infinity) break;
    todo.delete(u);
    for (const e of (adj[u] || [])) {
      if (dist[u] + e.secs < dist[e.to]) {
        dist[e.to] = dist[u] + e.secs;
      }
    }
  }

  let best = null, minSecs = Infinity;
  for (const c of candidates) {
    if (dist[c] < minSecs) {
      minSecs = dist[c];
      best = c;
    }
  }
  return best;
}

// Native Speech Synthesis
let synth = window.speechSynthesis;
let speechUtterance = null;
let isSpeaking = false;

function speakText(text, onEnd) {
  if (!synth) {
    toast("Speech synthesis is not supported on this browser.");
    return;
  }
  synth.cancel();
  if (!text) return;
  speechUtterance = new SpeechSynthesisUtterance(text);
  speechUtterance.rate = 0.95;
  speechUtterance.pitch = 1.05;
  speechUtterance.onend = () => {
    isSpeaking = false;
    onEnd?.();
  };
  speechUtterance.onerror = () => {
    isSpeaking = false;
    onEnd?.();
  };
  isSpeaking = true;
  synth.speak(speechUtterance);
}

function stopSpeaking() {
  if (synth) {
    synth.cancel();
    isSpeaking = false;
  }
}

// Notifications & Reminders
async function setupReminder(itemTitle, timeNotice) {
  if (!("Notification" in window)) {
    toast(`Reminder saved for ${itemTitle}!`);
    return;
  }
  if (Notification.permission === "granted") {
    new Notification("Helping Hand Reminder 🔔", {
      body: `Reminder set: ${itemTitle} (${timeNotice})`
    });
    toast(`Alert enabled for ${itemTitle}!`);
  } else if (Notification.permission !== "denied") {
    const perm = await Notification.requestPermission();
    if (perm === "granted") {
      new Notification("Helping Hand Reminder 🔔", {
        body: `Alerts activated! We'll notify you for ${itemTitle}.`
      });
      toast(`Notifications enabled for ${itemTitle}!`);
    } else {
      toast(`Reminder saved in your profile for ${itemTitle}.`);
    }
  } else {
    toast(`Reminder saved for ${itemTitle}.`);
  }
}

async function init() {
  initDarkMode();

  // Setup mobile swipe gestures to switch between tabs
  let touchStartX = 0;
  let touchStartY = 0;
  window.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });
  window.addEventListener("touchend", (e) => {
    if (!me) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX;
    const deltaY = e.changedTouches[0].clientY - touchStartY;
    if (Math.abs(deltaX) > 65 && Math.abs(deltaY) < 55) {
      const tabsCount = 5;
      if (deltaX < 0 && currentTabIdx < tabsCount - 1) {
        tab(currentTabIdx + 1);
      } else if (deltaX > 0 && currentTabIdx > 0) {
        tab(currentTabIdx - 1);
      }
    }
  }, { passive: true });

  try {
    const [cData, aData, eData, uData] = await Promise.all([
      api("/api/campus"),
      api("/api/academics"),
      api("/api/events").catch(() => []),
      api("/api/users").catch(() => ({ users: {} }))
    ]);
    C = cData;
    A = aData;
    EVENTS = eData || [];

    // Merge server users with local users
    if (uData && uData.users) {
      const localUsers = getUsers();
      const merged = { ...localUsers, ...uData.users };
      saveUsers(merged);
    }
  } catch (e) {
    root.innerHTML = `<div class="wrap"><div class="card err">Could not load campus data. Please ensure the server is running (<b>npm start</b>) and refresh.</div></div>`;
    return;
  }

  for (const p of C.places) if (p.n) N[p.id] = { ...p, cx: p.x + p.w / 2, cy: p.y + p.h / 2 };
  for (const j of C.junctions) N[j.id] = { ...j, cx: j.x, cy: j.y };

  me = loadMe();
  if (me && me.name && me.branch && A.branches[me.branch]) {
    // If username missing on older sessions, synthesize it
    if (!me.username) {
      me.username = me.name.toLowerCase().replace(/\s+/g, "");
      saveMe(me);
    }
    B = A.branches[me.branch];
    showApp();
  } else {
    const existingUsers = Object.keys(getUsers());
    showWelcome(existingUsers.length > 0 ? "login" : "signup");
  }
}

/* ---------- Welcome / Login & Sign Up Screen ---------- */
function showWelcome(initialMode = "login") {
  let authMode = initialMode; // "login" | "signup"
  const users = getUsers();
  const branchKeys = Object.keys(A.branches);
  let chosenBranch = branchKeys[0];
  let currentB = A.branches[chosenBranch];
  let chosenGroup = 1;
  let selSubjects = new Set(currentB.subjects.filter((s) => !s.extra).map((s) => s.id));

  function render() {
    currentB = A.branches[chosenBranch];
    const userList = Object.values(users);

    root.innerHTML = `
      <div class="wrap">
        <section class="card welcome in wave">
          <div class="mascot-lg">${MASCOT}</div>
          
          <div class="auth-toggle">
            <button class="auth-toggle-btn ${authMode === "login" ? "on" : ""}" id="btnModeLogin">Sign In / Log In</button>
            <button class="auth-toggle-btn ${authMode === "signup" ? "on" : ""}" id="btnModeSignup">New Student / Sign Up</button>
          </div>

          ${authMode === "login" ? `
            <div class="welcome-emoji-float">🏫 📚 🗺️ ✨</div>
            <h1>Welcome Back!</h1>
            <p>Apna username ya naam enter karo to access your schedule & campus map.</p>

            <div class="auth-box">
              <label for="loginUser">Username or Full Name</label>
              <input id="loginUser" type="text" autocomplete="username" placeholder="e.g. shivang ya Shivang Roy" value="">

              <label for="loginPass" style="margin-top:12px">Passcode (agar set kiya ho)</label>
              <input id="loginPass" type="password" autocomplete="current-password" placeholder="Passcode (leave blank if none)">
            </div>

            <button class="btn primary" id="doLogin">Log In ➔</button>
            <p class="hint" style="text-align:center; margin-top:14px;">
              Pehli baar aaye ho? <a href="#" id="toSignup" class="auth-link">Naya Student Profile banao ➔</a>
            </p>
            <p class="hint" style="text-align:center; margin-top:8px;">
              Direct explore karna hai? <a href="#" id="doDemo" class="auth-link" style="color:var(--mint); font-weight:700;">🚀 Guest Demo Mode</a>
            </p>
          ` : `
            <div class="welcome-emoji-float">🏫 📚 🗺️ ✨</div>
            <h1>Create Student Profile</h1>
            <p>Apna branch aur subjects chuno. Timetable aur map instantly load ho jayega!</p>

            <div class="auth-box">
              <label for="nm">Your Full Name</label>
              <input id="nm" type="text" autocomplete="name" placeholder="e.g. Shivang Roy">

              <label for="usr" style="margin-top:12px">Choose a Username</label>
              <input id="usr" type="text" autocomplete="username" placeholder="e.g. shivang (login karne ke liye)">

              <label for="pwd" style="margin-top:12px">Passcode (optional)</label>
              <input id="pwd" type="password" autocomplete="new-password" placeholder="Set a PIN or password (or leave blank)">
            </div>

            <div class="lab">Select Your Branch (All 7 Sections)</div>
            <div class="chips" id="brPicker">
              ${branchKeys.map((k) => `<button class="chip ${k === chosenBranch ? "on" : ""}" data-b="${k}" aria-pressed="${k === chosenBranch}">${esc(A.branches[k].name)}</button>`).join("")}
            </div>
            <p class="hint">Section: <b>${esc(currentB.section)}</b> · Classroom: <b>${esc(currentB.classroom)}</b></p>

            <div class="lab">Your Lab Group</div>
            <div class="chips" id="gr">
              ${currentB.groups.map((g) => `<button class="chip ${g === chosenGroup ? "on" : ""}" data-g="${g}" aria-pressed="${g === chosenGroup}">Group ${g}</button>`).join("")}
            </div>

            <div class="lab">Your Registered Subjects</div>
            <div class="chips" id="sb">
              ${currentB.subjects.filter((s) => !s.extra).map((s) => `<button class="chip ${selSubjects.has(s.id) ? "on" : ""}" data-s="${s.id}" aria-pressed="${selSubjects.has(s.id)}">${esc(s.short)}</button>`).join("")}
            </div>
            <p class="hint">Tap any subject chip to include or exclude it from your schedule.</p>

            <button class="btn primary" id="doSignup">Create Account & Start Exploring 🚀</button>
            <p class="hint" style="text-align:center; margin-top:14px;">
              Already registered? <a href="#" id="toLogin" class="auth-link">Sign In instead</a>
            </p>
          `}
        </section>
      </div>`;

    // Mode toggles
    $("#btnModeLogin")?.addEventListener("click", () => { authMode = "login"; render(); });
    $("#btnModeSignup")?.addEventListener("click", () => { authMode = "signup"; render(); });
    $("#toSignup")?.addEventListener("click", (e) => { e.preventDefault(); authMode = "signup"; render(); });
    $("#toLogin")?.addEventListener("click", (e) => { e.preventDefault(); authMode = "login"; render(); });

    // Helper for robust user lookup
    function lookupUser(query) {
      if (!query) return null;
      const q = query.trim().toLowerCase();
      const qNoSpace = q.replace(/\s+/g, "");
      const all = getUsers();
      if (all[q]) return all[q];
      if (all[qNoSpace]) return all[qNoSpace];
      for (const u of Object.values(all)) {
        if (u.username && u.username.toLowerCase() === q) return u;
        if (u.username && u.username.toLowerCase().replace(/\s+/g, "") === qNoSpace) return u;
        if (u.name && u.name.toLowerCase() === q) return u;
        if (u.name && u.name.toLowerCase().replace(/\s+/g, "") === qNoSpace) return u;
        if (u.name && u.name.toLowerCase().includes(q)) return u;
      }
      return null;
    }

    // Quick chip 1-tap login
    $("#quickChips")?.addEventListener("click", (e) => {
      const b = e.target.closest("[data-quick]");
      if (!b) return;
      const uKey = b.dataset.quick;
      const existing = lookupUser(uKey);
      if (existing) {
        if (!existing.password) {
          // Instant 1-tap login if no password
          saveMe(existing);
          B = A.branches[me.branch];
          launchConfetti(1800);
          playSynthSound("success");
          haptic([20, 30]);
          toast(`Welcome back, ${me.name}! 👋 Ready for classes!`);
          showApp();
          return;
        }
        const input = $("#loginUser");
        if (input) input.value = existing.username;
        const pass = $("#loginPass");
        if (pass) {
          pass.focus();
          toast(`Hi ${existing.name}! Passcode enter karo to unlock 🔑`);
        }
      }
    });

    // 1-Tap Guest Demo Mode
    $("#doDemo")?.addEventListener("click", (e) => {
      e.preventDefault();
      const demoUser = lookupUser("shivang") || {
        username: "demo_student",
        name: "Demo Student",
        password: "",
        branch: "el",
        group: 1,
        subjects: A.branches["el"] ? A.branches["el"].subjects.filter(s => !s.extra).map(s => s.id) : ["maths1"],
        streak: 1,
        attendance: {},
        interested: { classes: [], events: [] }
      };
      saveMe(demoUser);
      B = A.branches[me.branch];
      launchConfetti(1600);
      playSynthSound("success");
      toast(`Welcome, ${demoUser.name}! Exploring in Demo Mode 🚀`);
      showApp();
    });

    // Login Action with robust matching
    $("#doLogin")?.addEventListener("click", () => {
      const uInput = $("#loginUser")?.value.trim();
      const pInput = $("#loginPass")?.value.trim();
      if (!uInput) {
        shake($("#loginUser"));
        haptic([40]);
        return toast("Please enter your username or name.");
      }
      const existing = lookupUser(uInput);
      if (!existing) {
        shake($("#loginUser"));
        haptic([40, 40]);
        return toast("Account nahi mila dost! 'New Student' tab se 5 second me bana lo 🚀");
      }
      if (existing.password && existing.password !== pInput) {
        shake($("#loginPass"));
        haptic([50]);
        return toast("Galat passcode dost! Ek baar fir try karo 🔑");
      }
      saveMe(existing);
      B = A.branches[me.branch];
      launchConfetti(2000);
      playSynthSound("success");
      haptic([20, 30]);
      toast(`Welcome back, ${me.name}! 👋 Ready for campus!`);
      showApp();
    });

    $("#loginUser")?.addEventListener("keydown", (e) => { if (e.key === "Enter") $("#doLogin")?.click(); });
    $("#loginPass")?.addEventListener("keydown", (e) => { if (e.key === "Enter") $("#doLogin")?.click(); });

    // Sign Up Branch/Group/Subject handlers
    $("#brPicker")?.addEventListener("click", (e) => {
      const b = e.target.closest("[data-b]");
      if (!b) return;
      chosenBranch = b.dataset.b;
      currentB = A.branches[chosenBranch];
      selSubjects = new Set(currentB.subjects.filter((s) => !s.extra).map((s) => s.id));
      render();
    });

    $("#gr")?.addEventListener("click", (e) => {
      const b = e.target.closest("[data-g]");
      if (!b) return;
      chosenGroup = +b.dataset.g;
      $$("#gr .chip").forEach((c) => {
        const on = c === b;
        c.classList.toggle("on", on);
        c.setAttribute("aria-pressed", on);
      });
    });

    $("#sb")?.addEventListener("click", (e) => {
      const b = e.target.closest("[data-s]");
      if (!b) return;
      const id = b.dataset.s;
      selSubjects.has(id) ? selSubjects.delete(id) : selSubjects.add(id);
      b.classList.toggle("on", selSubjects.has(id));
      b.setAttribute("aria-pressed", selSubjects.has(id));
    });

    // Sign Up Action
    $("#doSignup")?.addEventListener("click", () => {
      const name = $("#nm")?.value.trim();
      let username = $("#usr")?.value.trim().toLowerCase();
      const password = $("#pwd")?.value.trim() || "";

      if (!name) {
        shake($("#nm"));
        $("#nm")?.focus();
        return toast("Please enter your full name.");
      }
      if (!username) {
        username = name.toLowerCase().replace(/\s+/g, "");
      }
      if (!selSubjects.size) {
        return toast("Keep at least one subject selected.");
      }

      const newProfile = {
        username,
        name,
        password,
        branch: chosenBranch,
        group: chosenGroup,
        subjects: [...selSubjects],
        reminders: [],
        interested: { classes: [], events: [] }
      };

      saveMe(newProfile);
      B = A.branches[chosenBranch];
      toast(`Account created for ${name}! 🚀`);
      showApp();
    });

    $("#nm")?.addEventListener("keydown", (e) => { if (e.key === "Enter") $("#doSignup")?.click(); });
  }

  render();
}

/* ---------- Edit Profile Modal ---------- */
function showEditProfile() {
  const opener = document.activeElement;
  const el = document.createElement("div");
  el.className = "sheet-wrap";
  
  const branchKeys = Object.keys(A.branches);
  let editBranch = me.branch;
  let editGroup = me.group;
  let currentB = A.branches[editBranch];
  let editSubjects = new Set(me.subjects);

  function renderSheet() {
    currentB = A.branches[editBranch];
    el.innerHTML = `
      <div class="sheet" role="dialog" aria-modal="true" aria-label="Edit Profile">
        <div class="grab"></div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <h2>Student Profile</h2>
          <button class="btn-logout" id="doLogout">🚪 Log Out</button>
        </div>
        <p class="hint">Logged in as <b>@${esc(me.username || "student")}</b>. Update your details below:</p>

        <div class="auth-box">
          <label for="editName">Full Name</label>
          <input id="editName" type="text" value="${esc(me.name)}">

          <label for="editPass" style="margin-top:12px">Passcode</label>
          <input id="editPass" type="password" placeholder="Passcode (optional)" value="${esc(me.password || "")}">
        </div>

        <div class="lab">Branch (All 7 Sections)</div>
        <div class="chips" id="editBrPicker">
          ${branchKeys.map((k) => `<button class="chip ${k === editBranch ? "on" : ""}" data-b="${k}">${esc(A.branches[k].name)}</button>`).join("")}
        </div>
        <p class="hint">Section: <b>${esc(currentB.section)}</b> · Classroom: <b>${esc(currentB.classroom)}</b></p>

        <div class="lab">Lab Group</div>
        <div class="chips" id="editGr">
          ${currentB.groups.map((g) => `<button class="chip ${g === editGroup ? "on" : ""}" data-g="${g}">Group ${g}</button>`).join("")}
        </div>

        <div class="lab">Enrolled Subjects</div>
        <div class="chips" id="editSb">
          ${currentB.subjects.filter((s) => !s.extra).map((s) => `<button class="chip ${editSubjects.has(s.id) ? "on" : ""}" data-s="${s.id}">${esc(s.short)}</button>`).join("")}
        </div>

        <button class="btn primary" id="saveProfile" style="margin-top:20px;">Save Changes ✨</button>
      </div>`;

    $("#editBrPicker", el).onclick = (e) => {
      const b = e.target.closest("[data-b]");
      if (!b) return;
      editBranch = b.dataset.b;
      currentB = A.branches[editBranch];
      editSubjects = new Set(currentB.subjects.filter((s) => !s.extra).map((s) => s.id));
      renderSheet();
    };

    $("#editGr", el).onclick = (e) => {
      const b = e.target.closest("[data-g]");
      if (!b) return;
      editGroup = +b.dataset.g;
      $$("#editGr .chip", el).forEach((c) => c.classList.toggle("on", c === b));
    };

    $("#editSb", el).onclick = (e) => {
      const b = e.target.closest("[data-s]");
      if (!b) return;
      const id = b.dataset.s;
      editSubjects.has(id) ? editSubjects.delete(id) : editSubjects.add(id);
      b.classList.toggle("on", editSubjects.has(id));
    };

    $("#doLogout", el).onclick = () => {
      localStorage.removeItem("hh_me");
      me = null;
      close();
      toast("Logged out successfully! 👋");
      showWelcome("login");
    };

    $("#saveProfile", el).onclick = () => {
      const newName = $("#editName", el).value.trim();
      const newPass = $("#editPass", el).value.trim();
      if (!newName) return toast("Name cannot be blank.");
      if (!editSubjects.size) return toast("Select at least one subject.");

      me.name = newName;
      me.password = newPass;
      me.branch = editBranch;
      me.group = editGroup;
      me.subjects = [...editSubjects];
      B = A.branches[editBranch];
      saveMe(me);
      toast("Profile updated! ✨");
      close();
      showApp();
    };
  }

  document.body.append(el);
  renderSheet();

  const close = () => {
    document.removeEventListener("keydown", key);
    el.classList.add("out");
    setTimeout(() => {
      el.remove();
      opener?.focus?.();
    }, 200);
  };
  const key = (e) => { if (e.key === "Escape") close(); };
  document.addEventListener("keydown", key);
  el.onclick = (e) => { if (e.target === el) close(); };
}

/* ---------- App Shell ---------- */
let headerMoodIdx = 0;
const headerMoods = ["wave", "point", "think", "thumbsup"];
const moodGreetings = [
  "Hi! Helping Hand waves hello! 👋",
  "Point the way! Ready to guide you. ☝️",
  "Hmm, thinking about your college schedule... 🤔",
  "Thumbs up! You're doing amazing! 👍"
];

function getLiveClassStatus() {
  const now = new Date();
  const dayName = now.toLocaleDateString("en-US", { weekday: "long" });
  const daySchedule = B.days[dayName];
  if (!daySchedule) {
    return { type: "off", text: "No classes scheduled for today! Enjoy your break. ✨" };
  }

  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const periodSlots = [
    { p: 1, start: 10 * 60, end: 11 * 60, text: "10:00 AM - 11:00 AM" },
    { p: 2, start: 11 * 60, end: 12 * 60, text: "11:00 AM - 12:00 PM" },
    { p: 3, start: 12 * 60, end: 13 * 60, text: "12:00 PM - 01:00 PM" },
    { p: 4, start: 13 * 60, end: 14 * 60, text: "01:00 PM - 02:00 PM", isLunch: true },
    { p: 5, start: 14 * 60, end: 15 * 60, text: "02:00 PM - 03:00 PM" },
    { p: 6, start: 15 * 60, end: 16 * 60, text: "03:00 PM - 04:00 PM" },
    { p: 7, start: 16 * 60, end: 17 * 60, text: "04:00 PM - 05:00 PM" }
  ];

  // Check ongoing
  for (const [p, span, id, g] of daySchedule) {
    if (g && g !== me.group) continue;
    if (!me.subjects.includes(id) && !subj(id).extra) continue;
    const startMin = periodSlots[p - 1].start;
    const endMin = periodSlots[p + span - 2]?.end || periodSlots[p - 1].end;
    if (currentMinutes >= startMin && currentMinutes < endMin) {
      const remaining = endMin - currentMinutes;
      const s = subj(id);
      return {
        type: "ongoing",
        subject: s,
        minsLeft: remaining,
        where: s.where || (s.venue === B.classroom ? B.where : null),
        text: `🟢 Ongoing: ${s.short} with ${s.teacher || "Faculty"} · ends in ${remaining} min (${s.venue})`
      };
    }
  }

  // Check lunch
  if (currentMinutes >= 13 * 60 && currentMinutes < 14 * 60) {
    return { type: "lunch", text: "🥪 Lunch Break (1:00 PM - 2:00 PM) · Next class starts at 2:00 PM!" };
  }

  // Check upcoming next
  let nextClass = null;
  let minWait = Infinity;
  for (const [p, span, id, g] of daySchedule) {
    if (g && g !== me.group) continue;
    if (!me.subjects.includes(id) && !subj(id).extra) continue;
    const startMin = periodSlots[p - 1].start;
    if (startMin > currentMinutes && startMin - currentMinutes < minWait) {
      minWait = startMin - currentMinutes;
      const s = subj(id);
      nextClass = {
        subject: s,
        minsUntil: minWait,
        where: s.where || (s.venue === B.classroom ? B.where : null),
        time: periodSlots[p - 1].text,
        venue: s.venue
      };
    }
  }

  if (nextClass) {
    return {
      type: "next",
      subject: nextClass.subject,
      where: nextClass.where,
      text: `⏰ Next Up: ${nextClass.subject.short} in ${nextClass.minsUntil} min @ ${nextClass.venue} (${nextClass.time})`
    };
  }

  if (currentMinutes >= 17 * 60) {
    return { type: "done", text: "🏁 All classes for today have concluded. Rest well or review notes!" };
  }

  return { type: "morning", text: `🌅 Good morning! First class starts at 10:00 AM. Section: ${B.section} (${B.classroom})` };
}

let currentTabIdx = 0;

function showApp() {
  updateStreak(me);
  document.body.dataset.branch = me.branch || "el";
  const todayName = new Date().toLocaleDateString("en-US", { weekday: "long" });
  day = B.days[todayName] ? todayName : "Monday";
  askSub = me.subjects[0];
  askQ = null;
  route = null;
  to = null;
  from = "entr";
  floor = "g";
  headerMoodIdx = 0;

  const live = getLiveClassStatus();
  const isLateUrgent = live.where && (live.type === "ongoing" || live.type === "next");

  const lateBannerHTML = isLateUrgent ? `
    <div class="late-banner in">
      <div class="late-info">
        <span class="late-tag">🏃‍♂️ Late ho rahe ho?</span>
        <span class="late-title">${esc(live.text)}</span>
      </div>
      <button class="late-btn" data-w="${live.where}">Shortest Rasta ➔</button>
    </div>
  ` : "";

  const liveBannerHTML = `
    <div class="live-banner in live-${live.type}">
      <div class="live-content">
        <span class="live-badge">${live.type === "ongoing" ? "LIVE NOW" : live.type === "next" ? "UPCOMING" : "TODAY"}</span>
        <b>${esc(live.text)}</b>
      </div>
      ${live.where ? `<button class="btn-live-go" data-w="${live.where}">Take me there ➔</button>` : ""}
    </div>
  `;

  const starCount = (me.interested?.classes?.length || 0) + (me.interested?.events?.length || 0);
  const isDark = document.body.classList.contains("dark");
  const greeting = getTimeGreeting(me.name);

  root.innerHTML = `
    <header class="top">
      <div class="in">
        <button class="mbtn" id="mas" aria-label="Tap the mascot to change moods">${mascotSVG("wave")}</button>
        <div class="hello">
          <div class="brand-heading">AITD Helping Hand</div>
          <h1>${esc(greeting.title)}</h1>
          <div class="hello-wish">✨ ${esc(greeting.wish)}</div>
          <p>${esc(B.name)} · Sec ${esc(B.section)} · Room ${esc(B.classroom)} · Grp ${me.group}</p>
          <div class="header-tools">
            <span class="tool-pill streak-pill" id="pillStreak">🔥 ${me.streak || 1} Day Streak</span>
            <button class="tool-pill" id="btnDark">${isDark ? "☀️ Light" : "🌙 Dark"}</button>
            <button class="tool-pill" id="btnSound">${isSoundMuted ? "🔇 Muted" : "🔊 Sound"}</button>
            <button class="tool-pill" id="btnPomodoro">⏱️ Focus Timer</button>
          </div>
        </div>
        <div class="header-actions">
          <button class="ghost" id="edit">Profile</button>
        </div>
      </div>
    </header>
    <div class="wrap">
      ${lateBannerHTML}
      ${!isLateUrgent ? liveBannerHTML : ""}
      
      <!-- Collapsible Pomodoro Focus Card -->
      <div class="pomodoro-card in" id="pomodoroCard" style="display:${showPomodoroWidget ? "block" : "none"};">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <h3>⏱️ Pomodoro Focus Sprint</h3>
          <span class="badge-units" id="pomodoroSub">🎯 25-Min Study Sprint</span>
        </div>
        <div class="pomodoro-digits" id="pomodoroDigits">25:00</div>
        <div class="pomodoro-controls">
          <button class="pomodoro-btn start" id="btnPomoStart">Start Focus 🚀</button>
          <button class="pomodoro-btn reset" id="btnPomoReset">Reset 🔄</button>
        </div>
      </div>

      <nav class="tabs" role="tablist">
        <i class="ink"></i>
        <button role="tab" data-t="0" class="on">🗺️ Find</button>
        <button role="tab" data-t="1">📅 Classes</button>
        <button role="tab" data-t="2">🤖 Ask</button>
        <button role="tab" data-t="3">📢 Notice</button>
        <button role="tab" data-t="4">⭐ Saved ${starCount > 0 ? `<span class="badge-tab">${starCount}</span>` : ""}</button>
      </nav>
      <main id="view"></main>
    </div>`;

  // Late and live buttons
  $(".late-btn")?.addEventListener("click", (e) => {
    to = e.currentTarget.dataset.w;
    from = "entr";
    tab(0);
    go();
  });

  $(".live-banner")?.addEventListener("click", (e) => {
    const b = e.target.closest("[data-w]");
    if (!b) return;
    to = b.dataset.w;
    tab(0);
    go();
  });

  // Header quick tools
  $("#pillStreak")?.addEventListener("click", () => {
    toast(`🔥 Wah! You're on a ${me.streak || 1}-day campus visit streak. Consistency is key!`);
    playSynthSound("success");
    haptic([20, 20]);
  });
  $("#btnDark")?.addEventListener("click", toggleDarkMode);
  $("#btnSound")?.addEventListener("click", toggleSound);
  $("#btnPomodoro")?.addEventListener("click", () => {
    togglePomodoro();
    playSynthSound("click");
    haptic([15]);
  });

  // Pomodoro Actions
  $("#btnPomoStart")?.addEventListener("click", () => {
    if (pomodoroRunning) {
      clearInterval(pomodoroTimerId);
      pomodoroRunning = false;
      $("#btnPomoStart").textContent = "Resume 🚀";
      toast("Study timer paused ⏸️");
    } else {
      pomodoroRunning = true;
      $("#btnPomoStart").textContent = "Pause ⏸️";
      pomodoroTimerId = setInterval(tickPomodoro, 1000);
      playSynthSound("click");
      haptic([25]);
      toast("Focus mode on! Dhyan se padho 📚✨");
    }
  });

  $("#btnPomoReset")?.addEventListener("click", () => {
    clearInterval(pomodoroTimerId);
    pomodoroRunning = false;
    pomodoroMode = "study";
    pomodoroSeconds = 25 * 60;
    updatePomodoroDisplay();
    $("#btnPomoStart").textContent = "Start Focus 🚀";
    toast("Timer reset to 25 min 🔄");
  });

  $("#mas").onclick = (e) => {
    headerMoodIdx = (headerMoodIdx + 1) % headerMoods.length;
    const mood = headerMoods[headerMoodIdx];
    e.currentTarget.innerHTML = mascotSVG(mood);
    playSynthSound("click");
    haptic([20]);
    toast(moodGreetings[headerMoodIdx]);
  };

  $("#edit").onclick = () => showEditProfile();
  $(".tabs").onclick = (e) => {
    const b = e.target.closest("[data-t]");
    if (b) tab(+b.dataset.t);
  };

  tab(0);
}

function tab(i) {
  currentTabIdx = i;
  playSynthSound("click");
  haptic([10]);
  const tabs = $$(".tabs button");
  const count = tabs.length || 5;
  tabs.forEach((b, k) => {
    b.classList.toggle("on", k === i);
    b.setAttribute("aria-selected", k === i);
  });
  const ink = $(".tabs .ink");
  if (ink) {
    ink.style.width = `calc((100% - 10px) / ${count})`;
    ink.style.transform = `translateX(${i * 100}%)`;
  }
  const v = $("#view");
  v.className = "panel";
  void v.offsetWidth;
  [viewFind, viewClasses, viewAsk, viewNoticeboard, viewInterested][i](v);
}

/* ---------- Instant Search Picker Sheet ---------- */
function openPicker(title, current, onPick) {
  const opener = document.activeElement;
  const el = document.createElement("div");
  el.className = "sheet-wrap";
  
  el.innerHTML = `
    <div class="sheet" role="dialog" aria-modal="true" aria-label="${esc(title)}">
      <div class="grab"></div>
      <h2>${esc(title)}</h2>
      
      <div class="picker-search-box">
        <input type="search" class="picker-search-input" id="pickerSearch" placeholder="🔍 Search room, lab, lift, washroom... (e.g. 202, Chem, Lift)">
      </div>

      <div id="pickerFloorsList">
        ${C.floors.map((f) => `
          <div class="floor-group" data-floor="${f.id}">
            <h3>${esc(f.name)}, ${esc(f.sub)}</h3>
            <div class="opts">
              ${C.places
                .filter((p) => p.f === f.id && p.n)
                .sort((a, b) => a.n.localeCompare(b.n, "en", { numeric: true }))
                .map((p) => `
                  <button class="opt ${p.id === current ? "on" : ""}" data-id="${p.id}" data-search="${esc((p.n + " " + (p.s || "") + " " + p.id).toLowerCase())}">
                    ${esc(p.n)}${p.s ? `<small>${esc(p.s)}</small>` : ""}
                  </button>
                `).join("")}
            </div>
          </div>
        `).join("")}
      </div>
      <div id="pickerEmpty" class="picker-empty" style="display:none;">
        <p>No places found matching your search.</p>
      </div>
    </div>`;

  document.body.append(el);

  const searchInput = $("#pickerSearch", el);
  searchInput.focus();

  searchInput.oninput = (e) => {
    const q = e.target.value.trim().toLowerCase();
    let totalVisible = 0;
    $$(".floor-group", el).forEach((fg) => {
      let floorVisible = 0;
      $$(".opt", fg).forEach((opt) => {
        const match = !q || opt.dataset.search.includes(q);
        opt.style.display = match ? "" : "none";
        if (match) floorVisible++;
      });
      fg.style.display = floorVisible > 0 ? "" : "none";
      totalVisible += floorVisible;
    });
    const emptyEl = $("#pickerEmpty", el);
    if (emptyEl) emptyEl.style.display = totalVisible === 0 ? "block" : "none";
  };

  const close = () => {
    document.removeEventListener("keydown", key);
    el.classList.add("out");
    setTimeout(() => {
      el.remove();
      opener?.focus?.();
    }, 200);
  };

  const key = (e) => { if (e.key === "Escape") close(); };
  document.addEventListener("keydown", key);

  el.onclick = (e) => {
    if (e.target === el) return close();
    const b = e.target.closest("[data-id]");
    if (b) {
      onPick(b.dataset.id);
      close();
    }
  };

  $(".opt.on", el)?.scrollIntoView({ block: "center" });
}

/* ---------- Find A Place Tab ---------- */
function fieldHTML(id, lab, pid) {
  const p = N[pid];
  return `
    <span class="lab" style="margin:0 0 6px">${lab}</span>
    <button class="field ${p ? "" : "empty"}" id="${id}">
      <div class="txt">
        ${p ? `<span>${esc(fName(p.f))}</span>` : ""}
        <b>${p ? esc(pName(p)) : "Choose a place"}</b>
      </div>
      ${ICON.chev}
    </button>`;
}

function viewFind(v) {
  v.innerHTML = `
    <div class="companion-card in">
      <div class="companion-mascot">${mascotSVG("point")}</div>
      <div class="companion-text">
        <b>Where to next? The hand points the way!</b>
        <p>Pick start & destination. Cross-floor routes prioritize the <b>Lift</b> over slopes.</p>
      </div>
    </div>

    <div class="amenities-row">
      <button class="amenity-chip" id="amenityWater">💧 Nearest Water Cooler</button>
      <button class="amenity-chip" id="amenityWash">🚻 Nearest Washroom</button>
    </div>

    <div class="card happy-nav pop-in">
      <div id="f1"></div>
      <div class="swapRow"><button class="swap" id="swap" aria-label="Swap start and destination">${ICON.swap}</button></div>
      <div id="f2" style="margin-top:6px"></div>
      <button class="btn primary" id="go">Show me the way ➔</button>
    </div>
    <div id="result"></div>`;

  const paint = () => {
    $("#f1").innerHTML = fieldHTML("fromBtn", "Where are you?", from);
    $("#f2").innerHTML = fieldHTML("toBtn", "Where do you want to go?", to);
    $("#fromBtn").onclick = () => openPicker("Where are you?", from, (id) => { from = id; paint(); });
    $("#toBtn").onclick = () => openPicker("Where do you want to go?", to, (id) => { to = id; paint(); });
  };
  paint();

  $("#swap").onclick = (e) => {
    [from, to] = [to, from];
    if (!from) from = "entr";
    e.currentTarget.classList.toggle("flip");
    paint();
  };

  $("#amenityWater").onclick = () => {
    const candidates = ["water1", "water2"];
    const nearest = clientShortestDistance(from, candidates);
    if (nearest) {
      to = nearest;
      paint();
      toast(`Routing to nearest water cooler: ${pName(N[nearest])}! 💧`);
      go();
    }
  };

  $("#amenityWash").onclick = () => {
    const candidates = ["wash1", "wash2a", "wash2b"];
    const nearest = clientShortestDistance(from, candidates);
    if (nearest) {
      to = nearest;
      paint();
      toast(`Routing to nearest washroom: ${pName(N[nearest])}! 🚻`);
      go();
    }
  };

  $("#go").onclick = go;
  if (route) renderResult();
}

async function go() {
  if (!to) {
    shake($("#toBtn"));
    haptic([30]);
    return toast("Kahan jana hai dost? Destination choose karo 🗺️");
  }
  const b = $("#go");
  b?.classList.add("busy");
  playSynthSound("click");
  try {
    route = await api("/api/route", { from, to, lang: currentLang });
    floor = N[route.path[0]].f;
    renderResult();
    launchConfetti(2200);
    playSynthSound("success");
    haptic([30, 40, 50]);
    toast(`Rasta mil gaya! 🎯 Shortest walking time: ${route.time}`);
    $("#result")?.scrollIntoView({ behavior: "smooth", block: "start" });
  } catch (e) {
    route = null;
    haptic([40, 40]);
    if ($("#result")) $("#result").innerHTML = `<div class="err card in">Arey yaar! ${esc(e.message)} 🗺️</div>`;
  }
  b?.classList.remove("busy");
}

function renderResult() {
  stopSpeaking();
  const fl = new Set(route.path.map((id) => N[id].f));
  const hasLift = route.steps.some((s) => s.type === "lift");
  const legend = `<div class="map-legend">
    <span><i class="leg-from"></i>Start</span>
    <span><i class="leg-to"></i>Destination</span>
    <span><i class="leg-route"></i>Route</span>
    <span><i class="leg-lift"></i>Lift / slope</span>
  </div>`;

  const liftBanner = hasLift ? `
    <div class="companion-card" style="background:#F3EFFF; border-color:#D8B4FE; margin-bottom:12px;">
      <div class="companion-mascot">${mascotSVG("point")}</div>
      <div class="companion-text">
        <b style="color:#4C1D95;">🛗 Lift Route Included</b>
        <p style="color:#6B21A8;">Your route takes the lift directly between 1st floor (ground) and 2nd floor.</p>
      </div>
    </div>` : "";

  $("#result").innerHTML = `<div class="card in">
    <div class="sum">
      <b>${esc(route.time)}</b>
      <span>${esc(route.from)} → ${esc(route.to)}</span>
    </div>
    
    <div class="voice-actions">
      <button class="btn-voice" id="voiceBtn">
        <span class="v-icon">${ICON.speak}</span>
        <span class="v-text">🔊 Read Directions Aloud</span>
      </button>
    </div>

    ${liftBanner}
    ${route.friendly ? `<div class="bubble">${esc(route.friendly)}</div>` : ""}
    
    <div class="seg" id="floors">
      ${C.floors.map((f) => `<button data-f="${f.id}" class="${f.id === floor ? "on" : ""}">${esc(f.name)}${fl.has(f.id) ? '<i class="dot" title="Route passes through this floor"></i>' : ""}</button>`).join("")}
    </div>
    <div class="mapbox" id="mapbox">${mapSVG(floor)}</div>
    ${legend}
    <p class="note" id="mnote">${esc(C.floors.find((f) => f.id === floor).note)}</p>
    
    <ol class="steps">
      ${route.steps.map((s, i) => `<li class="${s.type}" style="animation-delay:${i * 90}ms">${s.type === "lift" ? '<span class="lift-tag">🛗 Lift</span> ' : ""}${esc(s.text)}</li>`).join("")}
    </ol>
    
    <div class="arrived-box" id="arriveBox">
      <button class="btn" id="arriveBtn" style="margin-top:0; background:var(--mint); color:#fff; box-shadow:0 4px 0 #0b8075;">🎯 I Have Arrived!</button>
    </div>
  </div>`;

  // Voice narration handler
  const voiceBtn = $("#voiceBtn");
  voiceBtn.onclick = () => {
    if (isSpeaking) {
      stopSpeaking();
      voiceBtn.classList.remove("speaking");
      voiceBtn.querySelector(".v-text").textContent = "🔊 Read Directions Aloud";
      voiceBtn.querySelector(".v-icon").innerHTML = ICON.speak;
    } else {
      const narrationText = route.friendly
        ? route.friendly
        : `Walking directions from ${route.from} to ${route.to}. Total time: ${route.time}. ` +
          route.steps.map((s, idx) => `Step ${idx + 1}: ${s.text}`).join(". ");
      
      voiceBtn.classList.add("speaking");
      voiceBtn.querySelector(".v-text").textContent = "⏹️ Stop Voice Directions";
      voiceBtn.querySelector(".v-icon").innerHTML = ICON.stop;

      speakText(narrationText, () => {
        voiceBtn.classList.remove("speaking");
        voiceBtn.querySelector(".v-text").textContent = "🔊 Read Directions Aloud";
        voiceBtn.querySelector(".v-icon").innerHTML = ICON.speak;
      });
    }
  };

  $("#arriveBtn").onclick = () => {
    stopSpeaking();
    launchConfetti(2800);
    playSynthSound("celebrate");
    haptic([40, 50, 80]);
    $("#arriveBox").innerHTML = `
      <div class="arrived-mascot">${mascotSVG("thumbsup")}</div>
      <h3>Pahunch gaye! You have arrived! 🎉</h3>
      <p>Thumbs up dost! Have a great lecture or session at <b>${esc(route.to)}</b>.</p>
    `;
    toast("Pahunch gaye! Thumbs up on arrival 👍🎉");
  };

  $("#floors").onclick = (e) => {
    const b = e.target.closest("[data-f]");
    if (!b) return;
    floor = b.dataset.f;
    $$("#floors button").forEach((x) => x.classList.toggle("on", x === b));
    $("#mapbox").innerHTML = mapSVG(floor);
    $("#mnote").textContent = C.floors.find((f) => f.id === floor).note;
  };
}

function wrap(t, max) {
  const L = [];
  let c = "";
  for (const w of t.split(" ")) {
    if (c && (c + " " + w).length > max) { L.push(c); c = w; }
    else c = c ? c + " " + w : w;
  }
  L.push(c);
  return L;
}

function label(p) {
  const fs = p.w < 80 ? 14 : p.w < 120 ? 17 : p.w < 160 ? 21 : 26;
  const cx = p.x + p.w / 2;
  const charsPerLine = Math.max(4, Math.floor((p.w - 10) / (fs * 0.55)));
  const subFs = Math.max(12, fs - 4);
  const subChars = Math.max(4, Math.floor((p.w - 10) / (subFs * 0.52)));
  const lines = p.n ? wrap(p.n, charsPerLine).map((t) => [t, fs, 800])
    : p.l ? p.l.split("|").map((t) => [t, 17, 600]) : [];
  if (p.s) wrap(p.s, subChars).forEach((t) => lines.push([t, subFs, 600]));
  if (!lines.length || (p.k === "shade" && !p.n)) return "";
  const maxLines = Math.max(1, Math.floor(p.h / (fs * 1.25)));
  const visible = lines.slice(0, maxLines);
  const lh = (l) => l[1] * 1.25;
  const total = visible.reduce((a, l) => a + lh(l), 0);
  let y = p.y + p.h / 2 - total / 2;
  const opacity = p.k === "corr" ? ' fill-opacity=".55"' : "";
  return visible.map((l) => {
    y += lh(l);
    return `<text x="${cx}" y="${y - l[1] * 0.22}" font-size="${l[1]}" font-weight="${l[2]}" text-anchor="middle"${opacity}>${esc(l[0])}</text>`;
  }).join("");
}

function mapSVG(fid) {
  const f = C.floors.find((x) => x.id === fid), ps = C.places.filter((p) => p.f === fid);
  const order = { corr: 0, shade: 1, open: 2, room: 3, svc: 3, arrow: 4 };
  const start = route?.path[0], end = route?.path.at(-1);
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

  let lab = "";
  for (const p of ps) if (p.k !== "arrow") lab += label(p);

  if (route) {
    const segs = [];
    let cur = null;
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

/* ---------- My Classes Tab + Syllabus Hub ---------- */
function slotTimes(p, span) {
  const t = Object.fromEntries(B.periods.map((x) => [x[0], x]));
  return [t[p][1], t[p + span - 1][2]];
}

function viewClasses(v) {
  const todayName = new Date().toLocaleDateString("en-US", { weekday: "long" });
  const rows = (B.days[day] || [])
    .filter(([, , id, g]) => (!g || g === me.group) && (me.subjects.includes(id) || subj(id).extra))
    .sort((a, b) => a[0] - b[0]);

  // Daily Quote & Attendance Stats
  const quote = getDailyQuote();
  const quoteHTML = `
    <div class="quote-card in">
      <div class="quote-emoji">💡</div>
      <div class="quote-text">
        "${esc(quote.q)}"
        <br><b>— ${esc(quote.a)}</b>
      </div>
    </div>
  `;

  let totalAttended = 0;
  let totalClasses = 0;
  me.attendance = me.attendance || {};
  for (const sId of Object.keys(me.attendance)) {
    totalAttended += me.attendance[sId].attended || 0;
    totalClasses += me.attendance[sId].total || 0;
  }
  const overallPct = totalClasses > 0 ? Math.round((totalAttended / totalClasses) * 100) : 85;
  const isSafe = overallPct >= 75;
  const attSummaryHTML = `
    <div class="attendance-summary-bar in">
      <span>📊 <b>Overall Attendance:</b> <span class="${isSafe ? "att-safe" : "att-warn"}">${overallPct}%</span> (${isSafe ? "Safe Zone 🎉" : "Attendance Alert 🚨 (75% rule)"})</span>
      <span style="font-size:11px; color:var(--mute);">${totalAttended}/${totalClasses || 0} Attended</span>
    </div>
  `;

  let html = "", lunch = false;
  rows.forEach(([p, span, id], i) => {
    if (!lunch && p > 4) {
      html += `<div class="lunch">🥪 Lunch break, 1:00 PM to 2:00 PM</div>`;
      lunch = true;
    }
    const s = subj(id), [a, b] = slotTimes(p, span);
    const remKey = `${day}_${p}_${id}`;
    const hasRem = (me.reminders || []).includes(remKey);
    const isInterested = (me.interested?.classes || []).includes(s.id);
    const attRecord = me.attendance[s.id] || { attended: 0, total: 0 };

    html += `
      <div class="slot in" style="animation-delay:${i * 50}ms">
        <div class="t">${a}<small>to ${b}</small></div>
        <div class="b">
          <div style="display:flex; justify-content:space-between; align-items:flex-start;">
            <h3>${esc(s.short)}${s.type.startsWith("Lab") ? '<span class="tag">Lab</span>' : ""}</h3>
            <div class="slot-actions">
              <button class="btn-att-toggle ${attRecord.attended > 0 ? "attended" : ""}" data-att="${s.id}" data-attsub="${esc(s.short)}" title="Mark attendance">
                ${attRecord.attended > 0 ? `✅ Present (${attRecord.attended}/${attRecord.total})` : `Mark Present 📝`}
              </button>
              <button class="btn-star ${isInterested ? "on" : ""}" data-starcls="${s.id}" data-stitle="${esc(s.short)}" title="${isInterested ? "Remove from Interested" : "Add to Interested"}">
                ${isInterested ? ICON.starOn : ICON.star}
              </button>
              <button class="btn-remind ${hasRem ? "on" : ""}" data-rem="${remKey}" data-title="${esc(s.short)}" data-time="${a}" title="${hasRem ? "Remove alert" : "Set alert 10m before"}">
                ${hasRem ? ICON.bellOn : ICON.bell}
              </button>
            </div>
          </div>
          <p>${esc(s.name)}${s.code ? `, ${esc(s.code)}` : ""}</p>
          <p>${esc(s.teacher || "Coordinator activity")}, ${esc(s.venue)}</p>
          ${s.where ? `<button class="go" data-w="${s.where}">Take me there ➔</button>` : ""}
        </div>
      </div>`;
  });

  // Syllabus Hub HTML
  const syllabusData = A.syllabus || {};
  const syllabusHTML = `
    <div class="card happy-sched pop-in" style="margin-top:16px;">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <h2>📚 AKTU 1st Year Syllabus Hub</h2>
      </div>
      <p class="hint">Official AKTU syllabus breakdown across foundation theory and engineering modules.</p>
      
      <div class="syllabus-list" style="margin-top:14px;">
        ${Object.entries(syllabusData).map(([key, item]) => `
          <details class="syllabus-item">
            <summary>
              <b>${esc(item.title)}</b>
              <span class="badge-units">5 Units</span>
            </summary>
            <div class="syllabus-body">
              ${item.units.map((u) => `
                <div class="s-unit">
                  <h4>${esc(u.unit)}: ${esc(u.name)}</h4>
                  <p>${esc(u.desc)}</p>
                </div>
              `).join("")}
              <div class="s-books">
                <b>📖 Recommended Books:</b>
                <ul>
                  ${item.textbooks.map((tb) => `<li>${esc(tb)}</li>`).join("")}
                </ul>
              </div>
            </div>
          </details>
        `).join("")}
      </div>
    </div>
  `;

  v.innerHTML = `
    <div class="companion-card in">
      <div class="companion-mascot">${mascotSVG("wave")}</div>
      <div class="companion-text">
        <b>Weekly Schedule · ${esc(B.name)} (Sec ${esc(B.section)})</b>
        <p>Filtered for <b>Group ${me.group}</b>. Tap ⭐ to save, 📝 to track attendance, or 🔔 for alerts!</p>
      </div>
    </div>

    ${quoteHTML}
    ${attSummaryHTML}

    <div class="card happy-sched pop-in">
      <div class="days" id="days">
        ${Object.keys(B.days).map((d) => `<button class="chip ${d === day ? "on" : ""}" data-d="${d}">${d.slice(0, 3)}${d === todayName ? '<i class="today"></i>' : ""}</button>`).join("")}
      </div>
      ${html || '<div class="empty-state">🎉 <b>Koi class nahi hai aaj!</b><br>Chill karo ya library / canteen me chai peeyo ☕🌿</div>'}
    </div>

    <div class="card pop-in" style="margin-top:16px;">
      <h2>Enrolled Subjects</h2>
      ${me.subjects.map((id) => {
        const s = subj(id);
        return `<div class="subj">
          <h3>${esc(s.name)}</h3>
          <p>${esc(s.code || "")} · ${esc(s.teacher || "Faculty")}</p>
          <p>${esc(s.type)}, ${/^\d/.test(s.credits) ? esc(s.credits) + " credits" : "no credits"}, ${esc(s.marks || "")}</p>
        </div>`;
      }).join("")}
    </div>

    ${syllabusHTML}
  `;

  $("#days").onclick = (e) => {
    const b = e.target.closest("[data-d]");
    if (b) { day = b.dataset.d; viewClasses(v); }
  };

  v.onclick = (e) => {
    // Attendance Toggle
    const attBtn = e.target.closest("[data-att]");
    if (attBtn) {
      const sId = attBtn.dataset.att;
      const sTitle = attBtn.dataset.attsub;
      me.attendance = me.attendance || {};
      const cur = me.attendance[sId] || { attended: 0, total: 0 };
      cur.attended += 1;
      cur.total += 1;
      me.attendance[sId] = cur;
      saveMe(me);
      playSynthSound("success");
      haptic([20, 20]);
      toast(`Marked present for ${sTitle}! Attendance: ${cur.attended}/${cur.total} 📝✨`);
      viewClasses(v);
      return;
    }

    // Star/Interest on Class
    const starBtn = e.target.closest("[data-starcls]");
    if (starBtn) {
      const sId = starBtn.dataset.starcls;
      const sTitle = starBtn.dataset.stitle;
      me.interested = me.interested || { classes: [], events: [] };
      if (me.interested.classes.includes(sId)) {
        me.interested.classes = me.interested.classes.filter(x => x !== sId);
        starBtn.classList.remove("on");
        starBtn.innerHTML = ICON.star;
        toast(`Removed ${sTitle} from Interested.`);
      } else {
        me.interested.classes.push(sId);
        starBtn.classList.add("on");
        starBtn.innerHTML = ICON.starOn;
        toast(`Added ${sTitle} to your Interested classes! ⭐`);
      }
      saveMe(me);
      return;
    }

    // Reminder toggle
    const remBtn = e.target.closest("[data-rem]");
    if (remBtn) {
      const key = remBtn.dataset.rem;
      const title = remBtn.dataset.title;
      const time = remBtn.dataset.time;
      me.reminders = me.reminders || [];
      if (me.reminders.includes(key)) {
        me.reminders = me.reminders.filter(k => k !== key);
        remBtn.classList.remove("on");
        remBtn.innerHTML = ICON.bell;
        toast(`Removed reminder for ${title}.`);
      } else {
        me.reminders.push(key);
        remBtn.classList.add("on");
        remBtn.innerHTML = ICON.bellOn;
        setupReminder(title, `${day} at ${time}`);
      }
      saveMe(me);
      return;
    }

    const goBtn = e.target.closest("[data-w]");
    if (!goBtn) return;
    if (goBtn.dataset.w === from) return toast("You are already there.");
    to = goBtn.dataset.w;
    tab(0);
    go();
  };
}

/* ---------- Noticeboard Tab ---------- */
function viewNoticeboard(v) {
  v.innerHTML = `
    <div class="companion-card in">
      <div class="companion-mascot">${mascotSVG("point")}</div>
      <div class="companion-text">
        <b>Campus Noticeboard & Events</b>
        <p>Stay updated on upcoming hackathons, workshops, and lab deadlines. Tap ⭐ to save them to your Interested hub!</p>
      </div>
    </div>

    <div class="card happy-notice pop-in">
      <h2>Upcoming Campus Events</h2>
      <div class="notice-list" style="margin-top:14px;">
        ${EVENTS.map((ev) => {
          const isRem = (me.reminders || []).includes(ev.id);
          const isInterested = (me.interested?.events || []).includes(ev.id);
          return `
            <div class="notice-card in">
              <div class="notice-header">
                <span class="notice-tag tag-${ev.badge.toLowerCase().replace(/\s+/g, '-')}">${esc(ev.badge)}</span>
                <div class="slot-actions">
                  <button class="btn-star ${isInterested ? "on" : ""}" data-starev="${ev.id}" data-stitle="${esc(ev.title)}" title="${isInterested ? "Remove from Interested" : "Mark as Interested"}">
                    ${isInterested ? ICON.starOn : ICON.star}
                  </button>
                  <button class="btn-remind ${isRem ? "on" : ""}" data-evrem="${ev.id}" data-evtitle="${esc(ev.title)}" title="Set reminder">
                    ${isRem ? ICON.bellOn : ICON.bell}
                  </button>
                </div>
              </div>
              <h3>${esc(ev.title)}</h3>
              <p class="notice-time">🗓️ <b>${esc(ev.date)}</b> · 📍 <i>${esc(ev.venue)}</i></p>
              <p class="notice-desc">${esc(ev.desc)}</p>
              ${ev.where ? `<button class="go" data-w="${ev.where}" style="margin-top:8px">Get Directions ➔</button>` : ""}
            </div>
          `;
        }).join("")}
      </div>
    </div>
  `;

  v.onclick = (e) => {
    // Star/Interest on Event
    const starBtn = e.target.closest("[data-starev]");
    if (starBtn) {
      const id = starBtn.dataset.starev;
      const title = starBtn.dataset.stitle;
      me.interested = me.interested || { classes: [], events: [] };
      if (me.interested.events.includes(id)) {
        me.interested.events = me.interested.events.filter(x => x !== id);
        starBtn.classList.remove("on");
        starBtn.innerHTML = ICON.star;
        toast(`Removed ${title} from Interested.`);
      } else {
        me.interested.events.push(id);
        starBtn.classList.add("on");
        starBtn.innerHTML = ICON.starOn;
        launchConfetti(1600);
        playSynthSound("success");
        haptic([20, 20]);
        toast(`Marked as Interested in ${title}! 🎯 Saved in favorites!`);
      }
      saveMe(me);
      return;
    }

    // Reminder toggle
    const rBtn = e.target.closest("[data-evrem]");
    if (rBtn) {
      const id = rBtn.dataset.evrem;
      const title = rBtn.dataset.evtitle;
      me.reminders = me.reminders || [];
      if (me.reminders.includes(id)) {
        me.reminders = me.reminders.filter(x => x !== id);
        rBtn.classList.remove("on");
        rBtn.innerHTML = ICON.bell;
        toast(`Removed reminder for ${title}.`);
      } else {
        me.reminders.push(id);
        rBtn.classList.add("on");
        rBtn.innerHTML = ICON.bellOn;
        setupReminder(title, "Campus Event");
      }
      saveMe(me);
      return;
    }

    const goBtn = e.target.closest("[data-w]");
    if (goBtn) {
      to = goBtn.dataset.w;
      tab(0);
      go();
    }
  };
}

/* ---------- Interested Classes & Events Tab ---------- */
function viewInterested(v) {
  const interestedClasses = me.interested?.classes || [];
  const interestedEvents = me.interested?.events || [];

  // Helper to find schedule slots for a class
  function findClassSlots(subjectId) {
    const times = Object.fromEntries(B.periods.map((p) => [p[0], p]));
    const list = [];
    for (const [dayName, daySchedule] of Object.entries(B.days)) {
      for (const [p, span, id, g] of daySchedule) {
        if (id === subjectId && (!g || g === me.group)) {
          list.push(`${dayName.slice(0, 3)} ${times[p][1]}-${times[p + span - 1][2]}`);
        }
      }
    }
    return list;
  }

  const classesHTML = interestedClasses.length > 0 ? interestedClasses.map((id) => {
    const s = subj(id);
    const slots = findClassSlots(id);
    return `
      <div class="slot in" style="border-left-color:var(--sun);">
        <div class="t">
          <b>${esc(s.short)}</b>
          <small>${slots.length > 0 ? esc(slots[0]) : "Elective"}</small>
        </div>
        <div class="b">
          <div style="display:flex; justify-content:space-between; align-items:flex-start;">
            <h3>${esc(s.name)}</h3>
            <button class="btn-star on" data-unstarcls="${s.id}" title="Remove from Interested">${ICON.starOn}</button>
          </div>
          <p>${esc(s.teacher || "Faculty")}, <b>${esc(s.venue)}</b></p>
          ${slots.length > 1 ? `<p class="hint">All slots: ${esc(slots.join(" · "))}</p>` : ""}
          ${s.where ? `<button class="go" data-w="${s.where}" style="margin-top:6px;">Take me there ➔</button>` : ""}
        </div>
      </div>
    `;
  }).join("") : `
    <div class="empty-state">
      <p>⭐ <b>Abhi koi starred class nahi hai dost!</b><br>Timetable me ⭐ dabao to add your favorite lectures here.</p>
    </div>
  `;

  const eventsHTML = interestedEvents.length > 0 ? interestedEvents.map((evId) => {
    const ev = EVENTS.find(x => x.id === evId) || { id: evId, title: "Campus Event", badge: "Notice", date: "TBA", venue: "Campus", desc: "" };
    return `
      <div class="notice-card in" style="border-left-color:var(--sun);">
        <div class="notice-header">
          <span class="notice-tag tag-${ev.badge.toLowerCase().replace(/\s+/g, '-')}">${esc(ev.badge)}</span>
          <button class="btn-star on" data-unstarev="${ev.id}" title="Remove from Interested">${ICON.starOn}</button>
        </div>
        <h3>${esc(ev.title)}</h3>
        <p class="notice-time">🗓️ <b>${esc(ev.date)}</b> · 📍 <i>${esc(ev.venue)}</i></p>
        <p class="notice-desc">${esc(ev.desc)}</p>
        ${ev.where ? `<button class="go" data-w="${ev.where}" style="margin-top:8px">Get Directions ➔</button>` : ""}
      </div>
    `;
  }).join("") : `
    <div class="empty-state">
      <p>🎯 <b>Abhi koi pinned event nahi hai dost!</b><br>Noticeboard me hackathons aur workshops par ⭐ dabao to track them here.</p>
    </div>
  `;

  v.innerHTML = `
    <div class="companion-card in">
      <div class="companion-mascot">${mascotSVG("thumbsup")}</div>
      <div class="companion-text">
        <b>Your Interested Hub</b>
        <p>Curated list of classes you want to attend and campus events you've pinned.</p>
      </div>
    </div>

    <div class="card happy-star pop-in">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
        <h2>⭐ Starred Classes (${interestedClasses.length})</h2>
      </div>
      ${classesHTML}
    </div>

    <div class="card pop-in" style="margin-top:16px;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
        <h2>🎯 Interested Events & Activities (${interestedEvents.length})</h2>
      </div>
      <div class="notice-list">
        ${eventsHTML}
      </div>
    </div>
  `;

  v.onclick = (e) => {
    const unstarCls = e.target.closest("[data-unstarcls]");
    if (unstarCls) {
      const id = unstarCls.dataset.unstarcls;
      me.interested.classes = me.interested.classes.filter(x => x !== id);
      saveMe(me);
      toast("Removed from Interested classes.");
      viewInterested(v);
      return;
    }

    const unstarEv = e.target.closest("[data-unstarev]");
    if (unstarEv) {
      const id = unstarEv.dataset.unstarev;
      me.interested.events = me.interested.events.filter(x => x !== id);
      saveMe(me);
      toast("Removed from Interested events.");
      viewInterested(v);
      return;
    }

    const goBtn = e.target.closest("[data-w]");
    if (goBtn) {
      to = goBtn.dataset.w;
      tab(0);
      go();
    }
  };
}

/* ---------- Ask Tab (with English ⇄ Hinglish Toggle) ---------- */
function viewAsk(v) {
  v.innerHTML = `
    <div class="companion-card in">
      <div class="companion-mascot">${mascotSVG("think")}</div>
      <div class="companion-text">
        <b>Academic Doubts? Helping Hand knows!</b>
        <p>Ask about faculty, schedules, lecture venues, and AKTU evaluation schemes.</p>
      </div>
    </div>

    <div class="card happy-ask pop-in">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
        <span class="lab" style="margin:0;">Language Mode</span>
        <div class="lang-pills" id="langToggle">
          <button class="pill ${currentLang === "en" ? "on" : ""}" data-l="en">🇬🇧 English</button>
          <button class="pill ${currentLang === "hi" ? "on" : ""}" data-l="hi">🇮🇳 Hinglish</button>
        </div>
      </div>

      <div class="lab">Which subject?</div>
      <div class="chips" id="as">
        ${me.subjects.map((id) => `<button class="chip ${id === askSub ? "on" : ""}" data-s="${id}">${esc(subj(id).short)}</button>`).join("")}
      </div>

      <div class="lab">What do you want to know?</div>
      <div class="chips" id="aq">
        ${A.questions.map((q) => `<button class="chip ${q.id === askQ ? "on" : ""}" data-q="${q.id}">${esc(q.t)}</button>`).join("")}
      </div>

      <button class="btn primary" id="ask">Ask Helping Hand ➔</button>
      <div id="ans"></div>
    </div>`;

  $("#langToggle").onclick = (e) => {
    const b = e.target.closest("[data-l]");
    if (!b) return;
    currentLang = b.dataset.l;
    $$("#langToggle .pill").forEach(p => p.classList.toggle("on", p === b));
    toast(currentLang === "hi" ? "Switched to Hinglish mode! 🇮🇳" : "Switched to English mode! 🇬🇧");
  };

  const pickOne = (sel, attr, set) => {
    $(sel).onclick = (e) => {
      const b = e.target.closest(`[data-${attr}]`);
      if (!b) return;
      set(b.dataset[attr]);
      $$(`${sel} .chip`).forEach((c) => c.classList.toggle("on", c === b));
    };
  };

  pickOne("#as", "s", (x) => (askSub = x));
  pickOne("#aq", "q", (x) => (askQ = x));

  $("#ask").onclick = async () => {
    if (!askQ) {
      shake($("#aq"));
      haptic([30]);
      return toast("Pehle topic choose karo dost! ❓");
    }
    const b = $("#ask");
    b.classList.add("busy");
    playSynthSound("click");
    haptic([15]);
    
    $("#ans").innerHTML = `
      <div class="companion-card in" style="margin-top:14px; background:#F0FDFA; border-color:#99F6E4;">
        <div class="companion-mascot">${mascotSVG("think")}</div>
        <div class="companion-text">
          <b style="color:#0F766E;">AI Dost soch raha hai… 🤖✨</b>
          <p style="color:#115E59;">Reviewing verified ${B.name} records and AKTU scheme.</p>
          <div class="typing" style="margin-top:6px;"><i></i><i></i><i></i></div>
        </div>
      </div>`;

    try {
      const d = await api("/api/ask", {
        branch: me.branch,
        subject: askSub,
        question: askQ,
        group: me.group,
        lang: currentLang
      });

      playSynthSound("success");
      haptic([20, 20]);
      $("#ans").innerHTML = `
        <div class="ans">
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
            <div style="width:34px; height:34px; flex:none;">${mascotSVG("point")}</div>
            <b style="color:var(--mint); font-size:14px;">Helping Hand says:</b>
          </div>
          ${esc(d.answer)}
        </div>`;
    } catch (e) {
      $("#ans").innerHTML = `<div class="ans err">Arey yaar! ${esc(e.message)}</div>`;
    }
    b.classList.remove("busy");
  };
}

init();
