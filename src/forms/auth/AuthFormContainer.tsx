"use client";

import { AuthForm } from "@/components/organisms";
import { forgotInitialValues, loginInitialValues, signUpInitialValues } from "@/initial-values";
import { forgotSchema, loginSchema, signUpSchema } from "@/schemas";
import type { AuthContent } from "@/types";
import { forgotAction, loginAction, signUpAction } from "./actions";

const forms = {
  login: { schema: loginSchema, initialValues: loginInitialValues, action: loginAction },
  "sign-up": { schema: signUpSchema, initialValues: signUpInitialValues, action: signUpAction },
  forgot: { schema: forgotSchema, initialValues: forgotInitialValues, action: forgotAction },
};

/** Binds the right schema, initial values and server action to the presentational AuthForm. */
export function AuthFormContainer({
  kind,
  content,
}: {
  kind: keyof typeof forms;
  content: AuthContent;
}) {
  const f = forms[kind];
  return (
    <AuthForm
      content={content}
      schema={f.schema as never}
      initialValues={f.initialValues}
      onSubmit={f.action}
    />
  );
}
