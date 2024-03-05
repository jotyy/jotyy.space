import { sharedDescription, sharedTitle } from "@/app/shared-meta";
import { SideBar } from "@/components/side-bar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/utils/cn";
import type { Metadata } from "next";
import { Manrope as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen flex bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <aside className="lg:flex">
          <SideBar className="relative hidden lg:flex" />
        </aside>
        <div className="flex flex-1">
          <ScrollArea className="flex flex-col" hasScrollTitle>
            {children}
          </ScrollArea>
        </div>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL("https://jotyy-space.vercel.app"),
  robots: {
    index: true,
    follow: true,
  },
  title: {
    template: `%s — ${sharedTitle}`,
    default: sharedTitle,
  },
  description: sharedDescription,
  openGraph: {
    title: {
      template: `%s — ${sharedTitle}`,
      default: sharedTitle,
    },
    description: sharedDescription,
    type: "website",
    url: "/",
    siteName: sharedTitle,
    locale: "en_IE",
  },
  alternates: {
    canonical: "/",
  },
  twitter: {
    card: "summary_large_image",
    site: `jotyy3`,
    creator: `@jotyy3`,
  },
  other: {
    pinterest: "nopin",
  },
};

export const viewport = {
  themeColor: "white",
  colorScheme: "only light",
  width: "device-width",
  initialScale: 1,
};
