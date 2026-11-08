"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/** App-wide motion settings. Honors the user's reduced-motion preference automatically. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
