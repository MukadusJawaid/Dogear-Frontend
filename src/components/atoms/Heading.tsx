import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

const headingStyles = cva("font-display font-bold text-ink", {
  variants: {
    size: {
      display: "text-display",
      h1: "text-h1",
      h2: "text-h2",
      h3: "text-h3",
      h4: "text-h4",
    },
  },
  defaultVariants: { size: "h2" },
});

type Props = VariantProps<typeof headingStyles> & { as?: "h1" | "h2" | "h3" };

export function Heading({
  as: Tag = "h2",
  size,
  className,
  ...props
}: Props & Omit<ComponentProps<"h2">, keyof Props>) {
  return <Tag className={cn(headingStyles({ size }), className)} {...props} />;
}
