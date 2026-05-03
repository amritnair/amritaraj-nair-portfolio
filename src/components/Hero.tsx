import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import PortfolioGame from "@/components/PortfolioGame";

const Hero = () => (
  <section className="relative min-h-screen overflow-hidden px-4 pb-16 pt-24 sm:px-6">
    <div className="blob-orange" />
    <div className="blob-teal" />
    <div className="blob-yellow" />
    <div className="blob-pink" />
    <div className="blob-lime" />

    <div
      className="absolute left-0 right-0 top-0 h-56 pointer-events-none z-0"
      style={{ background: "linear-gradient(180deg, hsl(210 90% 98% / 0.82) 0%, hsl(198 74% 94% / 0.58) 52%, transparent 100%)" }}
    />

    <div className="relative z-10 mx-auto w-full max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <PortfolioGame />
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
    >
      <span className="mono text-[10px] uppercase tracking-[0.2em] text-foreground/58">Scroll</span>
      <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}>
        <ArrowDown className="h-4 w-4 text-muted-foreground" />
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
