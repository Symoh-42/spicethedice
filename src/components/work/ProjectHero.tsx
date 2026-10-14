import CinematicMedia from "../ui/CinematicMedia";
import { categoryLabels } from "@/lib/categories";
import type { Project } from "@/lib/projects";

export default function ProjectHero({ project }: { project: Project }) {
  return (
    <section className="relative flex min-h-[85vh] w-full items-end overflow-hidden bg-near-black">
      <div className="absolute inset-0">
        <CinematicMedia
          media={project.heroImage}
          category={project.category[0]}
          label={project.tag}
          priority
          sizes="100vw"
          overlay={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-near-black via-near-black/40 to-near-black/10" />
      </div>

      <div className="relative mx-auto w-full max-w-[1600px] px-6 pb-16 pt-40 md:px-10 md:pb-24">
        <p className="font-heading text-xs font-medium uppercase tracking-[0.3em] text-accent">
          {project.category.map((c) => categoryLabels[c]).join(" / ")}
          {project.year ? ` — ${project.year}` : ""}
        </p>
        <h1 className="mt-6 max-w-4xl font-heading text-[13vw] font-medium uppercase leading-[0.9] tracking-tight text-text sm:text-6xl md:text-7xl">
          {project.title}
        </h1>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
          {project.roles.map((role) => (
            <span
              key={role}
              className="text-sm uppercase tracking-widest text-muted"
            >
              {role}
            </span>
          ))}
        </div>
        {project.client && (
          <p className="mt-4 text-sm text-muted">Client / Artist: {project.client}</p>
        )}
      </div>
    </section>
  );
}
