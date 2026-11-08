import type { UseFormRegisterReturn } from "react-hook-form";
import type { FormFieldContent } from "@/types/content";

const control =
  "w-full rounded-xl border border-line-strong bg-canvas px-4 py-3 text-body-sm text-ink placeholder:text-ink-faint focus:border-amber focus:outline-none transition-colors";

type Props = FormFieldContent & { registration: UseFormRegisterReturn; error?: string };

export function FormField({ label, type, options, placeholder, registration, error }: Props) {
  const id = registration.name;
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="text-ink-soft text-sm font-medium">
        {label}
      </label>
      {type === "select" ? (
        <select id={id} className={control} {...registration}>
          {options?.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          id={id}
          rows={5}
          placeholder={placeholder}
          className={control}
          {...registration}
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className={control}
          {...registration}
        />
      )}
      {error && (
        <p role="alert" className="text-amber text-xs">
          {error}
        </p>
      )}
    </div>
  );
}
