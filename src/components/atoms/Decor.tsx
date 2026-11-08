"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { viewport } from "@/lib/motion";

type Kind = "ring" | "disc" | "dots" | "paper" | "card" | "pill";
type Props = { kind: Kind; className?: string; float?: boolean };

const fade = { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport };
const fadeTransition = { opacity: { duration: 0.9 } };

/**
 * Purely decorative background shape. Fades in with its section and drifts gently.
 * (No scroll-linked parallax: element-targeted useScroll was fragile under Next's hidden-route
 * preservation and cost one scroll tracker per shape.) Position/size it with className.
 */
export function Decor({ kind, className, float = true }: Props) {
  const bobTransition = {
    duration: 6 + (kind.length % 3),
    repeat: Infinity,
    ease: "easeInOut" as const,
  };

  if (kind === "card" || kind === "paper") {
    return (
      <motion.span
        aria-hidden
        {...fade}
        transition={fadeTransition}
        className={cn("pointer-events-none absolute", className)}
      >
        {kind === "card" ? (
          <motion.span
            className="bg-mock-cream relative block h-24 w-36 rounded-2xl p-4 shadow-[0_6px_0_#dba865]"
            animate={float ? { y: [0, -10, 0], rotate: [-8, -5, -8] } : { rotate: -8 }}
            transition={bobTransition}
          >
            <span className="bg-mock-ink block h-2 w-16 rounded-full" />
            <span className="bg-mock-ink/30 mt-2 block h-2 w-10 rounded-full" />
            <span className="bg-canvas absolute right-5 bottom-5 size-5 rotate-45 rounded-full rounded-br-none" />
          </motion.span>
        ) : (
          <motion.span
            className="relative block h-28 w-24"
            animate={float ? { y: [0, -8, 0], rotate: [-6, -3, -6] } : { rotate: -6 }}
            transition={bobTransition}
          >
            <span className="absolute inset-0 bg-current [clip-path:polygon(0_0,72%_0,100%_26%,100%_100%,0_100%)]" />
            <span className="absolute top-0 right-0 h-[26%] w-[28%] bg-[#dba865] [clip-path:polygon(0_0,100%_100%,0_100%)]" />
          </motion.span>
        )}
      </motion.span>
    );
  }

  // ring / disc / dots / pill: a single element so colour + size classes from the caller apply directly.
  const look = {
    pill: "h-3.5 w-24 rounded-full bg-surface-4",
    ring: "rounded-full border border-amber/60",
    disc: "rounded-full bg-amber",
    dots: "h-24 w-24 bg-[radial-gradient(circle,rgb(255_180_84/0.7)_1.5px,transparent_2px)] bg-[size:16px_16px]",
  }[kind];

  return (
    <motion.span
      aria-hidden
      {...fade}
      animate={float ? { x: [0, 10, 0], scale: [1, 1.04, 1] } : undefined}
      transition={{ default: bobTransition, ...fadeTransition }}
      className={cn("pointer-events-none absolute", look, className)}
    />
  );
}
