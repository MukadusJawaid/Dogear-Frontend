"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { duration, ease, viewport } from "@/lib/motion";

/** Child starts tilted back and slightly small, then settles flat as it scrolls into view (and reverses on the way out). */
export function ScrollScale({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={className} style={{ perspective: 1400 }}>
      <motion.div
        initial={{ opacity: 0.4, rotateX: 12, scale: 0.94, y: 48 }}
        whileInView={{ opacity: 1, rotateX: 0, scale: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: duration.slow, ease }}
        style={{ transformOrigin: "50% 0%" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
