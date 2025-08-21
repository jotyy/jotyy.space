'use client';

import { useTheme } from 'next-themes';

export type StackItemProps = {
  title: string;
  // biome-ignore lint/suspicious/noExplicitAny: <tbd>
  icon: any;
  // biome-ignore lint/suspicious/noExplicitAny: <tbd>
  darkIcon?: any;
};

export function StackItem({
  title,
  icon: LightStackIcon,
  darkIcon: DarkStackIcon,
}: StackItemProps) {
  const { theme } = useTheme();
  const StackIcon =
    theme === 'dark' && DarkStackIcon ? DarkStackIcon : LightStackIcon;

  return (
    <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-2.5 py-1 transition-colors hover:bg-secondary/80">
      <StackIcon className="size-3" />
      <span className="font-medium text-muted-foreground text-xs">{title}</span>
    </div>
  );
}
