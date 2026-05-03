export interface QA { q: string; a: string; }

export interface NpcConfig {
  id: string;
  name: string;
  breed: string;
  position: [number, number, number];
  /** Yaw (radians) so the dog faces inward toward the park center */
  facingYaw: number;
  furColor: string;
  innerColor: string;
  earStyle: "floppy" | "pointy";
  bodyScale: number;
  accentColor: string; // for UI
  intro: string;
  qa: QA[];
}

/** Compute the yaw so the dog's snout faces toward the world origin. */
function yawTowardOrigin(pos: [number, number, number]): number {
  return Math.atan2(-pos[0], -pos[2]);
}

export const NPC_DOGS: NpcConfig[] = [
  {
    id: "about",
    name: "Bruno",
    breed: "Golden Retriever",
    position: [9, 0, -5],
    facingYaw: yawTowardOrigin([9, 0, -5]),
    furColor: "#c8852a",
    innerColor: "#a86520",
    earStyle: "floppy",
    bodyScale: 1.05,
    accentColor: "#f59e0b",
    intro: "Hey there! I'm Bruno. I know everything about Amrit — ask me anything.",
    qa: [
      {
        q: "Who is Amrit Nair?",
        a: "Amrit is a Computer Science and Mathematics student at Texas A&M University, class of 2029. He builds AI systems, quantitative tools, and products that compete at the highest level — hackathons, startup accelerators, and research labs.",
      },
      {
        q: "What is he studying?",
        a: "A double major in Computer Science and Mathematics at Texas A&M. He's a President's Endowed Scholar, which is awarded to the top incoming students. Expected to graduate in 2029.",
      },
      {
        q: "What makes him stand out?",
        a: "He crosses three worlds most people stay siloed in: AI/ML research, quantitative finance, and full-stack product engineering. He won hackathons, co-founded a Cornell-backed startup, and pitched at Pear VC — all while maintaining top academic standing.",
      },
      {
        q: "What are his goals?",
        a: "Amrit wants to build products at the intersection of AI and finance — tools that make sophisticated quantitative strategies accessible to everyone. Think democratizing Wall Street with LLMs and great UX.",
      },
      {
        q: "Tell me about his research.",
        a: "He earned the Outstanding Undergraduate Researcher award at Texas A&M. His work spans machine learning, computer vision, and multi-agent architectures — bridging academic rigor with practical deployable systems.",
      },
    ],
  },
  {
    id: "projects",
    name: "Shadow",
    breed: "Black Labrador",
    position: [-9, 0, -5],
    facingYaw: yawTowardOrigin([-9, 0, -5]),
    furColor: "#1a1a1a",
    innerColor: "#2d2d2d",
    earStyle: "floppy",
    bodyScale: 1.0,
    accentColor: "#a78bfa",
    intro: "Shadow here. Want to hear about the cool things Amrit built? I've got the whole list.",
    qa: [
      {
        q: "What's MagNet Agents?",
        a: "MagNet Agents is Amrit's co-founded startup — an AI agent platform backed by Cornell's eLab accelerator. It lets non-engineers design, chain, and deploy intelligent agents through a visual interface. Built with React, Python, and LangChain.",
      },
      {
        q: "Tell me about AlphaForge.",
        a: "AlphaForge is a drag-and-drop quantitative strategy builder. Imagine Scratch (the visual programming language) meets Robinhood. Users assemble trading logic from blocks, backtest against historical data, and run simulations — no code required. Stack: Python, Pandas, TA-Lib, React.",
      },
      {
        q: "What is Shot Sensei?",
        a: "Shot Sensei is an AI pickleball coach. It uses webcam pose estimation (OpenCV + MediaPipe) to analyze your swing mechanics, footwork, and shot form in real time, then gives you drill recommendations. Built as a full web app with a Python backend.",
      },
      {
        q: "What hackathons did he win?",
        a: "Two major wins: TidalTAMU — 1st Place in the Google Gemini track, building an AI-powered environmental monitoring system that predicts harmful algal blooms. And Hook'em Hacks 2026 — Startup Ready Award for a market-ready product that impressed industry judges. Also attended Google Labs Makeathon.",
      },
      {
        q: "What tech does he typically use?",
        a: "Python and TypeScript are his core languages. On the AI side: PyTorch, LangChain, OpenCV, MediaPipe. For web: React, Next.js, Node.js, FastAPI. For finance: Pandas, TA-Lib, Backtrader, Alpaca API. Infrastructure: Docker, PostgreSQL, Supabase, AWS.",
      },
    ],
  },
  {
    id: "resume",
    name: "Luna",
    breed: "Siberian Husky",
    position: [0, 0, -13],
    facingYaw: yawTowardOrigin([0, 0, -13]),
    furColor: "#d8dce8",
    innerColor: "#e8eaf0",
    earStyle: "pointy",
    bodyScale: 0.95,
    accentColor: "#38bdf8",
    intro: "I'm Luna. Ask me about Amrit's experience, skills, and background — I've memorized his whole resume.",
    qa: [
      {
        q: "What's his work experience?",
        a: "He's worked as a Quantitative Developer at a student-managed investment fund with $70K AUM — building alpha-generation signals, a backtesting framework, and live data pipelines. He also co-leads engineering at MagNet Agents (his startup). Plus, undergraduate research producing published-quality ML work.",
      },
      {
        q: "What languages and frameworks?",
        a: "Languages: Python, TypeScript, JavaScript, C++, SQL, R. Frameworks: React, Next.js, Node.js, FastAPI, LangChain. ML: PyTorch, TensorFlow, Scikit-learn, OpenCV, MediaPipe. Finance: Pandas, NumPy, TA-Lib. Infrastructure: Docker, PostgreSQL, Supabase, AWS, Git.",
      },
      {
        q: "What are his top awards?",
        a: "TidalTAMU 2025 — 1st Place Google Gemini Track. Hook'em Hacks 2026 — Startup Ready Award. Outstanding Undergraduate Researcher — Texas A&M. President's Endowed Scholar — awarded to top incoming students. Google Labs Makeathon participant. Pitched at Pear VC (Y Combinator-affiliated).",
      },
      {
        q: "Is he open to internships?",
        a: "Yes — actively looking for software engineering, AI/ML, or quantitative research internships for Summer 2026. Particularly excited about companies building at the intersection of AI and finance, autonomous systems, or developer tools. Reach out at amritnair23@gmail.com.",
      },
      {
        q: "Tell me about his education.",
        a: "B.S. Computer Science + Mathematics (double major) at Texas A&M University, Class of 2029. President's Endowed Scholar. Relevant coursework: Data Structures, Algorithms, Linear Algebra, Probability & Statistics, Machine Learning, Computer Vision, Real Analysis.",
      },
    ],
  },
  {
    id: "contact",
    name: "Pixel",
    breed: "Dalmatian",
    position: [14, 0, 1],
    facingYaw: yawTowardOrigin([14, 0, 1]),
    furColor: "#f0f0f0",
    innerColor: "#e0ddd8",
    earStyle: "floppy",
    bodyScale: 1.0,
    accentColor: "#fb923c",
    intro: "Pixel's the name. Want to get in touch with Amrit? I can point you in the right direction.",
    qa: [
      {
        q: "How do I send him an email?",
        a: "Email him directly at amritnair23@gmail.com. He checks it regularly and typically responds within a day. Good for internship inquiries, collaboration proposals, or just saying hi.",
      },
      {
        q: "Where is he on LinkedIn?",
        a: "His LinkedIn is linkedin.com/in/amritaraj-nair-227063313. Best place to connect professionally, see his full work history, or send a message about opportunities.",
      },
      {
        q: "What's his GitHub?",
        a: "All his public projects and code live at github.com/amritnair. You'll find repos for AlphaForge, Shot Sensei, MagNet Agents, and his hackathon submissions — good place to see his code style and architecture decisions.",
      },
      {
        q: "What roles is he looking for?",
        a: "Software Engineering, AI/ML Engineering, Quantitative Research, or Founding Engineer roles. He thrives at small, fast-moving teams building novel products. Open to both internships (Summer 2026) and full-time after graduation in 2029.",
      },
    ],
  },
];
