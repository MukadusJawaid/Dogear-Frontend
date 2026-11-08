import type { Metadata } from "next";
import { PricingTemplate } from "@/components/templates";
import { getPricingContent } from "@/services";

export const metadata: Metadata = { title: "Pricing" };

export default async function PricingPage() {
  return <PricingTemplate content={await getPricingContent()} />;
}
