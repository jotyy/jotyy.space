'use client';

import React from 'react';
import { SCROLL_AREA_ID } from '@/lib/config';
import { cn } from '@/lib/utils';

export interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  hasScrollTitle?: boolean;
}

const ScrollArea = React.forwardRef<HTMLDivElement, ScrollAreaProps>(
  ({ hasScrollTitle, className, ...props }, ref) => {
    return (
      <div
        className={cn('scrollable-area relative w-full', className)}
        id={hasScrollTitle ? SCROLL_AREA_ID : undefined}
        ref={ref}
        {...props}
      />
    );
  }
);

ScrollArea.displayName = 'ScrollArea';

export { ScrollArea };
