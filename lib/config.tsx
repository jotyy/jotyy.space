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
    description: "AI-powered chat and search bot",
    href: "https://denser.ai",
    cover: "/images/projects/denser-ai.png",
    tags: ["Next.js", "Tailwind", "shadcn/ui"],
  },
  {
    title: "Denser Dashboard",
    description: "Admin dashboard for Denser.ai",
    href: "https://denser.ai/u",
    cover: "/images/projects/denser-dashboard.png",
    tags: ["React", "Vite", "shadcn/ui", "Nest.js"],
  },
  {
    title: "R3F Portfolio",
    description: "Personal blog and portfolio",
    href: "https://r3f-portfolio.vercel.app",
    cover: "/images/projects/r3f-portfolio.png",
    tags: ["React Three Fiber", "Three.js", "Tailwind"],
  },
  {
    title: "Lattice Browser",
    description: "Blockchain Explorer for LatticeChain",
    href: "#",
    cover: "/images/projects/lattice-browser.png",
    tags: ["Next.js", "GraphQL", "Ethers"],
  },
  {
    title: "Udun Wallet",
    description: "Decentralized wallet for Ethereum",
    href: "#",
    cover: "/images/projects/udun-wallet.png",
    tags: ["Flutter", "Ethers.js", "Rust"],
  },
];
