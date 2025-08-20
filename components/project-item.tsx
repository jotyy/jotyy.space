import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

export interface ProjectItemProps {
  title: string;
  description: string;
  href?: string;
  cover: string;
  tags: string[];
}

export function ProjectItem({
  title,
  description,
  href,
  cover,
  tags,
}: ProjectItemProps) {
  return (
    <div className="flex flex-col items-start">
      <Link href={href || ""} target="_blank">
        <div className="bg-gradient-to-tl from-[#757F9A] to-[#D7DDE8] dark:from-[#1A1A1A] dark:to-[#2A2A2A] w-full aspect-[4/3] rounded-lg overflow-hidden relative cursor-pointer">
          <Image
            src={cover}
            loading="lazy"
            alt={title}
            width={400}
            height={300}
            className="object-cover rounded-md w-full h-full transition-all hover:scale-110 aspect-[4/3]"
          />
        </div>
      </Link>
      <p className="text-xs mt-2 text-muted-foreground">{description}</p>
      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
        {title}
      </h3>
      <div className="flex flex-wrap gap-1 mt-2">
        {tags.map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}
