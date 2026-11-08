"use server";

import { forgotSchema, loginSchema, signUpSchema } from "@/schemas";

type Result = { ok: boolean };

/** Placeholders — wire to the real auth backend later. */
export async function loginAction(values: Record<string, string>): Promise<Result> {
  return { ok: loginSchema.safeParse(values).success };
}
export async function signUpAction(values: Record<string, string>): Promise<Result> {
  return { ok: signUpSchema.safeParse(values).success };
}
export async function forgotAction(values: Record<string, string>): Promise<Result> {
  return { ok: forgotSchema.safeParse(values).success };
}
