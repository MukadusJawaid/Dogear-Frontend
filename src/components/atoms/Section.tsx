import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

/** Full-bleed section band. `tone` swaps the background treatment used across the designs. */
const sectionStyles = cva("relative overflow-hidden border-t border-line/70 py-16 md:py-20", {
  variants: {
    tone: {
      plain: "",
      raised:
        "bg-surface-2 bg-[repeating-linear-gradient(135deg,rgb(255_255_255/0.015)_0_1px,transparent_1px_14px)]",
      grid: "bg-canvas-deep bg-[linear-gradient(rgb(255_255_255/0.025)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.025)_1px,transparent_1px)] bg-[size:56px_56px]",
      warm: "bg-[radial-gradient(900px_460px_at_50%_0,rgb(255_180_84/0.2),transparent_70%),radial-gradient(rgb(255_180_84/0.22)_1px,transparent_1.5px),linear-gradient(#2a1d10,#17100a)] [background-size:auto,26px_26px,auto]",
      lines:
        "bg-canvas bg-[repeating-linear-gradient(0deg,rgb(255_255_255/0.03)_0_1px,transparent_1px_38px)]",
      amber: "border-0 bg-amber-soft text-amber-ink",
    },
  },
  defaultVariants: { tone: "plain" },
});

export function Section({
  tone,
  className,
  ...props
}: VariantProps<typeof sectionStyles> & ComponentProps<"section">) {
  return <section className={cn(sectionStyles({ tone }), className)} {...props} />;
}
