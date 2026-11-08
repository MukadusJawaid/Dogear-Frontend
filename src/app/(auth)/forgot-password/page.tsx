import type { Metadata } from "next";
import { AuthTemplate } from "@/components/templates";
import { AuthFormContainer } from "@/forms/auth/AuthFormContainer";
import { getForgotContent } from "@/services";

export const metadata: Metadata = { title: "Reset your password" };

export default async function ForgotPasswordPage() {
  const content = await getForgotContent();
  return (
    <AuthTemplate content={content} form={<AuthFormContainer kind="forgot" content={content} />} />
  );
}
