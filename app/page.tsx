import Image from 'next/image';
import { GetInTouchButton } from '@/components/get-in-touch-button';
import { GithubCalendar } from '@/components/github-calendar';
import { PageContainer } from '@/components/page-container';
import { PostList } from '@/components/post-list';
import { SectionWrapper } from '@/components/section-wrapper';
import { StackList } from '@/components/stack-list';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { WorkList } from '@/components/work-list';
import {
  type PageBlogPostFieldsFragment,
  PageBlogPostOrder,
} from '@/lib/contentful/__generated/sdk';
import { client, previewClient } from '@/lib/contentful/client';

async function getLandingPosts(preview = false): Promise<{
  posts: PageBlogPostFieldsFragment[];
}> {
  try {
    const gqlClient = preview ? previewClient : client;

    const data = await gqlClient.pageBlogPostCollection({
      limit: 4,
      preview,
      order: PageBlogPostOrder.PublishedDateDesc,
    });

    return {
      posts: (data.pageBlogPostCollection?.items ??
        []) as PageBlogPostFieldsFragment[],
    };
  } catch (_err) {
    return {
      posts: [],
    };
  }
}

export default async function Home() {
  const { posts } = await getLandingPosts();

  return (
    <PageContainer>
      <Image
        alt="jotyy"
        className="rounded-full"
        height={60}
        loading="lazy"
        src="https://avatars.githubusercontent.com/u/30037764?v=4"
        width={60}
      />
      <div>
        <h5 className="font-semibold text-lg">Hey, it&apos;s Joshua</h5>
        <h1 className="mt-2 font-semibold text-4xl text-foreground leading-normal">
          Design Engineer build AI-powered products.
        </h1>
        <p className="text-muted-foreground">
          I&apos;m a versatile engineer with 8 years of experience building
          AI-powered products from concept to production. I combine full-stack
          development, UX design expertise, and DevOps proficiency to create
          scalable solutions that drive innovation in the AI industry.
        </p>
      </div>

      <GithubCalendar />

      <GetInTouchButton />

      <SectionWrapper
        link={{
          label: 'View all',
          href: '/works',
        }}
        title="My Works"
      >
        <WorkList limit={4} />
      </SectionWrapper>

      <SectionWrapper
        link={{
          label: 'View all',
          href: '/skils',
        }}
        title="My Skills"
      >
        <StackList />
      </SectionWrapper>

      <SectionWrapper
        link={{ label: 'View all', href: '/writing' }}
        title="Writing"
      >
        <PostList data={posts} />
      </SectionWrapper>

      <Card className="mt-12 rounded-md border bg-background py-4">
        <CardContent>
          <h3 className="font-semibold text-foreground text-xl">
            Get Notifications
          </h3>
          <p className="text-muted-foreground">
            Subscribe to my newsletter and get notified when I publish new
            content.
          </p>
        </CardContent>
        <CardFooter className="flex flex-row gap-4">
          <Input className="max-w-xs flex-1" placeholder="Your Email" />
          <Button className="h-9">Subscribe</Button>
        </CardFooter>
      </Card>
    </PageContainer>
  );
}
