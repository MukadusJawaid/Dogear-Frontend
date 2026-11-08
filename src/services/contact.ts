import { contactContent } from "@/data";
import { fetchContent } from "@/lib/cms";
import type { ContactContent } from "@/types";

export const getContactContent = (): Promise<ContactContent> => fetchContent(contactContent);
