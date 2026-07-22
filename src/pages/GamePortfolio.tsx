import { Suspense, lazy, useEffect, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ACESFilmicToneMapping } from "three";
import { Link } from "react-router-dom";
import Intro from "@/world/ui/Intro";
import Hud from "@/world/ui/Hud";
import Panel from "@/world/ui/Panel";
import TouchControls from "@/world/ui/TouchControls";
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

export default function GamePortfolio() {
  const started = useWorld((s) => s.started);
  const [supported, setSupported] = useState(true);
  const [contextLost, setContextLost] = useState(false);
  useKeyboardControls();

  useEffect(() => setSupported(hasWebGL()), []);

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
  }, [supported]);

  // Coarse pointers and small screens get fewer stars and no shadow pass.
  const quality = useMemo<"high" | "low">(() => {
    if (typeof window === "undefined") return "high";
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    return coarse || window.innerWidth < 900 ? "low" : "high";
  }, []);

  if (!supported) return <NoWebGL />;

  return (
    <main className="relative h-[100dvh] w-full overflow-hidden bg-[#160f34] text-white">
      <Canvas
        shadows={quality === "high"}
        dpr={quality === "high" ? [1, 1.75] : [1, 1.3]}
        gl={{
          antialias: false,
          powerPreference: "high-performance",
          toneMapping: ACESFilmicToneMapping,
        }}
        camera={{ fov: 55, near: 0.5, far: 500, position: [0, 12, 46] }}
      >
        <Suspense fallback={null}>
          <World quality={quality} />
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
          <TouchControls />
        </>
      )}

      {started && (
        <Link
          to="/resume"
          className="pointer-events-auto fixed bottom-1 left-1/2 z-20 hidden -translate-x-1/2 text-[0.6rem] uppercase tracking-[0.2em] text-[#6b649b] transition hover:text-white sm:block"
        >
          Prefer a plain résumé? →
        </Link>
      )}
    </main>
  );
}

function NoWebGL() {
  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center gap-4 bg-[#160f34] px-6 text-center text-white">
      <h1 className="text-3xl font-black">Amritaraj Nair</h1>
      <p className="max-w-md text-sm text-[#b9b2e8]">
        This portfolio is a 3D driving world, and your browser doesn&apos;t support WebGL. The
        written version has everything.
      </p>
      <Link
        to="/resume"
        className="rounded-full bg-gradient-to-r from-[#5b4bff] to-[#c341ff] px-7 py-3 text-xs font-bold uppercase tracking-[0.2em]"
      >
        Read the résumé
      </Link>
    </main>
  );
}
