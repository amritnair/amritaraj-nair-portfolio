/**
 * The numbers that decide how the car feels, in one place.
 *
 * Kept out of the component so they can be read at a glance and tuned against
 * each other — the difference between "arcade racer" and "shopping trolley" is
 * mostly the ratios between these, not any single value.
 */

/** Peak forward force at a standstill. Falls off towards top speed. */
export const ACCELERATION = 62;
/** Force still available at the speed limiter — keeps the top end from feeling dead. */
export const ACCELERATION_FLOOR = 0.22;
export const REVERSE_ACCELERATION = 34;
/** Deceleration when you ask for reverse while still rolling forwards. */
export const BRAKE_FORCE = 58;
/** Speed below which "reverse" means reverse rather than brake. */
export const REVERSE_THRESHOLD = 1.6;

export const MAX_SPEED = 30;
export const BOOST_SPEED = 44;
export const BOOST_ACCELERATION = 96;

export const TURN_RATE = 2.6;
/** Multiplier on turn rate with the handbrake down. */
export const DRIFT_TURN_GAIN = 1.45;
export const GRIP = 0.9;
/** Fraction of grip left while drifting — the whole trick lives in this number. */
export const DRIFT_GRIP = 0.22;

/** Boost tank, in units. Everything below is per second. */
export const BOOST_MAX = 100;
export const BOOST_DRAIN = 33;
/** Earned while sideways, scaled by how sideways and how fast. */
export const BOOST_PER_DRIFT = 34;
/** Awarded whole, on landing a jump and on picking up ore. */
export const BOOST_PER_LANDING = 22;
export const BOOST_PER_ORE = 30;
/** You cannot tap into an empty tank; it has to build past this to fire. */
export const BOOST_MIN_TO_FIRE = 12;

/**
 * Aerodynamics. Downforce presses the car into the road as speed rises, so it
 * stops skipping off every joint and crest; air alignment eases the body's
 * pitch toward its flight path while airborne, so it arrives wheels-first
 * instead of nose-first — the landing is smooth without taking the tumble
 * away from the trick system, which spins the visual shell, not the body.
 */
export const DOWNFORCE = 16;

/**
 * Air feel. The first pass set the body's pitch rate hard toward the glide
 * slope from the instant the wheels left the ground, which nosed the car over
 * mid-arc and made every jump feel like being tipped off a shelf. Alignment
 * now waits out the launch, comes in gently, and only firms up on the way
 * down; extra fall gravity after the apex is the classic arcade trick that
 * makes a jump feel punchy instead of floaty.
 */
export const AIR_ALIGN = 2.2;
export const AIR_ALIGN_LIMIT = 0.5;
/** Seconds after takeoff before alignment starts steering the body. */
export const AIR_ALIGN_DELAY = 0.22;
/** Extra downward acceleration once past the apex. */
export const FALL_GRAVITY = 14;
/** Fraction of vertical speed kept on touchdown — kills the pogo bounce. */
export const LANDING_KEEP = 0.35;

/**
 * Kicker pads. Driving onto a kicker face fires a surge and pours into the
 * boost tank, so a ramp taken at cruising speed still launches properly.
 *
 * The surge fades out as your entry speed rises: a flat surge made every
 * approach identical — 1.4s of air whether you crawled on or arrived on
 * boost — which threw away the reason to carry speed into a ramp at all.
 * Slow in gets a big shove, fast in gets almost nothing, and the airtime
 * curve stays honest at roughly 1.0s / 1.1s / 1.2s.
 */
export const KICKER_SURGE = 85;
export const KICKER_RADIUS = 7.5;
export const KICKER_BOOST_FILL = 55;

/** Camera framing. Field of view widens with speed to sell it. */
export const FOV_SPEED_GAIN = 13;
export const FOV_BOOST_GAIN = 7;
export const CAM_DISTANCE = 11.5;
export const CAM_SPEED_PULLBACK = 3.4;
export const CAM_HEIGHT = 5.4;

/**
 * Force curve: full push from rest, tapering as you approach the limiter so
 * the car has a real power band instead of a flat shove until it clips.
 */
export function driveForce(speed: number, limit: number, boosting: boolean) {
  const t = Math.min(Math.abs(speed) / limit, 1);
  const falloff = ACCELERATION_FLOOR + (1 - ACCELERATION_FLOOR) * (1 - t * t);
  return (boosting ? BOOST_ACCELERATION : ACCELERATION) * falloff;
}
