import { useEffect, useRef, useState } from "react";

interface Particle {
  x: number; y: number; r: number;
  speed: number; opacity: number; drift: number;
}

function initParticles(w: number, h: number): Particle[] {
  return Array.from({ length: 35 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: 1 + Math.random(),
    speed: 0.12 + Math.random() * 0.2,
    opacity: 0.06 + Math.random() * 0.12,
    drift: (Math.random() - 0.5) * 0.2,
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
    let animId: number;
    let w = window.innerWidth, h = window.innerHeight;
    canvas.width = w; canvas.height = h;
    let particles = initParticles(w, h);

    const draw = () => {
      animId = requestAnimationFrame(draw);
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.y -= p.speed;
        p.x += p.drift;
        if (p.y < -8) { p.y = h + 8; p.x = Math.random() * w; }
        if (p.x < -8) p.x = w + 8;
        if (p.x > w + 8) p.x = -8;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(217, 80%, 45%, ${p.opacity})`;
        ctx.fill();
      }
    };
    draw();

    const onResize = () => {
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w; canvas.height = h;
      particles = initParticles(w, h);
    };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", onResize); };
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
      <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0" aria-hidden="true" />
      {!isTouchDevice && <div ref={cursorRef} className="cursor-glow" aria-hidden="true" />}
    </>
  );
};

export default BackgroundEffects;
