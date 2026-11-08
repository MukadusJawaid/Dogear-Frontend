import type { Transition, Variants } from "framer-motion";

/** Shared motion tokens — one place to tune how the whole site feels. */
export const ease = [0.22, 1, 0.36, 1] as const;

export const duration = { fast: 0.25, base: 0.9, slow: 1.2 } as const;

/** Soft ease-out with no overshoot — for sliding tab pills and other UI that should feel calm. */
export const gentle: Transition = { type: "tween", duration: 0.35, ease };

export const spring: Transition = { type: "spring", stiffness: 380, damping: 22 };

/** once:false → elements animate back out when scrolled away (also when scrolling up). */
export const viewport = { once: false, amount: 0.25 } as const;

export const fadeUp = (y = 24): Variants => ({
  hidden: { opacity: 0, y },
  show: { opacity: 1, y: 0, transition: { duration: duration.base, ease } },
});

export const stagger = (gap = 0.15, delay = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: delay } },
});
