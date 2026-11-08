import type { Metadata } from "next";
import { ContactTemplate } from "@/components/templates";
import { ContactFormContainer } from "@/forms/contact/ContactFormContainer";
import { getContactContent } from "@/services";

export const metadata: Metadata = { title: "Contact" };

export default async function ContactPage() {
  const content = await getContactContent();
  return (
    <ContactTemplate content={content} form={<ContactFormContainer content={content.form} />} />
  );
}
