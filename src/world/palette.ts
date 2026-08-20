/** Dusk palette — everything in the world pulls its colours from here. */
export const PALETTE = {
  fog: "#160f34",
  sky: "#241a52",
  horizon: "#6b3f8f",
  ground: "#2d2b5e",
  groundEdge: "#1d1b42",
  pavement: "#5d59a0",
  pavementDark: "#464279",
  road: "#3a3773",
  foliageDark: "#1f6b58",
  foliage: "#2e9271",
  foliageLight: "#48c08c",
  bark: "#3a2b52",
  rock: "#4b477e",
  lantern: "#ffb15c",
  moon: "#9fb4ff",
  water: "#1b2f6b",
};

/**
 * The neon set. Kept apart from the dusk palette above because these are light
 * sources, not surfaces — they're used with toneMapped={false} so bloom can
 * blow them out.
 */
export const NEON = {
  cyan: "#31d8ff",
  magenta: "#c341ff",
  amber: "#ff9f2f",
  lime: "#7dffd0",
  deck: "#0f1130",
  deckEdge: "#191c46",
};

/** Deterministic PRNG so the island looks identical on every visit. */
export function makeRandom(seed: number) {
  let value = seed >>> 0;
  return () => {
    value = (value * 1664525 + 1013904223) >>> 0;
    return value / 4294967296;
  };
}
