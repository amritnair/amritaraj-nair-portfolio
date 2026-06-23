import { useState, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import KobeGame from "@/components/game/KobeGame";

function LoadingScreen() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center" style={{ background: "linear-gradient(180deg, #5eb0e8 0%, #3a8cc8 100%)" }}>
      <motion.div
        animate={{ rotate: [0, 8, -8, 0], y: [0, -6, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        style={{ fontSize: 56 }}
      >🐾</motion.div>
      <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: "rgba(255,255,255,0.7)", letterSpacing: "0.18em", marginTop: 16, fontSize: 13 }}>
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
        background: "linear-gradient(180deg, #6ec0f0 0%, #a8d8f0 35%, #d8e8c0 65%, #8ab848 100%)",
      }}
      exit={{ opacity: 0, scale: 1.03 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Soft clouds */}
      {[
        { left: "5%",  top: "12%", w: 180, delay: 0 },
        { left: "55%", top: "8%",  w: 220, delay: 1.2 },
        { left: "30%", top: "18%", w: 140, delay: 0.6 },
        { left: "75%", top: "15%", w: 160, delay: 2 },
      ].map((c, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none rounded-full"
          style={{
            left: c.left, top: c.top, width: c.w, height: c.w * 0.35,
            background: "rgba(255,255,255,0.55)",
            filter: "blur(12px)",
          }}
          animate={{ x: [0, 30, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8 + i, repeat: Infinity, delay: c.delay, ease: "easeInOut" }}
        />
      ))}

      {/* Sun */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          top: "8%", right: "12%",
          width: 72, height: 72,
          borderRadius: "50%",
          background: "radial-gradient(circle at 40% 35%, #fffce8, #ffe880 60%, #f0c040)",
          boxShadow: "0 0 40px 12px rgba(255,220,100,0.4)",
        }}
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Hylian-style mountains — painterly layers */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ zIndex: 1 }}>
        <svg viewBox="0 0 1440 240" className="w-full" style={{ height: 240, display: "block" }} preserveAspectRatio="xMidYMax slice">
          <path d="M0,240 L0,170 L120,100 L240,140 L380,60 L520,110 L660,45 L800,95 L940,55 L1080,100 L1220,70 L1360,90 L1440,75 L1440,240 Z"
            fill="#5a9848" opacity="0.5" />
          <path d="M0,240 L0,185 L160,130 L300,155 L460,110 L620,148 L780,105 L940,140 L1100,115 L1260,145 L1440,125 L1440,240 Z"
            fill="#3d7830" opacity="0.75" />
          <path d="M0,240 L0,200 L200,165 L400,180 L600,155 L800,175 L1000,160 L1200,178 L1440,168 L1440,240 Z"
            fill="#2a5820" opacity="1" />
          <rect x="0" y="218" width="1440" height="22" fill="#4a9038" />
        </svg>
      </div>

      {/* Pine silhouettes */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ zIndex: 2, height: 120 }}>
        {Array.from({ length: 18 }, (_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              bottom: 0,
              left: `${(i * 137 + 20) % 95}%`,
              width: 0, height: 0,
              borderLeft: "8px solid transparent",
              borderRight: "8px solid transparent",
              borderBottom: `${40 + (i % 4) * 12}px solid #1a3818`,
              opacity: 0.7 + (i % 3) * 0.1,
            }}
          />
        ))}
      </div>

      {/* Warm campfire glow */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          bottom: "10%", left: "50%", transform: "translateX(-50%)",
          width: 200, height: 80,
          background: "radial-gradient(ellipse at 50% 100%, rgba(255,160,60,0.45) 0%, transparent 70%)",
          filter: "blur(6px)",
          zIndex: 3,
        }}
        animate={{ opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative flex flex-col items-center" style={{ zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: -16, scale: 0.7 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontSize: 48, marginBottom: 6, filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))" }}
        >🐾</motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'Bangers', cursive",
            fontSize: "clamp(3rem, 10vw, 6.5rem)",
            letterSpacing: "0.05em",
            lineHeight: 1,
            color: "#fff8e0",
            textShadow: "0 3px 0 #c87820, 0 5px 0 #a05810, 0 8px 20px rgba(0,0,0,0.3), 0 0 40px rgba(255,200,80,0.3)",
          }}
        >
          Kobe's Adventure
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            color: "rgba(30,60,20,0.75)",
            letterSpacing: "0.2em",
            fontSize: 12,
            textTransform: "uppercase",
            marginTop: 8,
            marginBottom: 32,
            fontWeight: 600,
          }}
        >
          Amrit Nair's Portfolio
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={onPlay}
          style={{
            fontFamily: "'Bangers', cursive",
            fontSize: 26,
            letterSpacing: "0.1em",
            padding: "14px 56px",
            borderRadius: 12,
            border: "3px solid #a05810",
            background: "linear-gradient(180deg, #ffe880 0%, #f0a830 50%, #d08020 100%)",
            boxShadow: "0 4px 0 #804010, 0 8px 24px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.4)",
            color: "#3a2810",
            cursor: "pointer",
          }}
        >
          ▶ START
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            color: "rgba(30,60,20,0.55)",
            fontSize: 11,
            letterSpacing: "0.1em",
            marginTop: 24,
            display: "flex",
            gap: 18,
          }}
        >
          <span>WASD — Move</span>
          <span>·</span>
          <span>Shift — Run</span>
          <span>·</span>
          <span>E — Talk to dogs</span>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function GamePortfolio() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="w-full h-screen overflow-hidden" style={{ background: "#4a9038" }}>
      <AnimatePresence mode="wait">
        {!playing ? (
          <PlayScreen key="play" onPlay={() => setPlaying(true)} />
        ) : (
          <motion.div
            key="game"
            className="w-full h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
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
