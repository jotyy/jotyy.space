"use client";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { useRouter } from "next/navigation";

export function GetInTouchButton() {
  const router = useRouter();

  return (
    <Button
      className="font-bold py-6 text-base group"
      onClick={() => router.push("/contact")}
    >
      Get in touch
      <div className="ml-4 rounded-full bg-primary-foreground/10 p-1.5 transition-all duration-300 -rotate-45 group-hover:rotate-0">
        <Icons.arrowRight />
      </div>
    </Button>
  );
}
