"use client";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
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
        <h2 className="font-bold text-2xl">{title}</h2>
        <Link href={link.href} className="flex flex-row items-center underline">
          {link.label}
          <Icons.arrowRight className="ml-2" />
        </Link>
      </div>

      {children}
    </div>
  );
}
