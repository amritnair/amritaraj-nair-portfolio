import { useState, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import KobeGame from "@/components/game/KobeGame";

function LoadingScreen() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-[#0a1220]">
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 1.4, repeat: Infinity }}
        className="text-5xl mb-4"
      >
        🐾
      </motion.div>
      <p className="text-white/50 mono text-sm tracking-widest">Loading world…</p>
    </div>
  );
}

function PlayScreen({ onPlay }: { onPlay: () => void }) {
  return (
    <motion.div
      className="w-full h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{ background: "radial-gradient(ellipse at 50% 40%, #1a2f5c 0%, #0a1220 70%)" }}
      exit={{ opacity: 0, scale: 1.06 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Stars */}
      {Array.from({ length: 60 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 70}%`,
            width: 1 + Math.random() * 2,
            height: 1 + Math.random() * 2,
          }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 1.5 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
        />
      ))}

      {/* Mountains silhouette */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 200" className="w-full" style={{ height: 200 }} preserveAspectRatio="xMidYMax slice">
          <path d="M0,200 L0,140 L120,60 L240,110 L360,40 L480,95 L600,20 L720,80 L840,30 L960,90 L1080,50 L1200,100 L1320,45 L1440,80 L1440,200 Z"
            fill="#0d1d38" opacity="0.9" />
          <path d="M0,200 L0,160 L180,100 L320,130 L480,70 L640,120 L780,60 L920,110 L1080,80 L1220,125 L1380,75 L1440,100 L1440,200 Z"
            fill="#101f3a" opacity="1" />
          <path d="M0,200 L0,175 L200,130 L380,150 L560,110 L740,145 L900,115 L1060,140 L1200,120 L1360,148 L1440,130 L1440,200 Z"
            fill="#141f35" opacity="1" />
        </svg>
      </div>

      {/* Moon */}
      <div className="absolute top-10 right-16 w-20 h-20 rounded-full bg-gradient-to-br from-yellow-100 to-amber-200 shadow-[0_0_60px_20px_rgba(255,220,100,0.25)]" />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center mb-2"
      >
        <div className="text-6xl mb-3">🐾</div>
        <h1
          className="font-black tracking-tight text-white"
          style={{ fontSize: "clamp(2.8rem, 9vw, 5.5rem)", textShadow: "0 0 60px rgba(100,180,255,0.4)" }}
        >
          Kobe's Adventure
        </h1>
      </motion.div>

      {/* Play button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={onPlay}
        className="relative z-10 mt-8 px-14 py-4 rounded-full font-black text-xl tracking-wide text-white border-2 border-white/30"
        style={{
          background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
          boxShadow: "0 0 40px rgba(59,130,246,0.5), inset 0 1px 0 rgba(255,255,255,0.2)",
        }}
      >
        ▶ PLAY
      </motion.button>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="relative z-10 mt-5 mono text-white/50 text-sm tracking-[0.2em] uppercase"
      >
        Amrit Nair's Portfolio
      </motion.p>

      {/* Controls hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="relative z-10 mt-8 flex gap-6 text-white/30 text-xs mono"
      >
        <span>WASD to move</span>
        <span>·</span>
        <span>Shift to run</span>
        <span>·</span>
        <span>E to explore signs</span>
      </motion.div>
    </motion.div>
  );
}

export default function GamePortfolio() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="w-full h-screen overflow-hidden bg-[#0a1220]">
      <AnimatePresence mode="wait">
        {!playing ? (
          <PlayScreen key="play" onPlay={() => setPlaying(true)} />
        ) : (
          <motion.div
            key="game"
            className="w-full h-screen"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Suspense fallback={<LoadingScreen />}>
              <KobeGame />
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
