'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { MenuContent } from '@/components/menu-content';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useKeyPress } from '@/hooks/use-key-press';
import { cn } from '@/lib/utils';

const keyCodePathnameMapping: Record<string, string> = {
  Digit1: '/',
  Digit2: '/works',
  Digit3: '/skills',
  Digit4: '/writing',
};

export type SideBarProps = {
  title?: string;
  href?: string;
  isInner?: boolean;
  className?: string;
};

export const SideBar = ({ title, href, isInner, className }: SideBarProps) => {
  const router = useRouter();
  const pathname = usePathname();

  useKeyPress(onKeyPress, Object.keys(keyCodePathnameMapping));

  function onKeyPress(event: KeyboardEvent) {
    const key = event.code;
    const targetPathname = keyCodePathnameMapping[key];
    if (targetPathname && targetPathname !== pathname) {
      router.push(targetPathname);
    }
  }

  return (
    <ScrollArea
      className={cn(
        'hidden bg-secondary lg:flex lg:flex-col lg:border-r',
        isInner ? 'lg:w-80 xl:w-96' : 'lg:w-60 xl:w-72',
        className
      )}
    >
      {title && (
        <div className="sticky top-0 z-10 border-b px-5 py-3">
          <div className="flex items-center justify-between">
            <div className="font-semibold text-sm tracking-tight">
              {href ? <Link href={href}>{title}</Link> : <span>{title}</span>}
            </div>
          </div>
        </div>
      )}
      <div className="p-3">
        <MenuContent />
      </div>
    </ScrollArea>
  );
};
