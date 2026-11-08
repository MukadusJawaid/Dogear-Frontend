import Link from "next/link";
import { Container, Logo, Text } from "@/components/atoms";
import type { SiteContent } from "@/types/content";

type Props = Pick<SiteContent, "brand" | "footer">;

export function SiteFooter({ brand, footer }: Props) {
  return (
    <footer className="bg-canvas-deep">
      <Container className="grid gap-10 px-10 py-12 md:grid-cols-[1.9fr_1fr_1fr_1fr]">
        <div className="space-y-5">
          <Logo name={brand.name} href={brand.href} variant="icon" />
          <Text size="sm" className="text-ink-soft max-w-xs">
            {footer.tagline}
          </Text>
        </div>
        {footer.columns.map((col) => (
          <div key={col.title} className="space-y-4">
            <p className="text-ink text-body-sm font-bold">{col.title}</p>
            <ul className="space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-ink-soft hover:text-ink text-body-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
      <Container className="px-10">
        <div className="border-line text-ink-muted text-caption flex flex-wrap justify-between gap-2 border-t px-4 py-6">
          <span>{footer.legal}</span>
          <span>{footer.note}</span>
        </div>
      </Container>
    </footer>
  );
}
