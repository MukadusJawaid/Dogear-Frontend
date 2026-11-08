import type { AboutContent } from "@/types";

export const aboutContent: AboutContent = {
  hero: {
    badgeTag: "ABOUT",
    badge: "The people behind the pin",
    titleLines: ["Easy to point at, {and}", "{easy to prove.}"],
    description:
      "Dogear started with a simple annoyance: a client says “fix this”, and three weeks later nobody remembers what “this” was.",
    actions: [
      { label: "Start free", href: "/sign-up", variant: "primary" },
      { label: "Meet the team", href: "#team", variant: "secondary" },
    ],
    floaters: [
      { position: "tl", label: "Made by designers", badge: "check" },
      { position: "bl", label: "Small team", badge: 1 },
      { position: "tr", label: "Calm by design", badge: "check" },
    ],
  },
  story: {
    eyebrow: "Why the name?",
    title: "A folded corner that says\n“come back here.”",
    paragraphs: [
      "A dog-eared page marks a spot you want to return to. That is exactly what a pin does on a design.",
      "We think feedback tools should feel like a well-made paper tool: calm, practical and clear about what happened and when.",
    ],
    quote: "Come back to this spot",
  },
  beliefs: {
    heading: { eyebrow: "What we believe", title: "Three rules we design by." },
    items: [
      {
        meta: "01",
        title: "Point, don’t describe",
        description: "A pin beats a paragraph. Feedback should land on the exact spot.",
      },
      {
        meta: "02",
        title: "Keep clients out of the paperwork",
        description: "The person approving shouldn’t need an account to do it.",
      },
      {
        meta: "03",
        title: "Every action has a time",
        description: "Decisions are only useful if you can show when they were made.",
      },
    ],
  },
  team: {
    heading: { eyebrow: "The team · sample profiles", title: "Small team, close to the work." },
    people: [
      {
        initials: "AR",
        tone: "amber",
        name: "Ayla Rahman",
        role: "Founder and product design",
        bio: "Decides how every screen should feel.",
      },
      {
        initials: "JW",
        tone: "blue",
        name: "Jonas Weber",
        role: "Product and operations",
        bio: "Keeps the roadmap honest and the replies fast.",
      },
      {
        initials: "DP",
        tone: "green",
        name: "Dev Patel",
        role: "Engineering",
        bio: "Makes sure every pin lands where it was dropped.",
      },
    ],
  },
};
