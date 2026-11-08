"use client";

import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";
import type { AuthFieldContent } from "@/types";

const icons = { user: User, mail: Mail, lock: Lock };

type Props = AuthFieldContent & { registration: UseFormRegisterReturn; error?: string };

export function AuthField({
  label,
  type,
  placeholder,
  icon,
  labelLink,
  toggle,
  registration,
  error,
}: Props) {
  const [shown, setShown] = useState(false);
  const Icon = icons[icon];
  const id = registration.name;
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="text-ink text-micro font-bold">
          {label}
        </label>
        {labelLink && (
          <Link href={labelLink.href} className="text-amber text-micro font-bold hover:underline">
            {labelLink.label}
          </Link>
        )}
      </div>
      <div className="border-line-strong bg-canvas focus-within:border-amber relative flex h-[50px] items-center gap-3 rounded-xl border px-4 transition-colors">
        <Icon aria-hidden className="text-ink-muted size-4 shrink-0" />
        <input
          id={id}
          type={type === "password" && shown ? "text" : type}
          placeholder={placeholder}
          autoComplete={
            type === "password" ? "current-password" : type === "email" ? "email" : "name"
          }
          className="text-ink placeholder:text-ink-faint text-body-sm h-full w-full bg-transparent outline-none"
          {...registration}
        />
        {toggle && (
          <button
            type="button"
            onClick={() => setShown((s) => !s)}
            aria-label={shown ? toggle.hide : toggle.show}
            className="text-ink-muted hover:text-ink flex items-center gap-1 text-xs font-bold"
          >
            {shown ? (
              <EyeOff className="size-3.5" aria-hidden />
            ) : (
              <Eye className="size-3.5" aria-hidden />
            )}
            {shown ? toggle.hide : toggle.show}
          </button>
        )}
      </div>
      {error && (
        <p role="alert" className="text-amber text-xs">
          {error}
        </p>
      )}
    </div>
  );
}
