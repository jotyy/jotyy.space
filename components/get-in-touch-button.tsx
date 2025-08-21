'use client';

import { useRouter } from 'next/navigation';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';

export function GetInTouchButton() {
  const router = useRouter();

  return (
    <Button
      className="group w-fit py-6 font-semibold text-base"
      onClick={() => router.push('/contact')}
    >
      Get in touch
      <div className="-rotate-45 ml-4 rounded-full bg-primary-foreground/10 p-1.5 transition-all duration-300 group-hover:rotate-0">
        <Icons.arrowRight />
      </div>
    </Button>
  );
}
