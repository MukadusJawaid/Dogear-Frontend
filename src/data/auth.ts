import type { AuthContent, AuthPanelContent } from "@/types";

export const authPanelContent: AuthPanelContent = {
  brand: { name: "Dogear", href: "/" },
  title: "Feedback that stays where you put it.",
  description: "Pins, threads and approvals, all saved with the time.",
};

const clientNote = {
  icon: "link" as const,
  title: "Are you a client?",
  text: "Log in with the account you made from your invite. Your projects are waiting.",
};

export const signUpContent: AuthContent = {
  title: "Create your free account",
  description: "Two projects free. No card needed.",
  tabs: [
    { label: "Sign up", href: "/sign-up", active: true },
    { label: "Log in", href: "/login" },
  ],
  fields: [
    { name: "name", label: "Your name", type: "text", placeholder: "Ayla Rahman", icon: "user" },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "ayla@rahmanstudio.example",
      icon: "mail",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "At least 8 characters",
      icon: "lock",
      toggle: { show: "Show", hide: "Hide" },
    },
  ],
  strengthHint: "Use 8 or more characters",
  submitLabel: "Create account",
  successMessage: "Account created. Welcome to Dogear!",
  divider: "or",
  googleLabel: "Continue with Google",
  note: clientNote,
};

export const loginContent: AuthContent = {
  title: "Welcome back",
  description: "Log in to see what clients said.",
  tabs: [
    { label: "Sign up", href: "/sign-up" },
    { label: "Log in", href: "/login", active: true },
  ],
  fields: [
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "ayla@rahmanstudio.example",
      icon: "mail",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "At least 8 characters",
      icon: "lock",
      labelLink: { label: "Forgot password?", href: "/forgot-password" },
      toggle: { show: "Show", hide: "Hide" },
    },
  ],
  submitLabel: "Log in",
  successMessage: "Welcome back!",
  divider: "or",
  googleLabel: "Continue with Google",
  note: clientNote,
};

export const forgotContent: AuthContent = {
  title: "Reset your password",
  description: "Enter your email and we will send you a link.",
  fields: [
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "ayla@rahmanstudio.example",
      icon: "mail",
    },
  ],
  submitLabel: "Send reset link",
  successMessage: "Check your inbox for the reset link.",
  secondary: { label: "Back to log in", href: "/login" },
  note: {
    icon: "mail",
    title: "Check your inbox",
    text: "The link works once and expires in 1 hour. Clients and designers use the same reset.",
  },
};
