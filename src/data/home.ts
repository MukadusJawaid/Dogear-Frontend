import type { HomeContent } from "@/types";

export const homeContent: HomeContent = {
  hero: {
    badge: "AI digest summarises every pin",
    titleLines: ["Feedback that points at", "the {exact spot.}"],
    badgeTag: "NEW",
    description:
      "Clients pin comments right on the design. You answer in the thread. One click approves the version.",
    actions: [
      { label: "Start free", href: "/sign-up", variant: "primary" },
      { label: "See a client review", href: "/demo", variant: "secondary" },
    ],
    trust: ["No account for clients", "Every action timestamped", "Free for 2 projects"],
    mockup: {
      url: "dogear.app/r/fernhill",
      version: "Version 3",
      status: "Waiting for approval",
      canvas: {
        theme: "cream",
        art: "coffee",
        brand: "Fernhill",
        nav: ["Shop", "Subscribe", "Journal"],
        headline: "Slow-roasted coffee, delivered fresh.",
        buttons: [{ label: "Shop beans", primary: true }, { label: "Subscribe" }],
        pins: [
          { n: 1, x: 60, y: 24 },
          { n: 2, x: 52, y: 70 },
          { n: 3, x: 78, y: 18 },
        ],
      },
      panel: {
        title: "Pin 2 · Shop beans",
        state: "Open",
        tabs: [{ label: "Open · 2", active: true }, { label: "Resolved · 1" }],
        comments: [
          {
            initial: "M",
            name: "Mira",
            when: "5 Nov, 4:12 pm",
            text: "The green looks a bit yellow on my screen.",
          },
          {
            initial: "A",
            name: "Ayla",
            when: "5 Nov, 5:30 pm",
            text: "Fixed. It now matches the bag.",
            accent: true,
          },
        ],
        replyPlaceholder: "Reply to Mira",
        approveLabel: "Approve version 3",
        approveCount: 2,
      },
    },
  },
  features: {
    heading: {
      eyebrow: "Features",
      title: "Built for one job: getting a yes.",
      description: "Pins, chat and approval, in one calm place.",
    },
    items: [
      {
        title: "Pin it to the exact spot",
        description:
          "Clients click the design and leave a numbered pin. No more “the thing near the top”.",
        icon: "pin",
        visual: {
          kind: "pins",
          canvas: {
            theme: "cream",
            headline: "Slow-roasted coffee, delivered",
            buttons: [{ label: "Shop beans", primary: true }],
            pins: [
              { n: 1, x: 82, y: 22 },
              { n: 2, x: 38, y: 82 },
            ],
          },
        },
      },
      {
        title: "A chat for every pin",
        description: "Talk it through where the comment lives, so nothing gets lost in email.",
        icon: "chat",
        visual: {
          kind: "chat",
          messages: [
            { text: "Can we try the packaging green?" },
            { text: "Done, check version 3.", mine: true },
          ],
        },
      },
      {
        title: "Approve with one click",
        description: "When the client is happy, one confirmation locks in the version.",
        icon: "check",
        visual: { kind: "approve", label: "Approve version 3", stamp: "7 Nov 2026, 8:34 pm" },
      },
    ],
  },
  proof: {
    heading: {
      eyebrow: "Proof",
      title: "Proof of what was approved, and when.",
      description: "Every approval is saved with the version and the time.",
    },
    records: [
      {
        project: "Fernhill Coffee",
        version: "V3",
        status: "Approved",
        person: "Mira Okafor",
        pins: 14,
        when: "7 Nov, 8:34 pm",
        thumb: { theme: "cream", pin: 1 },
      },
      {
        project: "Atlas Finance",
        version: "V5",
        status: "Approved",
        person: "Daniel Reyes",
        pins: 31,
        when: "4 Nov, 11:02 am",
        thumb: { theme: "blue", pin: 2 },
      },
      {
        project: "Lumen Candles",
        version: "V2",
        status: "Approved",
        person: "Priya Nair",
        pins: 9,
        when: "2 Nov, 5:48 pm",
        thumb: { theme: "sand", pin: 1 },
      },
      {
        project: "Harbor Type",
        version: "V4",
        status: "Waiting",
        person: "Jonas Weber",
        pins: 22,
        when: "6 Nov, 4:31 pm",
        thumb: { theme: "sage", pin: 3 },
      },
    ],
  },
  pricing: {
    heading: {
      eyebrow: "Pricing",
      title: "Start free. Upgrade when you need more.",
      description: "Free works for good. Pro removes the project limit.",
    },
    plans: [
      {
        name: "Free",
        price: "$0",
        period: "for good",
        features: ["2 projects", "Client review links", "PDF export of the record"],
        action: { label: "Start free", href: "/sign-up" },
      },
      {
        name: "Pro",
        price: "$12",
        period: "per month",
        badge: "For growing studios",
        highlighted: true,
        features: ["Unlimited projects", "Everything in Free", "Team roles and status approvals"],
        action: { label: "Go Pro", href: "/sign-up?plan=pro" },
      },
    ],
  },
  faq: {
    heading: {
      eyebrow: "FAQ",
      title: "Questions,\nanswered.",
      description: "The short answers to what people ask first.",
      footnote: {
        prefix: "Not answered here? Just ask.",
        linkLabel: "Write to us",
        href: "/contact",
        suffix: ", and we will reply.",
      },
    },
    items: [
      {
        question: "Does my client need an account?",
        answer:
          "No. They open the review link, pin comments, chat and approve. Only you need to sign up.",
      },
      {
        question: "What can I upload?",
        answer: "Images and screenshots of any design, plus PDFs. Add a new version any time.",
      },
      {
        question: "Who can see my designs?",
        answer: "Only people with your private review link. You can revoke it whenever you like.",
      },
      {
        question: "Can I export the record?",
        answer: "Yes. Every approval exports as a PDF with versions and timestamps.",
      },
    ],
  },
};
