import type { SiteContent } from "@/types";

export const siteContent: SiteContent = {
  brand: { name: "Dogear", href: "/" },
  nav: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  headerActions: [
    { label: "Log in", href: "/login", variant: "ghost" },
    { label: "Start free", href: "/sign-up", variant: "primary" },
  ],
  backToTopLabel: "Back to top",
  cta: {
    title: "Send your next design with a pin, not a PDF.",
    actions: [
      { label: "Start free", href: "/sign-up", variant: "primary" },
      { label: "See a client review", href: "/demo", variant: "secondary" },
    ],
  },
  footer: {
    tagline:
      "Client feedback and approval for freelancers and small agencies. Every action is timestamped.",
    columns: [
      {
        title: "Product",
        links: [
          { label: "Features", href: "/features" },
          { label: "Pricing", href: "/pricing" },
          { label: "Client review demo", href: "/demo" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
        ],
      },
      {
        title: "Account",
        links: [
          { label: "Log in", href: "/login" },
          { label: "Sign up", href: "/sign-up" },
          { label: "Plans", href: "/pricing" },
        ],
      },
    ],
    legal: "© 2026 Dogear",
    note: "Made for people who send designs for approval.",
  },
};
