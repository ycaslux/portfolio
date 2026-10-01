import { projects } from '../data/projects'
import { SectionTitle } from '../components/SectionTitle'
import { ProjectCard } from '../components/ProjectCard'

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-28">
      <div className="section-container">
        <SectionTitle
          index="03"
          title="Projetos"
          description="Uma seleção de projetos que desenvolvi aplicando software, automação e dados."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
