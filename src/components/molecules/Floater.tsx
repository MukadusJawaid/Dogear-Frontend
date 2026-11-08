"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/cn";
import type { Floater as FloaterType } from "@/types/content";

const spot: Record<FloaterType["position"], string> = {
  tl: "left-[2.5%] top-[252px] -rotate-3",
  bl: "left-[6.5%] top-[407px] rotate-2",
  tr: "right-[2.5%] top-[217px] rotate-3",
  br: "right-[6%] top-[372px] -rotate-2",
};

/** Small tilted card floating beside the hero (decorative; hidden below lg). */
export function Floater({ label, badge, note, meta, position }: FloaterType) {
  const comment = Boolean(note);
  return (
    <motion.div
      aria-hidden
      className={cn(
        "border-line-strong bg-surface-2/90 pointer-events-none absolute hidden items-center gap-3 rounded-2xl border px-4 py-3 shadow-[0_18px_40px_-14px_rgb(0_0_0/0.8)] backdrop-blur lg:flex",
        spot[position],
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: [0, -8, 0] }}
      transition={{
        opacity: { duration: 0.6, delay: 0.5 },
        y: { duration: 5 + (label.length % 3), repeat: Infinity, ease: "easeInOut" },
      }}
    >
      {comment ? (
        <div className="max-w-44 text-xs">
          <div className="text-ink-muted mb-1 flex items-center gap-2">
            <span className="bg-ink-soft text-canvas grid size-5 place-items-center rounded-full text-[10px] font-bold">
              {label[0]}
            </span>
            <span className="text-ink font-semibold">{label}</span>
            <span className="ml-auto">{meta}</span>
          </div>
          <p className="text-ink-soft text-sm leading-snug">{note}</p>
        </div>
      ) : (
        <>
          {badge !== undefined && (
            <span
              className={cn(
                "grid size-7 shrink-0 place-items-center rounded-full text-xs font-bold",
                badge === "check" ? "bg-success-deep text-success" : "bg-amber text-amber-ink",
              )}
            >
              {badge === "check" ? <Check className="size-3.5" strokeWidth={3} /> : badge}
            </span>
          )}
          <span className="text-ink text-body-sm font-semibold whitespace-nowrap">{label}</span>
          {meta && <span className="text-ink-muted text-xs">• {meta}</span>}
        </>
      )}
    </motion.div>
  );
}
