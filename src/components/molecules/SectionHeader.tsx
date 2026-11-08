import { Eyebrow, Heading, Reveal, Text } from "@/components/atoms";
import { cn } from "@/lib/cn";
import type { SectionHeading } from "@/types/content";

export function SectionHeader({ eyebrow, title, description, align = "center" }: SectionHeading) {
  return (
    <Reveal className={cn("max-w-5xl space-y-3", align === "center" && "mx-auto text-center")}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Heading className="whitespace-pre-line">{title}</Heading>
      {description && <Text size="lg">{description}</Text>}
    </Reveal>
  );
}
