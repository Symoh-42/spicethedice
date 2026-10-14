"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  projectBriefSchema,
  type ProjectBriefValues,
  projectTypes,
  budgetRanges,
} from "@/lib/schemas";

export default function ProjectBrief() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">(
    "idle"
  );
  const [file, setFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProjectBriefValues>({
    resolver: zodResolver(projectBriefSchema),
  });

  const onSubmit = async (values: ProjectBriefValues) => {
    setStatus("submitting");
    try {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        if (value) formData.append(key, value);
      });
      if (file) formData.append("attachment", file);

      const res = await fetch("/api/project-inquiries", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      reset();
      setFile(null);
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
          We&rsquo;ll review the details and come back with next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-8">
      <div className="grid gap-8 md:grid-cols-2">
        <Field label="Project Name" error={errors.projectName?.message}>
          <input {...register("projectName")} type="text" className={inputClass} />
        </Field>
        <Field label="Client / Artist (optional)">
          <input {...register("clientArtist")} type="text" className={inputClass} />
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
        <Field label="Budget">
          <select {...register("budget")} className={inputClass}>
            {budgetRanges.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Shoot Location (optional)">
          <input {...register("shootLocation")} type="text" className={inputClass} />
        </Field>
        <Field label="Preferred Date (optional)">
          <input {...register("preferredDate")} type="date" className={inputClass} />
        </Field>
        <Field label="Distribution Platform (optional)">
          <input
            {...register("distributionPlatform")}
            type="text"
            placeholder="YouTube, TikTok, Instagram..."
            className={inputClass}
          />
        </Field>
        <Field label="Expected Deliverables (optional)">
          <input {...register("expectedDeliverables")} type="text" className={inputClass} />
        </Field>
      </div>

      <Field label="The Creative Idea" error={errors.creativeIdea?.message}>
        <textarea {...register("creativeIdea")} rows={4} className={inputClass} />
      </Field>

      <Field label="Reference Links (optional)">
        <input {...register("referenceLinks")} type="text" className={inputClass} />
      </Field>

      <Field label="Additional Notes (optional)">
        <textarea {...register("additionalNotes")} rows={3} className={inputClass} />
      </Field>

      <div className="grid gap-8 md:grid-cols-2">
        <Field label="Your Name" error={errors.contactName?.message}>
          <input {...register("contactName")} type="text" className={inputClass} />
        </Field>
        <Field label="Your Email" error={errors.contactEmail?.message}>
          <input {...register("contactEmail")} type="email" className={inputClass} />
        </Field>
      </div>

      <label className="block">
        <span className="mb-2 block font-heading text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
          Reference File (image or PDF, optional)
        </span>
        <input
          type="file"
          accept="image/*,.pdf"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          className="block w-full text-sm text-muted file:mr-4 file:border-0 file:bg-charcoal file:px-4 file:py-2 file:font-heading file:text-xs file:uppercase file:tracking-widest file:text-text"
        />
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        data-cursor="OPEN"
        className="bg-accent px-8 py-4 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-near-black transition-colors hover:bg-text disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Submit Project Brief"}
      </button>

      {status === "error" && (
        <p className="text-sm text-accent" role="alert">
          Something went wrong submitting your brief. Please try again.
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
