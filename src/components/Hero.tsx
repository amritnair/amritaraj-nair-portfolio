import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowDown, FileText, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function useScramble(text: string, delay = 200, duration = 1200) {
  const [output, setOutput] = useState(() =>
    text.split("").map((c) => (c === " " ? " " : CHARS[Math.floor(Math.random() * CHARS.length)])).join("")
  );
  useEffect(() => {
    let frame: number;
    const start = Date.now() + delay;
    const tick = () => {
      const now = Date.now();
      if (now < start) { frame = requestAnimationFrame(tick); return; }
      const p = Math.min((now - start) / duration, 1);
      setOutput(text.split("").map((c, i) => {
        if (c === " ") return " ";
        if (i / text.length < p) return c;
        return CHARS[Math.floor(Math.random() * CHARS.length)];
      }).join(""));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [text, delay, duration]);
  return output;
}

const Magnetic = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 240, damping: 20 });
  const sy = useSpring(y, { stiffness: 240, damping: 20 });
  const onMove = useCallback((e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set((e.clientX - r.left - r.width / 2) * 0.28);
    y.set((e.clientY - r.top - r.height / 2) * 0.28);
  }, [x, y]);
  const onLeave = useCallback(() => { x.set(0); y.set(0); }, [x, y]);
  return (
    <motion.div ref={ref} style={{ x: sx, y: sy }} onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </motion.div>
  );
};

const roles = ["Software Engineer", "AI Researcher", "Quant Developer", "Full-Stack Builder", "Hackathon Winner"];

const Hero = () => {
  const navigate = useNavigate();
  const [roleIdx, setRoleIdx] = useState(0);
  const firstName = useScramble("Amritaraj", 300, 1300);
  const lastName   = useScramble("Nair", 500, 1100);

  useEffect(() => {
    const id = setInterval(() => setRoleIdx((i) => (i + 1) % roles.length), 2800);
    return () => clearInterval(id);
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Color blobs — more vivid */}
      <div className="blob-orange" />
      <div className="blob-teal" />
      <div className="blob-yellow" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          {/* Name — extra padding-bottom so Fraunces descenders aren't clipped */}
          <div className="overflow-hidden" style={{ paddingBottom: "0.2em", marginBottom: "-0.2em" }}>
            <motion.h1
              initial={{ y: 90, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="display font-black tracking-tight leading-[0.9]"
              style={{ fontSize: "clamp(3.5rem, 12vw, 7.5rem)" }}
            >
              <span className="text-gradient italic">{firstName}</span>
              <br />
              <span className="text-foreground">{lastName}</span>
            </motion.h1>
          </div>

          {/* Role rotator */}
          <div className="h-7 flex items-center justify-center mb-8 overflow-hidden mt-6">
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIdx}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="mono text-xs tracking-[0.22em] text-muted-foreground uppercase"
              >
                {roles[roleIdx]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="text-lg text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed"
          >
            CS + Math at Texas A&amp;M. I build AI systems, quant tools, and products that win hackathons —
            from a Cornell-backed startup to a computer vision app pitched to Pear&nbsp;VC.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-3 justify-center mb-10"
          >
            <Magnetic>
              <Button onClick={() => scrollTo("projects")} size="lg"
                className="btn-primary rounded-full px-8 font-semibold border-0 text-white">
                View Projects
              </Button>
            </Magnetic>
            <Magnetic>
              <Button variant="outline" size="lg" onClick={() => navigate("/resume")}
                className="rounded-full px-8 bg-white/60 backdrop-blur-sm border-border hover:border-primary/50 hover:bg-white transition-all duration-300">
                <FileText className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="flex gap-3 justify-center"
          >
            {[
              { href: "https://github.com/amritnair?tab=repositories", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/amritaraj-nair-227063313", icon: Linkedin, label: "LinkedIn" },
            ].map(({ href, icon: Icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-white/60 backdrop-blur-sm text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-white transition-all duration-300">
                <Icon className="h-4 w-4" />
                {label}
                <ArrowUpRight className="h-3 w-3 opacity-40" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] mono text-muted-foreground uppercase tracking-[0.2em]">Scroll</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown className="h-4 w-4 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
