# Amritaraj Nair — drivable portfolio

A résumé you drive around. React + `@react-three/fiber` + `@react-three/rapier`,
deployed to GitHub Pages on every push to `main`.

## Working in this repo — read first

**Keep tool output small.** Editing a file makes the harness dump large diffs
back into context. Prefer `python3 - << 'PY' > /dev/null` heredocs for edits and
`grep -n` over `cat` for reading. Never `cat` a whole file to "check" it — `npx
tsc --noEmit -p tsconfig.app.json` is the check.

**Verify before claiming.** `npx tsc --noEmit -p tsconfig.app.json && npm run
build`, then load the preview and take a screenshot. Say plainly what you could
not verify.

**The preview lies about motion.** The Browser pane renders in bursts, drops
held keys on blur, and lets rapier take enormous timesteps — so the car never
exceeds ~10 km/h and tunnels through geometry that is fine in a real browser.
Never conclude a physics bug from it. Verify geometry by temporarily moving
`SPAWN` in `Car.tsx` onto the thing being tested, then **always restore it**.

**The preview's clock only runs while it is drawing.** `useFrame` advances
during a screenshot and stops between tool calls, so a value polled with
`javascript_tool` is whatever the last drawn frame left behind. To watch
something evolve you have to keep taking screenshots; to test a fall, shorten
the fall rather than waiting for one.

**Console errors persist across reloads.** The message buffer is not cleared by
navigation, so stale HMR errors from a mid-edit state look live. Confirm in a
fresh tab (`tabs_create` + `navigate`) before believing one.

**Physics is checked headless, not in the preview.** `npm run test:drive`
builds the real road colliders (`src/world/roads.ts`, shared with the game) in
Node rapier, mirrors Car.tsx's forces, and drives the climb with an ideal
driver and a keyboard driver (200 ms late, keys all-or-nothing). If you change
a force in Car.tsx, change it in `tools/drive-test.ts` too. `VERBOSE=1 HZ=10`
prints a trace; `HANDS_OFF=1` steers nothing. `npm run search:ramp` scores
`RAMP_PLAN` candidates (radius, barrier clearance, grade, ring clearance).

**Deploy is `git push`.** Then watch both workflows: the build, and the separate
`pages build and deployment`.

## Layout

    src/world/
      layout.ts     island/ring/circuit geometry — the single source of truth
                    for anything positional. circuitAt() is Catmull-Rom.
      content.ts    ALL résumé text. The districts and the written portfolio
                    both read it, so they can never disagree.
      drive.ts      every number that decides how the car feels
      Car.tsx       the frame loop: input → forces → scoring → camera
      store.ts      worldStore (React state) + telemetry (per-frame, NOT React)
      garage.ts     shop catalogue, rarity, ranks, lap scoring
      Circuit.tsx / Highways.tsx / Island.tsx / Skyline.tsx / Scenery.tsx
      Vehicle.tsx   the car model: paint, body kits, wheels
      audio.ts      procedural WebAudio, no asset files
      ui/           Hud, Panel (in-world résumé), Garage (shop), CarPreview
    src/pages/      Home (the landing page), Resume (PDF), NotFound
    tools/car.py    Blender: the car's shell. `npm run model:car`
    tools/props.py  Blender: island trees and rocks. `npm run model:props`
    tools/hero.py   Blender: the landing still. `npm run model:hero`
    tools/reel.py   Blender frames + ffmpeg encode. `npm run model:reel`
    tools/shots.sh  headless Chrome screenshots of the live projects. `npm run shots`
    public/models/  public/hero/  their output, committed — CI has no Blender

## Routes

**The site is on a HashRouter, so the hash IS the route.** An in-page
`href="#work"` does not jump down the page — it navigates to `/work`, which
does not exist, and the visitor gets a 404. Every in-page jump goes through
`scrollToSection` in `pages/site.tsx` instead. This broke the entire section
nav and the name in the corner before anyone noticed, because the links were
only ever tested by calling `scrollIntoView` from the console.

**The written pages have a light and a dark theme; the world is always
night.** Colours on those pages are semantic CSS variables (`--paper`,
`--ink`, `--ink-2`…`--ink-4`, `--rule-soft`, `--panel`) defined in
`index.css`, flipped by a `.dark` class on `<html>`. Never write a raw
`bg-black` or `text-white` onto a page element — the one exception is
anything sitting *over a photo or video*, which has to contrast with the image
rather than the page, and is deliberately left fixed. The class is set by a
script in `index.html` before React runs; setting it from React alone flashes
the wrong theme for a frame on every load.

**The GitHub count** ships as a snapshot (`pages/contributions.json`) so the
calendar is on screen at first paint, and is replaced by a live copy from a
public mirror once it arrives — GitHub's own calendar has no CORS. If the
mirror is down, the snapshot stays. Refresh the snapshot occasionally.

**The landing page is editorial; the world is neon.** That
contrast is deliberate — the previous landing page was dark, glowing and
gradient-lettered, which is the house style of every generated portfolio on
the internet. Restraint on the page is what makes the world read as a choice.
`Home.tsx` claims the document background on mount, because the rest of the
site is dark and an overscroll would otherwise show the world's colour.

