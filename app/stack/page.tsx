import { PageContainer, PageHeader } from '@/components/page-container';
import { StackList } from '@/components/stack-list';

export default function Stack() {
  return (
    <PageContainer>
      <PageHeader description="What I use? see below." heading="Stack" />
      <StackList />
    </PageContainer>
  );
}
