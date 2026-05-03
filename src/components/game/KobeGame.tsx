import { useRef, useState, useEffect, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";
import { Dog, DogHandle } from "./Dog";
import { World } from "./World";
import { NPC_DOGS, type NpcConfig, type QA } from "./npcData";
import { useControls } from "./useControls";

/* ── Gradient sky ─────────────────────────────────────────────────── */
function GradientSky() {
  const { scene } = useThree();
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 4; canvas.height = 512;
    const ctx = canvas.getContext("2d")!;
    const g = ctx.createLinearGradient(0, 0, 0, 512);
    g.addColorStop(0.00, "#080a1c");
    g.addColorStop(0.15, "#150d40");
    g.addColorStop(0.32, "#6b1f7a");
    g.addColorStop(0.50, "#b83240");
    g.addColorStop(0.64, "#e05a18");
    g.addColorStop(0.78, "#f59020");
    g.addColorStop(0.90, "#fdd06a");
    g.addColorStop(1.00, "#ffe8a0");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 4, 512);
    const tex = new THREE.CanvasTexture(canvas);
    tex.mapping = THREE.EquirectangularReflectionMapping;
    scene.background = tex;
    return () => { tex.dispose(); scene.background = null; };
  }, [scene]);
  return null;
}

/* ── Player controller ────────────────────────────────────────────── */
function PlayerController({
  onNearNpc,
  onMovingChange,
  dogRef,
}: {
  onNearNpc: (id: string | null) => void;
  onMovingChange: (m: boolean, r: boolean) => void;
  dogRef: React.RefObject<DogHandle>;
}) {
  const keys      = useControls();
  const { camera } = useThree();

  const pos       = useRef(new THREE.Vector3(0, 0, 5));
  const vel       = useRef(new THREE.Vector3());
  const dogYaw    = useRef(0);  // dog facing direction (world yaw)
  const camYaw    = useRef(0);  // camera horizontal orbit
  const camPitch  = useRef(0.38); // camera vertical angle (radians)
  const camPos    = useRef(new THREE.Vector3(0, 3, 9));
  const prevNear  = useRef<string | null>(null);

  // Mouse look via pointer lock
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!document.pointerLockElement) return;
      camYaw.current  -= e.movementX * 0.0038;
      camPitch.current = THREE.MathUtils.clamp(
        camPitch.current - e.movementY * 0.0028,
        0.08, 0.80,
      );
    };
    document.addEventListener("mousemove", onMove);
    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  useFrame((_, delta) => {
    const k = keys.current;
    const maxSpeed = k.run ? 8 : 4;

    // WASD movement is relative to camera yaw
    const moveX = (k.right ? 1 : 0) - (k.left ? 1 : 0);
    const moveZ = (k.backward ? 1 : 0) - (k.forward ? 1 : 0);
    const moving = moveX !== 0 || moveZ !== 0;

    const dir = new THREE.Vector3(moveX, 0, moveZ);
    if (dir.length() > 0) {
      dir.normalize().applyEuler(new THREE.Euler(0, camYaw.current, 0));
    }
    const targetVel = dir.multiplyScalar(maxSpeed);
    vel.current.lerp(targetVel, delta * (moving ? 9 : 14));

    pos.current.addScaledVector(vel.current, delta);
    pos.current.x = THREE.MathUtils.clamp(pos.current.x, -23, 23);
    pos.current.z = THREE.MathUtils.clamp(pos.current.z, -23, 23);

    const isMoving  = vel.current.length() > 0.1;
    onMovingChange(isMoving, k.run && isMoving);

    // Dog faces movement direction
    if (isMoving) {
      const targetYaw = Math.atan2(vel.current.x, vel.current.z);
      dogYaw.current = THREE.MathUtils.lerp(
        dogYaw.current,
        targetYaw,
        delta * 10,
      );
    }
    const dog = dogRef.current?.group;
    if (dog) {
      dog.position.copy(pos.current);
      dog.rotation.y = dogYaw.current;
    }

    // Camera orbit around dog
    const dist  = 6.2;
    const hDist = dist * Math.cos(camPitch.current);
    const targetCam = new THREE.Vector3(
      pos.current.x + Math.sin(camYaw.current) * hDist,
      pos.current.y + dist * Math.sin(camPitch.current),
      pos.current.z + Math.cos(camYaw.current) * hDist,
    );
    camPos.current.lerp(targetCam, delta * 6);
    camera.position.copy(camPos.current);
    camera.lookAt(pos.current.x, pos.current.y + 0.6, pos.current.z);

    // NPC proximity
    const near = NPC_DOGS.find(n => {
      const dx = pos.current.x - n.position[0];
      const dz = pos.current.z - n.position[2];
      return dx * dx + dz * dz < 9;
    });
    const nearId = near?.id ?? null;
    if (nearId !== prevNear.current) {
      prevNear.current = nearId;
      onNearNpc(nearId);
    }
  });

  return null;
}

