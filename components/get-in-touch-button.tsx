'use client';

import Link from 'next/link';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';

export function GetInTouchButton() {
  return (
    <Link href="mailto:jotyy318@gmail.com">
      <Button className="group w-fit py-6 font-semibold text-base">
        Get in touch
        <div className="-rotate-45 ml-4 rounded-full bg-primary-foreground/10 p-1.5 transition-all duration-300 group-hover:rotate-0">
          <Icons.arrowRight />
        </div>
      </Button>
    </Link>
  );
}
