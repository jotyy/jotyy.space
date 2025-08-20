"use client";

import Link from "next/link";

import { MenuContent } from "@/components/menu-content";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useKeyPress } from "@/hooks/useKeyPress";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

const keyCodePathnameMapping: Record<string, string> = {
  Digit1: "/",
  Digit2: "/writing",
  Digit3: "/projects",
  Digit4: "/stack",
  // Digit5: "/bookmarks",
  Digit5: "/contact",
};

export interface SideBarProps {
  title?: string;
  href?: string;
  isInner?: boolean;
  className?: string;
}

export const SideBar = ({ title, href, isInner, className }: SideBarProps) => {
  const router = useRouter();
  const pathname = usePathname();

  useKeyPress(onKeyPress, Object.keys(keyCodePathnameMapping));

  function onKeyPress(event: KeyboardEvent) {
    const key = event.code;
    const targetPathname = keyCodePathnameMapping[key];
    if (targetPathname && targetPathname !== pathname)
      router.push(targetPathname);
  }

  return (
    <ScrollArea
      className={cn(
        "hidden bg-zinc-50 dark:bg-zinc-900 lg:flex lg:flex-col lg:border-r",
        isInner ? "lg:w-80 xl:w-96" : "lg:w-60 xl:w-72",
        className
      )}
    >
      {title && (
        <div className="sticky top-0 z-10 border-b bg-zinc-50 dark:bg-zinc-950 px-5 py-3">
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold tracking-tight">
              {href ? <Link href={href}>{title}</Link> : <span>{title}</span>}
            </div>
          </div>
        </div>
      )}
      <div className="bg-zinc-50 dark:bg-zinc-900 p-3">
        <MenuContent />
      </div>
    </ScrollArea>
  );
};
