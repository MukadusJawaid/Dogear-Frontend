import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

export function Card({ className, ...props }: ComponentProps<"div">) {
  return (
    <div className={cn("border-line bg-surface rounded-2xl border p-6", className)} {...props} />
  );
}
