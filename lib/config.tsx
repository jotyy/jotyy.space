import {
  At,
  Bookmark,
  CodeBlock,
  GithubLogo,
  LinkedinLogo,
  MagicWand,
  PaperPlaneTilt,
  PencilLine,
  Sparkle,
  TwitterLogo,
} from "@phosphor-icons/react";

export const PROFILES = {
  twitter: {
    title: "X (Twitter)",
    username: "jotyy",
    url: "https://twitter.com/intent/user?screen_name=jotyy3",
    icon: <TwitterLogo size={20} />,
  },
  github: {
    title: "GitHub",
    url: "https://github.com/jotyy",
    icon: <GithubLogo size={20} />,
  },
  linkedin: {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/jotyy3",
    icon: <LinkedinLogo size={20} />,
  },
  readcv: {
    title: "Read.cv",
    url: "https://read.cv/jotyy",
    icon: <At size={20} />,
  },
};

export const LINKS = [
  {
    href: "/",
    label: "Home",
    icon: <Sparkle size={18} weight="duotone" />,
  },
  {
    href: "/writing",
    label: "Writing",
    icon: <PencilLine size={18} weight="duotone" />,
  },
  {
    href: "/projects",
    label: "Projects",
    icon: <CodeBlock size={18} weight="duotone" />,
  },
  {
    href: "/stack",
    label: "Stack",
    icon: <MagicWand size={18} weight="duotone" />,
  },
  {
    href: "/bookmarks",
    label: "Bookmarks",
    icon: <Bookmark size={18} weight="duotone" />,
  },
  {
    href: "/contact",
    label: "Contact",
    icon: <PaperPlaneTilt size={18} weight="duotone" />,
  },
];

export const SCROLL_AREA_ID = "scroll-area";
export const MOBILE_SCROLL_THRESHOLD = 20;

export const PROJECTS = [
  {
    title: "Denser.ai",
    description: "AI Portal Site",
    href: "https://denser.ai",
    cover: "/images/projects/denser-ai.png",
    tags: ["Next.js", "Tailwind", "shadcn/ui"],
  },
  {
    title: "Denser Dashboard",
    description: "Dashboard for denser.ai",
    href: "https://denser.ai/u",
    cover: "/images/projects/denser-dashboard.png",
    tags: ["React", "Vite", "shadcn/ui", "Nest.js"],
  },
  {
    title: "R3F Portfolio",
    description: "Portfolio built with r3f",
    href: "https://r3f-portfolio.vercel.app",
    cover: "/images/projects/r3f-portfolio.png",
    tags: ["React Three Fiber", "Three.js", "Tailwind"],
  },
  {
    title: "Lattice Browser",
    description: "Blockchain Explorer",
    href: "#",
    cover: "/images/projects/lattice-browser.png",
    tags: ["Next.js", "GraphQL", "Ethers"],
  },
  {
    title: "Udun Wallet",
    description: "Ethereum wallet",
    href: "#",
    cover: "/images/projects/udun-wallet.png",
    tags: ["Flutter", "Ethers.js", "Rust"],
  },
];

export const STACKS = {
  tools: [
    {
      title: "AWS",
      icon: "aws",
      description: "Amazon Web Services",
    },
    {
      title: "VS Code",
      icon: "vscode",
      description: "Code Editor",
    },
    {
      title: "Figma",
      icon: "figma",
      description: "Design Tool",
    },
    {
      title: "Github Copilot",
      icon: "copilotgithub",
      description: "AI Pair Programming",
    },
    {
      title: "Arc",
      icon: "arc",
      description: "Browser",
    },
    {
      title: "Docker",
      icon: "docker",
      description: "Containerization",
    },
    {
      title: "Framer",
      icon: "framer",
      description: "Animation Tool",
    },
  ],
};

// TODO - Load from CMS
export const POSTS = [
  {
    title: "How to use Tailwind CSS with Next.js",
    description: "A guide to setting up Tailwind CSS with Next.js",
    date: "2021-10-01",
    cover: "https://images.unsplash.com/photo-1579547621700-03c2c337370a?q=80&w=3500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "How to use Vite with React",
    description: "A guide to setting up Vite with React",
    date: "2021-09-01",
    cover: "https://images.unsplash.com/photo-1579547621700-03c2c337370a?q=80&w=3500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Vite", "React"],
  },
  {
    title: "How to use Vite with Vue",
    description: "A guide to setting up Vite with Vue",
    date: "2021-08-01",
    cover: "https://images.unsplash.com/photo-1579547621700-03c2c337370a?q=80&w=3500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Vite", "Vue"],
  },
  {
    title: "How to use Vite with Svelte",
    description: "A guide to setting up Vite with Svelte",
    date: "2021-07-01",
    cover: "https://images.unsplash.com/photo-1579547621700-03c2c337370a?q=80&w=3500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Vite", "Svelte"],
  },
  {
    title: "How to use Vite with Preact",
    description: "A guide to setting up Vite with Preact",
    date: "2021-06-01",
    cover: "https://images.unsplash.com/photo-1579547621700-03c2c337370a?q=80&w=3500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Vite", "Preact"],
  },
];
