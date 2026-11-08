import { DevicesSection, FeatureTour, Hero, RolesSection } from "@/components/organisms";
import type { FeaturesContent } from "@/types";

type Props = { content: FeaturesContent };

export function FeatureTemplate({ content: c }: Props) {
  return (
    <>
      <Hero {...c.hero} />
      <FeatureTour {...c.tour} />
      <RolesSection {...c.roles} />
      <DevicesSection {...c.devices} />
    </>
  );
}
