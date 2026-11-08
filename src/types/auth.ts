/** Left illustration panel shared by every auth page. */
export type AuthPanelContent = {
  brand: { name: string; href: string };
  title: string;
  description: string;
};

export type AuthFieldContent = {
  name: string;
  label: string;
  type: "text" | "email" | "password";
  placeholder: string;
  icon: "user" | "mail" | "lock";
  /** Small link on the label row, e.g. "Forgot password?". */
  labelLink?: { label: string; href: string };
  /** Labels for the show/hide password toggle. */
  toggle?: { show: string; hide: string };
};

export type AuthContent = {
  title: string;
  description: string;
  /** Sign up / Log in switcher. */
  tabs?: { label: string; href: string; active?: boolean }[];
  fields: AuthFieldContent[];
  /** Shows a 4-segment strength meter under the password field. */
  strengthHint?: string;
  submitLabel: string;
  successMessage: string;
  divider?: string;
  googleLabel?: string;
  secondary?: { label: string; href: string };
  note?: { icon: "link" | "mail"; title: string; text: string };
};
