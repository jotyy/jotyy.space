'use client';

import { ProjectItem } from '@/components/project-item';
import { PROJECTS } from '@/lib/config';

export function ProjectList() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
      {PROJECTS.map((project) => (
        <ProjectItem key={project.title} {...project} />
      ))}
    </div>
  );
}
