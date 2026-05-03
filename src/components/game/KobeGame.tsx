import { useRef, useState, useEffect, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";
import { Dog, DogHandle } from "./Dog";
import { World, SIGNS } from "./World";
import { useControls } from "./useControls";

/* ── Gradient sky backdrop ────────────────────────────────────────── */
function GradientSky() {
  const { scene } = useThree();
  useEffect(() => {
    // Sunset gradient texture painted onto a sphere
    const canvas = document.createElement("canvas");
    canvas.width = 4; canvas.height = 256;
    const ctx = canvas.getContext("2d")!;
    const grad = ctx.createLinearGradient(0, 0, 0, 256);
    grad.addColorStop(0.00, "#0b0d2a"); // zenith — deep indigo night
    grad.addColorStop(0.18, "#1a1060"); // upper sky
    grad.addColorStop(0.38, "#7b2d8b"); // purple band
    grad.addColorStop(0.55, "#c0392b"); // deep red horizon
    grad.addColorStop(0.68, "#e8621a"); // orange
    grad.addColorStop(0.80, "#f7a030"); // warm amber
    grad.addColorStop(0.92, "#ffd580"); // pale gold at ground
    grad.addColorStop(1.00, "#ffeaa0");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 4, 256);
    const texture = new THREE.CanvasTexture(canvas);
    texture.mapping = THREE.EquirectangularReflectionMapping;
    scene.background = texture;
    return () => { texture.dispose(); };
  }, [scene]);
  return null;
}

