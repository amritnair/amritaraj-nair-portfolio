import { useCallback, useEffect, useRef, useState } from "react";
import Phaser from "phaser";
import { createPhaserGame } from "./phaser/createPhaserGame";
import { NPC_DOGS, type NpcConfig } from "./npcData";
import DialoguePanel from "./DialoguePanel";

const pixel: React.CSSProperties = {
  fontFamily: "'Press Start 2P', monospace",
  imageRendering: "pixelated",
};

export default function PixelGame() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<Phaser.Game | null>(null);
  const [nearId, setNearId] = useState<string | null>(null);
  const [openNpc, setOpenNpc] = useState<NpcConfig | null>(null);
  const [boneFound, setBoneFound] = useState(false);

  const onNearNpc = useCallback((id: string | null) => setNearId(id), []);
  const onBoneFound = useCallback(() => {
    setBoneFound(true);
    setTimeout(() => setBoneFound(false), 3500);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const game = createPhaserGame(el, { onNearNpc, onBoneFound });
    gameRef.current = game;

    return () => {
      game.destroy(true);
      gameRef.current = null;
    };
  }, [onNearNpc, onBoneFound]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.code === "KeyE" && nearId && !openNpc) {
        const npc = NPC_DOGS.find(n => n.id === nearId);
        if (npc) setOpenNpc(npc);
      }
      if (e.code === "Escape" && openNpc) setOpenNpc(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [nearId, openNpc]);

  return (
    <div style={{ width: "100%", height: "100vh", position: "relative", background: "#181818" }}>
      <div ref={containerRef} style={{ width: "100%", height: "100%" }} />

      {/* HUD */}
      {!openNpc && (
        <div style={{ position: "absolute", bottom: 12, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8, zIndex: 20, ...pixel }}>
          {[
            ["WASD", "MOVE"],
            ["SHIFT", "RUN"],
            ...(nearId ? [["E", "TALK"]] as const : []),
          ].map(([k, v]) => (
            <span
              key={k}
              style={{
                fontSize: 7,
                color: "#f8f8f8",
                background: "#383838",
                border: "3px solid #f8f8f8",
                padding: "6px 10px",
                boxShadow: "4px 4px 0 #181818",
                animation: k === "E" ? "blink 0.8s step-end infinite" : undefined,
              }}
            >
              {k} {v}
            </span>
          ))}
        </div>
      )}

      {nearId && !openNpc && (
        <div style={{ position: "absolute", top: 16, left: "50%", transform: "translateX(-50%)", zIndex: 20, ...pixel, fontSize: 8, color: "#f8f8f8", background: "#2060c0", border: "3px solid #f8f8f8", padding: "8px 14px", boxShadow: "4px 4px 0 #181818" }}>
          ▼ PRESS E TO TALK
        </div>
      )}

      {boneFound && (
        <div style={{ position: "absolute", top: 56, left: "50%", transform: "translateX(-50%)", zIndex: 20, ...pixel, fontSize: 8, color: "#282828", background: "#ffe880", border: "3px solid #383838", padding: "10px 16px" }}>
          KOBE FOUND A HIDDEN BONE!
        </div>
      )}

      {openNpc && <DialoguePanel npc={openNpc} onClose={() => setOpenNpc(null)} />}

      <style>{`@keyframes blink { 50% { opacity: 0.3; } }`}</style>
    </div>
  );
}
