import { PageContainer, PageHeader } from '@/components/page-container';
import { ProjectList } from '@/components/project-list';

export default function Projects() {
  return (
    <PageContainer>
      <PageHeader description="Here are some of my works" heading="My Works" />
      <ProjectList />
    </PageContainer>
  );
}
