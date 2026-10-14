"use client";

import { categories, type Category } from "@/lib/categories";
import { cn } from "@/lib/utils";

export default function ProjectFilter({
  active,
  onChange,
}: {
  active: Category | "all";
  onChange: (value: Category | "all") => void;
}) {
  return (
    <div
      className="flex flex-wrap gap-3"
      role="tablist"
      aria-label="Filter work by category"
    >
      {categories.map((cat) => (
        <button
          key={cat.value}
          type="button"
          role="tab"
          aria-selected={active === cat.value}
          onClick={() => onChange(cat.value)}
          className={cn(
            "border px-5 py-2.5 font-heading text-xs font-medium uppercase tracking-[0.2em] transition-colors",
            active === cat.value
              ? "border-accent bg-accent text-near-black"
              : "border-text/20 text-muted hover:border-text/50 hover:text-text"
          )}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
