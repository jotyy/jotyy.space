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
          className="flex items-center justify-between gap-2 rounded-lg p-2 hover:bg-primary"
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
          "group flex items-center justify-between rounded-lg p-4 transition-colors duration-200 ease-in-out",
          isActive
            ? "bg-primary text-primary-foreground"
            : "hover:bg-primary/90 hover:text-primary-foreground"
        )}
      >
        <span className="flex items-center gap-3">
          {iconCmp}
          <span className={cn("font-medium", isActive && "text-primary-foreground")}>
            {label}
          </span>
        </span>
        {shortcutNumber && (
          <span
            className={cn(
              "hidden h-5 w-5 place-content-center rounded border border-border bg-secondary text-xs font-medium text-muted-foreground transition-colors duration-200 group-hover:border-border group-hover:bg-secondary/80 lg:grid",
              isActive &&
                "border-primary bg-secondary/20 text-primary-foreground group-hover:border-primary group-hover:bg-primary/80"
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
