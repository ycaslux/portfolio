import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { experiences } from '../data/experience'
import { SectionTitle } from '../components/SectionTitle'

export function Experience() {
  if (experiences.length === 0) return null

  return (
    <section id="experience" className="py-24 sm:py-28">
      <div className="section-container">
        <SectionTitle index="04" title="Experiência" />

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: Math.min(i, 4) * 0.08 }}
              className="relative rounded-xl border border-border bg-surface p-6 pl-8"
            >
              <span className="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-accent/60" />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-accent" aria-hidden="true" />
                  <h3 className="font-semibold text-text">{exp.role}</h3>
                </div>
                <span className="font-mono text-xs text-text-dim">{exp.period}</span>
              </div>
              <p className="mt-1 text-sm text-accent">
                {exp.company} · {exp.location}
              </p>
              <ul className="mt-3 list-inside list-disc space-y-1.5 text-sm leading-relaxed text-text-dim">
                {exp.activities.map((activity) => (
                  <li key={activity.slice(0, 32)}>{activity}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
