"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  enquirySchema,
  type EnquiryValues,
  projectTypes,
  budgetRanges,
} from "@/lib/schemas";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">(
    "idle"
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EnquiryValues>({
    resolver: zodResolver(enquirySchema),
  });

  const onSubmit = async (values: EnquiryValues) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="border border-accent/40 bg-accent/5 p-8">
        <p className="font-heading text-lg uppercase tracking-tight text-text">
          Brief received.
        </p>
        <p className="mt-2 text-sm text-muted">
          Thanks — we&rsquo;ll be in touch shortly to talk through the project.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-8">
      <div className="grid gap-8 md:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <input
            {...register("name")}
            type="text"
            autoComplete="name"
            className={inputClass}
          />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input
            {...register("email")}
            type="email"
            autoComplete="email"
            className={inputClass}
          />
        </Field>
        <Field label="Phone (optional)">
          <input
            {...register("phone")}
            type="tel"
            autoComplete="tel"
            className={inputClass}
          />
        </Field>
        <Field label="Timeline (optional)">
          <input {...register("timeline")} type="text" className={inputClass} />
        </Field>
        <Field label="Project Type">
          <select {...register("projectType")} className={inputClass}>
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Budget Range">
          <select {...register("budget")} className={inputClass}>
            {budgetRanges.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Reference Links (optional)">
        <input
          {...register("referenceLinks")}
          type="text"
          placeholder="Links to references, moodboards, tracks..."
          className={inputClass}
        />
      </Field>

      <Field
        label="Tell us about the project"
        error={errors.description?.message}
      >
        <textarea
          {...register("description")}
          rows={5}
          className={inputClass}
        />
      </Field>

      <button
        type="submit"
        disabled={status === "submitting"}
        data-cursor="OPEN"
        className="bg-accent px-8 py-4 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-near-black transition-colors hover:bg-text disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Project Brief"}
      </button>

      {status === "error" && (
        <p className="text-sm text-accent" role="alert">
          Something went wrong sending your brief. Please try again.
        </p>
      )}
    </form>
  );
}

const inputClass =
  "w-full border-b border-white/20 bg-transparent py-3 text-text placeholder:text-muted focus:border-accent focus:outline-none";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-heading text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
        {label}
      </span>
      {children}
      {error && (
        <span className="mt-1 block text-xs text-accent" role="alert">
          {error}
        </span>
      )}
    </label>
  );
}
