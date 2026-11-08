"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

export const buttonStyles = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-amber text-amber-ink hover:bg-amber-hover",
        secondary: "border border-line-strong text-ink hover:border-amber hover:text-amber",
        ghost: "text-ink-soft hover:text-ink",
      },
      size: {
        sm: "h-9 px-4 text-[length:var(--fs-button-sm)]",
        md: "h-11 px-6 text-[length:var(--fs-button)]",
        lg: "h-12 px-7 text-[length:var(--fs-button)]",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

const MotionLink = motion.create(Link);
const tap = { scale: 0.97 };
const hover = { y: -2 };

type Props = VariantProps<typeof buttonStyles> & { href?: string };

export function Button({
  variant,
  size,
  href,
  className,
  children,
  ...rest
}: Props &
  Omit<
    ComponentProps<"button">,
    keyof Props | "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart"
  >) {
  const classes = cn(buttonStyles({ variant, size }), className);
  if (href) {
    return (
      <MotionLink href={href} className={classes} whileHover={hover} whileTap={tap}>
        {children}
      </MotionLink>
    );
  }
  return (
    <motion.button className={classes} whileHover={hover} whileTap={tap} {...rest}>
      {children}
    </motion.button>
  );
}
