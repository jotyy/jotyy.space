import {
  AmazonWebServicesDark,
  AmazonWebServicesLight,
  BetterAuthDark,
  BetterAuthLight,
  ClaudeAI,
  Cloudflare,
  CSS,
  CursorDark,
  CursorLight,
  DrizzleORMDark,
  DrizzleORMLight,
  ExpressjsDark,
  ExpressjsLight,
  Figma,
  FramerDark,
  FramerLight,
  GitHubDark,
  GitHubLight,
  Hono,
  HTML5,
  JavaScript,
  MongoDB,
  MotionDark,
  MotionLight,
  MySQL,
  Neon,
  Nextjs,
  Nodejs,
  OpenAIDark,
  OpenAILight,
  PerplexityAI,
  PostgreSQL,
  Postman,
  PrismaDark,
  PrismaLight,
  ReactLight,
  ReactQuery,
  TailwindCSS,
  TRPC,
  TypeScript,
  Ubuntu,
  VercelDark,
  VercelLight,
} from '@ridemountainpig/svgl-react';
import { Icons, SocialIcons } from '@/components/icons';

export const PROFILES = {
  twitter: {
    title: 'X (Twitter)',
    username: 'jotyy',
    url: 'https://x.com/jotyy_ai',
    icon: <SocialIcons.x />,
  },
  github: {
    title: 'GitHub',
    url: 'https://github.com/jotyy',
    icon: <SocialIcons.github />,
  },
  linkedin: {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jotyy3',
    icon: <SocialIcons.linkedin />,
  },
  readcv: {
    title: 'Read.cv',
    url: 'https://read.cv/jotyy',
    icon: <Icons.at />,
  },
};

export const LINKS = [
  {
    href: '/',
    label: 'Home',
    icon: <Icons.home />,
  },
  {
    href: '/writing',
    label: 'Writing',
    icon: <Icons.blog />,
  },
  {
    href: '/works',
    label: 'Works',
    icon: <Icons.works />,
  },
  {
    href: '/skills',
    label: 'Skills',
    icon: <Icons.skills />,
  },
  // {
  //   href: "/bookmarks",
  //   label: "Bookmarks",
  //   icon: <Icons.bookmark />,
  // },
  // {
  //   href: '/contact',
  //   label: 'Contact',
  //   icon: <Icons.contact />,
  // },
];

export const SCROLL_AREA_ID = 'scroll-area';
export const MOBILE_SCROLL_THRESHOLD = 20;

export const WORKS = [
  {
    title: 'Denser.ai',
    description: 'AI Portal Site',
    href: 'https://denser.ai',
    cover: '/images/projects/denser-ai.webp',
    tags: ['Next.js', 'Tailwind', 'shadcn/ui'],
  },
  {
    title: 'Denser Dashboard',
    description: 'Dashboard for denser.ai',
    href: 'https://denser.ai/u',
    cover: '/images/projects/denser-dashboard.webp',
    tags: ['React', 'Vite', 'shadcn/ui', 'Nest.js'],
  },
  {
    title: 'MegaETH Waitlist',
    description: 'Personal designed wait list page',
    href: 'https://mega-eth-landing.vercel.app/v1',
    cover: '/images/projects/megaeth-v1.webp',
    tags: ['Next.js', 'Design', 'Three.js'],
  },
  {
    title: 'MegaETH Landing',
    description: 'Personal designed landing page',
    href: 'https://mega-eth-landing.vercel.app/v3',
    cover: '/images/projects/megaeth-v3.webp',
    tags: ['Next.js', 'Design', 'Blur'],
  },
  {
    title: 'R3F Portfolio',
    description: 'Portfolio built with r3f',
    href: 'https://r3f-portfolio.vercel.app',
    cover: '/images/projects/r3f-portfolio.png',
    tags: ['React Three Fiber', 'Three.js', 'Tailwind'],
  },
  {
    title: 'Lattice Browser',
    description: 'Blockchain Explorer',
    cover: '/images/projects/lattice-browser.png',
    tags: ['Next.js', 'GraphQL', 'Ethers'],
  },
  {
    title: 'Udun Wallet',
    description: 'Ethereum wallet',
    cover: '/images/projects/udun-wallet.png',
    tags: ['Flutter', 'Ethers.js', 'Rust'],
  },
];

export const STACKS = {
  languages: [
    { title: 'JavaScript', icon: JavaScript },
    { title: 'TypeScript', icon: TypeScript },
    { title: 'HTML', icon: HTML5 },
    { title: 'CSS', icon: CSS },
    { title: 'NodeJs', icon: Nodejs },
    { title: 'SQL', icon: MySQL },
    { title: 'Postgres', icon: PostgreSQL },
    { title: 'MongoDB', icon: MongoDB },
  ],
  frameworks: [
    { title: 'React', icon: ReactLight },
    { title: 'NextJs', icon: Nextjs },
    { title: 'HonoJs', icon: Hono },
    { title: 'ExpressJs', icon: ExpressjsLight, darkIcon: ExpressjsDark },
    { title: 'TailwindCSS', icon: TailwindCSS },
    { title: 'TankStack Query', icon: ReactQuery },
    { title: 'TRPC', icon: TRPC },
    { title: 'Motion.dev', icon: MotionLight, darkIcon: MotionDark },
    { title: 'BetterAuth', icon: BetterAuthLight, darkIcon: BetterAuthDark },
  ],
  ai: [
    { title: 'OpenAI', icon: OpenAILight, darkIcon: OpenAIDark },
    { title: 'Claude', icon: ClaudeAI },
    { title: 'Perplexity', icon: PerplexityAI },
    { title: 'Cursor', icon: CursorLight, darkIcon: CursorDark },
  ],
  tools: [
    { title: 'Drizzle', icon: DrizzleORMLight, darkIcon: DrizzleORMDark },
    { title: 'Prisma', icon: PrismaLight, darkIcon: PrismaDark },
    { title: 'NeonDB', icon: Neon },
  ],
  devops: [
    { title: 'Github', icon: GitHubLight, darkIcon: GitHubDark },
    {
      title: 'AWS',
      icon: AmazonWebServicesLight,
      darkIcon: AmazonWebServicesDark,
    },
    { title: 'Vercel', icon: VercelLight, darkIcon: VercelDark },
    { title: 'Ubuntu', icon: Ubuntu },
    { title: 'Cloudflare', icon: Cloudflare },
  ],
  software: [
    { title: 'Postman', icon: Postman },
    { title: 'Figma', icon: Figma },
    { title: 'Framer', icon: FramerLight, darkIcon: FramerDark },
  ],
  // devops: [
  //   { title: "Github Actions(CI/CD)", icon: "githubactions" },
  //   { title: "", icon: "jwt" },
  // ],
};
