import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

/* ── Spinning wireframe globe ─────────────────────────────────────── */
export const GlobeCanvas = ({ size = 220, color = "hsl(214 88% 55%)", opacity = 0.55 }: {
  size?: number; color?: string; opacity?: number;
}) => {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const R = size * 0.38;
    const cx = size / 2, cy = size / 2;
    let t = 0, id: number;

    const draw = () => {
      ctx.clearRect(0, 0, size, size);
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.globalAlpha = opacity;

      // Outer circle
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.stroke();

      // Latitude rings
      for (let lat = -60; lat <= 60; lat += 30) {
        const sinLat = Math.sin((lat * Math.PI) / 180);
        const cosLat = Math.cos((lat * Math.PI) / 180);
        const y = cy + sinLat * R;
        const rx = cosLat * R;
        if (rx < 2) continue;
        ctx.beginPath();
        ctx.ellipse(cx, y, rx, rx * 0.28, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Spinning meridians
      const numMeridians = 8;
      for (let i = 0; i < numMeridians; i++) {
        const phase = (i * Math.PI) / numMeridians + t;
        const rx = Math.abs(Math.cos(phase)) * R;
        ctx.globalAlpha = opacity * (0.4 + 0.6 * (rx / R));
        ctx.beginPath();
        ctx.ellipse(cx, cy, rx, R, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      t += 0.004;
      id = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(id);
  }, [size, color, opacity]);

  return <canvas ref={ref} width={size} height={size} style={{ display: "block" }} />;
};

/* ── Animated stock/price chart ───────────────────────────────────── */
const generatePath = (w: number, h: number) => {
  const points: [number, number][] = [];
  let y = h * 0.6;
  const steps = 60;
  for (let i = 0; i <= steps; i++) {
    const x = (i / steps) * w;
    y += (Math.random() - 0.47) * h * 0.08;
    y = Math.max(h * 0.12, Math.min(h * 0.88, y));
    points.push([x, y]);
  }
  return points.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
};

export const StockChart = ({ width = 320, height = 120, color = "hsl(214 88% 55%)" }: {
  width?: number; height?: number; color?: string;
}) => {
  const path = generatePath(width, height);
  const len = width * 2;
  return (
    <svg width={width} height={height} style={{ overflow: "visible" }}>
      {/* Grid lines */}
      {[0.25, 0.5, 0.75].map((t) => (
        <line key={t} x1={0} y1={height * t} x2={width} y2={height * t}
          stroke={color} strokeOpacity={0.12} strokeWidth={0.5} strokeDasharray="4 4" />
      ))}
      {[0.25, 0.5, 0.75].map((t) => (
        <line key={t} x1={width * t} y1={0} x2={width * t} y2={height}
          stroke={color} strokeOpacity={0.12} strokeWidth={0.5} strokeDasharray="4 4" />
      ))}
      {/* Glow fill under line */}
      <defs>
        <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.18" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${path} L${width},${height} L0,${height} Z`} fill="url(#chartFill)" />
      {/* Animated line */}
      <path d={path} fill="none" stroke={color} strokeWidth={2} strokeLinecap="round"
        strokeDasharray={len} strokeDashoffset={len}>
        <animate attributeName="stroke-dashoffset" from={len} to={0} dur="2.4s" fill="freeze" />
      </path>
    </svg>
  );
};

/* ── Mountain silhouette ──────────────────────────────────────────── */
export const Mountains = ({ width = 900, height = 180, color = "hsl(214 88% 48%)", opacity = 0.08 }: {
  width?: number; height?: number; color?: string; opacity?: number;
}) => (
  <svg width="100%" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMax slice"
    style={{ display: "block" }}>
    {/* Back range */}
    <polygon
      points={`0,${height} 80,${height * 0.55} 160,${height * 0.72} 240,${height * 0.4} 320,${height * 0.6} 420,${height * 0.28} 520,${height * 0.52} 600,${height * 0.35} 700,${height * 0.58} 780,${height * 0.42} 900,${height * 0.65} ${width},${height}`}
      fill={color} opacity={opacity * 0.7}
    />
    {/* Front range */}
    <polygon
      points={`0,${height} 60,${height * 0.75} 140,${height * 0.58} 220,${height * 0.82} 300,${height * 0.5} 380,${height * 0.7} 460,${height * 0.42} 550,${height * 0.65} 640,${height * 0.48} 720,${height * 0.7} 800,${height * 0.55} 900,${height * 0.78} ${width},${height}`}
      fill={color} opacity={opacity}
    />
  </svg>
);

/* ── Floating math / code symbols ────────────────────────────────── */
const SYMBOLS = [
  { text: "∑", color: "hsl(214 88% 55%)" },
  { text: "∫",  color: "hsl(268 75% 62%)" },
  { text: "π",  color: "hsl(38 95% 55%)"  },
  { text: "√2", color: "hsl(175 70% 48%)" },
  { text: "λ",  color: "hsl(214 88% 55%)" },
  { text: "σ²", color: "hsl(320 80% 60%)" },
  { text: "∂",  color: "hsl(268 75% 62%)" },
  { text: "∇",  color: "hsl(175 70% 48%)" },
  { text: "∞",  color: "hsl(38 95% 55%)"  },
  { text: "θ",  color: "hsl(214 88% 55%)" },
  { text: "f(x)", color: "hsl(320 80% 60%)" },
  { text: "eⁱᵖ", color: "hsl(268 75% 62%)" },
  { text: "O(n log n)", color: "hsl(175 70% 48%)" },
  { text: "lim", color: "hsl(214 88% 55%)" },
  { text: "α β γ", color: "hsl(38 95% 55%)" },
  { text: "{}",  color: "hsl(214 88% 55%)" },
  { text: "dx",  color: "hsl(268 75% 62%)" },
  { text: "buy()", color: "hsl(175 70% 48%)" },
  { text: "ℝⁿ",  color: "hsl(320 80% 60%)" },
  { text: "P(A|B)", color: "hsl(214 88% 55%)" },
  { text: "δ → 0", color: "hsl(38 95% 55%)" },
  { text: "Σxᵢ", color: "hsl(268 75% 62%)" },
];

const positions = [
  { left: "3%",  top: "8%"  }, { left: "88%", top: "12%" }, { left: "15%", top: "22%" },
  { left: "72%", top: "18%" }, { left: "5%",  top: "38%" }, { left: "91%", top: "35%" },
  { left: "25%", top: "48%" }, { left: "78%", top: "52%" }, { left: "8%",  top: "62%" },
  { left: "60%", top: "58%" }, { left: "40%", top: "68%" }, { left: "85%", top: "70%" },
  { left: "18%", top: "75%" }, { left: "55%", top: "80%" }, { left: "2%",  top: "85%" },
  { left: "93%", top: "82%" }, { left: "32%", top: "90%" }, { left: "70%", top: "88%" },
  { left: "48%", top: "32%" }, { left: "12%", top: "55%" }, { left: "80%", top: "42%" },
  { left: "45%", top: "14%" },
];

export const FloatingSymbols = () => (
  <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
    {SYMBOLS.map((s, i) => {
      const pos = positions[i % positions.length];
      const duration = 14 + (i * 3.7) % 18;
      const delay = (i * 1.3) % 8;
      return (
        <motion.div
          key={i}
          className="absolute font-mono font-bold select-none"
          style={{
            left: pos.left,
            top: pos.top,
            color: s.color,
            fontSize: `${0.65 + (i % 4) * 0.25}rem`,
            opacity: 0,
          }}
          animate={{
            y: [0, -28, 0],
            opacity: [0, 0.18 + (i % 3) * 0.06, 0.18 + (i % 3) * 0.06, 0],
            rotate: [0, (i % 2 === 0 ? 6 : -6)],
          }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {s.text}
        </motion.div>
      );
    })}
  </div>
);

/* ── Candlestick mini chart (decorative) ──────────────────────────── */
const candles = [
  { o: 60, c: 72, h: 78, l: 55, green: true },
  { o: 72, c: 68, h: 76, l: 63, green: false },
  { o: 68, c: 80, h: 84, l: 65, green: true },
  { o: 80, c: 75, h: 85, l: 70, green: false },
  { o: 75, c: 88, h: 92, l: 72, green: true },
  { o: 88, c: 84, h: 91, l: 80, green: false },
  { o: 84, c: 95, h: 98, l: 81, green: true },
  { o: 95, c: 90, h: 99, l: 86, green: false },
];

export const CandlestickChart = ({ width = 180, height = 100, opacity = 0.55 }: {
  width?: number; height?: number; opacity?: number;
}) => {
  const maxH = 99, minL = 55, range = maxH - minL;
  const toY = (v: number) => height - ((v - minL) / range) * height;
  const bw = (width / candles.length) * 0.45;
  const gap = width / candles.length;

  return (
    <svg width={width} height={height} style={{ opacity }}>
      {candles.map((c, i) => {
        const x = gap * i + gap / 2;
        const top = toY(Math.max(c.o, c.c));
        const bot = toY(Math.min(c.o, c.c));
        const bodyH = Math.max(2, bot - top);
        const col = c.green ? "hsl(152 65% 50%)" : "hsl(0 72% 58%)";
        return (
          <g key={i}>
            <line x1={x} y1={toY(c.h)} x2={x} y2={toY(c.l)} stroke={col} strokeWidth={1} />
            <rect x={x - bw / 2} y={top} width={bw} height={bodyH} fill={col} />
          </g>
        );
      })}
    </svg>
  );
};

/* ── Constellation dot network ────────────────────────────────────── */
export const ConstellationCanvas = ({ className = "" }: { className?: string }) => {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const w = canvas.offsetWidth, h = canvas.offsetHeight;
    canvas.width = w; canvas.height = h;

    const dots = Array.from({ length: 28 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: 1.2 + Math.random() * 1.4,
    }));

    const colors = ["hsl(214 88% 60%)", "hsl(268 75% 65%)", "hsl(175 70% 52%)", "hsl(38 95% 58%)"];
    let id: number;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const d of dots) {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0 || d.x > w) d.vx *= -1;
        if (d.y < 0 || d.y > h) d.vy *= -1;
      }
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x, dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `hsl(214 88% 60% / ${0.15 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }
      dots.forEach((d, i) => {
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = colors[i % colors.length];
        ctx.globalAlpha = 0.5;
        ctx.fill();
        ctx.globalAlpha = 1;
      });
      id = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(id);
  }, []);
  return <canvas ref={ref} className={`w-full h-full ${className}`} />;
};
