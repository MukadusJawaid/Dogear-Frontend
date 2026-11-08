import type {
  ContactFormContent,
  HeroContent,
  InfoCardItem,
  SectionHeading,
  StepItem,
} from "./content";

export type ContactContent = {
  hero: HeroContent;
  form: ContactFormContent;
  info: InfoCardItem[];
  steps: { heading: SectionHeading; steps: StepItem[] };
};
