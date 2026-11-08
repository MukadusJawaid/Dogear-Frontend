import { Chip } from "@/components/atoms";
import { cn } from "@/lib/cn";
import type { CardVisual } from "@/types/content";
import { CanvasMock } from "./CanvasMock";

export function FeatureVisual({ visual }: { visual: CardVisual }) {
  if (visual.kind === "pins") return <CanvasMock {...visual.canvas} size="sm" className="h-44" />;
  if (visual.kind === "chat")
    return (
      <div className="border-line bg-canvas flex h-44 flex-col justify-center gap-3 rounded-xl border p-5 text-sm">
        {visual.messages.map((m) => (
          <p
            key={m.text}
            className={cn(
              "max-w-[75%] rounded-lg px-3 py-2",
              m.mine
                ? "bg-amber text-amber-ink self-end font-medium"
                : "bg-surface-3 text-ink-soft",
            )}
          >
            {m.text}
          </p>
        ))}
      </div>
    );
  return (
    <div className="border-line bg-canvas flex h-44 flex-col items-center justify-center gap-3 rounded-xl border">
      <span className="bg-amber text-amber-ink rounded-full px-6 py-3 text-sm font-semibold">
        {visual.label}
      </span>
      <Chip tone="success" className="border-line border">
        {visual.stamp}
      </Chip>
    </div>
  );
}
