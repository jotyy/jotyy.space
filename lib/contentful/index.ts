import { client, previewClient } from '@/lib/contentful/client';

export async function getPost(slug: string, preview: boolean, locale: string) {
  const gqlClient = preview ? previewClient : client;
  const data = await gqlClient.pageBlogPost({ slug, preview, locale });
  return data;
}
