import fs from "fs";

const syllabus = {
  "qpa": {
    "title": "Quantum Physics / Physics (AAS-101 / BAS101)",
    "units": [
      { "unit": "Unit 1", "name": "Quantum Mechanics", "desc": "Wave-particle duality, de-Broglie hypothesis, Davisson-Germer experiment, Heisenberg uncertainty principle, wave function and its physical significance, Schrödinger's wave equation, application to particle in a 1D box." },
      { "unit": "Unit 2", "name": "Wave Optics", "desc": "Interference of light, division of amplitude, Newton's rings experiment and applications. Fraunhofer diffraction at single slit and N-slits, diffraction grating, resolving power." },
      { "unit": "Unit 3", "name": "Relativistic Mechanics", "desc": "Inertial frames of reference, Michelson-Morley experiment, postulates of special theory of relativity, Lorentz transformation, length contraction, time dilation, mass-energy equivalence (E=mc²)." },
      { "unit": "Unit 4", "name": "Fiber Optics & Lasers", "desc": "Principle of optical fiber, acceptance angle, numerical aperture, attenuation, single and multi-mode fibers. Laser principle, Einstein's coefficients, Ruby laser, He-Ne laser and industrial applications." },
      { "unit": "Unit 5", "name": "Electromagnetics & Modern Physics", "desc": "Continuity equation, displacement current, Maxwell's equations in vacuum and dielectric media, Poynting vector, basic introduction to superconductivity and Meissner effect." }
    ],
    "textbooks": ["Engineering Physics by H.K. Malik & A.K. Singh", "Concepts of Modern Physics by Arthur Beiser", "Optics by Ajoy Ghatak"]
  },
  "chem": {
    "title": "Engineering Chemistry / Applied Chemistry (AAS-102 / BAS102)",
    "units": [
      { "unit": "Unit 1", "name": "Atomic & Molecular Structure", "desc": "Molecular orbital theory of diatomic molecules (N2, O2, NO, CO), band theory of solids, liquid crystals and their applications in display tech." },
      { "unit": "Unit 2", "name": "Spectroscopic Techniques", "desc": "Principles of UV-Visible and IR spectroscopy, Lambert-Beer's law, elementary vibrational and electronic transitions, applications in chemical identification." },
      { "unit": "Unit 3", "name": "Electrochemistry & Corrosion", "desc": "Nernst equation, electrochemical cells, batteries (lead-acid, lithium-ion), electrochemical theory of corrosion, prevention and sacrificial anode methods." },
      { "unit": "Unit 4", "name": "Water Technology", "desc": "Hardness of water, determination by EDTA method, boiler troubles (scale, sludge, priming, foaming), water softening processes (Zeolite and Ion-exchange)." },
      { "unit": "Unit 5", "name": "Polymers & Nanomaterials", "desc": "Classification, synthesis and applications of conducting polymers, silicone resins, introduction to nanomaterials, fullerenes, carbon nanotubes and synthesis routes." }
    ],
    "textbooks": ["Engineering Chemistry by P.C. Jain & Monika Jain", "Textbook of Engineering Chemistry by Shashi Chawla"]
  },
  "cla": {
    "title": "Calculus & Linear Algebra / Mathematics (AAS103 / BAS303)",
    "units": [
      { "unit": "Unit 1", "name": "Matrices & Linear Algebra", "desc": "Rank of matrix, echelon form, consistency of system of linear equations, eigenvalues, eigenvectors, Cayley-Hamilton theorem, diagonalization." },
      { "unit": "Unit 2", "name": "Differential Calculus I", "desc": "Successive differentiation, Leibniz theorem, Taylor's and Maclaurin's series, partial derivatives, Euler's theorem for homogeneous functions." },
      { "unit": "Unit 3", "name": "Differential Calculus II", "desc": "Total derivative, Jacobians, approximation of errors, maxima and minima of functions of several variables, Lagrange's method of undetermined multipliers." },
      { "unit": "Unit 4", "name": "Multiple Integration", "desc": "Double and triple integrals, change of order of integration, change of variables into polar coordinates, application to areas and volumes, Dirichlet's integral." },
      { "unit": "Unit 5", "name": "Vector Calculus", "desc": "Scalar and vector point functions, gradient, divergence, curl and their physical interpretations. Line, surface, and volume integrals, Gauss divergence theorem, Green's theorem, Stokes theorem." }
    ],
    "textbooks": ["Higher Engineering Mathematics by B.S. Grewal", "Advanced Engineering Mathematics by Erwin Kreyszig"]
  },
  "fece": {
    "title": "Fundamentals of Electronics Engineering (AEC101)",
    "units": [
      { "unit": "Unit 1", "name": "Semiconductor Diodes", "desc": "P-N junction diode, V-I characteristics, Zener diode as voltage regulator, half-wave, full-wave and bridge rectifiers, filters and clippers/clampers." },
      { "unit": "Unit 2", "name": "Bipolar Junction Transistor (BJT)", "desc": "Transistor construction, CB, CE, CC configurations, input/output characteristics, transistor biasing and DC load line analysis." },
      { "unit": "Unit 3", "name": "Field Effect Transistors (FET & MOSFET)", "desc": "JFET characteristics, pinch-off voltage, MOSFET (depletion and enhancement mode) working principle, CMOS inverter fundamentals." },
      { "unit": "Unit 4", "name": "Operational Amplifiers (Op-Amps)", "desc": "Ideal op-amp characteristics, inverting and non-inverting amplifier, summing amplifier, integrator, differentiator, comparator." },
      { "unit": "Unit 5", "name": "Digital Electronics Fundamentals", "desc": "Number systems, binary arithmetic, logic gates, Boolean algebra, De Morgan's laws, basic introduction to IoT and sensors." }
    ],
    "textbooks": ["Electronic Devices and Circuit Theory by Boylestad & Nashelsky", "Electronics: Fundamentals and Applications by D. Chattopadhyay"]
  },
  "fee": {
    "title": "Fundamentals of Electrical Engineering (AEE101)",
    "units": [
      { "unit": "Unit 1", "name": "DC Circuit Analysis", "desc": "Kirchhoff's laws (KCL, KVL), mesh and nodal analysis, superposition theorem, Thevenin's theorem, Norton's theorem, maximum power transfer theorem." },
      { "unit": "Unit 2", "name": "Single Phase AC Circuits", "desc": "RMS and average values, form factor, phasor representation, analysis of series R-L, R-C, and R-L-C circuits, resonance, power and power factor." },
      { "unit": "Unit 3", "name": "Three Phase AC Circuits", "desc": "Star and delta connections, relation between line and phase values, active, reactive and apparent power measurement using two-wattmeter method." },
      { "unit": "Unit 4", "name": "Transformers", "desc": "Principle of operation, construction, EMF equation, equivalent circuit, losses, efficiency and regulation, open and short circuit tests." },
      { "unit": "Unit 5", "name": "Electrical Machines & Installations", "desc": "Construction and principle of DC motors and 3-phase induction motors. Earthing, fuses, circuit breakers (MCB, ELCB), electrical safety measures." }
    ],
    "textbooks": ["Basic Electrical Engineering by D.P. Kothari & I.J. Nagrath", "Principles of Electrical Engineering by V.K. Mehta"]
  },
  "fme": {
    "title": "Fundamentals of Mechanical Engineering (AME101)",
    "units": [
      { "unit": "Unit 1", "name": "Force Systems & Friction", "desc": "Coplanar concurrent and non-concurrent force systems, equilibrium conditions, free body diagrams, laws of friction, application to wedges and belt drives." },
      { "unit": "Unit 2", "name": "Structure & Trusses", "desc": "Analysis of simple plane trusses by method of joints and method of sections. Center of gravity, centroid and moment of inertia." },
      { "unit": "Unit 3", "name": "Thermodynamics Basics", "desc": "Zeroth, First, and Second laws of thermodynamics, closed and open systems, reversible and irreversible processes, Carnot engine, Rankine and Otto cycles." },
      { "unit": "Unit 4", "name": "Fluid Mechanics Basics", "desc": "Properties of fluids, pressure measurement, Pascal's law, continuity equation, Bernoulli's theorem and its applications (venturimeter, orifice meter)." },
      { "unit": "Unit 5", "name": "Materials & Manufacturing", "desc": "Stress-strain diagram for ductile and brittle materials, Hooke's law. Basic casting, welding, forming, and machining operations." }
    ],
    "textbooks": ["Basic Mechanical Engineering by R.K. Rajput", "Engineering Mechanics by Timoshenko & Young"]
  },
  "plang": {
    "title": "Programming for Problem Solving / C Language (ACS101)",
    "units": [
      { "unit": "Unit 1", "name": "Introduction to Computers & C Basics", "desc": "Computer hardware/software, algorithms, flowcharts, compilation process, variables, data types, operators and precedence." },
      { "unit": "Unit 2", "name": "Control Flow & Loops", "desc": "Branching (if-else, switch-case), looping constructs (for, while, do-while), break, continue, and structured program design." },
      { "unit": "Unit 3", "name": "Arrays & Strings", "desc": "1D and 2D arrays, linear search, binary search, bubble sort, string manipulation functions (strlen, strcpy, strcmp, strcat)." },
      { "unit": "Unit 4", "name": "Functions & Pointers", "desc": "Function definition, parameter passing (call by value vs reference), recursion, pointer basics, pointer arithmetic, dynamic memory allocation." },
      { "unit": "Unit 5", "name": "Structures & File Handling", "desc": "User-defined types, structures, arrays of structures, unions, file I/O operations (fopen, fclose, fprintf, fscanf, fgets, fputs)." }
    ],
    "textbooks": ["Programming in ANSI C by E. Balagurusamy", "Let Us C by Yashavant Kanetkar", "The C Programming Language by Kernighan & Ritchie"]
  },
  "pctw": {
    "title": "Professional Communication & Technical Writing (AAS-105)",
    "units": [
      { "unit": "Unit 1", "name": "Fundamentals of Communication", "desc": "7 Cs of communication, verbal and non-verbal communication, barriers to communication and active listening strategies." },
      { "unit": "Unit 2", "name": "Technical Writing & Grammar", "desc": "Sentence structure, common grammatical errors, vocabulary enhancement, paragraph development, coherence and unity." },
      { "unit": "Unit 3", "name": "Business Correspondence", "desc": "Professional email writing, formal letters, job application letters, resume and curriculum vitae design." },
      { "unit": "Unit 4", "name": "Technical Reports & Proposals", "desc": "Structure and types of technical reports, research proposals, executive summaries, references and citations." },
      { "unit": "Unit 5", "name": "Presentation & Speaking Skills", "desc": "Public speaking, presentation delivery, group discussions, body language, interview preparation and interpersonal skills." }
    ],
    "textbooks": ["Technical Communication: Principles and Practice by Meenakshi Raman & Sangeeta Sharma"]
  },
  "es": {
    "title": "Environment & Sustainability (AAC-101)",
    "units": [
      { "unit": "Unit 1", "name": "Ecosystems & Biodiversity", "desc": "Concept of ecosystem, food chains, webs, energy flow, ecological pyramids. Biodiversity hotspots, threats to biodiversity, conservation in-situ and ex-situ." },
      { "unit": "Unit 2", "name": "Natural Resources", "desc": "Water, forest, mineral, food, and energy resources (renewable vs non-renewable). Overexploitation and conservation strategies." },
      { "unit": "Unit 3", "name": "Environmental Pollution", "desc": "Air, water, soil, noise, and marine pollution causes, effects and control. Solid waste management and e-waste handling." },
      { "unit": "Unit 4", "name": "Environmental Policies & Social Issues", "desc": "Water (Prevention and Control of Pollution) Act, Air Act, Wildlife Protection Act, Forest Conservation Act, climate change, global warming, acid rain." },
      { "unit": "Unit 5", "name": "Sustainable Development", "desc": "UN Sustainable Development Goals (SDGs), carbon footprint, circular economy, green building technologies, environmental impact assessment (EIA)." }
    ],
    "textbooks": ["Environmental Studies by Benny Joseph", "Perspectives in Environmental Studies by Anubha Kaushik & C.P. Kaushik"]
  },
  "iiks": {
    "title": "Indian Knowledge System (AAS 104)",
    "units": [
      { "unit": "Unit 1", "name": "Overview of Indian Knowledge", "desc": "Introduction to Vedic literature, Vedangas, Darshanas (philosophical systems), and oral transmission traditions." },
      { "unit": "Unit 2", "name": "Science & Mathematics in Ancient India", "desc": "Contributions of Aryabhata, Brahmagupta, Bhaskara II in astronomy and mathematics (decimal system, zero, calculus foundations)." },
      { "unit": "Unit 3", "name": "Ayurveda & Health Sciences", "desc": "Fundamental concepts of Ayurveda, Tridosha theory, holistic wellness, medicinal plants and traditional dietetics." },
      { "unit": "Unit 4", "name": "Architecture, Engineering & Metallurgy", "desc": "Vastu Shastra, temple architecture, water harvesting systems in ancient India, Wootz steel, rustless iron pillar of Delhi." },
      { "unit": "Unit 5", "name": "Ethics & Holistic Philosophy", "desc": "Purusharthas (Dharma, Artha, Kama, Moksha), concept of Karma, environmental ethics in Indian thought, leadership insights from Bhagavad Gita." }
    ],
    "textbooks": ["Introduction to Indian Knowledge Systems: Concepts and Applications by B. Mahadevan", "Indian Knowledge Systems (Vols 1 & 2) by Kapil Kapoor & A.K. Singh"]
  }
};

