import { homeContent } from "@/data";
import { fetchContent } from "@/lib/cms";
import type { HomeContent } from "@/types";

export const getHomeContent = (): Promise<HomeContent> => fetchContent(homeContent);
