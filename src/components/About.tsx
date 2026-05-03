import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, X, MapPin, GraduationCap, Film, Dog, Trophy, Heart } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const vp = { once: true, amount: 0.15 };
const ease = [0.22, 1, 0.36, 1] as const;

const stats = [
  { value: "2",    label: "Research\nPositions", color: "text-blue-600"   },
  { value: "3+",   label: "Hackathons\nWon",      color: "text-teal-600" },
  { value: "$70K", label: "Fund\nManaged",         color: "text-amber-600" },
  { value: "10+",  label: "Projects\nShipped",     color: "text-sky-600"   },
];

const skills = [
  { name: "Python",          color: "bg-blue-50 text-blue-800 border-blue-200"    },
  { name: "C++",             color: "bg-slate-50 text-slate-700 border-slate-300" },
  { name: "TypeScript",      color: "bg-sky-50 text-sky-800 border-sky-200"       },
  { name: "React",           color: "bg-cyan-50 text-cyan-800 border-cyan-200"    },
  { name: "FastAPI",         color: "bg-teal-50 text-teal-800 border-teal-200"    },
  { name: "Java",            color: "bg-amber-50 text-amber-800 border-amber-200" },
  { name: "Machine Learning",color: "bg-indigo-50 text-indigo-800 border-indigo-200"},
  { name: "OpenCV",          color: "bg-emerald-50 text-emerald-800 border-emerald-200" },
  { name: "Supabase",        color: "bg-emerald-50 text-emerald-800 border-emerald-200"},
  { name: "Docker",          color: "bg-blue-50 text-blue-800 border-blue-200"    },
  { name: "AWS",             color: "bg-yellow-50 text-yellow-800 border-yellow-200"},
  { name: "SQL",             color: "bg-indigo-50 text-indigo-800 border-indigo-200"},
];

const bioImage = (name: string) => `${import.meta.env.BASE_URL}images/bio/${name}`;

type Fact = {
  id: string;
  icon: LucideIcon;
  label: string;
  title: string;
  eyebrow: string;
  detail: string;
  expanded: string;
  color: string;
  iconColor: string;
  panelColor: string;
  images?: Array<{ src: string; alt: string; caption: string }>;
};

const facts: Fact[] = [
  {
    id: "location",
    icon: MapPin,
    label: "Flower Mound, TX",
    title: "Flower Mound, TX",
    eyebrow: "Home base",
    detail: "Born and raised in Flower Mound, Texas. Suburb of Dallas. Where my love for the Mavs and Texas sunsets started.",
    expanded: "Flower Mound is home base: quiet suburb energy, big Texas skies, and close enough to Dallas that basketball, food, and city chaos were always nearby. It is also where a lot of my builder brain started: school projects, robotics-adjacent tinkering, and way too many late-night ideas.",
    images: [
      { src: bioImage("texas-map.svg"), alt: "Texas state map with Flower Mound marked near Dallas", caption: "Flower Mound, TX — suburb of Dallas." },
    ],
    color: "bg-blue-50 border-l-4 border-l-blue-500 text-blue-800",
    iconColor: "text-blue-500",
    panelColor: "from-blue-50 to-cyan-50 border-blue-200",
  },
  {
    id: "school",
    icon: GraduationCap,
    label: "CS + Math Minor",
    title: "CS Honors + Math",
    eyebrow: "Texas A&M",
    detail: "CS Honors + Math minor at Texas A&M. National Merit Scholar and President's Endowed Scholar. Basically I did okay on some tests.",
    expanded: "I like the overlap between systems, math, AI, and finance. The CS side gives me the tools to ship real products; the math side keeps me honest about modeling, probability, and whether an idea actually makes sense under pressure.",
    images: [
      { src: bioImage("computer.jpg"), alt: "Laptop open with code on screen", caption: "CS Honors + Math minor at Texas A&M." },
    ],
    color: "bg-sky-50 border-l-4 border-l-sky-500 text-sky-800",
    iconColor: "text-sky-500",
    panelColor: "from-sky-50 to-indigo-50 border-sky-200",
  },
  {
    id: "ball",
    icon: Trophy,
    label: "Basketball / Mavs",
    title: "Mavs blue, LeBron agenda",
    eyebrow: "Basketball worldview",
    detail: "Die-hard basketball fan. I bleed Mavs blue. Luka is special but LeBron is the GOAT. No debate.",
    expanded: "Basketball is the sport I watch like a second operating system. I am emotionally committed to the Mavs, but LeBron is still the GOAT. This image is basically the correct reaction to any bad anti-LeBron take.",
    images: [
      { src: bioImage("lebron-reaction.jpeg"), alt: "LeBron James reacting excitedly", caption: "The only acceptable debate posture." },
    ],
    color: "bg-blue-50 border-l-4 border-l-blue-700 text-blue-900",
    iconColor: "text-blue-700",
    panelColor: "from-blue-50 to-amber-50 border-blue-200",
  },
  {
    id: "dog",
    icon: Dog,
    label: "Kobe the dog",
    title: "Kobe the dog",
    eyebrow: "Household MVP",
    detail: "My dog's name is Kobe. Named after the legend. He's the most important member of the Nair household. Not biased.",
    expanded: "Kobe is fluffy, dramatic, extremely photogenic, and somehow always positioned like he knows the camera is on. Named after the legend, obviously. He has the confidence of a franchise player and the work ethic of someone who expects treats for existing.",
    images: [
      { src: bioImage("kobe-flowers.jpeg"), alt: "Kobe the dog sitting between two colorful flower arrangements", caption: "Kobe with flowers, looking like the main character." },
    ],
    color: "bg-amber-50 border-l-4 border-l-amber-500 text-amber-900",
    iconColor: "text-amber-500",
    panelColor: "from-amber-50 to-pink-50 border-amber-200",
  },
  {
    id: "movie",
    icon: Film,
    label: "Arrival",
    title: "Arrival",
    eyebrow: "Favorite movie",
    detail: "Favorite movie is Arrival. The idea that language shapes how you perceive time absolutely broke my brain in the best way.",
    expanded: "Arrival is the kind of sci-fi I love: quiet, emotional, mathematically eerie, and built around an idea that keeps unfolding after the credits. The language/time concept absolutely rewired my brain in the best way.",
    images: [
      { src: bioImage("arrival-poster.jpg"), alt: "Arrival movie poster", caption: "The movie that made linguistics feel like time travel." },
    ],
    color: "bg-violet-50 border-l-4 border-l-violet-500 text-violet-900",
    iconColor: "text-violet-500",
    panelColor: "from-violet-50 to-blue-50 border-violet-200",
  },
  {
    id: "dogs",
    icon: Heart,
    label: "Dog lover",
    title: "Dog lover",
    eyebrow: "Non-negotiable",
    detail: "If there's a dog within 50 feet, I will find it and pet it. No exceptions. Dogs are the best people.",
    expanded: "This is less of a fun fact and more of a core operating principle. Dogs improve every room they enter, and I have never met a dog photo I did not immediately want to show someone.",
    images: [
      { src: bioImage("kobe-friends.jpeg"), alt: "Two dogs sitting together in Valentine bandanas", caption: "Strong evidence for the thesis." },
    ],
    color: "bg-pink-50 border-l-4 border-l-pink-400 text-pink-900",
    iconColor: "text-pink-400",
    panelColor: "from-pink-50 to-rose-50 border-pink-200",
  },
];

