import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

/**
 * The world beyond the kerb: a sea for the island to float in. Pure dressing —
 * no physics, no lights, two draw calls — but it is the difference between an
 * island and a disc hanging in a void.
 *
 * An aurora lived here briefly and was cut: three additive curtains, however
 * faint, lifted the whole frame once bloom got hold of them, and the game's
 * look depends on a genuinely black sky for the neon to cut against.
 */

/** Sparse bright specks on transparency: moonlight catching the water. */
const GLINT_TEXTURE = (() => {
  const size = 512;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  for (let i = 0; i < 260; i += 1) {
    const x = Math.random() * size;
    const y = Math.random() * size;
    const r = 0.6 + Math.random() * 1.8;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r * 3);
    g.addColorStop(0, `rgba(200,225,255,${0.35 + Math.random() * 0.4})`);
    g.addColorStop(1, "rgba(200,225,255,0)");
    ctx.fillStyle = g;
    ctx.fillRect(x - r * 3, y - r * 3, r * 6, r * 6);
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(6, 6);
  return texture;
})();

export default function Scenery() {
  return (
    <group>
      <Sea />
    </group>
  );
}

function Sea() {
  const glints = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    // The glint layer creeps, so the water reads as moving without a single
    // vertex changing.
    if (glints.current) {
      const material = glints.current.material as THREE.MeshBasicMaterial;
      GLINT_TEXTURE.offset.x = clock.elapsedTime * 0.004;
      GLINT_TEXTURE.offset.y = Math.sin(clock.elapsedTime * 0.05) * 0.02;
      material.opacity = 0.5 + Math.sin(clock.elapsedTime * 0.4) * 0.12;
    }
  });

  return (
    <group position={[0, -8.5, 0]}>
      {/* Basic material on purpose. A metallic standard material picked up the
          night environment map and turned the whole lower half of the frame
          into a milky mirror, which bloom then smeared over everything. Water
          at night is dark; the glints carry the "wet" reading alone. */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[900, 64]} />
        <meshBasicMaterial color="#0a1230" />
      </mesh>
      <mesh ref={glints} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.3, 0]}>
        <circleGeometry args={[900, 64]} />
        {/* Fog stays ON here: it is what fades the glints out with distance.
            Fog-free, every speck to the horizon rendered at full strength and
            the sea read as static all the way out. */}
        <meshBasicMaterial
          map={GLINT_TEXTURE}
          transparent
          opacity={0.3}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}
