import { useEffect, useRef } from "react";
import * as THREE from "three";

/* ------------------------------------------------------------------ */
/*  Simplified continent outlines in equirectangular coordinates      */
/*  x ∈ [0,1] → longitude –180° to +180°                            */
/*  y ∈ [0,1] → latitude   90°N to  90°S                            */
/* ------------------------------------------------------------------ */
const CONTINENTS: [number, number][][] = [
  // North America
  [
    [0.03, 0.15], [0.08, 0.11], [0.14, 0.10], [0.20, 0.11], [0.25, 0.14],
    [0.30, 0.19], [0.32, 0.24], [0.30, 0.28], [0.26, 0.30], [0.22, 0.34],
    [0.18, 0.37], [0.15, 0.35], [0.12, 0.30], [0.10, 0.25], [0.06, 0.20],
  ],
  // Greenland
  [
    [0.30, 0.08], [0.34, 0.06], [0.38, 0.08], [0.37, 0.15],
    [0.33, 0.17], [0.29, 0.12],
  ],
  // Central America
  [
    [0.18, 0.37], [0.21, 0.38], [0.23, 0.42], [0.20, 0.44], [0.17, 0.42],
  ],
  // South America
  [
    [0.20, 0.44], [0.25, 0.42], [0.29, 0.44], [0.31, 0.50], [0.29, 0.58],
    [0.27, 0.64], [0.24, 0.70], [0.21, 0.67], [0.19, 0.58], [0.18, 0.48],
  ],
  // Europe
  [
    [0.46, 0.10], [0.50, 0.08], [0.54, 0.10], [0.56, 0.14], [0.55, 0.20],
    [0.51, 0.22], [0.47, 0.19], [0.45, 0.14],
  ],
  // Scandinavia
  [
    [0.51, 0.05], [0.54, 0.04], [0.55, 0.08], [0.53, 0.12], [0.50, 0.10],
  ],
  // UK
  [[0.47, 0.08], [0.49, 0.08], [0.49, 0.12], [0.47, 0.12]],
  // Africa
  [
    [0.48, 0.26], [0.53, 0.24], [0.57, 0.27], [0.59, 0.34], [0.58, 0.44],
    [0.56, 0.52], [0.52, 0.58], [0.49, 0.56], [0.47, 0.46], [0.46, 0.34],
  ],
  // Madagascar
  [[0.60, 0.52], [0.61, 0.50], [0.62, 0.52], [0.61, 0.56], [0.60, 0.55]],
  // Asia (main mass)
  [
    [0.55, 0.09], [0.62, 0.06], [0.72, 0.08], [0.80, 0.10], [0.86, 0.14],
    [0.88, 0.18], [0.85, 0.22], [0.80, 0.26], [0.74, 0.28], [0.68, 0.26],
    [0.62, 0.22], [0.56, 0.16],
  ],
  // Middle East
  [
    [0.57, 0.24], [0.63, 0.24], [0.66, 0.28], [0.64, 0.34], [0.58, 0.32],
  ],
  // India
  [
    [0.65, 0.28], [0.70, 0.26], [0.72, 0.32], [0.70, 0.40], [0.66, 0.38],
  ],
  // Southeast Asia
  [
    [0.73, 0.30], [0.78, 0.28], [0.80, 0.34], [0.79, 0.40], [0.74, 0.38],
  ],
  // Japan
  [
    [0.85, 0.15], [0.88, 0.14], [0.89, 0.18], [0.88, 0.24], [0.85, 0.22],
  ],
  // Indonesia (islands)
  [[0.74, 0.42], [0.78, 0.41], [0.80, 0.43], [0.78, 0.45], [0.74, 0.44]],
  [[0.80, 0.42], [0.84, 0.41], [0.85, 0.44], [0.82, 0.45]],
  // Australia
  [
    [0.77, 0.52], [0.84, 0.49], [0.88, 0.52], [0.87, 0.58], [0.82, 0.62],
    [0.77, 0.58],
  ],
  // New Zealand
  [[0.92, 0.60], [0.93, 0.58], [0.94, 0.60], [0.93, 0.64], [0.92, 0.63]],
  // Antarctica
  [
    [0.0, 0.90], [0.15, 0.88], [0.30, 0.90], [0.50, 0.88],
    [0.70, 0.90], [0.85, 0.88], [1.0, 0.90], [1.0, 1.0], [0.0, 1.0],
  ],
];

/* ------------------------------------------------------------------ */
/*  Generate a red dot-matrix earth texture on a canvas               */
/* ------------------------------------------------------------------ */
const TEX_W = 240;
const TEX_H = 120;
const DOT = 2;
const STEP = 3;

