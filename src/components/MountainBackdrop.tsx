import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

/* ── Path generators ───────────────────────────────────────────────── */

/** Generate a continuous pine-forest silhouette path spanning full width.
 *  Each "tree crown" is a sharp triangle; overlapping and varied heights
 *  create a realistic dense treeline. */
function forestPath(
  w: number,
  baseY: number,
  minH: number,
  maxH: number,
  seed: number
): string {
  let d = `M-10,${baseY} `;
  let x = -10;
  while (x < w + 30) {
    const phase = x * 0.038 + seed;
    const h =
      minH +
      ((Math.sin(phase) * 0.5 + 0.5) * 0.55 +
        (Math.sin(phase * 2.1 + 0.8) * 0.5 + 0.5) * 0.3 +
        (Math.sin(phase * 4.3 + 2.1) * 0.5 + 0.5) * 0.15) *
        (maxH - minH);
    const tw = 22 + (Math.sin(phase * 1.6 + 1.4) * 0.5 + 0.5) * 26;
    const cx = x + tw / 2;
    d += `L${x.toFixed(1)},${(baseY - h * 0.12).toFixed(1)} `;
    d += `L${cx.toFixed(1)},${(baseY - h).toFixed(1)} `;
    d += `L${(x + tw).toFixed(1)},${(baseY - h * 0.12).toFixed(1)} `;
    x += tw * 0.72;
  }
  d += `L${w + 10},${baseY} Z`;
  return d;
}

/** Generate a realistic mountain ridge with many irregular peaks. */
function ridgePath(w: number, h: number, seed: number): string {
  const pts: [number, number][] = [[0, h]];
  const steps = 40;
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const x = t * w;
    const phase = t * 9 + seed;
    const isPeak = i % 2 === 1;
    if (isPeak) {
      const peakH = h * (0.18 + (Math.sin(phase * 0.9) * 0.5 + 0.5) * 0.72);
      pts.push([x, h - peakH]);
    } else {
      const valH = h * (0.04 + (Math.sin(phase * 1.2 + 1) * 0.5 + 0.5) * 0.22);
      pts.push([x, h - valH]);
    }
  }
  pts.push([w, h]);
  return pts.map(([px, py], i) => `${i === 0 ? "M" : "L"}${px.toFixed(1)},${py.toFixed(1)}`).join(" ") + " Z";
}

/* ── Landscape Zones ───────────────────────────────────────────────── */

/** Full-width mountain panorama SVG — multiple layered ridges */
const MountainPanorama = () => {
  const r1 = useMemo(() => ridgePath(1440, 340, 0.0), []);
  const r2 = useMemo(() => ridgePath(1440, 310, 1.4), []);
  const r3 = useMemo(() => ridgePath(1440, 280, 2.8), []);
  const r4 = useMemo(() => ridgePath(1440, 250, 4.2), []);
  const r5 = useMemo(() => ridgePath(1440, 220, 5.6), []);

  return (
    <svg
      viewBox="0 0 1440 340"
      preserveAspectRatio="xMidYMax slice"
      className="w-full pointer-events-none block"
      style={{ height: 340, overflow: "visible" }}
    >
      <defs>
        {/* Atmospheric haze — fades far mountains */}
        <linearGradient id="hazeGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(200 80% 88%)" stopOpacity="0.65" />
          <stop offset="100%" stopColor="hsl(200 80% 88%)" stopOpacity="0" />
        </linearGradient>
        {/* Snow highlight for near peaks */}
        <linearGradient id="snowGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stopColor="white" stopOpacity="0.9" />
          <stop offset="40%" stopColor="white" stopOpacity="0.35" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <filter id="mountainHaze">
          <feGaussianBlur stdDeviation="2.5" />
        </filter>
        <filter id="distantHaze">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>

      {/* Farthest range — very hazy, light blue */}
      <path d={r1} fill="hsl(210 48% 72%)" opacity="0.28" filter="url(#distantHaze)" />
      {/* 4th range */}
      <path d={r2} fill="hsl(205 52% 58%)" opacity="0.32" filter="url(#mountainHaze)" />
      {/* 3rd range — mid distance */}
      <path d={r3} fill="hsl(200 55% 46%)" opacity="0.38" />
      {/* 2nd near range */}
      <path d={r4} fill="hsl(198 58% 36%)" opacity="0.44" />
      {/* Nearest range — sharpest */}
      <path d={r5} fill="hsl(195 60% 28%)" opacity="0.55" />
      {/* Snow caps on nearest two ranges */}
      <path d={r5} fill="url(#snowGrad)" opacity="0.55" />
      <path d={r4} fill="url(#snowGrad)" opacity="0.3" />
      {/* Atmospheric haze overlay */}
      <rect x="0" y="0" width="1440" height="340" fill="url(#hazeGrad)" />
    </svg>
  );
};

