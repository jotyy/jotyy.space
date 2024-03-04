"use client";
import Image from "next/image";
import Link from "next/link";

import { NavigationLink } from "@/components/navigation-link";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LINKS, PROFILES } from "@/lib/config";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useKeyPress } from "@/hooks/useKeyPress";
import { usePathname, useRouter } from "next/navigation";

const keyCodePathnameMapping: Record<string, string> = {
  Digit1: "/",
  Digit2: "/writing",
  Digit3: "/projects",
  Digit4: "/stack",
  Digit5: "/bookmarks",
  Digit6: "/contact",
};

export interface SideBarProps {
  title?: string;
  href?: string;
  isInner?: boolean;
  className?: string;
}

export const SideBar = ({ title, href, isInner, className }: SideBarProps) => {
  const router = useRouter();
  const pathname = usePathname();

  useKeyPress(onKeyPress, Object.keys(keyCodePathnameMapping));

  function onKeyPress(event: KeyboardEvent) {
    const key = event.code;
    const targetPathname = keyCodePathnameMapping[key];
    if (targetPathname && targetPathname !== pathname)
      router.push(targetPathname);
  }

  return (
    <ScrollArea
      className={cn(
        "hidden bg-zinc-50 lg:flex lg:flex-col lg:border-r",
        isInner ? "lg:w-80 xl:w-96" : "lg:w-60 xl:w-72",
        className
      )}
    >
      {title && (
        <div className="sticky top-0 z-10 border-b bg-zinc-50 px-5 py-3">
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold tracking-tight">
              {href ? <Link href={href}>{title}</Link> : <span>{title}</span>}
            </div>
          </div>
        </div>
      )}
      <div className="bg-stone-50 p-3">
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
      </div>
    </ScrollArea>
  );
};
