import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'
import { certifications } from '../data/certifications'
import { SectionTitle } from '../components/SectionTitle'

export function Certifications() {
  if (certifications.length === 0) return null

  return (
    <section id="certifications" className="py-24 sm:py-28">
      <div className="section-container">
        <SectionTitle index="06" title="Certificações" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => {
            const content = (
              <>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Award className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="truncate font-semibold text-text">{cert.name}</h3>
                  <p className="mt-1 text-sm text-text-dim">{cert.issuer}</p>
                  <p className="mt-1 font-mono text-xs text-accent">{cert.year}</p>
                </div>
                {cert.url && <ExternalLink className="h-4 w-4 shrink-0 text-text-dim" aria-hidden="true" />}
              </>
            )

            const className =
              'flex items-start gap-4 rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/50'

            return (
              <motion.div
                key={`${cert.name}-${cert.year}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: Math.min(i, 5) * 0.06 }}
              >
                {cert.url ? (
                  <a href={cert.url} target="_blank" rel="noopener noreferrer" className={className}>
                    {content}
                  </a>
                ) : (
                  <div className={className}>{content}</div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
