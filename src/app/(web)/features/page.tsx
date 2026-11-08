import type { Metadata } from "next";
import { FeatureTemplate } from "@/components/templates";
import { getFeaturesContent } from "@/services";

export const metadata: Metadata = { title: "Features" };

export default async function FeaturesPage() {
  return <FeatureTemplate content={await getFeaturesContent()} />;
}
