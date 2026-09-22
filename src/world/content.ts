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
  /**
   * Kept off the landing page and shown only in the full gallery. For work
   * that is real and still live, but no longer what he would lead with.
   */
  archived?: boolean;
  /**
   * A screenshot of the thing itself, under `public/shots/`. Captured from the
   * live site by `npm run shots`, so it cannot drift from what is deployed.
   * The 3D world ignores this; only the written page uses it.
   */
  shot?: string;
  /**
   * A muted, looping background clip for the card — a base path under `public/`
   * with no extension; `.webm` and `.mp4` are appended. Takes the media slot
   * over `shot`. Used only by the written page.
   */
  video?: string;
  /** Poster still for `video`, shown until it plays and under reduced motion. */
  poster?: string;
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
    { label: "LinkedIn", href: "https://www.linkedin.com/in/amritnair1" },
    { label: "Email", href: "mailto:amritnair23@gmail.com" },
    { label: "Résumé (PDF)", href: "Amritaraj_Nair_Resume.pdf" },
  ] as Link[],
};

/** Shown as glowing beacons — the "what's next" pylons. */
export const UPCOMING = [
  {
    id: "thorp",
    name: "THORP",
    detail: "Building parallel agent orchestration to generate and score the feed.",
    color: "#ff7a2f",
  },
  {
    id: "clinicalhours",
    name: "CLINICALHOURS",
    detail: "Scaling the receptionist agent to more clinics after the YC batch.",
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
        body: "Shipped Pulsematic, an AI inbox-triage and auto-drafting system for athenaOne and other EHR inboxes.",
        bullets: [
          "Saved physicians 90+ minutes per provider daily — roughly 3 more patients a day",
          "Built a multi-agent orchestrator on GCP + Vertex AI to route, prioritise and optimise drafts",
          "Automated CI/CD with Google Cloud Build triggers, cutting release turnaround across services",
          "Engineered a PHI-compliant data pipeline on Firestore with strict access controls",
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
          "Engineered scraping and data pipelines extracting high-value legal lead data from public sources",
          "Built LLM-powered outreach generating personalised messaging and legal-opportunity summaries",
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
          "Applied Mesa agent-based modeling and machine learning to nutrition optimisation",
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
        body: "Quantitative models and screening frameworks for equity research across a $70K+ student-managed fund.",
        bullets: [
          "Built valuation tools and data pipelines over financial datasets, speeding analysis",
          "Automated the research workflows powering stock-pitch and portfolio decisions",
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
    radius: 13,
    color: "#00c2a8",
    glow: "#5ef0cf",
    cards: [
      {
        id: "thorp",
        title: "Thorp",
        subtitle: "Founder & Solo Developer",
        meta: "Mar 2026 – Present",
        body: "The TikTok of finance for next-gen traders. An iOS and web app that turns finance news into a swipeable short-form feed. Invited by YC partner Ryan Choi to the YC Startup Intern Expo.",
        bullets: [
          "Built a fault-tolerant distributed layer across 5 providers on stateless serverless workers, making market data 10× faster (1.72s → 0.17s p50) with 50× fewer API calls",
          "Engineered a backtesting engine — 9 indicators, expectancy, drawdown — that exposes overfitting",
          "Shipped a visual strategy builder with Python export and a from-scratch SVG charting engine",
          "Built the social layer — posts, follows, paper-trading P&L — on PostgreSQL",
        ],
        tags: ["iOS", "TypeScript", "PostgreSQL"],
        shot: "shots/thorp-home.jpg",
        links: [{ label: "thorp-trade.vercel.app", href: "https://thorp-trade.vercel.app" }],
      },
      {
        id: "clinicalhours",
        title: "ClinicalHours",
        subtitle: "CTO",
        meta: "Dec 2025 – Present",
        body: "An AI email and call automation system acting as a virtual receptionist to schedule clinic meetings. Placed top 10% of the Spring 2026 Y Combinator batch.",
        bullets: [
          "Built the receptionist agent on the Gmail API and GoHighLevel",
          "Integrated MapBox, Google APIs and Resend for geolocation clinic discovery and comms pipelines",
          "Processed large-scale U.S. hospital datasets into production-ready formats in Python",
          "Shipped AI resume and application tools; partnered with clinics including BCS Free Health Clinic",
        ],
        tags: ["OpenAI", "Gemini", "Gmail API", "MapBox"],
        shot: "shots/clinicalhours.jpg",
        links: [{ label: "clinicalhours.org", href: "https://clinicalhours.org" }],
      },
      {
        id: "harbor",
        title: "Harbor",
        subtitle: "Disaster preparedness platform",
        meta: "TidalTAMU 2026",
        body: "Helps communities plan for, coordinate during and recover from emergencies. First place in the Google Gemini track.",
        bullets: [
          "AI-powered resource matching for disaster response",
          "Community coordination and communication tooling",
          "Live natural-disaster news and an interactive globe, built on Google Gemini",
        ],
        tags: ["React", "Gemini", "Supabase"],
        archived: true,
        links: [{ label: "harbordisaster.xyz", href: "https://harbordisaster.xyz" }],
      },
      {
        id: "shotsensei",
        title: "Shot Sensei",
        subtitle: "Co-Founder & Lead Developer",
        meta: "Mar 2026",
        body: "A computer-vision pickleball platform that coaches your strokes. Won the Startup Ready Award at Hook'em Hacks 2026 at UT Austin.",
        bullets: [
          "Shipped a real-time mode — play against an AI bot — plus a training mode coaching every stroke",
          "Implemented pose and shot detection with OpenCV and YOLOv8",
          "Used Gemini and ElevenLabs for spoken coaching; Supabase for win/loss and shot-level analytics",
          "Invited to McCombs School of Business to pitch Pear VC",
        ],
        tags: ["OpenCV", "YOLOv8", "Gemini", "ElevenLabs", "Supabase"],
        shot: "shots/shotsensei.jpg",
        video: "shots/shotsensei",
        poster: "shots/shotsensei-poster.jpg",
        links: [
          { label: "Devpost", href: "https://devpost.com/software/a-d3b6nf" },
          { label: "playshotsensei.com", href: "https://playshotsensei.com" },
        ],
      },
      {
        id: "prophecy",
        title: "Prophecy",
        subtitle: "Lead Developer · HackMIT 2026 Track Finalist",
        meta: "Sep 2026",
        body: "An MCP-powered developer tool that maps a codebase's dependencies and hands AI coding agents the exact context, and the blast radius, before they touch anything.",
        bullets: [
          "Maps codebase dependencies to find a change's blast radius and deliver targeted context to AI coding agents",
          "Built collaborative agent workflows so multiple AI assistants share file-level findings, track overlapping work, and skip redundant exploration",
          "Automated change-risk analysis over the dependency graph and concurrent agent sessions to surface breaking changes before a commit",
        ],
        tags: ["MCP", "AI agents", "Dependency graphs", "Developer tools"],
        shot: "shots/prophecy.jpg",
        links: [{ label: "amritnair.github.io/prophecy", href: "https://amritnair.github.io/prophecy/" }],
      },
    ],
  },
  {
    id: "wins",
    sign: "WINS",
    caption: "Awards, honors & the toolbox",
    position: [-54, 54],
    radius: 13,
    color: "#ff8a3d",
    glow: "#ffb887",
    cards: [
      {
        id: "awards",
        title: "Awards",
        subtitle: "Trophies on the shelf",
        body: "",
        bullets: [
          "YC Startup Intern Expo — recruited by a YC partner",
          "UT Austin Hook'em Hacks 2026 Winner — Most Startup Ready + Multimodal Track",
          "TidalTAMU Google Gemini Track — 1st Place, 2026",
          "HackMIT 2026 — Track Finalist",
          "Outstanding Undergraduate Researcher Award",
          "President's Endowed Scholar",
        ],
      },
      {
        id: "education",
        title: "Texas A&M University",
        subtitle: "B.S. Computer Science Honors, Minor in Mathematics",
        meta: "Expected May 2029",
        body: "",
        bullets: [
          "Data Structures & Algorithms",
          "C++ Design",
          "Discrete Structures",
          "Computer Architecture and Assembly",
          "Python Programming",
        ],
      },
      {
        id: "stack",
        title: "Toolbox",
        subtitle: "What I reach for",
        body: "",
        bullets: [
          "Languages — Python, C++, Java, TypeScript, SQL",
          "Frameworks — React, Flask, FastAPI, Pandas, NumPy, Matplotlib",
          "Tools — Git, Docker, AWS EC2/IAM, Google Cloud, Vercel, PostgreSQL, Supabase, CI/CD",
        ],
      },
    ],
  },
  {
    id: "next",
    sign: "NEXT",
    caption: "What I'm building now",
    position: [54, 54],
    radius: 13,
    color: "#c341ff",
    glow: "#e0a6ff",
    cards: [
      {
        id: "upcoming",
        title: "In progress",
        subtitle: "On the bench right now",
        body: "",
        bullets: [
          "Thorp — parallel agent orchestration to generate and score feed content",
          "ClinicalHours — scaling the receptionist agent to more clinics after the YC batch",
          "Bio-economic research — cross-platform simulations for sustainability outcomes",
        ],
      },
      {
        id: "contact",
        title: "Get in touch",
        subtitle: "Fastest ways to reach me",
        body: "Open to summer 2027 engineering internships and anything ambitious in between.",
        bullets: [],
        links: [
          { label: "Email", href: "mailto:amritnair23@gmail.com" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/amritnair1" },
          { label: "GitHub", href: "https://github.com/amritnair" },
        ],
      },
    ],
  },
];

export const ZONE_BY_ID = Object.fromEntries(ZONES.map((zone) => [zone.id, zone]));
