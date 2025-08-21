'use client';

import { StackItem } from '@/components/stack-item';
import { STACKS } from '@/lib/config';

export function StackList() {
  const categories = [
    { key: 'languages', title: '<LANGUAGES/>' },
    { key: 'frameworks', title: '<FRAMEWORKS/>' },
    { key: 'ai', title: '<AI/>' },
    { key: 'databases', title: '<DATABASES/>' },
    { key: 'devops', title: '<DEVOPS/>' },
    { key: 'software', title: '<SOFTWARE/>' },
  ];

  return (
    <div className="space-y-4">
      {/* Categories */}
      {categories.map(({ key, title }) => {
        const items = STACKS[key as keyof typeof STACKS];
        if (!items || items.length === 0) {
          return null;
        }

        return (
          <div className="space-y-2" key={key}>
            <h2 className="font-mono text-[10px] text-muted-foreground">
              {title}
            </h2>
            <div className="flex flex-wrap gap-2">
              {items.map((stack) => (
                <StackItem key={stack.title} {...stack} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
