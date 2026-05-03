import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Gauge, Github, Linkedin, MapPinned, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

type Zone = {
  id: string;
  label: string;
  title: string;
  detail: string;
  x: number;
  y: number;
  color: string;
  action: "about" | "projects" | "contact" | "resume";
};

type Car = {
  x: number;
  y: number;
  angle: number;
  speed: number;
};

const WORLD = { width: 2200, height: 1500 };
const START: Car = { x: 420, y: 1130, angle: -0.35, speed: 0 };

const zones: Zone[] = [
  {
    id: "about",
    label: "01",
    title: "About",
    detail: "CS + Math, research, and the person behind the builds.",
    x: 560,
    y: 445,
    color: "hsl(190 78% 40%)",
    action: "about",
  },
  {
    id: "projects",
    label: "02",
    title: "Projects",
    detail: "AI systems, quant tools, and shipped hackathon products.",
    x: 1460,
    y: 500,
    color: "hsl(207 86% 43%)",
    action: "projects",
  },
  {
    id: "resume",
    label: "CV",
    title: "Resume",
    detail: "Open the resume route when you park here.",
    x: 1750,
    y: 1080,
    color: "hsl(38 78% 46%)",
    action: "resume",
  },
  {
    id: "contact",
    label: "03",
    title: "Contact",
    detail: "Internships, research, and interesting collaborations.",
    x: 870,
    y: 1135,
    color: "hsl(154 54% 34%)",
    action: "contact",
  },
];

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

const roundedRect = (ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) => {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
};

const drawLabel = (ctx: CanvasRenderingContext2D, text: string, x: number, y: number, color: string) => {
  ctx.save();
  ctx.font = "700 28px Fraunces, Georgia, serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.shadowColor = "hsl(205 40% 20% / 0.18)";
  ctx.shadowBlur = 12;
  ctx.fillStyle = "hsl(205 60% 98%)";
  roundedRect(ctx, x - 82, y - 30, 164, 60, 8);
  ctx.fill();
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.shadowBlur = 0;
  ctx.fillStyle = "hsl(212 34% 16%)";
  ctx.fillText(text, x, y + 1);
  ctx.restore();
};

const drawTree = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
  ctx.save();
  ctx.fillStyle = "hsl(35 36% 31%)";
  roundedRect(ctx, x - size * 0.08, y + size * 0.25, size * 0.16, size * 0.36, size * 0.04);
  ctx.fill();
  ctx.fillStyle = "hsl(148 44% 24%)";
  ctx.beginPath();
  ctx.moveTo(x, y - size * 0.55);
  ctx.lineTo(x - size * 0.44, y + size * 0.18);
  ctx.lineTo(x + size * 0.44, y + size * 0.18);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = "hsl(154 46% 30%)";
  ctx.beginPath();
  ctx.moveTo(x, y - size * 0.32);
  ctx.lineTo(x - size * 0.52, y + size * 0.42);
  ctx.lineTo(x + size * 0.52, y + size * 0.42);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
};

