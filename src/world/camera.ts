/**
 * Shared camera state.
 *
 * The base field of view is decided by the window's shape (see AdaptiveFov) but
 * the driving loop widens it with speed every frame. They need one number
 * between them, and threading it through React state would mean a re-render per
 * frame for a value the render loop already owns.
 */
export const cameraTuning = {
  /** Field of view at a standstill, in degrees. */
  baseFov: 55,
};
