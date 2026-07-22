import { Suspense, lazy, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ACESFilmicToneMapping } from "three";
import { Link } from "react-router-dom";
import Intro from "@/world/ui/Intro";
import Hud from "@/world/ui/Hud";
import Panel from "@/world/ui/Panel";
import { useKeyboardControls } from "@/world/controls";
import { useWorld } from "@/world/store";

const World = lazy(() => import("@/world/World"));

function hasWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext && (canvas.getContext("webgl2") || canvas.getContext("webgl")),
    );
  } catch {
    return false;
  }
}

/**
 * This is a keyboard-driven desktop experience, not a phone game — a touch
 * D-pad on a 6-inch screen was a worse version of both. Small or touch-only
 * devices get the written portfolio instead.
 */
function isDesktopClass() {
  if (typeof window === "undefined") return true;
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  return finePointer && window.innerWidth >= 860;
}

export default function GamePortfolio() {
  const started = useWorld((s) => s.started);
  const [supported, setSupported] = useState(true);
  const [desktop, setDesktop] = useState(true);
  const [contextLost, setContextLost] = useState(false);
  useKeyboardControls();

  useEffect(() => {
    setSupported(hasWebGL());
    const sync = () => setDesktop(isDesktopClass());
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, []);

  // A GPU reset or a long spell in a background tab can kill the WebGL context.
  // Without this the world silently freezes mid-drive with no explanation.
  useEffect(() => {
    const canvas = document.querySelector("canvas");
    if (!canvas) return;
    const lost = (event: Event) => {
      event.preventDefault();
      setContextLost(true);
    };
    const restored = () => setContextLost(false);
    canvas.addEventListener("webglcontextlost", lost);
    canvas.addEventListener("webglcontextrestored", restored);
    return () => {
      canvas.removeEventListener("webglcontextlost", lost);
      canvas.removeEventListener("webglcontextrestored", restored);
    };
  }, [supported, desktop]);

  if (!supported) {
    return (
      <Fallback headline="Your browser doesn't support WebGL.">
        This portfolio is a 3D driving world. The written version has everything in it.
      </Fallback>
    );
  }

  if (!desktop) {
    return (
      <Fallback headline="Best on a desktop.">
        This portfolio is a 3D world you drive around with the keyboard. Open it on a laptop or
        desktop — or read the written version right now.
      </Fallback>
    );
  }

  return (
    <main className="relative h-[100dvh] w-full overflow-hidden bg-[#160f34] text-white">
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{
          antialias: false,
          powerPreference: "high-performance",
          toneMapping: ACESFilmicToneMapping,
        }}
        camera={{ fov: 55, near: 0.5, far: 600, position: [0, 12, 46] }}
      >
        <Suspense fallback={null}>
          <World />
        </Suspense>
      </Canvas>

      {contextLost && (
        <div className="pointer-events-auto fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-[#0d0a24]/95 px-6 text-center backdrop-blur">
          <p className="text-sm text-[#b9b2e8]">The graphics context was lost.</p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="rounded-full bg-gradient-to-r from-[#5b4bff] to-[#c341ff] px-7 py-3 text-xs font-bold uppercase tracking-[0.2em]"
          >
            Reload the world
          </button>
        </div>
      )}

      {!started && <Intro />}
      {started && (
        <>
          <Hud />
          <Panel />
          <Link
            to="/resume"
            className="pointer-events-auto fixed bottom-1 left-1/2 z-20 -translate-x-1/2 text-[0.6rem] uppercase tracking-[0.2em] text-[#6b649b] transition hover:text-white"
          >
            Prefer a plain résumé? →
          </Link>
        </>
      )}
    </main>
  );
}

function Fallback({ headline, children }: { headline: string; children: React.ReactNode }) {
  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center gap-4 bg-[#160f34] px-6 text-center text-white">
      <h1 className="text-3xl font-black">Amritaraj Nair</h1>
      <p className="text-sm font-semibold text-[#9d8bff]">{headline}</p>
      <p className="max-w-md text-sm leading-relaxed text-[#b9b2e8]">{children}</p>
      <Link
        to="/resume"
        className="mt-2 rounded-full bg-gradient-to-r from-[#5b4bff] to-[#c341ff] px-7 py-3 text-xs font-bold uppercase tracking-[0.2em]"
      >
        Read the résumé
      </Link>
    </main>
  );
}
