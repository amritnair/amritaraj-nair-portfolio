import { useSyncExternalStore } from "react";

export type WorldState = {
  /** Zone the car is currently parked inside, or null when out driving. */
  activeZone: string | null;
  /** Zone whose panel is open. Separate from activeZone so you can close it. */
  openZone: string | null;
  visited: string[];
  started: boolean;
  loaded: boolean;
  speed: number;
  showHelp: boolean;
};

let state: WorldState = {
  activeZone: null,
  openZone: null,
  visited: [],
  started: false,
  loaded: false,
  speed: 0,
  showHelp: false,
};

const listeners = new Set<() => void>();

/** Per-frame values the HUD polls directly, kept out of React's render loop. */
export const telemetry = { x: 0, z: 0, heading: 0, speed: 0 };

function set(patch: Partial<WorldState>) {
  let changed = false;
  for (const key of Object.keys(patch) as (keyof WorldState)[]) {
    if (!Object.is(state[key], patch[key])) {
      changed = true;
      break;
    }
  }
  if (!changed) return;
  state = { ...state, ...patch };
  listeners.forEach((l) => l());
}

export const worldStore = {
  get: () => state,
  subscribe(listener: () => void) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
  setLoaded: (loaded: boolean) => set({ loaded }),
  start: () => set({ started: true }),
  toggleHelp: () => set({ showHelp: !state.showHelp }),
  closePanel: () => set({ openZone: null }),
  openPanel: (id: string) => set({ openZone: id }),
  /** Speed is written every frame — kept out of React by the HUD's own rAF. */
  setSpeed: (speed: number) => {
    state = { ...state, speed };
  },
  enterZone(id: string) {
    if (state.activeZone === id) return;
    set({
      activeZone: id,
      openZone: id,
      visited: state.visited.includes(id) ? state.visited : [...state.visited, id],
    });
  },
  leaveZone(id: string) {
    if (state.activeZone !== id) return;
    set({ activeZone: null, openZone: state.openZone === id ? null : state.openZone });
  },
};

export function useWorld<T>(selector: (s: WorldState) => T): T {
  return useSyncExternalStore(
    worldStore.subscribe,
    () => selector(state),
    () => selector(state),
  );
}
