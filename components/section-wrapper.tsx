"use client";

import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";

export interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  title: string;
  link: {
    href: string;
    label: string;
  };
}

export function SectionWrapper({
  children,
  className,
  title,
  link,
}: SectionWrapperProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <div className="flex flex-row justify-between mt-12">
        <h2 className="font-semibold text-2xl text-foreground">
          {title}
        </h2>
        <Link href={link.href} className="flex items-center underline">
          <Icons.arrowRight />
        </Link>
      </div>

      {children}
    </div>
  );
}
