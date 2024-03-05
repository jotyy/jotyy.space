"use client";

import { cn } from "@/lib/utils";
import { SCROLL_AREA_ID } from "@/lib/config";
import React from "react";

export interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  hasScrollTitle?: boolean;
}

const ScrollArea = React.forwardRef<HTMLDivElement, ScrollAreaProps>(
  function ScrollArea({ hasScrollTitle, className, ...props }, ref) {
    return (
      <div
        id={hasScrollTitle ? SCROLL_AREA_ID : undefined}
        ref={ref}
        className={cn("scrollable-area relative w-full", className)}
        {...props}
      />
    );
  }
);

ScrollArea.displayName = "ScrollArea";

export { ScrollArea };
