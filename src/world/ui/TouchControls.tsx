import { setTouch, touch } from "../controls";

type Key = keyof typeof touch;

function Pad({ label, action, className }: { label: string; action: Key; className?: string }) {
  const press = (value: number) => (event: React.PointerEvent) => {
    event.preventDefault();
    setTouch(action, value);
  };

  return (
    <button
      type="button"
      aria-label={action}
      onPointerDown={press(1)}
      onPointerUp={press(0)}
      onPointerLeave={press(0)}
      onPointerCancel={press(0)}
      onContextMenu={(e) => e.preventDefault()}
      className={`flex h-16 w-16 select-none items-center justify-center rounded-2xl border border-white/15 bg-[#0d0a24]/75 text-xl text-white backdrop-blur active:bg-[#5b4bff]/70 ${className ?? ""}`}
    >
      {label}
    </button>
  );
}

/** Shown on touch devices only — the layout hides it at the sm breakpoint. */
export default function TouchControls() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-20 flex items-end justify-between p-4 sm:hidden">
      <div className="pointer-events-auto flex gap-2">
        <Pad label="◀" action="left" />
        <Pad label="▶" action="right" />
      </div>
      <div className="pointer-events-auto flex flex-col gap-2">
        <Pad label="▲" action="forward" />
        <Pad label="▼" action="backward" />
      </div>
    </div>
  );
}
