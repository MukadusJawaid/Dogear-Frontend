import { Pin } from "@/components/atoms";
import { cn } from "@/lib/cn";
import type { CanvasMock as CanvasMockType } from "@/types/content";

const themes = {
  cream: "bg-mock-cream text-mock-ink",
  blue: "bg-mock-blue text-mock-ink",
  sand: "bg-mock-sand text-mock-ink",
  sage: "bg-mock-sage text-mock-ink",
};

/** A tiny fake website with pins on it — the product's hero visual. Fully prop-driven. */
export function CanvasMock({
  theme,
  brand,
  nav,
  headline,
  buttons,
  art,
  pins,
  size = "md",
  className,
}: CanvasMockType & { size?: "sm" | "md" | "lg"; className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl",
        size === "sm" ? "p-5" : "p-8",
        themes[theme],
        className,
      )}
    >
      {(brand || nav) && (
        <div className="mb-8 flex items-center justify-between text-sm">
          <span className="font-serif text-lg font-bold">{brand}</span>
          <span className="flex gap-4 opacity-70">
            {nav?.map((n) => (
              <span key={n}>{n}</span>
            ))}
          </span>
        </div>
      )}
      {headline && (
        <p
          className={cn(
            "relative font-serif leading-[1.1] font-bold",
            size === "lg"
              ? "max-w-full text-[1.75rem] sm:max-w-[62%] sm:text-[2.25rem]"
              : size === "sm"
                ? "max-w-[85%] text-[1.375rem]"
                : "max-w-[60%] text-3xl",
          )}
        >
          {headline}
        </p>
      )}
      {buttons && (
        <div className="relative mt-6 flex gap-3">
          {buttons.map((b) => (
            <span
              key={b.label}
              className={cn(
                size === "sm"
                  ? "rounded-md px-3 py-1.5 text-xs font-semibold"
                  : "rounded-lg px-4 py-2.5 text-sm font-semibold",
                b.primary ? "bg-mock-green text-white" : "border border-black/20",
              )}
            >
              {b.label}
            </span>
          ))}
        </div>
      )}
      {art === "coffee" && (
        <>
          <span className="absolute top-20 -right-4 hidden size-56 rounded-full bg-[#d9a877] sm:block" />
          <span className="bg-mock-green absolute top-28 right-14 hidden h-44 w-24 rounded-md sm:block" />
        </>
      )}
      {art === "bread" && (
        <>
          <span className="absolute -right-2 bottom-4 size-28 rounded-full bg-[#d9a877]" />
          <span className="absolute top-8 right-10 hidden size-24 rounded-full bg-[#d9a877] first:block" />
        </>
      )}
      {pins.map((p, i) => (
        <span key={p.n} className="absolute" style={{ left: `${p.x}%`, top: `${p.y}%` }}>
          <Pin n={p.n} delay={0.8 + i * 0.15} />
        </span>
      ))}
    </div>
  );
}
