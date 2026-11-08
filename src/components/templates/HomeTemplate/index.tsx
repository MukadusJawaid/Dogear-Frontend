import {
  CardGridSection,
  FaqSection,
  Hero,
  PricingSection,
  RecordSection,
} from "@/components/organisms";
import type { HomeContent } from "@/types";

type Props = { content: HomeContent };

/** Home page layout: composes organisms in design order. Data comes in via props. */
export function HomeTemplate({ content: c }: Props) {
  return (
    <>
      <Hero {...c.hero} />
      <CardGridSection heading={c.features.heading} items={c.features.items} />
      <RecordSection heading={c.proof.heading} records={c.proof.records} />
      <PricingSection heading={c.pricing.heading} plans={c.pricing.plans} />
      <FaqSection heading={c.faq.heading} items={c.faq.items} />
    </>
  );
}
