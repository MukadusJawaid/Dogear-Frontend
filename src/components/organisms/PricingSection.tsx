import { Container, Decor, Lift, Section, Stagger, StaggerItem } from "@/components/atoms";
import { PlanCard, SectionHeader } from "@/components/molecules";
import type { PlanItem, SectionHeading } from "@/types/content";

export function PricingSection({ heading, plans }: { heading: SectionHeading; plans: PlanItem[] }) {
  return (
    <Section tone="warm">
      <Decor kind="paper" className="text-amber-deep top-80 left-10" />
      <Decor kind="disc" className="top-72 right-16 size-8" />
      <Container className="relative space-y-14">
        <SectionHeader {...heading} />
        <Stagger className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2" gap={0.15}>
          {plans.map((p) => (
            <StaggerItem key={p.name} className="h-full">
              <Lift className="h-full">
                <PlanCard {...p} />
              </Lift>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
