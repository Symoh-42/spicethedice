import SectionHeading from "../ui/SectionHeading";
import ProjectGrid from "./ProjectGrid";
import type { Project } from "@/lib/projects";

export default function RelatedWork({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null;

  return (
    <section className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
      <SectionHeading eyebrow="Keep Watching" lines={["Related Work"]} />
      <div className="mt-14">
        <ProjectGrid projects={projects} />
      </div>
    </section>
  );
}
