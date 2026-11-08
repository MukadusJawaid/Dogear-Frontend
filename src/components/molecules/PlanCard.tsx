import { ArrowRight, Check } from "lucide-react";
import { Button, Card, Eyebrow, Text } from "@/components/atoms";
import { cn } from "@/lib/cn";
import type { PlanItem } from "@/types/content";

export function PlanCard({
  name,
  price,
  period,
  description,
  highlighted,
  badge,
  features,
  action,
}: PlanItem) {
  return (
    <Card
      className={cn(
        "bg-surface-2 border-line-strong relative flex h-full flex-col gap-6 overflow-hidden rounded-3xl p-8",
        highlighted && "border-amber/70",
      )}
    >
      {highlighted && (
        <span
          aria-hidden
          className="bg-amber absolute top-0 right-0 size-10 [clip-path:polygon(0_0,100%_0,100%_100%)]"
        />
      )}
      {badge && (
        <span className="bg-amber text-amber-ink absolute top-5 right-14 rounded-md px-2.5 py-1 text-xs font-bold">
          {badge}
        </span>
      )}
      <div className="space-y-3">
        <Eyebrow>{name}</Eyebrow>
        <div className="font-display text-ink text-stat font-bold">{price}</div>
        <p className="text-ink-muted text-sm">{period}</p>
        {description && <Text size="sm">{description}</Text>}
      </div>
      <ul className="flex-1 space-y-3.5">
        {features.map((f, i) => (
          <li key={f} className="text-ink flex items-center gap-3 text-sm">
            <Check aria-hidden className="text-amber size-4 shrink-0" />
            <span className={cn(i === 0 && "font-semibold")}>{f}</span>
          </li>
        ))}
      </ul>
      <Button
        href={action.href}
        variant={highlighted ? "primary" : "secondary"}
        className={cn("h-12", highlighted && "pr-2")}
      >
        {action.label}
        {highlighted && (
          <span className="bg-canvas text-amber grid size-7 place-items-center rounded-full">
            <ArrowRight aria-hidden className="size-4" />
          </span>
        )}
      </Button>
    </Card>
  );
}
