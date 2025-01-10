import { Icons, SocialIcons } from "@/components/icons";

export const PROFILES = {
  twitter: {
    title: "X (Twitter)",
    username: "jotyy",
    url: "https://twitter.com/intent/user?screen_name=jotyy3",
    icon: <SocialIcons.x />,
  },
  github: {
    title: "GitHub",
    url: "https://github.com/jotyy",
    icon: <SocialIcons.github />,
  },
  linkedin: {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/jotyy3",
    icon: <SocialIcons.linkedin />,
  },
  readcv: {
    title: "Read.cv",
    url: "https://read.cv/jotyy",
    icon: <Icons.at />,
  },
};

export const LINKS = [
  {
    href: "/",
    label: "Home",
    icon: <Icons.home />,
  },
  {
    href: "/writing",
    label: "Writing",
    icon: <Icons.blog />,
  },
  {
    href: "/projects",
    label: "Projects",
    icon: <Icons.projects />,
  },
  {
    href: "/stack",
    label: "Stack",
    icon: <Icons.stack />,
  },
  {
    href: "/bookmarks",
    label: "Bookmarks",
    icon: <Icons.bookmark />,
  },
  {
    href: "/contact",
    label: "Contact",
    icon: <Icons.contact />,
  },
];

export const SCROLL_AREA_ID = "scroll-area";
export const MOBILE_SCROLL_THRESHOLD = 20;

export const PROJECTS = [
  {
    title: "Denser.ai",
    description: "AI Portal Site",
    href: "https://denser.ai",
    cover: "/images/projects/denser-ai.webp",
    tags: ["Next.js", "Tailwind", "shadcn/ui"],
  },
  {
    title: "Denser Dashboard",
    description: "Dashboard for denser.ai",
    href: "https://denser.ai/u",
    cover: "/images/projects/denser-dashboard.webp",
    tags: ["React", "Vite", "shadcn/ui", "Nest.js"],
  },
  {
    title: "MegaETH Waitlist",
    description: "Personal designed wait list page",
    href: "https://mega-eth-landing.vercel.app/v1",
    cover: "/images/projects/megaeth-v1.webp",
    tags: ["Next.js", "Design", "Three.js"],
  },
  {
    title: "MegaETH Landing",
    description: "Personal designed landing page",
    href: "https://mega-eth-landing.vercel.app/v3",
    cover: "/images/projects/megaeth-v3.webp",
    tags: ["Next.js", "Design", "Blur"],
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
    cover: "/images/projects/lattice-browser.png",
    tags: ["Next.js", "GraphQL", "Ethers"],
  },
  {
    title: "Udun Wallet",
    description: "Ethereum wallet",
    cover: "/images/projects/udun-wallet.png",
    tags: ["Flutter", "Ethers.js", "Rust"],
  },
];

export const STACKS = {
  design: [
    {
      title: "Figma",
      icon: "figma",
      description: "Design Tool",
    },
    {
      title: "Framer",
      icon: "framer",
      description: "Animation Tool",
    },
    {
      title: "Blender",
      icon: "blender",
      description: "3D Modeling Tool",
    },
  ],
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
    cover:
      "https://images.unsplash.com/photo-1579547621700-03c2c337370a?q=80&w=3500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "How to use Vite with React",
    description: "A guide to setting up Vite with React",
    date: "2021-09-01",
    cover:
      "https://images.unsplash.com/photo-1579547621700-03c2c337370a?q=80&w=3500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Vite", "React"],
  },
  {
    title: "How to use Vite with Vue",
    description: "A guide to setting up Vite with Vue",
    date: "2021-08-01",
    cover:
      "https://images.unsplash.com/photo-1579547621700-03c2c337370a?q=80&w=3500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Vite", "Vue"],
  },
  {
    title: "How to use Vite with Svelte",
    description: "A guide to setting up Vite with Svelte",
    date: "2021-07-01",
    cover:
      "https://images.unsplash.com/photo-1579547621700-03c2c337370a?q=80&w=3500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Vite", "Svelte"],
  },
  {
    title: "How to use Vite with Preact",
    description: "A guide to setting up Vite with Preact",
    date: "2021-06-01",
    cover:
      "https://images.unsplash.com/photo-1579547621700-03c2c337370a?q=80&w=3500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Vite", "Preact"],
  },
];