/** Build a boolean land-mask (computed once) */
function buildLandMask(): boolean[] {
  const canvas = document.createElement("canvas");
  canvas.width = TEX_W;
  canvas.height = TEX_H;
  const ctx = canvas.getContext("2d")!;

  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, TEX_W, TEX_H);
  ctx.fillStyle = "#fff";
  for (const poly of CONTINENTS) {
    ctx.beginPath();
    ctx.moveTo(poly[0][0] * TEX_W, poly[0][1] * TEX_H);
    for (let i = 1; i < poly.length; i++) {
      ctx.lineTo(poly[i][0] * TEX_W, poly[i][1] * TEX_H);
    }
    ctx.closePath();
    ctx.fill();
  }

  const data = ctx.getImageData(0, 0, TEX_W, TEX_H).data;
  const mask: boolean[] = [];
  for (let y = 0; y < TEX_H; y += STEP) {
    for (let x = 0; x < TEX_W; x += STEP) {
      mask.push(data[(y * TEX_W + x) * 4] > 128);
    }
  }
  return mask;
}

/** Paint the texture — call repeatedly to animate pixel flicker */
function paintEarthTexture(
  ctx: CanvasRenderingContext2D,
  mask: boolean[],
) {
  /* Fully transparent ocean background */
  ctx.clearRect(0, 0, TEX_W, TEX_H);

  /* Draw land dots with animated flicker */
  let i = 0;
  for (let y = 0; y < TEX_H; y += STEP) {
    for (let x = 0; x < TEX_W; x += STEP) {
      const isLand = mask[i++];
      if (isLand) {
        const l = 55 + Math.random() * 20;
        ctx.fillStyle = `hsl(210 100% ${l}%)`;
        ctx.fillRect(x, y, DOT, DOT);
      }
    }
  }
}

/* ------------------------------------------------------------------ */
/*  Globe3D component                                                 */
/* ------------------------------------------------------------------ */
const Globe3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const size = container.clientWidth || 580;

    /* --- Scene (fully transparent) --- */
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.z = 2.4;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(size, size);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    /* --- Earth texture (animated dot-matrix) --- */
    const texCanvas = document.createElement("canvas");
    texCanvas.width = TEX_W;
    texCanvas.height = TEX_H;
    const texCtx = texCanvas.getContext("2d")!;
    const landMask = buildLandMask();

    // Initial paint
    paintEarthTexture(texCtx, landMask);

    const texture = new THREE.CanvasTexture(texCanvas);
    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.NearestFilter;

    /* --- Earth sphere --- */
    const earthGeo = new THREE.SphereGeometry(1, 64, 64);
    const earthMat = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      opacity: 0.95,
    });
    const earth = new THREE.Mesh(earthGeo, earthMat);
    earth.rotation.x = 0.15;
    scene.add(earth);

    /* --- Wireframe overlay for holographic feel --- */
    const wireGeo = new THREE.SphereGeometry(1.004, 36, 18);
    const wireMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(0x3399ff),
      wireframe: true,
      transparent: true,
      opacity: 0.08,
    });
    const wireframe = new THREE.Mesh(wireGeo, wireMat);
    wireframe.rotation.x = 0.15;
    scene.add(wireframe);

    /* --- Atmospheric glow (BackSide sphere) --- */
    const glowGeo = new THREE.SphereGeometry(1.15, 64, 64);
    const glowMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(0x3399ff),
      transparent: true,
      opacity: 0.15,
      side: THREE.BackSide,
    });
    const glow = new THREE.Mesh(glowGeo, glowMat);
    scene.add(glow);

    /* --- Animation loop --- */
    let animId: number;
    let frameCount = 0;
    const speed = (2 * Math.PI) / (80 * 60);

    const animate = () => {
      animId = requestAnimationFrame(animate);
      earth.rotation.y += speed;
      wireframe.rotation.y += speed;

      /* Re-paint texture every 6 frames (~10 Hz) for pixel flicker */
      frameCount++;
      if (frameCount % 6 === 0) {
        paintEarthTexture(texCtx, landMask);
        texture.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };
    animate();

    /* --- Resize handler --- */
    const onResize = () => {
      const s = container.clientWidth;
      renderer.setSize(s, s);
    };
    window.addEventListener("resize", onResize);

    /* --- Cleanup --- */
    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      earthGeo.dispose();
      earthMat.dispose();
      texture.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      glowGeo.dispose();
      glowMat.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="globe-3d" />;
};

export default Globe3D;
