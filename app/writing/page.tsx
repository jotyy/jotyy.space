import { PageContainer, PageHeader } from "@/components/page-container";
import { PostList } from "@/components/post-list";
import {
  PageBlogPostFieldsFragment,
  PageBlogPostOrder,
} from "@/lib/contentful/__generated/sdk";
import { client, previewClient } from "@/lib/contentful/client";

async function getAllPosts() {
  try {
    const preview = false;
    const gqlClient = preview ? previewClient : client;

    const blogPostsData = await gqlClient.pageBlogPostCollection({
      order: PageBlogPostOrder.PublishedDateDesc,
      preview,
    });
    const posts = blogPostsData.pageBlogPostCollection?.items ?? [];

    return {
      posts: posts as PageBlogPostFieldsFragment[],
    };
  } catch {
    return {
      posts: [],
    };
  }
}

export default async function Writing() {
  const { posts } = await getAllPosts();

  return (
    <PageContainer>
      <PageHeader
        heading="Writing"
        description="At times I compose content on various topics."
      />

      <div className="py-10">
        <PostList data={posts ?? []} />
      </div>
    </PageContainer>
  );
}
