import { Container, Decor, Section, Stagger, StaggerItem } from "@/components/atoms";
import { CanvasMock, DeviceFrame, SectionHeader } from "@/components/molecules";
import type { DeviceItem, SectionHeading } from "@/types/content";

export function DevicesSection({
  heading,
  devices,
}: {
  heading: SectionHeading;
  devices: DeviceItem[];
}) {
  return (
    <Section tone="warm">
      <Decor kind="paper" className="text-amber-deep top-10 right-12" />
      <Decor kind="disc" className="bg-amber-deep -bottom-24 -left-16 size-64" />
      <Container className="relative space-y-14">
        <SectionHeader {...heading} />
        <Stagger
          className="mx-auto flex max-w-[960px] flex-wrap items-end justify-center gap-8 lg:flex-nowrap"
          gap={0.15}
        >
          {devices.map((d) => (
            <StaggerItem
              key={d.label}
              className={d.kind === "desktop" ? "w-full flex-[3]" : "flex-none"}
            >
              <DeviceFrame kind={d.kind} label={d.label}>
                <CanvasMock {...d.canvas} size="sm" className="size-full rounded-none" />
              </DeviceFrame>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
