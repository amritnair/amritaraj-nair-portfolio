import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import BackgroundEffects from "@/components/BackgroundEffects";
import CursorDot from "@/components/CursorDot";
import MountainBackdrop from "@/components/MountainBackdrop";
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return <motion.div className="scroll-progress" style={{ scaleX }} />;
};

const items = [
  "Hook'em Hacks 2026: Startup Ready Award",
  "TidalTAMU: Google Gemini Track 1st Place",
  "Outstanding Undergraduate Researcher",
  "President's Endowed Scholar",
  "MagNet Agents: Cornell-Backed Startup",
  "Quantitative Developer: $70K Student Fund",
  "Google Labs Makeathon",
  "Pear VC Pitch: McCombs School of Business",
  "Shot Sensei: AI Pickleball Coach",
  "AlphaForge: Robinhood + Scratch for Quants",
];

const Marquee = () => {
  const doubled = [...items, ...items];
  return (
    <div className="relative z-10 py-5 border-y border-border overflow-hidden backdrop-blur-sm bg-white/20">
      <div className="absolute left-0 inset-y-0 w-16 bg-gradient-to-r from-transparent to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-16 bg-gradient-to-l from-transparent to-transparent z-10 pointer-events-none" />
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="mono text-[11px] text-foreground/60 whitespace-nowrap px-8 flex items-center gap-6">
            {item}
            <span className="text-xs text-foreground/30">·</span>
          </span>
        ))}
      </div>
    </div>
  );
};

const Index = () => (
  /*
    The outer div has NO background of its own — just relative + overflow-hidden
    for the floating decorations. The gradient lives on the PageGradient div below,
    which is absolute inset-0 and spans the FULL document height, so as you scroll
    you physically move through cloud → mountain → base camp.
  */
  <div className="min-h-screen relative overflow-hidden noise dot-grid">

    {/* ── Full-page scrolling gradient ── */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        zIndex: 0,
        background: `linear-gradient(180deg,
          hsl(205 92% 97%)  0%,
          hsl(200 85% 94%)  8%,
          hsl(195 72% 91%) 16%,
          hsl(178 48% 88%) 24%,
          hsl(162 40% 85%) 32%,
          hsl(152 36% 83%) 40%,
          hsl(145 32% 81%) 48%,
          hsl(110 28% 82%) 54%,
          hsl(60  30% 83%) 60%,
          hsl(38  52% 82%) 68%,
          hsl(30  60% 80%) 76%,
          hsl(25  65% 78%) 84%,
          hsl(22  68% 76%) 92%,
          hsl(20  70% 74%) 100%
        )`,
      }}
    />

    {/* ── Mountain/pine/campfire art backdrop ── */}
    <MountainBackdrop />

    <CursorDot />
    <ScrollProgress />
    <BackgroundEffects />
    <Navigation />
    <Hero />
    <Marquee />
    <About />
    <Projects />
    <Contact />

    <footer className="relative z-10 border-t border-border/60 py-10 bg-black/5 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="mono text-xs text-foreground/50">© 2025 Amritaraj Nair</p>
          <div className="flex items-center gap-6">
            {[
              { label: "GitHub",   href: "https://github.com/amritnair" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/amritaraj-nair-227063313" },
              { label: "Email",    href: "mailto:amritnair23@gmail.com" },
            ].map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="text-xs text-foreground/50 hover:text-foreground transition-colors duration-200">
                {label}
              </a>
            ))}
          </div>
          <p className="mono text-xs text-foreground/50">Built with React &amp; TypeScript</p>
        </div>
      </div>
    </footer>
  </div>
);

export default Index;