`/` is the written portfolio and the front door. `/play` is the world, lazily
loaded so most visitors never pay for three.js at all. `/projects` is the full
gallery: every card, archived ones included. A card marked `archived` in
content.ts is kept off the front page and shown only there, so the landing
page can stay short without real work having to be deleted to keep it short. The game asked every visitor
to learn to drive before they could read a line of the résumé; it does not
any more.

## The Blender assets

Everything in the world is generated in code except two things, both made in
Blender and both committed because the deploy runner has no Blender.

`tools/car.py` lofts and bevels the car's shell. Two things justify the
pipeline: a silhouette that tapers (a car built from boxes is a stack of
rectangles) and bevelled edges (a hard 90° edge catches no light, so low-poly
reads as flat shapes). The export carries **no materials** — paint comes from
the garage — and the `.glb` is committed because the deploy runner has no
Blender. Regenerate with `npm run model:car` after editing the script.

`tools/props.py` builds the island's trees and rocks. Each tier carries a lit
rim, because nothing in the world is lit by anything except things that glow —
an unlit prop is a black cutout. A **join inherits the first part's origin**,
so apply the transform afterwards or the tree exports with its base below zero.

`tools/reel.py` renders the landing page's hero loop. Two things it has to
work around: the Homebrew Blender build **has no FFmpeg support** (there is no
`FFMPEG` member on `image_settings.file_format` at all), so it writes PNG
frames and `npm run model:reel` encodes them with ffmpeg; and Blender 5 moved
fcurves behind action slots and channelbags, so rather than reach in to set
LINEAR interpolation it keyframes **every** frame, which makes interpolation
irrelevant. `hero.py` and `car.py` guard their `main()` — `reel.py` imports
hero, and an unguarded one renders the wrong thing on import.

`tools/hero.py` renders the landing page's hero image. Three things there were
learned the hard way: area lights are in **watts**, so a few thousand of them lights a
night scene like a film set; the ASCII needs **its own pass** with the ground
hidden and the film transparent, because against a lit floor the car is a dark
silhouette and a luminance ramp inverts it; and a ramp mapping must be
**measured from the image**, not fixed, or a deliberately dark scene lands
entirely on two characters.

**Screenshots come from the live sites** (`npm run shots`), so they cannot
drift from what is deployed. Two traps: `--virtual-time-budget` never
completes on a page with a continuous animation loop and Chrome hangs
forever, so the script caps on wall-clock instead; and anything behind a
sign-in or lazily loaded captures as skeleton placeholders — Thorp's /feed and
/build both did, and were thrown away. **Look at every capture before shipping
it.** A screenshot of an empty state is worse than no screenshot.

**A muted autoplay is still refused often enough** — data saver, background
tab, Low Power Mode — that any hero video needs an explicit `play()` on
`canplay`, and a poster for when it is refused for good.

Blender is Z-up and the exporter converts to glTF's Y-up: a station's height
goes in Z and its position down the car in **-Y**. Built the obvious way
round, the car exports standing on its nose.

## Rules that came from real bugs

- **`telemetry` is not React state.** Anything changing per frame goes there and
  is read in a `useFrame` or the HUD's own rAF. A React render per frame costs
  more than most systems in the game.
- **Never pass `ref` to `@react-three/postprocessing` effect wrappers.** They
  memoise on `JSON.stringify(props)` and React 19 passes `ref` as a prop, so a
  populated ref throws on its circular `.parent`. Construct effects directly and
  mount as `<primitive>` — see `Grade.tsx`.
- **Tailwind arbitrary colours only take standard opacity steps.** `bg-[#fff]/92`
  silently compiles to *nothing*. Use /70 /80 /85 /90 /95.
- **Road collision is convex hulls sharing exact cross-sections**, never rotated
  boxes: a box only matches the road at its centre, so its end corners stand
  proud of the next one and every corner is a lip. A trimesh was tried and the
  car fell through it.
- **Smoothstep between spline nodes has zero derivative at both ends**, which
  reads as a pump every node. Hence Catmull-Rom.
- **Catmull-Rom must be centripetal**, not uniform, wherever the control points
  are unevenly spaced — uniform overshoots, and an overshoot in a road is a
  kink that doubles back on itself. Phantom endpoints by *reflection*; a
  repeated endpoint gives the curve zero speed as it arrives and bunches the
  last samples on top of each other.
- **Roads are flat: no banking, and the circuit is one height (27).** Roll is
  locked on the car body, so it physically cannot lean to match a banked
  deck — it sat on one edge of its collider with the solver fighting it every
  frame, which was most of what "not smooth" meant. `BANK_GAIN`/`BANK_LIMIT`
  are kept at zero rather than deleted. If banking ever comes back, curvature
  must be smoothed over a fixed length of road first, or a densely sampled
  ramp wobbles like a ribbon — and the roll lock has to go with it.
