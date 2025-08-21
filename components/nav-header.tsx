'use client';

import Link from 'next/link';
import { memo, useEffect, useState } from 'react';
import Balancer from 'react-wrap-balancer';
import { Icons } from '@/components/icons';
import { MobileDrawer } from '@/components/mobile-drawer';
import { Button } from '@/components/ui/button';
import { MOBILE_SCROLL_THRESHOLD, SCROLL_AREA_ID } from '@/lib/config';

const ONE_HUNDRED = 100;

export type FloatingHeaderProps = {
  scrollTitle?: string;
  title?: string;
  goBackLink?: string;
  children?: React.ReactNode;
};

export const NavHeader = memo(
  ({ scrollTitle, title, goBackLink, children }: FloatingHeaderProps) => {
    const [transformValues, setTransformValues] = useState({
      translateY: 0,
      opacity: scrollTitle ? 0 : 1,
    });

    useEffect(() => {
      const scrollAreaElem = document.querySelector(`#${SCROLL_AREA_ID}`);

      const onScroll = (e: Event) => {
        const scrollY = (e.target as HTMLElement).scrollTop;

        const translateY = Math.max(ONE_HUNDRED - scrollY, 0);
        const opacity = Math.min(
          Math.max(
            +(
              (scrollY -
                MOBILE_SCROLL_THRESHOLD *
                  (MOBILE_SCROLL_THRESHOLD / (scrollY ** 2 / ONE_HUNDRED))) /
              ONE_HUNDRED
            ).toFixed(2),
            0
          ),
          1
        );

        setTransformValues({ translateY, opacity });
      };

      if (scrollTitle) {
        scrollAreaElem?.addEventListener('scroll', onScroll, {
          passive: true,
        });
      }
      return () => scrollAreaElem?.removeEventListener('scroll', onScroll);
    }, [scrollTitle]);

    return (
      <header className="sticky inset-x-0 top-0 z-10 mx-auto flex h-12 w-full shrink-0 items-center overflow-hidden border-b bg-background font-medium text-sm lg:hidden">
        <div className="flex h-full w-full items-center px-3">
          <div className="flex w-full items-center justify-between gap-2">
            <div className="flex flex-1 items-center gap-1">
              {goBackLink ? (
                <Button
                  asChild
                  className="shrink-0"
                  size="icon"
                  variant="ghost"
                >
                  <Link href={goBackLink} title="Go back">
                    <Icons.arrowLeft />
                  </Link>
                </Button>
              ) : (
                <MobileDrawer />
              )}
              <div className="flex flex-1 items-center justify-between">
                {scrollTitle && (
                  <span
                    className="line-clamp-2 font-semibold tracking-tight"
                    style={{
                      transform: `translateY(${transformValues.translateY}%)`,
                      opacity: transformValues.opacity,
                    }}
                  >
                    {scrollTitle}
                  </span>
                )}
                {title && (
                  <Balancer ratio={0.35}>
                    <span className="line-clamp-2 font-semibold tracking-tight">
                      {title}
                    </span>
                  </Balancer>
                )}
              </div>
            </div>
            {scrollTitle && (
              <div className="flex min-w-[50px] justify-end">{children}</div>
            )}
          </div>
        </div>
      </header>
    );
  }
);

NavHeader.displayName = 'NavHeader';
