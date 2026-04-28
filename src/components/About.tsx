import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MapPin, GraduationCap, Film, Dog, Trophy, Heart } from "lucide-react";

const vp = { once: true, amount: 0.15 };
const ease = [0.22, 1, 0.36, 1] as const;

const stats = [
  { value: "2",   label: "Research\nPositions", color: "text-orange-500" },
  { value: "3+",  label: "Hackathons\nWon",      color: "text-teal-600"  },
  { value: "$70K",label: "Fund\nManaged",         color: "text-amber-600" },
  { value: "10+", label: "Projects\nShipped",     color: "text-orange-400"},
];

const skills = [
  { name: "Python",          color: "bg-blue-100 text-blue-800 border-blue-200"    },
  { name: "C++",             color: "bg-slate-100 text-slate-700 border-slate-200" },
  { name: "TypeScript",      color: "bg-sky-100 text-sky-800 border-sky-200"       },
  { name: "React",           color: "bg-cyan-100 text-cyan-800 border-cyan-200"    },
  { name: "FastAPI",         color: "bg-teal-100 text-teal-800 border-teal-200"    },
  { name: "Java",            color: "bg-orange-100 text-orange-800 border-orange-200"},
  { name: "Machine Learning",color: "bg-violet-100 text-violet-800 border-violet-200"},
  { name: "OpenCV",          color: "bg-red-100 text-red-800 border-red-200"       },
  { name: "Supabase",        color: "bg-emerald-100 text-emerald-800 border-emerald-200"},
  { name: "Docker",          color: "bg-blue-100 text-blue-800 border-blue-200"    },
  { name: "AWS",             color: "bg-yellow-100 text-yellow-800 border-yellow-200"},
  { name: "SQL",             color: "bg-indigo-100 text-indigo-800 border-indigo-200"},
];

const facts = [
  {
    id: "location",
    icon: MapPin,
    label: "Flower Mound, TX",
    detail: "Born and raised in Flower Mound, Texas — a suburb of Dallas where I developed my love for the Mavs and Texas sunsets.",
    color: "bg-orange-50 border-orange-200 text-orange-700",
    detailBg: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    id: "school",
    icon: GraduationCap,
    label: "Computer Science",
    detail: "CS Honors + Math minor at Texas A&M. National Merit Scholar and President's Endowed Scholar — basically I did okay on some tests.",
    color: "bg-sky-50 border-sky-200 text-sky-700",
    detailBg: "bg-sky-50",
    iconColor: "text-sky-500",
  },
  {
    id: "ball",
    icon: Trophy,
    label: "Basketball",
    detail: "Die-hard basketball fan. I bleed Mavs blue — Luka is special but LeBron is the GOAT. No debate.",
    color: "bg-red-50 border-red-200 text-red-700",
    detailBg: "bg-red-50",
    iconColor: "text-red-500",
  },
  {
    id: "dog",
    icon: Dog,
    label: "Kobe the dog",
    detail: "My dog's name is Kobe — named after the legend. He's the most important member of the Nair household. Not biased.",
    color: "bg-amber-50 border-amber-200 text-amber-700",
    detailBg: "bg-amber-50",
    iconColor: "text-amber-500",
  },
  {
    id: "movie",
    icon: Film,
    label: "Arrival",
    detail: "Favorite movie is Arrival. The idea that language shapes how you perceive time absolutely broke my brain in the best way.",
    color: "bg-violet-50 border-violet-200 text-violet-700",
    detailBg: "bg-violet-50",
    iconColor: "text-violet-500",
  },
  {
    id: "dogs",
    icon: Heart,
    label: "Dog lover",
    detail: "If there's a dog within 50 feet, I will find it and pet it. No exceptions. Dogs are the best people.",
    color: "bg-pink-50 border-pink-200 text-pink-700",
    detailBg: "bg-pink-50",
    iconColor: "text-pink-500",
  },
];

const Card = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.55, delay, ease }}
    viewport={vp}
    className={`rounded-2xl border border-border bg-card card-glow p-6 shadow-sm ${className}`}
  >
    {children}
  </motion.div>
);

