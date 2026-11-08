import type { ReactNode } from "react";
import { Toaster } from "sonner";
import { ContactSection, Hero, StepsSection } from "@/components/organisms";
import type { ContactContent } from "@/types";

type Props = {
  content: ContactContent;
  /** The bound form (client container from the feature) — passed as a slot to keep templates free of feature logic. */
  form: ReactNode;
};

export function ContactTemplate({ content: c, form }: Props) {
  return (
    <>
      <Hero {...c.hero} />
      <ContactSection form={form} info={c.info} />
      <StepsSection {...c.steps} />
      <Toaster theme="dark" />
    </>
  );
}