/** Full-width dense forest belt — 3 depth layers */
const ForestBelt = ({
  minH,
  maxH,
  baseH,
  colors,
  seeds,
}: {
  minH: number;
  maxH: number;
  baseH: number;
  colors: [string, string, string];
  seeds: [number, number, number];
}) => {
  const p1 = useMemo(() => forestPath(1440, baseH, minH * 0.6, maxH * 0.7, seeds[0]), [baseH, maxH, minH, seeds]);
  const p2 = useMemo(() => forestPath(1440, baseH, minH * 0.8, maxH * 0.9, seeds[1]), [baseH, maxH, minH, seeds]);
  const p3 = useMemo(() => forestPath(1440, baseH, minH,       maxH,       seeds[2]), [baseH, maxH, minH, seeds]);

  return (
    <svg
      viewBox={`0 0 1440 ${baseH}`}
      preserveAspectRatio="xMidYMax slice"
      className="w-full pointer-events-none block"
      style={{ height: baseH }}
    >
      <defs>
        <linearGradient id={`fogGrad-${seeds[0]}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(195 60% 88%)" stopOpacity="0.22" />
          <stop offset="100%" stopColor="hsl(195 60% 88%)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Distant misty layer */}
      <path d={p1} fill={colors[0]} opacity="0.45" />
      {/* Midground */}
      <path d={p2} fill={colors[1]} opacity="0.58" />
      {/* Foreground — darkest, most detailed */}
      <path d={p3} fill={colors[2]} opacity="0.72" />
      {/* Mist in valleys */}
      <rect x="0" y="0" width="1440" height={baseH} fill={`url(#fogGrad-${seeds[0]})`} />
    </svg>
  );
};

/** Atmospheric mist band between sky and forest */
const MistBand = ({ color = "hsl(195 65% 88%)", opacity = 0.35 }) => (
  <div
    className="w-full pointer-events-none"
    style={{
      height: 80,
      background: `linear-gradient(180deg, transparent 0%, ${color} 45%, transparent 100%)`,
      opacity,
    }}
  />
);

/** Meadow clearing — open valley between forest sections */
const MeadowSVG = () => {
  const grassL = useMemo(() => forestPath(520,  90, 12, 30, 7.1), []);
  const grassR = useMemo(() => forestPath(520,  90, 12, 30, 9.4), []);
  const treeL  = useMemo(() => forestPath(420, 180, 80, 145, 6.2), []);
  const treeR  = useMemo(() => forestPath(420, 180, 80, 145, 8.8), []);

  return (
    <svg
      viewBox="0 0 1440 180"
      preserveAspectRatio="xMidYMax slice"
      className="w-full pointer-events-none block"
      style={{ height: 180 }}
    >
      <defs>
        <radialGradient id="meadowGlow" cx="50%" cy="100%" r="55%">
          <stop offset="0%"   stopColor="hsl(80 45% 72%)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <linearGradient id="meadowFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="hsl(80 40% 68%)" stopOpacity="0" />
          <stop offset="100%" stopColor="hsl(80 40% 62%)" stopOpacity="0.28" />
        </linearGradient>
      </defs>
      {/* Left forest wall */}
      <path d={treeL}  fill="hsl(150 40% 26%)" opacity="0.6" transform="translate(0,0)" />
      {/* Right forest wall */}
      <path d={treeR}  fill="hsl(150 40% 26%)" opacity="0.6" transform={`translate(${1440 - 420},0)`} />
      {/* Meadow grass along bottom center */}
      <path d={grassL} fill="hsl(88 42% 48%)"  opacity="0.5" transform="translate(420,90)" />
      <path d={grassR} fill="hsl(88 42% 48%)"  opacity="0.5" transform="translate(500,90)" />
      {/* Soft sunlit clearing glow */}
      <rect x="0" y="0" width="1440" height="180" fill="url(#meadowGlow)" />
      <rect x="0" y="0" width="1440" height="180" fill="url(#meadowFade)" />
    </svg>
  );
};

/** Base camp scene — campfire glow, tents, ground silhouette */
const BaseCampSVG = () => {
  const ground = useMemo(() => forestPath(1440, 200, 8, 22, 11.3), []);

  return (
    <svg
      viewBox="0 0 1440 260"
      preserveAspectRatio="xMidYMax slice"
      className="w-full pointer-events-none block"
      style={{ height: 260 }}
    >
      <defs>
        {/* Main campfire glow — warm radial */}
        <radialGradient id="fireGlow" cx="50%" cy="100%" r="30%">
          <stop offset="0%"   stopColor="hsl(38 95% 62%)" stopOpacity="0.55" />
          <stop offset="35%"  stopColor="hsl(28 88% 55%)" stopOpacity="0.28" />
          <stop offset="70%"  stopColor="hsl(20 75% 48%)" stopOpacity="0.10" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        {/* Second campfire glow */}
        <radialGradient id="fireGlow2" cx="50%" cy="100%" r="28%">
          <stop offset="0%"   stopColor="hsl(35 90% 60%)" stopOpacity="0.45" />
          <stop offset="40%"  stopColor="hsl(25 80% 52%)" stopOpacity="0.18" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        {/* Ground gradient */}
        <linearGradient id="groundGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="hsl(35 48% 55%)" stopOpacity="0" />
          <stop offset="100%" stopColor="hsl(30 52% 48%)" stopOpacity="0.55" />
        </linearGradient>
        {/* Tent interior glow */}
        <radialGradient id="tentGlow" cx="50%" cy="80%" r="45%">
          <stop offset="0%"   stopColor="hsl(45 90% 68%)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>

      {/* ── Campfire glows ── */}
      {/* Main campfire — left of center */}
      <ellipse cx="460" cy="200" rx="260" ry="140" fill="url(#fireGlow)" />
      {/* Second campfire — right of center */}
      <ellipse cx="980" cy="210" rx="220" ry="120" fill="url(#fireGlow2)" />

      {/* ── Left tent ── */}
      <g transform="translate(240, 115)">
        {/* tent glow */}
        <ellipse cx="0" cy="80" rx="100" ry="40" fill="url(#tentGlow)" />
        {/* main body */}
        <polygon points="0,-90 -110,80 110,80" fill="hsl(22 52% 42%)" opacity="0.82" />
        {/* door shadow */}
        <polygon points="0,-90 -22,80 22,80"   fill="black"            opacity="0.18" />
        {/* ridge highlight */}
        <line x1="-110" y1="80" x2="0" y2="-90" stroke="hsl(28 55% 58%)" strokeWidth="1.5" opacity="0.5" />
        {/* ground shadow */}
        <ellipse cx="0" cy="82" rx="112" ry="12" fill="black" opacity="0.12" />
        {/* guy-rope left */}
        <line x1="-110" y1="80" x2="-150" y2="115" stroke="hsl(30 35% 42%)" strokeWidth="1.5" opacity="0.5" />
        <line x1="110"  y1="80" x2="150"  y2="115" stroke="hsl(30 35% 42%)" strokeWidth="1.5" opacity="0.5" />
      </g>

      {/* ── Right tent (slightly smaller, angled) ── */}
      <g transform="translate(1170, 125)">
        <ellipse cx="0" cy="72" rx="88" ry="34" fill="url(#tentGlow)" />
        <polygon points="0,-78 -95,70 95,70" fill="hsl(32 58% 46%)" opacity="0.78" />
        <polygon points="0,-78 -18,70 18,70" fill="black"            opacity="0.15" />
        <line x1="-95" y1="70" x2="0" y2="-78" stroke="hsl(32 55% 62%)" strokeWidth="1.5" opacity="0.45" />
        <ellipse cx="0" cy="72" rx="96" ry="10" fill="black" opacity="0.10" />
        <line x1="-95" y1="70" x2="-130" y2="102" stroke="hsl(30 35% 42%)" strokeWidth="1.5" opacity="0.45" />
        <line x1="95"  y1="70" x2="130"  y2="102" stroke="hsl(30 35% 42%)" strokeWidth="1.5" opacity="0.45" />
      </g>

      {/* ── Left campfire ── */}
      <g transform="translate(460, 188)">
        {/* logs */}
        <line x1="-32" y1="14" x2="18"  y2="4"  stroke="hsl(25 42% 28%)" strokeWidth="8" strokeLinecap="round" opacity="0.9" />
        <line x1="32"  y1="14" x2="-18" y2="4"  stroke="hsl(25 42% 28%)" strokeWidth="8" strokeLinecap="round" opacity="0.9" />
        {/* outer flame */}
        <path d="M-16,10 Q-22,-18 -10,-38 Q-4,-22 0,-48 Q4,-22 10,-38 Q22,-18 16,10 Z"
              fill="hsl(28 92% 55%)" opacity="0.88" />
        {/* inner flame */}
        <path d="M-8,8 Q-10,-10 -4,-24 Q0,-14 0,-30 Q4,-14 4,-24 Q10,-10 8,8 Z"
              fill="hsl(46 98% 70%)" opacity="0.92" />
        {/* hot core */}
        <ellipse cx="0" cy="6" rx="10" ry="6" fill="hsl(52 100% 82%)" opacity="0.75" />
      </g>

      {/* ── Right campfire ── */}
      <g transform="translate(980, 196)">
        <line x1="-26" y1="12" x2="15"  y2="3"  stroke="hsl(25 42% 28%)" strokeWidth="7" strokeLinecap="round" opacity="0.85" />
        <line x1="26"  y1="12" x2="-15" y2="3"  stroke="hsl(25 42% 28%)" strokeWidth="7" strokeLinecap="round" opacity="0.85" />
        <path d="M-12,8 Q-18,-14 -8,-30 Q-3,-18 0,-38 Q3,-18 8,-30 Q18,-14 12,8 Z"
              fill="hsl(28 90% 52%)" opacity="0.82" />
        <path d="M-6,6 Q-8,-8 -3,-20 Q0,-11 0,-25 Q3,-11 3,-20 Q8,-8 6,6 Z"
              fill="hsl(46 98% 68%)" opacity="0.88" />
        <ellipse cx="0" cy="5" rx="8" ry="5" fill="hsl(52 100% 80%)" opacity="0.70" />
      </g>

      {/* ── Ground / grass silhouette ── */}
      <path d={ground} fill="hsl(32 45% 45%)" opacity="0.42" transform="translate(0,10)" />
      <rect x="0" y="0" width="1440" height="260" fill="url(#groundGrad)" />
    </svg>
  );
};

/** Single bird silhouette — M-shaped bezier */
const BirdPath = ({ x = 0, y = 0, scale = 1 }: { x?: number; y?: number; scale?: number }) => (
  <g transform={`translate(${x},${y}) scale(${scale})`}>
    <path d="M-10,0 Q-5,-5 0,-2 Q5,-5 10,0" stroke="hsl(215 40% 25%)" strokeWidth="1.8" fill="none" strokeLinecap="round" />
  </g>
);

/** Animated flock of birds crossing the sky */
const BirdFlock = ({
  startX, y, count = 5, scale = 1, duration = 18, delay = 0,
}: {
  startX: number; y: number; count?: number; scale?: number; duration?: number; delay?: number;
}) => {
  const prefersReducedMotion = useReducedMotion();
  const offsets: [number, number][] = Array.from({ length: count }, (_, i) => [
    (i % 3) * 22 * scale - ((count / 2) * 22 * scale) / 2,
    Math.floor(i / 3) * 16 * scale - 8 * scale,
  ]);
  return (
    <motion.g
      initial={{ x: startX }}
      animate={prefersReducedMotion ? { x: startX + 420 } : { x: [startX, startX + 1900] }}
      transition={prefersReducedMotion ? { duration: 0 } : { duration, delay, repeat: Infinity, ease: "linear" }}
    >
      {offsets.map(([ox, oy], i) => (
        <BirdPath key={i} x={ox} y={y + oy} scale={scale} />
      ))}
    </motion.g>
  );
};

/** Deer silhouette crossing the meadow */
const DeerSilhouette = () => (
  <g>
    {/* body */}
    <ellipse cx="0" cy="0" rx="28" ry="14" fill="hsl(28 45% 22%)" opacity="0.72" />
    {/* neck */}
    <rect x="16" y="-22" width="9" height="22" rx="4" fill="hsl(28 45% 22%)" opacity="0.72" />
    {/* head */}
    <ellipse cx="24" cy="-28" rx="9" ry="7" fill="hsl(28 45% 22%)" opacity="0.72" />
    {/* antlers */}
    <path d="M22,-34 L18,-50 M18,-50 L14,-44 M18,-50 L22,-44" stroke="hsl(28 45% 22%)" strokeWidth="2.2" fill="none" strokeLinecap="round" opacity="0.72" />
    <path d="M26,-34 L30,-48 M30,-48 L26,-42 M30,-48 L34,-43" stroke="hsl(28 45% 22%)" strokeWidth="2.2" fill="none" strokeLinecap="round" opacity="0.72" />
    {/* legs */}
    <line x1="-18" y1="12" x2="-22" y2="36" stroke="hsl(28 45% 22%)" strokeWidth="5" strokeLinecap="round" opacity="0.72" />
    <line x1="-6"  y1="13" x2="-8"  y2="37" stroke="hsl(28 45% 22%)" strokeWidth="5" strokeLinecap="round" opacity="0.72" />
    <line x1="8"   y1="13" x2="10"  y2="37" stroke="hsl(28 45% 22%)" strokeWidth="5" strokeLinecap="round" opacity="0.72" />
    <line x1="20"  y1="12" x2="24"  y2="36" stroke="hsl(28 45% 22%)" strokeWidth="5" strokeLinecap="round" opacity="0.72" />
    {/* tail */}
    <ellipse cx="-28" cy="-4" rx="6" ry="4" fill="hsl(0 0% 90%)" opacity="0.55" />
  </g>
);

/** Wispy cirrus cloud streaks for the sky zone */
const CirrusClouds = () => (
  <svg
    viewBox="0 0 1440 180"
    preserveAspectRatio="xMidYMin meet"
    className="w-full pointer-events-none block"
    style={{ height: 180 }}
  >
    <defs>
      <filter id="cirrusBlur">
        <feGaussianBlur stdDeviation="3.5" />
      </filter>
      <filter id="cirrusBlurSoft">
        <feGaussianBlur stdDeviation="6" />
      </filter>
    </defs>
    {/* Far wispy streaks — blurred */}
    <path d="M80,40 Q240,20 420,38 Q560,52 680,30 Q750,22 860,40"
          stroke="white" strokeWidth="18" fill="none" opacity="0.32" filter="url(#cirrusBlurSoft)" strokeLinecap="round" />
    <path d="M600,65 Q780,48 960,62 Q1080,72 1200,55 Q1310,44 1420,60"
          stroke="white" strokeWidth="14" fill="none" opacity="0.28" filter="url(#cirrusBlurSoft)" strokeLinecap="round" />
    {/* Mid clouds */}
    <path d="M-20,88 Q140,70 300,85 Q460,98 580,76"
          stroke="white" strokeWidth="22" fill="none" opacity="0.42" filter="url(#cirrusBlur)" strokeLinecap="round" />
    <path d="M900,100 Q1060,82 1220,96 Q1360,108 1460,90"
          stroke="white" strokeWidth="20" fill="none" opacity="0.38" filter="url(#cirrusBlur)" strokeLinecap="round" />
    {/* Near soft cumulus shapes */}
    <ellipse cx="210"  cy="128" rx="180" ry="34" fill="white" opacity="0.55" filter="url(#cirrusBlur)" />
    <ellipse cx="340"  cy="118" rx="140" ry="42" fill="white" opacity="0.62" filter="url(#cirrusBlur)" />
    <ellipse cx="250"  cy="112" rx="110" ry="32" fill="white" opacity="0.70" filter="url(#cirrusBlur)" />
    <ellipse cx="1100" cy="135" rx="160" ry="30" fill="white" opacity="0.50" filter="url(#cirrusBlur)" />
    <ellipse cx="1230" cy="122" rx="130" ry="40" fill="white" opacity="0.58" filter="url(#cirrusBlur)" />
    <ellipse cx="1165" cy="116" rx="100" ry="30" fill="white" opacity="0.66" filter="url(#cirrusBlur)" />
  </svg>
);

/* ── Master backdrop ───────────────────────────────────────────────── */
const MountainBackdrop = () => {
  const prefersReducedMotion = useReducedMotion();
  const upperForest = useMemo(() => ({
    colors: ["hsl(158 42% 34%)", "hsl(154 45% 27%)", "hsl(150 48% 21%)"] as [string, string, string],
    seeds:  [3.2, 5.8, 8.1] as [number, number, number],
  }), []);

  const lowerForest = useMemo(() => ({
    colors: ["hsl(148 40% 30%)", "hsl(144 43% 23%)", "hsl(140 46% 17%)"] as [string, string, string],
    seeds:  [12.4, 14.9, 17.2] as [number, number, number],
  }), []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>

      {/* ══ SKY / HERO ZONE (0–18%) ══ */}
      {/* Sun glow at top-right */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: 0, right: 0,
          width: 600, height: 500,
          background: "radial-gradient(ellipse at 75% 15%, hsl(50 95% 88% / 0.45) 0%, hsl(30 80% 78% / 0.18) 35%, transparent 65%)",
        }}
      />
      {/* Cirrus clouds */}
      <div className="absolute w-full" style={{ top: "3%" }}>
        <CirrusClouds />
      </div>

      {/* Bird flocks in the sky */}
      <div className="absolute w-full" style={{ top: "6%", height: 120, overflow: "hidden" }}>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="xMidYMid meet" className="w-full" style={{ height: 120 }}>
          <BirdFlock startX={-200} y={30}  count={6} scale={1.1} duration={22} delay={0} />
          <BirdFlock startX={-600} y={70}  count={4} scale={0.85} duration={28} delay={5} />
          <BirdFlock startX={-900} y={50}  count={7} scale={1.25} duration={34} delay={11} />
          <BirdFlock startX={-400} y={95}  count={5} scale={0.75} duration={40} delay={18} />
        </svg>
      </div>

      {/* ══ MOUNTAIN TRANSITION (~17–24%) ══ */}
      <div className="absolute w-full" style={{ top: "17%" }}>
        <MountainPanorama />
      </div>

      {/* ══ UPPER FOREST BELT (~26–38%) ══ */}
      <div className="absolute w-full" style={{ top: "26%" }}>
        <MistBand color="hsl(192 55% 82%)" opacity={0.30} />
      </div>
      <div className="absolute w-full" style={{ top: "28%" }}>
        <ForestBelt
          minH={95} maxH={165} baseH={200}
          colors={upperForest.colors}
          seeds={upperForest.seeds}
        />
      </div>

      {/* ══ MEADOW CLEARING (~40–48%) ══ */}
      <div className="absolute w-full" style={{ top: "40%" }}>
        <MeadowSVG />
      </div>
      {/* Deer crossing the meadow */}
      <div className="absolute w-full" style={{ top: "43%", height: 80, overflow: "hidden" }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="xMidYMid meet" className="w-full" style={{ height: 80 }}>
          <motion.g
            initial={{ x: -120 }}
            animate={prefersReducedMotion ? { x: 380 } : { x: [-120, 1560] }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 38, delay: 4, repeat: Infinity, ease: "linear" }}
          >
            <g transform="translate(0,42)">
              <DeerSilhouette />
            </g>
          </motion.g>
          <motion.g
            initial={{ x: -120 }}
            animate={prefersReducedMotion ? { x: 1020 } : { x: [-120, 1560] }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 48, delay: 22, repeat: Infinity, ease: "linear" }}
          >
            <g transform="translate(60,50) scale(0.75)">
              <DeerSilhouette />
            </g>
          </motion.g>
        </svg>
      </div>

      {/* ══ LOWER FOREST BELT (~48–62%) ══ */}
      <div className="absolute w-full" style={{ top: "50%" }}>
        <MistBand color="hsl(160 40% 72%)" opacity={0.20} />
      </div>
      <div className="absolute w-full" style={{ top: "52%" }}>
        <ForestBelt
          minH={110} maxH={175} baseH={210}
          colors={lowerForest.colors}
          seeds={lowerForest.seeds}
        />
      </div>

      {/* ══ BASE CAMP (~68–88%) ══ */}
      {/* Warm golden light wash over the camp area */}
      <div
        className="absolute w-full"
        style={{
          top: "66%",
          height: "22%",
          background: "linear-gradient(180deg, transparent 0%, hsl(35 72% 68% / 0.14) 50%, transparent 100%)",
        }}
      />
      <div className="absolute w-full" style={{ top: "69%" }}>
        <motion.div
          animate={prefersReducedMotion ? { opacity: 0.92 } : { opacity: [0.82, 1, 0.86, 0.96, 0.82] }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <BaseCampSVG />
        </motion.div>
      </div>

      {/* ══ FOOTER GROUND LINE (~89–100%) ══ */}
      <div className="absolute w-full" style={{ top: "89%" }}>
        <ForestBelt
          minH={30} maxH={65} baseH={90}
          colors={["hsl(145 38% 22%)", "hsl(140 42% 17%)", "hsl(135 44% 13%)"]}
          seeds={[20.1, 22.4, 24.8]}
        />
      </div>

    </div>
  );
};

export default MountainBackdrop;
