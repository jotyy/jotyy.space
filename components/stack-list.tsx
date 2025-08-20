"use client";

import { StackItem } from "@/components/stack-item";
import { STACKS } from "@/lib/config";
import {
  AmazonWebServicesDark,
  AmazonWebServicesLight,
  ClaudeAI,
  Cloudflare,
  CursorDark,
  CursorLight,
  DrizzleORMDark,
  DrizzleORMLight,
  Nextjs,
  PostgreSQL,
  PrismaDark,
  PrismaLight,
  TailwindCSS,
  TypeScript,
  VercelDark,
  VercelLight,
} from "@ridemountainpig/svgl-react";
import { useTheme } from "next-themes";

export function StackList() {
  const categories = [
    { key: "languages", title: "<LANGUAGES/>" },
    { key: "frameworks", title: "<FRAMEWORKS/>" },
    { key: "ai", title: "<AI/>" },
    { key: "tools", title: "<TOOLS/>" },
    { key: "devops", title: "<DEVOPS/>" },
    { key: "software", title: "<SOFTWARE/>" },
  ];

  // Inline badge component for text paragraphs
  const InlineBadge = ({
    icon: LightIcon,
    darkIcon: DarkIcon,
    children,
  }: {
    icon: any;
    darkIcon?: any;
    children: React.ReactNode;
  }) => {
    const { theme } = useTheme();
    const Icon = theme === "dark" && DarkIcon ? DarkIcon : LightIcon;

    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary/50 border border-border">
        <Icon className="size-3" />
        <span className="text-xs text-muted-foreground">
          {children}
        </span>
      </span>
    );
  };

  return (
    <div className="space-y-8">
      {/* Tech Stack Introduction */}
      <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
        <p>
          My main Tech stack is <InlineBadge icon={Nextjs}>NextJs</InlineBadge>{" "}
          framework with <InlineBadge icon={TypeScript}>TypeScript</InlineBadge>{" "}
          and <InlineBadge icon={TailwindCSS}>TailwindCSS</InlineBadge> for
          styling. For the database, I use{" "}
          <InlineBadge icon={PostgreSQL}>Postgres</InlineBadge> with{" "}
          <InlineBadge icon={DrizzleORMLight} darkIcon={DrizzleORMDark}>
            Drizzle
          </InlineBadge>{" "}
          or{" "}
          <InlineBadge icon={PrismaLight} darkIcon={PrismaDark}>
            Prisma
          </InlineBadge>{" "}
          as an ORM.
        </p>
        <p>
          For DevOps, I&apos;m experienced with traditional cloud platforms like{" "}
          <InlineBadge
            icon={AmazonWebServicesLight}
            darkIcon={AmazonWebServicesDark}
          >
            AWS
          </InlineBadge>
          , as well as modern serverless platforms like{" "}
          <InlineBadge icon={Cloudflare}>Cloudflare</InlineBadge> and{" "}
          <InlineBadge icon={VercelLight} darkIcon={VercelDark}>
            Vercel
          </InlineBadge>
          .
        </p>
        <p>
          At last, but not least, I use{" "}
          <InlineBadge icon={CursorLight} darkIcon={CursorDark}>
            Cursor
          </InlineBadge>{" "}
          IDE and <InlineBadge icon={ClaudeAI}>Claude Code</InlineBadge> for
          creating awesome projects. ❤️
        </p>
      </div>

      {/* Categories */}
      {categories.map(({ key, title }) => {
        const items = STACKS[key as keyof typeof STACKS];
        if (!items || items.length === 0) return null;

        return (
          <div key={key} className="space-y-3">
            <h2 className="text-xs font-mono text-muted-foreground">{title}</h2>
            <div className="flex flex-wrap gap-2">
              {items.map((stack) => (
                <StackItem key={stack.title} {...stack} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
