import type { ReactNode } from "react";
import { AuthNote, AuthTabs } from "@/components/molecules";
import type { AuthContent } from "@/types";

type Props = {
  content: AuthContent;
  /** The bound form (client container from src/forms/auth) — passed as a slot. */
  form: ReactNode;
};

/** Right-hand side of every auth page: heading, tabs, form slot, note. */
export function AuthTemplate({ content: c, form }: Props) {
  return (
    <div className="mx-auto flex w-full max-w-[680px] flex-1 flex-col justify-center gap-5">
      <div className="space-y-2">
        <h1 className="font-display text-h2 font-bold">{c.title}</h1>
        <p className="text-ink-muted text-body">{c.description}</p>
      </div>
      {c.tabs && <AuthTabs tabs={c.tabs} />}
      {form}
      {c.note && <AuthNote {...c.note} />}
    </div>
  );
}
