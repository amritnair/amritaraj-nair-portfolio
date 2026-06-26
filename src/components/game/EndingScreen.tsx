import type { CSSProperties } from "react";
import { CONTACT_LINKS, ENDING_MESSAGE, ENDING_SPEECH } from "./narrative";

const pixel: CSSProperties = {
  fontFamily: "'Press Start 2P', monospace",
  imageRendering: "pixelated",
};

interface EndingScreenProps {
  onClose: () => void;
}

export default function EndingScreen({ onClose }: EndingScreenProps) {
  return (
    <div style={{ position: "absolute", inset: 0, background: "rgba(10,20,40,0.75)", zIndex: 55, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
      <div style={{ maxWidth: 520, width: "100%", ...pixel }}>
        <div style={{ background: "#f8f8f8", border: "4px solid #383838", boxShadow: "8px 8px 0 #181818", padding: "22px 20px", textAlign: "center" }}>
          <p style={{ fontSize: 8, color: "#2060c0", marginBottom: 16 }}>THE ELDER DOG SMILES</p>
          <p style={{ fontSize: 8, lineHeight: 2.4, color: "#282828", whiteSpace: "pre-line", marginBottom: 20, fontStyle: "italic" }}>
            "{ENDING_SPEECH}"
          </p>
          <p style={{ fontSize: 7, lineHeight: 2.2, color: "#444", marginBottom: 20, textAlign: "left" }}>
            {ENDING_MESSAGE}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginBottom: 16 }}>
            {CONTACT_LINKS.map(link => (
              <a
                key={link.label}
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                style={{ fontSize: 7, padding: "8px 12px", background: "#d8e8ff", border: "2px solid #383838", color: "#282828", textDecoration: "none", ...pixel }}
              >
                {link.label}
              </a>
            ))}
          </div>
          <button
            onClick={onClose}
            style={{ fontSize: 8, padding: "10px 20px", background: "#58a858", color: "#f8f8f8", border: "3px solid #383838", cursor: "pointer", ...pixel }}
          >
            KEEP EXPLORING
          </button>
        </div>
      </div>
    </div>
  );
}
