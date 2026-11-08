import { ArrowRight } from "lucide-react";
import { Button, Container, Logo } from "@/components/atoms";
import { NavTabs } from "@/components/molecules";
import type { SiteContent } from "@/types/content";

type Props = Pick<SiteContent, "brand" | "nav" | "headerActions">;

export function SiteHeader({ brand, nav, headerActions }: Props) {
  return (
    <header className="sticky top-0 z-30 py-3">
      <Container className="border-line bg-canvas/80 relative flex flex-wrap items-center justify-between gap-x-6 gap-y-2 rounded-3xl border px-3 py-2 backdrop-blur-md lg:h-[62px] lg:flex-nowrap lg:rounded-full lg:py-0">
        <Logo name={brand.name} href={brand.href} className="pl-2" />
        <NavTabs
          links={nav}
          className="order-last w-full justify-center overflow-x-auto lg:absolute lg:left-1/2 lg:order-none lg:w-auto lg:-translate-x-1/2"
        />
        <div className="flex items-center gap-2">
          {headerActions.map((a) => (
            <Button
              key={a.label}
              href={a.href}
              variant={a.variant ?? "primary"}
              size="sm"
              className={a.variant === "ghost" ? "text-ink text-xs font-semibold" : "pr-1.5"}
            >
              {a.label}
              {(a.variant ?? "primary") === "primary" && (
                <span className="bg-canvas text-amber grid size-6 place-items-center rounded-full">
                  <ArrowRight aria-hidden className="size-3.5" />
                </span>
              )}
            </Button>
          ))}
        </div>
      </Container>
    </header>
  );
}
