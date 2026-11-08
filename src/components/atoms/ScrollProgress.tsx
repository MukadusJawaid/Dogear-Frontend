"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin amber bar at the top of the viewport showing how far the page is scrolled. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="bg-amber fixed inset-x-0 top-0 z-50 h-0.5 origin-left shadow-[0_0_12px_var(--dg-amber)]"
    />
  );
}
