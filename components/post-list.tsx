"use client";

import { PostItem } from "@/components/post-item";
import { PageBlogPostFieldsFragment } from "@/lib/contentful/__generated/sdk";

export interface PostListProps {
  data: PageBlogPostFieldsFragment[];
}

export function PostList({ data }: PostListProps) {
  return (
    <div className="flex flex-col gap-8">
      {data.map((post: PageBlogPostFieldsFragment) => (
        <PostItem key={post.title} {...post} />
      ))}
    </div>
  );
}
