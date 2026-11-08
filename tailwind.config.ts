import type { Config } from "tailwindcss";

/**
 * Tailwind config (loaded from globals.css via `@config`).
 * Values live in CSS variables: colours in src/styles/colors.css, type scale in src/styles/typography.css.
 * This file only gives them utility names, plus breakpoints, radii and motion tokens.
 */
const v = (name: string) => `var(--${name})`;

const type = (name: string, ls?: boolean): [string, { lineHeight: string; letterSpacing?: string }] => [
  v(`fs-${name}`),
  { lineHeight: v(`lh-${name}`), ...(ls ? { letterSpacing: v(`ls-${name}`) } : {}) },
];

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    screens: { sm: "640px", md: "768px", lg: "1024px", xl: "1280px", "2xl": "1536px" },
    container: { center: true, padding: "1.5rem", screens: { "2xl": "1120px" } },
    fontFamily: {
      sans: [v("font-dm-sans"), "system-ui", "sans-serif"],
      display: [v("font-sora"), v("font-dm-sans"), "sans-serif"],
      serif: ["Georgia", "Times New Roman", "serif"],
      mono: [v("font-jetbrains-mono"), "ui-monospace", "monospace"],
    },
    // Replaces Tailwind's default scale entirely so only designed sizes exist.
    fontSize: {
      micro: type("micro"),
      caption: type("caption"),
      "body-sm": type("body-sm"),
      body: type("body"),
      "body-lg": type("body-lg"),
      "body-xl": type("body-xl"),
      eyebrow: type("eyebrow", true),
      h5: type("h5"),
      h4: type("h4"),
      h3: type("h3", true),
      h2: type("h2", true),
      h1: type("h1", true),
      display: type("display", true),
      stat: [v("fs-stat"), { lineHeight: "1" }],
      // Plain aliases so ordinary text-sm / text-lg still resolve to designed sizes
      xs: type("micro"),
      sm: type("caption"),
      base: type("body"),
      lg: type("body-lg"),
      xl: type("h5"),
      "2xl": type("h4"),
      "3xl": type("h3", true),
      "4xl": type("h2", true),
      "5xl": type("h1", true),
      "6xl": type("display", true),
    },
    extend: {
      colors: {
        canvas: { DEFAULT: v("dg-canvas"), deep: v("dg-canvas-deep") },
        surface: { DEFAULT: v("dg-surface"), 2: v("dg-surface-2"), 3: v("dg-surface-3"), 4: v("dg-surface-4") },
        line: { DEFAULT: v("dg-line"), strong: v("dg-line-strong"), faint: v("dg-line-faint") },
        ink: { DEFAULT: v("dg-ink"), soft: v("dg-ink-soft"), muted: v("dg-ink-muted"), faint: v("dg-ink-faint") },
        amber: {
          DEFAULT: v("dg-amber"),
          hover: v("dg-amber-hover"),
          ink: v("dg-amber-ink"),
          tint: v("dg-amber-tint"),
          wash: v("dg-amber-wash"),
          deep: v("dg-amber-deep"),
          end: v("dg-amber-end"),
          soft: v("dg-amber-soft"),
        },
        periwinkle: v("dg-periwinkle"),
        success: { DEFAULT: v("dg-success"), deep: v("dg-success-deep") },
        mock: {
          cream: v("dg-mock-cream"),
          blue: v("dg-mock-blue"),
          sand: v("dg-mock-sand"),
          sage: v("dg-mock-sage"),
          ink: v("dg-mock-ink"),
          green: v("dg-mock-green"),
        },
      },
      maxWidth: { site: "1120px" },
      boxShadow: { frame: v("dg-shadow-frame") },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
      },
      animation: {
        "accordion-down": "accordion-down 0.3s cubic-bezier(0.22,1,0.36,1)",
        "accordion-up": "accordion-up 0.25s cubic-bezier(0.22,1,0.36,1)",
      },
      transitionTimingFunction: { out: "cubic-bezier(0.22, 1, 0.36, 1)" },
    },
  },
};

export default config;