const FactChip = ({ fact, active, onClick }: { fact: typeof facts[0]; active: boolean; onClick: () => void }) => {
  const Icon = fact.icon;
  return (
    <motion.button
      whileHover={{ scale: 1.06, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2.5 rounded-full border text-sm font-medium transition-all duration-200 cursor-pointer select-none ${
        active
          ? `${fact.color} shadow-md ring-2 ring-offset-1 ring-current/30`
          : "bg-white/70 border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
      }`}
    >
      <Icon className={`h-4 w-4 ${active ? fact.iconColor : ""}`} />
      {fact.label}
    </motion.button>
  );
};

const About = () => {
  const [activeFact, setActiveFact] = useState<string | null>(null);
  const current = facts.find((f) => f.id === activeFact) ?? null;

  const toggle = (id: string) => setActiveFact((prev) => (prev === id ? null : id));

  return (
    <section id="about" className="py-32 relative z-10 section-sage">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            viewport={vp}
            className="mb-14"
          >
            <p className="section-num mb-3">01 — About</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              The person behind<br />
              <span className="text-gradient italic">the code</span>
            </h2>
          </motion.div>

          {/* Top row — photo + bio + building */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">

            {/* Photo + name */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05, ease }}
              viewport={vp}
              className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden flex flex-col items-center justify-center p-6 gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="w-36 h-36 rounded-2xl overflow-hidden ring-4 ring-orange-200 shadow-lg"
              >
                <img
                  src="/amritaraj-nair-portfolio/images/headshot.png"
                  alt="Amritaraj Nair"
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>
              <div className="text-center">
                <p className="display font-bold text-xl text-foreground leading-tight">Amritaraj Nair</p>
                <p className="text-xs mono text-muted-foreground mt-1 tracking-wide">Amrit for short</p>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-orange-400" />
                <span>Flower Mound, TX</span>
              </div>
            </motion.div>

            {/* Bio */}
            <Card delay={0.1} className="md:col-span-2">
              <p className="text-xs mono text-muted-foreground uppercase tracking-widest mb-4">Bio</p>
              <p className="text-foreground leading-relaxed mb-4">
                CS Honors + Math minor at Texas A&amp;M, National Merit Scholar &amp; President's
                Endowed Scholar. I build AI systems, quant tools, and full-stack products —
                from a Cornell-backed legal tech startup to an award-winning pickleball AI
                that caught the attention of Pear VC.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                Proficient in C++ and systems programming, I research AI at TAMU across two
                concurrent projects: agent-based livestock modeling and LLM-powered
                cybersecurity. I'm driven by the intersection of math, finance, and software.
              </p>

              {/* Fact chips */}
              <div>
                <p className="text-xs mono text-muted-foreground uppercase tracking-widest mb-3">
                  Beyond the code — tap to learn more
                </p>
                <div className="flex flex-wrap gap-2">
                  {facts.map((f) => (
                    <FactChip key={f.id} fact={f} active={activeFact === f.id} onClick={() => toggle(f.id)} />
                  ))}
                </div>
                <AnimatePresence mode="wait">
                  {current && (
                    <motion.div
                      key={current.id}
                      initial={{ opacity: 0, y: 8, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0, y: -6, height: 0 }}
                      transition={{ duration: 0.28, ease }}
                      className="overflow-hidden"
                    >
                      <div className={`mt-4 px-4 py-3 rounded-xl border text-sm leading-relaxed ${current.color}`}>
                        {current.detail}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Card>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {stats.map((s, i) => (
              <Card key={i} delay={0.2 + i * 0.05}>
                <motion.p
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45, delay: 0.3 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  viewport={vp}
                  className={`display text-4xl font-black mb-1 ${s.color}`}
                >
                  {s.value}
                </motion.p>
                <p className="text-xs text-muted-foreground whitespace-pre-line">{s.label}</p>
              </Card>
            ))}
          </div>

          {/* Currently building + tech stack */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card delay={0.35} className="bg-orange-50 border-orange-100">
              <p className="text-xs mono text-orange-600 uppercase tracking-widest mb-4">Currently building</p>
              <div className="space-y-4">
                {[
                  { name: "AlphaForge",    sub: "Robinhood + Scratch for quants" },
                  { name: "Shot Sensei",   sub: "AI pickleball coach & game"     },
                  { name: "ClinicalHours", sub: "AI receptionist for clinics"     },
                ].map((item) => (
                  <div key={item.name} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-sm text-foreground">{item.name}</p>
                      <p className="text-xs text-muted-foreground">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card delay={0.4} className="md:col-span-2">
              <p className="text-xs mono text-muted-foreground uppercase tracking-widest mb-4">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((s, i) => (
                  <motion.span
                    key={s.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.28, delay: 0.4 + i * 0.03, ease: [0.22, 1, 0.36, 1] }}
                    viewport={vp}
                    whileHover={{ scale: 1.1, transition: { duration: 0.12 } }}
                    whileTap={{ scale: 0.93 }}
                    className={`px-3 py-1.5 rounded-full border text-xs font-medium cursor-default select-none ${s.color}`}
                  >
                    {s.name}
                  </motion.span>
                ))}
              </div>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
