import { useState, lazy, Suspense, type CSSProperties, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const PixelGame = lazy(() => import("@/components/game/PixelGame"));

const BASE = import.meta.env.BASE_URL;
const PDF_URL = `${BASE}Amritaraj_Nair_Resume.pdf`;
const GITHUB_URL = "https://github.com/amritnair";
const LINKEDIN_URL = "https://linkedin.com/in/amritaraj-nair-227063313";

const pixel: CSSProperties = {
  fontFamily: "'Press Start 2P', monospace",
  imageRendering: "pixelated",
};

const btnBase: CSSProperties = {
  ...pixel,
  fontSize: 7,
  padding: "10px 14px",
  border: "3px solid #383838",
  cursor: "pointer",
  textDecoration: "none",
  display: "inline-block",
  textAlign: "center",
  boxShadow: "4px 4px 0 #383838",
  lineHeight: 1.6,
};

function PixelButton({
  children,
  onClick,
  href,
  to,
  download,
  primary,
  external,
}: {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  to?: string;
  download?: boolean;
  primary?: boolean;
  external?: boolean;
}) {
  const style: CSSProperties = {
    ...btnBase,
    background: primary ? "#f8f8f8" : "#d8e8ff",
    color: "#282828",
    fontSize: primary ? 10 : 7,
    padding: primary ? "14px 32px" : btnBase.padding,
  };

  if (to) {
    return (
      <Link to={to} style={style}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        download={download || undefined}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        style={style}
      >
        {children}
      </a>
    );
  }

  return (
    <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} onClick={onClick} style={style}>
      {children}
    </motion.button>
  );
}

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
        alt="Kobe's Journey"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ imageRendering: "pixelated", marginBottom: 20, scale: 2.2 }}
      />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} style={{ textAlign: "center", ...pixel }}>
        <p style={{ fontSize: 9, color: "#f8f8f8", textShadow: "2px 2px 0 #383838", marginBottom: 8 }}>
          KOBE'S JOURNEY
        </p>
        <p style={{ fontSize: 6, color: "rgba(255,255,255,0.85)", textShadow: "1px 1px 0 #383838", marginBottom: 24, lineHeight: 2, maxWidth: 360 }}>
          Discover who Amrit is — not just what he's accomplished.
        </p>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
          <PixelButton primary onClick={onPlay}>
            START GAME
          </PixelButton>

          <div style={{ width: "100%", maxWidth: 340 }}>
            <p style={{ fontSize: 6, color: "rgba(255,255,255,0.7)", marginBottom: 12, lineHeight: 2 }}>
              — or skip the adventure —
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              <PixelButton to="/resume">VIEW RESUME</PixelButton>
              <PixelButton href={PDF_URL} download>DOWNLOAD PDF</PixelButton>
              <PixelButton href={GITHUB_URL} external>GITHUB</PixelButton>
              <PixelButton href={LINKEDIN_URL} external>LINKEDIN</PixelButton>
            </div>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ delay: 0.6, duration: 1.2, repeat: Infinity }}
          style={{ fontSize: 7, color: "#f8f8f8", marginTop: 24, textShadow: "1px 1px 0 #383838", lineHeight: 2 }}
        >
          WASD · E TALK · J JOURNAL
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
          <motion.div key="game" className="w-full h-screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
            <Suspense fallback={<LoadingScreen />}>
              <PixelGame />
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
