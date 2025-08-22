'use client';

import Link from 'next/link';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
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
      <div className="mt-12 flex flex-row items-center justify-between">
        <h2 className="font-semibold text-foreground text-xl">{title}</h2>
        <Button asChild className="size-7" size="icon" variant="ghost">
          <Link href={link.href}>
            <Icons.arrowRight className="size-4" />
          </Link>
        </Button>
      </div>

      {children}
    </div>
  );
}
