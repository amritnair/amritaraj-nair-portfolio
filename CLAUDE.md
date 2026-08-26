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

**Console errors persist across reloads.** The message buffer is not cleared by
navigation, so stale HMR errors from a mid-edit state look live. Confirm in a
fresh tab (`tabs_create` + `navigate`) before believing one.

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
    src/pages/      AllProjects (written portfolio), Resume (PDF), NotFound

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
- **Curvature drives bank, so smooth it first**, over a fixed length of road
  rather than a fixed number of frames — otherwise a densely sampled ramp
  keeps every ripple the sampling put in and the road wobbles like a ribbon.
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
- **Airborne means no control**: throttle, brakes, boost, grip and steering are
  all gated on the ground ray. Only the trick keys work in the air.
- **What you hit must be what you see.** The barriers were 1.9 tall in physics
  and 0.9 in the mesh, so every save felt like an invisible wall. One constant
  now drives both.
- **Nothing may be placed by angle alone.** Kickers, pylons and ring legs are
  all positioned parametrically, and each needs an explicit test against the
  ramp's footprint — a kicker in the mouth of the slip road, or a pylon down
  through it, is a launch ramp or a column where a lane should be.

## Controls

W/S drive+brake · A/D steer · Space drift · Shift boost · Q/E spin · F/C flip ·
X right the car · R respawn (contextual) · G garage · M mute · Esc close
