import Link from "next/link";

import { NavigationLink } from "@/components/navigation-link";
import { PROFILES, LINKS } from "@/lib/config";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const MenuContent = () => {
  return (
    <div className="flex w-full flex-col text-sm">
      <div className="flex flex-col gap-4">
        <Link
          href="/"
          className="link-card inline-flex items-center gap-2 px-4 py-8"
        >
          <Image
            src="https://avatars.githubusercontent.com/u/30037764?v=4"
            alt="jotyy"
            width={40}
            height={40}
            loading="lazy"
            className="rounded-full border shadow-sm"
          />
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-tight">
              Joshua Lee
            </span>
            <span className="text-muted-foreground text-sm">
              Software Engineer
            </span>
          </div>
        </Link>
        <div className="flex flex-col gap-2">
          {LINKS.map((link, linkIndex) => (
            <NavigationLink
              key={link.href}
              href={link.href}
              label={link.label}
              icon={link.icon}
              shortcutNumber={linkIndex + 1}
            />
          ))}
        </div>
      </div>
      <Separator className="my-8" />
      <div className="flex flex-row gap-4 justify-center">
        {Object.values(PROFILES).map((profile) => (
          <Button
            key={profile.title}
            size="icon"
            variant="secondary"
            aria-label={profile.title}
            className="rounded-full"
            onClick={() => window.open(profile.url)}
          >
            {profile.icon}
          </Button>
        ))}
      </div>
    </div>
  );
};
