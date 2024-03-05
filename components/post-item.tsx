import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import Image from "next/image";

export interface PostItemProps {
  title: string;
  description: string;
  date: string;
  cover: string;
  tags: string[];
}

export function PostItem({
  title,
  description,
  date,
  cover,
  tags,
}: PostItemProps) {
  return (
    <div className="flex flex-row gap-6">
      <Image
        src={cover}
        loading="lazy"
        alt={title}
        width={200}
        height={160}
        className="object-cover rounded-md aspect-[4/3]"
      />
      <div className="flex flex-col items-start">
        <p className="text-sm mt-2 text-muted-foreground">
          {format(date, "MMMM dd, yyyy")}
        </p>
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="flex flex-wrap gap-1 mt-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
