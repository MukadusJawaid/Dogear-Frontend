import type { CardItem, HeroContent, PersonItem, SectionHeading } from "./content";

export type AboutContent = {
  hero: HeroContent;
  story: { eyebrow: string; title: string; paragraphs: string[]; quote: string };
  beliefs: { heading: SectionHeading; items: CardItem[] };
  team: { heading: SectionHeading; people: PersonItem[] };
};
