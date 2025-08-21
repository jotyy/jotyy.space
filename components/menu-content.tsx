import Image from 'next/image';
import Link from 'next/link';
import { NavigationLink } from '@/components/navigation-link';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { LINKS, PROFILES } from '@/lib/config';

export const MenuContent = () => {
  return (
    <div className="flex w-full flex-col text-sm">
      <div className="flex flex-col gap-4">
        <div className="inline-flex items-center gap-2 px-4 py-8">
          <Image
            alt="jotyy"
            className="rounded-full border shadow-sm"
            height={40}
            loading="lazy"
            src="https://avatars.githubusercontent.com/u/30037764?v=4"
            width={40}
          />
          <div className="flex flex-1 flex-col">
            <span className="font-semibold text-base tracking-tight">
              Joshua Li
            </span>
            <span className="text-muted-foreground text-sm">
              Design Engineer
            </span>
          </div>
          <ThemeToggle />
        </div>
        <div className="flex flex-col gap-2">
          {LINKS.map((link, linkIndex) => (
            <NavigationLink
              href={link.href}
              icon={link.icon}
              key={link.href}
              label={link.label}
              shortcutNumber={linkIndex + 1}
            />
          ))}
        </div>
      </div>
      <Separator className="my-8" />
      <div className="flex flex-row justify-center gap-4">
        {Object.values(PROFILES).map((profile) => (
          <Button
            aria-label={profile.title}
            asChild
            className="rounded-full transition-colors duration-400 ease-[cubic-bezier(0.65,0,0.35,1)] hover:bg-primary hover:text-primary-foreground"
            key={profile.title}
            size="icon"
            type="button"
            variant="outline"
          >
            <Link href={profile.url} key={profile.title} target="_blank">
              {profile.icon}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
};
