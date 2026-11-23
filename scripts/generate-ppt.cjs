const path = require('path');
const fs = require('fs');
const PptxGenJS = require('pptxgenjs');

async function createPresentation() {
  const pres = new PptxGenJS();
  pres.layout = 'LAYOUT_16x9'; // 10.0 x 5.625 inches
  pres.title = 'Helping Hand - AITD Kanpur';
  pres.author = 'Shivang Roy';
  pres.subject = 'AI Campus Guide & Academic Engine';

  // Palette Constants
  const BG_NAVY = '0B132B';
  const CARD_NAVY = '162238';
  const BORDER_NAVY = '243656';
  const GOLD = 'FCA311';
  const WHITE = 'FFFFFF';
  const MUTED = '94A3B8';
  const CORAL = 'FF5C7C';
  const GREEN = '10B981';
  const CYAN = '38BDF8';
  const FONT_HEAD = 'Segoe UI';
  const FONT_BODY = 'Segoe UI';

  const mediaDir = path.resolve('ppt_extracted/ppt/media');
  const imgWaving = path.join(mediaDir, 'image-1-1.png');
  const imgPointing = path.join(mediaDir, 'image-11-1.png');
  const imgThink = path.join(mediaDir, 'image-8-3.png');

  // Helper for Slide Background & Header Badge
  function initSlide(slide, num, title, subtitle) {
    slide.background = { color: BG_NAVY };

    // Slide number pill at top right
    if (num) {
      slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: 9.1, y: 0.35, w: 0.55, h: 0.45,
        fill: { color: CARD_NAVY },
        line: { color: BORDER_NAVY, width: 1 },
        rectRadius: 0.1
      });
      slide.addText(String(num), {
        x: 9.1, y: 0.35, w: 0.55, h: 0.45,
        fontSize: 14, fontFace: FONT_HEAD, bold: true, color: GOLD,
        align: 'center', valign: 'middle'
      });
    }

    // Title and Subtitle
    if (title) {
      slide.addText(title, {
        x: 0.6, y: 0.35, w: 8.2, h: 0.55,
        fontSize: 22, fontFace: FONT_HEAD, bold: true, color: WHITE,
        valign: 'middle'
      });
    }
    if (subtitle) {
      slide.addText(subtitle, {
        x: 0.6, y: 0.88, w: 8.2, h: 0.35,
        fontSize: 11, fontFace: FONT_BODY, color: MUTED,
        valign: 'top'
      });
    }
  }

  // ==========================================
  // SLIDE 1: TITLE SLIDE (IDENTICAL TO ORIGINAL)
  // ==========================================
  {
    const s1 = pres.addSlide();
    s1.background = { color: 'F8FAFC' };

    // Top PromptWars pill
    s1.addText('PromptWars X AITD', {
      x: 0.8, y: 0.45, w: 3.5, h: 0.4,
      fontSize: 13, fontFace: FONT_HEAD, bold: true, color: '1E293B'
    });

    // Pink-to-Gold decorative bar
    s1.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.8, y: 0.9, w: 8.4, h: 0.35,
      fill: { color: 'FF5C7C' },
      line: { color: 'FF5C7C' },
      rectRadius: 0.15
    });

    // Dark Navy Main Feature Card
    s1.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.8, y: 1.45, w: 8.4, h: 3.7,
      fill: { color: '14213D' },
      line: { color: '14213D' },
      rectRadius: 0.2
    });

    // Live Prototype pill
    s1.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 1.2, y: 1.8, w: 3.2, h: 0.38,
      fill: { color: '1E293B' },
      line: { color: GOLD, width: 1 },
      rectRadius: 0.1
    });
    s1.addText('AITD KANPUR  ·  LIVE PROTOTYPE', {
      x: 1.2, y: 1.8, w: 3.2, h: 0.38,
      fontSize: 10, fontFace: FONT_HEAD, bold: true, color: GOLD,
      align: 'center', valign: 'middle'
    });

    // Main Title
    s1.addText('Helping Hand', {
      x: 1.2, y: 2.3, w: 5.5, h: 0.85,
      fontSize: 38, fontFace: FONT_HEAD, bold: true, color: WHITE,
      valign: 'middle'
    });

    // Subtitle
    s1.addText('Your AI guide to every room, hall and lab, plus your academics. Now live on the web.', {
      x: 1.2, y: 3.15, w: 5.5, h: 0.7,
      fontSize: 13, fontFace: FONT_BODY, color: 'E2E8F0',
      valign: 'top'
    });

    // Presenter
    s1.addText([
      { text: 'Presented by  ', options: { color: '94A3B8' } },
      { text: 'Shivang Roy', options: { color: WHITE, bold: true } }
    ], {
      x: 1.2, y: 4.15, w: 3.5, h: 0.4,
      fontSize: 12, fontFace: FONT_BODY, valign: 'middle'
    });

    // Tagline on the right
    s1.addText('“Lost? Lend a hand.”', {
      x: 5.0, y: 4.15, w: 3.6, h: 0.4,
      fontSize: 12, fontFace: FONT_BODY, italic: true, color: GOLD,
      align: 'right', valign: 'middle'
    });

    // Mascot Waving Hand
    if (fs.existsSync(imgWaving)) {
      s1.addImage({ path: imgWaving, x: 6.8, y: 2.0, w: 2.0, h: 2.0 });
    }

    // Number 1 pill
    s1.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 8.5, y: 4.5, w: 0.5, h: 0.45,
      fill: { color: '1E293B' },
      line: { color: '334155' },
      rectRadius: 0.1
    });
    s1.addText('1', {
      x: 8.5, y: 4.5, w: 0.5, h: 0.45,
      fontSize: 13, fontFace: FONT_HEAD, bold: true, color: GOLD,
      align: 'center', valign: 'middle'
    });
  }

  // ==========================================
  // SLIDE 2: THE FIRST-YEAR MAZE (EXPANDED PROBLEM, NO ROOM RESTRICTION)
  // ==========================================
  {
    const s2 = pres.addSlide();
    initSlide(s2, 2, 'The first-year maze', 'Why new college students struggle every single day across the campus');

    const cards = [
      {
        icon: '🗺️',
        title: 'Sprawling Campus Layout',
        desc: 'Academic blocks, lecture halls, engineering workshops, computer labs, library, and faculty rooms are spread across multiple corridors and levels with no indoor digital signage.'
      },
      {
        icon: '📅',
        title: 'Multiple Branch Timetables',
        desc: 'Branches like CS (A), CS (B), AIML, CH, BT, IT, and EL each have distinct home classrooms, lab groups (1 & 2), and weekly rotational schedules that confuse freshers.'
      },
      {
        icon: '📚',
        title: 'Scattered Academic Information',
        desc: 'AKTU foundation syllabus units, faculty contact details, textbook references, and urgent college notices remain scattered in PDFs and group forwards.'
      }
    ];

    cards.forEach((c, i) => {
      const x = 0.6 + i * 2.95;
      s2.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x, y: 1.4, w: 2.8, h: 2.7,
        fill: { color: CARD_NAVY },
        line: { color: BORDER_NAVY, width: 1 },
        rectRadius: 0.15
      });

      // Icon circle badge
      s2.addShape(pres.shapes.OVAL, {
        x: x + 0.25, y: 1.65, w: 0.6, h: 0.6,
        fill: { color: '2A1B28' },
        line: { color: CORAL, width: 1.5 }
      });
      s2.addText(c.icon, {
        x: x + 0.25, y: 1.65, w: 0.6, h: 0.6,
        fontSize: 16, align: 'center', valign: 'middle'
      });

      // Title
      s2.addText(c.title, {
        x: x + 0.25, y: 2.35, w: 2.3, h: 0.55,
        fontSize: 13, fontFace: FONT_HEAD, bold: true, color: WHITE,
        valign: 'top'
      });

      // Description
      s2.addText(c.desc, {
        x: x + 0.25, y: 2.95, w: 2.3, h: 1.0,
        fontSize: 10.5, fontFace: FONT_BODY, color: MUTED,
        valign: 'top'
      });
    });

    // Bottom solution callout
    s2.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.6, y: 4.25, w: 8.8, h: 0.95,
      fill: { color: CARD_NAVY },
      line: { color: GOLD, width: 1.5 },
      rectRadius: 0.12
    });

    if (fs.existsSync(imgThink)) {
      s2.addImage({ path: imgThink, x: 0.8, y: 4.3, w: 0.85, h: 0.85 });
    }

    s2.addText([
      { text: "Let's lend them a hand.\n", options: { bold: true, color: GOLD, fontSize: 13 } },
      { text: "Meet Helping Hand: an intelligent, voice-guided AI senior that navigates campus venues, tracks live periods, and breaks down your AKTU syllabus.", options: { color: 'E2E8F0', fontSize: 10.5 } }
    ], {
      x: 1.8, y: 4.3, w: 7.4, h: 0.85,
      fontFace: FONT_BODY, valign: 'middle'
    });
  }

  // ==========================================
  // SLIDE 3: SMART NAVIGATION & VOICE GUIDANCE (SCALABLE CAMPUS ROUTING)
  // ==========================================
  {
    const s3 = pres.addSlide();
    initSlide(s3, 3, 'Smart Campus Navigation & Voice Guidance', 'Dijkstra shortest-path algorithm with lift-prioritized routing and Web Speech API');

    const navFeatures = [
      {
        badge: '🚶 ACCESSIBLE ROUTING',
        title: 'Lift-Prioritized Dijkstra',
        points: [
          'Intelligent shortest-path algorithm connecting campus blocks, classrooms, and labs.',
          'Cross-floor routing automatically prioritizes lifts over stairs for effortless multi-floor walking.',
          'Clear landmark guidance from campus gates and main lobbies directly to destination doors.'
        ]
      },
      {
        badge: '🔊 HANDS-FREE AUDIO',
        title: 'Voice-Guided Directions',
        points: [
          'Native browser Web Speech API speaks turn-by-turn instructions aloud as students walk.',
          'Hands-free audio guidance: keep your phone in your pocket while finding unfamiliar rooms.',
          'Live speech progress indicator with interactive Play, Pause, and Stop controls.'
        ]
      },
      {
        badge: '⚡ 1-TAP QUICK ACTIONS',
        title: 'Instant Amenities & Search',
        points: [
          '💧 Nearest Water Cooler & 🚻 Nearest Washroom: instant 1-tap shortest walking route calculation.',
          'Sticky live search bar in place picker filters classrooms, labs, lifts, and halls in real time.',
          'Instant highlighting of matching venues as students type.'
        ]
      }
    ];

    navFeatures.forEach((f, i) => {
      const x = 0.6 + i * 2.95;
      s3.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x, y: 1.4, w: 2.8, h: 3.8,
        fill: { color: CARD_NAVY },
        line: { color: BORDER_NAVY, width: 1 },
        rectRadius: 0.15
      });

      // Badge
      s3.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: x + 0.2, y: 1.6, w: 2.4, h: 0.3,
        fill: { color: '1E293B' },
        line: { color: CYAN, width: 1 },
        rectRadius: 0.08
      });
      s3.addText(f.badge, {
        x: x + 0.2, y: 1.6, w: 2.4, h: 0.3,
        fontSize: 8.5, fontFace: FONT_HEAD, bold: true, color: CYAN,
        align: 'center', valign: 'middle'
      });

      // Title
      s3.addText(f.title, {
        x: x + 0.2, y: 2.0, w: 2.4, h: 0.5,
        fontSize: 14, fontFace: FONT_HEAD, bold: true, color: WHITE,
        valign: 'middle'
      });

      // Points
      const textBullets = f.points.map(p => ({
        text: p + '\n\n',
        options: { fontSize: 10, fontFace: FONT_BODY, color: 'CBD5E1', bullet: true }
      }));
      s3.addText(textBullets, {
        x: x + 0.2, y: 2.6, w: 2.4, h: 2.4,
        valign: 'top'
      });
    });
  }

  // ==========================================
  // SLIDE 4: REAL TIMETABLE & "RIGHT NOW" ENGINE
  // ==========================================
  {
    const s4 = pres.addSlide();
    initSlide(s4, 4, 'Official Branch Timetables & "Right Now" Live Engine', 'Synchronized with official AITD Kanpur 2026-27 Odd Semester timetables (w.e.f. 21/09/2026)');

    // Left card: 7 Branches Grid
    s4.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.6, y: 1.4, w: 4.8, h: 3.8,
      fill: { color: CARD_NAVY },
      line: { color: BORDER_NAVY, width: 1 },
      rectRadius: 0.15
    });

    s4.addText('All 7 First-Year Sections Supported', {
      x: 0.85, y: 1.6, w: 4.3, h: 0.4,
      fontSize: 14, fontFace: FONT_HEAD, bold: true, color: GOLD
    });

    const branches = [
      { code: 'CS (A)', room: 'E-201', subjects: 'QPA, PLang, FEE, CLA, CAED Lab, EE Lab' },
      { code: 'CS (B)', room: 'E-202', subjects: 'CLA, QPA, FEE, PLang, E&S, IIKS, PY Lab' },
      { code: 'AIML', room: 'B-202', subjects: 'FEcE, FME, Applied Chem, PC&TW, I&DT Lab' },
      { code: 'CH', room: 'B-203', subjects: 'Chemical Engg · QPA, CLA, CAED, FEE, PY Lab' },
      { code: 'BT', room: 'B-210', subjects: 'Biotechnology · CLA, FEE, QPA, CAED, E&S' },
      { code: 'IT', room: 'B-211', subjects: 'Info Tech · PC&TW, FME, FEcE, Chem, I&DT' },
      { code: 'EL', room: 'E-210', subjects: 'Electronics Engg · FEcE, FME, Chem, Math, BEC' }
    ];

    branches.forEach((b, i) => {
      const y = 2.05 + i * 0.42;
      s4.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: 0.85, y, w: 1.0, h: 0.34,
        fill: { color: '1E293B' },
        line: { color: GOLD, width: 1 },
        rectRadius: 0.08
      });
      s4.addText(b.code, {
        x: 0.85, y, w: 1.0, h: 0.34,
        fontSize: 9.5, fontFace: FONT_HEAD, bold: true, color: WHITE,
        align: 'center', valign: 'middle'
      });

      s4.addText([
        { text: `Room ${b.room}: `, options: { bold: true, color: CYAN } },
        { text: b.subjects, options: { color: MUTED } }
      ], {
        x: 1.95, y, w: 3.2, h: 0.34,
        fontSize: 8.8, fontFace: FONT_BODY, valign: 'middle'
      });
    });

    // Right card: "Right Now" live banner breakdown
    s4.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 5.6, y: 1.4, w: 3.8, h: 3.8,
      fill: { color: CARD_NAVY },
      line: { color: BORDER_NAVY, width: 1 },
      rectRadius: 0.15
    });

    s4.addText('⏰ "Right Now" Live Class Banner', {
      x: 5.85, y: 1.6, w: 3.3, h: 0.4,
      fontSize: 14, fontFace: FONT_HEAD, bold: true, color: GOLD
    });

    const liveItems = [
      {
        pill: '🟢 ONGOING CLASS',
        color: GREEN,
        text: 'Live clock matches student schedule. Shows teacher name, room code, and countdown (e.g. "FEcE with Shashank Srivastava in B-202 · ends in 20 min").'
      },
      {
        pill: '⏰ UPCOMING CLASS',
        color: GOLD,
        text: 'During break intervals, counts down to the next lecture and shows lab venue (e.g. "Next: BEC Lab in 15 min @ E-113").'
      },
      {
        pill: '🚀 1-CLICK NAVIGATION',
        color: CYAN,
        text: '[Take me there ➔] button sets destination and launches navigation steps with lift priority in 1 tap.'
      }
    ];

    liveItems.forEach((item, i) => {
      const y = 2.1 + i * 0.95;
      s4.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: 5.85, y, w: 2.2, h: 0.28,
        fill: { color: '1E293B' },
        line: { color: item.color, width: 1 },
        rectRadius: 0.06
      });
      s4.addText(item.pill, {
        x: 5.85, y, w: 2.2, h: 0.28,
        fontSize: 8.5, fontFace: FONT_HEAD, bold: true, color: item.color,
        align: 'center', valign: 'middle'
      });
      s4.addText(item.text, {
        x: 5.85, y: y + 0.32, w: 3.3, h: 0.6,
        fontSize: 9.5, fontFace: FONT_BODY, color: 'CBD5E1', valign: 'top'
      });
    });
  }

  // ==========================================
  // SLIDE 5: AKTU 1ST-YEAR SYLLABUS HUB
  // ==========================================
  {
    const s5 = pres.addSlide();
    initSlide(s5, 5, 'AKTU 1st-Year Foundation Syllabus Hub', 'Official Unit 1 to 5 curriculum breakdowns and recommended textbooks directly inside the app');

    // Left Column: 10 Core Foundation Courses
    s5.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.6, y: 1.4, w: 4.8, h: 3.8,
      fill: { color: CARD_NAVY },
      line: { color: BORDER_NAVY, width: 1 },
      rectRadius: 0.15
    });

    s5.addText('Complete Coverage of 10 Foundation Courses', {
      x: 0.85, y: 1.6, w: 4.3, h: 0.4,
      fontSize: 14, fontFace: FONT_HEAD, bold: true, color: GOLD
    });

    const courses = [
      { code: 'AAS101 / BAS101', name: 'Quantum Physics (QPA)', faculty: 'Dr. Ram Sagar Tiwari / Preeti Tiwari' },
      { code: 'AAS102 / BAS102', name: 'Engineering Chemistry', faculty: 'Dr. Om Hari / Dr. D. P. Singh' },
      { code: 'AAS103 / BAS303', name: 'Calculus & Linear Algebra', faculty: 'Dr. Vijay Shree / Dr. Divya Mishra' },
      { code: 'AEC101', name: 'Fundamentals of Electronics (FEcE)', faculty: 'Shashank Srivastava / Ankur Srivastava' },
      { code: 'AEE101', name: 'Fundamentals of Electrical (FEE)', faculty: 'Vaibhav Shukla / Dr. Bindu' },
      { code: 'AME101', name: 'Fundamentals of Mechanical (FME)', faculty: 'Dr. Parijat Srivastava / Dr. Ajay Maurya' },
      { code: 'ACS101', name: 'Programming for Problem Solving', faculty: 'Pragati Dwivedi / D K Sachan' },
      { code: 'AAS105', name: 'Professional Communication (PC&TW)', faculty: 'Dr. Soniya Agrawal / Dr. Jyostna' }
    ];

    courses.forEach((c, i) => {
      const y = 2.05 + i * 0.38;
      s5.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: 0.85, y, w: 1.4, h: 0.32,
        fill: { color: '1E293B' },
        line: { color: CYAN, width: 1 },
        rectRadius: 0.06
      });
      s5.addText(c.code, {
        x: 0.85, y, w: 1.4, h: 0.32,
        fontSize: 8.5, fontFace: FONT_HEAD, bold: true, color: WHITE,
        align: 'center', valign: 'middle'
      });
      s5.addText([
        { text: `${c.name} `, options: { bold: true, color: 'F1F5F9' } },
        { text: `· ${c.faculty}`, options: { color: MUTED } }
      ], {
        x: 2.35, y, w: 2.8, h: 0.32,
        fontSize: 8.5, fontFace: FONT_BODY, valign: 'middle'
      });
    });

    // Right Column: Syllabus Hub Highlights
    s5.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 5.6, y: 1.4, w: 3.8, h: 3.8,
      fill: { color: CARD_NAVY },
      line: { color: BORDER_NAVY, width: 1 },
      rectRadius: 0.15
    });

    s5.addText('Academic Helper Highlights', {
      x: 5.85, y: 1.6, w: 3.3, h: 0.4,
      fontSize: 14, fontFace: FONT_HEAD, bold: true, color: GOLD
    });

    const sylHighlights = [
      {
        badge: '📖 5-UNIT CURRICULUM',
        title: 'Complete Unit-Wise Breakdown',
        desc: 'Interactive accordion lists topics from Unit 1 to Unit 5 for sessional exams and AKTU end-semesters.'
      },
      {
        badge: '📚 STANDARD TEXTBOOKS',
        title: 'Prescribed & Reference Books',
        desc: 'Includes official textbook titles and author references recommended by AKTU for each course.'
      },
      {
        badge: '⭐ 1-CLICK STAR & FILTER',
        title: 'Interactive Subject Selection',
        desc: 'Toggle elective subjects, view assigned lab venues (Graphics Lab, Chemistry Lab, BEC Lab), and star favorite courses.'
      }
    ];

    sylHighlights.forEach((h, i) => {
      const y = 2.1 + i * 0.95;
      s5.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: 5.85, y, w: 2.3, h: 0.28,
        fill: { color: '1E293B' },
        line: { color: GOLD, width: 1 },
        rectRadius: 0.06
      });
      s5.addText(h.badge, {
        x: 5.85, y, w: 2.3, h: 0.28,
        fontSize: 8.5, fontFace: FONT_HEAD, bold: true, color: GOLD,
        align: 'center', valign: 'middle'
      });
      s5.addText(h.title, {
        x: 5.85, y: y + 0.3, w: 3.3, h: 0.25,
        fontSize: 11, fontFace: FONT_HEAD, bold: true, color: WHITE
      });
      s5.addText(h.desc, {
        x: 5.85, y: y + 0.52, w: 3.3, h: 0.45,
        fontSize: 9.5, fontFace: FONT_BODY, color: 'CBD5E1', valign: 'top'
      });
    });
  }

  // ==========================================
  // SLIDE 6: PROFILES, REMINDERS & INTERESTED HUB
  // ==========================================
  {
    const s6 = pres.addSlide();
    initSlide(s6, 6, 'Profiles, Custom Reminders & "Interested" Hub', 'Client-side authentication with session persistence and personalized noticeboard watchlists');

    const profileFeatures = [
      {
        icon: '👤',
        badge: 'DUAL AUTHENTICATION',
        title: 'Sign In & Sign Up System',
        points: [
          'Segmented toggle for [Sign In / Log In] and [New Student / Sign Up].',
          'Fast 1-click login: saved profile chips restore branch, section, and timetable instantly.',
          'Optional passcode security with profile editor modal to update details anytime.'
        ]
      },
      {
        icon: '⭐',
        badge: 'PERSONALIZED HUB',
        title: '"Interested" Watchlist',
        points: [
          'Star (⭐) button on every lecture, lab, and campus notice.',
          'Dedicated 5th navigation tab displays all starred classes and event notices in one place.',
          'Includes direct [Take me there ➔] and [Remove] actions.'
        ]
      },
      {
        icon: '🔔',
        badge: 'BROWSER NOTIFICATIONS',
        title: '10-Minute Class Alerts',
        points: [
          'Browser Notification.requestPermission() integration.',
          'Students tap the bell icon on any timetable slot to arm an automated alert.',
          'Alert rings 10 minutes before lecture time with classroom venue.'
        ]
      }
    ];

    profileFeatures.forEach((f, i) => {
      const x = 0.6 + i * 2.95;
      s6.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x, y: 1.4, w: 2.8, h: 3.8,
        fill: { color: CARD_NAVY },
        line: { color: BORDER_NAVY, width: 1 },
        rectRadius: 0.15
      });

      // Icon badge
      s6.addShape(pres.shapes.OVAL, {
        x: x + 0.2, y: 1.6, w: 0.55, h: 0.55,
        fill: { color: '1E293B' },
        line: { color: GOLD, width: 1.5 }
      });
      s6.addText(f.icon, {
        x: x + 0.2, y: 1.6, w: 0.55, h: 0.55,
        fontSize: 16, align: 'center', valign: 'middle'
      });

      // Pill
      s6.addText(f.badge, {
        x: x + 0.85, y: 1.7, w: 1.75, h: 0.35,
        fontSize: 8, fontFace: FONT_HEAD, bold: true, color: GOLD,
        valign: 'middle'
      });

      // Title
      s6.addText(f.title, {
        x: x + 0.2, y: 2.25, w: 2.4, h: 0.45,
        fontSize: 13, fontFace: FONT_HEAD, bold: true, color: WHITE,
        valign: 'middle'
      });

      // Bullet points
      const bullets = f.points.map(p => ({
        text: p + '\n\n',
        options: { fontSize: 10, fontFace: FONT_BODY, color: 'CBD5E1', bullet: true }
      }));
      s6.addText(bullets, {
        x: x + 0.2, y: 2.75, w: 2.4, h: 2.3,
        valign: 'top'
      });
    });
  }

  // ==========================================
  // SLIDE 7: GEMINI AI & ARCHITECTURE
  // ==========================================
  {
    const s7 = pres.addSlide();
    initSlide(s7, 7, 'Gemini AI Doubt Solver & Production Engineering', 'Google Gemini integration with English ⇄ Hinglish toggle and automated test suite');

    // Left Card: Gemini AI & Hinglish
    s7.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.6, y: 1.4, w: 4.3, h: 3.8,
      fill: { color: CARD_NAVY },
      line: { color: BORDER_NAVY, width: 1 },
      rectRadius: 0.15
    });

    s7.addText('🤖 Gemini AI with Hinglish Toggle', {
      x: 0.85, y: 1.6, w: 3.8, h: 0.4,
      fontSize: 14, fontFace: FONT_HEAD, bold: true, color: GOLD
    });

    const aiPoints = [
      {
        h: 'Interchangeable Language Toggle:',
        t: 'Students can switch between [🇬🇧 English] and [🇮🇳 Hinglish] with one click.'
      },
      {
        h: 'Natural Campus Hinglish:',
        t: '"B-202 jaane ke liye main lobby se lift lo, second floor aate hi right corridor me classroom mil jayega!"'
      },
      {
        h: 'Academic & Schedule Q&A:',
        t: 'Answers teacher names, room locations, evaluation marks, and unit syllabus instantly.'
      },
      {
        h: '4 Mascot Moods:',
        t: 'Animated SVG mascot reacts to state: Wave (welcome), Point (route), Think (AI processing), Thumbs Up (arrived).'
      }
    ];

    aiPoints.forEach((p, i) => {
      const y = 2.05 + i * 0.72;
      s7.addText([
        { text: `${p.h}\n`, options: { bold: true, color: CYAN, fontSize: 10 } },
        { text: p.t, options: { color: 'CBD5E1', fontSize: 9.5 } }
      ], {
        x: 0.85, y, w: 3.8, h: 0.65,
        fontFace: FONT_BODY, valign: 'top'
      });
    });

    // Right Card: Robust Architecture & Tests
    s7.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 5.1, y: 1.4, w: 4.3, h: 3.8,
      fill: { color: CARD_NAVY },
      line: { color: BORDER_NAVY, width: 1 },
      rectRadius: 0.15
    });

    s7.addText('⚙️ Production Architecture & CI/CD', {
      x: 5.35, y: 1.6, w: 3.8, h: 0.4,
      fontSize: 14, fontFace: FONT_HEAD, bold: true, color: GOLD
    });

    const techPoints = [
      {
        h: 'Zero Build-Overhead Stack:',
        t: 'Node.js, Express backend + native Vanilla JS frontend. Zero bundler delay, instant mobile browser loads.'
      },
      {
        h: 'Automated Test Suite (npm test):',
        t: '20 automated unit/integration tests (node:test) validating Dijkstra routing, lift priority, and all branch schedules.'
      },
      {
        h: 'Automated CI / GitHub Actions:',
        t: '.github/workflows/test.yml validates every pull request and commit automatically.'
      },
      {
        h: 'Live Deployment on Render:',
        t: 'Continuous deployment with zero-downtime rolling updates and automatic offline fallback.'
      }
    ];

    techPoints.forEach((p, i) => {
      const y = 2.05 + i * 0.72;
      s7.addText([
        { text: `${p.h}\n`, options: { bold: true, color: GREEN, fontSize: 10 } },
        { text: p.t, options: { color: 'CBD5E1', fontSize: 9.5 } }
      ], {
        x: 5.35, y, w: 3.8, h: 0.65,
        fontFace: FONT_BODY, valign: 'top'
      });
    });
  }

  // ==========================================
  // SLIDE 8: CONCLUSION & NEXT STEPS (IDENTICAL TO ORIGINAL)
  // ==========================================
  {
    const s8 = pres.addSlide();
    s8.background = { color: BG_NAVY };

    // Slide Number 8
    s8.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 9.1, y: 0.35, w: 0.55, h: 0.45,
      fill: { color: CARD_NAVY },
      line: { color: BORDER_NAVY, width: 1 },
      rectRadius: 0.1
    });
    s8.addText('8', {
      x: 9.1, y: 0.35, w: 0.55, h: 0.45,
      fontSize: 14, fontFace: FONT_HEAD, bold: true, color: GOLD,
      align: 'center', valign: 'middle'
    });

    // Heading
    s8.addText('Every student deserves a helping hand', {
      x: 0.6, y: 0.45, w: 8.2, h: 0.6,
      fontSize: 24, fontFace: FONT_HEAD, bold: true, color: WHITE
    });

    // Left Box: NEXT DECISIONS
    s8.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.6, y: 1.35, w: 4.2, h: 2.8,
      fill: { color: CARD_NAVY },
      line: { color: BORDER_NAVY, width: 1 },
      rectRadius: 0.15
    });

    s8.addText('NEXT DECISIONS', {
      x: 0.85, y: 1.55, w: 3.7, h: 0.35,
      fontSize: 13, fontFace: FONT_HEAD, bold: true, color: GOLD
    });

    const decisions = [
      'Keep it a website, or add a mobile app?',
      'Who maintains the map and academic data?',
      'How will syllabus and faculty data reach the AI?'
    ];
    s8.addText(decisions.map(d => ({
      text: d + '\n\n',
      options: { fontSize: 11, fontFace: FONT_BODY, color: 'E2E8F0', bullet: true }
    })), {
      x: 0.85, y: 2.05, w: 3.7, h: 1.9,
      valign: 'top'
    });

    // Right Box: REFERENCES
    s8.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 5.1, y: 1.35, w: 4.3, h: 2.8,
      fill: { color: CARD_NAVY },
      line: { color: BORDER_NAVY, width: 1 },
      rectRadius: 0.15
    });

    s8.addText('REFERENCES', {
      x: 5.35, y: 1.55, w: 3.8, h: 0.35,
      fontSize: 13, fontFace: FONT_HEAD, bold: true, color: GOLD
    });

    const refs = [
      'Personal problems & first-year observations',
      'Student discussions & college feedback',
      'Google Gemini API (@google/genai)',
      'Claude (Anthropic)'
    ];
    s8.addText(refs.map(r => ({
      text: r + '\n\n',
      options: { fontSize: 11, fontFace: FONT_BODY, color: 'E2E8F0', bullet: true }
    })), {
      x: 5.35, y: 2.05, w: 3.8, h: 1.9,
      valign: 'top'
    });

    // Pointing mascot hand on right
    if (fs.existsSync(imgPointing)) {
      s8.addImage({ path: imgPointing, x: 8.2, y: 2.5, w: 1.1, h: 1.1 });
    }

    // Bottom Footer
    s8.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.6, y: 4.35, w: 8.8, h: 0.8,
      fill: { color: CARD_NAVY },
      line: { color: GOLD, width: 1 },
      rectRadius: 0.12
    });

    s8.addText('Thank you  ·  Helping Hand, AITD Kanpur', {
      x: 0.9, y: 4.35, w: 4.5, h: 0.8,
      fontSize: 13, fontFace: FONT_HEAD, bold: true, color: WHITE,
      valign: 'middle'
    });

    s8.addText([
      { text: 'Presented by  ', options: { color: MUTED } },
      { text: 'Shivang Roy', options: { color: GOLD, bold: true } }
    ], {
      x: 5.5, y: 4.35, w: 3.6, h: 0.8,
      fontSize: 13, fontFace: FONT_BODY, align: 'right', valign: 'middle'
    });
  }

  const outPath = path.resolve('Helping_Hand_AITD_Kanpur_Updated.pptx');
  await pres.writeFile({ fileName: outPath });
  console.log('Successfully regenerated presentation at:', outPath);
}

createPresentation().catch(err => {
  console.error('Error generating presentation:', err);
  process.exit(1);
});
