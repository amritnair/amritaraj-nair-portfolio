import { useState, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import KobeGame from "@/components/game/KobeGame";

function LoadingScreen() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center" style={{ background: "#0b0d1a" }}>
      <motion.div
        animate={{ rotate: [0, 10, -10, 0], y: [0, -8, 0] }}
        transition={{ duration: 1.2, repeat: Infinity }}
        style={{ fontSize: 56 }}
      >🐾</motion.div>
      <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: "rgba(255,255,255,0.45)", letterSpacing: "0.18em", marginTop: 16, fontSize: 13 }}>
        Loading world…
      </p>
    </div>
  );
}

function PlayScreen({ onPlay }: { onPlay: () => void }) {
  return (
    <motion.div
      className="w-full h-screen flex flex-col items-center justify-center relative overflow-hidden select-none"
      style={{
        background: "radial-gradient(ellipse at 50% 0%, #ff6b35 0%, #f7931e 12%, #ff0066 28%, #7b2d8b 46%, #1a1060 66%, #0b0d1a 100%)",
      }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Stars */}
      {Array.from({ length: 80 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white pointer-events-none"
          style={{
            left: `${(i * 137.5) % 100}%`,
            top: `${(i * 97.3) % 65}%`,
            width: 1 + (i % 3),
            height: 1 + (i % 3),
          }}
          animate={{ opacity: [0.15, 0.9, 0.15] }}
          transition={{ duration: 2 + (i % 3), repeat: Infinity, delay: (i * 0.37) % 3 }}
        />
      ))}

      {/* Aurora streaks */}
      {[
        { left: "8%",  color: "#00e5ff", rotate: -18 },
        { left: "35%", color: "#ff00ff", rotate: -12 },
        { left: "62%", color: "#00ffb3", rotate: -8  },
        { left: "82%", color: "#ffaa00", rotate: -15 },
      ].map((a, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{
            left: a.left, top: 0,
            width: 3, height: "45%",
            background: `linear-gradient(180deg, ${a.color}55 0%, ${a.color}22 60%, transparent 100%)`,
            transform: `rotate(${a.rotate}deg)`,
            transformOrigin: "top center",
            filter: "blur(8px)",
          }}
          animate={{ opacity: [0.3, 0.8, 0.3], scaleY: [0.8, 1.1, 0.8] }}
          transition={{ duration: 3.5 + i * 0.6, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}

      {/* Moon */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          top: "6%", right: "9%",
          width: 88, height: 88,
          borderRadius: "50%",
          background: "radial-gradient(circle at 38% 35%, #fffde4, #ffd97d 55%, #f4a820)",
          boxShadow: "0 0 50px 18px rgba(255,210,80,0.35), 0 0 100px 40px rgba(255,150,30,0.15)",
        }}
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* Mountains silhouette — 3 layers */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ zIndex: 1 }}>
        <svg viewBox="0 0 1440 220" className="w-full" style={{ height: 220, display: "block" }} preserveAspectRatio="xMidYMax slice">
          {/* Far ridge — lit purple-blue */}
          <path d="M0,220 L0,155 L90,90 L180,130 L280,55 L380,100 L460,40 L540,85 L620,20 L700,75 L800,38 L900,88 L1000,45 L1100,95 L1200,50 L1300,80 L1380,45 L1440,65 L1440,220 Z"
            fill="#3a2060" opacity="0.75" />
          {/* Mid ridge — darker */}
          <path d="M0,220 L0,175 L130,115 L240,145 L360,85 L480,128 L600,72 L720,118 L840,70 L960,112 L1080,80 L1200,120 L1320,78 L1440,105 L1440,220 Z"
            fill="#1e1040" opacity="0.88" />
          {/* Near ridge — nearly black */}
          <path d="M0,220 L0,190 L160,148 L300,168 L460,128 L600,158 L740,120 L880,152 L1020,130 L1140,158 L1280,132 L1440,152 L1440,220 Z"
            fill="#120c28" opacity="1" />
          {/* Ground */}
          <rect x="0" y="200" width="1440" height="20" fill="#0b0d1a" />
        </svg>
      </div>

      {/* Campfire glow at base */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "8%", left: "50%", transform: "translateX(-50%)",
          width: 280, height: 120,
          background: "radial-gradient(ellipse at 50% 100%, rgba(255,120,30,0.55) 0%, rgba(255,60,0,0.2) 50%, transparent 100%)",
          filter: "blur(4px)",
          zIndex: 2,
        }}
      />

      {/* Content */}
      <div className="relative flex flex-col items-center" style={{ zIndex: 10 }}>
        {/* Pawprint */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.6 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontSize: 52, marginBottom: 8 }}
        >🐾</motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'Bangers', cursive",
            fontSize: "clamp(3.5rem, 11vw, 7rem)",
            letterSpacing: "0.06em",
            lineHeight: 1,
            background: "linear-gradient(135deg, #ffe066 0%, #ff9500 35%, #ff3cac 65%, #c77dff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 0 30px rgba(255,150,0,0.5))",
          }}
        >
          Kobe's Adventure
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            color: "rgba(255,255,255,0.55)",
            letterSpacing: "0.22em",
            fontSize: 12,
            textTransform: "uppercase",
            marginTop: 6,
            marginBottom: 36,
          }}
        >
          Amrit Nair's Portfolio
        </motion.p>

        {/* Play button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.1, filter: "brightness(1.15)" }}
          whileTap={{ scale: 0.93 }}
          onClick={onPlay}
          style={{
            fontFamily: "'Bangers', cursive",
            fontSize: 28,
            letterSpacing: "0.12em",
            padding: "14px 60px",
            borderRadius: 9999,
            border: "2px solid rgba(255,255,255,0.25)",
            background: "linear-gradient(135deg, #ff6b35, #f7232e, #c026d3)",
            boxShadow: "0 0 50px rgba(255,80,30,0.5), 0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.2)",
            color: "white",
            cursor: "pointer",
          }}
        >
          ▶ PLAY
        </motion.button>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            color: "rgba(255,255,255,0.3)",
            fontSize: 11,
            letterSpacing: "0.12em",
            marginTop: 28,
            display: "flex",
            gap: 20,
          }}
        >
          <span>WASD / Arrows — Move</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <span>Shift — Run</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <span>E — Explore signs</span>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function GamePortfolio() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="w-full h-screen overflow-hidden" style={{ background: "#0b0d1a" }}>
      <AnimatePresence mode="wait">
        {!playing ? (
          <PlayScreen key="play" onPlay={() => setPlaying(true)} />
        ) : (
          <motion.div
            key="game"
            className="w-full h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
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
