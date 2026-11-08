import type {
  CardItem,
  FaqItem,
  FaqSectionContent,
  HeroContent,
  PlanItem,
  RecordItem,
  SectionHeading,
} from "./content";

export type HomeContent = {
  hero: HeroContent;
  features: { heading: SectionHeading; items: CardItem[] };
  proof: { heading: SectionHeading; records: RecordItem[] };
  pricing: { heading: SectionHeading; plans: PlanItem[] };
  faq: { heading: FaqSectionContent; items: FaqItem[] };
};
