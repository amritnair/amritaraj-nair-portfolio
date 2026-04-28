import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import BackgroundEffects from "@/components/BackgroundEffects";
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return <motion.div className="scroll-progress" style={{ scaleX }} />;
};

const items = [
  "Hook'em Hacks 2026 — Startup Ready Award",
  "TidalTAMU — Google Gemini Track 1st Place",
  "Outstanding Undergraduate Researcher",
  "President's Endowed Scholar",
  "MagNet Agents — Cornell-Backed Startup",
  "Quantitative Developer — $70K Student Fund",
  "Google Labs Makeathon",
  "Pear VC Pitch — McCombs School of Business",
  "Shot Sensei — AI Pickleball Coach",
  "AlphaForge — Robinhood + Scratch for Quants",
];

const Marquee = () => {
  const doubled = [...items, ...items];
  return (
    <div className="relative z-10 py-5 border-y border-border overflow-hidden bg-white/50">
      <div className="absolute left-0 inset-y-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="mono text-[11px] text-muted-foreground whitespace-nowrap px-8 flex items-center gap-6">
            {item}
            <span className="text-border text-xs">·</span>
          </span>
        ))}
      </div>
    </div>
  );
};

const Index = () => (
  <div className="min-h-screen bg-background relative overflow-hidden noise dot-grid">
    <ScrollProgress />
    <div className="color-wash" />
    <BackgroundEffects />
    <Navigation />
    <Hero />
    <Marquee />
    <About />
    <Projects />
    <Contact />

    <footer className="relative z-10 border-t border-border py-10 bg-white/40">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="mono text-xs text-muted-foreground">© 2025 Amritaraj Nair</p>
          <div className="flex items-center gap-6">
            {[
              { label: "GitHub",   href: "https://github.com/amritnair" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/amritaraj-nair-227063313" },
              { label: "Email",    href: "mailto:amritnair23@gmail.com" },
            ].map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200">
                {label}
              </a>
            ))}
          </div>
          <p className="mono text-xs text-muted-foreground">Built with React &amp; TypeScript</p>
        </div>
      </div>
    </footer>
  </div>
);

export default Index;
