import { ArrowRight } from "lucide-react";
import { Button, Container, Decor, Eyebrow, Heading, Text } from "@/components/atoms";
import { Reveal, ScrollScale } from "@/components/atoms";
import { BrowserFrame, CanvasMock, Floater, ReviewPanel, TrustItem } from "@/components/molecules";
import { cn } from "@/lib/cn";
import type { HeroContent } from "@/types/content";

function Markup({ text, allAmber }: { text: string; allAmber?: boolean }) {
  const parts = text.split(/(\{[^}]+\})/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) => {
        const hit = part.startsWith("{") && part.endsWith("}");
        const content = hit ? part.slice(1, -1) : part;
        return hit || allAmber ? (
          <span key={i} className="text-amber [text-shadow:0_0_60px_rgb(255_180_84/0.35)]">
            {content}
          </span>
        ) : (
          <span key={i}>{content}</span>
        );
      })}
    </>
  );
}

export function Hero({
  badge,
  badgeTag,
  floaters,
  eyebrow,
  titleLines,
  description,
  actions,
  trust,
  mockup,
}: HeroContent) {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        mockup ? "pt-12 pb-14 md:pb-16" : "pt-10 pb-20 md:pt-14 md:pb-24",
      )}
    >
      {floaters?.map((f) => (
        <Floater key={f.label} {...f} />
      ))}
      {mockup ? (
        <>
          <Decor kind="ring" className="top-[300px] left-[7%] hidden size-20 lg:block" />
          <Decor kind="disc" className="top-[500px] left-[12%] hidden size-6 lg:block" />
        </>
      ) : (
        <>
          <Decor kind="ring" className="top-[112px] left-[4.5%] hidden size-14 lg:block" />
          <Decor kind="disc" className="top-[124px] right-[5%] hidden size-[18px] lg:block" />
        </>
      )}
      <Container className="space-y-5 text-center">
        {badge && (
          <Reveal immediate y={12}>
            <span className="border-line-strong bg-surface-2/80 text-ink text-body-sm inline-flex items-center gap-3 rounded-full border py-1.5 pr-4 pl-1.5">
              {badgeTag && (
                <span className="bg-amber text-amber-ink rounded-full px-2.5 py-0.5 text-[11px] font-bold">
                  {badgeTag}
                </span>
              )}
              {badge}
              <ArrowRight aria-hidden className="size-3.5" />
            </span>
          </Reveal>
        )}
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <Reveal immediate delay={0.1}>
          <Heading as="h1" size="display" className="mx-auto max-w-none">
            {titleLines.map((line, i) => (
              <span key={line} className="block lg:whitespace-nowrap">
                <Markup
                  text={line}
                  allAmber={!titleLines.some((l) => l.includes("{")) && i === titleLines.length - 1}
                />
              </span>
            ))}
          </Heading>
        </Reveal>
        <Reveal immediate delay={0.2}>
          <Text
            size="xl"
            className={cn("text-ink-muted mx-auto", mockup ? "max-w-[600px]" : "max-w-[520px]")}
          >
            {description}
          </Text>
        </Reveal>
        <Reveal immediate delay={0.3} className="flex flex-wrap justify-center gap-3">
          {actions.map((a, i) => (
            <Button
              key={a.label}
              href={a.href}
              variant={a.variant ?? "primary"}
              size="lg"
              className={i === 0 ? "h-12 pr-1.5 pl-7" : "bg-surface/60 h-12 px-8"}
            >
              {a.label}
              {i === 0 && (
                <span className="bg-canvas text-amber grid size-9 place-items-center rounded-full">
                  <ArrowRight aria-hidden className="size-4" />
                </span>
              )}
            </Button>
          ))}
        </Reveal>
        {trust && (
          <Reveal immediate delay={0.4}>
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              {trust.map((t) => (
                <TrustItem key={t} label={t} />
              ))}
            </ul>
          </Reveal>
        )}
      </Container>
      {mockup && (
        <Container className="mt-12 max-w-[1088px]">
          <ScrollScale>
            <BrowserFrame url={mockup.url} version={mockup.version} status={mockup.status}>
              <div className="grid gap-4 p-3 lg:grid-cols-[1.9fr_1fr]">
                <CanvasMock {...mockup.canvas} className="min-h-[360px]" size="lg" />
                <ReviewPanel panel={mockup.panel} />
              </div>
            </BrowserFrame>
          </ScrollScale>
        </Container>
      )}
    </section>
  );
}
