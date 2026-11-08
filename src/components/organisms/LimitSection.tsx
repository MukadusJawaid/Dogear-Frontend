import { Container, Decor, Eyebrow, Heading, Reveal, Section, Text } from "@/components/atoms";
import { cn } from "@/lib/cn";
import type { LimitContent } from "@/types/content";

export function LimitSection({ heading, card }: LimitContent) {
  return (
    <Section tone="warm">
      <Decor kind="paper" className="text-amber-deep top-10 right-10" />
      <Decor kind="disc" className="bg-amber-deep -bottom-28 -left-16 size-64" />
      <Container className="relative grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="space-y-4">
          {heading.eyebrow && <Eyebrow>{heading.eyebrow}</Eyebrow>}
          <Heading>{heading.title}</Heading>
          {heading.description && <Text className="max-w-md">{heading.description}</Text>}
        </Reveal>
        <Reveal delay={0.15} y={36}>
          <div className="border-line bg-surface-2 mx-auto max-w-md rounded-2xl border p-6 shadow-[0_30px_70px_-30px_rgb(0_0_0/0.8)]">
            <div className="flex items-center justify-between">
              <p className="text-ink text-body-sm font-bold">{card.title}</p>
              <span className="bg-canvas text-ink-soft inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs">
                <span className="bg-amber size-1.5 rounded-full" />
                {card.used}
              </span>
            </div>
            <div className="bg-line mt-4 h-2 overflow-hidden rounded-full">
              <div className="bg-amber h-full w-full" />
            </div>
            <ul className="mt-4 space-y-2">
              {card.rows.map((r) => (
                <li
                  key={r.name}
                  className="bg-surface-3 flex items-center gap-3 rounded-xl px-4 py-3 text-xs"
                >
                  <span
                    className={cn(
                      "size-1.5 rounded-full",
                      r.tone === "amber" ? "bg-amber" : "bg-success",
                    )}
                  />
                  <span className="text-ink-soft">{r.name}</span>
                  <span className="border-line-strong text-ink ml-auto rounded-full border px-3 py-1 font-semibold">
                    {card.archiveLabel}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex gap-2 text-xs font-semibold">
              <span className="bg-amber text-amber-ink rounded-full px-4 py-1.5">
                {card.primaryLabel}
              </span>
              <span className="border-line-strong text-ink rounded-full border px-4 py-1.5">
                {card.secondaryLabel}
              </span>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
