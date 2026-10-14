"use client";

import { useMemo, useState } from "react";
import ProjectFilter from "./ProjectFilter";
import ProjectGrid from "./ProjectGrid";
import type { Category } from "@/lib/categories";
import type { Project } from "@/lib/projects";

export default function WorkExplorer({
  projects,
  initialCategory = "all",
}: {
  projects: Project[];
  initialCategory?: Category | "all";
}) {
  const [active, setActive] = useState<Category | "all">(initialCategory);

  const filtered = useMemo(
    () =>
      active === "all"
        ? projects
        : projects.filter((p) => p.category.includes(active)),
    [active, projects]
  );

  return (
    <div>
      <ProjectFilter active={active} onChange={setActive} />
      <div className="mt-12">
        <ProjectGrid projects={filtered} />
      </div>
    </div>
  );
}
