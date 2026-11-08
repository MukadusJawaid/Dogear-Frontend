"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";
import { cn } from "@/lib/cn";
import { gentle } from "@/lib/motion";
import type { NavLink } from "@/types/content";

/**
 * Pill-shaped primary nav. The active tab (from the URL) has an amber-tinted pill that slides
 * between tabs (shared `layoutId`, gentle ease-out); hover is a soft colour fade.
 */
export function NavTabs({ links, className }: { links: NavLink[]; className?: string }) {
  const pathname = usePathname();
  // false on the server and during hydration, true afterwards — keeps the active-tab styling hydration-safe.
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  return (
    <nav
      aria-label="Primary"
      className={cn(
        "border-line bg-surface flex items-center gap-1 rounded-full border p-1.5",
        className,
      )}
    >
      {links.map((l) => {
        const active =
          mounted && (pathname === l.href || (l.href !== "/" && pathname.startsWith(`${l.href}/`)));
        return (
          <Link
            key={l.href}
            href={l.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "text-body-sm relative rounded-full px-4 py-1.5 font-medium transition-colors duration-300",
              active ? "text-amber" : "text-ink-soft hover:bg-surface-4/60 hover:text-ink",
            )}
          >
            {active && (
              <motion.span
                layoutId="nav-active"
                className="bg-amber-wash border-amber/30 absolute inset-0 -z-10 rounded-full border"
                transition={gentle}
              />
            )}
            {l.label}
          </Link>
        );
      })}
    </nav>
  );
}
