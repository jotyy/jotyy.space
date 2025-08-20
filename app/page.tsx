import { GetInTouchButton } from "@/components/get-in-touch-button";
import { PageContainer } from "@/components/page-container";
import { PostList } from "@/components/post-list";
import { ProjectList } from "@/components/project-list";
import { SectionWrapper } from "@/components/section-wrapper";
import { StackList } from "@/components/stack-list";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  PageBlogPostFieldsFragment,
  PageBlogPostOrder,
} from "@/lib/contentful/__generated/sdk";
import { client, previewClient } from "@/lib/contentful/client";
import Image from "next/image";

async function getLandingPosts(): Promise<{
  posts: PageBlogPostFieldsFragment[];
}> {
  try {
    const preview = false;
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
  } catch (err) {
    console.error("getLandingPosts", err);
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
        src="https://avatars.githubusercontent.com/u/30037764?v=4"
        alt="jotyy"
        width={60}
        height={60}
        loading="lazy"
        className="rounded-full"
      />
      <div>
        <h5 className="font-semibold text-lg">Hey, it&apos;s Joshua</h5>
        <h1 className="font-semibold text-4xl leading-normal mt-2 text-foreground">
          Full-Stack Engineer & AI Product Designer.
        </h1>
        <p className="text-muted-foreground">
          I&apos;m a versatile engineer with 8 years of experience building AI-powered 
          products from concept to production. I combine full-stack development, 
          UX design expertise, and DevOps proficiency to create scalable solutions 
          that drive innovation in the AI industry.
        </p>
      </div>

      <GetInTouchButton />

      <SectionWrapper
        title="My Works"
        link={{
          label: "View all",
          href: "/projects",
        }}
      >
        <ProjectList />
      </SectionWrapper>

      <SectionWrapper
        title="My Stack"
        link={{
          label: "View all",
          href: "/stack",
        }}
      >
        <StackList />
      </SectionWrapper>

      <SectionWrapper
        title="Writing"
        link={{ label: "View all", href: "/writing" }}
      >
        <PostList data={posts} />
      </SectionWrapper>

      <Card className="border rounded-md py-4 mt-12">
        <CardContent>
          <h3 className="font-semibold text-xl text-foreground">Get Notifications</h3>
          <p className="text-muted-foreground">
            Subscribe to my newsletter and get notified when I publish new
            content.
          </p>
        </CardContent>
        <CardFooter className="flex flex-row gap-4">
          <Input placeholder="Your Email" className="flex-1 max-w-xs" />
          <Button className="h-9">Subscribe</Button>
        </CardFooter>
      </Card>
    </PageContainer>
  );
}
