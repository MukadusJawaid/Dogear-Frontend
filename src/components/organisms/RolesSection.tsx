import { Container, Decor, Lift, Section, Stagger, StaggerItem } from "@/components/atoms";
import { RoleVisualView, SectionHeader } from "@/components/molecules";
import type { RoleItem, SectionHeading } from "@/types/content";

export function RolesSection({ heading, roles }: { heading: SectionHeading; roles: RoleItem[] }) {
  return (
    <Section tone="grid">
      <Decor kind="ring" className="top-24 left-10 size-14" />
      <Decor kind="pill" className="top-28 right-10" />
      <Container className="relative space-y-14">
        <SectionHeader {...heading} />
        <Stagger className="mx-auto grid max-w-[1040px] gap-5 lg:grid-cols-3" gap={0.12}>
          {roles.map((r) => (
            <StaggerItem key={r.role} className="h-full">
              <Lift className="h-full">
                <div className="border-line bg-surface-3 flex h-full flex-col gap-3 rounded-2xl border p-6">
                  <p className="text-ink-muted text-micro">{r.role}</p>
                  <h3 className="font-display text-ink text-h5 mt-3 font-bold">{r.title}</h3>
                  <p className="text-ink-muted text-body-sm leading-relaxed">{r.description}</p>
                  <div className="mt-auto pt-3">
                    <RoleVisualView visual={r.visual} />
                  </div>
                </div>
              </Lift>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
