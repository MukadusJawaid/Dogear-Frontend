"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { gentle } from "@/lib/motion";
import type { AuthContent } from "@/types";

/** Sign up / Log in switcher with a sliding amber pill. */
export function AuthTabs({ tabs }: { tabs: NonNullable<AuthContent["tabs"]> }) {
  return (
    <nav className="border-line bg-surface grid grid-cols-2 rounded-full border p-1.5">
      {tabs.map((t) => (
        <Link
          key={t.href}
          href={t.href}
          aria-current={t.active ? "page" : undefined}
          className={cn(
            "text-body-sm relative rounded-full py-3 text-center font-bold transition-colors",
            t.active ? "text-amber-ink" : "text-ink-muted hover:text-ink",
          )}
        >
          {t.active && (
            <motion.span
              layoutId="auth-tab"
              className="bg-amber absolute inset-0 rounded-full"
              transition={gentle}
            />
          )}
          <span className="relative">{t.label}</span>
        </Link>
      ))}
    </nav>
  );
}
