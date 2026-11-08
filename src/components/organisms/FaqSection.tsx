"use client";

import Link from "next/link";
import { Accordion } from "radix-ui";
import {
  Container,
  Decor,
  Eyebrow,
  Heading,
  Reveal,
  Section,
  Stagger,
  StaggerItem,
  Text,
} from "@/components/atoms";
import { FaqEntry } from "@/components/molecules";
import type { FaqItem, FaqSectionContent } from "@/types";

export function FaqSection({ heading, items }: { heading: FaqSectionContent; items: FaqItem[] }) {
  const { eyebrow, title, description, footnote } = heading;
  return (
    <Section className="from-surface to-canvas-deep border-amber/25 bg-linear-to-b py-16 md:py-20">
      {/* faint ruled lines that fade out toward the right */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgb(255_255_255/0.04)_0_1px,transparent_1px_36px)] [mask-image:linear-gradient(90deg,#000,transparent_55%)]"
      />
      <Decor kind="disc" className="bg-amber-deep top-[60px] -right-12 size-[170px]" />
      <Decor kind="ring" className="border-amber/70 bottom-24 left-10 size-12" />
      <Container className="relative grid gap-12 lg:grid-cols-[1fr_610px] lg:gap-24">
        <Reveal className="space-y-5 pt-2">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <Heading className="whitespace-pre-line">{title}</Heading>
          {description && <Text size="lg">{description}</Text>}
          {footnote && (
            <Text className="border-line mt-10 max-w-[380px] border-t pt-8">
              {footnote.prefix}{" "}
              <Link
                href={footnote.href}
                className="text-amber font-semibold underline underline-offset-4"
              >
                {footnote.linkLabel}
              </Link>
              {footnote.suffix}
            </Text>
          )}
        </Reveal>
        <Accordion.Root type="single" collapsible defaultValue={items[0]?.question} asChild>
          <Stagger className="space-y-2" gap={0.08}>
            {items.map((f, i) => (
              <StaggerItem key={f.question}>
                <FaqEntry index={i} {...f} />
              </StaggerItem>
            ))}
          </Stagger>
        </Accordion.Root>
      </Container>
    </Section>
  );
}
