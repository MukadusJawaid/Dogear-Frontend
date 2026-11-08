import type { Metadata } from "next";
import { AboutTemplate } from "@/components/templates";
import { getAboutContent } from "@/services";

export const metadata: Metadata = { title: "About" };

export default async function AboutPage() {
  return <AboutTemplate content={await getAboutContent()} />;
}
