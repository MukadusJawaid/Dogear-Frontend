import { CornerDownLeft } from "lucide-react";
import { cn } from "@/lib/cn";
import type { RoleVisual } from "@/types/content";

const dot = { amber: "bg-amber", success: "bg-success", muted: "bg-ink-faint" };

export function RoleVisualView({ visual }: { visual: RoleVisual }) {
  const box = "border-line bg-canvas rounded-xl border p-3 text-xs";
  if (visual.kind === "list")
    return (
      <div className={cn(box, "space-y-1.5")}>
        {visual.rows.map((r) => (
          <div key={r.name} className="bg-surface-2 flex items-center gap-3 rounded-lg px-3 py-2.5">
            <span className={cn("size-1.5 rounded-full", dot[r.tone])} />
            <span className="text-ink-soft">{r.name}</span>
            <span className="text-ink-muted ml-auto">{r.meta}</span>
          </div>
        ))}
      </div>
    );
  if (visual.kind === "reply")
    return (
      <div className={cn(box, "space-y-3")}>
        <p className="text-ink-soft px-1">{visual.url}</p>
        <div className="border-line text-ink-muted flex items-center justify-between rounded-lg border px-3 py-2.5">
          {visual.placeholder}
          <CornerDownLeft aria-hidden className="size-3.5" />
        </div>
        <span className="bg-amber text-amber-ink inline-block rounded-full px-4 py-1.5 font-semibold">
          {visual.action}
        </span>
      </div>
    );
  return (
    <div className={cn(box, "space-y-3")}>
      <div className="bg-surface-2 flex items-center gap-3 rounded-lg px-3 py-2.5">
        <span className="bg-amber text-amber-ink grid size-5 place-items-center rounded-full text-[10px] font-bold">
          {visual.initial}
        </span>
        <span className="text-ink-soft">{visual.who}</span>
        <span className="text-ink-muted ml-auto">{visual.state}</span>
      </div>
      <div className="flex gap-2">
        {visual.actions.map((a) => (
          <span
            key={a.label}
            className={cn(
              "rounded-full px-4 py-1.5 font-semibold",
              a.primary ? "bg-amber text-amber-ink" : "border-line-strong text-ink border",
            )}
          >
            {a.label}
          </span>
        ))}
      </div>
    </div>
  );
}
