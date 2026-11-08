import { Container, Decor, Section, Stagger, StaggerItem } from "@/components/atoms";
import { SectionHeader } from "@/components/molecules";
import type { CardItem, SectionHeading } from "@/types/content";

/** Numbered principles as ruled rows: big number · title · explanation. */
export function RulesSection({ heading, items }: { heading: SectionHeading; items: CardItem[] }) {
  return (
    <Section tone="warm">
      <Decor kind="paper" className="text-amber-deep top-10 right-10" />
      <Decor kind="disc" className="bg-amber-deep -bottom-20 -left-16 size-60" />
      <Container className="relative max-w-[1000px] space-y-12">
        <SectionHeader {...heading} />
        <Stagger
          className="border-line-strong/60 divide-line-strong/60 divide-y border-y"
          gap={0.12}
        >
          {items.map((r) => (
            <StaggerItem
              key={r.title}
              className="grid items-center gap-4 py-7 md:grid-cols-[110px_1.1fr_1fr]"
            >
              <span className="font-display text-amber text-h1 font-bold">{r.meta}</span>
              <h3 className="font-display text-ink text-h4 font-bold">{r.title}</h3>
              <p className="text-ink-soft text-body-sm leading-relaxed">{r.description}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
