import { useState, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PixelGame = lazy(() => import("@/components/game/PixelGame"));

const BASE = import.meta.env.BASE_URL;
const pixel: React.CSSProperties = {
  fontFamily: "'Press Start 2P', monospace",
  imageRendering: "pixelated",
};

function LoadingScreen() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center" style={{ background: "#2060c0", ...pixel }}>
      <p style={{ color: "#f8f8f8", fontSize: 10, letterSpacing: "0.1em" }}>LOADING...</p>
    </div>
  );
}

function PlayScreen({ onPlay }: { onPlay: () => void }) {
  return (
    <motion.div
      className="w-full h-screen flex flex-col items-center justify-center relative overflow-hidden select-none"
      style={{ background: "linear-gradient(180deg, #58a8e8 0%, #88d0f0 45%, #58c858 75%, #389838 100%)" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.img
        src={`${BASE}sunnyland/sprites/title-screen.png`}
        alt="Kobe's Adventure"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ imageRendering: "pixelated", marginBottom: 24, scale: 2.2 }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{ textAlign: "center", ...pixel }}
      >
        <p style={{ fontSize: 8, color: "#f8f8f8", textShadow: "2px 2px 0 #383838", marginBottom: 32, letterSpacing: "0.08em" }}>
          AMRIT NAIR · PORTFOLIO
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onPlay}
          style={{
            fontSize: 10,
            padding: "14px 32px",
            background: "#f8f8f8",
            color: "#282828",
            border: "4px solid #383838",
            boxShadow: "6px 6px 0 #383838",
            cursor: "pointer",
            ...pixel,
          }}
        >
          START
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ delay: 0.6, duration: 1.2, repeat: Infinity }}
          style={{ fontSize: 7, color: "#f8f8f8", marginTop: 28, textShadow: "1px 1px 0 #383838" }}
        >
          WASD · SHIFT RUN · E TALK
        </motion.p>
      </motion.div>

      <p style={{ position: "absolute", bottom: 12, fontSize: 6, color: "rgba(255,255,255,0.5)", ...pixel }}>
        ART: SUNNYLAND BY ANSIMUZ (CC0)
      </p>
    </motion.div>
  );
}

export default function GamePortfolio() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="w-full h-screen overflow-hidden" style={{ background: "#181818" }}>
      <AnimatePresence mode="wait">
        {!playing ? (
          <PlayScreen key="play" onPlay={() => setPlaying(true)} />
        ) : (
          <motion.div
            key="game"
            className="w-full h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
          >
            <Suspense fallback={<LoadingScreen />}>
              <PixelGame />
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
