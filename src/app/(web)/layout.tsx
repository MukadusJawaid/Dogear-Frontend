import type { ReactNode } from "react";
import { PublicLayout } from "@/components/organisms";
import { getSiteContent } from "@/services";

/** Wraps every public page (home, features, pricing, about, contact) in the shared site chrome. */
export default async function WebLayout({ children }: { children: ReactNode }) {
  const site = await getSiteContent();
  return <PublicLayout site={site}>{children}</PublicLayout>;
}
