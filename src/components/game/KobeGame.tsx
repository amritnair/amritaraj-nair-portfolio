import { useRef, useState, useEffect, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sky, Stars } from "@react-three/drei";
import * as THREE from "three";
import { Dog, DogHandle } from "./Dog";
import { World, SIGNS } from "./World";
import { useControls } from "./useControls";

/* ── Portfolio content for sign overlays ─────────────────────────── */
const SIGN_CONTENT: Record<string, React.ReactNode> = {
  about: (
    <div>
      <h2 className="text-2xl font-black mb-3 text-sky-300">About Me</h2>
      <p className="text-sm leading-relaxed mb-2 text-white/90">
        CS + Math student at Texas A&M University. I build AI systems, quant tools, and products that win hackathons.
      </p>
      <ul className="text-sm text-white/80 space-y-1 list-disc list-inside">
        <li>Cornell-backed startup (MagNet Agents)</li>
        <li>Quantitative Developer — $70K student fund</li>
        <li>Outstanding Undergraduate Researcher</li>
        <li>President's Endowed Scholar</li>
        <li>Computer vision app pitched to Pear VC</li>
      </ul>
    </div>
  ),
  projects: (
    <div>
      <h2 className="text-2xl font-black mb-3 text-green-300">Projects</h2>
      <div className="space-y-2 text-sm">
        {[
          { name: "MagNet Agents", desc: "Cornell-backed AI agent startup", tag: "AI" },
          { name: "AlphaForge", desc: "Robinhood + Scratch for quant trading", tag: "Quant" },
          { name: "Shot Sensei", desc: "AI pickleball coach — computer vision", tag: "CV" },
          { name: "TidalTAMU", desc: "Google Gemini Track 1st Place", tag: "Win" },
        ].map(p => (
          <div key={p.name} className="flex items-start gap-2">
            <span className="px-1.5 py-0.5 bg-green-700/60 text-green-200 text-xs rounded font-mono">{p.tag}</span>
            <div>
              <div className="font-semibold text-white">{p.name}</div>
              <div className="text-white/70">{p.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
  contact: (
    <div>
      <h2 className="text-2xl font-black mb-3 text-amber-300">Contact</h2>
      <div className="space-y-2 text-sm text-white/90">
        <div>📧 <a href="mailto:amritnair23@gmail.com" className="text-amber-300 hover:underline">amritnair23@gmail.com</a></div>
        <div>🔗 <a href="https://www.linkedin.com/in/amritaraj-nair-227063313" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:underline">LinkedIn</a></div>
        <div>🐙 <a href="https://github.com/amritnair" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:underline">GitHub</a></div>
      </div>
    </div>
  ),
  resume: (
    <div>
      <h2 className="text-2xl font-black mb-3 text-purple-300">Resume</h2>
      <p className="text-sm text-white/80 mb-4">
        Texas A&M CS + Math. Quant dev, AI researcher, hackathon winner.
      </p>
      <a
        href="/#/resume"
        className="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white text-sm rounded font-mono transition-colors"
      >
        View Full Resume →
      </a>
    </div>
  ),
};

/* ── Player controller (runs inside Canvas) ───────────────────────── */
function PlayerController({
  dogRef,
  onNearSign,
  onMovingChange,
}: {
  dogRef: React.RefObject<DogHandle>;
  onNearSign: (id: string | null) => void;
  onMovingChange: (moving: boolean, running: boolean) => void;
}) {
  const keys = useControls();
  const { camera } = useThree();
  const yaw = useRef(0);
  const pos = useRef(new THREE.Vector3(0, 0, 4));
  const camTarget = useRef(new THREE.Vector3(0, 2.4, 8));
  const prevNear = useRef<string | null>(null);

  useFrame((_, delta) => {
    const k = keys.current;
    const speed = k.run ? 7 : 3.5;
    const isMoving = k.forward || k.backward || k.left || k.right;

    if (k.left)  yaw.current += delta * 2.2;
    if (k.right) yaw.current -= delta * 2.2;

    const dir = new THREE.Vector3();
    if (k.forward)  dir.z -= 1;
    if (k.backward) dir.z += 1;

    if (dir.length() > 0) {
      dir.normalize().applyEuler(new THREE.Euler(0, yaw.current, 0));
      pos.current.addScaledVector(dir, speed * delta);
      // clamp to world boundary
      pos.current.x = Math.max(-24, Math.min(24, pos.current.x));
      pos.current.z = Math.max(-24, Math.min(24, pos.current.z));
    }

    onMovingChange(isMoving, k.run);

    // update dog group transform
    const dog = dogRef.current?.group;
    if (dog) {
      dog.position.copy(pos.current);
      dog.rotation.y = yaw.current;
    }

    // smooth follow camera
    const behindOffset = new THREE.Vector3(0, 2.8, 5.5).applyEuler(new THREE.Euler(0, yaw.current, 0));
    camTarget.current.lerp(pos.current.clone().add(behindOffset), 0.08);
    camera.position.copy(camTarget.current);
    camera.lookAt(pos.current.x, pos.current.y + 0.6, pos.current.z);

    // detect nearby signs
    const nearSign = SIGNS.find(s => {
      const dx = pos.current.x - s.position[0];
      const dz = pos.current.z - s.position[2];
      return Math.sqrt(dx * dx + dz * dz) < 2.8;
    });
    const nearId = nearSign?.id ?? null;
    if (nearId !== prevNear.current) {
      prevNear.current = nearId;
      onNearSign(nearId);
    }
  });

  return null;
}

/* ── Main game scene ──────────────────────────────────────────────── */
function GameScene({
  onNearSign,
}: {
  onNearSign: (id: string | null) => void;
}) {
  const dogRef = useRef<DogHandle>(null);
  const [moving, setMoving] = useState(false);
  const [running, setRunning] = useState(false);

  const handleMoving = useCallback((m: boolean, r: boolean) => {
    setMoving(m);
    setRunning(r);
  }, []);

  const [nearSign, setNearSign] = useState<string | null>(null);

  const handleNear = useCallback((id: string | null) => {
    setNearSign(id);
    onNearSign(id);
  }, [onNearSign]);

  return (
    <>
      <Sky sunPosition={[100, 30, 100]} turbidity={0.4} rayleigh={0.5} />
      <Stars radius={80} depth={40} count={800} factor={3} fade />

      <ambientLight intensity={0.9} />
      <directionalLight
        position={[20, 30, 10]}
        intensity={1.4}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-far={80}
        shadow-camera-left={-30}
        shadow-camera-right={30}
        shadow-camera-top={30}
        shadow-camera-bottom={-30}
      />
      <hemisphereLight args={["#c8e8ff", "#4a7040", 0.6]} />

      <World nearbySignId={nearSign} />
      <Dog ref={dogRef} moving={moving} running={running} />
      <PlayerController dogRef={dogRef} onNearSign={handleNear} onMovingChange={handleMoving} />
    </>
  );
}

/* ── HUD overlay ──────────────────────────────────────────────────── */
function HUD({ nearId, openId, onOpen, onClose }: {
  nearId: string | null;
  openId: string | null;
  onOpen: (id: string) => void;
  onClose: () => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.code === "KeyE" && nearId && !openId) onOpen(nearId);
      if (e.code === "Escape" && openId) onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [nearId, openId, onOpen, onClose]);

  return (
    <>
      {/* Controls hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 text-white/60 text-xs mono select-none pointer-events-none">
        <span className="px-2 py-1 bg-black/30 backdrop-blur-sm rounded">WASD / ↑↓←→ Move</span>
        <span className="px-2 py-1 bg-black/30 backdrop-blur-sm rounded">Shift Run</span>
        {nearId && <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded animate-pulse text-white">E to Explore</span>}
      </div>

      {/* Sign panel */}
      {openId && SIGN_CONTENT[openId] && (
        <div className="absolute inset-0 flex items-center justify-center" onClick={onClose}>
          <div
            className="relative max-w-md w-full mx-4 p-6 rounded-xl border border-white/20 backdrop-blur-xl"
            style={{ background: "rgba(10, 18, 32, 0.88)" }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-white/50 hover:text-white text-lg leading-none"
            >✕</button>
            {SIGN_CONTENT[openId]}
            <p className="mt-4 text-xs text-white/40 mono">Press Esc or click outside to close</p>
          </div>
        </div>
      )}
    </>
  );
}

/* ── KobeGame entry ───────────────────────────────────────────────── */
export default function KobeGame() {
  const [nearId, setNearId] = useState<string | null>(null);
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="w-full h-screen relative">
      <Canvas
        shadows
        camera={{ position: [0, 2.8, 9], fov: 65, near: 0.1, far: 200 }}
        gl={{ antialias: true }}
      >
        <GameScene onNearSign={setNearId} />
      </Canvas>

      <HUD
        nearId={nearId}
        openId={openId}
        onOpen={setOpenId}
        onClose={() => setOpenId(null)}
      />
    </div>
  );
}
