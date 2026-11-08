import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

const textStyles = cva("", {
  variants: {
    size: { sm: "text-body-sm", md: "text-body", lg: "text-body-lg", xl: "text-body-xl" },
    tone: { default: "text-ink", muted: "text-ink-muted", soft: "text-ink-soft" },
  },
  defaultVariants: { size: "md", tone: "muted" },
});

export function Text({
  size,
  tone,
  className,
  ...props
}: VariantProps<typeof textStyles> & ComponentProps<"p">) {
  return <p className={cn(textStyles({ size, tone }), className)} {...props} />;
}