const periods = [
  [1, "10:00", "11:00"],
  [2, "11:00", "12:00"],
  [3, "12:00", "1:00"],
  [4, "1:00", "2:00"],
  [5, "2:00", "3:00"],
  [6, "3:00", "4:00"],
  [7, "4:00", "5:00"]
];

const questions = [
  { "id": "who", "t": "Who teaches this?" },
  { "id": "when", "t": "When do I have it this week?" },
  { "id": "where", "t": "Where is it held?" },
  { "id": "marks", "t": "How many credits and marks?" }
];

// Build the 7 branches
const branches = {
  "cs-a": {
    "name": "CS (A)",
    "semester": 1,
    "section": "I CS (A)",
    "classroom": "E-201",
    "groups": [1, 2],
    "periods": periods,
    "subjects": [
      { "id": "qpa", "short": "QPA", "code": "AAS-101", "name": "Quantum Physics / Physics", "type": "Theory", "ltp": "3-1-0", "credits": "4", "marks": "30 internal + 70 exam", "teacher": "Dr Ram Sagar Tiwari", "venue": "E-201" },
      { "id": "plang", "short": "PLanguage", "code": "ACS-101", "name": "Programming Languages", "type": "Theory", "ltp": "2-1-0", "credits": "3", "marks": "30 internal + 70 exam", "teacher": "Pragati Dwivedi", "venue": "E-201" },
      { "id": "fee", "short": "FEE", "code": "AEE101", "name": "Fundamentals of Electrical Engineering", "type": "Theory", "ltp": "2-1-0", "credits": "3", "marks": "30 internal + 70 exam", "teacher": "Vaibhav Shukla", "venue": "E-201" },
      { "id": "cla", "short": "CLA", "code": "AAS103", "name": "Calculus and Linear Algebra", "type": "Theory", "ltp": "3-1-0", "credits": "4", "marks": "30 internal + 70 exam", "teacher": "Dr. Anuj Srivastava", "venue": "E-201" },
      { "id": "es", "short": "E&S", "code": "AAC-101", "name": "Environment and Sustainability", "type": "Theory", "ltp": "2-0-0", "credits": "2", "marks": "30 internal + 70 exam", "teacher": "Dr Rajesh K Srivastava", "venue": "E-201" },
      { "id": "iiks", "short": "IIKS", "code": "AAS 104", "name": "Indian Knowledge System", "type": "Theory", "ltp": "2-0-0", "credits": "2", "marks": "30 internal + 70 exam", "teacher": "Tanushree Banerjee", "venue": "E-201" },
      { "id": "itape", "short": "ItAPE", "code": "AAI 101", "name": "Introduction to AI & Prompt Engineering", "type": "Theory", "ltp": "2-0-0", "credits": "2", "marks": "30 internal + 70 exam", "teacher": "Pragati Dwivedi", "venue": "E-201" },
      { "id": "gp", "short": "GP", "code": "AGP 151", "name": "General Proficiency", "type": "Non-credit", "ltp": "0-0-2", "credits": "non-credit", "marks": "50 internal", "teacher": "Tanushree Banerjee", "venue": "E-201" },
      { "id": "caedlab", "short": "CAED Lab", "code": "ACE151", "name": "Computer Aided Engineering Graphics Lab", "type": "Lab", "ltp": "0-0-2", "credits": "1", "marks": "50 internal + 50 exam", "teacher": "Dr Ajay Maurya", "venue": "Graphics Lab, D-102-103" },
      { "id": "pylab", "short": "PY Lab", "code": "AAS-151", "name": "Physics Lab", "type": "Lab", "ltp": "0-0-2", "credits": "1", "marks": "50 internal + 50 exam", "teacher": "Dr Ram Sagar Tiwari", "venue": "PY Lab, B-102" },
      { "id": "eelab", "short": "EE Lab", "code": "AEE-151", "name": "Electrical Engineering Lab", "type": "Lab", "ltp": "0-0-2", "credits": "1", "marks": "50 internal + 50 exam", "teacher": "Vaibhav Shukla", "venue": "E112 Electrical Lab" },
      { "id": "complab", "short": "Computer lab", "name": "Computer Lab Practical", "type": "Lab", "teacher": "Pragati Dwivedi", "venue": "Computer lab", "extra": true },
      { "id": "sports", "short": "Sports / Games", "name": "Sports / Games Activity", "type": "Activity", "teacher": "Kamlesh Kumar Yadav", "venue": "Sports", "extra": true },
      { "id": "library", "short": "Library", "name": "Library / Coordinator Activity", "type": "Activity", "venue": "Library", "where": "lib", "extra": true }
    ],
    "days": {
      "Monday":    [[1, 1, "library"], [2, 1, "plang"], [3, 1, "qpa"], [5, 1, "fee"], [6, 1, "cla"], [7, 1, "caedlab"]],
      "Tuesday":   [[1, 1, "plang"], [2, 1, "cla"], [3, 1, "fee"], [5, 1, "qpa"], [6, 2, "pylab", 1], [6, 2, "eelab", 2]],
      "Wednesday": [[1, 1, "qpa"], [2, 1, "es"], [3, 1, "cla"], [5, 1, "iiks"], [6, 1, "itape"], [7, 1, "complab"]],
      "Thursday":  [[1, 1, "qpa"], [2, 1, "es"], [3, 1, "fee"], [5, 1, "cla"], [6, 1, "cla"], [7, 1, "sports"]],
      "Friday":    [[1, 1, "qpa"], [2, 1, "cla"], [3, 1, "itape"], [5, 1, "fee"], [6, 2, "caedlab", 1], [6, 2, "pylab", 2]],
      "Saturday":  [[1, 1, "plang"], [2, 1, "iiks"], [3, 1, "plang"], [5, 1, "gp"], [6, 2, "eelab", 1], [6, 2, "caedlab", 2]]
    }
  },

  "cs-b": {
    "name": "CS (B)",
    "semester": 1,
    "section": "I CS (B)",
    "classroom": "E-202",
    "groups": [1, 2],
    "periods": periods,
    "subjects": [
      { "id": "cla", "short": "CLA", "code": "AAS103", "name": "Calculus and Linear Algebra", "type": "Theory", "ltp": "3-1-0", "credits": "4", "marks": "30 internal + 70 exam", "teacher": "Dr. Vijay Shree", "venue": "E-202" },
      { "id": "qpa", "short": "QPA", "code": "AAS-101", "name": "Quantum Physics / Physics", "type": "Theory", "ltp": "3-1-0", "credits": "4", "marks": "30 internal + 70 exam", "teacher": "Dr Preeti Tiwari", "venue": "E-202" },
      { "id": "fee", "short": "FEE", "code": "AEE101", "name": "Fundamentals of Electrical Engineering", "type": "Theory", "ltp": "2-1-0", "credits": "3", "marks": "30 internal + 70 exam", "teacher": "Vaibhav Shukla", "venue": "E-202" },
      { "id": "plang", "short": "PLanguage", "code": "ACS-101", "name": "Programming Languages", "type": "Theory", "ltp": "2-1-0", "credits": "3", "marks": "30 internal + 70 exam", "teacher": "Pragati Dwivedi", "venue": "E-202" },
      { "id": "es", "short": "E&S", "code": "AAC-101", "name": "Environment and Sustainability", "type": "Theory", "ltp": "2-0-0", "credits": "2", "marks": "30 internal + 70 exam", "teacher": "Dr Rajesh K Srivastava", "venue": "E-202" },
      { "id": "iiks", "short": "IIKS", "code": "AAS 104", "name": "Indian Knowledge System", "type": "Theory", "ltp": "2-0-0", "credits": "2", "marks": "30 internal + 70 exam", "teacher": "Tanushree Banerjee", "venue": "E-202" },
      { "id": "itape", "short": "ItAPE", "code": "AAI 101", "name": "Introduction to AI & Prompt Engineering", "type": "Theory", "ltp": "2-0-0", "credits": "2", "marks": "30 internal + 70 exam", "teacher": "Pragati Dwivedi", "venue": "E-202" },
      { "id": "gp", "short": "GP", "code": "AGP 151", "name": "General Proficiency", "type": "Non-credit", "ltp": "0-0-2", "credits": "non-credit", "marks": "50 internal", "teacher": "Tanushree Banerjee", "venue": "E-202" },
      { "id": "caedlab", "short": "CAED Lab", "code": "ACE151", "name": "Computer Aided Engineering Graphics Lab", "type": "Lab", "ltp": "0-0-2", "credits": "1", "marks": "50 internal + 50 exam", "teacher": "Dr Ajay Maurya", "venue": "Graphics Lab, D-102-103" },
      { "id": "pylab", "short": "PY Lab", "code": "AAS-151", "name": "Physics Lab", "type": "Lab", "ltp": "0-0-2", "credits": "1", "marks": "50 internal + 50 exam", "teacher": "Dr Preeti Tiwari", "venue": "PY Lab, B-102 / Smart Class" },
      { "id": "eelab", "short": "EE Lab", "code": "AEE-151", "name": "Electrical Engineering Lab", "type": "Lab", "ltp": "0-0-2", "credits": "1", "marks": "50 internal + 50 exam", "teacher": "Vaibhav Shukla", "venue": "E112 Electrical Lab" },
      { "id": "complab", "short": "Computer lab", "name": "Computer Lab Practical", "type": "Lab", "teacher": "Pragati Dwivedi", "venue": "Computer lab", "extra": true },
      { "id": "sports", "short": "Sports / Games", "name": "Sports / Games Activity", "type": "Activity", "teacher": "Kamlesh Kumar Yadav", "venue": "Sports", "extra": true },
      { "id": "library", "short": "Library", "name": "Library / Coordinator Activity", "type": "Activity", "venue": "Library", "where": "lib", "extra": true }
    ],
    "days": {
      "Monday":    [[1, 1, "cla"], [2, 1, "cla"], [3, 1, "gp"], [5, 1, "caedlab"], [6, 1, "es"], [7, 1, "fee"]],
      "Tuesday":   [[1, 1, "iiks"], [2, 1, "qpa"], [3, 1, "qpa"], [5, 1, "plang"], [6, 1, "es"], [7, 1, "cla"]],
      "Wednesday": [[1, 1, "qpa"], [2, 1, "fee"], [3, 1, "plang"], [5, 2, "eelab", 1], [5, 2, "pylab", 2], [7, 1, "sports"]],
      "Thursday":  [[1, 1, "itape"], [2, 1, "iiks"], [3, 1, "plang"], [5, 1, "qpa"], [6, 1, "fee"], [7, 1, "library"]],
      "Friday":    [[1, 1, "plang"], [2, 2, "pylab", 1], [2, 2, "caedlab", 2], [5, 1, "cla"], [6, 1, "cla"], [7, 1, "fee"]],
      "Saturday":  [[1, 1, "cla"], [2, 2, "caedlab", 1], [2, 2, "eelab", 2], [5, 1, "qpa"], [6, 1, "itape"], [7, 1, "complab"] ]
    }
  },

  "aiml": {
    "name": "AIML",
    "semester": 1,
    "section": "I AI & ML",
    "classroom": "B-202",
    "where": "b202",
    "groups": [1, 2],
    "periods": periods,
    "subjects": [
      { "id": "fece", "short": "FEcE", "code": "AEC101", "name": "Fundamentals of Electronics Engineering", "type": "Theory", "ltp": "2-1-0", "credits": "3", "marks": "30 internal + 70 exam", "teacher": "Shashank Srivastava", "venue": "B-202", "where": "b202" },
      { "id": "fme", "short": "FME", "code": "AME101", "name": "Fundamentals of Mechanical Engineering", "type": "Theory", "ltp": "2-0-0", "credits": "2", "marks": "30 internal + 70 exam", "teacher": "Dr Parijat Srivastava", "venue": "B-202", "where": "b202" },
      { "id": "chem", "short": "Applied Chemistry", "code": "AAS102", "name": "Applied Chemistry for Smart Systems", "type": "Theory", "ltp": "3-0-0", "credits": "3", "marks": "30 internal + 70 exam", "teacher": "Dr. Om Hari", "venue": "B-202", "where": "b202" },
      { "id": "plang", "short": "PLanguage", "code": "ACS101", "name": "Programming Languages", "type": "Theory", "ltp": "2-1-0", "credits": "3", "marks": "30 internal + 70 exam", "teacher": "Pragati Dwivedi", "venue": "B-202", "where": "b202" },
      { "id": "cla", "short": "CLA", "code": "AAS103", "name": "Calculus and Linear Algebra", "type": "Theory", "ltp": "3-1-0", "credits": "4", "marks": "30 internal + 70 exam", "teacher": "Dr. Divya Mishra", "venue": "B-202", "where": "b202" },
      { "id": "pctw", "short": "PC&TW", "code": "AAS105", "name": "Professional Communication & Technical Writing", "type": "Theory", "ltp": "2-0-0", "credits": "2", "marks": "30 internal + 70 exam", "teacher": "Dr Soniya Agrawal", "venue": "B-202", "where": "b202" },
      { "id": "gp", "short": "GP", "code": "AGP151", "name": "General Proficiency", "type": "Non-credit", "ltp": "0-0-2", "credits": "non-credit", "marks": "50 internal", "teacher": "Tanushree Banerjee", "venue": "B-202", "where": "b202" },
      { "id": "chemlab", "short": "Applied Chemistry Lab", "code": "AAS152", "name": "Applied Chemistry for Smart Systems Lab", "type": "Lab", "ltp": "0-0-2", "credits": "1", "marks": "50 internal + 50 exam", "teacher": "DOH / Dr DP Singh", "venue": "CY Lab, B-101" },
      { "id": "idtlab", "short": "I&DT Lab", "code": "AID151", "name": "Innovation & Design Thinking Lab", "type": "Lab", "ltp": "0-1-2", "credits": "2", "marks": "50 internal + 50 exam", "teacher": "Dr Parijat Srivastava", "venue": "Workshop 1, D-104" },
      { "id": "beclab", "short": "BEC Lab", "code": "AEC151", "name": "Electronics Engineering Lab", "type": "Lab", "ltp": "0-0-2", "credits": "1", "marks": "50 internal + 50 exam", "teacher": "Shashank Srivastava", "venue": "E-113" },
      { "id": "englab", "short": "English Language Lab", "code": "AAS153", "name": "Language Lab", "type": "Lab (non-credit)", "ltp": "0-0-2", "credits": "non-credit", "marks": "50 internal + 50 exam", "teacher": "Dr Soniya Agrawal", "venue": "English language lab, 2nd floor", "where": "eng" },
      { "id": "complab", "short": "Computer lab", "name": "Computer lab", "type": "Lab", "teacher": "Pragati Dwivedi", "venue": "Computer lab", "extra": true },
      { "id": "sports", "short": "Sports / Games", "name": "Sports / Games", "type": "Activity", "teacher": "Kamlesh Kumar Yadav", "venue": "Sports", "extra": true },
      { "id": "library", "short": "Library", "name": "Library / Coordinator Activity", "type": "Activity", "venue": "Library", "where": "lib", "extra": true }
    ],
    "days": {
      "Monday":    [[1, 1, "fece"], [2, 1, "fme"], [3, 1, "chem"], [5, 1, "plang"], [6, 1, "gp"], [7, 1, "sports"]],
      "Tuesday":   [[1, 1, "cla"], [2, 1, "pctw"], [3, 1, "fece"], [5, 1, "gp"], [6, 2, "chemlab", 1], [6, 2, "idtlab", 2]],
      "Wednesday": [[1, 1, "plang"], [2, 1, "cla"], [3, 1, "pctw"], [5, 1, "fece"], [6, 2, "beclab", 1], [6, 2, "englab", 2]],
      "Thursday":  [[1, 1, "fme"], [2, 1, "pctw"], [3, 1, "chem"], [5, 1, "cla"], [6, 1, "cla"], [7, 1, "fece"]],
      "Friday":    [[1, 1, "pctw"], [2, 2, "idtlab", 1], [2, 2, "beclab", 2], [5, 1, "cla"], [6, 1, "plang"], [7, 1, "complab"]],
      "Saturday":  [[1, 1, "library"], [2, 1, "fece"], [3, 1, "chem"], [5, 1, "cla"], [6, 2, "englab", 1], [6, 2, "chemlab", 2]]
    }
  },

  "ch": {
    "name": "CH",
    "semester": 1,
    "section": "I CH",
    "classroom": "B-203",
    "where": "b203",
    "groups": [1, 2],
    "periods": periods,
    "subjects": [
      { "id": "es", "short": "E&S", "code": "AAC-101", "name": "Environment and Sustainability", "type": "Theory", "ltp": "2-0-0", "credits": "2", "marks": "30 internal + 70 exam", "teacher": "Dr Rajesh K Srivastava", "venue": "B-203", "where": "b203" },
      { "id": "qpa", "short": "QPA", "code": "AAS-101", "name": "Quantum Physics / Physics", "type": "Theory", "ltp": "3-1-0", "credits": "4", "marks": "30 internal + 70 exam", "teacher": "Dr Ram Sagar Tiwari", "venue": "B-203", "where": "b203" },
      { "id": "cla", "short": "CLA", "code": "AAS103", "name": "Calculus and Linear Algebra", "type": "Theory", "ltp": "3-1-0", "credits": "4", "marks": "30 internal + 70 exam", "teacher": "Dr. Divya Mishra", "venue": "B-203", "where": "b203" },
      { "id": "fee", "short": "FEE", "code": "AEE101", "name": "Fundamentals of Electrical Engineering", "type": "Theory", "ltp": "2-1-0", "credits": "3", "marks": "30 internal + 70 exam", "teacher": "Dr Bindu", "venue": "B-203", "where": "b203" },
      { "id": "iiks", "short": "IIKS", "code": "AAS 104", "name": "Indian Knowledge System", "type": "Theory", "ltp": "2-0-0", "credits": "2", "marks": "30 internal + 70 exam", "teacher": "Tanushree Banerjee", "venue": "B-203", "where": "b203" },
      { "id": "itape", "short": "ItAPE", "code": "AAI 101", "name": "Introduction to AI & Prompt Engineering", "type": "Theory", "ltp": "2-0-0", "credits": "2", "marks": "30 internal + 70 exam", "teacher": "D K Sachan", "venue": "B-203", "where": "b203" },
      { "id": "plang", "short": "PLanguage", "code": "ACS-101", "name": "Programming Languages", "type": "Theory", "ltp": "2-1-0", "credits": "3", "marks": "30 internal + 70 exam", "teacher": "D K Sachan", "venue": "B-203", "where": "b203" },
      { "id": "gp", "short": "GP", "code": "AGP 151", "name": "General Proficiency", "type": "Non-credit", "ltp": "0-0-2", "credits": "non-credit", "marks": "50 internal", "teacher": "Tanushree Banerjee", "venue": "B-203", "where": "b203" },
      { "id": "caedlab", "short": "CAED Lab", "code": "ACE151", "name": "Computer Aided Engineering Graphics Lab", "type": "Lab", "ltp": "0-0-2", "credits": "1", "marks": "50 internal + 50 exam", "teacher": "Dr Parijat Srivastava", "venue": "Workshop 1, D-104 / Graphics Lab D-102-103" },
      { "id": "pylab", "short": "PY Lab", "code": "AAS-151", "name": "Physics Lab", "type": "Lab", "ltp": "0-0-2", "credits": "1", "marks": "50 internal + 50 exam", "teacher": "Dr Ram Sagar Tiwari", "venue": "PY Lab, B-102" },
      { "id": "eelab", "short": "EE Lab", "code": "AEE-151", "name": "Electrical Engineering Lab", "type": "Lab", "ltp": "0-0-2", "credits": "1", "marks": "50 internal + 50 exam", "teacher": "Dr Bindu", "venue": "E112 Electrical Lab" },
      { "id": "complab", "short": "Computer lab", "name": "Computer Lab Practical", "type": "Lab", "teacher": "D K Sachan", "venue": "Computer lab", "extra": true },
      { "id": "sports", "short": "Sports / Games", "name": "Sports / Games Activity", "type": "Activity", "teacher": "Kamlesh Kumar Yadav", "venue": "Sports", "extra": true },
      { "id": "library", "short": "Library", "name": "Library / Coordinator Activity", "type": "Activity", "venue": "Library", "where": "lib", "extra": true }
    ],
    "days": {
      "Monday":    [[1, 1, "es"], [2, 1, "qpa"], [3, 1, "caedlab"], [5, 1, "cla"], [6, 2, "caedlab", 1], [6, 2, "pylab", 2]],
      "Tuesday":   [[1, 1, "es"], [2, 2, "pylab", 1], [2, 2, "eelab", 2], [5, 1, "plang"], [6, 1, "cla"], [7, 1, "gp"]],
      "Wednesday": [[1, 1, "fee"], [2, 1, "iiks"], [3, 1, "qpa"], [5, 1, "cla"], [6, 1, "cla"], [7, 1, "sports"]],
      "Thursday":  [[1, 1, "fee"], [2, 1, "itape"], [3, 1, "itape"], [5, 1, "qpa"], [6, 2, "eelab", 1], [6, 2, "caedlab", 2]],
      "Friday":    [[1, 1, "plang"], [2, 1, "cla"], [3, 1, "plang"], [5, 1, "fee"], [6, 1, "complab"], [7, 1, "library"]],
      "Saturday":  [[1, 1, "qpa"], [2, 1, "iiks"], [3, 1, "fee"], [5, 1, "cla"], [6, 1, "es"], [7, 1, "itape"]]
    }
  },

  "bt": {
    "name": "BT",
    "semester": 1,
    "section": "I BT",
    "classroom": "B-210",
    "groups": [1, 2],
    "periods": periods,
    "subjects": [
      { "id": "cla", "short": "CLA", "code": "AAS103", "name": "Calculus and Linear Algebra", "type": "Theory", "ltp": "3-1-0", "credits": "4", "marks": "30 internal + 70 exam", "teacher": "Dr. Ragini", "venue": "B-210" },
      { "id": "qpa", "short": "QPA", "code": "AAS-101", "name": "Quantum Physics / Physics", "type": "Theory", "ltp": "3-1-0", "credits": "4", "marks": "30 internal + 70 exam", "teacher": "Dr Preeti Tiwari", "venue": "B-210" },
      { "id": "fee", "short": "FEE", "code": "AEE101", "name": "Fundamentals of Electrical Engineering", "type": "Theory", "ltp": "2-1-0", "credits": "3", "marks": "30 internal + 70 exam", "teacher": "Dr Bindu", "venue": "B-210" },
      { "id": "plang", "short": "PLanguage", "code": "ACS-101", "name": "Programming Languages", "type": "Theory", "ltp": "2-1-0", "credits": "3", "marks": "30 internal + 70 exam", "teacher": "D K Sachan", "venue": "B-210" },
      { "id": "es", "short": "E&S", "code": "AAC-101", "name": "Environment and Sustainability", "type": "Theory", "ltp": "2-0-0", "credits": "2", "marks": "30 internal + 70 exam", "teacher": "Dr Rajesh K Srivastava", "venue": "B-210" },
      { "id": "iiks", "short": "IIKS", "code": "AAS 104", "name": "Indian Knowledge System", "type": "Theory", "ltp": "2-0-0", "credits": "2", "marks": "30 internal + 70 exam", "teacher": "Tanushree Banerjee", "venue": "B-210" },
      { "id": "itape", "short": "ItAPE", "code": "AAI 101", "name": "Introduction to AI & Prompt Engineering", "type": "Theory", "ltp": "2-0-0", "credits": "2", "marks": "30 internal + 70 exam", "teacher": "D K Sachan", "venue": "B-210" },
      { "id": "gp", "short": "GP", "code": "AGP 151", "name": "General Proficiency", "type": "Non-credit", "ltp": "0-0-2", "credits": "non-credit", "marks": "50 internal", "teacher": "Tanushree Banerjee", "venue": "B-210" },
      { "id": "caedlab", "short": "CAED Lab", "code": "ACE151", "name": "Computer Aided Engineering Graphics Lab", "type": "Lab", "ltp": "0-0-2", "credits": "1", "marks": "50 internal + 50 exam", "teacher": "Dr Ajay Maurya / Dr Parijat Srivastava", "venue": "Graphics Lab, D-102-103" },
      { "id": "pylab", "short": "PY Lab", "code": "AAS-151", "name": "Physics Lab", "type": "Lab", "ltp": "0-0-2", "credits": "1", "marks": "50 internal + 50 exam", "teacher": "Dr Preeti Tiwari", "venue": "PY Lab, B-102" },
      { "id": "eelab", "short": "EE Lab", "code": "AEE-151", "name": "Electrical Engineering Lab", "type": "Lab", "ltp": "0-0-2", "credits": "1", "marks": "50 internal + 50 exam", "teacher": "Dr Bindu", "venue": "E112 Electrical Lab" },
      { "id": "complab", "short": "Computer lab", "name": "Computer Lab Practical", "type": "Lab", "teacher": "D K Sachan", "venue": "Computer lab", "extra": true },
      { "id": "sports", "short": "Sports / Games", "name": "Sports / Games Activity", "type": "Activity", "teacher": "Kamlesh Kumar Yadav", "venue": "Sports", "extra": true },
      { "id": "library", "short": "Library", "name": "Library / Coordinator Activity", "type": "Activity", "venue": "Library", "where": "lib", "extra": true }
    ],
    "days": {
      "Monday":    [[1, 1, "cla"], [2, 2, "pylab", 1], [2, 2, "eelab", 2], [5, 1, "iiks"], [6, 1, "qpa"], [7, 1, "fee"]],
      "Tuesday":   [[1, 1, "fee"], [2, 1, "plang"], [3, 1, "plang"], [5, 1, "qpa"], [6, 1, "cla"], [7, 1, "es"]],
      "Wednesday": [[1, 1, "iiks"], [2, 2, "caedlab", 1], [2, 2, "pylab", 2], [5, 1, "cla"], [6, 1, "cla"], [7, 1, "es"]],
      "Thursday":  [[1, 1, "qpa"], [2, 2, "eelab", 1], [2, 2, "caedlab", 2], [5, 1, "cla"], [6, 1, "cla"], [7, 1, "complab"]],
      "Friday":    [[1, 1, "caedlab"], [2, 1, "fee"], [3, 1, "es"], [5, 1, "itape"], [6, 1, "itape"], [7, 1, "qpa"]],
      "Saturday":  [[1, 1, "gp"], [2, 1, "plang"], [3, 1, "qpa"], [5, 1, "fee"], [6, 1, "sports"], [7, 1, "library"]]
    }
  },

  "it": {
    "name": "IT",
    "semester": 1,
    "section": "I IT",
    "classroom": "B-211",
    "where": "b211",
    "groups": [1, 2],
    "periods": periods,
    "subjects": [
      { "id": "pctw", "short": "PC&TW", "code": "AAS-105", "name": "Professional Communication & Technical Writing", "type": "Theory", "ltp": "2-0-0", "credits": "2", "marks": "30 internal + 70 exam", "teacher": "Dr. Jyostna", "venue": "B-211", "where": "b211" },
      { "id": "fme", "short": "FME", "code": "AME101", "name": "Fundamentals of Mechanical Engineering", "type": "Theory", "ltp": "2-0-0", "credits": "2", "marks": "30 internal + 70 exam", "teacher": "Dr Parijat Srivastava", "venue": "B-211", "where": "b211" },
      { "id": "cla", "short": "CLA", "code": "AAS103", "name": "Calculus and Linear Algebra", "type": "Theory", "ltp": "3-1-0", "credits": "4", "marks": "30 internal + 70 exam", "teacher": "Dr. Ragini", "venue": "B-211", "where": "b211" },
      { "id": "fece", "short": "FEcE", "code": "AEC 101", "name": "Fundamentals of Electronics Engineering", "type": "Theory", "ltp": "2-1-0", "credits": "3", "marks": "30 internal + 70 exam", "teacher": "Shashank Srivastava", "venue": "B-211", "where": "b211" },
      { "id": "chem", "short": "Applied Chemistry", "code": "AAS 102", "name": "Applied Chemistry for Smart Systems", "type": "Theory", "ltp": "3-0-0", "credits": "3", "marks": "30 internal + 70 exam", "teacher": "Dr. Om Hari", "venue": "B-211", "where": "b211" },
      { "id": "plang", "short": "PLanguage", "code": "ACS-101", "name": "Programming Languages", "type": "Theory", "ltp": "2-1-0", "credits": "3", "marks": "30 internal + 70 exam", "teacher": "Dr. Rajesh Kumar Tiwari", "venue": "B-211", "where": "b211" },
      { "id": "gp", "short": "GP", "code": "AGP 151", "name": "General Proficiency", "type": "Non-credit", "ltp": "0-0-2", "credits": "non-credit", "marks": "50 internal", "teacher": "Tanushree Banerjee", "venue": "B-211", "where": "b211" },
      { "id": "englab", "short": "English Language Lab", "code": "AAS153", "name": "Language Lab", "type": "Lab (non-credit)", "ltp": "0-0-2", "credits": "non-credit", "marks": "50 internal + 50 exam", "teacher": "Dr. Jyostna", "venue": "English language lab, 2nd floor", "where": "eng" },
      { "id": "beclab", "short": "BEC Lab", "code": "AEC151", "name": "Electronics Engineering Lab", "type": "Lab", "ltp": "0-0-2", "credits": "1", "marks": "50 internal + 50 exam", "teacher": "Shashank Srivastava", "venue": "E-113" },
      { "id": "idtlab", "short": "I&DT Lab", "code": "AID 151", "name": "Innovation & Design Thinking Lab", "type": "Lab", "ltp": "0-1-2", "credits": "2", "marks": "50 internal + 50 exam", "teacher": "Dr Ajay Maurya / Dr Parijat Srivastava", "venue": "Workshop 1, D-104" },
      { "id": "chemlab", "short": "Applied Chemistry Lab", "code": "AAS152", "name": "Applied Chemistry Lab", "type": "Lab", "ltp": "0-0-2", "credits": "1", "marks": "50 internal + 50 exam", "teacher": "DOH / Dr DP Singh", "venue": "CY Lab, B-101" },
      { "id": "complab", "short": "Computer lab", "name": "Computer Lab Practical", "type": "Lab", "teacher": "Dr. Rajesh Kumar Tiwari", "venue": "Computer lab", "extra": true },
      { "id": "sports", "short": "Sports / Games", "name": "Sports / Games Activity", "type": "Activity", "teacher": "Kamlesh Kumar Yadav", "venue": "Sports", "extra": true }
    ],
    "days": {
      "Monday":    [[1, 1, "pctw"], [2, 2, "englab", 1], [2, 2, "beclab", 2], [5, 1, "fme"], [6, 1, "cla"], [7, 1, "fece"]],
      "Tuesday":   [[1, 1, "pctw"], [2, 1, "fme"], [3, 1, "chem"], [5, 1, "fece"], [6, 1, "plang"], [7, 1, "complab"]],
      "Wednesday": [[1, 1, "fece"], [2, 1, "plang"], [3, 1, "cla"], [5, 1, "pctw"], [6, 2, "idtlab", 1], [6, 2, "chemlab", 2]],
      "Thursday":  [[1, 1, "cla"], [2, 1, "chem"], [3, 1, "fece"], [5, 1, "gp"], [6, 1, "sports"], [7, 1, "sports"]],
      "Friday":    [[1, 1, "plang"], [2, 1, "cla"], [3, 1, "cla"], [5, 1, "fme"], [6, 2, "chemlab", 1], [6, 2, "englab", 2]],
      "Saturday":  [[1, 1, "fece"], [2, 1, "chem"], [3, 1, "cla"], [5, 1, "plang"], [6, 2, "beclab", 1], [6, 2, "idtlab", 2]]
    }
  },

  "el": {
    "name": "EL",
    "semester": 1,
    "section": "I EL",
    "classroom": "E-210",
    "groups": [1, 2],
    "periods": periods,
    "subjects": [
      { "id": "gp", "short": "GP", "code": "AGP 151", "name": "General Proficiency", "type": "Non-credit", "ltp": "0-0-2", "credits": "non-credit", "marks": "50 internal", "teacher": "Tanushree Banerjee / Kamlesh Kumar Yadav", "venue": "E-210" },
      { "id": "fme", "short": "FME", "code": "AME101", "name": "Fundamentals of Mechanical Engineering", "type": "Theory", "ltp": "2-0-0", "credits": "2", "marks": "30 internal + 70 exam", "teacher": "Dr Ajay Maurya", "venue": "E-210" },
      { "id": "chem", "short": "Applied Chemistry", "code": "AAS 102", "name": "Applied Chemistry for Smart Systems", "type": "Theory", "ltp": "3-0-0", "credits": "3", "marks": "30 internal + 70 exam", "teacher": "Dr. D. P. Singh", "venue": "E-210" },
      { "id": "fece", "short": "FEcE", "code": "AEC 101", "name": "Fundamentals of Electronics Engineering", "type": "Theory", "ltp": "2-1-0", "credits": "3", "marks": "30 internal + 70 exam", "teacher": "Ankur Srivastava", "venue": "E-210" },
      { "id": "math", "short": "MATH", "code": "BAS303", "name": "Engineering Mathematics", "type": "Theory", "ltp": "3-1-0", "credits": "4", "marks": "30 internal + 70 exam", "teacher": "Dr. Vijay Shree", "venue": "E-210" },
      { "id": "pctw", "short": "PC&TW", "code": "AAS-105", "name": "Professional Communication & Technical Writing", "type": "Theory", "ltp": "2-0-0", "credits": "2", "marks": "30 internal + 70 exam", "teacher": "Dr. Jyostna", "venue": "E-210" },
      { "id": "plang", "short": "PLanguage", "code": "ACS-101", "name": "Programming Languages", "type": "Theory", "ltp": "2-1-0", "credits": "3", "marks": "30 internal + 70 exam", "teacher": "Shivani Awasthi", "venue": "E-210" },
      { "id": "chemlab", "short": "Applied Chemistry Lab", "code": "AAS152", "name": "Applied Chemistry Lab", "type": "Lab", "ltp": "0-0-2", "credits": "1", "marks": "50 internal + 50 exam", "teacher": "DOH / Dr DP Singh", "venue": "CY Lab, B-101" },
      { "id": "beclab", "short": "BEC Lab", "code": "AEC151", "name": "Electronics Engineering Lab", "type": "Lab", "ltp": "0-0-2", "credits": "1", "marks": "50 internal + 50 exam", "teacher": "Ankur Srivastava", "venue": "E-113" },
      { "id": "englab", "short": "English Language Lab", "code": "AAS153", "name": "Language Lab", "type": "Lab (non-credit)", "ltp": "0-0-2", "credits": "non-credit", "marks": "50 internal + 50 exam", "teacher": "Dr. Jyostna", "venue": "English language lab, 2nd floor", "where": "eng" },
      { "id": "idtlab", "short": "I&DT Lab", "code": "AID 151", "name": "Innovation & Design Thinking Lab", "type": "Lab", "ltp": "0-1-2", "credits": "2", "marks": "50 internal + 50 exam", "teacher": "Dr Ajay Maurya", "venue": "Workshop 1, D-104" },
      { "id": "complab", "short": "Computer lab", "name": "Computer Lab Practical", "type": "Lab", "teacher": "Shivani Awasthi", "venue": "Computer lab", "extra": true },
      { "id": "sports", "short": "Sports / Games", "name": "Sports / Games Activity", "type": "Activity", "teacher": "Kamlesh Kumar Yadav", "venue": "Sports", "extra": true }
    ],
    "days": {
      "Monday":    [[1, 1, "gp"], [2, 1, "fme"], [3, 1, "chem"], [5, 1, "fece"], [6, 2, "chemlab", 1], [6, 2, "beclab", 2]],
      "Tuesday":   [[1, 1, "fme"], [2, 2, "englab", 1], [2, 2, "idtlab", 2], [5, 1, "math"], [6, 1, "pctw"], [7, 1, "sports"]],
      "Wednesday": [[1, 1, "pctw"], [2, 2, "beclab", 1], [2, 2, "englab", 2], [5, 1, "plang"], [6, 1, "math"], [7, 1, "math"]],
      "Thursday":  [[1, 1, "plang"], [2, 1, "math"], [3, 1, "chem"], [5, 1, "fece"], [6, 2, "idtlab", 1], [6, 2, "chemlab", 2]],
      "Friday":    [[1, 1, "fece"], [2, 1, "pctw"], [3, 1, "math"], [5, 1, "plang"], [6, 1, "complab"], [7, 1, "sports"]],
      "Saturday":  [[1, 1, "fece"], [2, 1, "chem"], [3, 1, "math"], [5, 1, "pctw"], [6, 1, "plang"], [7, 1, "gp"]]
    }
  }
};

const fullData = {
  "_note": "Official AITD Kanpur timetable 2026-27 odd semester (w.e.f. 21/09/2026) for all 7 first-year sections, plus AKTU 1st-year syllabus modules.",
  questions,
  syllabus,
  branches
};

fs.writeFileSync("data/academics.json", JSON.stringify(fullData, null, 2), "utf8");
console.log("Successfully generated data/academics.json with 7 branches and syllabus!");
