import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MapPin, GraduationCap, Film, Dog, Trophy, Heart } from "lucide-react";

const vp = { once: true, amount: 0.15 };
const ease = [0.22, 1, 0.36, 1] as const;

const stats = [
  { value: "2",    label: "Research\nPositions", color: "text-blue-600"   },
  { value: "3+",   label: "Hackathons\nWon",      color: "text-violet-600" },
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
  { name: "Machine Learning",color: "bg-violet-50 text-violet-800 border-violet-200"},
  { name: "OpenCV",          color: "bg-red-50 text-red-800 border-red-200"       },
  { name: "Supabase",        color: "bg-emerald-50 text-emerald-800 border-emerald-200"},
  { name: "Docker",          color: "bg-blue-50 text-blue-800 border-blue-200"    },
  { name: "AWS",             color: "bg-yellow-50 text-yellow-800 border-yellow-200"},
  { name: "SQL",             color: "bg-indigo-50 text-indigo-800 border-indigo-200"},
];

const facts = [
  {
    id: "location",
    icon: MapPin,
    label: "Flower Mound, TX",
    detail: "Born and raised in Flower Mound, Texas. Suburb of Dallas. Where my love for the Mavs and Texas sunsets started.",
    color: "bg-blue-50 border-l-4 border-l-blue-500 text-blue-800",
    iconColor: "text-blue-500",
  },
  {
    id: "school",
    icon: GraduationCap,
    label: "CS + Math Minor",
    detail: "CS Honors + Math minor at Texas A&M. National Merit Scholar and President's Endowed Scholar. Basically I did okay on some tests.",
    color: "bg-sky-50 border-l-4 border-l-sky-500 text-sky-800",
    iconColor: "text-sky-500",
  },
  {
    id: "ball",
    icon: Trophy,
    label: "Basketball / Mavs",
    detail: "Die-hard basketball fan. I bleed Mavs blue. Luka is special but LeBron is the GOAT. No debate.",
    color: "bg-blue-50 border-l-4 border-l-blue-700 text-blue-900",
    iconColor: "text-blue-700",
  },
  {
    id: "dog",
    icon: Dog,
    label: "Kobe the dog",
    detail: "My dog's name is Kobe. Named after the legend. He's the most important member of the Nair household. Not biased.",
    color: "bg-amber-50 border-l-4 border-l-amber-500 text-amber-900",
    iconColor: "text-amber-500",
  },
  {
    id: "movie",
    icon: Film,
    label: "Arrival",
    detail: "Favorite movie is Arrival. The idea that language shapes how you perceive time absolutely broke my brain in the best way.",
    color: "bg-violet-50 border-l-4 border-l-violet-500 text-violet-900",
    iconColor: "text-violet-500",
  },
  {
    id: "dogs",
    icon: Heart,
    label: "Dog lover",
    detail: "If there's a dog within 50 feet, I will find it and pet it. No exceptions. Dogs are the best people.",
    color: "bg-pink-50 border-l-4 border-l-pink-400 text-pink-900",
    iconColor: "text-pink-400",
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
  const toggle = (id: string) => setActiveFact((prev) => (prev === id ? null : id));

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
                  Beyond the code — click to expand
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
                        className={`flex items-center gap-2 px-3 py-1.5 border text-xs font-mono font-medium transition-all duration-150 cursor-pointer select-none ${
                          isActive
                            ? "bg-primary text-white border-primary"
                            : "bg-card border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                        }`}
                      >
                        <Icon className="h-3.5 w-3.5" />
                        {f.label}
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
                      <div className={`mt-4 px-4 py-3 text-sm leading-relaxed ${current.color}`}>
                        {current.detail}
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
