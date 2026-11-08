import { z } from "zod";

const email = z.string().trim().email("Enter a valid email");

export const loginSchema = z.object({
  email,
  password: z.string().min(1, "Enter your password"),
});

export const signUpSchema = z.object({
  name: z.string().trim().min(1, "Please tell us your name"),
  email,
  password: z.string().min(8, "Use at least 8 characters"),
});

export const forgotSchema = z.object({ email });
