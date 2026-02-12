import { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/*  Floating particles — tiny red dots drifting upward on a canvas    */
/* ------------------------------------------------------------------ */
interface Particle {
  x: number;
  y: number;
  r: number;
  speed: number;
  opacity: number;
  drift: number;
}

function initParticles(w: number, h: number, count: number): Particle[] {
  return Array.from({ length: count }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: 1 + Math.random() * 1.5,
    speed: 0.15 + Math.random() * 0.35,
    opacity: 0.15 + Math.random() * 0.25,
    drift: (Math.random() - 0.5) * 0.3,
  }));
}

/* ------------------------------------------------------------------ */
/*  BackgroundEffects component                                       */
/* ------------------------------------------------------------------ */
const BackgroundEffects = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isTouchDevice] = useState(
    () => typeof window !== "undefined" && "ontouchstart" in window
  );

  /* --- Floating particles --- */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;
    let animId: number;
    let w = window.innerWidth;
    let h = window.innerHeight;

    canvas.width = w;
    canvas.height = h;

    let particles = initParticles(w, h, 45);

    const draw = () => {
      animId = requestAnimationFrame(draw);
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.y -= p.speed;
        p.x += p.drift;

        /* Wrap around edges */
        if (p.y < -10) {
          p.y = h + 10;
          p.x = Math.random() * w;
        }
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(210, 100%, 65%, ${p.opacity})`;
        ctx.fill();
      }
    };
    draw();

    const onResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      particles = initParticles(w, h, 45);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  /* --- Cursor glow (desktop only) --- */
  useEffect(() => {
    if (isTouchDevice) return;
    const el = cursorRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
      el.style.opacity = "1";
    };

    const onLeave = () => {
      el.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [isTouchDevice]);

  return (
    <>
      {/* Particle canvas — fixed behind everything */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-0"
        aria-hidden="true"
      />

      {/* Cursor glow — desktop only */}
      {!isTouchDevice && (
        <div
          ref={cursorRef}
          className="cursor-glow"
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default BackgroundEffects;
