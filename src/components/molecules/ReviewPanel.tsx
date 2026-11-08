import { CornerDownLeft } from "lucide-react";
import { Chip } from "@/components/atoms";
import { cn } from "@/lib/cn";
import type { ReviewMockup } from "@/types/content";

export function ReviewPanel({ panel }: { panel: ReviewMockup["panel"] }) {
  return (
    <div className="border-line bg-surface flex flex-col gap-3 rounded-xl border p-4 text-left">
      <div className="flex items-center justify-between">
        <p className="text-ink text-sm font-semibold">{panel.title}</p>
        <Chip tone="amber">{panel.state}</Chip>
      </div>
      <div className="bg-canvas grid grid-cols-2 gap-1 rounded-lg p-1 text-xs">
        {panel.tabs.map((t) => (
          <span
            key={t.label}
            className={cn(
              "rounded-md py-1.5 text-center",
              t.active ? "bg-surface-3 text-ink font-semibold" : "text-ink-muted",
            )}
          >
            {t.label}
          </span>
        ))}
      </div>
      {panel.comments.map((c) => (
        <div key={c.name} className="border-line bg-surface-2 rounded-lg border p-3 text-xs">
          <div className="text-ink-muted mb-1 flex items-center gap-2">
            <span
              className={cn(
                "grid size-5 place-items-center rounded-full text-[10px] font-bold",
                c.accent ? "bg-amber text-amber-ink" : "bg-ink-soft text-canvas",
              )}
            >
              {c.initial}
            </span>
            <span className="text-ink font-semibold">{c.name}</span>
            <span className="ml-auto">{c.when}</span>
          </div>
          <p className="text-ink-soft">{c.text}</p>
        </div>
      ))}
      <div className="border-line bg-canvas text-ink-muted flex items-center justify-between rounded-lg border px-3 py-2 text-xs">
        {panel.replyPlaceholder}
        <CornerDownLeft aria-hidden className="size-3.5" />
      </div>
      <span className="bg-amber text-amber-ink flex items-center justify-center gap-2 rounded-full py-2.5 text-sm font-semibold">
        {panel.approveLabel}
        <span className="bg-canvas text-amber grid size-5 place-items-center rounded-full text-xs">
          {panel.approveCount}
        </span>
      </span>
    </div>
  );
}
