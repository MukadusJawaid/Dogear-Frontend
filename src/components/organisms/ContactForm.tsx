"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { z } from "zod";
import { Button, Heading } from "@/components/atoms";
import { FormField } from "@/components/molecules";
import { cn } from "@/lib/cn";
import type { ContactFormContent } from "@/types/content";

type Values = Record<string, string>;
type Props = {
  content: ContactFormContent;
  schema: z.ZodType<Values, Values>;
  defaultValues?: Values;
  onSubmit: (values: Values) => Promise<{ ok: boolean }>;
};

export function ContactForm({ content, schema, defaultValues, onSubmit }: Props) {
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<Values>({ resolver: zodResolver(schema as never), defaultValues });

  async function submit(values: Values) {
    const res = await onSubmit(values);
    if (res.ok) {
      setDone(true);
      reset(defaultValues);
      toast.success(content.successMessage);
    }
  }

  return (
    <div className="border-line bg-surface-3 space-y-6 rounded-3xl border p-8 shadow-[0_30px_70px_-30px_rgb(0_0_0/0.8)]">
      <Heading as="h3" size="h4">
        {content.title}
      </Heading>
      {done ? (
        <p role="status" className="text-success text-body-sm">
          {content.successMessage}
        </p>
      ) : (
        <form
          onSubmit={handleSubmit(submit)}
          className="grid grid-cols-2 gap-x-4 gap-y-5"
          noValidate
        >
          {content.fields.map((f) => (
            <div key={f.name} className={cn(f.half ? "col-span-2 sm:col-span-1" : "col-span-2")}>
              <FormField
                {...f}
                registration={register(f.name)}
                error={errors[f.name]?.message as string | undefined}
              />
            </div>
          ))}
          <div className="col-span-2">
            <Button type="submit" disabled={isSubmitting} size="lg" className="h-12 pr-2 pl-6">
              {content.submitLabel}
              <span className="bg-canvas text-amber grid size-8 place-items-center rounded-full">
                <ArrowRight aria-hidden className="size-4" />
              </span>
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
