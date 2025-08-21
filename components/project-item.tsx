import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

export type ProjectItemProps = {
  title: string;
  description: string;
  href?: string;
  cover: string;
  tags: string[];
};

export function ProjectItem({
  title,
  description,
  href,
  cover,
  tags,
}: ProjectItemProps) {
  return (
    <div className="flex flex-col items-start">
      <Link href={href || ''} target="_blank">
        <div className="relative aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-lg bg-gradient-to-tl from-[#757F9A] to-[#D7DDE8] dark:from-[#1A1A1A] dark:to-[#2A2A2A]">
          <Image
            alt={title}
            className="aspect-[4/3] h-full w-full rounded-md object-cover transition-all hover:scale-110"
            height={300}
            loading="lazy"
            src={cover}
            width={400}
          />
        </div>
      </Link>
      <p className="mt-2 text-muted-foreground text-xs">{description}</p>
      <h3 className="font-semibold text-foreground text-lg">{title}</h3>
      <div className="mt-2 flex flex-wrap gap-1">
        {tags.map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}
