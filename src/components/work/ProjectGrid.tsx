import ProjectCard from "./ProjectCard";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  if (projects.length === 0) {
    return (
      <p className="py-24 text-center font-heading text-sm uppercase tracking-[0.2em] text-muted">
        No work in this category yet.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-12">
      {projects.map((project, i) => {
        // Asymmetric editorial rhythm: alternate large/offset spans instead
        // of a uniform card grid.
        const pattern = i % 3;
        const span = cn(
          pattern === 0 && "md:col-span-7",
          pattern === 1 && "md:col-span-5 md:mt-24",
          pattern === 2 && "md:col-span-6 md:col-start-4"
        );
        return (
          <ProjectCard
            key={project.slug}
            project={project}
            priority={i === 0}
            className={span}
          />
        );
      })}
    </div>
  );
}
