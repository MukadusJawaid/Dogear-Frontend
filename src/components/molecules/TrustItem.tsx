import { Check } from "lucide-react";

export function TrustItem({ label }: { label: string }) {
  return (
    <li className="text-ink-muted text-body-sm flex items-center gap-2">
      <Check aria-hidden className="text-amber size-4" strokeWidth={2.5} />
      {label}
    </li>
  );
}
