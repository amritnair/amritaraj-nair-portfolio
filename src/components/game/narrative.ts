/** Kobe's Journey — narrative data (regions, quests, memory pages). */

export type RegionId =
  | "barkwood"
  | "aggie"
  | "innovation"
  | "healing"
  | "discovery"
  | "workshop"
  | "hackathon"
  | "downtown";

export interface QA { q: string; a: string; }

export interface MemoryPage {
  id: string;
  title: string;
  region: string;
  story: string;
  tagline?: string;
}

export interface RegionConfig {
  id: RegionId;
  name: string;
  subtitle: string;
  /** Tile bounds inclusive [x1, y1, x2, y2] */
  bounds: [number, number, number, number];
  accent: string;
}

export interface NpcConfig {
  id: string;
  name: string;
  breed: string;
  region: RegionId;
  position: [number, number];
  sprite: "opossum" | "frog" | "eagle";
  tint?: number;
  accentColor: string;
  questTitle: string;
  memoryId: string;
  intro: string;
  qa: QA[];
  /** Elder dogs trigger ending instead of a standard quest. */
  elder?: boolean;
}

export const OPENING_LETTER = `Every person leaves behind a story.

Some stories are written in books.
Others are written through curiosity, kindness,
and the things they build.

Amrit's story has been scattered across the world.

Only you can piece it back together.

— The Council of Elder Dogs`;

export const ENDING_SPEECH = `Some chase titles. Others chase trophies.

But the best journeys belong to those
who never stop learning.`;

export const ENDING_MESSAGE = `Thanks for taking the time to explore my world. I hope this game gave you a better sense of who I am—not just what I've accomplished. If you're looking for someone who loves building, learning, and solving meaningful problems, I'd love to connect.`;

export const CONTACT_LINKS = [
  { label: "Resume", url: "#/resume" },
  { label: "GitHub", url: "https://github.com/amritnair" },
  { label: "LinkedIn", url: "https://linkedin.com/in/amritaraj-nair-227063313" },
  { label: "Email", url: "mailto:amritnair23@gmail.com" },
] as const;

export const REGIONS: RegionConfig[] = [
  { id: "barkwood",   name: "Barkwood Village",   subtitle: "Home",              bounds: [20, 24, 32, 36], accent: "#8b7355" },
  { id: "aggie",      name: "Aggie Village",      subtitle: "University town",   bounds: [2,  14, 16, 28], accent: "#500000" },
  { id: "innovation", name: "Innovation Harbor",  subtitle: "City of builders",  bounds: [36, 14, 50, 28], accent: "#2060a0" },
  { id: "healing",    name: "Healing Hills",      subtitle: "Care & technology", bounds: [20, 2,  32, 12], accent: "#48a878" },
  { id: "discovery",  name: "Discovery Forest",   subtitle: "Research campus",   bounds: [2,  2,  16, 12], accent: "#3a6838" },
  { id: "workshop",   name: "Creator's Workshop", subtitle: "Makerspace",        bounds: [36, 28, 50, 38], accent: "#a06020" },
  { id: "hackathon",  name: "Hackathon City",     subtitle: "Festival of ideas", bounds: [36, 2,  50, 12], accent: "#9040c0" },
  { id: "downtown",   name: "Downtown Park",      subtitle: "Just hang out",     bounds: [18, 36, 34, 39], accent: "#609040" },
];

