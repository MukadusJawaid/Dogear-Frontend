import { aboutContent } from "@/data";
import { fetchContent } from "@/lib/cms";
import type { AboutContent } from "@/types";

export const getAboutContent = (): Promise<AboutContent> => fetchContent(aboutContent);
