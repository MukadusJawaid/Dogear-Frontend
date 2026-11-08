import { Container, Decor, Reveal, Section, Stagger, StaggerItem } from "@/components/atoms";
import { InfoCard } from "@/components/molecules";
import type { InfoCardItem } from "@/types/content";
import type { ReactNode } from "react";

/** Two-column contact layout: form slot (left) + info cards (right). */
export function ContactSection({ form, info }: { form: ReactNode; info: InfoCardItem[] }) {
  return (
    <Section tone="raised" id="form">
      <Decor kind="disc" className="bg-amber-deep top-10 -left-20 size-56" />
      <Decor kind="ring" className="top-24 right-10 size-14" />
      <Container className="relative grid max-w-[1000px] items-start gap-6 py-6 lg:grid-cols-[1.4fr_1fr]">
        <Reveal y={36}>{form}</Reveal>
        <Stagger className="space-y-4" gap={0.12} delay={0.15}>
          {info.map((i) => (
            <StaggerItem key={i.title}>
              <InfoCard {...i} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
