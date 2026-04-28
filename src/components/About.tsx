import { motion } from "framer-motion";

const vp = { once: true, amount: 0.2 };
const ease = [0.22, 1, 0.36, 1] as const;

const stats = [
  { value: "2", label: "Research\nPositions", color: "text-blue-400" },
  { value: "3+", label: "Hackathons\nWon", color: "text-sky-400" },
  { value: "$70K", label: "Fund\nManaged", color: "text-blue-300" },
  { value: "10+", label: "Projects\nShipped", color: "text-indigo-400" },
];

const skills = [
  { name: "Python", color: "bg-blue-500/10 text-blue-300 border-blue-500/15" },
  { name: "C++", color: "bg-slate-500/10 text-slate-300 border-slate-500/15" },
  { name: "TypeScript", color: "bg-sky-500/10 text-sky-300 border-sky-500/15" },
  { name: "React", color: "bg-cyan-500/10 text-cyan-300 border-cyan-500/15" },
  { name: "FastAPI", color: "bg-teal-500/10 text-teal-300 border-teal-500/15" },
  { name: "Java", color: "bg-orange-500/10 text-orange-300 border-orange-500/15" },
  { name: "Machine Learning", color: "bg-violet-500/10 text-violet-300 border-violet-500/15" },
  { name: "OpenCV", color: "bg-red-500/10 text-red-300 border-red-500/15" },
  { name: "Supabase", color: "bg-emerald-500/10 text-emerald-300 border-emerald-500/15" },
  { name: "Docker", color: "bg-blue-500/10 text-blue-300 border-blue-500/15" },
  { name: "AWS", color: "bg-yellow-500/10 text-yellow-300 border-yellow-500/15" },
  { name: "SQL", color: "bg-indigo-500/10 text-indigo-300 border-indigo-500/15" },
];

const Card = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.55, delay, ease }}
    viewport={vp}
    className={`rounded-2xl border border-border bg-card card-glow p-6 ${className}`}
  >
    {children}
  </motion.div>
);

const About = () => (
  <section id="about" className="py-32 relative z-10">
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
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            The person behind<br />
            <span className="text-gradient">the code</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Bio */}
          <Card delay={0.05} className="md:col-span-2">
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
          </Card>

          {/* Currently building */}
          <Card delay={0.1} className="bg-gradient-to-br from-blue-500/8 to-indigo-500/5 border-blue-500/15">
            <p className="text-xs mono text-blue-400 uppercase tracking-widest mb-4">Currently building</p>
            <div className="space-y-4">
              {[
                { name: "AlphaForge", sub: "Robinhood + Scratch for quants" },
                { name: "Shot Sensei", sub: "AI pickleball coach & game" },
                { name: "ClinicalHours", sub: "AI receptionist for clinics" },
              ].map((item) => (
                <div key={item.name} className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-blue-400 mt-2 shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Stats */}
          {stats.map((s, i) => (
            <Card key={i} delay={0.15 + i * 0.05}>
              <motion.p
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: 0.3 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                viewport={vp}
                className={`text-4xl font-black mb-1 ${s.color}`}
              >
                {s.value}
              </motion.p>
              <p className="text-xs text-muted-foreground whitespace-pre-line">{s.label}</p>
            </Card>
          ))}

          {/* Skills */}
          <Card delay={0.3} className="md:col-span-3">
            <p className="text-xs mono text-muted-foreground uppercase tracking-widest mb-4">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((s, i) => (
                <motion.span
                  key={s.name}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.35 + i * 0.035, ease: [0.22, 1, 0.36, 1] }}
                  viewport={vp}
                  whileHover={{ scale: 1.08, transition: { duration: 0.15 } }}
                  whileTap={{ scale: 0.95 }}
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
