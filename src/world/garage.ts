/**
 * Everything the player can unlock, and the thresholds that unlock it.
 *
 * Costs are in banked drift points. The first two entries of each list are
 * free so the design screen is never an empty room on a first visit.
 */

export type Paint = {
  id: string;
  name: string;
  /** Body colour. */
  shell: string;
  /** Emissive trim — the colour the car actually reads as at night. */
  trim: string;
  /** Secondary emissive, used for the belly seam and tail bar. */
  accent: string;
  cost: number;
};

export type Design = {
  id: string;
  name: string;
  blurb: string;
  cost: number;
};

export const PAINTS: Paint[] = [
  { id: "grid", name: "Grid", shell: "#10122c", trim: "#31d8ff", accent: "#c341ff", cost: 0 },
  { id: "ember", name: "Ember", shell: "#26101c", trim: "#ff9f2f", accent: "#ff3b6b", cost: 0 },
  { id: "venom", name: "Venom", shell: "#0d2018", trim: "#7dffd0", accent: "#b6ff3b", cost: 1500 },
  { id: "orchid", name: "Orchid", shell: "#1d0f2e", trim: "#ff5fd2", accent: "#8f5bff", cost: 4000 },
  { id: "sabre", name: "Sabre", shell: "#2a2118", trim: "#ffe9a8", accent: "#ff9f2f", cost: 9000 },
  { id: "void", name: "Void", shell: "#05060f", trim: "#f2f5ff", accent: "#4a4488", cost: 18000 },
];

export const DESIGNS: Design[] = [
  { id: "runner", name: "Runner", blurb: "The standard shell.", cost: 0 },
  { id: "stripe", name: "Stripe", blurb: "Twin race stripes over the hull.", cost: 0 },
  { id: "wing", name: "Wing", blurb: "Rear wing and a wider tail bar.", cost: 2500 },
  { id: "hover", name: "Hover", blurb: "Wheel covers and a glowing skirt.", cost: 6000 },
  { id: "spike", name: "Spike", blurb: "Roof fin and canards on the nose.", cost: 12000 },
];

export const PAINT_BY_ID = Object.fromEntries(PAINTS.map((p) => [p.id, p]));
export const DESIGN_BY_ID = Object.fromEntries(DESIGNS.map((d) => [d.id, d]));

/** Points a single diamond ore is worth. */
export const ORE_VALUE = 750;

/**
 * A clean lap is worth a lot; a slow one still pays. The circuit is a bit over
 * 1000 units around — about 40 seconds flat out — so this puts a good lap near
 * the price of a mid-tier unlock and still rewards shaving seconds off.
 */
export function lapReward(time: number) {
  return Math.max(800, Math.round(16000 - time * 220));
}

export type GarageState = {
  points: number;
  /** Highest single drift chain, kept as a bragging number. */
  best: number;
  paint: string;
  design: string;
  /** Ids of ore already picked up, so the map stays cleared between sessions. */
  ores: string[];
  /** Fastest speedway lap in seconds, or null if never completed one. */
  bestLap: number | null;
};

const STORAGE_KEY = "amrit-world-garage-v1";

export const DEFAULT_GARAGE: GarageState = {
  points: 0,
  best: 0,
  paint: "grid",
  design: "runner",
  ores: [],
  bestLap: null,
};

export function loadGarage(): GarageState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_GARAGE;
    const parsed = JSON.parse(raw) as Partial<GarageState>;
    // Validate rather than trust: a stale build's ids would otherwise leave the
    // car referencing a paint that no longer exists.
    return {
      points: Number.isFinite(parsed.points) ? Math.max(0, parsed.points as number) : 0,
      best: Number.isFinite(parsed.best) ? Math.max(0, parsed.best as number) : 0,
      paint: parsed.paint && PAINT_BY_ID[parsed.paint] ? parsed.paint : DEFAULT_GARAGE.paint,
      design: parsed.design && DESIGN_BY_ID[parsed.design] ? parsed.design : DEFAULT_GARAGE.design,
      ores: Array.isArray(parsed.ores) ? parsed.ores.filter((id) => typeof id === "string") : [],
      bestLap:
        typeof parsed.bestLap === "number" && Number.isFinite(parsed.bestLap)
          ? parsed.bestLap
          : null,
    };
  } catch {
    // Private browsing, disabled storage, corrupt JSON — none of it is worth
    // breaking the world over.
    return DEFAULT_GARAGE;
  }
}

export function saveGarage(garage: GarageState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(garage));
  } catch {
    /* nothing to do — the session just won't persist */
  }
}

export const isUnlocked = (cost: number, points: number) => points >= cost;