const drawCar = (ctx: CanvasRenderingContext2D, car: Car) => {
  ctx.save();
  ctx.translate(car.x, car.y);
  ctx.rotate(car.angle);

  ctx.fillStyle = "hsl(210 24% 16% / 0.16)";
  roundedRect(ctx, -39, -22, 78, 44, 14);
  ctx.fill();

  ctx.fillStyle = "hsl(207 86% 43%)";
  roundedRect(ctx, -34, -18, 68, 36, 12);
  ctx.fill();
  ctx.fillStyle = "hsl(190 80% 66%)";
  roundedRect(ctx, -10, -14, 22, 28, 8);
  ctx.fill();
  ctx.fillStyle = "hsl(212 28% 12%)";
  roundedRect(ctx, -29, -24, 17, 8, 4);
  ctx.fill();
  roundedRect(ctx, 12, -24, 17, 8, 4);
  ctx.fill();
  roundedRect(ctx, -29, 16, 17, 8, 4);
  ctx.fill();
  roundedRect(ctx, 12, 16, 17, 8, 4);
  ctx.fill();

  ctx.fillStyle = "hsl(46 100% 82%)";
  ctx.beginPath();
  ctx.arc(33, -9, 4, 0, Math.PI * 2);
  ctx.arc(33, 9, 4, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
};

const PortfolioGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const keys = useRef<Record<string, boolean>>({});
  const car = useRef<Car>({ ...START });
  const camera = useRef({ x: START.x, y: START.y });
  const frame = useRef(0);
  const [activeZone, setActiveZone] = useState<Zone | null>(null);
  const [visited, setVisited] = useState(() => new Set<string>());
  const navigate = useNavigate();

  const forest = useMemo(
    () =>
      Array.from({ length: 72 }, (_, i) => ({
        x: 110 + ((i * 307) % 1980),
        y: 120 + ((i * 191) % 1220),
        size: 34 + ((i * 17) % 32),
      })).filter((tree) => !zones.some((zone) => Math.hypot(zone.x - tree.x, zone.y - tree.y) < 170)),
    [],
  );

  const goToZone = useCallback((zone: Zone) => {
    if (zone.action === "resume") {
      navigate("/resume");
      return;
    }
    document.getElementById(zone.action)?.scrollIntoView({ behavior: "smooth" });
  }, [navigate]);

  const resetCar = useCallback(() => {
    car.current = { ...START };
    camera.current = { x: START.x, y: START.y };
  }, []);

  const setControl = (key: string, value: boolean) => {
    keys.current[key] = value;
  };

  useEffect(() => {
    const down = (event: KeyboardEvent) => {
      keys.current[event.key.toLowerCase()] = true;
      if (event.key === "Enter" && activeZone) goToZone(activeZone);
    };
    const up = (event: KeyboardEvent) => {
      keys.current[event.key.toLowerCase()] = false;
    };
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, [activeZone, goToZone]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(wrap);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let last = performance.now();

    const drawWorld = (time: number) => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const dt = Math.min((time - last) / 16.67, 2);
      last = time;
      frame.current += dt;

      const controls = keys.current;
      const c = car.current;
      const forward = controls.w || controls.arrowup;
      const reverse = controls.s || controls.arrowdown;
      const left = controls.a || controls.arrowleft;
      const right = controls.d || controls.arrowright;
      const boost = controls.shift;

      const acceleration = boost ? 0.42 : 0.28;
      if (forward) c.speed += acceleration * dt;
      if (reverse) c.speed -= 0.2 * dt;
      c.speed *= 0.966;
      c.speed = clamp(c.speed, -4.2, boost ? 9 : 6.2);

      const steerPower = clamp(Math.abs(c.speed) / 5, 0.35, 1);
      if (left) c.angle -= 0.052 * steerPower * dt * Math.sign(c.speed || 1);
      if (right) c.angle += 0.052 * steerPower * dt * Math.sign(c.speed || 1);
      c.x += Math.cos(c.angle) * c.speed * dt;
      c.y += Math.sin(c.angle) * c.speed * dt;
      c.x = clamp(c.x, 70, WORLD.width - 70);
      c.y = clamp(c.y, 70, WORLD.height - 70);

      camera.current.x += (c.x - camera.current.x) * 0.08 * dt;
      camera.current.y += (c.y - camera.current.y) * 0.08 * dt;

      const near = zones.find((zone) => Math.hypot(zone.x - c.x, zone.y - c.y) < 145) ?? null;
      setActiveZone((current) => (current?.id === near?.id ? current : near));
      if (near) {
        setVisited((current) => {
          if (current.has(near.id)) return current;
          const next = new Set(current);
          next.add(near.id);
          return next;
        });
      }

      const viewX = camera.current.x - width / 2;
      const viewY = camera.current.y - height / 2;

      ctx.clearRect(0, 0, width, height);
      const sky = ctx.createLinearGradient(0, 0, 0, height);
      sky.addColorStop(0, "hsl(210 84% 95%)");
      sky.addColorStop(0.48, "hsl(174 34% 80%)");
      sky.addColorStop(1, "hsl(92 28% 72%)");
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, width, height);

      ctx.save();
      ctx.translate(-viewX, -viewY);

      ctx.fillStyle = "hsl(105 32% 70%)";
      roundedRect(ctx, 0, 0, WORLD.width, WORLD.height, 0);
      ctx.fill();

      const riverGradient = ctx.createLinearGradient(200, 260, 1980, 1380);
      riverGradient.addColorStop(0, "hsl(198 92% 70% / 0.85)");
      riverGradient.addColorStop(1, "hsl(188 80% 46% / 0.85)");
      ctx.strokeStyle = riverGradient;
      ctx.lineWidth = 94;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(90, 1270);
      ctx.bezierCurveTo(470, 980, 520, 540, 930, 690);
      ctx.bezierCurveTo(1270, 815, 1380, 470, 2090, 280);
      ctx.stroke();
      ctx.strokeStyle = "hsl(190 100% 92% / 0.5)";
      ctx.lineWidth = 5;
      ctx.setLineDash([34, 48]);
      ctx.lineDashOffset = -frame.current * 5;
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.strokeStyle = "hsl(210 18% 34%)";
      ctx.lineWidth = 86;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      ctx.moveTo(260, 1190);
      ctx.bezierCurveTo(560, 1080, 660, 880, 820, 720);
      ctx.bezierCurveTo(1050, 492, 1340, 438, 1610, 520);
      ctx.bezierCurveTo(1830, 590, 1905, 825, 1760, 1075);
      ctx.bezierCurveTo(1545, 1428, 1070, 1310, 875, 1132);
      ctx.stroke();

      ctx.strokeStyle = "hsl(205 54% 90% / 0.92)";
      ctx.lineWidth = 5;
      ctx.setLineDash([24, 30]);
      ctx.lineDashOffset = -frame.current * 1.5;
      ctx.stroke();
      ctx.setLineDash([]);

      forest.forEach((tree) => drawTree(ctx, tree.x, tree.y, tree.size));

      zones.forEach((zone) => {
        const pulse = Math.sin(frame.current * 0.08 + zone.x) * 0.5 + 0.5;
        ctx.save();
        ctx.fillStyle = zone.color;
        ctx.globalAlpha = 0.18 + pulse * 0.08;
        ctx.beginPath();
        ctx.arc(zone.x, zone.y, 118 + pulse * 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.strokeStyle = zone.color;
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.arc(zone.x, zone.y, 76, 0, Math.PI * 2);
        ctx.stroke();
        drawLabel(ctx, zone.title, zone.x, zone.y - 116, zone.color);
        ctx.fillStyle = zone.color;
        roundedRect(ctx, zone.x - 25, zone.y - 23, 50, 46, 8);
        ctx.fill();
        ctx.fillStyle = "white";
        ctx.font = "700 18px JetBrains Mono, monospace";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(zone.label, zone.x, zone.y + 1);
        ctx.restore();
      });

      ctx.fillStyle = "hsl(38 72% 56% / 0.22)";
      ctx.beginPath();
      ctx.arc(1680, 1070, 230 + Math.sin(frame.current * 0.04) * 14, 0, Math.PI * 2);
      ctx.fill();

      drawCar(ctx, c);
      ctx.restore();

      raf = requestAnimationFrame(drawWorld);
    };

    raf = requestAnimationFrame(drawWorld);
    return () => cancelAnimationFrame(raf);
  }, [forest]);

  return (
    <div ref={wrapRef} className="relative h-[min(78vh,760px)] min-h-[560px] overflow-hidden rounded-lg border border-border/80 bg-sky-50 shadow-2xl">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      <div className="absolute left-4 top-4 max-w-sm surface-panel-strong p-4">
        <div className="flex items-center gap-2 text-[10px] mono uppercase tracking-[0.2em] text-primary">
          <MapPinned className="h-3.5 w-3.5" />
          Driveable Portfolio
        </div>
        <h1 className="display mt-2 text-3xl font-black leading-none text-foreground sm:text-4xl">
          Amritaraj Nair
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Explore the map, park by a station, and open the section you find.
        </p>
        <div className="mt-3 flex items-center gap-2 text-[10px] mono uppercase tracking-[0.16em] text-muted-foreground">
          <span>{visited.size}/{zones.length} found</span>
          <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
          <span>{Math.max(0, Math.round(Math.abs(car.current.speed) * 12))} mph</span>
        </div>
      </div>

      <div className="absolute right-4 top-4 flex gap-2">
        <a
          href="https://github.com/amritnair?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="surface-panel inline-flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
          aria-label="GitHub"
        >
          <Github className="h-4 w-4" />
        </a>
        <a
          href="https://www.linkedin.com/in/amritaraj-nair-227063313"
          target="_blank"
          rel="noopener noreferrer"
          className="surface-panel inline-flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-4 w-4" />
        </a>
        <button
          onClick={resetCar}
          className="surface-panel inline-flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Reset car"
        >
          <RotateCcw className="h-4 w-4" />
        </button>
      </div>

      {activeZone && (
        <div className="absolute bottom-4 left-4 right-4 mx-auto max-w-xl surface-panel-strong p-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="mono text-[10px] uppercase tracking-[0.2em] text-primary">Station {activeZone.label}</p>
              <h2 className="display text-2xl font-black leading-tight text-foreground">{activeZone.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{activeZone.detail}</p>
            </div>
            <Button onClick={() => goToZone(activeZone)} className="btn-primary rounded-lg border-0 font-mono text-white">
              Open
            </Button>
          </div>
        </div>
      )}

      <div className="absolute bottom-4 right-4 grid grid-cols-3 gap-2 sm:hidden">
        <span />
        <button
          className="surface-panel flex h-12 w-12 items-center justify-center rounded-lg"
          onPointerDown={() => setControl("arrowup", true)}
          onPointerUp={() => setControl("arrowup", false)}
          onPointerCancel={() => setControl("arrowup", false)}
          aria-label="Forward"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
        <button
          className="surface-panel flex h-12 w-12 items-center justify-center rounded-lg"
          onPointerDown={() => setControl("shift", true)}
          onPointerUp={() => setControl("shift", false)}
          onPointerCancel={() => setControl("shift", false)}
          aria-label="Boost"
        >
          <Gauge className="h-5 w-5" />
        </button>
        <button
          className="surface-panel flex h-12 w-12 items-center justify-center rounded-lg"
          onPointerDown={() => setControl("arrowleft", true)}
          onPointerUp={() => setControl("arrowleft", false)}
          onPointerCancel={() => setControl("arrowleft", false)}
          aria-label="Left"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <button
          className="surface-panel flex h-12 w-12 items-center justify-center rounded-lg"
          onPointerDown={() => setControl("arrowdown", true)}
          onPointerUp={() => setControl("arrowdown", false)}
          onPointerCancel={() => setControl("arrowdown", false)}
          aria-label="Reverse"
        >
          <ArrowDown className="h-5 w-5" />
        </button>
        <button
          className="surface-panel flex h-12 w-12 items-center justify-center rounded-lg"
          onPointerDown={() => setControl("arrowright", true)}
          onPointerUp={() => setControl("arrowright", false)}
          onPointerCancel={() => setControl("arrowright", false)}
          aria-label="Right"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default PortfolioGame;
