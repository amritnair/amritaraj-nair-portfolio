import { motion } from "framer-motion";

const vp = { once: true, amount: 0.2 };
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

const About = () => (
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <Card delay={0.05} className="md:col-span-2">
            <div className="flex gap-5 items-start">
              <div className="shrink-0">
                <div className="w-24 h-24 rounded-2xl overflow-hidden ring-2 ring-orange-200 shadow-md">
                  <img
                    src="/amritaraj-nair-portfolio/images/headshot.png"
                    alt="Amritaraj Nair"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div>
                <p className="text-xs mono text-muted-foreground uppercase tracking-widest mb-4">Bio</p>
                <p className="text-foreground leading-relaxed mb-4">
                  CS Honors student at Texas A&amp;M, National Merit Scholar &amp; President's
                  Endowed Scholar. I build AI systems, quant tools, and full-stack products —
                  from a Cornell-backed legal tech startup to an award-winning pickleball AI
                  that caught the attention of Pear VC.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Proficient in C++ and systems programming, I research AI at TAMU across two
                  concurrent projects: agent-based livestock modeling and LLM-powered
                  cybersecurity. I'm driven by the intersection of math, finance, and software.
                </p>
              </div>
            </div>
          </Card>

          <Card delay={0.1} className="bg-orange-50 border-orange-100">
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

          {stats.map((s, i) => (
            <Card key={i} delay={0.15 + i * 0.05}>
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

          <Card delay={0.3} className="md:col-span-3">
            <p className="text-xs mono text-muted-foreground uppercase tracking-widest mb-4">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((s, i) => (
                <motion.span
                  key={s.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.28, delay: 0.35 + i * 0.03, ease: [0.22, 1, 0.36, 1] }}
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

export default About;
