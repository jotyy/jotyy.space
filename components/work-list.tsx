'use client';

import { WorkItem } from '@/components/work-item';
import { WORKS } from '@/lib/config';

export function WorkList() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
      {WORKS.map((project) => (
        <WorkItem key={project.title} {...project} />
      ))}
    </div>
  );
}
