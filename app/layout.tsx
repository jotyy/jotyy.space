import { draftMode } from "next/headers";

import { sharedDescription, sharedTitle } from "@/app/shared-meta";
import { NavHeader } from "@/components/nav-header";
import { SideBar } from "@/components/side-bar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/utils/cn";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isEnabled } = await draftMode();

  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <body
        className={cn("min-h-screen flex bg-background font-sans antialiased")}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {isEnabled && (
            <div className="absolute bottom-0 left-0 right-0 z-50 flex h-12 w-full items-center justify-center bg-green-500 text-center text-sm font-medium text-white">
              <div className="flex items-center gap-2">
                <span>Draft mode is enabled</span>
              </div>
            </div>
          )}
          <aside className="lg:flex">
            <SideBar className="relative hidden lg:flex" />
          </aside>
          <div className="flex flex-1">
            <ScrollArea className="flex flex-col" hasScrollTitle>
              <NavHeader scrollTitle="Jotyy" />
              <div className="pb-12">{children}</div>
            </ScrollArea>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL("https://jotyy.vercel.app"),
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
    site: "jotyy_ai_mvp",
    creator: "jotyy_ai_mvp",
  },
  other: {
    pinterest: "nopin",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};
