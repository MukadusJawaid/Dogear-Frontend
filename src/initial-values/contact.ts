import type { ContactValues } from "@/schemas";

/** Initial values for the contact form (topic defaults to the first option). */
export const contactInitialValues: ContactValues = {
  name: "",
  email: "",
  topic: "A question about pricing",
  message: "",
};
