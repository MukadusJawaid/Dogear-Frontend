import { featuresContent } from "@/data";
import { fetchContent } from "@/lib/cms";
import type { FeaturesContent } from "@/types";

export const getFeaturesContent = (): Promise<FeaturesContent> => fetchContent(featuresContent);
