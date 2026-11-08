import type { ContactContent } from "@/types";

export const contactContent: ContactContent = {
  hero: {
    badgeTag: "CONTACT",
    badge: "We read everything",
    titleLines: ["Questions, ideas {or a}", "{bug? Tell us.}"],
    description: "We read every message and reply within one working day.",
    actions: [
      { label: "Send a message", href: "#form", variant: "primary" },
      { label: "Email us", href: "mailto:hello@dogear.example", variant: "secondary" },
    ],
    floaters: [
      { position: "tl", label: "Real people", badge: "check" },
      { position: "bl", label: "Mon to Fri", badge: 1 },
      { position: "tr", label: "No bots", badge: "check" },
    ],
  },
  form: {
    title: "Write to us",
    submitLabel: "Send message",
    successMessage: "Thanks — a real person will reply within one working day.",
    fields: [
      { name: "name", label: "Your name", type: "text", half: true, placeholder: "Ayla Rahman" },
      {
        name: "email",
        label: "Email",
        type: "email",
        half: true,
        placeholder: "ayla@rahmanstudio.example",
      },
      {
        name: "topic",
        label: "What is it about?",
        type: "select",
        options: [
          "A question about pricing",
          "Help with a project",
          "Report a bug",
          "Something else",
        ],
      },
      {
        name: "message",
        label: "Message",
        type: "textarea",
        placeholder: "Tell us what you’re trying to do",
      },
    ],
  },
  info: [
    { icon: "mail", title: "Email", text: "hello@dogear.example" },
    {
      icon: "file",
      title: "Are you a client?",
      text: "Your designer’s review link is all you need. Questions about a project go to them first.",
    },
    {
      icon: "alert",
      title: "Found a bug?",
      text: "Pick “Report a bug” in the form and add a link to a screenshot.",
    },
  ],
  steps: {
    heading: { eyebrow: "After you hit send", title: "What happens next." },
    steps: [
      { title: "A person reads it", description: "No auto-replies, no ticket numbers." },
      { title: "You get an answer", description: "Straight to your inbox, in plain words." },
      { title: "Bugs get fixed", description: "And we write back when they do." },
    ],
  },
};
