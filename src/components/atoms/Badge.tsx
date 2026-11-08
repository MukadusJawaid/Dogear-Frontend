import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

export function Badge({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "bg-amber-wash text-amber inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold",
        className,
      )}
      {...props}
    />
  );
}
