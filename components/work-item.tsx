import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

export type WorkItemProps = {
  title: string;
  description: string;
  href?: string;
  cover: string;
  tags: string[];
};

export function WorkItem({
  title,
  description,
  href,
  cover,
  tags,
}: WorkItemProps) {
  return (
    <div className="flex flex-col items-start">
      <Link href={href || ''} target="_blank">
        <div className="relative w-full cursor-pointer grayscale-0 transition-colors duration-400 ease-in-out hover:grayscale-0 dark:grayscale">
          <Image
            alt={title}
            className="h-full w-full rounded-none border-none object-contain"
            height={300}
            loading="lazy"
            src={cover}
            width={400}
          />
        </div>
      </Link>
      <h3 className="mt-2 font-semibold text-foreground text-lg">{title}</h3>
      <p className="text-muted-foreground text-xs">{description}</p>

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
