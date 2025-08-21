import { PageContainer, PageHeader } from '@/components/page-container';
import { WorkList } from '@/components/work-list';

export default function Works() {
  return (
    <PageContainer>
      <PageHeader description="Here are some of my works" heading="My Works" />
      <WorkList />
    </PageContainer>
  );
}
