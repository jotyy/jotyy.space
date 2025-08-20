"use client";

import { memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";

export interface NavigationLinkProps {
  href: string;
  label: string;
  icon?: React.ReactNode;
  shortcutNumber?: number;
}

export const NavigationLink = memo(
  ({ href, label, icon, shortcutNumber }: NavigationLinkProps) => {
    const pathname = usePathname();
    const iconCmp = icon ?? <Icons.at />;

    const isInternal = href.startsWith("/");
    if (!isInternal) {
      return (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between gap-2 rounded-lg p-2 hover:bg-zinc-200 dark:hover:bg-zinc-800"
        >
          <span className="inline-flex items-center gap-2 font-medium">
            {iconCmp} {label}
          </span>
          <Icons.arrowUpRight />
        </a>
      );
    }

    let isActive = false;
    if (pathname?.length > 0) {
      const splittedPathname = pathname.split("/");
      const currentPathname = splittedPathname[1] ?? "";
      isActive = currentPathname === href.split("/")[1];
    }

    return (
      <Link
        key={href}
        href={href}
        className={cn(
          "group flex items-center justify-between rounded-lg p-4",
          isActive
            ? "bg-black text-white"
            : "hover:bg-zinc-200 dark:hover:bg-zinc-800"
        )}
      >
        <span className="flex items-center gap-2">
          {iconCmp}
          <span className={cn("font-medium", isActive && "text-white")}>
            {label}
          </span>
        </span>
        {shortcutNumber && (
          <span
            className={cn(
              "hidden h-5 w-5 place-content-center rounded border border-zinc-200 bg-zinc-100 text-xs font-medium text-zinc-500 transition-colors duration-200 group-hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:group-hover:border-zinc-700 lg:grid",
              isActive &&
                "border-zinc-600 bg-zinc-700 text-zinc-200 group-hover:border-zinc-600 dark:border-zinc-400 dark:bg-zinc-800 dark:text-zinc-300 dark:group-hover:border-zinc-500"
            )}
            title={`Shortcut key: ${shortcutNumber}`}
          >
            {shortcutNumber}
          </span>
        )}
      </Link>
    );
  }
);

NavigationLink.displayName = "NavigationLink";
