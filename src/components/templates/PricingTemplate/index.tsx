import { FaqSection, Hero, LimitSection, PlanSwitcher } from "@/components/organisms";
import type { PricingContent } from "@/types";

type Props = { content: PricingContent };

export function PricingTemplate({ content: c }: Props) {
  return (
    <>
      <Hero {...c.hero} />
      <PlanSwitcher {...c.plans} />
      <LimitSection {...c.limit} />
      <FaqSection heading={c.billing.heading} items={c.billing.items} />
    </>
  );
}