/* ── Game scene ───────────────────────────────────────────────────── */
function GameScene({ onNearNpc }: { onNearNpc: (id: string | null) => void }) {
  const dogRef = useRef<DogHandle>(null);
  const [moving,  setMoving]  = useState(false);
  const [running, setRunning] = useState(false);
  const [nearNpc, setNear]    = useState<string | null>(null);

  const handleMoving = useCallback((m: boolean, r: boolean) => { setMoving(m); setRunning(r); }, []);
  const handleNear   = useCallback((id: string | null) => { setNear(id); onNearNpc(id); }, [onNearNpc]);

  return (
    <>
      <GradientSky />
      <Stars radius={90} depth={50} count={1400} factor={3} fade />
      <fog attach="fog" args={["#b84820", 40, 150]} />

      <ambientLight intensity={0.65} color="#ffcc88" />
      <directionalLight
        position={[18, 24, 10]}
        intensity={2.0}
        color="#ffaa60"
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-far={80}
        shadow-camera-left={-30} shadow-camera-right={30}
        shadow-camera-top={30}  shadow-camera-bottom={-30}
      />
      <hemisphereLight args={["#ff8844", "#2d5020", 0.55]} />
      <directionalLight position={[-12, 6, -18]} intensity={0.35} color="#7755bb" />

      <World nearbyNpcId={nearNpc} />
      <Dog ref={dogRef} moving={moving} running={running} />
      <PlayerController
        dogRef={dogRef}
        onNearNpc={handleNear}
        onMovingChange={handleMoving}
      />
    </>
  );
}

/* ── Dialogue panel ───────────────────────────────────────────────── */
interface Message { from: "user" | "npc"; text: string; }

