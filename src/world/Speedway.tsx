import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { RigidBody, CuboidCollider } from "@react-three/rapier";
import { NEON } from "./palette";
import { RING_HEIGHT, RING_RADIUS } from "./layout";
import BlockText from "./BlockText";
import { telemetry, worldStore } from "./store";
import { CHECKPOINTS, SPEEDWAY, updateRace } from "./race";

/**
 * The speedway: a separate elevated circuit hanging off the east side of the
 * island, joined to the ring road by a short bridge.
 *
 * It's deliberately its own loop rather than a marked-out route on the ring —
 * a race needs a shape you can learn, and the ring is a constant-radius circle
 * with nothing to get better at.
 */

const DECK = 13;
const SEGMENTS = 72;

/** Radius of the circuit at a given angle: an oval, wider than it is tall. */
export function trackPoint(angle: number) {
  return new THREE.Vector3(
    SPEEDWAY.x + Math.cos(angle) * SPEEDWAY.radiusX,
    SPEEDWAY.y,
    SPEEDWAY.z + Math.sin(angle) * SPEEDWAY.radiusZ,
  );
}

export default function Speedway() {
  return (
    <group>
      <Deck />
      <Bridge />
      <StartGate />
      <Checkpoints />
      <RaceWatcher />
    </group>
  );
}

/**
 * Deck and barriers, built as a chain of slabs following the oval. Each slab is
 * yawed to the local tangent, so the seams stay tight on the tight ends of the
 * oval where the curvature is highest.
 */
function Deck() {
  const slabs = useMemo(() => {
    const out: { position: THREE.Vector3; yaw: number; length: number }[] = [];
    for (let i = 0; i < SEGMENTS; i += 1) {
      const a0 = (i / SEGMENTS) * Math.PI * 2;
      const a1 = ((i + 1) / SEGMENTS) * Math.PI * 2;
      const p0 = trackPoint(a0);
      const p1 = trackPoint(a1);
      const mid = p0.clone().lerp(p1, 0.5);
      const span = p0.distanceTo(p1);
      out.push({
        position: mid,
        yaw: Math.atan2(p1.x - p0.x, p1.z - p0.z),
        length: span + 0.5,
      });
    }
    return out;
  }, []);

  return (
    <group>
      {slabs.map((slab, i) => (
        <group key={i} position={slab.position} rotation={[0, slab.yaw, 0]}>
          <mesh receiveShadow>
            <boxGeometry args={[DECK, 0.5, slab.length]} />
            <meshStandardMaterial color={NEON.deck} roughness={0.5} metalness={0.55} flatShading />
          </mesh>
          {[-1, 1].map((side) => (
            <mesh key={side} position={[(side * DECK) / 2, 0.5, 0]}>
              <boxGeometry args={[0.34, 0.7, slab.length]} />
              <meshStandardMaterial
                color={side > 0 ? NEON.amber : NEON.cyan}
                emissive={side > 0 ? NEON.amber : NEON.cyan}
                emissiveIntensity={3.2}
                toneMapped={false}
              />
            </mesh>
          ))}
        </group>
      ))}

      {/* Physics gets the same chain: deck slab plus a real wall each side.
          Walls are high here, unlike the ring — being thrown off a race track
          mid-lap is a much worse experience than being thrown off a cruise. */}
      <RigidBody type="fixed" colliders={false} friction={1}>
        {slabs.map((slab, i) => (
          <group key={i} position={slab.position} rotation={[0, slab.yaw, 0]}>
            <CuboidCollider args={[DECK / 2, 0.25, slab.length / 2]} />
            {[-1, 1].map((side) => (
              <CuboidCollider
                key={side}
                args={[0.34, 0.9, slab.length / 2]}
                position={[(side * DECK) / 2, 0.9, 0]}
              />
            ))}
          </group>
        ))}
      </RigidBody>

      {/* Pylons down to the sea, so the circuit reads as built, not floating. */}
      {Array.from({ length: 10 }).map((_, i) => {
        const p = trackPoint((i / 10) * Math.PI * 2);
        return (
          <mesh key={i} position={[p.x, SPEEDWAY.y / 2 - 4, p.z]}>
            <cylinderGeometry args={[0.8, 1.5, SPEEDWAY.y + 8, 6]} />
            <meshStandardMaterial color={NEON.deckEdge} roughness={0.6} flatShading />
          </mesh>
        );
      })}
    </group>
  );
}

