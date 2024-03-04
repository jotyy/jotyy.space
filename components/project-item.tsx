import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export interface ProjectItemProps {
  title: string;
  description: string;
  href: string;
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
      <div className="bg-gradient-to-tl from-[#757F9A] to-[#D7DDE8] w-full aspect-[4/3] rounded-lg overflow-hidden p-4 transition-all delay-500 hover:p-2 cursor-pointer">
        <Image
          src={cover}
          loading="lazy"
          alt={title}
          width={400}
          height={300}
          className="object-cover rounded-md w-full h-full"
        />
      </div>
      <p className="text-sm mt-2">{description}</p>
      <h3 className="text-lg font-bold">{title}</h3>
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
