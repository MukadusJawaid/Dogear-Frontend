"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useForm, useWatch } from "react-hook-form";
import { toast } from "sonner";
import type { z } from "zod";
import { Button } from "@/components/atoms";
import { AuthField } from "@/components/molecules";
import { cn } from "@/lib/cn";
import type { AuthContent } from "@/types";

type Values = Record<string, string>;
type Props = {
  content: AuthContent;
  schema: z.ZodType<Values, Values>;
  initialValues: Values;
  onSubmit: (values: Values) => Promise<{ ok: boolean }>;
};

export function AuthForm({ content, schema, initialValues, onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Values>({ resolver: zodResolver(schema as never), defaultValues: initialValues });

  const length = (useWatch({ control, name: "password" }) ?? "").length;
  const strength = Math.min(4, Math.ceil(length / 3));

  async function submit(values: Values) {
    const res = await onSubmit(values);
    if (res.ok) {
      toast.success(content.successMessage);
      reset(initialValues);
    }
  }

  return (
    <form onSubmit={handleSubmit(submit)} noValidate className="space-y-4">
      {content.fields.map((f) => (
        <AuthField
          key={f.name}
          {...f}
          registration={register(f.name)}
          error={errors[f.name]?.message as string | undefined}
        />
      ))}
      {content.strengthHint && (
        <div className="flex items-center gap-4" aria-live="polite">
          <div className="flex gap-1.5">
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className={cn(
                  "h-1 w-9 rounded-full transition-colors",
                  i < strength ? "bg-amber" : "bg-line-strong",
                )}
              />
            ))}
          </div>
          <span className="text-ink-muted text-caption">{content.strengthHint}</span>
        </div>
      )}
      <Button type="submit" disabled={isSubmitting} size="lg" className="h-[50px] w-full">
        {content.submitLabel}
        {!content.secondary && <ArrowRight aria-hidden className="size-4" />}
      </Button>
      {content.divider && (
        <div className="text-ink-muted text-caption flex items-center gap-4">
          <span className="bg-line h-px flex-1" />
          {content.divider}
          <span className="bg-line h-px flex-1" />
        </div>
      )}
      {content.googleLabel && (
        <button
          type="button"
          className="border-line-strong text-ink hover:border-amber text-body-sm flex h-[50px] w-full items-center justify-center gap-3 rounded-full border font-bold transition-colors"
        >
          <span className="grid size-5 place-items-center rounded-full bg-white text-[11px] font-bold text-black">
            G
          </span>
          {content.googleLabel}
        </button>
      )}
      {content.secondary && (
        <Link
          href={content.secondary.href}
          className="border-line-strong text-ink hover:border-amber text-body-sm flex h-[50px] w-full items-center justify-center rounded-full border font-bold transition-colors"
        >
          {content.secondary.label}
        </Link>
      )}
    </form>
  );
}
