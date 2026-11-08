"use server";

import { contactSchema } from "@/schemas";

/** Placeholder — wire to email / CMS inbox when the backend exists. */
export async function submitContact(values: Record<string, string>): Promise<{ ok: boolean }> {
  const parsed = contactSchema.safeParse(values);
  return { ok: parsed.success };
}