/* ── Sign panel content ───────────────────────────────────────────── */
function AboutPanel() {
  const facts = [
    { label: "🎓 Education",    detail: "B.S. Computer Science + Mathematics at Texas A&M University. President's Endowed Scholar. Expected May 2027." },
    { label: "🔬 Research",     detail: "Outstanding Undergraduate Researcher — working on machine learning systems, computer vision, and agent architectures." },
    { label: "🏆 Hackathons",   detail: "Hook'em Hacks 2026: Startup Ready Award. TidalTAMU: Google Gemini Track 1st Place. Google Labs Makeathon participant." },
    { label: "🚀 Startup",      detail: "Co-founded MagNet Agents — an AI agent platform backed by Cornell. Building tools that let anyone deploy intelligent workflows." },
    { label: "📈 Quant Dev",    detail: "Quantitative Developer at a $70K AUM student-run investment fund. Built alpha-generation tools and backtesting infrastructure." },
    { label: "🎤 Pitching",     detail: "Pitched a computer vision app at McCombs School of Business. Demo'd to Pear VC (Y Combinator-affiliated seed fund)." },
  ];
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      <h2 style={{ fontFamily: "'Bangers', cursive", fontSize: 30, letterSpacing: "0.06em", color: "#7dd3fc", marginBottom: 12 }}>About Me</h2>
      <p style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", marginBottom: 14, lineHeight: 1.6 }}>
        CS + Math @ Texas A&M. I build AI systems, quant tools, and products that win hackathons.
        Tap any card to learn more.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {facts.map((f, i) => (
          <div
            key={i}
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              padding: open === i ? "10px 12px" : "8px 12px",
              borderRadius: 8,
              background: open === i ? "rgba(125,211,252,0.12)" : "rgba(255,255,255,0.05)",
              border: `1px solid ${open === i ? "rgba(125,211,252,0.35)" : "rgba(255,255,255,0.08)"}`,
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            <div style={{ fontSize: 13, fontWeight: 600, color: open === i ? "#7dd3fc" : "rgba(255,255,255,0.85)" }}>
              {f.label}
            </div>
            {open === i && (
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", marginTop: 6, lineHeight: 1.65 }}>
                {f.detail}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectsPanel() {
  const projects = [
    {
      name: "MagNet Agents",
      tag: "AI Startup",
      color: "#4ade80",
      stack: "Python · LangChain · React",
      desc: "Cornell-backed AI agent platform. Users can design, deploy, and chain intelligent agents without writing code. Backed through the eLab accelerator.",
    },
    {
      name: "AlphaForge",
      tag: "Quant",
      color: "#f9c74f",
      stack: "Python · Pandas · TA-Lib · React",
      desc: "Drag-and-drop quantitative strategy builder. Think Robinhood meets Scratch for algo trading. Users build, backtest, and simulate strategies visually.",
    },
    {
      name: "Shot Sensei",
      tag: "Computer Vision",
      color: "#f3722c",
      stack: "Python · OpenCV · MediaPipe · React",
      desc: "AI pickleball coach that uses pose estimation to analyze your swing, shot mechanics, and footwork in real time via webcam.",
    },
    {
      name: "TidalTAMU",
      tag: "🥇 1st Place",
      color: "#a855f7",
      stack: "Python · Gemini API · Next.js",
      desc: "Won Google Gemini Track at TidalTAMU 2025. Built an AI-powered environmental monitoring system that predicts harmful algal bloom events.",
    },
    {
      name: "Hook'em Hacks",
      tag: "Startup Ready Award",
      color: "#fb923c",
      stack: "React · Node · OpenAI",
      desc: "Hook'em Hacks 2026 — Startup Ready Award. Rapid prototype that impressed judges with its market-ready product angle and execution.",
    },
  ];
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      <h2 style={{ fontFamily: "'Bangers', cursive", fontSize: 30, letterSpacing: "0.06em", color: "#86efac", marginBottom: 12 }}>Projects</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
        {projects.map((p, i) => (
          <div
            key={i}
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              padding: open === i ? "10px 12px" : "8px 12px",
              borderRadius: 8,
              background: open === i ? `${p.color}18` : "rgba(255,255,255,0.05)",
              border: `1px solid ${open === i ? `${p.color}55` : "rgba(255,255,255,0.08)"}`,
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 7px", borderRadius: 20, background: `${p.color}28`, color: p.color, letterSpacing: "0.05em" }}>
                {p.tag}
              </span>
              <span style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.9)" }}>{p.name}</span>
            </div>
            {open === i && (
              <>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 5, fontFamily: "monospace" }}>{p.stack}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.72)", marginTop: 5, lineHeight: 1.6 }}>{p.desc}</div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactPanel() {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText("amritnair23@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const links = [
    {
      label: "Send Email",
      icon: "✉️",
      desc: "amritnair23@gmail.com",
      color: "#fbbf24",
      action: () => window.open("mailto:amritnair23@gmail.com", "_blank"),
    },
    {
      label: "LinkedIn",
      icon: "💼",
      desc: "/in/amritaraj-nair-227063313",
      color: "#60a5fa",
      action: () => window.open("https://www.linkedin.com/in/amritaraj-nair-227063313", "_blank"),
    },
    {
      label: "GitHub",
      icon: "🐙",
      desc: "github.com/amritnair",
      color: "#a78bfa",
      action: () => window.open("https://github.com/amritnair", "_blank"),
    },
  ];
  return (
    <div style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      <h2 style={{ fontFamily: "'Bangers', cursive", fontSize: 30, letterSpacing: "0.06em", color: "#fcd34d", marginBottom: 6 }}>Contact</h2>
      <p style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", marginBottom: 14, lineHeight: 1.6 }}>
        Open to roles, collabs, and coffee chats. Reach out!
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {links.map((l, i) => (
          <button
            key={i}
            onClick={l.action}
            style={{
              display: "flex", alignItems: "center", gap: 12,
              padding: "12px 14px",
              borderRadius: 10,
              background: `${l.color}18`,
              border: `1px solid ${l.color}44`,
              cursor: "pointer",
              textAlign: "left",
              transition: "all 0.18s",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = `${l.color}28`)}
            onMouseLeave={e => (e.currentTarget.style.background = `${l.color}18`)}
          >
            <span style={{ fontSize: 22 }}>{l.icon}</span>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: l.color }}>{l.label}</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", fontFamily: "monospace" }}>{l.desc}</div>
            </div>
            <span style={{ marginLeft: "auto", fontSize: 16, color: l.color, opacity: 0.7 }}>↗</span>
          </button>
        ))}
        {/* Copy email */}
        <button
          onClick={copy}
          style={{
            marginTop: 2,
            padding: "9px 14px",
            borderRadius: 8,
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.12)",
            cursor: "pointer",
            color: "rgba(255,255,255,0.5)",
            fontSize: 11,
            fontFamily: "'Space Grotesk', sans-serif",
            letterSpacing: "0.05em",
          }}
        >
          {copied ? "✓ Copied!" : "Copy email address"}
        </button>
      </div>
    </div>
  );
}

function ResumePanel() {
  const sections = [
    {
      title: "🎓 Education",
      short: "Texas A&M University — B.S. CS + Math",
      color: "#818cf8",
      items: [
        { label: "Degree",    val: "B.S. Computer Science + Mathematics (double major)" },
        { label: "School",    val: "Texas A&M University — Class of 2027" },
        { label: "Honors",    val: "President's Endowed Scholar" },
        { label: "Courses",   val: "Data Structures, Algorithms, Linear Algebra, Probability, ML, Computer Vision" },
      ],
    },
    {
      title: "💼 Experience",
      short: "Quant Dev · MagNet Agents · Research",
      color: "#34d399",
      items: [
        { label: "Quant Developer",      val: "Student-run investment fund ($70K AUM). Built alpha signals, backtesting framework, live data pipelines." },
        { label: "MagNet Agents",        val: "Co-founder. Cornell eLab-backed AI agent startup. Lead engineer — React frontend + Python/LangChain backend." },
        { label: "Undergrad Researcher", val: "Outstanding Undergraduate Researcher award. ML + computer vision research." },
      ],
    },
    {
      title: "🏆 Awards",
      short: "Hackathon wins & academic honors",
      color: "#fbbf24",
      items: [
        { label: "TidalTAMU 2025",    val: "1st Place — Google Gemini Track" },
        { label: "Hook'em Hacks 2026", val: "Startup Ready Award" },
        { label: "Google Labs",        val: "Makeathon participant" },
        { label: "Pear VC",            val: "Pitched at McCombs School of Business" },
        { label: "Scholar",            val: "President's Endowed Scholar — Texas A&M" },
      ],
    },
    {
      title: "🛠 Skills",
      short: "Python · TypeScript · React · ML",
      color: "#f472b6",
      items: [
        { label: "Languages",   val: "Python, TypeScript/JavaScript, C++, SQL, R" },
        { label: "Frameworks",  val: "React, Next.js, Node.js, FastAPI, LangChain" },
        { label: "ML / AI",     val: "PyTorch, TensorFlow, OpenCV, MediaPipe, Scikit-learn" },
        { label: "Tools",       val: "Git, Docker, PostgreSQL, Supabase, Vite, AWS" },
        { label: "Finance",     val: "Pandas, NumPy, TA-Lib, Backtrader, Alpaca API" },
      ],
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      <h2 style={{ fontFamily: "'Bangers', cursive", fontSize: 30, letterSpacing: "0.06em", color: "#c4b5fd", marginBottom: 6 }}>Resume</h2>
      <p style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginBottom: 12 }}>Tap a section to expand. <a href="/#/resume" style={{ color: "#a78bfa" }}>View full resume →</a></p>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {sections.map((s, i) => (
          <div
            key={i}
            style={{
              borderRadius: 9,
              background: open === i ? `${s.color}12` : "rgba(255,255,255,0.04)",
              border: `1px solid ${open === i ? `${s.color}40` : "rgba(255,255,255,0.07)"}`,
              overflow: "hidden",
            }}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                width: "100%",
                padding: "9px 12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer",
                background: "none",
                border: "none",
                textAlign: "left",
              }}
            >
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: open === i ? s.color : "rgba(255,255,255,0.85)" }}>{s.title}</div>
                {open !== i && <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginTop: 1 }}>{s.short}</div>}
              </div>
              <span style={{ color: s.color, opacity: 0.7, fontSize: 16 }}>{open === i ? "▲" : "▼"}</span>
            </button>
            {open === i && (
              <div style={{ padding: "0 12px 10px" }}>
                {s.items.map((item, j) => (
                  <div key={j} style={{ display: "flex", gap: 8, marginBottom: 5 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: s.color, minWidth: 100, flexShrink: 0 }}>{item.label}</span>
                    <span style={{ fontSize: 11, color: "rgba(255,255,255,0.65)", lineHeight: 1.55 }}>{item.val}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const PANELS: Record<string, React.ReactNode> = {
  about:    <AboutPanel />,
  projects: <ProjectsPanel />,
  contact:  <ContactPanel />,
  resume:   <ResumePanel />,
};

/* ── Player controller ────────────────────────────────────────────── */
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
  const yaw      = useRef(0);
  const angVel   = useRef(0);
  const vel      = useRef(new THREE.Vector3());
  const pos      = useRef(new THREE.Vector3(0, 0, 5));
  const camPos   = useRef(new THREE.Vector3(0, 3.2, 10));
  const prevNear = useRef<string | null>(null);

  useFrame((_, delta) => {
    const k = keys.current;
    const maxSpeed = k.run ? 8 : 4;

    // Smooth turning
    const targetAng = k.left ? 2.4 : k.right ? -2.4 : 0;
    angVel.current = THREE.MathUtils.lerp(angVel.current, targetAng, delta * 10);
    yaw.current   += angVel.current * delta;

    // Smooth linear velocity
    const fwd = k.forward ? 1 : k.backward ? -0.45 : 0;
    const dir = new THREE.Vector3(0, 0, -fwd * maxSpeed)
      .applyEuler(new THREE.Euler(0, yaw.current, 0));
    const accel = (k.forward || k.backward) ? 9 : 14; // faster decel
    vel.current.lerp(dir, delta * accel);

    pos.current.addScaledVector(vel.current, delta);
    pos.current.x = THREE.MathUtils.clamp(pos.current.x, -23, 23);
    pos.current.z = THREE.MathUtils.clamp(pos.current.z, -23, 23);

    const isMoving  = vel.current.length() > 0.08;
    const isRunning = k.run && isMoving;
    onMovingChange(isMoving, isRunning);

    // Update dog
    const dog = dogRef.current?.group;
    if (dog) {
      dog.position.copy(pos.current);
      // smooth dog yaw
      const dy = yaw.current - dog.rotation.y;
      dog.rotation.y += dy * Math.min(1, delta * 12);
    }

    // Spring follow camera — sits behind and slightly above dog
    const behind = new THREE.Vector3(0, 2.8, 5.5).applyEuler(new THREE.Euler(0, yaw.current, 0));
    const targetCam = pos.current.clone().add(behind);
    camPos.current.lerp(targetCam, delta * 5);
    camera.position.copy(camPos.current);
    camera.lookAt(pos.current.x, pos.current.y + 0.7, pos.current.z);

    // Nearby sign detection
    const nearSign = SIGNS.find(s => {
      const dx = pos.current.x - s.position[0];
      const dz = pos.current.z - s.position[2];
      return dx * dx + dz * dz < 8;
    });
    const nearId = nearSign?.id ?? null;
    if (nearId !== prevNear.current) {
      prevNear.current = nearId;
      onNearSign(nearId);
    }
  });

  return null;
}

/* ── Game scene ───────────────────────────────────────────────────── */
function GameScene({ onNearSign }: { onNearSign: (id: string | null) => void }) {
  const dogRef  = useRef<DogHandle>(null);
  const [moving, setMoving]   = useState(false);
  const [running, setRunning] = useState(false);
  const [nearSign, setNear]   = useState<string | null>(null);

  const handleMoving = useCallback((m: boolean, r: boolean) => { setMoving(m); setRunning(r); }, []);
  const handleNear   = useCallback((id: string | null) => { setNear(id); onNearSign(id); }, [onNearSign]);

  return (
    <>
      <GradientSky />
      <Stars radius={90} depth={50} count={1200} factor={3} fade />
      <fog attach="fog" args={["#c05020", 35, 140]} />

      <ambientLight intensity={0.7} color="#ffd0a0" />
      <directionalLight
        position={[15, 22, 8]}
        intensity={1.8}
        color="#ffb570"
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-far={80}
        shadow-camera-left={-30} shadow-camera-right={30}
        shadow-camera-top={30}  shadow-camera-bottom={-30}
      />
      <hemisphereLight args={["#ff8844", "#2d4a20", 0.55]} />
      {/* Rim / fill from opposing side */}
      <directionalLight position={[-10, 8, -15]} intensity={0.4} color="#8855cc" />

      <World nearbySignId={nearSign} />
      <Dog ref={dogRef} moving={moving} running={running} />
      <PlayerController dogRef={dogRef} onNearSign={handleNear} onMovingChange={handleMoving} />
    </>
  );
}

/* ── HUD ──────────────────────────────────────────────────────────── */
function HUD({ nearId, openId, onOpen, onClose }: {
  nearId: string | null; openId: string | null;
  onOpen: (id: string) => void; onClose: () => void;
}) {
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.code === "KeyE" && nearId && !openId) onOpen(nearId);
      if (e.code === "Escape" && openId) onClose();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [nearId, openId, onOpen, onClose]);

  return (
    <>
      {/* Bottom controls bar */}
      <div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 pointer-events-none select-none"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {[["WASD", "Move"], ["Shift", "Run"], ...(nearId ? [["E", "Explore"]] : [])].map(([k, v]) => (
          <span key={k} style={{
            display: "flex", alignItems: "center", gap: 5,
            padding: "5px 10px",
            background: nearId && k === "E" ? "rgba(255,200,80,0.25)" : "rgba(0,0,0,0.35)",
            border: `1px solid ${nearId && k === "E" ? "rgba(255,200,80,0.5)" : "rgba(255,255,255,0.15)"}`,
            borderRadius: 6, backdropFilter: "blur(6px)",
            fontSize: 11, color: nearId && k === "E" ? "#ffe066" : "rgba(255,255,255,0.6)",
            animation: nearId && k === "E" ? "pulse 1.2s infinite" : "none",
          }}>
            <kbd style={{ background: "rgba(255,255,255,0.12)", padding: "1px 5px", borderRadius: 3, fontFamily: "monospace", fontSize: 10 }}>{k}</kbd>
            {v}
          </span>
        ))}
      </div>

      {/* Sign panel overlay */}
      {openId && PANELS[openId] && (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(3px)", zIndex: 20 }}
          onClick={onClose}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: 480, width: "calc(100% - 32px)",
              maxHeight: "80vh",
              overflowY: "auto",
              padding: 22,
              borderRadius: 14,
              background: "rgba(8, 10, 22, 0.92)",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "0 0 60px rgba(180,80,20,0.25), 0 8px 40px rgba(0,0,0,0.6)",
            }}
          >
            <button
              onClick={onClose}
              style={{
                position: "absolute", top: 12, right: 14,
                background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 6, color: "rgba(255,255,255,0.5)", cursor: "pointer",
                padding: "2px 8px", fontSize: 13,
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >✕ Esc</button>
            {PANELS[openId]}
          </div>
        </div>
      )}
    </>
  );
}

/* ── Entry ────────────────────────────────────────────────────────── */
export default function KobeGame() {
  const [nearId, setNearId] = useState<string | null>(null);
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="w-full h-screen relative">
      <Canvas
        shadows
        camera={{ position: [0, 3.2, 10], fov: 62, near: 0.1, far: 250 }}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.1 }}
      >
        <GameScene onNearSign={setNearId} />
      </Canvas>
      <HUD nearId={nearId} openId={openId} onOpen={setOpenId} onClose={() => setOpenId(null)} />

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.55} }
      `}</style>
    </div>
  );
}
