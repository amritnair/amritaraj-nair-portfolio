import { useEffect, useRef, useState } from "react";

const BackgroundEffects = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isTouchDevice] = useState(() => typeof window !== "undefined" && "ontouchstart" in window);

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

  return <>{!isTouchDevice && <div ref={cursorRef} className="cursor-glow" aria-hidden="true" />}</>;
};

export default BackgroundEffects;
