"use client";

import { ProjectItem } from "@/components/project-item";
import { PROJECTS } from "@/lib/config";

export function ProjectList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
      {PROJECTS.map((project) => (
        <ProjectItem key={project.title} {...project} />
      ))}
    </div>
  );
}
