import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const shell = {
  desktop: "w-full max-w-[520px] rounded-xl border-[5px] aspect-[16/10]",
  tablet: "w-[210px] rounded-2xl border-[6px] aspect-[3/4]",
  phone: "w-[100px] rounded-2xl border-[5px] aspect-[9/17]",
};

/** Dark bezel around a canvas, for the "any screen" showcase. */
export function DeviceFrame({
  kind,
  label,
  children,
}: {
  kind: keyof typeof shell;
  label: string;
  children: ReactNode;
}) {
  return (
    <figure className="flex flex-col items-center gap-4">
      <div
        className={cn(
          "border-canvas-deep bg-canvas-deep overflow-hidden shadow-[0_24px_60px_-20px_rgb(0_0_0/0.9)]",
          shell[kind],
        )}
      >
        {children}
      </div>
      <figcaption className="text-ink-faint text-caption">{label}</figcaption>
    </figure>
  );
}
