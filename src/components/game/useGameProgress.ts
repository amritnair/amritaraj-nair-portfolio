import { useCallback, useState } from "react";
import { ALL_MEMORY_IDS } from "./narrative";

const STORAGE_KEY = "kobe-journal-v1";

function loadUnlocked(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    return new Set(JSON.parse(raw) as string[]);
  } catch {
    return new Set();
  }
}

function saveUnlocked(ids: Set<string>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...ids]));
}

export function useGameProgress() {
  const [unlocked, setUnlocked] = useState<Set<string>>(loadUnlocked);
  const [introSeen, setIntroSeen] = useState(() => localStorage.getItem("kobe-intro-v1") === "1");
  const [completedQuests, setCompletedQuests] = useState<Set<string>>(() => {
    try {
      const raw = localStorage.getItem("kobe-quests-v1");
      return raw ? new Set(JSON.parse(raw) as string[]) : new Set();
    } catch {
      return new Set();
    }
  });

  const unlockMemory = useCallback((id: string) => {
    setUnlocked(prev => {
      if (prev.has(id)) return prev;
      const next = new Set(prev);
      next.add(id);
      saveUnlocked(next);
      return next;
    });
  }, []);

  const completeQuest = useCallback((npcId: string, memoryId: string) => {
    setCompletedQuests(prev => {
      const next = new Set(prev);
      next.add(npcId);
      localStorage.setItem("kobe-quests-v1", JSON.stringify([...next]));
      return next;
    });
    unlockMemory(memoryId);
  }, [unlockMemory]);

  const markIntroSeen = useCallback(() => {
    localStorage.setItem("kobe-intro-v1", "1");
    setIntroSeen(true);
    unlockMemory("curiosity");
  }, [unlockMemory]);

  const allMemoriesFound = ALL_MEMORY_IDS.every(id => unlocked.has(id));

  const resetProgress = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem("kobe-quests-v1");
    localStorage.removeItem("kobe-intro-v1");
    setUnlocked(new Set());
    setCompletedQuests(new Set());
    setIntroSeen(false);
  }, []);

  return {
    unlocked,
    introSeen,
    completedQuests,
    unlockMemory,
    completeQuest,
    markIntroSeen,
    allMemoriesFound,
    resetProgress,
    memoryCount: unlocked.size,
    totalMemories: ALL_MEMORY_IDS.length,
  };
}
