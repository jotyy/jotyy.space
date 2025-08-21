'use client';

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
} from '@ridemountainpig/svgl-react';
import { useTheme } from 'next-themes';
import { StackItem } from '@/components/stack-item';
import { STACKS } from '@/lib/config';

// Inline badge component for text paragraphs
const InlineBadge = ({
  icon: LightIcon,
  darkIcon: DarkIcon,
  children,
}: {
  // biome-ignore lint/suspicious/noExplicitAny: <tbd>
  icon: any;
  // biome-ignore lint/suspicious/noExplicitAny: <tbd>
  darkIcon?: any;
  children: React.ReactNode;
}) => {
  const { theme } = useTheme();
  const Icon = theme === 'dark' && DarkIcon ? DarkIcon : LightIcon;

  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-border bg-secondary/50 px-2 py-0.5">
      <Icon className="size-3" />
      <span className="text-muted-foreground text-xs">{children}</span>
    </span>
  );
};

export function StackList() {
  const categories = [
    { key: 'languages', title: '<LANGUAGES/>' },
    { key: 'frameworks', title: '<FRAMEWORKS/>' },
    { key: 'ai', title: '<AI/>' },
    { key: 'tools', title: '<TOOLS/>' },
    { key: 'devops', title: '<DEVOPS/>' },
    { key: 'software', title: '<SOFTWARE/>' },
  ];

  return (
    <div className="space-y-8">
      {/* Tech Stack Introduction */}
      <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
        <p>
          My main Tech stack is <InlineBadge icon={Nextjs}>NextJs</InlineBadge>{' '}
          framework with <InlineBadge icon={TypeScript}>TypeScript</InlineBadge>{' '}
          and <InlineBadge icon={TailwindCSS}>TailwindCSS</InlineBadge> for
          styling. For the database, I use{' '}
          <InlineBadge icon={PostgreSQL}>Postgres</InlineBadge> with{' '}
          <InlineBadge darkIcon={DrizzleORMDark} icon={DrizzleORMLight}>
            Drizzle
          </InlineBadge>{' '}
          or{' '}
          <InlineBadge darkIcon={PrismaDark} icon={PrismaLight}>
            Prisma
          </InlineBadge>{' '}
          as an ORM.
        </p>
        <p>
          For DevOps, I&apos;m experienced with traditional cloud platforms like{' '}
          <InlineBadge
            darkIcon={AmazonWebServicesDark}
            icon={AmazonWebServicesLight}
          >
            AWS
          </InlineBadge>
          , as well as modern serverless platforms like{' '}
          <InlineBadge icon={Cloudflare}>Cloudflare</InlineBadge> and{' '}
          <InlineBadge darkIcon={VercelDark} icon={VercelLight}>
            Vercel
          </InlineBadge>
          .
        </p>
        <p>
          At last, but not least, I use{' '}
          <InlineBadge darkIcon={CursorDark} icon={CursorLight}>
            Cursor
          </InlineBadge>{' '}
          IDE and <InlineBadge icon={ClaudeAI}>Claude Code</InlineBadge> for
          creating awesome projects. ❤️
        </p>
      </div>

      {/* Categories */}
      {categories.map(({ key, title }) => {
        const items = STACKS[key as keyof typeof STACKS];
        if (!items || items.length === 0) {
          return null;
        }

        return (
          <div className="space-y-3" key={key}>
            <h2 className="font-mono text-muted-foreground text-xs">{title}</h2>
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
