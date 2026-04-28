import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import BackgroundEffects from "@/components/BackgroundEffects";

const marqueeItems = [
  "🏆 Hook'em Hacks 2026 — Startup Ready Award",
  "⚡ TidalTAMU — Google Gemini Track 1st Place",
  "🔬 Outstanding Undergraduate Researcher",
  "🎓 President's Endowed Scholar",
  "🤖 Cornell-Backed Startup — MagNet Agents",
  "📈 Quantitative Developer — $70K Student Fund",
  "🌎 Google Labs Makeathon",
  "🤝 Pear VC Pitch — McCombs School of Business",
  "🏓 Shot Sensei — AI Pickleball Coach",
  "⚡ AlphaForge — Robinhood + Scratch for Quants",
];

const Marquee = () => {
  const doubled = [...marqueeItems, ...marqueeItems];
  return (
    <div className="relative z-10 py-6 border-y border-border/40 overflow-hidden my-0">
      {/* fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      <div className="marquee-track gap-10" style={{ display: "flex" }}>
        {doubled.map((item, i) => (
          <span
            key={i}
            className="mono text-xs text-muted-foreground whitespace-nowrap px-6 flex items-center gap-3"
          >
            {item}
            <span className="text-border">·</span>
          </span>
        ))}
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden noise dot-grid">
      {/* Aurora background */}
      <div className="aurora">
        <div className="aurora-orb aurora-orb-1" />
        <div className="aurora-orb aurora-orb-2" />
        <div className="aurora-orb aurora-orb-3" />
        <div className="aurora-orb aurora-orb-4" />
      </div>

      {/* Floating particles + cursor */}
      <BackgroundEffects />

      <Navigation />
      <Hero />

      {/* Awards marquee between hero and about */}
      <Marquee />

      <About />
      <Projects />
      <Contact />

      <footer className="relative z-10 border-t border-border/40 py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="mono text-xs text-muted-foreground">
              © 2025 Amritaraj Nair
            </p>
            <div className="flex items-center gap-6">
              <a href="https://github.com/amritnair" target="_blank" rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/amritaraj-nair-227063313" target="_blank" rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
              <a href="mailto:amritnair23@gmail.com"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors">Email</a>
            </div>
            <p className="mono text-xs text-muted-foreground">
              Built with React &amp; TypeScript
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
