import { PageContainer, PageHeader } from "@/components/page-container";
import { StackList } from "@/components/stack-list";

export default function Stack() {
  return (
    <PageContainer>
      <PageHeader heading="Stack" />
      <StackList />
    </PageContainer>
  );
}
