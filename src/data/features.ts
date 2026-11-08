import type { CanvasMock } from "@/types";
import type { FeaturesContent } from "@/types";

const coffee = (pins: CanvasMock["pins"]): CanvasMock => ({
  theme: "cream",
  art: "coffee",
  brand: "Fernhill",
  nav: ["Shop", "Subscribe", "Journal"],
  headline: "Slow-roasted coffee, delivered fresh.",
  buttons: [{ label: "Shop beans", primary: true }],
  pins,
});

const bakery = (pins: CanvasMock["pins"]): CanvasMock => ({
  theme: "cream",
  art: "bread",
  brand: "Birch & Co.",
  headline: "Bread, baked daily.",
  buttons: [{ label: "Order a loaf", primary: true }],
  pins,
});

export const featuresContent: FeaturesContent = {
  hero: {
    badgeTag: "FEATURES",
    badge: "Everything between “looks good” and “approved”",
    titleLines: ["Built so feedback {never}", "{gets lost.}"],
    description: "Pins, threads, versions and approvals, all in one calm place.",
    actions: [
      { label: "Start free", href: "/sign-up", variant: "primary" },
      { label: "Take the tour", href: "#tour", variant: "secondary" },
    ],
    floaters: [
      { position: "tl", label: "Ayla", meta: "2:05 pm", note: "Can the logo be a little smaller?" },
      { position: "bl", label: "Version 4", meta: "Uploaded" },
      { position: "tr", label: "Footer link", meta: "Open", badge: 5 },
    ],
  },
  tour: {
    heading: {
      eyebrow: "Feature tour",
      title: "Six things, one calm place.",
      description: "Pick one to see how it works.",
    },
    url: "dogear.app/tour",
    livePreview: "Live preview",
    stepLabel: "Step",
    prevLabel: "Previous step",
    nextLabel: "Next step",
    steps: [
      {
        tab: "Pins on the design",
        title: "Pin it to the exact spot",
        description:
          "Clients click anywhere on the design and leave a numbered pin. No more “the thing near the top”.",
        bullets: [
          "Numbered pins stay exactly where they were dropped",
          "Resolved pins fade, so you see what is left",
          "Works on any image or screenshot",
        ],
        canvas: coffee([
          { n: 1, x: 62, y: 33 },
          { n: 2, x: 43, y: 72 },
          { n: 3, x: 71, y: 14 },
        ]),
      },
      {
        tab: "One thread per pin",
        title: "A chat for every pin",
        description: "Talk it through where the comment lives, so nothing gets lost in email.",
        bullets: [
          "Replies stay attached to the pin",
          "Mark a thread resolved when it is done",
          "Everyone sees who said what, and when",
        ],
        canvas: coffee([{ n: 2, x: 43, y: 72 }]),
      },
      {
        tab: "Versions",
        title: "Every version, side by side",
        description: "Upload a new version and compare it with the last one, pin by pin.",
        bullets: [
          "Old pins carry over so none are forgotten",
          "Switch between versions in one click",
          "Each version keeps its own record",
        ],
        canvas: coffee([
          { n: 1, x: 62, y: 33 },
          { n: 3, x: 71, y: 14 },
        ]),
      },
      {
        tab: "Approval",
        title: "Approve with one click",
        description:
          "When the client is happy, one confirmation locks in the version with the exact time.",
        bullets: [
          "No account needed for clients",
          "The approved version can no longer change",
          "Export the record as a PDF",
        ],
        canvas: coffee([{ n: 1, x: 62, y: 33 }]),
      },
      {
        tab: "Documents",
        title: "Keep documents close",
        description: "Attach briefs, contracts and notes to the project they belong to.",
        bullets: [
          "Share files with the same review link",
          "Clients can read, never overwrite",
          "Everything stays with the approval record",
        ],
        canvas: coffee([
          { n: 2, x: 43, y: 72 },
          { n: 3, x: 71, y: 14 },
        ]),
      },
      {
        tab: "Roles",
        title: "The right view for everyone",
        description: "Freelancers, clients and project managers each see exactly what they need.",
        bullets: [
          "Developers propose a status",
          "Project managers approve or reject",
          "Clients only ever see their own review",
        ],
        canvas: coffee([{ n: 3, x: 71, y: 14 }]),
      },
    ],
  },
  roles: {
    heading: {
      eyebrow: "Who it is for",
      title: "Everyone gets the\nview they need.",
      description: "Three roles, one project.",
    },
    roles: [
      {
        role: "Freelancer",
        title: "Send, track, finish.",
        description: "See every project and what is still open, in one list.",
        visual: {
          kind: "list",
          rows: [
            { name: "Birch & Co.", meta: "3 open", tone: "amber" },
            { name: "Nova Fitness", meta: "Approved", tone: "success" },
            { name: "Quill Press", meta: "1 open", tone: "amber" },
          ],
        },
      },
      {
        role: "Client",
        title: "Comment, approve, done.",
        description: "Open the link, click the design and say what you think.",
        visual: {
          kind: "reply",
          url: "dogear.app/r/birch",
          placeholder: "Say what you think",
          action: "Approve version 2",
        },
      },
      {
        role: "Project manager",
        title: "Keep the final say.",
        description: "Developers propose a status. You approve or reject it.",
        visual: {
          kind: "proposal",
          initial: "J",
          who: "Jonas proposes",
          state: "In review",
          actions: [{ label: "Approve", primary: true }, { label: "Reject" }],
        },
      },
    ],
  },
  devices: {
    heading: {
      eyebrow: "On any screen",
      title: "Review from wherever you are.",
      description: "The same link opens on desktop, tablet and phone.",
    },
    devices: [
      {
        label: "Desktop",
        kind: "desktop",
        canvas: bakery([
          { n: 1, x: 70, y: 18 },
          { n: 2, x: 36, y: 66 },
        ]),
      },
      { label: "Tablet", kind: "tablet", canvas: bakery([{ n: 3, x: 80, y: 14 }]) },
      { label: "Phone", kind: "phone", canvas: bakery([{ n: 4, x: 78, y: 28 }]) },
    ],
  },
};
