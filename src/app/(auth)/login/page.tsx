import type { Metadata } from "next";
import { AuthTemplate } from "@/components/templates";
import { AuthFormContainer } from "@/forms/auth/AuthFormContainer";
import { getLoginContent } from "@/services";

export const metadata: Metadata = { title: "Log in" };

export default async function LoginPage() {
  const content = await getLoginContent();
  return (
    <AuthTemplate content={content} form={<AuthFormContainer kind="login" content={content} />} />
  );
}
