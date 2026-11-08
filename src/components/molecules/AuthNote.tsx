import { Link2, Mail } from "lucide-react";
import type { AuthContent } from "@/types";

const icons = { link: Link2, mail: Mail };

export function AuthNote({ icon, title, text }: NonNullable<AuthContent["note"]>) {
  const Icon = icons[icon];
  return (
    <div className="border-amber/30 bg-amber-deep/30 flex gap-4 rounded-xl border border-dashed p-5">
      <span className="bg-amber-deep text-amber grid size-10 shrink-0 place-items-center rounded-full">
        <Icon aria-hidden className="size-4" />
      </span>
      <div>
        <p className="text-ink text-body-sm font-bold">{title}</p>
        <p className="text-ink-muted text-caption mt-1 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
