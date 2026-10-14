"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import MediaPlaceholder from "./MediaPlaceholder";
import type { ProjectMedia } from "@/lib/projects";
import type { Category } from "@/lib/categories";

export default function Lightbox({
  items,
  index,
  onClose,
  onNavigate,
  category,
}: {
  items: ProjectMedia[];
  index: number | null;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
  category?: Category;
}) {
  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % items.length);
      if (e.key === "ArrowLeft")
        onNavigate((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, items.length, onClose, onNavigate]);

  const item = index !== null ? items[index] : null;

  return (
    <AnimatePresence>
      {item && index !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[95] flex items-center justify-center bg-near-black/95 p-6"
          role="dialog"
          aria-modal="true"
          aria-label={item.alt}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-6 top-6 text-text hover:text-accent"
          >
            <X size={28} />
          </button>

          {items.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => onNavigate((index - 1 + items.length) % items.length)}
                aria-label="Previous"
                className="absolute left-4 text-text hover:text-accent md:left-10"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                type="button"
                onClick={() => onNavigate((index + 1) % items.length)}
                aria-label="Next"
                className="absolute right-4 text-text hover:text-accent md:right-10"
              >
                <ChevronRight size={32} />
              </button>
            </>
          )}

          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative aspect-video w-full max-w-5xl"
          >
            {item.src ? (
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="90vw"
                className="object-contain grayscale-[0.55] contrast-[1.05] brightness-[0.9]"
              />
            ) : (
              <MediaPlaceholder category={category} label={item.alt} />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
