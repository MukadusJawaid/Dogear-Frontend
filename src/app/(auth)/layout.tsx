import type { ReactNode } from "react";
import { AuthLayout } from "@/components/organisms";
import { getAuthPanelContent } from "@/services";

/** Wraps login, sign-up and forgot-password in the shared auth shell. */
export default async function AuthRouteLayout({ children }: { children: ReactNode }) {
  return <AuthLayout panel={await getAuthPanelContent()}>{children}</AuthLayout>;
}
