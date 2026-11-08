import type { DeviceItem, HeroContent, RoleItem, SectionHeading, TourContent } from "./content";

export type FeaturesContent = {
  hero: HeroContent;
  tour: TourContent;
  roles: { heading: SectionHeading; roles: RoleItem[] };
  devices: { heading: SectionHeading; devices: DeviceItem[] };
};
