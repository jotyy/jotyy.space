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
    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary/50 border border-border hover:bg-secondary/80 transition-colors">
      <StackIcon className="size-3" />
      <span className="text-xs font-medium text-muted-foreground">
        {title}
      </span>
    </div>
  );
}
