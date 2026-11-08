"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { viewport } from "@/lib/motion";
import { cn } from "@/lib/cn";

type Kind = "ring" | "disc" | "dots" | "paper" | "card" | "pill";
type Props = {
  kind: Kind;
  className?: string;
  float?: boolean;
  /** Parallax distance in px over the page scroll. Negative drifts up. */ speed?: number;
};

const speeds: Record<Kind, number> = {
  pill: -40,
  ring: -120,
  disc: -200,
  dots: -60,
  paper: -160,
  card: -140,
};

/** Decorative background shape: drifts on its own and shifts with scroll (parallax). Position it with className. */
export function Decor({ kind, className, float = true, speed }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  // Parallax is relative to the shape's own position, so it never drifts out of its section.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const reach = Math.abs(speed ?? speeds[kind]) / 4;
  const parallaxY = useTransform(scrollYProgress, [0, 1], [reach, -reach]);
  const fade = { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport };
  const drift = float ? { x: [0, 10, 0], scale: [1, 1.04, 1] } : undefined;
  const bobTransition = {
    duration: 6 + (kind.length % 3),
    repeat: Infinity,
    ease: "easeInOut" as const,
  };

  if (kind === "card" || kind === "paper") {
    return (
      <motion.span
        ref={ref}
        aria-hidden
        {...fade}
        transition={{ opacity: { duration: 0.9 } }}
        style={{ y: parallaxY }}
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

  // ring / disc / dots: a single element so colour + size classes from the caller apply directly.
  const look = {
    pill: "h-3.5 w-24 rounded-full bg-surface-4",
    ring: "rounded-full border border-amber/60",
    disc: "rounded-full bg-amber",
    dots: "h-24 w-24 bg-[radial-gradient(circle,rgb(255_180_84/0.7)_1.5px,transparent_2px)] bg-[size:16px_16px]",
  }[kind];

  return (
    <motion.span
      ref={ref}
      aria-hidden
      {...fade}
      style={{ y: parallaxY }}
      animate={drift}
      transition={{ default: bobTransition, opacity: { duration: 0.9 } }}
      className={cn("pointer-events-none absolute", look, className)}
    />
  );
}
