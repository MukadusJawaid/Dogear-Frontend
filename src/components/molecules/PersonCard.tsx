import { Card, Text } from "@/components/atoms";
import { cn } from "@/lib/cn";
import type { PersonItem } from "@/types/content";

const tones = {
  amber: "bg-amber text-amber-ink",
  blue: "bg-periwinkle text-canvas",
  green: "bg-success text-canvas",
};

export function PersonCard({ initials, name, role, bio, tone = "amber" }: PersonItem) {
  return (
    <Card className="bg-surface-2 flex h-full flex-col items-center gap-2 rounded-2xl p-7 text-center">
      <span
        className={cn(
          "ring-line-strong font-display mb-2 grid size-14 place-items-center rounded-full text-lg font-bold ring-4",
          tones[tone],
        )}
      >
        {initials}
      </span>
      <h3 className="font-display text-ink text-h5 font-bold">{name}</h3>
      <p className="text-ink-muted text-caption">{role}</p>
      <Text size="sm" className="text-ink-soft mt-3 max-w-[230px]">
        {bio}
      </Text>
    </Card>
  );
}
