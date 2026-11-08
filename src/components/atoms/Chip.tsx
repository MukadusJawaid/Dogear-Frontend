import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type Props = ComponentProps<"span"> & { tone?: "success" | "amber" | "neutral" };

const dot = { success: "bg-success", amber: "bg-amber", neutral: "bg-ink-faint" };

/** Small dark status pill with a coloured dot. */
export function Chip({ tone = "neutral", className, children, ...props }: Props) {
  return (
    <span
      className={cn(
        "bg-canvas/90 text-ink inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium",
        className,
      )}
      {...props}
    >
      <span className={cn("size-1.5 rounded-full", dot[tone])} />
      {children}
    </span>
  );
}
