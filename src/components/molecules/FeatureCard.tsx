import { Badge, Card, Heading, IconBadge, Text } from "@/components/atoms";
import type { CardItem } from "@/types/content";
import { FeatureVisual } from "./FeatureVisual";

export function FeatureCard({ title, description, meta, icon, visual }: CardItem) {
  return (
    <Card className="bg-surface-3 flex h-full flex-col gap-4 rounded-3xl p-8">
      {icon ? (
        <IconBadge icon={icon} />
      ) : (
        meta && <Badge className="self-start font-mono">{meta}</Badge>
      )}
      <Heading as="h3" size="h4">
        {title}
      </Heading>
      <Text size="sm" className="leading-relaxed">
        {description}
      </Text>
      {visual && (
        <div className="mt-auto pt-2">
          <FeatureVisual visual={visual} />
        </div>
      )}
    </Card>
  );
}
