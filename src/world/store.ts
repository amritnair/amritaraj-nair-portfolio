import { useSyncExternalStore } from "react";
import {
  DEFAULT_GARAGE,
  ORE_VALUE,
  loadGarage,
  saveGarage,
  scoreLap,
  type GarageState,
  type LapScore,
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
  /** Set after a lap: the full itemised result, shown until dismissed. */
  lastLap: LapScore | null;
  /** Set briefly after a landing, same idea. */
  lastTrick: { air: number; spins: number; reward: number } | null;
  /**
   * What the player chose when they arrived on the circuit. The race clock
   * only runs in "race"; "cruise" keeps the loop as a road. Reset to
   * "undecided" on leaving, so the choice is offered again next time up.
   */
  circuitMode: "undecided" | "race" | "cruise";
  /** True while the choice is on screen. */
  circuitPrompt: boolean;
  /** Rolling feed of point awards, for the floating "+N" toasts. */
  awards: { id: number; label: string; amount: number }[];
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
  lastTrick: null,
  circuitMode: "undecided",
  circuitPrompt: false,
  awards: [],
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
  /** Live jump state, written every frame while the wheels are off the road. */
  airborne: false,
  airTime: 0,
  airSpin: 0,
  /** Boost tank, 0..BOOST_MAX, and whether it is firing right now. */
  boost: 0,
  boosting: false,
};

/**
 * Bookkeeping for the lap in progress. Style points earned during a lap are
 * counted here and paid out with the lap result, so a lap you drove well is
 * visibly worth more than the same lap driven scrappily.
 */
const lap = { style: 0, impacts: 0 };

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
  dismissAward: (id: number) => set({ awards: state.awards.filter((a) => a.id !== id) }),
  clearTrickBanner: () => set({ lastTrick: null }),

  /** Called when the car first reaches the circuit deck. */
  askCircuitMode() {
    if (state.circuitMode !== "undecided" || state.circuitPrompt) return;
    set({ circuitPrompt: true });
  },
  chooseCircuitMode(mode: "race" | "cruise") {
    set({ circuitMode: mode, circuitPrompt: false });
  },
  /** Called when the car drops off the circuit — offer the choice again. */
  leaveCircuit() {
    if (state.circuitMode === "undecided" && !state.circuitPrompt) return;
    set({ circuitMode: "undecided", circuitPrompt: false });
  },

  /** Registers a hit hard enough to count against a clean lap. */
  registerImpact() {
    lap.impacts += 1;
  },

  /** Starts a fresh lap's bookkeeping. */
  startLap() {
    lap.style = 0;
    lap.impacts = 0;
  },

  /** A landed jump: airtime plus whole rotations. */
  landTrick(air: number, spins: number) {
    const reward = Math.round(air * 900 + spins * 1600);
    if (reward <= 0) return;
    if (telemetry.raceRunning) lap.style += reward;
    const garage = { ...state.garage, points: state.garage.points + reward };
    saveGarage(garage);
    set({ garage, lastTrick: { air, spins, reward } });
  },
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
    if (telemetry.raceRunning) lap.style += points;
    const garage = {
      ...state.garage,
      points: state.garage.points + points,
      best: Math.max(state.garage.best, points),
    };
    saveGarage(garage);
    set({ garage, awards: award(state.awards, "Drift", points) });
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
    set({ garage, awards: award(state.awards, "Ore", ORE_VALUE) });
  },

  /** A completed lap: pays out itemised, and records a personal best. */
  finishLap(time: number) {
    const result = scoreLap(time, lap.style, lap.impacts === 0);
    result.best = state.garage.bestLap === null || time < state.garage.bestLap;
    // Style was already banked as it happened; only the lap's own money is new.
    const fresh = result.base + result.cleanBonus;
    const garage = {
      ...state.garage,
      points: state.garage.points + fresh,
      bestLap: result.best ? time : state.garage.bestLap,
    };
    saveGarage(garage);
    set({ garage, lastLap: result });
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

let awardId = 0;
/** Keeps the toast feed short — three at a time is plenty. */
function award(current: WorldState["awards"], label: string, amount: number) {
  awardId += 1;
  return [...current, { id: awardId, label, amount }].slice(-3);
}

export function useWorld<T>(selector: (s: WorldState) => T): T {
  return useSyncExternalStore(
    worldStore.subscribe,
    () => selector(state),
    () => selector(state),
  );
}
