import { pricingContent } from "@/data";
import { fetchContent } from "@/lib/cms";
import type { PricingContent } from "@/types";

export const getPricingContent = (): Promise<PricingContent> => fetchContent(pricingContent);
