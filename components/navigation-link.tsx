'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { memo } from 'react';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';

export type NavigationLinkProps = {
  href: string;
  label: string;
  icon?: React.ReactNode;
  shortcutNumber?: number;
};

export const NavigationLink = memo(
  ({ href, label, icon, shortcutNumber }: NavigationLinkProps) => {
    const pathname = usePathname();
    const iconCmp = icon ?? <Icons.at />;

    const isInternal = href.startsWith('/');
    if (!isInternal) {
      return (
        <a
          className="flex items-center justify-between gap-2 rounded-lg p-2 hover:bg-primary"
          href={href}
          key={href}
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="inline-flex items-center gap-2 font-medium">
            {iconCmp} {label}
          </span>
          <Icons.arrowUpRight />
        </a>
      );
    }

    const isActive = (() => {
      if (!pathname) {
        return false;
      }

      if (href === '/') {
        return pathname === '/';
      }

      const splittedPathname = pathname.split('/');
      const splittedHref = href.split('/');
      const currentPathname = splittedPathname[1] ?? '';
      const targetPathname = splittedHref[1] ?? '';

      return currentPathname === targetPathname && targetPathname !== '';
    })();

    return (
      <Link
        className={cn(
          'group flex items-center justify-between rounded-lg p-4 transition-colors duration-400 ease-[cubic-bezier(0.65,0,0.35,1)]',
          isActive
            ? 'bg-primary text-primary-foreground hover:bg-primary'
            : 'hover:bg-primary hover:text-primary-foreground'
        )}
        href={href}
        key={href}
      >
        <span className="flex items-center gap-3">
          {iconCmp}
          <span className="font-medium">{label}</span>
        </span>
        {shortcutNumber && (
          <span
            className={cn(
              'hidden h-5 w-5 place-content-center rounded border border-border bg-secondary font-medium text-muted-foreground text-xs transition-colors duration-200 lg:grid',
              isActive &&
                'border-primary bg-secondary/20 text-primary-foreground dark:text-primary-foreground'
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

NavigationLink.displayName = 'NavigationLink';
