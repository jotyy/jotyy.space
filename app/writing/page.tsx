import { PageContainer, PageHeader } from "@/components/page-container";
import { PostList } from "@/components/post-list";

export default function Writing() {
  return (
    <PageContainer>
      <PageHeader
        heading="Writing"
        description="At times I compose content on various topics."
      />

      <PostList />
    </PageContainer>
  );
}
