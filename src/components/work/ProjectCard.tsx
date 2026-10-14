"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import CinematicMedia from "../ui/CinematicMedia";
import { categoryLabels } from "@/lib/categories";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

export default function ProjectCard({
  project,
  className,
  priority = false,
}: {
  project: Project;
  className?: string;
  priority?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn("group", className)}
    >
      <Link
        href={`/work/${project.slug}`}
        data-cursor="VIEW"
        className="block"
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-charcoal">
          <CinematicMedia
            media={project.thumbnail}
            category={project.category[0]}
            label={project.tag}
            priority={priority}
            sizes="(min-width: 1024px) 40vw, 90vw"
            imgClassName="transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-near-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="absolute inset-x-0 bottom-0 flex translate-y-3 items-end justify-between p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="font-heading text-xs font-medium uppercase tracking-[0.2em] text-text">
              View Project
            </span>
            <ArrowUpRight className="h-5 w-5 text-text" aria-hidden="true" />
          </div>
        </div>

        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="font-heading text-xl font-medium uppercase tracking-tight text-text">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-muted">{project.tag}</p>
          </div>
          <div className="flex shrink-0 flex-col items-end gap-1 text-right">
            <span className="font-heading text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
              {project.category.map((c) => categoryLabels[c]).join(" / ")}
            </span>
            {project.year && (
              <span className="text-xs text-muted">{project.year}</span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
