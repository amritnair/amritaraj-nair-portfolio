import { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  opacity: number;
  hue: number;
  phase: number;
  kind: "node" | "spark";
}

function initParticles(w: number, h: number): Particle[] {
  const hues = [214, 188, 156, 268, 38, 320];
  return Array.from({ length: Math.min(72, Math.floor(w / 18)) }, (_, i) => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: 0.7 + Math.random() * 1.9,
    vx: (Math.random() - 0.5) * 0.22,
    vy: -0.08 - Math.random() * 0.28,
    opacity: 0.08 + Math.random() * 0.22,
    hue: hues[Math.floor(Math.random() * hues.length)],
    phase: Math.random() * Math.PI * 2,
    kind: i % 4 === 0 ? "spark" : "node",
  }));
}

const BackgroundEffects = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isTouchDevice] = useState(() => typeof window !== "undefined" && "ontouchstart" in window);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let animId = 0;
    let w = window.innerWidth, h = window.innerHeight;
    canvas.width = w; canvas.height = h;
    let particles = initParticles(w, h);
    let tick = 0;

    const draw = () => {
      animId = requestAnimationFrame(draw);
      tick += 0.008;
      ctx.clearRect(0, 0, w, h);

      ctx.save();
      ctx.globalCompositeOperation = "lighter";

      const streamGap = Math.max(120, w / 8);
      for (let x = -streamGap; x < w + streamGap; x += streamGap) {
        const offset = ((tick * 120 + x * 0.25) % (h + 220)) - 160;
        const grad = ctx.createLinearGradient(x, offset - 120, x + 80, offset + 120);
        grad.addColorStop(0, "hsla(188, 90%, 55%, 0)");
        grad.addColorStop(0.45, "hsla(188, 90%, 55%, 0.14)");
        grad.addColorStop(1, "hsla(268, 80%, 62%, 0)");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x, offset - 120);
        ctx.bezierCurveTo(x + 34, offset - 20, x - 22, offset + 70, x + 78, offset + 170);
        ctx.stroke();
      }

      for (const p of particles) {
        p.y += p.vy;
        p.x += p.vx + Math.sin(tick * 2 + p.phase) * 0.08;
        if (p.y < -12) { p.y = h + 12; p.x = Math.random() * w; }
        if (p.x < -8) p.x = w + 8;
        if (p.x > w + 8) p.x = -8;

        for (const other of particles) {
          if (other === p || other.x < p.x) continue;
          const dx = p.x - other.x;
          const dy = p.y - other.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 125) {
            ctx.strokeStyle = `hsla(${p.hue}, 82%, 56%, ${(1 - dist / 125) * 0.075})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 85%, 55%, ${p.opacity})`;
        ctx.fill();

        if (p.kind === "spark") {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * (5 + Math.sin(tick * 5 + p.phase) * 1.5), 0, Math.PI * 2);
          ctx.strokeStyle = `hsla(${p.hue}, 90%, 58%, ${p.opacity * 0.14})`;
          ctx.stroke();
        }
      }
      ctx.restore();
    };

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) draw();

    const onResize = () => {
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w; canvas.height = h;
      particles = initParticles(w, h);
    };
    window.addEventListener("resize", onResize);
    return () => { if (animId) cancelAnimationFrame(animId); window.removeEventListener("resize", onResize); };
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;
    const el = cursorRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => { el.style.left = `${e.clientX}px`; el.style.top = `${e.clientY}px`; el.style.opacity = "1"; };
    const onLeave = () => { el.style.opacity = "0"; };
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    return () => { window.removeEventListener("mousemove", onMove); document.removeEventListener("mouseleave", onLeave); };
  }, [isTouchDevice]);

  return (
    <>
      <div className="aurora-sheet" aria-hidden="true" />
      <div className="animated-data-grid" aria-hidden="true" />
      <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0" aria-hidden="true" />
      {!isTouchDevice && <div ref={cursorRef} className="cursor-glow" aria-hidden="true" />}
    </>
  );
};

export default BackgroundEffects;
