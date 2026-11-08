import Link from "next/link";
import { cn } from "@/lib/cn";
import type { NavLink as NavLinkType } from "@/types/content";

export function NavLink({ label, href, active }: NavLinkType & { active?: boolean }) {
  return (
    <Link
      href={href}
      className={cn(
        "hover:text-ink text-sm font-medium transition-colors",
        active ? "text-ink" : "text-ink-soft",
      )}
    >
      {label}
    </Link>
  );
}
