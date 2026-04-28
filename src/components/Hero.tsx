import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowDown, FileText, Github, Linkedin, ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const roles = [
  "Software Engineer",
  "AI Researcher",
  "Quant Developer",
  "Hackathon Winner",
  "Full-Stack Builder",
];

const badges = [
  { emoji: "🏆", text: "Hook'em Hacks 2026", sub: "Startup Ready Award", color: "from-yellow-500/20 to-orange-500/10", border: "border-yellow-500/25", delay: 0 },
  { emoji: "🔬", text: "TAMU Researcher", sub: "AI & Cybersecurity", color: "from-violet-500/20 to-purple-500/10", border: "border-violet-500/25", delay: 0.15 },
  { emoji: "📈", text: "$70K Quant Fund", sub: "Scholars of Finance", color: "from-emerald-500/20 to-teal-500/10", border: "border-emerald-500/25", delay: 0.3 },
  { emoji: "🎓", text: "National Merit Scholar", sub: "President's Endowed", color: "from-cyan-500/20 to-blue-500/10", border: "border-cyan-500/25", delay: 0.45 },
];

const Hero = () => {
  const navigate = useNavigate();
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setRoleIdx((i) => (i + 1) % roles.length), 2800);
    return () => clearInterval(id);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating achievement badges */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {badges.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 + b.delay, duration: 0.5 }}
            className="absolute"
            style={{
              top: i < 2 ? `${22 + i * 22}%` : `${52 + (i - 2) * 20}%`,
              left: i % 2 === 0 ? "4%" : undefined,
              right: i % 2 === 1 ? "4%" : undefined,
            }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4 + i * 0.7, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl border bg-gradient-to-br ${b.color} ${b.border} backdrop-blur-sm`}
            >
              <span className="text-xl">{b.emoji}</span>
              <div>
                <p className="text-xs font-semibold text-foreground leading-tight">{b.text}</p>
                <p className="text-[10px] text-muted-foreground">{b.sub}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Center content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          {/* Status chip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/25 bg-violet-500/10 text-xs mono text-violet-300 mb-8"
          >
            <Sparkles className="h-3 w-3" />
            Open to internships &amp; research — CS Honors @ Texas A&amp;M
          </motion.div>

          {/* Name */}
          <div className="overflow-hidden mb-4">
            <motion.h1
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.88]"
            >
              <span className="text-gradient">Amritaraj</span>
              <br />
              <span className="text-foreground">Nair</span>
            </motion.h1>
          </div>

          {/* Animated role */}
          <div className="h-8 flex items-center justify-center mb-8 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIdx}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -24, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="mono text-sm tracking-widest text-muted-foreground uppercase"
              >
                {roles[roleIdx]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
          >
            I build AI systems, quant tools, and products that win hackathons —
            from Cornell-backed startups to award-winning computer vision apps.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex flex-wrap gap-3 justify-center mb-10"
          >
            <Button
              onClick={() => scrollTo("projects")}
              size="lg"
              className="btn-gradient rounded-full px-8 text-white border-0 font-semibold"
            >
              View Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate("/resume")}
              className="rounded-full px-8 border-border hover:border-violet-500/40 hover:bg-violet-500/5 transition-all duration-300"
            >
              <FileText className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex gap-3 justify-center"
          >
            <a
              href="https://github.com/amritnair?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-violet-500/40 hover:bg-violet-500/5 transition-all duration-300"
            >
              <Github className="h-4 w-4" />
              GitHub
              <ArrowUpRight className="h-3 w-3 opacity-50" />
            </a>
            <a
              href="https://www.linkedin.com/in/amritaraj-nair-227063313"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-violet-500/40 hover:bg-violet-500/5 transition-all duration-300"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
              <ArrowUpRight className="h-3 w-3 opacity-50" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] mono text-muted-foreground uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
