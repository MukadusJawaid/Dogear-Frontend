"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { spring, viewport } from "@/lib/motion";

/** Numbered teardrop map-pin, the product's signature mark. Tip points at the parent's (x,y). Pops in when seen. */
export function Pin({
  n,
  className,
  delay = 0,
}: {
  n: number | string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.span
      className="inline-block origin-bottom"
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={viewport}
      transition={{ ...spring, delay }}
    >
      <span
        aria-label={`Pin ${n}`}
        className={cn(
          "bg-amber border-canvas text-amber-ink relative grid size-7 -translate-x-1/2 -translate-y-full [rotate:45deg] place-items-center rounded-full rounded-br-none border-2 font-mono text-xs font-bold shadow-lg",
          className,
        )}
      >
        <span className="[rotate:-45deg]">{n}</span>
      </span>
    </motion.span>
  );
}
