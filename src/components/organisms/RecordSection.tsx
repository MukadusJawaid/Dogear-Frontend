import { Container, Decor, Pin, Section, Stagger, StaggerItem } from "@/components/atoms";
import { RecordRow, SectionHeader } from "@/components/molecules";
import type { RecordItem, SectionHeading } from "@/types/content";

/** "Proof" grid of approved versions. Tablet/mobile behaviour (e.g. swipe) is added in the responsive pass. */
export function RecordSection({
  heading,
  records,
}: {
  heading: SectionHeading;
  records: RecordItem[];
}) {
  return (
    <Section tone="grid">
      <Decor kind="dots" className="top-24 left-8" />
      <span className="absolute top-20 right-28 scale-75">
        <Pin n={2} />
      </span>
      <Container className="relative space-y-14">
        <SectionHeader {...heading} />
        <Stagger
          className="flex snap-x [scrollbar-width:none] gap-5 overflow-x-auto pb-2 lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible"
          gap={0.1}
        >
          {records.map((r) => (
            <StaggerItem
              key={`${r.project}-${r.version}`}
              className="h-full w-[260px] shrink-0 snap-start lg:w-auto"
            >
              <RecordRow {...r} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
