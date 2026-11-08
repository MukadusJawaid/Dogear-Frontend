import { Container, Decor, Section, Stagger, StaggerItem } from "@/components/atoms";
import { SectionHeader, StepCard } from "@/components/molecules";
import type { SectionHeading, StepItem } from "@/types/content";

/** Numbered steps joined by a dashed line. */
export function StepsSection({ heading, steps }: { heading: SectionHeading; steps: StepItem[] }) {
  return (
    <Section tone="warm">
      <Decor kind="paper" className="text-amber-deep top-10 right-10" />
      <Decor kind="disc" className="bg-amber-deep -bottom-20 -left-16 size-60" />
      <Container className="relative max-w-[760px] space-y-14">
        <SectionHeader {...heading} />
        <div className="relative">
          <span
            aria-hidden
            className="border-amber/50 absolute top-[22px] right-[16.6%] left-[16.6%] hidden border-t border-dashed md:block"
          />
          <Stagger className="relative grid gap-10 md:grid-cols-3" gap={0.15}>
            {steps.map((s, i) => (
              <StaggerItem key={s.title}>
                <StepCard index={i} {...s} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </Section>
  );
}
