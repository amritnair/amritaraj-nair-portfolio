export interface QA { q: string; a: string; }

export interface NpcConfig {
  id: string;
  name: string;
  breed: string;
  /** World position in pixels (Phaser coords). */
  position: [number, number];
  /** Sunnyland atlas creature key + optional tint hex. */
  sprite: "opossum" | "frog" | "eagle";
  tint?: number;
  accentColor: string;
  intro: string;
  qa: QA[];
}

function pos(tx: number, ty: number): [number, number] {
  return [tx * 16 + 8, ty * 16 + 12];
}

export const NPC_DOGS: NpcConfig[] = [
  {
    id: "about",
    name: "Bruno",
    breed: "Golden Retriever",
    position: pos(38, 18),
    sprite: "opossum",
    tint: 0xf0a030,
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
    position: pos(14, 18),
    sprite: "frog",
    tint: 0x303030,
    accentColor: "#a78bfa",
    intro: "Shadow here. Want to hear about the cool things Amrit built? I've got the whole list.",
    qa: [
      {
        q: "What's MagNet Agents?",
        a: "MagNet Agents is Amrit's co-founded startup — an AI agent platform backed by Cornell's eLab accelerator. It lets non-engineers design, chain, and deploy intelligent agents through a visual interface. Built with React, Python, and LangChain.",
      },
      {
        q: "Tell me about AlphaForge.",
        a: "AlphaForge is a drag-and-drop quantitative strategy builder. Imagine Scratch meets Robinhood. Users assemble trading logic from blocks, backtest against historical data, and run simulations — no code required.",
      },
      {
        q: "What is Shot Sensei?",
        a: "Shot Sensei is an AI pickleball coach. It uses webcam pose estimation (OpenCV + MediaPipe) to analyze your swing mechanics, footwork, and shot form in real time, then gives you drill recommendations.",
      },
      {
        q: "What hackathons did he win?",
        a: "TidalTAMU — 1st Place Google Gemini track. Hook'em Hacks 2026 — Startup Ready Award. Also attended Google Labs Makeathon.",
      },
      {
        q: "What tech does he typically use?",
        a: "Python and TypeScript are his core languages. AI: PyTorch, LangChain, OpenCV. Web: React, Next.js, FastAPI. Finance: Pandas, TA-Lib. Infra: Docker, PostgreSQL, Supabase, AWS.",
      },
    ],
  },
  {
    id: "resume",
    name: "Luna",
    breed: "Siberian Husky",
    position: pos(26, 9),
    sprite: "eagle",
    tint: 0xb0c8e8,
    accentColor: "#38bdf8",
    intro: "I'm Luna. Ask me about Amrit's experience, skills, and background — I've memorized his whole resume.",
    qa: [
      {
        q: "What's his work experience?",
        a: "Quant Developer at a student-managed fund ($70K AUM), co-leads engineering at MagNet Agents, and undergraduate ML research producing published-quality work.",
      },
      {
        q: "What languages and frameworks?",
        a: "Python, TypeScript, JavaScript, C++, SQL, R. React, Next.js, FastAPI, LangChain, PyTorch, Docker, PostgreSQL, Supabase, AWS.",
      },
      {
        q: "What are his top awards?",
        a: "TidalTAMU 1st Place · Hook'em Hacks Startup Ready · Outstanding Undergraduate Researcher · President's Endowed Scholar · Pear VC pitch.",
      },
      {
        q: "Is he open to internships?",
        a: "Yes — actively looking for SWE, AI/ML, or quant research internships for Summer 2026. Email amritnair23@gmail.com.",
      },
      {
        q: "Tell me about his education.",
        a: "B.S. Computer Science + Mathematics at Texas A&M, Class of 2029. President's Endowed Scholar.",
      },
    ],
  },
  {
    id: "contact",
    name: "Pixel",
    breed: "Dalmatian",
    position: pos(42, 24),
    sprite: "opossum",
    tint: 0xf0f0f0,
    accentColor: "#fb923c",
    intro: "Pixel's the name. Want to get in touch with Amrit? I can point you in the right direction.",
    qa: [
      {
        q: "How do I send him an email?",
        a: "Email him at amritnair23@gmail.com. He typically responds within a day.",
      },
      {
        q: "Where is he on LinkedIn?",
        a: "linkedin.com/in/amritaraj-nair-227063313",
      },
      {
        q: "What's his GitHub?",
        a: "github.com/amritnair — AlphaForge, Shot Sensei, MagNet Agents, and hackathon repos.",
      },
      {
        q: "What roles is he looking for?",
        a: "SWE, AI/ML Engineering, Quant Research, or Founding Engineer. Summer 2026 internships and full-time after 2029.",
      },
    ],
  },
];