const Card = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay, ease }}
    viewport={vp}
    className={`border border-border bg-card/95 backdrop-blur-sm card-glow p-7 ${className}`}
  >
    {children}
  </motion.div>
);

const About = () => {
  const [activeFact, setActiveFact] = useState<string | null>(null);
  const current = facts.find((f) => f.id === activeFact) ?? null;
  const CurrentIcon = current?.icon;
  const toggle = (id: string) => setActiveFact((prev) => (prev === id ? null : id));
  const closeFact = () => {
    setActiveFact(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="about" className="py-32 relative z-10 section-sage">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">

          {/* Editorial section header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            viewport={vp}
            className="mb-14 relative"
          >
            <div className="absolute -top-4 right-0 section-index select-none">01</div>
            <p className="section-num mb-3">01 · About</p>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-foreground leading-[0.95]">
              The person<br />
              <span className="text-gradient italic">behind the code</span>
            </h2>
          </motion.div>

          {/* Top row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px border border-border mb-px bg-border">

            {/* Photo card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease }}
              viewport={vp}
              className="bg-card/95 backdrop-blur-sm flex flex-col items-center justify-center p-8 gap-5"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="w-36 h-36 overflow-hidden border-2 border-border shadow-md"
              >
                <img
                  src="/amritaraj-nair-portfolio/images/headshot.png"
                  alt="Amritaraj Nair"
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>
              <div className="text-center">
                <p className="display font-bold text-xl text-foreground leading-tight">Amritaraj Nair</p>
                <p className="text-xs mono text-muted-foreground mt-1 tracking-[0.15em] uppercase">Amrit for short</p>
              </div>
              <div className="flex items-center gap-1.5 text-xs mono text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-blue-400" />
                <span>Flower Mound, TX</span>
              </div>
            </motion.div>

            {/* Bio */}
            <Card delay={0.1} className="md:col-span-2 rounded-none">
              <p className="text-[10px] mono text-muted-foreground uppercase tracking-[0.22em] mb-5">Bio</p>
              <p className="text-foreground leading-relaxed mb-4 text-base">
                CS Honors + Math minor at Texas A&amp;M, National Merit Scholar &amp; President's
                Endowed Scholar. I build AI systems, quant tools, and full-stack products.
                Cornell-backed legal tech startup. Award-winning pickleball AI that got me
                in front of Pear VC.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Proficient in C++ and systems programming. Researching AI at TAMU across two
                concurrent projects: agent-based livestock modeling and LLM-powered
                cybersecurity. Math, finance, and software is where I want to be.
              </p>

              <div>
                <p className="text-[10px] mono text-muted-foreground uppercase tracking-[0.22em] mb-3">
                  Beyond the code — open a panel
                </p>
                <div className="flex flex-wrap gap-2">
                  {facts.map((f) => {
                    const Icon = f.icon;
                    const isActive = activeFact === f.id;
                    return (
                      <motion.button
                        key={f.id}
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => toggle(f.id)}
                        aria-expanded={isActive}
                        className={`flex items-center gap-2 px-3 py-1.5 border text-xs font-mono font-medium transition-all duration-150 cursor-pointer select-none ${
                          isActive
                            ? "bg-primary text-white border-primary"
                            : "bg-card border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                        }`}
                      >
                        <Icon className="h-3.5 w-3.5" />
                        {f.label}
                        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isActive ? "rotate-180" : ""}`} />
                      </motion.button>
                    );
                  })}
                </div>
                <AnimatePresence mode="wait">
                  {current && (
                    <motion.div
                      key={current.id}
                      initial={{ opacity: 0, y: 6, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0, y: -4, height: 0 }}
                      transition={{ duration: 0.22, ease }}
                      className="overflow-hidden"
                    >
                      <div className={`mt-4 border bg-gradient-to-br p-4 sm:p-5 ${current.panelColor}`}>
                        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(190px,260px)] lg:items-start">
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-3">
                              <div className="flex items-center gap-2">
                                {CurrentIcon && <CurrentIcon className={`h-4 w-4 ${current.iconColor}`} />}
                                <p className="text-[10px] mono text-muted-foreground uppercase tracking-[0.22em]">
                                  {current.eyebrow}
                                </p>
                              </div>
                              <button
                                onClick={closeFact}
                                className="flex items-center gap-1.5 px-2.5 py-1 border border-border/60 bg-white/60 hover:bg-white/90 text-muted-foreground hover:text-foreground transition-all duration-150 text-[10px] mono uppercase tracking-wider"
                                aria-label="Close panel and return to top"
                              >
                                <X className="h-3 w-3" />
                                Close
                              </button>
                            </div>
                            <h3 className="display text-2xl font-black text-foreground leading-tight mb-3">
                              {current.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-foreground mb-3">
                              {current.detail}
                            </p>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                              {current.expanded}
                            </p>
                          </div>

                          {current.images && current.images.length > 0 ? (
                            <div className={`grid gap-3 ${current.images.length > 1 ? "sm:grid-cols-2 lg:grid-cols-1" : ""}`}>
                              {current.images.map((image) => (
                                <figure key={image.src} className="overflow-hidden border border-border/70 bg-white/55 shadow-sm">
                                  <div className="aspect-[4/3] bg-muted">
                                    <img
                                      src={image.src}
                                      alt={image.alt}
                                      className={`h-full w-full ${current.id === "movie" ? "object-contain bg-slate-900" : "object-cover"}`}
                                      loading="lazy"
                                    />
                                  </div>
                                  <figcaption className="px-3 py-2 text-[10px] mono uppercase tracking-[0.14em] text-muted-foreground">
                                    {image.caption}
                                  </figcaption>
                                </figure>
                              ))}
                            </div>
                          ) : (
                            <div className="border border-border/70 bg-white/45 p-4">
                              <p className="display text-4xl font-black text-primary/25 leading-none">
                                {current.label}
                              </p>
                              <p className="mt-3 text-[10px] mono uppercase tracking-[0.18em] text-muted-foreground">
                                More context, less resume voice.
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Card>
          </div>

          {/* Stats row — flush grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border mb-px">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1 + i * 0.05, ease }}
                viewport={vp}
                className="bg-card/95 backdrop-blur-sm p-7"
              >
                <motion.p
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.05, ease }}
                  viewport={vp}
                  className={`display text-5xl font-black mb-1 leading-none ${s.color}`}
                >
                  {s.value}
                </motion.p>
                <p className="text-[10px] mono text-muted-foreground whitespace-pre-line uppercase tracking-wider">{s.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Bottom row — building + tech */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease }}
              viewport={vp}
              className="bg-card/95 backdrop-blur-sm p-7 border-l-4 border-l-primary"
            >
              <p className="text-[10px] mono text-blue-600 uppercase tracking-[0.22em] mb-5">Currently building</p>
              <div className="space-y-5">
                {[
                  { name: "AlphaForge",    sub: "Robinhood + Scratch for quants" },
                  { name: "Shot Sensei",   sub: "AI pickleball coach & game"     },
                  { name: "ClinicalHours", sub: "AI receptionist for clinics"     },
                ].map((item) => (
                  <div key={item.name}>
                    <p className="display font-bold text-sm text-foreground">{item.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.sub}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25, ease }}
              viewport={vp}
              className="bg-card/95 backdrop-blur-sm p-7 md:col-span-2"
            >
              <p className="text-[10px] mono text-muted-foreground uppercase tracking-[0.22em] mb-5">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((s, i) => (
                  <motion.span
                    key={s.name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.24, delay: 0.3 + i * 0.025, ease }}
                    viewport={vp}
                    whileHover={{ y: -2, transition: { duration: 0.1 } }}
                    className={`px-2.5 py-1 border text-[11px] mono font-medium cursor-default select-none ${s.color}`}
                  >
                    {s.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
