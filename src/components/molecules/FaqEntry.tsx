import { ChevronDown } from "lucide-react";
import { Accordion } from "radix-ui";
import type { FaqItem } from "@/types";

export function FaqEntry({ index, question, answer }: FaqItem & { index: number }) {
  return (
    <Accordion.Item
      value={question}
      className="group border-line bg-surface-2 data-[state=open]:border-amber/50 data-[state=open]:bg-surface-3 rounded-2xl border transition-colors"
    >
      <Accordion.Header>
        <Accordion.Trigger className="flex w-full items-center gap-4 px-5 py-4 text-left">
          <span className="text-ink-faint group-data-[state=open]:text-amber w-5 font-mono text-xs">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-display text-ink text-body-lg flex-1 font-semibold">
            {question}
          </span>
          <ChevronDown
            aria-hidden
            className="border-line-strong bg-canvas text-amber group-data-[state=open]:border-amber/60 group-data-[state=open]:bg-amber-wash size-7 rounded-lg border p-1.5 transition-transform group-data-[state=open]:rotate-180"
          />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
        <p className="text-ink-muted pr-12 pb-4 pl-[56px] text-base leading-relaxed">{answer}</p>
      </Accordion.Content>
    </Accordion.Item>
  );
}
