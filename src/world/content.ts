/**
 * Every piece of text the 3D world can show, derived from the resume.
 * Zones are placed on a ~240x240 island centred on the origin.
 */

export type Link = { label: string; href: string };

export type Card = {
  id: string;
  title: string;
  subtitle: string;
  meta?: string;
  body: string;
  bullets: string[];
  tags?: string[];
  links?: Link[];
};

export type Zone = {
  id: string;
  /** Short word rendered as chunky 3D blocks above the district. */
  sign: string;
  /** Sub-caption under the sign, HTML overlay. */
  caption: string;
  position: [number, number];
  /** Radius the car must enter to open the district. */
  radius: number;
  color: string;
  glow: string;
  cards: Card[];
};

export const PROFILE = {
  name: "AMRITARAJ NAIR",
  short: "AMRIT",
  tagline: "CS Honors @ Texas A&M · builds AI products that ship",
  email: "amritnair23@gmail.com",
  phone: "214-316-6196",
  links: [
    { label: "GitHub", href: "https://github.com/amritnair" },
    { label: "LinkedIn", href: "https://linkedin.com/in/amritnair1" },
    { label: "Email", href: "mailto:amritnair23@gmail.com" },
    { label: "Résumé (PDF)", href: "Amritaraj_Nair_Resume.pdf" },
  ] as Link[],
};

/** Shown as glowing beacons — the "what's next" pylons. */
export const UPCOMING = [
  {
    id: "yc",
    name: "YC INTERNSHIP EXPO",
    detail: "Meeting YC-backed teams about summer engineering roles.",
    color: "#ff7a2f",
  },
  {
    id: "hackmit",
    name: "HACKMIT",
    detail: "Heading to Cambridge to build something ambitious in 36 hours.",
    color: "#31d8ff",
  },
];

