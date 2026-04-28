import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowDown, FileText, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlobeCanvas, Mountains, StockChart, CandlestickChart } from "@/components/SceneBackground";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function useScramble(text: string, delay = 200, duration = 900) {
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
  const sx = useSpring(x, { stiffness: 400, damping: 16 });
  const sy = useSpring(y, { stiffness: 400, damping: 16 });
  const onMove = useCallback((e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set((e.clientX - r.left - r.width / 2) * 0.45);
    y.set((e.clientY - r.top - r.height / 2) * 0.45);
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
  const firstName = useScramble("Amritaraj", 200, 900);
  const lastName   = useScramble("Nair", 350, 750);

  useEffect(() => {
    const id = setInterval(() => setRoleIdx((i) => (i + 1) % roles.length), 2000);
    return () => clearInterval(id);
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Color blobs */}
      <div className="blob-orange" />
      <div className="blob-teal" />
      <div className="blob-yellow" />
      <div className="blob-pink" />
      <div className="blob-lime" />

      {/* ── Spinning globe — top right ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-12 right-8 md:right-16 z-0 pointer-events-none"
      >
        <GlobeCanvas size={260} color="hsl(214 88% 55%)" opacity={0.7} />
      </motion.div>

      {/* ── Stock line chart — left side ── */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute left-6 md:left-12 top-1/3 z-0 pointer-events-none hidden md:block"
      >
        <p className="text-[9px] mono text-blue-400/60 uppercase tracking-widest mb-1">AMRIT / AI</p>
        <StockChart width={200} height={80} color="hsl(214 88% 55%)" />
      </motion.div>

      {/* ── Candlestick chart — right lower ── */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.0 }}
        className="absolute right-6 md:right-14 bottom-32 z-0 pointer-events-none hidden md:block"
      >
        <p className="text-[9px] mono text-violet-400/60 uppercase tracking-widest mb-1">QUANT / DAY</p>
        <CandlestickChart width={160} height={80} opacity={0.65} />
      </motion.div>

      {/* ── Mountains — bottom of hero ── */}
      <div className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none">
        <Mountains width={1200} height={160} color="hsl(214 88% 48%)" opacity={0.1} />
      </div>

      {/* ── Math equation strips — corners ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute left-4 bottom-40 z-0 pointer-events-none hidden lg:flex flex-col gap-2"
      >
        {["∑(xᵢ - μ)²", "P(A|B) = P(B|A)·P(A)", "∇f = ∂f/∂x"].map((eq, i) => (
          <motion.p
            key={eq}
            animate={{ x: [0, 6, 0] }}
            transition={{ duration: 4 + i * 1.2, repeat: Infinity, ease: "easeInOut" }}
            className="text-[10px] mono text-blue-400/40 whitespace-nowrap"
          >{eq}</motion.p>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute right-4 top-1/2 z-0 pointer-events-none hidden lg:flex flex-col gap-2 items-end"
      >
        {["O(n log n)", "E[X] = μ", "σ² = Var(X)"].map((eq, i) => (
          <motion.p
            key={eq}
            animate={{ x: [0, -6, 0] }}
            transition={{ duration: 3.5 + i * 1.1, repeat: Infinity, ease: "easeInOut" }}
            className="text-[10px] mono text-violet-400/40 whitespace-nowrap"
          >{eq}</motion.p>
        ))}
      </motion.div>

      {/* ── Main content ── */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          <div className="overflow-hidden" style={{ paddingBottom: "0.2em", marginBottom: "-0.2em" }}>
            <motion.h1
              initial={{ y: 110, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              className="display font-black tracking-tight leading-[0.9]"
              style={{ fontSize: "clamp(3.5rem, 12vw, 7.5rem)" }}
            >
              <span className="text-gradient italic">{firstName}</span>
              <br />
              <span className="text-foreground">{lastName}</span>
            </motion.h1>
          </div>

          {/* Role rotator — faster swap */}
          <div className="h-7 flex items-center justify-center mb-8 overflow-hidden mt-6">
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIdx}
                initial={{ y: 24, opacity: 0, scale: 0.92 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: -24, opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="mono text-xs tracking-[0.22em] text-muted-foreground uppercase"
              >
                {roles[roleIdx]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed"
          >
            CS + Math at Texas A&amp;M. I build AI systems, quant tools, and products that win hackathons.
            Cornell-backed startup. Computer vision app pitched to Pear&nbsp;VC.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="flex flex-wrap gap-3 justify-center mb-10"
          >
            <Magnetic>
              <Button onClick={() => scrollTo("projects")} size="lg"
                className="btn-primary px-8 font-semibold border-0 text-white font-mono">
                View Projects
              </Button>
            </Magnetic>
            <Magnetic>
              <Button variant="outline" size="lg" onClick={() => navigate("/resume")}
                className="px-8 bg-white/60 backdrop-blur-sm border-border hover:border-primary/50 hover:bg-white transition-all duration-200 font-mono">
                <FileText className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.65 }}
            className="flex gap-3 justify-center"
          >
            {[
              { href: "https://github.com/amritnair?tab=repositories", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/amritaraj-nair-227063313", icon: Linkedin, label: "LinkedIn" },
            ].map(({ href, icon: Icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-border bg-white/60 backdrop-blur-sm text-xs mono text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-white transition-all duration-200">
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
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] mono text-muted-foreground uppercase tracking-[0.2em]">Scroll</span>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown className="h-4 w-4 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
