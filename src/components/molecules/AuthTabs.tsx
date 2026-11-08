import Link from "next/link";
import { cn } from "@/lib/cn";
import type { AuthContent } from "@/types";

/** Sign up / Log in switcher. The active tab is a soft amber tint that fades in when the page swaps. */
export function AuthTabs({ tabs }: { tabs: NonNullable<AuthContent["tabs"]> }) {
  return (
    <nav
      aria-label="Account"
      className="border-line bg-surface grid grid-cols-2 rounded-full border p-1.5"
    >
      {tabs.map((t) => (
        <Link
          key={t.href}
          href={t.href}
          aria-current={t.active ? "page" : undefined}
          className={cn(
            "text-body-sm rounded-full border py-3 text-center font-bold transition-colors duration-300",
            t.active
              ? "bg-amber-wash border-amber/40 text-amber animate-fade-in"
              : "text-ink-muted hover:text-ink border-transparent",
          )}
        >
          {t.label}
        </Link>
      ))}
    </nav>
  );
}
