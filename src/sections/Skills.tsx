import { motion } from 'framer-motion'
import {
  BarChart3,
  Blocks,
  Bot,
  Cloud,
  Code2,
  Database,
  Languages,
  type LucideIcon,
  Wrench,
} from 'lucide-react'
import { skills } from '../data/skills'
import { SectionTitle } from '../components/SectionTitle'

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Blocks,
  Database,
  Cloud,
  Bot,
  BarChart3,
  Wrench,
  Languages,
}

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-28">
      <div className="section-container">
        <SectionTitle
          index="02"
          title="Habilidades"
          description="Tecnologias e ferramentas que utilizo para construir soluções."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => {
            const Icon = iconMap[group.icon] ?? Code2
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: Math.min(i, 5) * 0.06 }}
                className="rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/50"
              >
                <div className="mb-4 flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                  </span>
                  <h3 className="font-semibold text-text">{group.category}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md bg-surface-hover px-2.5 py-1 text-xs font-mono text-text-dim"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
