import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Globe3D from "@/components/Globe3D";

/* ------------------------------------------------------------------ */
/*  Typewriter — types text character-by-character with a blinking    */
/*  cursor that stays after completion                                */
/* ------------------------------------------------------------------ */
const Typewriter = ({
  text,
  delay = 0,
  speed = 40,
  className = "",
  isInView = true,
}: {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  isInView?: boolean;
}) => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  // Reset when out of view
  useEffect(() => {
    if (!isInView) {
      setDisplayed("");
      setStarted(false);
    }
  }, [isInView]);

  useEffect(() => {
    if (!isInView) return;
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay, isInView]);

  useEffect(() => {
    if (!isInView) return;
    if (!started) return;
    if (displayed.length >= text.length) return;

    const id = setTimeout(
      () => setDisplayed(text.slice(0, displayed.length + 1)),
      speed
    );
    return () => clearTimeout(id);
  }, [started, displayed, text, speed, isInView]);

  return (
    <span className={className}>
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-[2px] h-[1em] bg-primary ml-0.5 align-middle"
      />
    </span>
  );
};

/* ------------------------------------------------------------------ */
/*  LetterReveal — staggers each letter with a spring pop-in          */
/* ------------------------------------------------------------------ */
const letterContainer = {
  hidden: {},
  visible: (delay: number) => ({
    transition: {
      staggerChildren: 0.04,
      delayChildren: delay,
    },
  }),
};

const letterVariant = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", damping: 20, stiffness: 200 },
  },
};

const LetterReveal = ({
  text,
  delay = 0,
  className = "",
  gradient = false,
}: {
  text: string;
  delay?: number;
  className?: string;
  gradient?: boolean;
}) => (
  <motion.span
    variants={letterContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.3 }}
    custom={delay}
    className={className}
    aria-label={text}
  >
    {text.split("").map((ch, i) => (
      <motion.span
        key={i}
        variants={letterVariant}
        className={gradient ? "inline-block text-gradient" : "inline-block"}
        style={{ whiteSpace: ch === " " ? "pre" : undefined }}
      >
        {ch}
      </motion.span>
    ))}
  </motion.span>
);

/* ------------------------------------------------------------------ */
/*  BlurFadeIn — fades from blurry to sharp                           */
/* ------------------------------------------------------------------ */
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
    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ------------------------------------------------------------------ */
/*  Hero component                                                    */
/* ------------------------------------------------------------------ */
const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise">
      {/* 3D rotating globe */}
      <Globe3D />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Typewriter subtitle */}
          <p className="mono text-primary text-sm tracking-widest uppercase mb-6 h-6">
            <Typewriter
              text="Software Engineer · Researcher · Builder"
              delay={200}
              speed={45}
              isInView={isInView}
            />
          </p>

          {/* Letter-by-letter name reveal */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight leading-[0.95] mb-8">
            <LetterReveal text="Amritaraj" delay={1.8} />
            <br />
            <LetterReveal text="Nair" delay={2.2} gradient={true} />
          </h1>

          {/* Blur-to-sharp description */}
          <BlurFadeIn
            delay={2.8}
            className="text-lg md:text-xl text-white max-w-2xl mb-10 leading-relaxed"
          >
            CS Honors @ Texas A&M · National Merit Scholar · Building AI systems,
            and software that makes an impact.
          </BlurFadeIn>

          {/* Buttons slide up */}
          <BlurFadeIn delay={3.2} className="flex flex-wrap gap-4 items-center">
            <Button
              onClick={() => scrollTo("projects")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 shadow-glow hover:shadow-[0_0_80px_hsl(210_100%_60%/0.4)] transition-all duration-500"
            >
              View Projects
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            >
              <a href="/Amritaraj_Nair_Resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </BlurFadeIn>

          {/* Social icons pop in */}
          <BlurFadeIn delay={3.5} className="flex gap-3 mt-10">
            <a
              href="https://github.com/amritnair?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/amritaraj-nair-227063313"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </BlurFadeIn>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ delay: 4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-5 w-5 text-white" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
