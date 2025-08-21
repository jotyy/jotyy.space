import { format } from 'date-fns';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import { RichText } from '@/components/contentful/rich-text';
import { PageContainer, PageHeader } from '@/components/page-container';
import { getPost } from '@/lib/contentful';
import type { PageBlogPostFieldsFragment } from '@/lib/contentful/__generated/sdk';

// export async function generateStaticParams() {
//   const allPosts = await getAllPostSlugs();
//   return allPosts.map((post) => ({ slug: post.slug }));
// }

async function fetchData(slug: string) {
  await draftMode();
  const data = await getPost(slug, false, 'en-US');
  if (!data.pageBlogPostCollection) {
    notFound();
  }

  return {
    data: data.pageBlogPostCollection.items[0] as PageBlogPostFieldsFragment,
  };
}

export default async function WritingSlug(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const { slug } = params;
  const { data } = await fetchData(slug);

  const { title, publishedDate, seoFields, content } = data;

  const postDate = publishedDate;
  const dateString = format(postDate, 'MMMM dd, yyyy');

  const datePublished = new Date(postDate).toISOString();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: seoFields?.pageTitle,
    description: seoFields?.pageDescription,
    datePublished,
    author: {
      '@type': 'Person',
      name: 'Joshua',
    },
    url: `https://jotyy.vercel.app/writing/${slug}`,
  };

  return (
    <>
      <PageContainer>
        <article className="content">
          <PageHeader
            className="mb-6 flex flex-col gap-3"
            heading={title ?? 'Blog Post'}
          >
            <time className="text-zinc-400" dateTime={postDate}>
              {dateString}
            </time>
          </PageHeader>
          <RichText content={content} />
        </article>
      </PageContainer>
      <script
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <expected>
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd, null, 2) }}
        type="application/ld+json"
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
