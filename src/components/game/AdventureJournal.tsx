import type { CSSProperties } from "react";
import { MEMORY_PAGES } from "./narrative";

const pixel: CSSProperties = {
  fontFamily: "'Press Start 2P', monospace",
  imageRendering: "pixelated",
};

interface AdventureJournalProps {
  unlocked: Set<string>;
  onClose: () => void;
}

export default function AdventureJournal({ unlocked, onClose }: AdventureJournalProps) {
  const pages = MEMORY_PAGES.filter(m => unlocked.has(m.id));
  const locked = MEMORY_PAGES.length - pages.length;

  return (
    <div
      style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 45, display: "flex", alignItems: "center", justifyContent: "center", padding: 12 }}
      onClick={onClose}
    >
      <div onClick={e => e.stopPropagation()} style={{ width: "min(520px, 100%)", maxHeight: "85vh", overflow: "hidden", display: "flex", flexDirection: "column", ...pixel }}>
        <div style={{ background: "#e8d4a8", border: "4px solid #383838", boxShadow: "6px 6px 0 #181818", display: "flex", flexDirection: "column", maxHeight: "85vh" }}>
          <div style={{ padding: "14px 16px", borderBottom: "3px solid #383838", background: "#d4b878", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 9, color: "#282828" }}>KOBE'S ADVENTURE JOURNAL</span>
            <button onClick={onClose} style={{ fontSize: 7, background: "#c8a858", border: "2px solid #383838", padding: "4px 8px", cursor: "pointer", ...pixel }}>ESC</button>
          </div>

          <div style={{ padding: "8px 16px", fontSize: 7, color: "#5a4020", background: "#f0e4c8" }}>
            {pages.length} / {MEMORY_PAGES.length} memories recovered{locked > 0 ? ` · ${locked} still scattered` : " · Story complete!"}
          </div>

          <div style={{ flex: 1, overflowY: "auto", padding: "12px 16px 16px", background: "#f8f0dc" }}>
            {pages.length === 0 && (
              <p style={{ fontSize: 8, lineHeight: 2.2, color: "#888" }}>
                No memories yet. Talk to dogs across the region and help with their quests.
              </p>
            )}
            {pages.map(m => (
              <div key={m.id} style={{ marginBottom: 16, padding: "12px 14px", background: "#fffaf0", border: "2px solid #c8b888", boxShadow: "3px 3px 0 #d4c4a0" }}>
                <div style={{ fontSize: 8, color: "#2060c0", marginBottom: 4 }}>{m.title}</div>
                <div style={{ fontSize: 6, color: "#888", marginBottom: 8 }}>{m.region}{m.tagline ? ` · ${m.tagline}` : ""}</div>
                <p style={{ fontSize: 7, lineHeight: 2.2, color: "#282828", margin: 0 }}>{m.story}</p>
              </div>
            ))}
            {locked > 0 && (
              <div style={{ padding: "10px", border: "2px dashed #c0b090", fontSize: 7, color: "#a09070", lineHeight: 2 }}>
                ??? locked memories await in Aggie Village, Innovation Harbor, Healing Hills, and beyond...
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
