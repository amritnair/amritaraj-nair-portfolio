import type { CSSProperties } from "react";
import { OPENING_LETTER } from "./narrative";

const pixel: CSSProperties = {
  fontFamily: "'Press Start 2P', monospace",
  imageRendering: "pixelated",
};

interface IntroLetterProps {
  onContinue: () => void;
}

export default function IntroLetter({ onContinue }: IntroLetterProps) {
  return (
    <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)", zIndex: 50, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
      <div style={{ maxWidth: 480, width: "100%", ...pixel }}>
        <div style={{ background: "#f4ecd8", border: "4px solid #383838", boxShadow: "8px 8px 0 #181818", padding: "20px 22px" }}>
          <p style={{ fontSize: 8, color: "#8b4513", marginBottom: 14, letterSpacing: "0.06em" }}>
            A LETTER FROM THE COUNCIL OF ELDER DOGS
          </p>
          <div style={{ fontSize: 8, lineHeight: 2.4, color: "#282828", whiteSpace: "pre-line", marginBottom: 20 }}>
            {OPENING_LETTER}
          </div>
          <button
            onClick={onContinue}
            style={{
              width: "100%",
              fontSize: 9,
              padding: "12px 16px",
              background: "#2060c0",
              color: "#f8f8f8",
              border: "3px solid #383838",
              cursor: "pointer",
              ...pixel,
            }}
          >
            SET OUT ON THE JOURNEY ▶
          </button>
        </div>
      </div>
    </div>
  );
}
