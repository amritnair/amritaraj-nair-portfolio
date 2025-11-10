import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center text-white animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Hi, I'm <span className="text-white">Amritaraj Nair</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto animate-fade-in" 
             style={{ animationDelay: '0.2s' }}>
            Computer Science Student & Research Assistant
          </p>
          
          <p className="text-lg mb-12 text-white/80 max-w-2xl mx-auto animate-fade-in"
             style={{ animationDelay: '0.4s' }}>
            Texas A&M Class of 2029 | CS Honors | National Merit Scholar | President's Endowed Scholar | Passionate about AI research, robotics, and creating impactful solutions for communities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in"
               style={{ animationDelay: '0.6s' }}>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white transition-all duration-300 shadow-glow"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            
            <Button 
              asChild
              variant="secondary"
              size="lg"
              className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white transition-all duration-300 shadow-glow"
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
              className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white transition-all duration-300 shadow-glow"
            >
              <a
                href="/Amritaraj_Nair_Resume.pdf"
                download
                aria-label="Download Resume (PDF)"
              >
                <Download className="mr-2 h-4 w-4" />
                Download my Resume
              </a>
            </Button>
          </div>
          
          <div className="flex justify-center gap-6 mt-12 animate-fade-in"
               style={{ animationDelay: '0.8s' }}>
            <Button asChild variant="ghost" size="icon" className="text-white hover:bg-white/10 transition-all">
              <a href="https://github.com/amritnair?tab=repositories" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="text-white hover:bg-white/10 transition-all">
              <a href="https://www.linkedin.com/in/amritaraj-nair-227063313" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating element */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <ArrowDown className="h-6 w-6 text-white/70" />
      </div>
    </section>
  );
};

export default Hero;