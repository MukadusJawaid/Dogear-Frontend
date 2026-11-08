"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button, Container, Decor, Eyebrow, Reveal, Section } from "@/components/atoms";
import { SectionHeader } from "@/components/molecules";
import { cn } from "@/lib/cn";
import { ease, gentle } from "@/lib/motion";
import type { PlanSwitchContent } from "@/types/content";

/** Free/Pro toggle: the price panel swaps and Pro-only features light up. */
export function PlanSwitcher({ heading, plans, features, proTag }: PlanSwitchContent) {
  const [id, setId] = useState<"free" | "pro">("free");
  const plan = plans.find((p) => p.id === id) ?? plans[0];

  return (
    <Section tone="raised" id="plans">
      <Decor kind="disc" className="bg-amber-deep top-24 -left-20 size-56" />
      <Decor kind="ring" className="top-12 right-12 size-10" />
      <Container className="relative space-y-10">
        <SectionHeader {...heading} />
        <Reveal className="flex justify-center">
          <div role="tablist" className="border-line bg-surface flex rounded-full border p-1">
            {plans.map((p) => (
              <button
                key={p.id}
                role="tab"
                aria-selected={p.id === id}
                onClick={() => setId(p.id)}
                className={cn(
                  "text-body-sm relative rounded-full px-7 py-2 font-semibold transition-colors",
                  p.id === id ? "text-amber-ink" : "text-ink-muted hover:text-ink",
                )}
              >
                {p.id === id && (
                  <motion.span
                    layoutId="plan-pill"
                    className="bg-amber absolute inset-0 rounded-full"
                    transition={gentle}
                  />
                )}
                <span className="relative">{p.tab}</span>
              </button>
            ))}
          </div>
        </Reveal>
        <Reveal y={40}>
          <div className="border-line bg-surface-2 mx-auto grid max-w-[880px] overflow-hidden rounded-3xl border lg:grid-cols-[0.9fr_1.5fr]">
            <div className="bg-surface-3 relative p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={plan.id}
                  className="flex h-full flex-col gap-3"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25, ease }}
                >
                  <Eyebrow>{plan.name}</Eyebrow>
                  <div className="font-display text-ink text-stat font-bold">{plan.price}</div>
                  <p className="text-ink-muted text-caption">{plan.period}</p>
                  <p className="text-ink text-body-sm mt-2">{plan.description}</p>
                  <Button
                    href={plan.action.href}
                    variant="secondary"
                    size="sm"
                    className="mt-auto w-fit pr-1.5 pl-5"
                  >
                    {plan.action.label}
                    <span className="bg-canvas text-amber grid size-6 place-items-center rounded-full">
                      <ArrowRight aria-hidden className="size-3.5" />
                    </span>
                  </Button>
                </motion.div>
              </AnimatePresence>
            </div>
            <ul className="grid content-center gap-3 p-8 sm:grid-cols-2">
              {features.map((f, n) => {
                const on = id === "pro" || !f.proOnly;
                return (
                  <li
                    key={f.label}
                    className={cn(
                      "border-line relative flex min-h-14 items-center gap-3 rounded-xl border px-4 py-3 transition-opacity duration-300",
                      on ? "bg-surface-2 opacity-100" : "opacity-45",
                    )}
                  >
                    <span
                      className={cn(
                        "grid size-6 shrink-0 place-items-center rounded-full text-xs font-bold transition-colors",
                        on ? "bg-amber text-amber-ink" : "bg-surface-4 text-ink-muted",
                      )}
                    >
                      {n + 1}
                    </span>
                    <span className="text-ink-soft text-body-sm">{f.label}</span>
                    {f.proOnly && (
                      <span className="text-amber absolute top-1.5 right-3 font-mono text-[9px] font-bold">
                        {proTag}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
