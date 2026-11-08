import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

export function Eyebrow({ className, children, ...props }: ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "text-ink-soft text-eyebrow inline-flex items-center gap-2 font-mono font-medium uppercase",
        className,
      )}
      {...props}
    >
      <span aria-hidden className="bg-amber size-1.5 rounded-full" />
      {children}
    </p>
  );
}
