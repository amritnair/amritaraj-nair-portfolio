import { useEffect, useRef, useState } from "react";
import type { NpcConfig, QA } from "./npcData";
import { getRegion } from "./narrative";

interface Message { from: "user" | "npc"; text: string; }

interface DialoguePanelProps {
  npc: NpcConfig;
  questDone: boolean;
  onClose: () => void;
  onCompleteQuest: () => void;
}

const pixel: React.CSSProperties = {
  fontFamily: "'Press Start 2P', monospace",
  imageRendering: "pixelated",
};

export default function DialoguePanel({ npc, questDone, onClose, onCompleteQuest }: DialoguePanelProps) {
  const [messages, setMessages] = useState<Message[]>([{ from: "npc", text: npc.intro }]);
  const [asked, setAsked] = useState<Set<number>>(new Set());
  const [cursor, setCursor] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);
  const region = getRegion(npc.region);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.code === "Escape") onClose();
      const available = npc.qa.map((_, i) => i).filter(i => !asked.has(i));
      if (available.length === 0) return;
      if (e.code === "ArrowDown") {
        e.preventDefault();
        setCursor(c => (c + 1) % available.length);
      }
      if (e.code === "ArrowUp") {
        e.preventDefault();
        setCursor(c => (c - 1 + available.length) % available.length);
      }
      if (e.code === "Enter" || e.code === "KeyZ") {
        e.preventDefault();
        const idx = available[cursor];
        if (idx !== undefined) ask(npc.qa[idx], idx);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [asked, cursor, npc, onClose]);

  const ask = (qa: QA, idx: number) => {
    setAsked(prev => new Set(prev).add(idx));
    setMessages(prev => [...prev, { from: "user", text: qa.q }, { from: "npc", text: qa.a }]);
    setCursor(0);
  };

  const available = npc.qa.map((_, i) => i).filter(i => !asked.has(i));
  const canSave = asked.size > 0 && !questDone;

  return (
    <div
      style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.35)", zIndex: 40, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}
      onClick={onClose}
    >
      <div onClick={e => e.stopPropagation()} style={{ margin: "0 12px 12px", ...pixel }}>
        <div style={{ background: "#f8f8f8", border: "4px solid #383838", boxShadow: "inset 0 0 0 4px #f8f8f8, inset 0 0 0 8px #383838", padding: "16px 18px", maxHeight: "min(52vh, 360px)", display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 10, color: "#2060c0", marginBottom: 4, lineHeight: 1.8 }}>
            {npc.name.toUpperCase()}
            <span style={{ color: "#888", fontSize: 8, marginLeft: 10 }}>{npc.breed}</span>
          </div>
          <div style={{ fontSize: 6, color: region?.accent ?? "#888", marginBottom: 10 }}>
            {region?.name} · Quest: {npc.questTitle}
            {questDone && " · ✓ Memory saved"}
          </div>

          <div style={{ flex: 1, overflowY: "auto", marginBottom: 12 }}>
            {messages.map((m, i) => (
              <p key={i} style={{ fontSize: 9, lineHeight: 2, color: "#282828", margin: "0 0 10px" }}>
                {m.from === "user" && <span style={{ color: "#2060c0" }}>▶ </span>}
                {m.text}
              </p>
            ))}
            <div ref={bottomRef} />
          </div>

          {available.length > 0 && (
            <div style={{ borderTop: "2px dashed #c0c0c0", paddingTop: 10, marginBottom: canSave ? 10 : 0 }}>
              <div style={{ fontSize: 7, color: "#888", marginBottom: 8 }}>ASK SOMETHING ↑↓ · Z/ENTER</div>
              {available.map((qi, i) => (
                <button
                  key={qi}
                  onClick={() => ask(npc.qa[qi], qi)}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    background: i === cursor ? "#d8e8ff" : "transparent",
                    border: "none",
                    cursor: "pointer",
                    fontSize: 8,
                    lineHeight: 2.2,
                    color: "#282828",
                    padding: "2px 4px",
                    ...pixel,
                  }}
                >
                  {i === cursor ? "▶ " : "  "}{npc.qa[qi].q}
                </button>
              ))}
            </div>
          )}

          {canSave && (
            <button
              onClick={onCompleteQuest}
              style={{
                width: "100%",
                fontSize: 8,
                padding: "10px 12px",
                background: "#ffe880",
                border: "3px solid #383838",
                cursor: "pointer",
                color: "#282828",
                marginTop: 4,
                ...pixel,
              }}
            >
              ✦ SAVE THIS MEMORY TO YOUR JOURNAL
            </button>
          )}

          {!canSave && available.length === 0 && (
            <div style={{ fontSize: 7, color: "#888", textAlign: "right" }}>ESC to close</div>
          )}
        </div>
      </div>
    </div>
  );
}
