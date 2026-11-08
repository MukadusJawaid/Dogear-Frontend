import { siteContent } from "@/data";
import { fetchContent } from "@/lib/cms";
import type { SiteContent } from "@/types";

export const getSiteContent = (): Promise<SiteContent> => fetchContent(siteContent);
