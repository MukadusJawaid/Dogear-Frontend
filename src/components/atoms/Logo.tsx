import { File } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = {
  name: string;
  href: string;
  className?: string;
  variant?: "tile" | "icon";
  size?: "md" | "lg";
};

/** App-icon tile (header) or plain outline icon (footer) + wordmark. Brand name comes from CMS content. */
export function Logo({ name, href, className, variant = "tile", size = "md" }: Props) {
  const large = size === "lg";
  return (
    <Link
      href={href}
      className={cn("inline-flex items-center gap-2.5", large && "gap-3", className)}
    >
      {variant === "tile" ? (
        <span
          aria-hidden
          className={cn(
            "bg-amber text-amber-ink grid place-items-center rounded-lg shadow-[0_0_20px_rgb(255_180_84/0.35)]",
            large ? "size-10 rounded-xl" : "size-8",
          )}
        >
          <File className={large ? "size-5" : "size-4"} strokeWidth={2.5} />
        </span>
      ) : (
        <File aria-hidden className="text-amber size-5" strokeWidth={2} />
      )}
      <span
        className={cn(
          "font-display text-ink font-bold tracking-tight",
          large ? "text-2xl" : "text-xl",
        )}
      >
        {name}
      </span>
    </Link>
  );
}
