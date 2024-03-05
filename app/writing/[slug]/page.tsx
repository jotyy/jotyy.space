import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

import { RichText } from "@/components/contentful/rich-text";
import { PageContainer, PageHeader } from "@/components/page-container";
import { getPost } from "@/lib/contentful";
import { PageBlogPostFieldsFragment } from "@/lib/contentful/__generated/sdk";
import { format } from "date-fns";
import Image from "next/image";

// export async function generateStaticParams() {
//   const allPosts = await getAllPostSlugs();
//   return allPosts.map((post) => ({ slug: post.slug }));
// }

async function fetchData(slug: string) {
  const { isEnabled } = draftMode();
  const data = await getPost(slug, false, "en-US");
  if (!data.pageBlogPostCollection) notFound();

  return {
    data: data.pageBlogPostCollection.items[0] as PageBlogPostFieldsFragment,
  };
}

export default async function WritingSlug({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const { data } = await fetchData(slug);

  const { title, publishedDate, seoFields, content } = data;

  const postDate = publishedDate;
  const dateString = format(postDate, "MMMM dd, yyyy");

  const datePublished = new Date(postDate).toISOString();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: seoFields?.pageTitle,
    description: seoFields?.pageDescription,
    datePublished,
    author: {
      "@type": "Person",
      name: "Jotyy",
    },
    url: `https://jotyy.vercel.app/writing/${slug}`,
  };

  return (
    <>
      <PageContainer>
        <article className="content">
          <PageHeader
            heading={title ?? "Blog Post"}
            className="mb-6 flex flex-col gap-3"
          >
            <time dateTime={postDate} className="text-gray-400">
              {dateString}
            </time>
          </PageHeader>
          <RichText content={content} />
        </article>
      </PageContainer>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd, null, 2) }}
      />
    </>
  );
}

// export async function generateMetadata({ params }) {
//   const { slug } = params;
//   const seoData = await getWritingSeo(slug);
//   if (!seoData) return null;

//   const {
//     date,
//     seo: { title, description },
//     sys: { firstPublishedAt, publishedAt: updatedAt },
//   } = seoData;

//   const siteUrl = `/writing/${slug}`;
//   const postDate = date || firstPublishedAt;
//   const publishedTime = new Date(postDate).toISOString();
//   const modifiedTime = new Date(updatedAt).toISOString();

//   return {
//     title,
//     description,
//     openGraph: {
//       title,
//       description,
//       type: "article",
//       publishedTime,
//       ...(updatedAt && {
//         modifiedTime,
//       }),
//       url: siteUrl,
//     },
//     alternates: {
//       canonical: siteUrl,
//     },
//   };
// }
