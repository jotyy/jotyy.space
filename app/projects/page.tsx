import { ProjectList } from "@/components/project-list";

export default function Projects() {
  return (
    <main className="container max-w-4xl flex min-h-screen flex-col p-24 gap-4">
      <h1 className="text-3xl font-bold mb-12">My Projects</h1>
      <ProjectList />
    </main>
  );
}
