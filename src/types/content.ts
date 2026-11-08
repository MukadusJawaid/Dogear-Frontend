/** Shapes of CMS-driven content. Components receive these as props — never hardcode copy. */

export type NavLink = { label: string; href: string };

export type Action = { label: string; href: string; variant?: "primary" | "secondary" | "ghost" };

export type SiteContent = {
  brand: { name: string; href: string };
  nav: NavLink[];
  headerActions: Action[];
  cta: { title: string; actions: Action[] };
  backToTopLabel: string;
  footer: {
    tagline: string;
    columns: { title: string; links: NavLink[] }[];
    legal: string;
    note: string;
  };
};

export type SectionHeading = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export type MockTheme = "cream" | "blue" | "sand" | "sage";

export type PinMark = { n: number; x: number; y: number };

export type CanvasMock = {
  theme: MockTheme;
  brand?: string;
  nav?: string[];
  headline?: string;
  /** Decorative illustration drawn inside the mock site. */
  art?: "coffee" | "bread";
  buttons?: { label: string; primary?: boolean }[];
  pins: PinMark[];
};

export type PanelComment = {
  initial: string;
  name: string;
  when: string;
  text: string;
  accent?: boolean;
};

export type ReviewMockup = {
  url: string;
  version: string;
  status: string;
  canvas: CanvasMock;
  panel: {
    title: string;
    state: string;
    tabs: { label: string; active?: boolean }[];
    comments: PanelComment[];
    replyPlaceholder: string;
    approveLabel: string;
    approveCount: number;
  };
};

export type Floater = {
  label: string;
  badge?: "check" | number;
  /** When set, renders as a comment bubble (label = author, note = text). */
  note?: string;
  meta?: string;
  position: "tl" | "bl" | "tr" | "br";
};

export type HeroContent = {
  badge?: string;
  /** Small amber tag before the badge text, e.g. "NEW", "FEATURES". */
  badgeTag?: string;
  /** Floating decorative chips beside the hero (desktop only). */
  floaters?: Floater[];
  eyebrow?: string;
  titleLines: string[];
  /** Wrap words in {braces} to render them amber, e.g. "the {exact spot.}". Defaults to the last line. */
  description: string;
  actions: Action[];
  trust?: string[];
  mockup?: ReviewMockup;
};

export type CardVisual =
  | { kind: "pins"; canvas: CanvasMock }
  | { kind: "chat"; messages: { text: string; mine?: boolean }[] }
  | { kind: "approve"; label: string; stamp: string };

export type CardItem = {
  title: string;
  description: string;
  meta?: string;
  icon?: "pin" | "chat" | "check";
  visual?: CardVisual;
};

export type PlanItem = {
  name: string;
  price: string;
  period: string;
  description?: string;
  highlighted?: boolean;
  badge?: string;
  features: string[];
  action: Action;
};

export type FaqItem = { question: string; answer: string };

export type FaqSectionContent = SectionHeading & {
  footnote?: { prefix: string; linkLabel: string; href: string; suffix: string };
};

export type PersonItem = {
  initials: string;
  name: string;
  role: string;
  bio: string;
  tone?: "amber" | "blue" | "green";
};

export type StepItem = { title: string; description: string };

export type RecordItem = {
  project: string;
  version: string;
  status: "Approved" | "Waiting";
  person: string;
  pins: number;
  when: string;
  thumb?: { theme: MockTheme; pin: number };
};

export type FormFieldContent = {
  name: string;
  label: string;
  type: "text" | "email" | "select" | "textarea";
  /** Share a row with the next half-width field. */
  half?: boolean;
  options?: string[];
  placeholder?: string;
};

export type ContactFormContent = {
  title: string;
  fields: FormFieldContent[];
  submitLabel: string;
  successMessage: string;
};

export type TourStep = {
  tab: string;
  title: string;
  description: string;
  bullets: string[];
  canvas: CanvasMock;
};
export type TourContent = {
  heading: SectionHeading;
  url: string;
  livePreview: string;
  stepLabel: string;
  prevLabel: string;
  nextLabel: string;
  steps: TourStep[];
};

export type RoleVisual =
  | { kind: "list"; rows: { name: string; meta: string; tone: "amber" | "success" | "muted" }[] }
  | { kind: "reply"; url: string; placeholder: string; action: string }
  | {
      kind: "proposal";
      initial: string;
      who: string;
      state: string;
      actions: { label: string; primary?: boolean }[];
    };
export type RoleItem = { role: string; title: string; description: string; visual: RoleVisual };

export type DeviceItem = {
  label: string;
  kind: "desktop" | "tablet" | "phone";
  canvas: CanvasMock;
};

export type PlanSwitchContent = {
  heading: SectionHeading;
  plans: {
    id: "free" | "pro";
    tab: string;
    name: string;
    price: string;
    period: string;
    description: string;
    action: Action;
  }[];
  features: { label: string; proOnly?: boolean }[];
  proTag: string;
};

export type LimitContent = {
  heading: SectionHeading;
  card: {
    title: string;
    used: string;
    rows: { name: string; tone: "amber" | "success" }[];
    archiveLabel: string;
    primaryLabel: string;
    secondaryLabel: string;
  };
};

export type InfoCardItem = { icon: "mail" | "file" | "alert"; title: string; text: string };
