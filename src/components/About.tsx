import { motion } from "framer-motion";

const vp = { once: true, amount: 0.2 };
const ease = [0.22, 1, 0.36, 1] as const;

const stats = [
  { value: "2", label: "Research\nPositions", color: "text-violet-400" },
  { value: "3+", label: "Hackathons\nWon", color: "text-cyan-400" },
  { value: "$70K", label: "Fund\nManaged", color: "text-emerald-400" },
  { value: "∞", label: "Problems\nSolved", color: "text-pink-400" },
];

const skills = [
  { name: "Python", color: "bg-blue-500/15 text-blue-300 border-blue-500/20" },
  { name: "C++", color: "bg-violet-500/15 text-violet-300 border-violet-500/20" },
  { name: "TypeScript", color: "bg-cyan-500/15 text-cyan-300 border-cyan-500/20" },
  { name: "React", color: "bg-sky-500/15 text-sky-300 border-sky-500/20" },
  { name: "FastAPI", color: "bg-emerald-500/15 text-emerald-300 border-emerald-500/20" },
  { name: "Java", color: "bg-orange-500/15 text-orange-300 border-orange-500/20" },
  { name: "Machine Learning", color: "bg-pink-500/15 text-pink-300 border-pink-500/20" },
  { name: "OpenCV", color: "bg-red-500/15 text-red-300 border-red-500/20" },
  { name: "Supabase", color: "bg-teal-500/15 text-teal-300 border-teal-500/20" },
  { name: "Docker", color: "bg-blue-500/15 text-blue-300 border-blue-500/20" },
  { name: "AWS", color: "bg-yellow-500/15 text-yellow-300 border-yellow-500/20" },
  { name: "SQL", color: "bg-violet-500/15 text-violet-300 border-violet-500/20" },
];

const Card = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease }}
    viewport={vp}
    className={`rounded-2xl border border-border bg-card card-glow p-6 ${className}`}
  >
    {children}
  </motion.div>
);

const About = () => {
  return (
    <section id="about" className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">

          {/* Section header */}
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

          {/* Bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Bio — spans 2 cols */}
            <Card delay={0.05} className="md:col-span-2">
              <p className="text-xs mono text-muted-foreground uppercase tracking-widest mb-4">Bio</p>
              <p className="text-foreground leading-relaxed mb-4">
                CS Honors student at Texas A&M, National Merit Scholar &amp; President's Endowed Scholar.
                I build AI systems, quant tools, and full-stack products — from a Cornell-backed legal
                tech startup to an award-winning pickleball AI that caught the attention of Pear VC.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Proficient in C++ and systems programming, I research AI at TAMU across two concurrent
                projects: agent-based livestock modeling and LLM-powered cybersecurity. I'm driven by
                the intersection of math, finance, and software — and I build fast.
              </p>
            </Card>

            {/* Currently building */}
            <Card delay={0.1} className="bg-gradient-to-br from-violet-500/10 to-purple-500/5 border-violet-500/20">
              <p className="text-xs mono text-violet-400 uppercase tracking-widest mb-4">Currently building</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <p className="font-semibold text-sm">AlphaForge</p>
                    <p className="text-xs text-muted-foreground">Robinhood + Scratch for quants</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🏓</span>
                  <div>
                    <p className="font-semibold text-sm">Shot Sensei</p>
                    <p className="text-xs text-muted-foreground">AI pickleball coach & game</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🏥</span>
                  <div>
                    <p className="font-semibold text-sm">ClinicalHours</p>
                    <p className="text-xs text-muted-foreground">AI receptionist for clinics</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Stats */}
            {stats.map((s, i) => (
              <Card key={i} delay={0.15 + i * 0.05}>
                <motion.p
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  viewport={vp}
                  className={`text-4xl font-black mb-1 ${s.color}`}
                >
                  {s.value}
                </motion.p>
                <p className="text-xs text-muted-foreground whitespace-pre-line">{s.label}</p>
              </Card>
            ))}

            {/* Skills — full width */}
            <Card delay={0.3} className="md:col-span-3">
              <p className="text-xs mono text-muted-foreground uppercase tracking-widest mb-4">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((s, i) => (
                  <motion.span
                    key={s.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35, delay: 0.35 + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                    viewport={vp}
                    whileHover={{ scale: 1.08 }}
                    className={`px-3 py-1.5 rounded-full border text-xs font-medium cursor-default ${s.color}`}
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
