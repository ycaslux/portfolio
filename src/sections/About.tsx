import { motion } from 'framer-motion'
import { Target } from 'lucide-react'
import { profile } from '../data/profile'
import { SectionTitle } from '../components/SectionTitle'
import { Badge } from '../components/Badge'

export function About() {
  return (
    <section id="about" className="py-24 sm:py-28">
      <div className="section-container">
        <SectionTitle index="01" title="Sobre mim" />

        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 text-base leading-relaxed text-text-dim"
          >
            {profile.about.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}

            <div className="flex flex-wrap gap-2 pt-2">
              {profile.focusAreas.map((area) => (
                <Badge key={area}>{area}</Badge>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="h-fit space-y-6"
          >
            <div className="overflow-hidden rounded-xl border border-border bg-surface">
              <img
                src={profile.photo}
                alt={`Foto de ${profile.name}`}
                className="aspect-square w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="rounded-xl border border-border bg-surface p-6">
              <div className="mb-3 flex items-center gap-2 text-accent">
                <Target className="h-5 w-5" aria-hidden="true" />
                <h3 className="font-semibold text-text">Objetivos</h3>
              </div>
              <p className="text-sm leading-relaxed text-text-dim">{profile.goals}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
