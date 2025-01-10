"use client";

import { memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { ArrowUpRight, At } from "@phosphor-icons/react";

export interface NavigationLinkProps {
  href: string;
  label: string;
  icon?: React.ReactNode;
  shortcutNumber?: number;
}

export const NavigationLink = memo(
  ({ href, label, icon, shortcutNumber }: NavigationLinkProps) => {
    const pathname = usePathname();
    const iconCmp = icon ?? <At size={16} />;

    const isInternal = href.startsWith("/");
    if (!isInternal) {
      return (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between gap-2 rounded-lg p-2 hover:bg-neutral-200"
        >
          <span className="inline-flex items-center gap-2 font-medium">
            {iconCmp} {label}
          </span>
          <ArrowUpRight size={16} />
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
          isActive ? "bg-black text-white" : "hover:bg-neutral-200"
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
              "hidden h-5 w-5 place-content-center rounded border border-neutral-200 bg-neutral-100 text-xs font-medium text-neutral-500 transition-colors duration-200 group-hover:border-neutral-300 lg:grid",
              isActive &&
                "border-neutral-600 bg-neutral-700 text-neutral-200 group-hover:border-neutral-600"
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
