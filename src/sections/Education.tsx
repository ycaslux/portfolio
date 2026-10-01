import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education } from '../data/education'
import { SectionTitle } from '../components/SectionTitle'

export function Education() {
  if (education.length === 0) return null

  return (
    <section id="education" className="py-24 sm:py-28">
      <div className="section-container">
        <SectionTitle index="05" title="Formação" />

        <div className="grid gap-4 sm:grid-cols-2">
          {education.map((edu, i) => (
            <motion.div
              key={`${edu.course}-${edu.period}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: Math.min(i, 4) * 0.08 }}
              className="flex gap-4 rounded-xl border border-border bg-surface p-6"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-semibold text-text">{edu.course}</h3>
                <p className="mt-1 text-sm text-accent">{edu.institution}</p>
                <p className="mt-1 font-mono text-xs text-text-dim">
                  {edu.period}
                  {edu.status ? ` · ${edu.status}` : ''}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
