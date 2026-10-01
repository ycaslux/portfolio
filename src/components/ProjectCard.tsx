import { ExternalLink, Folder } from 'lucide-react'
import { motion } from 'framer-motion'
import type { Project } from '../data/types'
import { Badge } from './Badge'
import { GithubIcon } from './icons'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: Math.min(index, 4) * 0.08 }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5 ${
        project.featured ? 'md:col-span-2' : ''
      }`}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-bg">
        <img
          src={project.image}
          alt={`Preview do projeto ${project.title}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />
        {project.featured && (
          <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-accent/90 px-3 py-1 text-xs font-semibold text-bg">
            <Folder className="h-3 w-3" aria-hidden="true" />
            Destaque
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-text">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-text-dim">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-4 border-t border-border pt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-text-dim hover:text-accent transition-colors"
          >
            <GithubIcon className="h-4 w-4" aria-hidden="true" />
            Código
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-text-dim hover:text-accent transition-colors"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
