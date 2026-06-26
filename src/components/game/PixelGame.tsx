import { useCallback, useEffect, useRef, useState } from "react";
import Phaser from "phaser";
import { createPhaserGame } from "./phaser/createPhaserGame";
import { NPC_DOGS, type NpcConfig } from "./npcData";
import { getMemory } from "./narrative";
import DialoguePanel from "./DialoguePanel";
import IntroLetter from "./IntroLetter";
import AdventureJournal from "./AdventureJournal";
import EndingScreen from "./EndingScreen";
import { useGameProgress } from "./useGameProgress";

const pixel: React.CSSProperties = {
  fontFamily: "'Press Start 2P', monospace",
  imageRendering: "pixelated",
};

export default function PixelGame() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<Phaser.Game | null>(null);
  const [nearId, setNearId] = useState<string | null>(null);
  const [openNpc, setOpenNpc] = useState<NpcConfig | null>(null);
  const [journalOpen, setJournalOpen] = useState(false);
  const [endingOpen, setEndingOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const {
    unlocked,
    introSeen,
    completedQuests,
    completeQuest,
    markIntroSeen,
    allMemoriesFound,
    memoryCount,
    totalMemories,
  } = useGameProgress();

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3200);
  }, []);

  const onNearNpc = useCallback((id: string | null) => setNearId(id), []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || !introSeen) return;

    const game = createPhaserGame(el, { onNearNpc });
    gameRef.current = game;
    return () => {
      game.destroy(true);
      gameRef.current = null;
    };
  }, [onNearNpc, introSeen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.code === "KeyJ" && !openNpc && !endingOpen) {
        setJournalOpen(j => !j);
      }
      if (e.code === "KeyE" && nearId && !openNpc && !journalOpen && !endingOpen && introSeen) {
        const npc = NPC_DOGS.find(n => n.id === nearId);
        if (!npc) return;
        if (npc.elder && allMemoriesFound) {
          setEndingOpen(true);
          return;
        }
        setOpenNpc(npc);
      }
      if (e.code === "Escape") {
        setOpenNpc(null);
        setJournalOpen(false);
        setEndingOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [nearId, openNpc, journalOpen, endingOpen, introSeen, allMemoriesFound]);

  const handleCompleteQuest = () => {
    if (!openNpc || completedQuests.has(openNpc.id)) return;
    completeQuest(openNpc.id, openNpc.memoryId);
    const mem = getMemory(openNpc.memoryId);
    showToast(`Memory saved: ${mem?.title ?? "New chapter"}`);
    setOpenNpc(null);
  };

  const nearNpc = nearId ? NPC_DOGS.find(n => n.id === nearId) : null;

  return (
    <div style={{ width: "100%", height: "100vh", position: "relative", background: "#181818" }}>
      {!introSeen && <IntroLetter onContinue={markIntroSeen} />}

      <div ref={containerRef} style={{ width: "100%", height: "100%", visibility: introSeen ? "visible" : "hidden" }} />

      {introSeen && !openNpc && !journalOpen && !endingOpen && (
        <>
          <div style={{ position: "absolute", top: 12, left: 12, zIndex: 20, ...pixel, fontSize: 7, color: "#f8f8f8", background: "rgba(24,24,24,0.7)", border: "2px solid #f8f8f8", padding: "6px 10px" }}>
            MEMORIES {memoryCount}/{totalMemories} · J JOURNAL
          </div>

          <div style={{ position: "absolute", bottom: 12, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8, zIndex: 20, ...pixel }}>
            {[["WASD", "MOVE"], ["SHIFT", "RUN"], ...(nearId ? [["E", nearNpc?.elder && allMemoriesFound ? "FINALE" : "TALK"]] as const : [])].map(([k, v]) => (
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
        </>
      )}

      {nearId && !openNpc && introSeen && !journalOpen && (
        <div style={{ position: "absolute", top: 16, left: "50%", transform: "translateX(-50%)", zIndex: 20, ...pixel, fontSize: 8, color: "#f8f8f8", background: "#2060c0", border: "3px solid #f8f8f8", padding: "8px 14px", boxShadow: "4px 4px 0 #181818" }}>
          ▼ {nearNpc?.elder && allMemoriesFound ? "PRESS E — RETURN TO THE ELDERS" : "PRESS E TO TALK"}
        </div>
      )}

      {toast && (
        <div style={{ position: "absolute", top: 52, left: "50%", transform: "translateX(-50%)", zIndex: 30, ...pixel, fontSize: 7, color: "#282828", background: "#ffe880", border: "3px solid #383838", padding: "10px 16px", maxWidth: "90vw", textAlign: "center" }}>
          {toast}
        </div>
      )}

      {openNpc && (
        <DialoguePanel
          npc={openNpc}
          questDone={completedQuests.has(openNpc.id)}
          onClose={() => setOpenNpc(null)}
          onCompleteQuest={handleCompleteQuest}
        />
      )}

      {journalOpen && <AdventureJournal unlocked={unlocked} onClose={() => setJournalOpen(false)} />}
      {endingOpen && <EndingScreen onClose={() => setEndingOpen(false)} />}

      <style>{`@keyframes blink { 50% { opacity: 0.3; } }`}</style>
    </div>
  );
}
