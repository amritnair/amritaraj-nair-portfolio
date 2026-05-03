import { useRef, useState, useEffect, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { Physics, RigidBody, CapsuleCollider, type RapierRigidBody, useRapier } from "@react-three/rapier";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";
import { Dog, DogHandle } from "./Dog";
import { World } from "./World";
import { NPC_DOGS, type NpcConfig, type QA } from "./npcData";
import { useControls } from "./useControls";

/* ═══════════════════════════════════════════════════════════════════
   SKY / DAY-NIGHT CYCLE
══════════════════════════════════════════════════════════════════ */
function lerpHex(a: string, b: string, t: number): string {
  const h = (s: string) => [parseInt(s.slice(1,3),16), parseInt(s.slice(3,5),16), parseInt(s.slice(5,7),16)];
  const [ar,ag,ab] = h(a), [br,bg,bb] = h(b);
  const rr = Math.round(ar+(br-ar)*t), gr = Math.round(ag+(bg-ag)*t), bv = Math.round(ab+(bb-ab)*t);
  return `#${rr.toString(16).padStart(2,'0')}${gr.toString(16).padStart(2,'0')}${bv.toString(16).padStart(2,'0')}`;
}

const SKY_KEYS = [
  { t:0.00, zenith:"#05060f", horiz:"#0a0c22" },
  { t:0.20, zenith:"#0a0c22", horiz:"#15104a" },
  { t:0.25, zenith:"#1c1460", horiz:"#c83820" },
  { t:0.32, zenith:"#1e3a7a", horiz:"#e06a18" },
  { t:0.42, zenith:"#1a55a8", horiz:"#5ba8e0" },
  { t:0.50, zenith:"#0e3d8a", horiz:"#4a90d4" },
  { t:0.62, zenith:"#1a4a90", horiz:"#60a0d8" },
  { t:0.72, zenith:"#1e2a70", horiz:"#d07030" },
  { t:0.76, zenith:"#1a1260", horiz:"#c83820" },
  { t:0.84, zenith:"#0d0c30", horiz:"#3a1860" },
  { t:1.00, zenith:"#05060f", horiz:"#0a0c22" },
];

function sampleSky(t: number) {
  for (let i = 0; i < SKY_KEYS.length - 1; i++) {
    if (t >= SKY_KEYS[i].t && t <= SKY_KEYS[i+1].t) {
      const a = (t - SKY_KEYS[i].t) / (SKY_KEYS[i+1].t - SKY_KEYS[i].t);
      return { zenith: lerpHex(SKY_KEYS[i].zenith, SKY_KEYS[i+1].zenith, a), horiz: lerpHex(SKY_KEYS[i].horiz, SKY_KEYS[i+1].horiz, a) };
    }
  }
  return SKY_KEYS[SKY_KEYS.length - 1];
}

const DAY_DURATION = 120;
const DAY_START    = 0.22;

function DayNightCycle() {
  const { scene } = useThree();
  const skyCanvas = useRef(document.createElement("canvas"));
  const skyTex    = useRef<THREE.CanvasTexture | null>(null);
  const dayTime   = useRef(DAY_START);
  const sunLight  = useRef<THREE.DirectionalLight>(null);
  const ambLight  = useRef<THREE.AmbientLight>(null);
  const hemiLight = useRef<THREE.HemisphereLight>(null);
  const sunMesh   = useRef<THREE.Mesh>(null);
  const moonMesh  = useRef<THREE.Mesh>(null);
  const sunGlow   = useRef<THREE.PointLight>(null);

  useEffect(() => {
    const c = skyCanvas.current; c.width = 4; c.height = 512;
    const tex = new THREE.CanvasTexture(c);
    tex.mapping = THREE.EquirectangularReflectionMapping;
    skyTex.current = tex; scene.background = tex;
    scene.fog = new THREE.Fog("#b84820", 40, 150);
    return () => { tex.dispose(); scene.background = null; scene.fog = null; };
  }, [scene]);

  useFrame((_, delta) => {
    dayTime.current = (dayTime.current + delta / DAY_DURATION) % 1;
    const t = dayTime.current;
    const sunAngle = (t - 0.25) * Math.PI * 2;
    const sunX = Math.cos(sunAngle) * 85;
    const sunY = Math.sin(sunAngle) * 70;
    const sunElev = Math.max(0, sunY / 70);

    if (sunMesh.current) {
      sunMesh.current.position.set(sunX, sunY, -15);
      (sunMesh.current.material as THREE.MeshBasicMaterial).color.set(
        sunElev < 0.15 ? lerpHex("#ff5500", "#fffce0", sunElev / 0.15) : "#fffce0"
      );
    }
    if (sunGlow.current) {
      sunGlow.current.position.set(sunX, sunY, -15);
      sunGlow.current.intensity = sunElev > 0 ? sunElev * 2.2 : 0;
    }
    if (moonMesh.current) {
      moonMesh.current.position.set(-sunX * 0.9, -sunY * 0.9, -15);
      moonMesh.current.visible = -sunY * 0.9 > 0;
    }
    if (skyTex.current) {
      const { zenith, horiz } = sampleSky(t);
      const ctx = skyCanvas.current.getContext("2d")!;
      const g = ctx.createLinearGradient(0, 0, 0, 512);
      g.addColorStop(0, zenith); g.addColorStop(0.55, lerpHex(zenith, horiz, 0.6)); g.addColorStop(1, horiz);
      ctx.fillStyle = g; ctx.fillRect(0, 0, 4, 512);
      skyTex.current.needsUpdate = true;
    }
    if (sunLight.current) {
      sunLight.current.position.set(sunX, sunY, -15);
      sunLight.current.intensity = sunElev > 0 ? THREE.MathUtils.lerp(0, 2.4, Math.min(sunElev * 2, 1)) : 0;
      sunLight.current.color.set(sunElev < 0.25 ? lerpHex("#ff6a10", "#fff8cc", sunElev / 0.25) : "#fff8cc");
    }
    if (ambLight.current) {
      ambLight.current.intensity = sunElev > 0 ? THREE.MathUtils.lerp(0.1, 0.75, Math.min(sunElev * 2, 1)) : 0.08;
      ambLight.current.color.set(sunElev > 0 ? (sunElev < 0.2 ? lerpHex("#803010", "#ffddaa", sunElev / 0.2) : "#ffe8cc") : "#1a2040");
    }
    if (hemiLight.current) {
      hemiLight.current.color.set(sunElev > 0 ? lerpHex("#2244aa", "#88aaff", sunElev) : "#060810");
      hemiLight.current.intensity = sunElev > 0 ? THREE.MathUtils.lerp(0.08, 0.55, sunElev) : 0.05;
    }
    if (scene.fog) {
      (scene.fog as THREE.Fog).color.set(sampleSky(t).horiz);
    }
  });

  return (
    <>
      <ambientLight ref={ambLight} intensity={0.4} />
      <directionalLight ref={sunLight} position={[30, 40, -15]} intensity={1.8} castShadow
        shadow-mapSize={[2048, 2048]} shadow-camera-far={80}
        shadow-camera-left={-32} shadow-camera-right={32}
        shadow-camera-top={32}   shadow-camera-bottom={-32} />
      <hemisphereLight ref={hemiLight} args={["#88aaff", "#2a4818", 0.5]} />
      <mesh ref={sunMesh} position={[30, 40, -15]}>
        <sphereGeometry args={[3.5, 16, 12]} />
        <meshBasicMaterial color="#fffce0" />
      </mesh>
      <pointLight ref={sunGlow} position={[30, 40, -15]} intensity={1.5} color="#fff5d0" distance={250} decay={1.4} />
      <mesh ref={moonMesh} position={[-30, -40, -15]}>
        <sphereGeometry args={[2.5, 16, 12]} />
        <meshBasicMaterial color="#dde8f8" />
      </mesh>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PHYSICS CHARACTER CONTROLLER
══════════════════════════════════════════════════════════════════ */
function PhysicsKobe({
  dogRef,
  onNearNpc,
  onMovingChange,
}: {
  dogRef: React.RefObject<DogHandle>;
  onNearNpc: (id: string | null) => void;
  onMovingChange: (m: boolean, r: boolean) => void;
}) {
  const keys      = useControls();
  const { camera } = useThree();
  const { world } = useRapier();

  const bodyRef     = useRef<RapierRigidBody>(null);
  const controllerRef = useRef<ReturnType<typeof world.createCharacterController> | null>(null);

  const dogYaw    = useRef(0);
  const camYaw    = useRef(0);
  const camPitch  = useRef(0.40);
  const camPos    = useRef(new THREE.Vector3(0, 3, 9));
  const camShake  = useRef(0);
  const prevNear  = useRef<string | null>(null);
  const velXZ     = useRef(new THREE.Vector2());

  useEffect(() => {
    const c = world.createCharacterController(0.02);
    c.setUp({ x: 0, y: 1, z: 0 });
    c.setMaxSlopeClimbAngle(0.8);
    c.setMinSlopeSlideAngle(0.4);
    c.enableAutostep(0.45, 0.2, true);
    c.enableSnapToGround(0.5);
    controllerRef.current = c;
    return () => { if (controllerRef.current) world.removeCharacterController(controllerRef.current); };
  }, [world]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!document.pointerLockElement) return;
      camYaw.current  -= e.movementX * 0.0038;
      camPitch.current = THREE.MathUtils.clamp(camPitch.current - e.movementY * 0.0028, 0.08, 0.82);
    };
    document.addEventListener("mousemove", onMove);
    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  useFrame((_, delta) => {
    const body = bodyRef.current;
    const controller = controllerRef.current;
    if (!body || !controller) return;

    const k = keys.current;
    const maxSpeed = k.run ? 8 : 4;

    const moveX = (k.right ? 1 : 0) - (k.left ? 1 : 0);
    const moveZ = (k.backward ? 1 : 0) - (k.forward ? 1 : 0);
    const wantsMove = moveX !== 0 || moveZ !== 0;

    const dir = new THREE.Vector3(moveX, 0, moveZ);
    if (wantsMove) dir.normalize().applyEuler(new THREE.Euler(0, camYaw.current, 0));

    const targetVel = new THREE.Vector2(dir.x, dir.z).multiplyScalar(maxSpeed);
    velXZ.current.lerp(targetVel, delta * (wantsMove ? 9 : 14));

    // Gravity + movement
    const movement = { x: velXZ.current.x * delta, y: -12 * delta, z: velXZ.current.y * delta };

    const collider = body.collider(0);
    controller.computeColliderMovement(collider, movement, undefined, undefined);
    const corrected = controller.computedMovement();
    const pos = body.translation();
    const clamped = {
      x: THREE.MathUtils.clamp(pos.x + corrected.x, -23, 23),
      y: pos.y + corrected.y,
      z: THREE.MathUtils.clamp(pos.z + corrected.z, -23, 23),
    };
    body.setNextKinematicTranslation(clamped);

    const worldPos = new THREE.Vector3(clamped.x, clamped.y, clamped.z);
    const isMoving  = velXZ.current.length() > 0.12;
    const isRunning = k.run && isMoving;
    onMovingChange(isMoving, isRunning);

    // Dog faces movement direction
    if (isMoving) {
      const targetYaw = Math.atan2(velXZ.current.x, velXZ.current.y);
      dogYaw.current  = THREE.MathUtils.lerp(dogYaw.current, targetYaw, delta * 10);
    }
    const dog = dogRef.current?.group;
    if (dog) { dog.position.copy(worldPos); dog.rotation.y = dogYaw.current; }

    // Spring follow camera with run shake
    camShake.current = THREE.MathUtils.lerp(camShake.current, isRunning ? 0.018 : 0, delta * 6);
    const dist  = 6.4;
    const hDist = dist * Math.cos(camPitch.current);
    const shake = { x: (Math.random() - 0.5) * camShake.current, y: (Math.random() - 0.5) * camShake.current };
    const targetCam = new THREE.Vector3(
      worldPos.x + Math.sin(camYaw.current) * hDist + shake.x,
      worldPos.y + dist * Math.sin(camPitch.current) + shake.y,
      worldPos.z + Math.cos(camYaw.current) * hDist,
    );
    camPos.current.lerp(targetCam, delta * 6);
    camera.position.copy(camPos.current);
    camera.lookAt(worldPos.x, worldPos.y + 0.7, worldPos.z);

    // NPC proximity
    const near = NPC_DOGS.find(n => {
      const dx = worldPos.x - n.position[0], dz = worldPos.z - n.position[2];
      return dx*dx + dz*dz < 9;
    });
    const nearId = near?.id ?? null;
    if (nearId !== prevNear.current) { prevNear.current = nearId; onNearNpc(nearId); }
  });

  return (
    <RigidBody ref={bodyRef} type="kinematicPosition" position={[0, 1, 5]} colliders={false}>
      <CapsuleCollider args={[0.32, 0.42]} position={[0, 0.74, 0]} />
    </RigidBody>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   GAME SCENE
══════════════════════════════════════════════════════════════════ */
function GameScene({
  onNearNpc,
  onBoneFound,
}: {
  onNearNpc: (id: string | null) => void;
  onBoneFound: () => void;
}) {
  const dogRef = useRef<DogHandle>(null);
  const [moving,  setMoving]  = useState(false);
  const [running, setRunning] = useState(false);
  const [nearNpc, setNear]    = useState<string | null>(null);

  const handleMoving = useCallback((m: boolean, r: boolean) => { setMoving(m); setRunning(r); }, []);
  const handleNear   = useCallback((id: string | null) => { setNear(id); onNearNpc(id); }, [onNearNpc]);

  return (
    <>
      <DayNightCycle />
      <Stars radius={90} depth={50} count={1400} factor={3} fade />

      <Physics gravity={[0, -20, 0]}>
        <World nearbyNpcId={nearNpc} onBoneFound={onBoneFound} />
        <Dog ref={dogRef} moving={moving} running={running} />
        <PhysicsKobe dogRef={dogRef} onNearNpc={handleNear} onMovingChange={handleMoving} />
      </Physics>

      {/* Bloom postprocessing */}
      <EffectComposer>
        <Bloom luminanceThreshold={0.55} luminanceSmoothing={0.9} intensity={1.4} radius={0.85} />
        <Vignette offset={0.28} darkness={0.62} />
      </EffectComposer>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   DIALOGUE PANEL
══════════════════════════════════════════════════════════════════ */
interface Message { from: "user" | "npc"; text: string; }

function DialoguePanel({ npc, onClose }: { npc: NpcConfig; onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([{ from: "npc", text: npc.intro }]);
  const [asked, setAsked] = useState<Set<number>>(new Set());
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  const ask = (qa: QA, idx: number) => {
    setAsked(prev => new Set(prev).add(idx));
    setMessages(prev => [...prev, { from: "user", text: qa.q }, { from: "npc", text: qa.a }]);
  };

  const sp: React.CSSProperties = { fontFamily: "'Space Grotesk', sans-serif" };

  return (
    <div style={{ position:"absolute", inset:0, background:"rgba(0,0,0,0.62)", backdropFilter:"blur(4px)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:30 }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} style={{ ...sp, width:"min(520px, calc(100vw - 24px))", maxHeight:"82vh", display:"flex", flexDirection:"column", borderRadius:16, background:"rgba(6,8,20,0.94)", border:`1px solid ${npc.accentColor}44`, boxShadow:`0 0 60px ${npc.accentColor}22, 0 12px 48px rgba(0,0,0,0.7)`, overflow:"hidden" }}>
        <div style={{ padding:"14px 18px", borderBottom:"1px solid rgba(255,255,255,0.08)", display:"flex", alignItems:"center", justifyContent:"space-between", background:`${npc.accentColor}10` }}>
          <div>
            <div style={{ fontFamily:"'Bangers', cursive", fontSize:22, letterSpacing:"0.07em", color:npc.accentColor }}>{npc.name}</div>
            <div style={{ fontSize:11, color:"rgba(255,255,255,0.4)", marginTop:1 }}>{npc.breed}</div>
          </div>
          <button onClick={onClose} style={{ background:"rgba(255,255,255,0.07)", border:"1px solid rgba(255,255,255,0.12)", borderRadius:7, color:"rgba(255,255,255,0.5)", cursor:"pointer", padding:"3px 10px", fontSize:12 }}>Esc</button>
        </div>
        <div style={{ flex:1, overflowY:"auto", padding:"14px 16px", display:"flex", flexDirection:"column", gap:10 }}>
          {messages.map((m, i) => (
            <div key={i} style={{ display:"flex", justifyContent:m.from==="user"?"flex-end":"flex-start" }}>
              <div style={{ maxWidth:"84%", padding:"9px 13px", borderRadius:m.from==="user"?"12px 12px 3px 12px":"12px 12px 12px 3px", background:m.from==="user"?`linear-gradient(135deg, ${npc.accentColor}44, ${npc.accentColor}28)`:"rgba(255,255,255,0.07)", border:`1px solid ${m.from==="user"?npc.accentColor+"44":"rgba(255,255,255,0.08)"}`, fontSize:13, lineHeight:1.65, color:m.from==="user"?npc.accentColor:"rgba(255,255,255,0.85)" }}>
                {m.text}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>
        <div style={{ padding:"12px 16px", borderTop:"1px solid rgba(255,255,255,0.08)", display:"flex", flexDirection:"column", gap:6 }}>
          <div style={{ fontSize:10, color:"rgba(255,255,255,0.3)", letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:2 }}>Ask a question</div>
          {npc.qa.map((qa, i) => (
            <button key={i} onClick={() => ask(qa, i)} disabled={asked.has(i)}
              style={{ textAlign:"left", padding:"8px 12px", borderRadius:8, background:asked.has(i)?"rgba(255,255,255,0.03)":`${npc.accentColor}12`, border:`1px solid ${asked.has(i)?"rgba(255,255,255,0.06)":npc.accentColor+"33"}`, color:asked.has(i)?"rgba(255,255,255,0.28)":"rgba(255,255,255,0.82)", fontSize:12, cursor:asked.has(i)?"default":"pointer", transition:"all 0.15s", fontFamily:"'Space Grotesk', sans-serif" }}
              onMouseEnter={e=>{ if(!asked.has(i)) e.currentTarget.style.background=`${npc.accentColor}22`; }}
              onMouseLeave={e=>{ if(!asked.has(i)) e.currentTarget.style.background=`${npc.accentColor}12`; }}>
              {asked.has(i) ? `✓  ${qa.q}` : `›  ${qa.q}`}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   HUD
══════════════════════════════════════════════════════════════════ */
function HUD({ nearId, openNpc, locked, boneFound, onOpen, onClose, onLock }: {
  nearId: string | null; openNpc: NpcConfig | null; locked: boolean;
  boneFound: boolean; onOpen: (id: string) => void; onClose: () => void; onLock: () => void;
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

  return (
    <>
      {!locked && !openNpc && (
        <div onClick={onLock} style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", background:"rgba(0,0,0,0.45)", backdropFilter:"blur(3px)", zIndex:25, cursor:"pointer" }}>
          <div style={{ ...sp, textAlign:"center", padding:"22px 36px", borderRadius:14, background:"rgba(6,8,20,0.9)", border:"1px solid rgba(255,255,255,0.12)" }}>
            <div style={{ fontFamily:"'Bangers', cursive", fontSize:28, letterSpacing:"0.08em", color:"white", marginBottom:6 }}>Click to Play</div>
            <div style={{ fontSize:12, color:"rgba(255,255,255,0.45)" }}>Captures mouse — press Esc to release</div>
          </div>
        </div>
      )}

      {locked && !openNpc && (
        <div style={{ position:"absolute", bottom:20, left:"50%", transform:"translateX(-50%)", display:"flex", gap:8 }}>
          {[["WASD","Move"],["Mouse","Look"],["Shift","Run"],...(nearId?[["E","Talk"]]:[])]
            .map(([k,v]) => (
              <span key={k} style={{ ...sp, display:"flex", alignItems:"center", gap:5, padding:"4px 10px", background:k==="E"?"rgba(255,200,80,0.2)":"rgba(0,0,0,0.4)", border:`1px solid ${k==="E"?"rgba(255,200,80,0.45)":"rgba(255,255,255,0.12)"}`, borderRadius:6, backdropFilter:"blur(6px)", fontSize:11, color:k==="E"?"#ffe066":"rgba(255,255,255,0.55)", animation:k==="E"?"pulse 1.2s infinite":"none" }}>
                <kbd style={{ fontFamily:"monospace", fontSize:10, background:"rgba(255,255,255,0.1)", padding:"1px 5px", borderRadius:3 }}>{k}</kbd>{v}
              </span>
            ))}
        </div>
      )}

      {/* Easter egg toast */}
      {boneFound && (
        <div style={{ ...sp, position:"absolute", top:24, left:"50%", transform:"translateX(-50%)", padding:"10px 20px", borderRadius:10, background:"rgba(255,220,80,0.15)", border:"1px solid rgba(255,220,80,0.4)", color:"#ffe066", fontSize:13, backdropFilter:"blur(6px)", animation:"fadeInDown 0.4s ease" }}>
          Kobe found a hidden bone! Good boy.
        </div>
      )}

      {openNpc && <DialoguePanel npc={openNpc} onClose={onClose} />}

      <style>{`
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:.5}}
        @keyframes fadeInDown{from{opacity:0;transform:translateX(-50%) translateY(-10px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}
      `}</style>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   ENTRY
══════════════════════════════════════════════════════════════════ */
export default function KobeGame() {
  const [nearId,    setNearId]    = useState<string | null>(null);
  const [openNpc,   setOpenNpc]   = useState<NpcConfig | null>(null);
  const [locked,    setLocked]    = useState(false);
  const [boneFound, setBoneFound] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onChange = () => setLocked(!!document.pointerLockElement);
    document.addEventListener("pointerlockchange", onChange);
    return () => document.removeEventListener("pointerlockchange", onChange);
  }, []);

  useEffect(() => { if (openNpc && document.pointerLockElement) document.exitPointerLock(); }, [openNpc]);

  const handleBone = useCallback(() => {
    setBoneFound(true);
    setTimeout(() => setBoneFound(false), 4000);
  }, []);

  return (
    <div ref={wrapRef} style={{ width:"100%", height:"100vh", position:"relative" }}>
      <Canvas
        shadows
        camera={{ position:[0,3,9], fov:62, near:0.1, far:250 }}
        gl={{ antialias:true, toneMapping:THREE.ACESFilmicToneMapping, toneMappingExposure:1.05 }}
        onClick={() => { if (!locked) wrapRef.current?.requestPointerLock(); }}
      >
        <GameScene onNearNpc={setNearId} onBoneFound={handleBone} />
      </Canvas>
      <HUD
        nearId={nearId} openNpc={openNpc} locked={locked} boneFound={boneFound}
        onOpen={id => { const n = NPC_DOGS.find(d => d.id === id); if (n) setOpenNpc(n); }}
        onClose={() => setOpenNpc(null)}
        onLock={() => wrapRef.current?.requestPointerLock()}
      />
    </div>
  );
}
