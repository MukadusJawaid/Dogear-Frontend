"use client";

import { ContactForm } from "@/components/organisms";
import { contactInitialValues } from "@/initial-values";
import { contactSchema } from "@/schemas";
import type { ContactFormContent } from "@/types";
import { submitContact } from "./actions";

/** Binds the contact schema, initial values and server action to the presentational ContactForm. */
export function ContactFormContainer({ content }: { content: ContactFormContent }) {
  return (
    <ContactForm
      content={content}
      schema={contactSchema}
      defaultValues={contactInitialValues}
      onSubmit={submitContact}
    />
  );
}
