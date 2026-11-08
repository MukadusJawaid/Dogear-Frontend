import { Container, Decor, Eyebrow, Heading, Reveal, Section, Text } from "@/components/atoms";
import { PaperVisual } from "@/components/molecules";

type Props = { eyebrow?: string; title: string; paragraphs: string[]; quote?: string };

export function StorySection({ eyebrow, title, paragraphs, quote }: Props) {
  return (
    <Section tone="raised">
      <Decor kind="ring" className="top-12 right-12 size-10" />
      <Decor kind="disc" className="bg-amber-deep -bottom-24 -left-16 size-60" />
      <Container className="relative grid items-center gap-14 py-6 lg:grid-cols-2">
        <Reveal className="space-y-4">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <Heading className="max-w-md">{title}</Heading>
          <div className="max-w-sm space-y-4 pt-2">
            {paragraphs.map((p) => (
              <Text key={p} size="sm">
                {p}
              </Text>
            ))}
          </div>
        </Reveal>
        {quote && (
          <Reveal delay={0.15} y={36}>
            <PaperVisual caption={quote} />
          </Reveal>
        )}
      </Container>
    </Section>
  );
}
