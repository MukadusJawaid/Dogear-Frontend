import { MessageSquare, CircleCheck, MapPin } from "lucide-react";

const icons = { pin: MapPin, chat: MessageSquare, check: CircleCheck };

export function IconBadge({ icon }: { icon: keyof typeof icons }) {
  const Icon = icons[icon];
  return (
    <span className="border-amber/30 bg-amber-deep text-amber grid size-12 place-items-center rounded-xl border">
      <Icon aria-hidden className="size-5" />
    </span>
  );
}
