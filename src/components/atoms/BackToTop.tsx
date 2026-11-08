"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useState } from "react";
import { spring } from "@/lib/motion";

/** Floating button that appears after scrolling down; ring shows page progress; click smooth-scrolls to top. */
export function BackToTop({ label, threshold = 600 }: { label: string; threshold?: number }) {
  const { scrollY, scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  useMotionValueEvent(scrollY, "change", (y) => setVisible(y > threshold));

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label={label}
          title={label}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ y: -4, scale: 1.05 }}
          whileTap={{ scale: 0.92 }}
          transition={spring}
          className="bg-surface-2 text-amber focus-visible:outline-amber fixed right-6 bottom-6 z-40 grid size-12 place-items-center rounded-full shadow-[0_10px_30px_-8px_rgb(0_0_0/0.8)] focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          <svg aria-hidden viewBox="0 0 48 48" className="absolute inset-0 size-full -rotate-90">
            <circle
              cx="24"
              cy="24"
              r="22"
              fill="none"
              strokeWidth="2"
              className="stroke-line-strong"
            />
            <motion.circle
              cx="24"
              cy="24"
              r="22"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              className="stroke-amber"
              style={{ pathLength: progress }}
            />
          </svg>
          <ArrowUp aria-hidden className="size-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