function DialoguePanel({ npc, onClose }: { npc: NpcConfig; onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    { from: "npc", text: npc.intro },
  ]);
  const [asked, setAsked] = useState<Set<number>>(new Set());
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const ask = (qa: QA, idx: number) => {
    setAsked(prev => new Set(prev).add(idx));
    setMessages(prev => [
      ...prev,
      { from: "user", text: qa.q },
      { from: "npc",  text: qa.a },
    ]);
  };

  const sp: React.CSSProperties = { fontFamily: "'Space Grotesk', sans-serif" };

  return (
    <div
      style={{
        position: "absolute", inset: 0,
        background: "rgba(0,0,0,0.62)",
        backdropFilter: "blur(4px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        zIndex: 30,
      }}
      onClick={onClose}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          ...sp,
          width: "min(520px, calc(100vw - 24px))",
          maxHeight: "82vh",
          display: "flex", flexDirection: "column",
          borderRadius: 16,
          background: "rgba(6, 8, 20, 0.94)",
          border: `1px solid ${npc.accentColor}44`,
          boxShadow: `0 0 60px ${npc.accentColor}22, 0 12px 48px rgba(0,0,0,0.7)`,
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div style={{
          padding: "14px 18px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          background: `${npc.accentColor}10`,
        }}>
          <div>
            <div style={{ fontFamily: "'Bangers', cursive", fontSize: 22, letterSpacing: "0.07em", color: npc.accentColor }}>
              {npc.name}
            </div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 1 }}>
              {npc.breed}
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 7, color: "rgba(255,255,255,0.5)", cursor: "pointer",
              padding: "3px 10px", fontSize: 12,
            }}
          >Esc</button>
        </div>

        {/* Messages */}
        <div style={{ flex: 1, overflowY: "auto", padding: "14px 16px", display: "flex", flexDirection: "column", gap: 10 }}>
          {messages.map((m, i) => (
            <div key={i} style={{ display: "flex", justifyContent: m.from === "user" ? "flex-end" : "flex-start" }}>
              <div style={{
                maxWidth: "84%",
                padding: "9px 13px",
                borderRadius: m.from === "user" ? "12px 12px 3px 12px" : "12px 12px 12px 3px",
                background: m.from === "user"
                  ? `linear-gradient(135deg, ${npc.accentColor}44, ${npc.accentColor}28)`
                  : "rgba(255,255,255,0.07)",
                border: `1px solid ${m.from === "user" ? npc.accentColor + "44" : "rgba(255,255,255,0.08)"}`,
                fontSize: 13,
                lineHeight: 1.65,
                color: m.from === "user" ? npc.accentColor : "rgba(255,255,255,0.85)",
              }}>
                {m.text}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Question buttons */}
        <div style={{
          padding: "12px 16px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          display: "flex", flexDirection: "column", gap: 6,
        }}>
          <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 2 }}>
            Ask a question
          </div>
          {npc.qa.map((qa, i) => (
            <button
              key={i}
              onClick={() => ask(qa, i)}
              disabled={asked.has(i)}
              style={{
                textAlign: "left",
                padding: "8px 12px",
                borderRadius: 8,
                background: asked.has(i) ? "rgba(255,255,255,0.03)" : `${npc.accentColor}12`,
                border: `1px solid ${asked.has(i) ? "rgba(255,255,255,0.06)" : npc.accentColor + "33"}`,
                color: asked.has(i) ? "rgba(255,255,255,0.28)" : "rgba(255,255,255,0.82)",
                fontSize: 12, cursor: asked.has(i) ? "default" : "pointer",
                transition: "all 0.15s",
              }}
              onMouseEnter={e => { if (!asked.has(i)) e.currentTarget.style.background = `${npc.accentColor}22`; }}
              onMouseLeave={e => { if (!asked.has(i)) e.currentTarget.style.background = `${npc.accentColor}12`; }}
            >
              {asked.has(i) ? `✓ ${qa.q}` : `› ${qa.q}`}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── HUD ──────────────────────────────────────────────────────────── */
function HUD({
  nearId, openNpc, locked,
  onOpen, onClose, onLock,
}: {
  nearId: string | null;
  openNpc: NpcConfig | null;
  locked: boolean;
  onOpen: (id: string) => void;
  onClose: () => void;
  onLock: () => void;
}) {
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.code === "KeyE" && nearId && !openNpc) onOpen(nearId);
      if (e.code === "Escape" && openNpc) onClose();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [nearId, openNpc, onOpen, onClose]);

  const sp: React.CSSProperties = { fontFamily: "'Space Grotesk', sans-serif" };

  const hint = (key: string, label: string, highlight = false) => (
    <span key={key} style={{
      ...sp,
      display: "flex", alignItems: "center", gap: 5,
      padding: "4px 10px",
      background: highlight ? "rgba(255,200,80,0.2)" : "rgba(0,0,0,0.4)",
      border: `1px solid ${highlight ? "rgba(255,200,80,0.45)" : "rgba(255,255,255,0.12)"}`,
      borderRadius: 6, backdropFilter: "blur(6px)",
      fontSize: 11,
      color: highlight ? "#ffe066" : "rgba(255,255,255,0.55)",
      animation: highlight ? "pulse 1.2s ease-in-out infinite" : "none",
    }}>
      <kbd style={{ fontFamily: "monospace", fontSize: 10, background: "rgba(255,255,255,0.1)", padding: "1px 5px", borderRadius: 3 }}>{key}</kbd>
      {label}
    </span>
  );

  return (
    <>
      {/* Click-to-lock overlay when not locked */}
      {!locked && !openNpc && (
        <div
          onClick={onLock}
          style={{
            position: "absolute", inset: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
            background: "rgba(0,0,0,0.42)", backdropFilter: "blur(2px)",
            zIndex: 25, cursor: "pointer",
          }}
        >
          <div style={{
            ...sp,
            textAlign: "center",
            padding: "22px 36px",
            borderRadius: 14,
            background: "rgba(6,8,20,0.88)",
            border: "1px solid rgba(255,255,255,0.12)",
          }}>
            <div style={{ fontFamily: "'Bangers', cursive", fontSize: 28, letterSpacing: "0.08em", color: "white", marginBottom: 6 }}>
              Click to Play
            </div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)" }}>
              Captures mouse for camera control &mdash; press Esc to release
            </div>
          </div>
        </div>
      )}

      {/* Control hints bar */}
      {locked && !openNpc && (
        <div style={{ position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8 }}>
          {hint("WASD", "Move")}
          {hint("Mouse", "Look")}
          {hint("Shift", "Run")}
          {nearId && hint("E", "Talk", true)}
        </div>
      )}

      {/* Dialogue */}
      {openNpc && <DialoguePanel npc={openNpc} onClose={onClose} />}

      <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:.5}}`}</style>
    </>
  );
}

/* ── Entry ────────────────────────────────────────────────────────── */
export default function KobeGame() {
  const [nearId,  setNearId]  = useState<string | null>(null);
  const [openNpc, setOpenNpc] = useState<NpcConfig | null>(null);
  const [locked,  setLocked]  = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  // Track pointer lock state
  useEffect(() => {
    const onChange = () => setLocked(!!document.pointerLockElement);
    document.addEventListener("pointerlockchange", onChange);
    return () => document.removeEventListener("pointerlockchange", onChange);
  }, []);

  // Release pointer lock when dialogue opens
  useEffect(() => {
    if (openNpc && document.pointerLockElement) document.exitPointerLock();
  }, [openNpc]);

  const handleLock = () => { wrapRef.current?.requestPointerLock(); };

  const handleOpen = useCallback((id: string) => {
    const npc = NPC_DOGS.find(n => n.id === id);
    if (npc) setOpenNpc(npc);
  }, []);

  const handleClose = useCallback(() => {
    setOpenNpc(null);
  }, []);

  return (
    <div ref={wrapRef} style={{ width: "100%", height: "100vh", position: "relative" }}>
      <Canvas
        shadows
        camera={{ position: [0, 3, 9], fov: 62, near: 0.1, far: 250 }}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.1 }}
      >
        <GameScene onNearNpc={setNearId} />
      </Canvas>

      <HUD
        nearId={nearId}
        openNpc={openNpc}
        locked={locked}
        onOpen={handleOpen}
        onClose={handleClose}
        onLock={handleLock}
      />
    </div>
  );
}
