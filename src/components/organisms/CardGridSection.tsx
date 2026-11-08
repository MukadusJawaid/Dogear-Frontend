import { Container, Decor, Lift, Section, Stagger, StaggerItem } from "@/components/atoms";
import { FeatureCard, SectionHeader } from "@/components/molecules";
import type { CardItem, SectionHeading } from "@/types/content";

type Props = {
  heading: SectionHeading;
  items: CardItem[];
  columns?: 2 | 3;
  tone?: "plain" | "raised" | "grid";
};

export function CardGridSection({ heading, items, columns = 3, tone = "raised" }: Props) {
  return (
    <Section tone={tone}>
      <Decor kind="disc" className="bg-amber-deep -top-28 -left-28 size-56" />
      <Decor kind="ring" className="top-12 right-12 size-10" />
      <Container className="relative space-y-14">
        <SectionHeader {...heading} />
        <Stagger
          className={columns === 3 ? "grid gap-6 lg:grid-cols-3" : "grid gap-6 lg:grid-cols-2"}
          gap={0.12}
        >
          {items.map((i) => (
            <StaggerItem key={i.title} className="h-full">
              <Lift className="h-full">
                <FeatureCard {...i} />
              </Lift>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
