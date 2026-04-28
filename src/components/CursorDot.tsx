import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CursorDot = () => {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isTouchDevice] = useState(() => typeof window !== "undefined" && "ontouchstart" in window);
  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const sx = useSpring(mx, { stiffness: 500, damping: 40 });
  const sy = useSpring(my, { stiffness: 500, damping: 40 });

  useEffect(() => {
    if (isTouchDevice) return;

    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      setVisible(true);
    };
    const onLeave = () => setVisible(false);

    // detect hover on interactive elements
    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      setHovered(!!el.closest("a, button, [data-cursor-hover]"));
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousemove", onOver);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousemove", onOver);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [isTouchDevice, mx, my]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Small dot — fast */}
      <motion.div
        style={{ x: mx, y: my, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: hovered ? 0 : 1, opacity: visible ? 1 : 0 }}
        transition={{ scale: { duration: 0.15 }, opacity: { duration: 0.2 } }}
        className="fixed top-0 left-0 z-[9999] w-2 h-2 rounded-full bg-primary pointer-events-none"
      />
      {/* Outer ring — slower spring */}
      <motion.div
        style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
        animate={{
          scale: hovered ? 2.5 : 1,
          opacity: visible ? 1 : 0,
          backgroundColor: hovered ? "hsl(22 95% 50% / 0.12)" : "transparent",
        }}
        transition={{ scale: { type: "spring", stiffness: 200, damping: 24 }, opacity: { duration: 0.2 }, backgroundColor: { duration: 0.2 } }}
        className="fixed top-0 left-0 z-[9998] w-8 h-8 rounded-full border border-primary/40 pointer-events-none"
      />
    </>
  );
};

export default CursorDot;
