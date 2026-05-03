import { motion } from "framer-motion";

/* ── Single pine tree ──────────────────────────────────────────────── */
const PineTree = ({
  x = 0,
  scale = 1,
  color = "hsl(155 45% 28%)",
  opacity = 0.55,
}: {
  x?: number;
  scale?: number;
  color?: string;
  opacity?: number;
}) => (
  <g transform={`translate(${x}, 0) scale(${scale})`} opacity={opacity}>
    <rect x="-4" y="0" width="8" height="28" fill="hsl(30 40% 28%)" />
    <polygon points="0,-110 -34,-40 34,-40" fill={color} />
    <polygon points="0,-82 -28,-22 28,-22" fill={color} style={{ filter: "brightness(1.08)" }} />
    <polygon points="0,-55 -22,0 22,0" fill={color} style={{ filter: "brightness(1.15)" }} />
  </g>
);

/* ── Row of pine trees ─────────────────────────────────────────────── */
const PineRow = ({
  trees,
  className = "",
  style = {},
}: {
  trees: Array<{ x: number; scale: number; opacity: number }>;
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    viewBox="0 0 1400 160"
    preserveAspectRatio="xMidYMax meet"
    className={`w-full pointer-events-none ${className}`}
    style={style}
  >
    {trees.map((t, i) => (
      <PineTree key={i} x={t.x} scale={t.scale} opacity={t.opacity} />
    ))}
  </svg>
);

/* ── Mountain ridgeline ────────────────────────────────────────────── */
const MountainRidge = ({
  color = "hsl(200 45% 35%)",
  opacity = 0.18,
  heightFactor = 1,
}: {
  color?: string;
  opacity?: number;
  heightFactor?: number;
}) => {
  const h = 260 * heightFactor;
  return (
    <svg
      viewBox={`0 0 1440 ${h}`}
      preserveAspectRatio="xMidYMax slice"
      className="w-full pointer-events-none"
      style={{ display: "block" }}
    >
      <polygon
        points={`0,${h} 100,${h * 0.6} 200,${h * 0.78} 320,${h * 0.38} 460,${h * 0.62} 580,${h * 0.25} 700,${h * 0.5} 820,${h * 0.3} 940,${h * 0.55} 1060,${h * 0.35} 1180,${h * 0.58} 1300,${h * 0.42} 1440,${h * 0.65} 1440,${h} 0,${h}`}
        fill={color}
        opacity={opacity}
      />
    </svg>
  );
};

/* ── Campfire ──────────────────────────────────────────────────────── */
const Campfire = ({ x = 0, y = 0, scale = 1 }: { x?: number; y?: number; scale?: number }) => (
  <g transform={`translate(${x},${y}) scale(${scale})`}>
    {/* glow */}
    <ellipse cx="0" cy="12" rx="52" ry="20" fill="hsl(32 90% 60%)" opacity="0.15" />
    <ellipse cx="0" cy="12" rx="32" ry="14" fill="hsl(38 95% 65%)" opacity="0.18" />
    {/* logs */}
    <line x1="-28" y1="18" x2="12" y2="8" stroke="hsl(25 45% 28%)" strokeWidth="7" strokeLinecap="round" />
    <line x1="28" y1="18" x2="-12" y2="8" stroke="hsl(25 45% 28%)" strokeWidth="7" strokeLinecap="round" />
    {/* embers */}
    <ellipse cx="0" cy="10" rx="18" ry="7" fill="hsl(18 90% 55%)" opacity="0.85" />
    {/* inner flames */}
    <path d="M-8,8 Q-12,-12 -6,-28 Q0,-15 0,-35 Q6,-15 6,-28 Q12,-12 8,8 Z"
      fill="hsl(38 95% 62%)" opacity="0.9" />
    <path d="M-4,8 Q-6,-8 -2,-22 Q0,-12 0,-26 Q2,-12 2,-22 Q6,-8 4,8 Z"
      fill="hsl(52 98% 72%)" opacity="0.95" />
    {/* sparks */}
    <circle cx="-14" cy="-30" r="2" fill="hsl(38 95% 72%)" opacity="0.7" />
    <circle cx="10"  cy="-42" r="1.5" fill="hsl(38 95% 72%)" opacity="0.6" />
    <circle cx="-4"  cy="-50" r="1.8" fill="hsl(52 98% 82%)" opacity="0.65" />
  </g>
);

/* ── Tent ──────────────────────────────────────────────────────────── */
const Tent = ({ x = 0, y = 0, scale = 1, color = "hsl(30 60% 52%)" }: { x?: number; y?: number; scale?: number; color?: string }) => (
  <g transform={`translate(${x},${y}) scale(${scale})`}>
    {/* body */}
    <polygon points="0,-80 -75,10 75,10" fill={color} opacity="0.75" />
    {/* door shadow */}
    <polygon points="0,-80 -20,10 20,10" fill="hsl(0 0% 0%)" opacity="0.12" />
    {/* ridge line */}
    <line x1="-75" y1="10" x2="75" y2="10" stroke={color} strokeWidth="3" opacity="0.9" />
    {/* ground stakes */}
    <line x1="-75" y1="10" x2="-90" y2="30" stroke="hsl(30 40% 40%)" strokeWidth="2" opacity="0.6" />
    <line x1="75"  y1="10" x2="90"  y2="30" stroke="hsl(30 40% 40%)" strokeWidth="2" opacity="0.6" />
    {/* inner light glow */}
    <ellipse cx="0" cy="-20" rx="16" ry="22" fill="hsl(45 90% 68%)" opacity="0.12" />
  </g>
);

/* ── Main backdrop component ───────────────────────────────────────── */
const MountainBackdrop = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>

    {/* ── HERO ZONE: cloud atmosphere — top 18% ── */}
    {/* Nothing extra — clouds in Hero.tsx handle this */}

    {/* ── MOUNTAIN TRANSITION: ridgeline at ~18% down ── */}
    <div className="absolute w-full" style={{ top: "17%" }}>
      {/* farthest hazy range */}
      <div style={{ opacity: 0.7 }}>
        <MountainRidge color="hsl(210 42% 60%)" opacity={0.10} heightFactor={0.9} />
      </div>
    </div>
    <div className="absolute w-full" style={{ top: "19%" }}>
      <MountainRidge color="hsl(205 50% 42%)" opacity={0.14} heightFactor={1.05} />
    </div>
    <div className="absolute w-full" style={{ top: "21%" }}>
      <MountainRidge color="hsl(200 55% 28%)" opacity={0.18} heightFactor={1.1} />
    </div>
    {/* snow cap line */}
    <div className="absolute w-full" style={{ top: "21.5%" }}>
      <MountainRidge color="hsl(205 30% 95%)" opacity={0.55} heightFactor={0.22} />
    </div>

    {/* ── ABOUT/MOUNTAIN ZONE: pine trees flanking sides (~22–48%) ── */}
    {/* Left forest */}
    <div className="absolute" style={{ top: "27%", left: 0, width: "18%" }}>
      <PineRow
        trees={[
          { x: 30,  scale: 0.55, opacity: 0.45 },
          { x: 80,  scale: 0.70, opacity: 0.52 },
          { x: 140, scale: 0.50, opacity: 0.38 },
          { x: 190, scale: 0.82, opacity: 0.60 },
          { x: 250, scale: 0.62, opacity: 0.44 },
        ]}
        style={{ height: 140 }}
      />
    </div>
    {/* Right forest */}
    <div className="absolute" style={{ top: "27%", right: 0, width: "18%" }}>
      <PineRow
        trees={[
          { x: 1180, scale: 0.65, opacity: 0.48 },
          { x: 1230, scale: 0.80, opacity: 0.58 },
          { x: 1290, scale: 0.55, opacity: 0.40 },
          { x: 1340, scale: 0.72, opacity: 0.52 },
          { x: 1390, scale: 0.48, opacity: 0.36 },
        ]}
        style={{ height: 140 }}
      />
    </div>

    {/* deeper pine row across the base of the about section */}
    <div className="absolute w-full" style={{ top: "42%" }}>
      <PineRow
        trees={[
          { x: 20,   scale: 0.45, opacity: 0.30 },
          { x: 70,   scale: 0.60, opacity: 0.38 },
          { x: 120,  scale: 0.42, opacity: 0.28 },
          { x: 1290, scale: 0.48, opacity: 0.30 },
          { x: 1340, scale: 0.62, opacity: 0.36 },
          { x: 1400, scale: 0.44, opacity: 0.26 },
        ]}
        style={{ height: 110 }}
      />
    </div>

    {/* ── PROJECTS/LOWER SLOPES: denser tree line (~48–70%) ── */}
    <div className="absolute" style={{ top: "52%", left: 0, width: "12%" }}>
      <PineRow
        trees={[
          { x: 20,  scale: 0.70, opacity: 0.42 },
          { x: 75,  scale: 0.55, opacity: 0.34 },
          { x: 130, scale: 0.80, opacity: 0.50 },
          { x: 170, scale: 0.60, opacity: 0.38 },
        ]}
        style={{ height: 150 }}
      />
    </div>
    <div className="absolute" style={{ top: "52%", right: 0, width: "12%" }}>
      <PineRow
        trees={[
          { x: 1250, scale: 0.60, opacity: 0.38 },
          { x: 1300, scale: 0.78, opacity: 0.48 },
          { x: 1350, scale: 0.55, opacity: 0.34 },
          { x: 1400, scale: 0.68, opacity: 0.44 },
        ]}
        style={{ height: 150 }}
      />
    </div>

    {/* ── BASE CAMP ZONE: campfire + tents (~72–92%) ── */}
    {/* Left tent */}
    <div className="absolute hidden lg:block" style={{ top: "73%", left: "3%" }}>
      <svg viewBox="0 0 200 120" width="180" height="108">
        <Tent x={100} y={90} scale={0.9} color="hsl(22 55% 48%)" />
      </svg>
    </div>
    {/* Right tent */}
    <div className="absolute hidden lg:block" style={{ top: "73%", right: "3%" }}>
      <svg viewBox="0 0 200 120" width="160" height="96">
        <Tent x={100} y={90} scale={0.8} color="hsl(32 62% 52%)" />
      </svg>
    </div>
    {/* Campfire — center-left */}
    <motion.div
      className="absolute hidden md:block"
      style={{ top: "78%", left: "8%" }}
      animate={{ scale: [1, 1.04, 0.98, 1.02, 1], opacity: [0.85, 1, 0.88, 0.95, 0.85] }}
      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg viewBox="-70 -60 140 90" width="110" height="70">
        <Campfire x={0} y={0} scale={0.9} />
      </svg>
    </motion.div>
    {/* Campfire — center-right */}
    <motion.div
      className="absolute hidden md:block"
      style={{ top: "82%", right: "10%" }}
      animate={{ scale: [1, 1.06, 0.97, 1.03, 1], opacity: [0.8, 0.95, 0.82, 0.92, 0.8] }}
      transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
    >
      <svg viewBox="-70 -60 140 90" width="90" height="58">
        <Campfire x={0} y={0} scale={0.75} />
      </svg>
    </motion.div>

    {/* ── FOOTER: ground line of pines ── */}
    <div className="absolute w-full" style={{ top: "90%" }}>
      <PineRow
        trees={[
          { x: 40,   scale: 0.38, opacity: 0.28 },
          { x: 90,   scale: 0.48, opacity: 0.32 },
          { x: 150,  scale: 0.35, opacity: 0.24 },
          { x: 1260, scale: 0.40, opacity: 0.26 },
          { x: 1320, scale: 0.50, opacity: 0.30 },
          { x: 1380, scale: 0.36, opacity: 0.22 },
        ]}
        style={{ height: 90 }}
      />
    </div>

  </div>
);

export default MountainBackdrop;