/** Short span joining the ring road to the circuit. */
function Bridge() {
  const from = new THREE.Vector3(RING_RADIUS, RING_HEIGHT, 0);
  const to = trackPoint(Math.PI); // the circuit's inner edge, facing the island
  const mid = from.clone().lerp(to, 0.5);
  const span = from.distanceTo(to);
  const yaw = Math.atan2(to.x - from.x, to.z - from.z);
  const pitch = Math.asin((to.y - from.y) / span);

  return (
    <group position={mid} rotation={[0, yaw, 0]}>
      <group rotation={[-pitch, 0, 0]}>
        <mesh receiveShadow>
          <boxGeometry args={[DECK, 0.5, span]} />
          <meshStandardMaterial color={NEON.deck} roughness={0.5} metalness={0.55} flatShading />
        </mesh>
        {[-1, 1].map((side) => (
          <mesh key={side} position={[(side * DECK) / 2, 0.45, 0]}>
            <boxGeometry args={[0.3, 0.5, span]} />
            <meshStandardMaterial
              color={NEON.amber}
              emissive={NEON.amber}
              emissiveIntensity={3}
              toneMapped={false}
            />
          </mesh>
        ))}
        <RigidBody type="fixed" colliders={false} friction={1}>
          <CuboidCollider args={[DECK / 2, 0.25, span / 2]} />
          {[-1, 1].map((side) => (
            <CuboidCollider
              key={side}
              args={[0.3, 0.8, span / 2]}
              position={[(side * DECK) / 2, 0.8, 0]}
            />
          ))}
        </RigidBody>
      </group>
    </group>
  );
}

/** Start/finish: a lit arch you can see from across the circuit. */
function StartGate() {
  const p = trackPoint(0);
  const yaw = Math.atan2(-Math.sin(0) * SPEEDWAY.radiusX, Math.cos(0) * SPEEDWAY.radiusZ);

  return (
    <group position={[p.x, p.y, p.z]} rotation={[0, yaw, 0]}>
      {[-1, 1].map((side) => (
        <mesh key={side} position={[(side * DECK) / 2, 4, 0]} castShadow>
          <boxGeometry args={[0.8, 8, 0.8]} />
          <meshStandardMaterial color={NEON.deckEdge} roughness={0.5} metalness={0.5} flatShading />
        </mesh>
      ))}
      {/* Bloom multiplies emissive: a bar this size at intensity 3 with a
          60-unit light under it whites out the entire approach. */}
      <mesh position={[0, 8, 0]}>
        <boxGeometry args={[DECK + 1, 0.7, 0.7]} />
        <meshStandardMaterial color={NEON.lime} emissive={NEON.lime} emissiveIntensity={1.1} />
      </mesh>
      {/* Chequered strip across the deck. */}
      {Array.from({ length: 10 }).map((_, i) => (
        <mesh key={i} position={[-DECK / 2 + 0.7 + i * 1.4, 0.3, 0]}>
          <boxGeometry args={[1.4, 0.08, 2.2]} />
          <meshStandardMaterial
            color={i % 2 ? "#f2f5ff" : "#141634"}
            emissive={i % 2 ? "#f2f5ff" : "#000000"}
            emissiveIntensity={i % 2 ? 0.5 : 0}
          />
        </mesh>
      ))}
      <BlockText
        position={[0, 10.5, 0]}
        rotation={[0, Math.PI / 2, 0]}
        size={0.42}
        depth={0.4}
        color="#dfe6ff"
        emissive={NEON.lime}
        emissiveIntensity={0.9}
      >
        SPEEDWAY
      </BlockText>
      <pointLight position={[0, 7, 0]} color={NEON.lime} intensity={22} distance={34} decay={2} />
    </group>
  );
}

/** Gates you have to pass through, in order, for a lap to count. */
function Checkpoints() {
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.children.forEach((child, i) => {
      // Pending checkpoints pulse; the one you need next pulses hardest.
      const next = telemetry.raceCheckpoint === i && telemetry.raceRunning;
      const mesh = child.children[0] as THREE.Mesh;
      const material = mesh.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity = next
        ? 3 + Math.sin(clock.elapsedTime * 6) * 1.4
        : telemetry.raceRunning
          ? 0.5
          : 1.4;
    });
  });

  return (
    <group ref={group}>
      {CHECKPOINTS.map((angle, i) => {
        const p = trackPoint(angle);
        const tangent = Math.atan2(
          -Math.sin(angle) * SPEEDWAY.radiusX,
          Math.cos(angle) * SPEEDWAY.radiusZ,
        );
        return (
          <group key={i} position={[p.x, p.y, p.z]} rotation={[0, tangent, 0]}>
            <mesh position={[0, 3.4, 0]}>
              <boxGeometry args={[DECK, 0.5, 0.5]} />
              <meshStandardMaterial
                color={NEON.magenta}
                emissive={NEON.magenta}
                emissiveIntensity={1.4}
                toneMapped={false}
              />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

/** Drives the race state machine off the car's live position. */
function RaceWatcher() {
  useFrame((_, delta) => {
    updateRace(telemetry.x, telemetry.z, delta, worldStore);
  });
  return null;
}
