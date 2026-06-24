import { useState, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import KobeGame from "@/components/game/KobeGame";

function LoadingScreen() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center" style={{ background: "#1a2420" }}>
      <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: "rgba(255,255,255,0.5)", letterSpacing: "0.15em", fontSize: 13 }}>
        Loading…
      </p>
    </div>
  );
}

function PlayScreen({ onPlay }: { onPlay: () => void }) {
  return (
    <motion.div
      className="w-full h-screen flex flex-col items-center justify-center relative overflow-hidden select-none"
      style={{
        background: "linear-gradient(180deg, #2a3a48 0%, #3a5040 40%, #4a6048 70%, #3a5038 100%)",
      }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 30%, rgba(255,255,255,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative flex flex-col items-center" style={{ zIndex: 10 }}>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(2.2rem, 7vw, 4rem)",
            fontWeight: 300,
            letterSpacing: "0.04em",
            color: "#f0f0ec",
            marginBottom: 8,
          }}
        >
          Kobe's Adventure
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            color: "rgba(255,255,255,0.45)",
            letterSpacing: "0.18em",
            fontSize: 11,
            textTransform: "uppercase",
            marginBottom: 40,
          }}
        >
          Amrit Nair · Portfolio
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          whileHover={{ backgroundColor: "rgba(255,255,255,0.15)" }}
          whileTap={{ scale: 0.97 }}
          onClick={onPlay}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 14,
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "14px 48px",
            borderRadius: 4,
            border: "1px solid rgba(255,255,255,0.25)",
            background: "rgba(255,255,255,0.08)",
            color: "#f0f0ec",
            cursor: "pointer",
            backdropFilter: "blur(8px)",
          }}
        >
          Enter
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            color: "rgba(255,255,255,0.28)",
            fontSize: 11,
            marginTop: 28,
            letterSpacing: "0.06em",
          }}
        >
          WASD to move · Shift to run · E to talk
        </motion.p>
      </div>
    </motion.div>
  );
}

export default function GamePortfolio() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="w-full h-screen overflow-hidden" style={{ background: "#1a2420" }}>
      <AnimatePresence mode="wait">
        {!playing ? (
          <PlayScreen key="play" onPlay={() => setPlaying(true)} />
        ) : (
          <motion.div
            key="game"
            className="w-full h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
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
