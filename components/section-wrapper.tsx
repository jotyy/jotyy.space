'use client';

import Link from 'next/link';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';

export type SectionWrapperProps = {
  children: React.ReactNode;
  className?: string;
  title: string;
  link: {
    href: string;
    label: string;
  };
};

export function SectionWrapper({
  children,
  className,
  title,
  link,
}: SectionWrapperProps) {
  return (
    <div className={cn('flex flex-col gap-6', className)}>
      <div className="mt-12 flex flex-row justify-between">
        <h2 className="font-semibold text-foreground text-xl">{title}</h2>
        <Link className="flex items-center underline" href={link.href}>
          <Icons.arrowRight />
        </Link>
      </div>

      {children}
    </div>
  );
}
