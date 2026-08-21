import { useMemo } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import {
  BloomEffect,
  ChromaticAberrationEffect,
  VignetteEffect,
  KernelSize,
} from "postprocessing";
import { telemetry } from "./store";
import { MAX_SPEED } from "./drive";

/**
 * The post stack, driven by how you're actually driving.
 *
 * Speed is sold in screen space rather than with particles. Anything floating
 * in the world near the camera reads as debris hanging in the air; a lens that
 * tightens and smears as you wind it on reads as speed, and costs nothing
 * extra because these passes are already running.
 *
 * The effects are constructed here and mounted as primitives rather than using
 * the wrapper components from @react-three/postprocessing. Those memoise on
 * `JSON.stringify(props)`, and under React 19 `ref` is an ordinary prop — so
 * attaching a ref to one, which is the only way to animate it without a render
 * per frame, feeds a populated ref object into JSON.stringify and throws on its
 * circular `.parent` chain, taking the whole canvas down.
 */
export default function Grade() {
  const { bloom, aberration, vignette } = useMemo(() => {
    return {
      bloom: new BloomEffect({
        intensity: 1.15,
        luminanceThreshold: 0.75,
        luminanceSmoothing: 0.28,
        mipmapBlur: true,
        kernelSize: KernelSize.LARGE,
      }),
      aberration: new ChromaticAberrationEffect({
        offset: new THREE.Vector2(0, 0),
        radialModulation: false,
        modulationOffset: 0,
      }),
      vignette: new VignetteEffect({ offset: 0.3, darkness: 0.75 }),
    };
  }, []);

  const smoothed = useMemo(() => ({ pace: 0, boost: 0 }), []);

  useFrame((_, delta) => {
    const pace = Math.min(Math.abs(telemetry.speed) / MAX_SPEED, 1.4);
    const boost = telemetry.boosting ? 1 : 0;
    // Eased, so a bump in the road doesn't flash the whole screen.
    const rate = 1 - Math.pow(0.004, delta);
    smoothed.pace = THREE.MathUtils.lerp(smoothed.pace, pace, rate);
    smoothed.boost = THREE.MathUtils.lerp(smoothed.boost, boost, rate);
    const { pace: p, boost: b } = smoothed;

    // Colour fringing only really appears once you're moving quickly, and
    // doubles under boost — subtle enough to feel rather than notice.
    const fringe = p * 0.0008 + b * 0.0016;
    aberration.offset.set(fringe, fringe * 0.6);

    // The corners close in with speed, narrowing attention to the road ahead
    // without moving the camera.
    vignette.darkness = 0.7 + p * 0.22 + b * 0.16;

    // Everything glows harder under power.
    bloom.intensity = 1.15 + p * 0.2 + b * 0.7;
  });

  return (
    <>
      <primitive object={bloom} />
      <primitive object={aberration} />
      <primitive object={vignette} />
    </>
  );
}
