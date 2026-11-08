import type { PricingContent } from "@/types";

export const pricingContent: PricingContent = {
  hero: {
    badgeTag: "PRICING",
    badge: "Free for good, Pro when you grow",
    titleLines: ["Pay only when your", "{studio grows.}"],
    description: "Two projects are free, for good. After that, Pro is one flat price.",
    actions: [
      { label: "Start free", href: "/sign-up", variant: "primary" },
      { label: "Pick a plan", href: "#plans", variant: "secondary" },
    ],
    floaters: [
      { position: "tl", label: "Cancel any time", badge: "check" },
      { position: "bl", label: "Projects on Free", badge: 2 },
      { position: "tr", label: "Clients never pay", badge: "check" },
    ],
  },
  plans: {
    heading: { eyebrow: "Pick a plan", title: "Flip the switch.\nSee what Pro adds." },
    proTag: "PRO",
    plans: [
      {
        id: "free",
        tab: "Free",
        name: "Free",
        price: "$0",
        period: "for good",
        description: "Everything you need for your first two projects.",
        action: { label: "Start free", href: "/sign-up" },
      },
      {
        id: "pro",
        tab: "Pro",
        name: "Pro",
        price: "$12",
        period: "per month",
        description: "No project limit, plus roles and approvals for your team.",
        action: { label: "Go Pro", href: "/sign-up?plan=pro" },
      },
    ],
    features: [
      { label: "2 active projects" },
      { label: "Pins and threads" },
      { label: "Version compare" },
      { label: "Client review links" },
      { label: "Approval record and PDF" },
      { label: "Team roles", proOnly: true },
      { label: "Status approvals", proOnly: true },
      { label: "Project documents", proOnly: true },
    ],
  },
  limit: {
    heading: {
      eyebrow: "The project limit",
      title: "Hit the limit? Nothing breaks.",
      description:
        "You can still open, review and export every project. Archive one to start another, or move to Pro.",
    },
    card: {
      title: "Project limit reached",
      used: "2 of 2 used",
      rows: [
        { name: "Birch & Co.", tone: "amber" },
        { name: "Nova Fitness", tone: "success" },
      ],
      archiveLabel: "Archive",
      primaryLabel: "Go Pro",
      secondaryLabel: "Not now",
    },
  },
  billing: {
    heading: {
      eyebrow: "Billing",
      title: "Billing questions.",
      description: "Short answers about paying for Pro.",
      footnote: {
        prefix: "Something else?",
        linkLabel: "Write to us",
        href: "/contact",
        suffix: ", and we will reply.",
      },
    },
    items: [
      {
        question: "Can I cancel any time?",
        answer: "Yes. Pro runs month to month, and your projects stay yours if you leave.",
      },
      {
        question: "Do my clients pay for anything?",
        answer: "No. Clients review and approve for free, always.",
      },
      {
        question: "How do I pay?",
        answer: "With a card. You will get a receipt by email each month.",
      },
      { question: "Can I switch plans later?", answer: "Yes. Move up or down whenever you like." },
    ],
  },
};