export const ZONES: Zone[] = [
  {
    id: "work",
    sign: "WORK",
    caption: "Internships, research & the fund",
    position: [-46, -46],
    radius: 13,
    color: "#3b5bff",
    glow: "#8fa8ff",
    cards: [
      {
        id: "matic",
        title: "Matic",
        subtitle: "Software Engineer Intern",
        meta: "Jun 2026 – Aug 2026",
        body: "Shipped Pulsematic, an AI inbox-triage and auto-response system for athenaOne and other EHR platforms — giving physicians back 90+ minutes a day, roughly three more patients seen.",
        bullets: [
          "Architected a multi-agent orchestrator on GCP with Vertex AI to route, prioritise and draft across heterogeneous message types",
          "Built CI/CD pipelines on Google Cloud Build triggers, cutting release turnaround across services",
          "Engineered a PHI-compliant data pipeline on Firestore with strict access controls for protected health information at scale",
        ],
        tags: ["GCP", "Vertex AI", "Firestore", "Multi-agent", "CI/CD"],
      },
      {
        id: "magnet",
        title: "MagNet Agents",
        subtitle: "Software Engineer Intern",
        meta: "May 2025 – Aug 2025",
        body: "Cornell-backed legal-tech startup at the intersection of law and AI. Built the systems that turned public records into qualified leads.",
        bullets: [
          "Engineered scraping + data pipelines extracting high-value legal lead data from public sources",
          "Built LLM-powered outreach generation for personalised messaging and opportunity summaries",
          "Shipped the lead matching and tracking backend behind a platform doing $50K+ ARR",
        ],
        tags: ["Python", "LLMs", "Web scraping", "Backend"],
      },
      {
        id: "research",
        title: "AI Modeling for Bio-Economic Systems",
        subtitle: "Undergraduate Research · Texas A&M",
        meta: "Aug 2025 – Present",
        body: "Agent-based modeling and ML to optimise livestock nutrition under economic and environmental constraints.",
        bullets: [
          "Applied Mesa agent-based modeling + machine learning to nutrition optimisation",
          "Migrated legacy R workflows to Python for reproducibility and scale",
          "Built cross-platform simulations in Python, Java and NetLogo",
        ],
        tags: ["Mesa", "Python", "NetLogo", "ML"],
      },
      {
        id: "maroon",
        title: "Maroon Fund — Scholars of Finance",
        subtitle: "Quantitative Developer",
        meta: "Feb 2025 – Present",
        body: "Quant tooling for a $70K+ student-managed fund.",
        bullets: [
          "Built quantitative models and screening frameworks for equity research",
          "Engineered data pipelines and valuation tools over financial datasets",
          "Automated research workflows feeding stock pitches and portfolio decisions",
        ],
        tags: ["Quant", "Pandas", "Valuation"],
      },
    ],
  },
  {
    id: "builds",
    sign: "BUILDS",
    caption: "Things I made from zero",
    position: [46, -46],
    radius: 14,
    color: "#00d68f",
    glow: "#7dffd0",
    cards: [
      {
        id: "alphaforge",
        title: "AlphaForge",
        subtitle: "Founder & Solo Developer",
        meta: "March 2026",
        body: "The Robinhood + Scratch for aspiring quants. A full-stack platform to design, backtest and deploy trading strategies.",
        bullets: [
          "Multi-level Quant IDE: Scratch-like builder for beginners, multi-language editor for advanced users",
          "Backtesting and paper-trading engine over real historical data",
          "Real-time tracker for stocks, ETFs, indices and crypto with analytics and news",
          "Interactive learning layer that explains financial metrics inline",
          "Yahoo Finance, Alpaca and Seeking Alpha integrations, deployed on Vercel",
        ],
        tags: ["React", "TypeScript", "FastAPI", "Alpaca", "Vercel"],
        links: [{ label: "Live site", href: "https://alphaforgeai.lovable.app" }],
      },
      {
        id: "shotsensei",
        title: "Shot Sensei",
        subtitle: "Lead Developer & Co-Founder",
        meta: "Mar 2026 – Present",
        body: "Computer-vision pickleball coach and AI opponent. Won Hook'em Hacks 2026 and got invited back to McCombs to pitch Pear VC.",
        bullets: [
          "Real-time mode where you rally against an AI bot, anywhere",
          "Training mode using Gemini + ElevenLabs to coach serve, volley, forehand and backhand",
          "Pose and shot detection with OpenCV and YOLOv8 for stroke classification",
          "Supabase backend tracking win/loss records and shot-level scoring",
          "Pitched to Pear VC (Khalil Fuller) at UT Austin McCombs",
        ],
        tags: ["OpenCV", "YOLOv8", "Gemini", "ElevenLabs", "Supabase"],
        links: [
          { label: "Live site", href: "https://playshotsensei.com" },
          { label: "Demo video", href: "https://www.youtube.com/watch?v=v3SNs0O3G5g" },
        ],
      },
      {
        id: "clinicalhours",
        title: "ClinicalHours",
        subtitle: "CTO & Lead Engineer",
        meta: "Dec 2025 – Present",
        body: "An AI virtual receptionist that books clinical hours for pre-med students while they sleep. Placed in the top 10% of the Spring 2026 Y Combinator batch.",
        bullets: [
          "Top 10% of the Spring 2026 Y Combinator batch",
          "Email + call automation over the Gmail API and GoHighLevel to schedule clinic meetings",
          "MapBox and Google APIs for geolocation-based clinic discovery",
          "Processed large-scale U.S. hospital datasets in Python into production-ready formats",
          "Premium AI résumé and application tooling on OpenAI + Gemini",
          "Partnered with clinics including BCS Free Health Clinic",
        ],
        tags: ["Gmail API", "GoHighLevel", "MapBox", "OpenAI", "Gemini"],
        links: [{ label: "Live site", href: "https://clinicalhours.org" }],
      },
      {
        id: "harbor",
        title: "Harbor",
        subtitle: "Disaster preparedness platform",
        meta: "TidalTAMU 2026",
        body: "Helps communities plan for, coordinate during and recover from emergencies. 1st place in the Google Gemini track.",
        bullets: [
          "AI-powered resource matching for disaster response",
          "Community coordination and communication tooling",
          "Built on Google Gemini for decision support",
        ],
        tags: ["React", "Gemini", "Supabase"],
        links: [{ label: "Live site", href: "https://harbordisaster.xyz" }],
      },
      {
        id: "security",
        title: "Cyber Reasoning Systems Research",
        subtitle: "Texas A&M",
        meta: "Ongoing",
        body: "Benchmarked LLM-powered Cyber Reasoning Systems — Theori RoboDuck and TAMU AYNIAFB — on real-world repositories.",
        bullets: [
          "Evaluated automated vulnerability detection across C, Python and Java codebases",
          "Analysed reliability and generalisation across heterogeneous systems",
        ],
        tags: ["Security", "LLM eval", "Python"],
        links: [{ label: "Background", href: "https://theori.io/blog/aixcc-and-roboduck-63447" }],
      },
    ],
  },
  {
    id: "wins",
    sign: "WINS",
    caption: "Awards, scholarships & hardware",
    position: [-54, 54],
    radius: 13,
    color: "#ffb32f",
    glow: "#ffe08a",
    cards: [
      {
        id: "awards",
        title: "Awards",
        subtitle: "Trophies on the shelf",
        body: "Knock the trophies over with the dog. They respawn.",
        bullets: [
          "Hook'em Hacks 2026 (UT Austin) — Most Startup Ready + Multimodal Track winner",
          "TidalTAMU 2026 — Google Gemini Track, 1st place",
          "Outstanding Undergraduate Researcher Award",
          "President's Endowed Scholar",
          "Google Labs Makeathon",
          "FRC 4192 Impact Award",
        ],
      },
      {
        id: "education",
        title: "Texas A&M University",
        subtitle: "B.S. Computer Science Honors, Minor in Mathematics",
        meta: "Expected May 2029",
        body: "Coursework: Data Structures & Algorithms, C++ Design, Discrete Structures, Engineering Calculus III, Python Programming.",
        bullets: [],
        tags: ["Honors", "Math minor"],
      },
      {
        id: "stack",
        title: "Toolbox",
        subtitle: "What I reach for",
        body: "",
        bullets: [
          "Languages — Python, C++, Java, TypeScript, SQL",
          "Frameworks — React, Flask, FastAPI, Pandas, NumPy, Matplotlib",
          "Tools — Git, Docker, AWS EC2/IAM, Google Cloud, Supabase, CI/CD",
        ],
        tags: ["Python", "C++", "TypeScript", "React", "Docker", "GCP"],
      },
    ],
  },
  {
    id: "next",
    sign: "NEXT",
    caption: "Where I'll be soon",
    position: [54, 54],
    radius: 13,
    color: "#ff4d9d",
    glow: "#ffa6d0",
    cards: [
      {
        id: "upcoming",
        title: "Upcoming",
        subtitle: "On the calendar",
        body: "Two things I'm heading to next — come say hi at either.",
        bullets: [
          "YC Internship Expo — meeting YC-backed teams about summer engineering roles",
          "HackMIT — building something ambitious in Cambridge over 36 hours",
        ],
        tags: ["YC Internship Expo", "HackMIT"],
      },
      {
        id: "contact",
        title: "Get in touch",
        subtitle: "Fastest ways to reach me",
        body: "Always up for talking about AI products, quant tooling or a good hackathon idea.",
        bullets: [
          `Email — ${PROFILE.email}`,
          `Phone — ${PROFILE.phone}`,
          "Available year-round — internship, part-time or full-time research and engineering roles",
        ],
        links: PROFILE.links,
      },
    ],
  },
];

export const ZONE_BY_ID = Object.fromEntries(ZONES.map((z) => [z.id, z]));
