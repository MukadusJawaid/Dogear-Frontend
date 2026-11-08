import { Lock } from "lucide-react";
import type { ReactNode } from "react";
import { Chip } from "@/components/atoms";

type Props = { url: string; version: string; status: string; children: ReactNode };

/** Fake browser window chrome used to showcase product screens. Compacts on small screens. */
export function BrowserFrame({ url, version, status, children }: Props) {
  return (
    <div className="border-line-strong bg-surface-2 shadow-frame overflow-hidden rounded-[22px] border">
      <div className="border-line flex items-center gap-3 border-b px-3 py-3 sm:gap-4 sm:px-4">
        <span className="hidden gap-1.5 sm:flex">
          {[0, 1, 2].map((i) => (
            <span key={i} className="bg-line-faint size-2.5 rounded-full" />
          ))}
        </span>
        <span className="bg-canvas border-line text-ink-muted text-caption flex min-w-0 items-center gap-2 rounded-lg border px-3 py-1.5 sm:gap-3">
          <Lock aria-hidden className="size-3 shrink-0" />
          <span className="truncate">{url}</span>
          <span className="bg-line hidden h-4 w-px shrink-0 sm:block" />
          <span className="text-amber hidden truncate sm:inline">{version}</span>
        </span>
        <Chip tone="amber" className="border-line bg-canvas ml-auto hidden border sm:inline-flex">
          {status}
        </Chip>
      </div>
      {children}
    </div>
  );
}