export const MEMORY_PAGES: MemoryPage[] = [
  {
    id: "curiosity",
    title: "The Spark",
    region: "Everywhere",
    tagline: "Curiosity connects everything.",
    story: "Amrit has never wanted to stay in one lane. AI, medicine, startups, finance, research, software—he's always been excited by learning something new and figuring out how technology can make people's lives better.",
  },
  {
    id: "aggie_village",
    title: "Late Nights & Big Questions",
    region: "Aggie Village",
    tagline: "Learning because it's hard—and worth it.",
    story: "At Texas A&M, Amrit studies Computer Science and Mathematics as a President's Endowed Scholar. It's not about collecting credentials. He loves the feeling of staring at a hard problem with friends, staying up too late, and finally watching something click.",
  },
  {
    id: "innovation_harbor",
    title: "Blank Screen to Something Real",
    region: "Innovation Harbor",
    tagline: "Ideas deserve to become products.",
    story: "Amrit lights up when he turns an idea into software people can actually use. He's currently CTO of a med-tech startup, building AI tools that help clinicians—not to chase buzzwords, but because real products can change how care gets delivered.",
  },
  {
    id: "healing_hills",
    title: "Time Back for Care",
    region: "Healing Hills",
    tagline: "Technology should give people more time with patients.",
    story: "Amrit spends time in clinical settings learning how healthcare works from the people who live it. As a Software Engineer intern at Matic, he builds AI that cuts repetitive work so doctors can focus on what matters: the person in front of them.",
  },
  {
    id: "discovery_forest",
    title: "Patterns in the Noise",
    region: "Discovery Forest",
    tagline: "Research is curiosity with rigor.",
    story: "Amrit loves research because it blends programming, math, and scientific thinking. He enjoys computational projects where the goal isn't a demo—it's understanding how complex systems actually behave.",
  },
  {
    id: "creators_workshop",
    title: "Making Hard Things Approachable",
    region: "Creator's Workshop",
    tagline: "Build tools that teach.",
    story: "AlphaForge is Amrit's passion project: an interactive way to learn quantitative finance without drowning in jargon. He built it because he believes difficult subjects become reachable when the software meets you where you are.",
  },
  {
    id: "hackathon_city",
    title: "Build Weekends, Real Friends",
    region: "Hackathon City",
    tagline: "Pressure reveals who you are as a teammate.",
    story: "Amrit travels to hackathons because he loves solving hard problems fast alongside ambitious builders. Wins like Hook'em Hacks and TidalTAMU matter—but the friendships, the 3 a.m. breakthroughs, and the shared excitement matter more.",
  },
  {
    id: "downtown_park",
    title: "Off the Clock",
    region: "Downtown Park",
    tagline: "He's a person, not a résumé.",
    story: "Basketball is his favorite sport. Lifelong Dallas Mavericks fan. Comfort movie: The Adventures of Tintin. He's catching up on JoJo's Bizarre Adventure, loves exploring new ideas, and builds things just for fun when nobody's watching.",
  },
];

function pos(tx: number, ty: number): [number, number] {
  return [tx * 16 + 8, ty * 16 + 12];
}

