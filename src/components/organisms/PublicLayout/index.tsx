import type { ReactNode } from "react";
import { BackToTop, ScrollProgress } from "@/components/atoms";
import { CtaBanner } from "../CtaBanner";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import type { SiteContent } from "@/types/content";

type Props = {
  site: SiteContent;
  children: ReactNode;
};

/**
 * The shared layout for every public (marketing) page: dark canvas + amber glow + header + footer + CTA.
 * Applied once in app/(web)/layout.tsx — pages and templates never wrap themselves.
 */
export function PublicLayout({ site, children }: Props) {
  return (
    <div className="bg-canvas text-ink relative flex min-h-screen flex-col overflow-x-clip">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[900px] bg-[radial-gradient(900px_420px_at_50%_-80px,rgb(255_180_84/0.1),transparent_70%),radial-gradient(rgb(255_255_255/0.05)_1px,transparent_1.5px)] [background-size:auto,28px_28px]"
      />
      <ScrollProgress />
      <SiteHeader brand={site.brand} nav={site.nav} headerActions={site.headerActions} />
      <main className="relative flex-1">
        {children}
        <CtaBanner {...site.cta} />
      </main>
      <SiteFooter brand={site.brand} footer={site.footer} />
      <BackToTop label={site.backToTopLabel} />
    </div>
  );
}
