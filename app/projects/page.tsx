import { PageContainer } from "@/components/page-container";
import { ProjectList } from "@/components/project-list";

export default function Projects() {
  return (
    <PageContainer>
      <h1 className="text-3xl font-bold mb-12">My Projects</h1>
      <ProjectList />
    </PageContainer>
  );
}