- **A road joins another road tangentially or not at all.** The climb used to
  end perpendicular on the circuit's centreline: flat ramp, banked deck, a
  two-metre step met side-on. It now arrives alongside the inner edge, built
  from the circuit's own frames shifted inward by half of each road, so the
  two decks are one surface. Approaches are authored as a *gap from the lane*
  near the top and as a *radius* lower down — each is the number that
  actually matters there, and the other is unusable (backing away from a
  curve along its tangent leaves the curve; an inset a hundred metres from
  the lane amplifies a degree of error into fifty metres of drift).
- **A lane that ends must taper.** Ending it at full width puts the corner of
  the next barrier where the deck stops.
- **Emissive + bloom washes out fast.** Threshold 0.82 / radius 0.6 is tuned;
  anything big, white and near the camera (gate beams, a chrome car) will haze
  the sky if raised.
- **The car's uprightness is `up · worldUp`, not pitch.** A car on its side has
  an ordinary pitch angle.
- **Every flip in this game is a pitch.** Roll is locked on the body
  (`enabledRotations` Z false) because a car that can roll ends up on its
  back, so a kerb or a joint tipping the nose is the only way over. On the
  ground the pitch *rate* is bled off continuously (`GROUND_PITCH_DAMP`) — a
  rate damper, not a lock, so the car still noses up a ramp and down the far
  side. Anything that can launch the car is a flip risk in proportion to its
  height: the ring's kerbs stood 0.75 above the deck and were a launch ramp
  at the current top speed.
- **Anything tuned "per frame" must be scaled by `delta`.** Grip removed 90%
  of sideways speed per *rendered* frame, so on a 120Hz MacBook it gripped
  twice as hard as tuned: on rails, then snapping loose. Convert with
  `1 - (1 - k) ** (delta * 60)`. The preview cannot show this — it does not
  render at 120Hz.
- **Recovery must never depend on the ground ray.** The ray is short and
  straight down from the car's middle; on its roof, on its side over a kerb,
  or wedged nose-up, the middle sits above its reach, `grounded` reads false,
  and X silently did nothing. Recovery keys off speed instead — a car on its
  back is slow, a car mid-jump is not. Take the heading from `forward` laid
  flat, never from a YXZ Euler: upside down that yaw reads half a turn out.
- **Keyboard steering needs easing.** Raw on/off keys driving the yaw rate
  make every tap a step change in heading. `STEER_RESPONSE`/`STEER_RETURN`
  ease it, and `HIGH_SPEED_STEER` tapers lock at speed.
- **Airborne means no control**: throttle, brakes, boost, grip and steering are
  all gated on the ground ray. Only the trick keys work in the air.
- **What you hit must be what you see.** The barriers were 1.9 tall in physics
  and 0.9 in the mesh, so every save felt like an invisible wall. One constant
  now drives both.
- **A kicker's lip is seven metres up, so no sane barrier contains a jump.**
  Walling the whole loop to jump height puts the track in a tube and hides the
  island it hangs over. Real circuits use normal barrier everywhere and catch
  fencing only where the cars get air; so does this one, and the fence's
  height is legible because cables ride *up* it rather than sitting at a fixed
  height.
- **Geometry alone cannot promise "you can't fall off".** A hard enough
  landing on the lip of a wall still gets over it. The catch in `Car.tsx` is
  the backstop: fall below every road with a sky road in recent memory and you
  are set down on the nearest one. It must be announced — a silent teleport
  reads as a bug, not a rescue.
- **Anything that looks solid must be solid.** Lamp posts, rocks, pylons and
  ramp legs all carry colliders sized to the mesh. A collider bigger than the
  thing turns a clip into a stop; one smaller lets you drive through the
  middle of it.
- **Barrier runs are slices of the loop, and one of them wraps the start
  line** — so a per-frame lookup keyed by index into a run is wrong. Key by
  the frame object.
- **Nothing may be placed by angle alone.** Kickers, pylons and ring legs are
  all positioned parametrically, and each needs an explicit test against the
  ramp's footprint — a kicker in the mouth of the slip road, or a pylon down
  through it, is a launch ramp or a column where a lane should be.

- **Gravity is -30, the circuit is at `CIRCUIT_HEIGHT` 7, roads are flat.**
  The climb is `RAMP_PLAN`: straight ascent, flat constant-radius arc, eased
  approach onto a lane beside the circuit's inner edge.
- **A car's nose is local -Z, so a body yaw facing (x, z) is
  `atan2(x, z) + π`** — `yawToFace` in drive.ts. Without the π the flip and
  the catch set you down backwards.
- **Barriers are frictionless.** With road friction, grazing one at 50 u/s
  stopped the car dead.
- **A lane closes from its far edge only.** Closing it about its centreline
  opened a slot between it and the circuit, where the circuit has no wall.
  And a circuit wall piece is left out only if *both* its ends run beside the
  lane.
- **Sky roads steer themselves round their own curves** (`skyRoadTurn`). The
  arc needs ~1 rad/s at top speed; without the assist no steering tuning let a
  keyboard player both hold it and tap without swerving.
- **Uphill assist is `forward.y`** (nose up is +y). It was `-forward.y` and
  pushed downhill.

## Controls

W/S drive+brake · A/D steer · Space drift · Shift boost · Q/E spin · F/C flip ·
X right the car · R respawn (contextual) · G garage · M mute · Esc close
