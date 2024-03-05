"use client";

import { PostItem } from "@/components/post-item";
import { POSTS } from "@/lib/config";

export function PostList() {
  return (
    <div className="flex flex-col gap-8">
      {POSTS.map((post) => (
        <PostItem key={post.title} {...post} />
      ))}
    </div>
  );
}
