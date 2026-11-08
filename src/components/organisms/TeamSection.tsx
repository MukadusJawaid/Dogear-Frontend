import { Container, Decor, Lift, Section, Stagger, StaggerItem } from "@/components/atoms";
import { PersonCard, SectionHeader } from "@/components/molecules";
import type { PersonItem, SectionHeading } from "@/types/content";

export function TeamSection({
  heading,
  people,
}: {
  heading: SectionHeading;
  people: PersonItem[];
}) {
  return (
    <Section tone="lines">
      <Decor kind="disc" className="bg-amber-deep top-10 -right-12 size-44" />
      <Decor kind="ring" className="right-12 bottom-14 size-20" />
      <Container className="relative space-y-12">
        <SectionHeader {...heading} />
        <Stagger className="mx-auto grid max-w-[900px] gap-5 md:grid-cols-3" gap={0.12}>
          {people.map((p) => (
            <StaggerItem key={p.name} className="h-full">
              <Lift className="h-full">
                <PersonCard {...p} />
              </Lift>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
