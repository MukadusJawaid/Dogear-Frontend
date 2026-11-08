import type {
  FaqItem,
  FaqSectionContent,
  HeroContent,
  LimitContent,
  PlanSwitchContent,
} from "./content";

export type PricingContent = {
  hero: HeroContent;
  plans: PlanSwitchContent;
  limit: LimitContent;
  billing: { heading: FaqSectionContent; items: FaqItem[] };
};
