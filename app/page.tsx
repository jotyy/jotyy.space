import { GetInTouchButton } from "@/components/get-in-touch-button";
import { PageContainer } from "@/components/page-container";
import { PostList } from "@/components/post-list";
import { ProjectList } from "@/components/project-list";
import { SectionWrapper } from "@/components/section-wrapper";
import { StackList } from "@/components/stack-list";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { revalidateDuration } from "@/lib/constants";
import { PageBlogPostOrder } from "@/lib/contentful/__generated/sdk";
import { client, previewClient } from "@/lib/contentful/client";
import Image from "next/image";

async function getLandingPosts() {
  try {
    const locale = "en-US";
    const preview = false;
    const gqlClient = preview ? previewClient : client;

    const landingPageData = await gqlClient.pageLanding({ locale, preview });
    const page = landingPageData.pageLandingCollection?.items[0];

    const blogPostsData = await gqlClient.pageBlogPostCollection({
      limit: 4,
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

export default async function Home() {
  const { props } = await getLandingPosts();

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
      <h5 className="font-bold text-xl">Hey, it&apos;s Joshua</h5>
      <h1 className="font-bold text-4xl leading-normal">
        Building AI products & experiences.
      </h1>
      <p className="text-muted-foreground">
        I&apos;m a software engineer with 8 years of experience specializing in
        B2B, B2C solutions, creating user-centered experiences that drive
        innovation and efficiency.
      </p>

      <div>
        <GetInTouchButton />
      </div>

      <SectionWrapper
        title="My Projects"
        link={{
          label: "All Projects",
          href: "/projects",
        }}
      >
        <ProjectList />
      </SectionWrapper>

      <SectionWrapper
        title="My Stack"
        link={{
          label: "All Stack",
          href: "/stack",
        }}
      >
        <StackList />
      </SectionWrapper>

      <SectionWrapper
        title="Writting"
        link={{ label: "All Posts", href: "/writing" }}
      >
        <PostList data={props?.posts ?? []} />
      </SectionWrapper>

      <Card className="border rounded-md py-4 bg-secondary mt-12">
        <CardContent>
          <h3 className="font-bold text-xl">Get Notifications</h3>
          <p className="text-secondary-foreground">
            Subscribe to my newsletter and get notified when I publish new
            content.
          </p>
        </CardContent>
        <CardFooter className="flex flex-row gap-4">
          <Input placeholder="Your Email" className="flex-1" />
          <Button>Subscribe</Button>
        </CardFooter>
      </Card>
    </PageContainer>
  );
}