export const NPC_DOGS: NpcConfig[] = [
  {
    id: "elder",
    name: "Sage",
    breed: "Old English Sheepdog",
    region: "barkwood",
    position: pos(26, 28),
    sprite: "opossum",
    tint: 0xd8d0c8,
    accentColor: "#8b7355",
    questTitle: "Begin the Journey",
    memoryId: "curiosity",
    elder: true,
    intro: "Welcome, Kobe. The Council sent you because you're curious—and curiosity is how every great story starts. Amrit's memories are scattered across this region. Help the dogs you meet, and his story will come back to life.",
    qa: [
      { q: "What am I really looking for?", a: "Not trophies or job titles. Clues about who Amrit is—what motivates him, what he builds, what he cares about, and the kind of teammate he'd be." },
      { q: "Where should I go first?", a: "Any direction speaks a different chapter. Aggie Village to the west, Innovation Harbor to the east, Healing Hills to the north. Follow your nose." },
    ],
  },
  {
    id: "penny",
    name: "Penny",
    breed: "Corgi Scholar",
    region: "aggie",
    position: pos(9, 21),
    sprite: "frog",
    tint: 0x500000,
    accentColor: "#500000",
    questTitle: "Study Session Stories",
    memoryId: "aggie_village",
    intro: "Oh! You must be the pup from Barkwood. I know Aggie Town's secret—why Amrit actually likes studying here.",
    qa: [
      { q: "Why does he love learning?", a: "Hard problems excite him. CS and Math at A&M isn't a checkbox—it's two lenses for understanding the world. He earned the President's Endowed Scholarship because curiosity came first." },
      { q: "What's it like building with him?", a: "He'd rather stay up debugging with friends than work alone. He brings energy when a problem feels impossible—and patience when someone needs catching up." },
    ],
  },
  {
    id: "nova",
    name: "Nova",
    breed: "Border Collie Founder",
    region: "innovation",
    position: pos(43, 21),
    sprite: "eagle",
    tint: 0x4080c0,
    accentColor: "#2060a0",
    questTitle: "Ship Something Real",
    memoryId: "innovation_harbor",
    intro: "Innovation Harbor never sleeps. I watched Amrit go from a blank screen to something clinicians actually use.",
    qa: [
      { q: "What does he love about building?", a: "The moment an idea becomes real software. He doesn't build for slides—he builds for people who'll use it tomorrow." },
      { q: "What's he working on now?", a: "He's CTO of a med-tech startup—AI tools that help healthcare workers. The goal isn't hype. It's giving clinicians time back." },
    ],
  },
  {
    id: "willow",
    name: "Willow",
    breed: "Therapy Golden",
    region: "healing",
    position: pos(26, 7),
    sprite: "opossum",
    tint: 0xf0c878,
    accentColor: "#48a878",
    questTitle: "Care That Counts",
    memoryId: "healing_hills",
    intro: "*gentle tail wag* Healing Hills is quiet, but important. Amrit spends real time here—not for a line on a résumé.",
    qa: [
      { q: "What did he learn clinically?", a: "How healthcare actually works from nurses and doctors in the room. He listens more than he talks. That humility shows up in what he builds." },
      { q: "What about his internship?", a: "At Matic he ships AI that removes repetitive work from doctors' days. Less charting fatigue, more time with patients—that's the whole point." },
    ],
  },
  {
    id: "maple",
    name: "Maple",
    breed: "Forest Researcher",
    region: "discovery",
    position: pos(9, 7),
    sprite: "frog",
    tint: 0x3a6838,
    accentColor: "#3a6838",
    questTitle: "Solve the Simulation",
    memoryId: "discovery_forest",
    intro: "Shhh—the forest is thinking. Amrit comes here when a problem needs math, code, and patience in equal measure.",
    qa: [
      { q: "Why does he like research?", a: "It's curiosity with structure. He gets to ask 'why does this system behave this way?' and actually find out." },
      { q: "What kind of work?", a: "Computational projects blending ML, math, and scientific thinking—not demos for demos' sake, but understanding complex systems." },
    ],
  },
  {
    id: "forge",
    name: "Forge",
    breed: "Workshop Retriever",
    region: "workshop",
    position: pos(43, 33),
    sprite: "opossum",
    tint: 0xc08040,
    accentColor: "#a06020",
    questTitle: "Tour AlphaForge",
    memoryId: "creators_workshop",
    intro: "Welcome to the Workshop! Biggest attraction here: AlphaForge—built because Amrit hates gatekeeping.",
    qa: [
      { q: "What is AlphaForge?", a: "An interactive platform to learn quantitative finance through simulations and tools—not lectures. He built it solo because he wished something like it existed." },
      { q: "Why build educational tools?", a: "Hard subjects shouldn't feel impossible. Good software meets you where you are and makes the next step obvious." },
    ],
  },
  {
    id: "rally",
    name: "Rally",
    breed: "Hackathon Husky",
    region: "hackathon",
    position: pos(43, 7),
    sprite: "eagle",
    tint: 0x9040c0,
    accentColor: "#9040c0",
    questTitle: "Festival Stories",
    memoryId: "hackathon_city",
    intro: "HOOK'EM! Another weekend, another build! Amrit lives for this energy—you should've seen Tidal Hack.",
    qa: [
      { q: "Why hackathons?", a: "Forty-eight hours, impossible idea, great teammates. He loves the pressure because it reveals how people collaborate when it counts." },
      { q: "Any wins to brag about?", a: "Hook'em Hacks Startup Ready Award, TidalTAMU 1st in the Google Gemini track—but ask him about the teams and he'll talk for an hour." },
    ],
  },
  {
    id: "buddy",
    name: "Buddy",
    breed: "Park Bench Beagle",
    region: "downtown",
    position: pos(26, 37),
    sprite: "frog",
    tint: 0x90b060,
    accentColor: "#609040",
    questTitle: "Just Chatting",
    memoryId: "downtown_park",
    intro: "No quests here, friend. Just vibes. Wanna know what Amrit's like when he's not coding?",
    qa: [
      { q: "What does he do for fun?", a: "Basketball—favorite sport. Die-hard Dallas Mavericks fan. Comfort movie is The Adventures of Tintin." },
      { q: "Anything else?", a: "Anime fan—currently on JoJo's Bizarre Adventure. Loves reading, exploring ideas, and building random side projects nobody asked for." },
      { q: "What kind of teammate is he?", a: "Curious, kind, and relentless when something matters. He'd rather lift the team than take credit." },
    ],
  },
];

export const ALL_MEMORY_IDS = MEMORY_PAGES.map(m => m.id);

export function getMemory(id: string): MemoryPage | undefined {
  return MEMORY_PAGES.find(m => m.id === id);
}

export function getRegion(id: RegionId): RegionConfig | undefined {
  return REGIONS.find(r => r.id === id);
}
