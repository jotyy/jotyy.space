"use client";

import { useTheme } from "next-themes";

export interface StackItemProps {
  title: string;
  icon: any;
  darkIcon?: any;
}

export function StackItem({
  title,
  icon: LightStackIcon,
  darkIcon: DarkStackIcon,
}: StackItemProps) {
  const { theme } = useTheme();
  const StackIcon =
    theme === "dark" && DarkStackIcon ? DarkStackIcon : LightStackIcon;

  return (
    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary/50 dark:bg-zinc-900 border border-border dark:border-zinc-800 hover:bg-secondary/80 dark:hover:bg-zinc-800 transition-colors">
      <StackIcon className="size-3" />
      <span className="text-xs font-medium text-foreground dark:text-zinc-100">
        {title}
      </span>
    </div>
  );
}
