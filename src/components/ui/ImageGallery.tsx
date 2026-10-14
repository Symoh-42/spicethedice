"use client";

import { useState } from "react";
import CinematicMedia from "./CinematicMedia";
import Lightbox from "./Lightbox";
import type { ProjectMedia } from "@/lib/projects";
import type { Category } from "@/lib/categories";

export default function ImageGallery({
  items,
  category,
}: {
  items: ProjectMedia[];
  category?: Category;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {items.map((item, i) => (
          <button
            key={item.alt + i}
            type="button"
            data-cursor="VIEW"
            onClick={() => setOpenIndex(i)}
            className="relative aspect-[4/5] overflow-hidden bg-charcoal"
          >
            <CinematicMedia
              media={item}
              category={category}
              sizes="(min-width: 768px) 33vw, 50vw"
              imgClassName="transition-transform duration-700 hover:scale-105"
            />
          </button>
        ))}
      </div>

      <Lightbox
        items={items}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={setOpenIndex}
        category={category}
      />
    </>
  );
}
