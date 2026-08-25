import { useEffect } from "react";

export type Controls = {
  forward: number;
  backward: number;
  left: number;
  right: number;
  brake: boolean;
  reset: boolean;
  boost: boolean;
  /** Mid-air trick inputs. */
  spinLeft: boolean;
  spinRight: boolean;
  flipForward: boolean;
  flipBack: boolean;
  /** Right the car after a bad landing. */
  recover: boolean;
};

/** Shared mutable input state — read every frame, never through React. */
export const controls: Controls = {
  forward: 0,
  backward: 0,
  left: 0,
  right: 0,
  brake: false,
  reset: false,
  boost: false,
  spinLeft: false,
  spinRight: false,
  flipForward: false,
  flipBack: false,
  recover: false,
};

const KEY_MAP: Record<string, keyof Controls> = {
  KeyW: "forward",
  ArrowUp: "forward",
  KeyS: "backward",
  ArrowDown: "backward",
  KeyA: "left",
  ArrowLeft: "left",
  KeyD: "right",
  ArrowRight: "right",
  Space: "brake",
  KeyR: "reset",
  ShiftLeft: "boost",
  ShiftRight: "boost",
  // Tricks. Right hand stays on the arrows or WASD; these sit under it.
  KeyQ: "spinLeft",
  KeyE: "spinRight",
  KeyF: "flipForward",
  KeyC: "flipBack",
  KeyX: "recover",
};

export function readControls(): Controls {
  return controls;
}

export function useKeyboardControls() {
  useEffect(() => {
    const apply = (event: KeyboardEvent, value: number) => {
      const action = KEY_MAP[event.code];
      if (!action) return;
      // Don't hijack typing, and don't let space scroll the page.
      const target = event.target as HTMLElement | null;
      if (target && /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName)) return;
      if (event.code === "Space") event.preventDefault();
      if (
        action === "brake" ||
        action === "reset" ||
        action === "boost" ||
        action === "spinLeft" ||
        action === "spinRight" ||
        action === "flipForward" ||
        action === "flipBack" ||
        action === "recover"
      ) {
        controls[action] = value > 0;
      } else {
        controls[action] = value;
      }
    };

    const down = (e: KeyboardEvent) => apply(e, 1);
    const up = (e: KeyboardEvent) => apply(e, 0);
    const blur = () => {
      controls.forward = 0;
      controls.backward = 0;
      controls.left = 0;
      controls.right = 0;
      controls.brake = false;
      controls.reset = false;
      controls.boost = false;
      controls.spinLeft = false;
      controls.spinRight = false;
      controls.flipForward = false;
      controls.flipBack = false;
      controls.recover = false;
    };

    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    window.addEventListener("blur", blur);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
      window.removeEventListener("blur", blur);
    };
  }, []);
}
