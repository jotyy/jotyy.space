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

export const TWEETS_COLLECTION_ID = 15896982;

export const COLLECTION_IDS = [
  18259129,
  15968768,
  23598938,
  16949672,
  15807896,
  15807897,
  15969648,
  16338467,
  TWEETS_COLLECTION_ID,
  25589709,
  17139082,
  22029101,
  39696243,
];

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
export const SUPABASE_TABLE_NAME = "pages";
