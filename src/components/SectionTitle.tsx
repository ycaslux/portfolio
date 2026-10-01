import { motion } from 'framer-motion'

interface SectionTitleProps {
  index: string
  title: string
  description?: string
}

export function SectionTitle({ index, title, description }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <div className="flex items-center gap-3 text-sm font-mono text-accent">
        <span>{index}</span>
        <span className="h-px w-10 bg-accent/50" />
        <span className="uppercase tracking-widest text-text-dim">Seção</span>
      </div>
      <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-text">{title}</h2>
      {description && <p className="mt-3 max-w-2xl text-text-dim">{description}</p>}
    </motion.div>
  )
}
