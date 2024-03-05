"use client";

import { NavHeader } from "@/components/nav-header";
import { PageContainer } from "@/components/page-container";
import { PostList } from "@/components/post-list";
import { ProjectList } from "@/components/project-list";
import { StackList } from "@/components/stack-list";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
        <Button className="font-bold py-6 text-base group">
          Get in touch
          <ArrowRight
            size={30}
            className="ml-4 rounded-full bg-primary-foreground/10 p-1.5 transition-all duration-300 -rotate-45 group-hover:rotate-0"
          />
        </Button>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-row justify-between mt-12">
          <h2 className="font-bold text-2xl">My Projects</h2>
          <Link
            href="/projects"
            className="flex flex-row items-center underline"
          >
            All Projects
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>

        <ProjectList />
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-row justify-between mt-12">
          <h2 className="font-bold text-2xl">Stack</h2>
          <Link href="/stack" className="flex flex-row items-center underline">
            All Stack
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>

        <StackList />
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-row justify-between mt-12">
          <h2 className="font-bold text-2xl">Writting</h2>
          <Link
            href="/writting"
            className="flex flex-row items-center underline"
          >
            All Posts
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>

        <PostList />
      </div>

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
