"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { Container, Decor, Reveal, Section } from "@/components/atoms";
import { BrowserFrame, CanvasMock, SectionHeader } from "@/components/molecules";
import { cn } from "@/lib/cn";
import { ease, gentle } from "@/lib/motion";
import type { TourContent } from "@/types/content";

/** Interactive tour: pill tabs switch the previewed step (also via prev/next). */
export function FeatureTour({
  heading,
  url,
  livePreview,
  stepLabel,
  prevLabel,
  nextLabel,
  steps,
}: TourContent) {
  const [i, setI] = useState(0);
  const step = steps[i];
  const go = (n: number) => setI((n + steps.length) % steps.length);

  return (
    <Section tone="raised" id="tour">
      <Decor kind="disc" className="bg-amber-deep top-24 -right-16 size-52" />
      <Container className="relative space-y-10">
        <SectionHeader {...heading} />
        <Reveal>
          <div
            role="tablist"
            aria-label={heading.title}
            className="flex flex-wrap justify-center gap-2"
          >
            {steps.map((s, n) => (
              <button
                key={s.tab}
                role="tab"
                aria-selected={n === i}
                onClick={() => setI(n)}
                className={cn(
                  "text-caption relative flex items-center gap-2 rounded-full border px-3 py-1.5 font-semibold transition-colors",
                  n === i ? "border-amber/60 text-ink" : "border-line text-ink-soft hover:text-ink",
                )}
              >
                {n === i && (
                  <motion.span
                    layoutId="tour-pill"
                    className="bg-amber-wash absolute inset-0 rounded-full"
                    transition={gentle}
                  />
                )}
                <span
                  className={cn(
                    "relative grid size-5 place-items-center rounded-full text-[11px] font-bold",
                    n === i ? "bg-amber text-amber-ink" : "bg-surface-4 text-ink-soft",
                  )}
                >
                  {n + 1}
                </span>
                <span className="relative">{s.tab}</span>
              </button>
            ))}
          </div>
        </Reveal>
        <Reveal y={40}>
          <div className="mx-auto max-w-[1040px]">
            <BrowserFrame url={url} version={step.tab} status={livePreview}>
              <div className="grid lg:grid-cols-[1.45fr_1fr]">
                <div className="relative">
                  <motion.span
                    key={`bar-${i}`}
                    className="bg-amber absolute top-0 left-0 z-10 h-0.5 origin-left"
                    initial={{ width: 0 }}
                    animate={{ width: `${((i + 1) / steps.length) * 100}%` }}
                    transition={{ duration: 0.6, ease }}
                  />
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, ease }}
                    >
                      <CanvasMock
                        {...step.canvas}
                        size="lg"
                        className="min-h-[360px] rounded-none"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div className="flex flex-col gap-4 p-8">
                  <div className="text-ink-muted text-caption flex justify-between">
                    <span>{stepLabel}</span>
                    <span className="text-ink-soft font-mono text-xs">
                      {i + 1} / {steps.length}
                    </span>
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={i}
                      className="space-y-4"
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -16 }}
                      transition={{ duration: 0.3, ease }}
                    >
                      <h3 className="font-display text-ink text-h4 font-bold">{step.title}</h3>
                      <p className="text-ink-muted text-body-sm leading-relaxed">
                        {step.description}
                      </p>
                      <ul className="space-y-2.5">
                        {step.bullets.map((b) => (
                          <li key={b} className="text-ink text-body-sm flex gap-3">
                            <Check
                              aria-hidden
                              className="text-amber mt-0.5 size-4 shrink-0"
                              strokeWidth={2.5}
                            />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </AnimatePresence>
                  <div className="mt-auto flex gap-2 pt-4">
                    <button
                      aria-label={prevLabel}
                      onClick={() => go(i - 1)}
                      className="border-line-strong text-ink hover:border-amber grid size-10 place-items-center rounded-full border transition-colors"
                    >
                      <ArrowLeft className="size-4" />
                    </button>
                    <button
                      aria-label={nextLabel}
                      onClick={() => go(i + 1)}
                      className="border-line-strong text-ink hover:border-amber grid size-10 place-items-center rounded-full border transition-colors"
                    >
                      <ArrowRight className="size-4" />
                    </button>
                  </div>
                </div>
              </div>
            </BrowserFrame>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
