import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/content/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="space-y-6">
      <div className="flex items-center justify-between border-b border-hairline pb-3">
        <h2 className="font-serif text-2xl sm:text-3xl text-ink font-normal tracking-tight">
          <span className="font-mono text-sm sm:text-base text-emerald mr-2">
            02/
          </span>
          Selected Engineering Projects
        </h2>
        <span className="font-mono text-xs text-muted uppercase tracking-wider font-medium">
          [ ARTIFACT & BENCHMARKS ]
        </span>
      </div>

      <div className="space-y-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
