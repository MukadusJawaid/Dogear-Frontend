import { Hero, RulesSection, StorySection, TeamSection } from "@/components/organisms";
import type { AboutContent } from "@/types";

type Props = { content: AboutContent };

export function AboutTemplate({ content: c }: Props) {
  return (
    <>
      <Hero {...c.hero} />
      <StorySection {...c.story} />
      <RulesSection {...c.beliefs} />
      <div id="team">
        <TeamSection {...c.team} />
      </div>
    </>
  );
}
