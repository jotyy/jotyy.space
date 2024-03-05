import { PageContainer, PageHeader } from "@/components/page-container";
import { PostList } from "@/components/post-list";
import { revalidateDuration } from "@/lib/constants";
import { PageBlogPostOrder } from "@/lib/contentful/__generated/sdk";
import { previewClient, client } from "@/lib/contentful/client";

async function getAllPosts() {
  try {
    const locale = "en-US";
    const preview = false;
    const gqlClient = preview ? previewClient : client;

    const landingPageData = await gqlClient.pageLanding({ locale, preview });
    const page = landingPageData.pageLandingCollection?.items[0];

    const blogPostsData = await gqlClient.pageBlogPostCollection({
      locale,
      order: PageBlogPostOrder.PublishedDateDesc,
      where: {
        slug_not: page?.featuredBlogPost?.slug,
      },
      preview,
    });
    const posts = blogPostsData.pageBlogPostCollection?.items;

    if (!page) {
      return {
        revalidate: revalidateDuration,
        notFound: true,
      };
    }

    return {
      revalidate: revalidateDuration,
      props: {
        previewActive: !!preview,
        locale,
        page,
        posts,
      },
    };
  } catch {
    return {
      revalidate: revalidateDuration,
      notFound: true,
    };
  }
}

export default async function Writing() {
  const data = await getAllPosts();

  return (
    <PageContainer>
      <PageHeader
        heading="Writing"
        description="At times I compose content on various topics."
      />

      <PostList data={data.props?.posts ?? []} />
    </PageContainer>
  );
}
