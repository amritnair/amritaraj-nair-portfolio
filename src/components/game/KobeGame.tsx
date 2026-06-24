import { useRef, useState, useEffect, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { Physics, RigidBody, CapsuleCollider, type RapierRigidBody, useRapier } from "@react-three/rapier";
// @ts-ignore — low-level default export accepts an optional URL
import initRapierWasm from "@dimforge/rapier3d-compat/rapier_wasm3d";

/* Start WASM load immediately at module level with the correct public path.
   Physics won't mount until this Promise resolves (guarded in KobeGame). */
const rapierReady: Promise<unknown> = initRapierWasm(
  `${import.meta.env.BASE_URL}rapier_wasm3d_bg.wasm`
);
import * as THREE from "three";
import { Dog, DogHandle } from "./Dog";
import { WorldEnvironment, WorldColliders } from "./World";
import { NPC_DOGS, type NpcConfig, type QA } from "./npcData";
import { useControls } from "./useControls";
import { GROUND_Y } from "./zeldaStyle";

/* ═══════════════════════════════════════════════════════════════════
   SKY / DAY-NIGHT CYCLE
══════════════════════════════════════════════════════════════════ */
function lerpHex(a: string, b: string, t: number): string {
  const h = (s: string) => [parseInt(s.slice(1,3),16), parseInt(s.slice(3,5),16), parseInt(s.slice(5,7),16)];
  const [ar,ag,ab] = h(a), [br,bg,bb] = h(b);
  const rr = Math.round(ar+(br-ar)*t), gr = Math.round(ag+(bg-ag)*t), bv = Math.round(ab+(bb-ab)*t);
  return `#${rr.toString(16).padStart(2,'0')}${gr.toString(16).padStart(2,'0')}${bv.toString(16).padStart(2,'0')}`;
}

/* Gentle sky — stays readable at every hour */
const SKY_KEYS = [
  { t:0.00, zenith:"#283858", horiz:"#3a5070" },
  { t:0.15, zenith:"#385878", horiz:"#506888" },
  { t:0.22, zenith:"#5888a8", horiz:"#c08860" },
  { t:0.28, zenith:"#68a0c8", horiz:"#d8a878" },
  { t:0.36, zenith:"#78b8e0", horiz:"#b8d8f0" },
  { t:0.50, zenith:"#68b0e0", horiz:"#c0e0f8" },
  { t:0.64, zenith:"#68a8d8", horiz:"#b0d8f0" },
  { t:0.72, zenith:"#5888b8", horiz:"#c89868" },
  { t:0.78, zenith:"#4868a0", horiz:"#a87858" },
  { t:0.86, zenith:"#384878", horiz:"#506080" },
  { t:1.00, zenith:"#283858", horiz:"#3a5070" },
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

const DAY_DURATION = 720; // 12 min per full cycle
const DAY_START    = 0.42; // start near midday

function DayNightCycle() {
  const { scene } = useThree();
  const skyCanvas = useRef(document.createElement("canvas"));
  const skyTex    = useRef<THREE.CanvasTexture | null>(null);
  const dayTime   = useRef(DAY_START);
  const sunLight  = useRef<THREE.DirectionalLight>(null);
  const ambLight  = useRef<THREE.AmbientLight>(null);
  const hemiLight = useRef<THREE.HemisphereLight>(null);
  const moonLight = useRef<THREE.DirectionalLight>(null);
  const sunMesh   = useRef<THREE.Mesh>(null);
  const moonMesh  = useRef<THREE.Mesh>(null);
  const sunGlow   = useRef<THREE.PointLight>(null);

  useEffect(() => {
    const c = skyCanvas.current; c.width = 4; c.height = 512;
    const tex = new THREE.CanvasTexture(c);
    tex.mapping = THREE.EquirectangularReflectionMapping;
    skyTex.current = tex; scene.background = tex;
    scene.fog = new THREE.Fog("#88b8d8", 60, 180);
    return () => { tex.dispose(); scene.background = null; scene.fog = null; };
  }, [scene]);

  useFrame((_, delta) => {
    dayTime.current = (dayTime.current + delta / DAY_DURATION) % 1;
    const t = dayTime.current;
    const sunAngle = (t - 0.25) * Math.PI * 2;
    const sunX = Math.cos(sunAngle) * 85;
    const sunY = Math.sin(sunAngle) * 70;
    const sunElev  = Math.max(0, sunY / 70);
    const moonElev = Math.max(0, -sunY / 70);
    const dayBlend = THREE.MathUtils.smoothstep(sunElev, 0, 0.35);

    if (sunMesh.current) {
      sunMesh.current.position.set(sunX, sunY, -15);
      sunMesh.current.visible = sunElev > 0.02;
      (sunMesh.current.material as THREE.MeshBasicMaterial).color.set(
        sunElev < 0.2 ? lerpHex("#e8a060", "#fff8e8", sunElev / 0.2) : "#fff8e8"
      );
    }
    if (sunGlow.current) {
      sunGlow.current.position.set(sunX, sunY, -15);
      sunGlow.current.intensity = sunElev > 0 ? sunElev * 1.2 : 0;
    }
    const moonX = -sunX * 0.85, moonY = -sunY * 0.85;
    if (moonMesh.current) {
      moonMesh.current.position.set(moonX, moonY, -15);
      moonMesh.current.visible = moonElev > 0.02;
    }
    if (moonLight.current) {
      moonLight.current.position.set(moonX, moonY, -15);
      moonLight.current.intensity = THREE.MathUtils.lerp(0.35, 1.1, moonElev);
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
      sunLight.current.intensity = THREE.MathUtils.lerp(0.15, 1.6, dayBlend);
      sunLight.current.color.set(
        sunElev < 0.25 && sunElev > 0
          ? lerpHex("#d89050", "#fff0d8", sunElev / 0.25)
          : "#fff0d8"
      );
    }
    if (ambLight.current) {
      ambLight.current.intensity = THREE.MathUtils.lerp(0.48, 0.62, dayBlend);
      ambLight.current.color.set(
        THREE.MathUtils.lerp(0, 1, dayBlend) < 0.5
          ? lerpHex("#8090b0", "#c0d0e0", moonElev)
          : lerpHex("#c0d0e0", "#f0e8d8", dayBlend)
      );
    }
    if (hemiLight.current) {
      hemiLight.current.color.set(lerpHex("#6888b0", "#a0c8f0", dayBlend));
      hemiLight.current.groundColor.set(lerpHex("#283820", "#3a5828", dayBlend));
      hemiLight.current.intensity = THREE.MathUtils.lerp(0.38, 0.52, dayBlend);
    }
    if (scene.fog) {
      (scene.fog as THREE.Fog).color.set(sampleSky(t).horiz);
    }
  });

  return (
    <>
      <ambientLight ref={ambLight} intensity={0.55} />
      <directionalLight ref={sunLight} position={[30, 40, -15]} intensity={1.4} castShadow
        shadow-mapSize={[2048, 2048]} shadow-camera-far={80}
        shadow-camera-left={-32} shadow-camera-right={32}
        shadow-camera-top={32}   shadow-camera-bottom={-32} />
      <directionalLight ref={moonLight} position={[-30, 40, -15]} intensity={0.6} color="#b0c8e8" />
      <hemisphereLight ref={hemiLight} args={["#88b8d8", "#3a5828", 0.45]} />
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

    const dt = Math.min(delta, 0.05);
    const damp = (c: number, t: number, l: number) => THREE.MathUtils.lerp(c, t, 1 - Math.exp(-l * dt));

    const targetVel = new THREE.Vector2(dir.x, dir.z).multiplyScalar(maxSpeed);
    velXZ.current.x = damp(velXZ.current.x, targetVel.x, wantsMove ? 8 : 12);
    velXZ.current.y = damp(velXZ.current.y, targetVel.y, wantsMove ? 8 : 12);

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
      dogYaw.current = damp(dogYaw.current, targetYaw, 14);
    }
    const dog = dogRef.current?.group;
    if (dog) {
      dog.position.set(worldPos.x, worldPos.y, worldPos.z);
      dog.rotation.set(0, dogYaw.current + Math.PI, 0);
    }

    // Smooth spring camera follow
    camShake.current = damp(camShake.current, isRunning ? 0.012 : 0, 5);
    const dist  = 6.2;
    const hDist = dist * Math.cos(camPitch.current);
    const shake = { x: (Math.random() - 0.5) * camShake.current, y: (Math.random() - 0.5) * camShake.current };
    const targetCam = new THREE.Vector3(
      worldPos.x + Math.sin(camYaw.current) * hDist + shake.x,
      worldPos.y + dist * Math.sin(camPitch.current) + 0.7 + shake.y,
      worldPos.z + Math.cos(camYaw.current) * hDist,
    );
    camPos.current.x = damp(camPos.current.x, targetCam.x, 5.5);
    camPos.current.y = damp(camPos.current.y, targetCam.y, 5.5);
    camPos.current.z = damp(camPos.current.z, targetCam.z, 5.5);
    camera.position.copy(camPos.current);
    camera.lookAt(worldPos.x, worldPos.y + 0.75, worldPos.z);

    // NPC proximity
    const near = NPC_DOGS.find(n => {
      const dx = worldPos.x - n.position[0], dz = worldPos.z - n.position[2];
      return dx*dx + dz*dz < 9;
    });
    const nearId = near?.id ?? null;
    if (nearId !== prevNear.current) { prevNear.current = nearId; onNearNpc(nearId); }
  });

  return (
    <RigidBody ref={bodyRef} type="kinematicPosition" position={[0, GROUND_Y, 5]} colliders={false}>
      <CapsuleCollider args={[0.3, 0.4]} position={[0, 0, 0]} />
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
      <Stars radius={90} depth={50} count={800} factor={2} fade />

      {/* Visuals outside physics — guarantees meshes always render */}
      <WorldEnvironment nearbyNpcId={nearNpc} onBoneFound={onBoneFound} />

      <Physics gravity={[0, -20, 0]} timeStep="vary">
        <WorldColliders />
        <Dog ref={dogRef} moving={moving} running={running} />
        <PhysicsKobe dogRef={dogRef} onNearNpc={handleNear} onMovingChange={handleMoving} />
      </Physics>
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
    <div style={{ position:"absolute", inset:0, background:"rgba(10,20,10,0.55)", backdropFilter:"blur(3px)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:30 }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} style={{ ...sp, width:"min(520px, calc(100vw - 24px))", maxHeight:"82vh", display:"flex", flexDirection:"column", borderRadius:4, background:"linear-gradient(180deg, #f0e4c8 0%, #e0d0a8 100%)", border:"4px solid #6b4220", boxShadow:"0 0 0 2px #a06830, 0 12px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.3)", overflow:"hidden" }}>
        <div style={{ padding:"14px 18px", borderBottom:"3px solid #6b4220", display:"flex", alignItems:"center", justifyContent:"space-between", background:"linear-gradient(180deg, #d8c090 0%, #c8a870 100%)" }}>
          <div>
            <div style={{ fontFamily:"'Bangers', cursive", fontSize:24, letterSpacing:"0.06em", color:"#3a2810", textShadow:"0 1px 0 rgba(255,255,255,0.3)" }}>{npc.name}</div>
            <div style={{ fontSize:11, color:"#5a4020", marginTop:2, fontWeight:600 }}>{npc.breed}</div>
          </div>
          <button onClick={onClose} style={{ background:"#c8a870", border:"2px solid #6b4220", borderRadius:4, color:"#3a2810", cursor:"pointer", padding:"4px 12px", fontSize:12, fontWeight:700 }}>Esc</button>
        </div>
        <div style={{ flex:1, overflowY:"auto", padding:"14px 16px", display:"flex", flexDirection:"column", gap:10, background:"#f0e4c8" }}>
          {messages.map((m, i) => (
            <div key={i} style={{ display:"flex", justifyContent:m.from==="user"?"flex-end":"flex-start" }}>
              <div style={{ maxWidth:"84%", padding:"10px 14px", borderRadius:4, background:m.from==="user"?"#d8e8c0":"#fff8e8", border:`2px solid ${m.from==="user"?"#5a8838":"#c8b888"}`, fontSize:13, lineHeight:1.65, color:"#2a2010", boxShadow:"inset 0 1px 0 rgba(255,255,255,0.4)" }}>
                {m.text}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>
        <div style={{ padding:"12px 16px", borderTop:"3px solid #6b4220", display:"flex", flexDirection:"column", gap:6, background:"#e8d8b0" }}>
          <div style={{ fontSize:10, color:"#5a4020", letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:2, fontWeight:700 }}>Ask a question</div>
          {npc.qa.map((qa, i) => (
            <button key={i} onClick={() => ask(qa, i)} disabled={asked.has(i)}
              style={{ textAlign:"left", padding:"8px 12px", borderRadius:4, background:asked.has(i)?"#d8c8a0":"#fff8e8", border:`2px solid ${asked.has(i)?"#a09070":"#6b4220"}`, color:asked.has(i)?"#8a7860":"#2a2010", fontSize:12, cursor:asked.has(i)?"default":"pointer", transition:"all 0.15s", fontFamily:"'Space Grotesk', sans-serif", fontWeight: asked.has(i)?400:600 }}
              onMouseEnter={e=>{ if(!asked.has(i)) e.currentTarget.style.background="#f0e8c8"; }}
              onMouseLeave={e=>{ if(!asked.has(i)) e.currentTarget.style.background="#fff8e8"; }}>
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
        <div onClick={onLock} style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", background:"rgba(10,30,10,0.4)", backdropFilter:"blur(2px)", zIndex:25, cursor:"pointer" }}>
          <div style={{ ...sp, textAlign:"center", padding:"24px 40px", borderRadius:4, background:"linear-gradient(180deg, #f0e4c8, #e0d0a8)", border:"4px solid #6b4220", boxShadow:"0 4px 0 #804010, 0 12px 32px rgba(0,0,0,0.3)" }}>
            <div style={{ fontFamily:"'Bangers', cursive", fontSize:28, letterSpacing:"0.06em", color:"#3a2810", marginBottom:8 }}>Click to Play</div>
            <div style={{ fontSize:12, color:"#5a4020" }}>Captures mouse — press Esc to release</div>
          </div>
        </div>
      )}

      {locked && !openNpc && (
        <div style={{ position:"absolute", bottom:20, left:"50%", transform:"translateX(-50%)", display:"flex", gap:8 }}>
          {[["WASD","Move"],["Mouse","Look"],["Shift","Run"],...(nearId?[["E","Talk"]]:[])]
            .map(([k,v]) => (
              <span key={k} style={{ ...sp, display:"flex", alignItems:"center", gap:5, padding:"5px 12px", background:"linear-gradient(180deg, #f0e4c8, #e0d0a8)", border:"2px solid #6b4220", borderRadius:4, fontSize:11, color:"#3a2810", fontWeight:600, animation:k==="E"?"pulse 1.2s infinite":"none", boxShadow:"0 2px 0 #804010" }}>
                <kbd style={{ fontFamily:"monospace", fontSize:10, background:"#d8c8a0", padding:"2px 6px", borderRadius:3, border:"1px solid #a08050" }}>{k}</kbd>{v}
              </span>
            ))}
        </div>
      )}

      {boneFound && (
        <div style={{ ...sp, position:"absolute", top:24, left:"50%", transform:"translateX(-50%)", padding:"10px 20px", borderRadius:4, background:"linear-gradient(180deg, #fff8c0, #ffe880)", border:"3px solid #c87820", color:"#3a2810", fontSize:13, fontWeight:600, animation:"fadeInDown 0.4s ease", boxShadow:"0 4px 0 #a05810" }}>
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
  const [wasmReady, setWasmReady] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    rapierReady.then(() => setWasmReady(true)).catch(() => setWasmReady(true));
  }, []);

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
        gl={{ antialias:true, toneMapping:THREE.ACESFilmicToneMapping, toneMappingExposure:1.15 }}
        onClick={() => { if (!locked) wrapRef.current?.requestPointerLock(); }}
      >
        {wasmReady && <GameScene onNearNpc={setNearId} onBoneFound={handleBone} />}
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
