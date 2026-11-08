import { CircleAlert, FileText, Mail } from "lucide-react";
import type { InfoCardItem } from "@/types/content";

const icons = { mail: Mail, file: FileText, alert: CircleAlert };

export function InfoCard({ icon, title, text }: InfoCardItem) {
  const Icon = icons[icon];
  return (
    <div className="border-line bg-surface-3 flex gap-4 rounded-2xl border p-5">
      <span className="border-amber/30 bg-amber-deep text-amber grid size-11 shrink-0 place-items-center rounded-full border">
        <Icon aria-hidden className="size-4" />
      </span>
      <div>
        <p className="text-ink text-body-sm font-bold">{title}</p>
        <p className="text-ink-muted text-body-sm mt-0.5 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
