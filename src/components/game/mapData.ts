export const TILE = 16;
export const MAP_W = 52;
export const MAP_H = 40;

/** Tile indices in sunnyland tileset (0-based, matching Tiled gids minus 1). */
export const T = {
  GRASS: 78,
  GRASS2: 77,
  GRASS3: 81,
  GRASS4: 79,
  PATH: 180,
  PATH2: 181,
  PATH3: 183,
  DIRT: 176,
} as const;

export function tileToWorld(tx: number, ty: number) {
  return { x: tx * TILE + TILE / 2, y: ty * TILE + TILE };
}

/** Fixed tree / rock placements [tileX, tileY]. */
export const OBSTACLES: [number, number][] = [
  [4, 4], [8, 3], [12, 5], [16, 3], [20, 6], [44, 4], [48, 6], [40, 3],
  [4, 34], [9, 36], [14, 35], [46, 34], [50, 32], [42, 37],
  [6, 18], [6, 22], [45, 16], [45, 20], [25, 4], [30, 5], [22, 35], [28, 36],
  [3, 12], [48, 12], [3, 28], [48, 28],
];

/** Hidden bone collectible [tileX, tileY]. */
export const BONE_TILE: [number, number] = [4, 32];
