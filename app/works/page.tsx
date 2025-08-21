import { PageContainer, PageHeader } from '@/components/page-container';
import { WorkList } from '@/components/work-list';

export default function Works() {
  return (
    <PageContainer>
      <PageHeader
        description="Designed, developed, and led by myself"
        heading="My Works"
      />
      <WorkList />
    </PageContainer>
  );
}
