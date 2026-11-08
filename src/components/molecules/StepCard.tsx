import { Text } from "@/components/atoms";
import type { StepItem } from "@/types/content";

export function StepCard({ index, title, description }: StepItem & { index: number }) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <span className="bg-amber text-amber-ink font-display relative z-10 grid size-11 place-items-center rounded-full text-lg font-bold shadow-[0_0_0_6px_rgb(255_180_84/0.12)]">
        {index + 1}
      </span>
      <h3 className="font-display text-ink text-h5 mt-2 font-bold">{title}</h3>
      <Text size="sm" className="max-w-[210px]">
        {description}
      </Text>
    </div>
  );
}
