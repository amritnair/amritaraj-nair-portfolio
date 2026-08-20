import { useSyncExternalStore } from "react";
import {
  DEFAULT_GARAGE,
  ORE_VALUE,
  lapReward,
  loadGarage,
  saveGarage,
  type GarageState,
} from "./garage";

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
  garageOpen: boolean;
  garage: GarageState;
  /** Set briefly after a lap so the HUD can announce it. */
  lastLap: { time: number; reward: number; best: boolean } | null;
};

let state: WorldState = {
  activeZone: null,
  openZone: null,
  visited: [],
  started: false,
  loaded: false,
  speed: 0,
  showHelp: false,
  garageOpen: false,
  garage: DEFAULT_GARAGE,
  lastLap: null,
};

const listeners = new Set<() => void>();

/**
 * Per-frame values the HUD polls directly, kept out of React's render loop.
 * `drift` is live chain state: it changes every frame while sideways, and a
 * React render per frame would cost more than the whole drift system does.
 */
export const telemetry = {
  x: 0,
  y: 0,
  z: 0,
  heading: 0,
  speed: 0,
  /** Points banked in the chain currently in progress. */
  driftChain: 0,
  /** Chain multiplier, 1 while straight. */
  driftMultiplier: 1,
  /** How sideways the car is right now, 0..1 — drives the HUD meter. */
  driftAngle: 0,
  driftActive: false,
  /** Speedway lap state, written by the race system each frame. */
  raceRunning: false,
  raceTime: 0,
  raceCheckpoint: 0,
  raceTotal: 3,
};

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
  toggleGarage: () => set({ garageOpen: !state.garageOpen }),
  clearLapBanner: () => set({ lastLap: null }),
  closeGarage: () => set({ garageOpen: false }),

  /** Called once on mount — reads whatever the last session banked. */
  hydrateGarage() {
    set({ garage: loadGarage() });
  },

  /**
   * Banks a finished drift chain. Only called when a chain ends, so this is a
   * handful of renders per session rather than one per frame.
   */
  bankDrift(amount: number) {
    const points = Math.round(amount);
    if (points <= 0) return;
    const garage = {
      ...state.garage,
      points: state.garage.points + points,
      best: Math.max(state.garage.best, points),
    };
    saveGarage(garage);
    set({ garage });
  },

  /** Ore pickup. Idempotent: the collision test fires on every frame in range. */
  collectOre(id: string) {
    if (state.garage.ores.includes(id)) return;
    const garage = {
      ...state.garage,
      ores: [...state.garage.ores, id],
      points: state.garage.points + ORE_VALUE,
    };
    saveGarage(garage);
    set({ garage });
  },

  /** A completed speedway lap: pays out, and records a personal best. */
  finishLap(time: number) {
    const reward = lapReward(time);
    const best = state.garage.bestLap === null || time < state.garage.bestLap;
    const garage = {
      ...state.garage,
      points: state.garage.points + reward,
      bestLap: best ? time : state.garage.bestLap,
    };
    saveGarage(garage);
    set({ garage, lastLap: { time, reward, best } });
  },

  selectPaint(paint: string) {
    const garage = { ...state.garage, paint };
    saveGarage(garage);
    set({ garage });
  },

  selectDesign(design: string) {
    const garage = { ...state.garage, design };
    saveGarage(garage);
    set({ garage });
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
