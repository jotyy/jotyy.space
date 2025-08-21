import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import type { PageBlogPostFieldsFragment } from '@/lib/contentful/__generated/sdk';

export type PostItemProps = PageBlogPostFieldsFragment;

export function PostItem({
  title,
  publishedDate,
  shortDescription,
  featuredImage,
  slug,
}: PostItemProps) {
  return (
    <article>
      <Link
        className="flex cursor-pointer flex-col gap-4 transition-opacity hover:opacity-80 md:flex-row md:gap-6"
        href={`/writing/${slug}`}
      >
        <Image
          alt={title ?? 'Post Image'}
          className="aspect-[4/3] w-full rounded-md bg-secondary object-cover md:w-[200px]"
          height={160}
          loading="lazy"
          src={featuredImage?.url ?? '/placeholder.jpg'}
          width={200}
        />
        <div className="flex flex-col items-start">
          <time
            className="mt-2 text-muted-foreground text-sm"
            dateTime={publishedDate}
          >
            {format(publishedDate, 'MMMM dd, yyyy')}
          </time>
          <h3 className="font-semibold text-foreground text-xl">{title}</h3>
          <p className="text-muted-foreground">{shortDescription}</p>
        </div>
      </Link>
    </article>
  );
}
