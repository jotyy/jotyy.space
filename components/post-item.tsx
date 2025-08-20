import { PageBlogPostFieldsFragment } from "@/lib/contentful/__generated/sdk";
import { format } from "date-fns";
import Image from "next/image";
import { useRouter } from "next/navigation";

export type PostItemProps = PageBlogPostFieldsFragment;

export function PostItem({
  title,
  publishedDate,
  shortDescription,
  featuredImage,
  slug,
}: PostItemProps) {
  const router = useRouter();

  return (
    <div
      className="flex flex-col md:flex-row gap-4 md:gap-6 cursor-pointer"
      onClick={() => router.push(`/writing/${slug}`)}
    >
      <Image
        src={featuredImage?.url ?? "/placeholder.jpg"}
        loading="lazy"
        alt={title ?? "Post Image"}
        width={200}
        height={160}
        className="object-cover rounded-md w-full bg-secondary md:w-[200px] aspect-[4/3]"
      />
      <div className="flex flex-col items-start">
        <p className="text-sm mt-2 text-muted-foreground">
          {format(publishedDate, "MMMM dd, yyyy")}
        </p>
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <p className="text-muted-foreground">{shortDescription}</p>
      </div>
    </div>
  );
}
