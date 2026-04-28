import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import BackgroundEffects from "@/components/BackgroundEffects";

const Index = () => {
  return (
    <div className="min-h-screen bg-background grid-bg relative overflow-hidden">
      <BackgroundEffects />

      <div className="floating-orb floating-orb-1" />
      <div className="floating-orb floating-orb-2" />
      <div className="floating-orb floating-orb-3" />

      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />

      <footer className="border-t border-border py-8 relative z-10">
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
