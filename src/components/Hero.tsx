import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowDown, FileText, Github, Linkedin, ArrowUpRight } from "lucide-react";
// lucide-react deprecation hints for Github/Linkedin are cosmetic only — icons still render correctly
import { Button } from "@/components/ui/button";

const BlurFadeIn = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const Hero = () => {
  const navigate = useNavigate();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Warm background orbs */}
      <div className="floating-orb floating-orb-1" />
      <div className="floating-orb floating-orb-2" />
      <div className="hero-glow" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">

          <BlurFadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card text-xs mono text-muted-foreground mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
              Open to opportunities · CS Honors @ Texas A&M
            </div>
          </BlurFadeIn>

          <BlurFadeIn delay={0.25}>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-semibold tracking-tight leading-[0.92] mb-6 text-foreground">
              Amritaraj<br />
              <span className="text-gradient">Nair</span>
            </h1>
          </BlurFadeIn>

          <BlurFadeIn delay={0.45} className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
            Software engineer &amp; researcher building AI systems, quant tools,
            and products that win hackathons and create real impact.
          </BlurFadeIn>

          <BlurFadeIn delay={0.6} className="flex flex-wrap gap-3 items-center mb-10">
            <Button
              onClick={() => scrollTo("projects")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 shadow-glow transition-all duration-300"
            >
              View Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate("/resume")}
              className="rounded-full px-8 border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
            >
              <FileText className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </BlurFadeIn>

          <BlurFadeIn delay={0.75} className="flex gap-3">
            <a
              href="https://github.com/amritnair?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-card transition-all duration-300"
            >
              <Github className="h-4 w-4" />
              GitHub
              <ArrowUpRight className="h-3 w-3" />
            </a>
            <a
              href="https://www.linkedin.com/in/amritaraj-nair-227063313"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-card transition-all duration-300"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </BlurFadeIn>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-5 w-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
