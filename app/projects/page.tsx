import { PageContainer, PageHeader } from "@/components/page-container";
import { ProjectList } from "@/components/project-list";

export default function Projects() {
  return (
    <PageContainer>
      <PageHeader heading="My Works" description="Here are some of my works" />
      <ProjectList />
    </PageContainer>
  );
}
