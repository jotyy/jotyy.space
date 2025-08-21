import { PageContainer, PageHeader } from '@/components/page-container';
import { StackList } from '@/components/stack-list';
import { TechStackIntroduction } from '@/components/tech-stack-introduction';

export default function Stack() {
  return (
    <PageContainer>
      <PageHeader description="What I use? see below." heading="Skills" />
      <TechStackIntroduction />
      <StackList />
    </PageContainer>
  );
}
