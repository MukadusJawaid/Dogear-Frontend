"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { duration, ease, viewport } from "@/lib/motion";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  scale?: number;
  /** Animate on mount instead of when scrolled into view (above-the-fold content). */
  immediate?: boolean;
};

/** Fades + slides content in. Use for anything that should enter smoothly. */
export function Reveal({ children, className, delay = 0, y = 24, scale = 1, immediate }: Props) {
  const initial = { opacity: 0, y, scale };
  const to = { opacity: 1, y: 0, scale: 1 };
  const transition = { duration: duration.base, ease, delay };
  return immediate ? (
    <motion.div className={className} initial={initial} animate={to} transition={transition}>
      {children}
    </motion.div>
  ) : (
    <motion.div
      className={className}
      initial={initial}
      whileInView={to}
      viewport={viewport}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
