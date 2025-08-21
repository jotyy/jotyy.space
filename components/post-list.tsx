'use client';

import { PostItem } from '@/components/post-item';
import type { PageBlogPostFieldsFragment } from '@/lib/contentful/__generated/sdk';

export type PostListProps = {
  data: PageBlogPostFieldsFragment[];
};

export function PostList({ data }: PostListProps) {
  return (
    <div className="flex flex-col gap-8">
      {data.map((post: PageBlogPostFieldsFragment) => (
        <PostItem key={post.title} {...post} />
      ))}
    </div>
  );
}
