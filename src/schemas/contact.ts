import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Please tell us your name"),
  email: z.string().trim().email("Enter a valid email"),
  topic: z.string().min(1),
  message: z.string().trim().min(10, "A few more words, please"),
});

export type ContactValues = z.infer<typeof contactSchema>;
