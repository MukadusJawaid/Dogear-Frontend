import type { ReactNode } from "react";
import { Toaster } from "sonner";
import { Logo } from "@/components/atoms";
import { AuthIllustration } from "@/components/molecules";
import type { AuthPanelContent } from "@/types";

/** Shared shell for login / sign-up / forgot-password: illustration panel (left) + page content (right). */
export function AuthLayout({ panel, children }: { panel: AuthPanelContent; children: ReactNode }) {
  return (
    <div className="bg-canvas text-ink grid h-dvh grid-rows-1 overflow-hidden lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:p-4">
      <aside className="border-line bg-surface relative hidden h-full flex-col overflow-hidden rounded-[28px] border lg:flex">
        <div className="relative min-h-0 flex-1">
          <AuthIllustration />
          <span className="border-line-strong bg-canvas absolute top-8 left-8 inline-flex rounded-2xl border px-4 py-2.5 shadow-[0_12px_40px_-8px_rgb(0_0_0/0.9),0_0_0_4px_rgb(255_180_84/0.08)]">
            <Logo name={panel.brand.name} href={panel.brand.href} size="lg" />
          </span>
        </div>
        <div className="border-line border-t px-12 py-7">
          <h2 className="font-display text-h2 max-w-md font-bold">{panel.title}</h2>
          <p className="text-ink-muted text-body-lg mt-3 max-w-md">{panel.description}</p>
        </div>
      </aside>
      <main className="relative flex min-h-0 flex-col overflow-y-auto px-6 py-6 lg:px-10">
        <div className="mb-8 lg:hidden">
          <Logo name={panel.brand.name} href={panel.brand.href} size="lg" />
        </div>
        {children}
      </main>
      <Toaster theme="dark" />
    </div>
  );
}
