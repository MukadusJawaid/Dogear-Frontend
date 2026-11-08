import { ArrowRight } from "lucide-react";
import { Button, Container, Decor, Heading, Reveal, Section } from "@/components/atoms";
import type { SiteContent } from "@/types/content";

export function CtaBanner({ title, actions }: SiteContent["cta"]) {
  return (
    <Section tone="amber" className="py-16 md:py-20">
      <Decor kind="card" className="top-10 left-[8%]" />
      <Decor kind="disc" className="bg-canvas top-8 right-[14%] size-14" />
      <Decor kind="disc" className="bg-amber-end -bottom-28 -left-8 size-64" />
      <Decor kind="paper" className="text-mock-cream right-[7%] -bottom-6" />
      <Container className="relative text-center">
        <Reveal>
          <Heading className="text-amber-ink mx-auto max-w-xl">{title}</Heading>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {actions.map((a, i) => (
              <Button
                key={a.label}
                href={a.href}
                size="lg"
                variant="ghost"
                className={
                  i === 0
                    ? "bg-canvas text-ink hover:bg-canvas/90 hover:text-ink pr-2"
                    : "border-amber-ink/40 text-amber-ink hover:text-amber-ink border"
                }
              >
                {a.label}
                {i === 0 && (
                  <span className="bg-amber text-amber-ink grid size-7 place-items-center rounded-full">
                    <ArrowRight aria-hidden className="size-4" />
                  </span>
                )}
              </Button>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
