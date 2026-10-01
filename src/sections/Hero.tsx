import { ArrowRight, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { GithubIcon, LinkedinIcon } from '../components/icons'

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,var(--color-accent)_0%,transparent_70%)] opacity-[0.07]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(var(--color-border)_1px,transparent_1px),linear-gradient(90deg,var(--color-border)_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.25] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_40%,transparent_100%)]"
      />

      <div className="section-container grid items-center gap-12 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Disponível para novas oportunidades
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-text sm:text-5xl lg:text-6xl">
            Olá, eu sou{' '}
            <span className="text-gradient">{profile.name}</span>
          </h1>

          <p className="mt-4 font-mono text-lg text-accent sm:text-xl">{profile.role}</p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-text-dim sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5"
            >
              Ver projetos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent"
            >
              Entrar em contato
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-text-dim transition-colors hover:text-accent"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-text-dim transition-colors hover:text-accent"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="E-mail"
              className="text-text-dim transition-colors hover:text-accent"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-2xl shadow-black/20">
            <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              <span className="ml-3 font-mono text-xs text-text-dim">whoami.sh</span>
            </div>
            <div className="space-y-2 p-5 font-mono text-sm leading-relaxed">
              <p className="text-text-dim">
                <span className="text-accent">$</span> whoami
              </p>
              <p className="text-text">{profile.name}</p>
              <p className="text-text-dim">
                <span className="text-accent">$</span> cat role.txt
              </p>
              <p className="text-text">{profile.role}</p>
              <p className="text-text-dim">
                <span className="text-accent">$</span> cat focus.txt
              </p>
              <p className="text-text">{profile.focusAreas.join(' · ')}</p>
              <p className="text-text-dim">
                <span className="text-accent">$</span>{' '}
                <span className="border-r-2 border-accent pr-0.5 animate-blink">&nbsp;</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
