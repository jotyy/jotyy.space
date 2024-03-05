"use client";

import { StackItem } from "@/components/stack-item";
import { STACKS } from "@/lib/config";

export function StackList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border p-4 rounded-md">
      {STACKS.tools.map((stack) => (
        <StackItem key={stack.title} {...stack} />
      ))}
    </div>
  );
}
