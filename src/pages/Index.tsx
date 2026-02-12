import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import BackgroundEffects from "@/components/BackgroundEffects";

const Index = () => {
  return (
    <div className="min-h-screen bg-background grid-bg relative overflow-hidden">
      {/* Full-page background layers */}
      <BackgroundEffects />

      {/* Floating parallax orbs scattered across the page */}
      <div className="floating-orb floating-orb-1" />
      <div className="floating-orb floating-orb-2" />
      <div className="floating-orb floating-orb-3" />
      <div className="floating-orb floating-orb-4" />

      {/* Page content */}
      <Navigation />
      <Hero />
      <div className="section-glow">
        <About />
      </div>
      <div className="section-glow">
        <Projects />
      </div>
      <div className="section-glow">
        <Contact />
      </div>

      <footer className="border-t border-border/50 py-8 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xs text-muted-foreground mono">
            © 2025 Amritaraj Nair · Built with React & TypeScript
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
