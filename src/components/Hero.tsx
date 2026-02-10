import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center hero-mesh hero-noise relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
      {/* Floating orbs */}
      <div className="absolute top-[20%] left-[15%] w-64 h-64 rounded-full bg-white/10 blur-3xl animate-float-slow" />
      <div className="absolute bottom-[25%] right-[10%] w-80 h-80 rounded-full bg-white/5 blur-3xl animate-float-slow" style={{ animationDelay: "-2s" }} />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl animate-float" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up font-sans tracking-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent drop-shadow-sm">
              Amritaraj Nair
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl mb-8 text-white/95 max-w-3xl mx-auto animate-fade-in font-medium"
            style={{ animationDelay: "0.15s", animationFillMode: "both" }}
          >
            Computer Science Student & Research Assistant
          </p>

          <p
            className="text-lg mb-12 text-white/85 max-w-2xl mx-auto animate-fade-in leading-relaxed"
            style={{ animationDelay: "0.3s", animationFillMode: "both" }}
          >
            Texas A&M Class of 2029 | CS Honors | National Merit Scholar | President's Endowed Scholar | Passionate about AI research, robotics, and creating impactful solutions for communities.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in"
            style={{ animationDelay: "0.45s", animationFillMode: "both" }}
          >
            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-white/15 backdrop-blur-md border border-white/25 hover:bg-white/25 hover:border-white/35 text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>

            <Button
              asChild
              variant="secondary"
              size="lg"
              className="bg-white/15 backdrop-blur-md border border-white/25 hover:bg-white/25 hover:border-white/35 text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
            >
              <a
                href="https://drive.google.com/file/d/1r2YjhtXrTjIWfZbac8DUPAJDp1DG_HHl/view?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download CV (PDF)"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>

            <Button
              asChild
              variant="secondary"
              size="lg"
              className="bg-white/15 backdrop-blur-md border border-white/25 hover:bg-white/25 hover:border-white/35 text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
            >
              <a href="/Amritaraj_Nair_Resume.pdf" download aria-label="Download Resume (PDF)">
                <Download className="mr-2 h-4 w-4" />
                Download my Resume
              </a>
            </Button>
          </div>

          <div
            className="flex justify-center gap-6 mt-12 animate-fade-in"
            style={{ animationDelay: "0.6s", animationFillMode: "both" }}
          >
            <Button asChild variant="ghost" size="icon" className="text-white hover:bg-white/15 rounded-full transition-all duration-300 hover:scale-110">
              <a href="https://github.com/amritnair?tab=repositories" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="text-white hover:bg-white/15 rounded-full transition-all duration-300 hover:scale-110">
              <a href="https://www.linkedin.com/in/amritaraj-nair-227063313" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <ArrowDown className="h-6 w-6 text-white/70" />
      </div>
    </section>
  );
};

export default Hero;