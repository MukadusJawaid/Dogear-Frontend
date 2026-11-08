import type { Metadata } from "next";
import { AuthTemplate } from "@/components/templates";
import { AuthFormContainer } from "@/forms/auth/AuthFormContainer";
import { getSignUpContent } from "@/services";

export const metadata: Metadata = { title: "Sign up" };

export default async function SignUpPage() {
  const content = await getSignUpContent();
  return (
    <AuthTemplate content={content} form={<AuthFormContainer kind="sign-up" content={content} />} />
  );
}
