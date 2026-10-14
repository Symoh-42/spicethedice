"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import ContactForm from "./ContactForm";
import ProjectBrief from "./ProjectBrief";

export default function ContactTabs() {
  const [tab, setTab] = useState<"quick" | "brief">("quick");

  return (
    <div>
      <div className="flex gap-3" role="tablist" aria-label="Contact form type">
        <button
          type="button"
          role="tab"
          aria-selected={tab === "quick"}
          onClick={() => setTab("quick")}
          className={cn(
            "border px-5 py-2.5 font-heading text-xs font-medium uppercase tracking-[0.2em] transition-colors",
            tab === "quick"
              ? "border-accent bg-accent text-near-black"
              : "border-text/20 text-muted hover:border-text/50 hover:text-text"
          )}
        >
          Quick Enquiry
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === "brief"}
          onClick={() => setTab("brief")}
          className={cn(
            "border px-5 py-2.5 font-heading text-xs font-medium uppercase tracking-[0.2em] transition-colors",
            tab === "brief"
              ? "border-accent bg-accent text-near-black"
              : "border-text/20 text-muted hover:border-text/50 hover:text-text"
          )}
        >
          Full Project Brief
        </button>
      </div>

      <div className="mt-12">
        {tab === "quick" ? <ContactForm /> : <ProjectBrief />}
      </div>
    </div>
  );
}
