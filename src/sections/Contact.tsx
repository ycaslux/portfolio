import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Copy, Download, Mail } from 'lucide-react'
import { profile } from '../data/profile'
import { SectionTitle } from '../components/SectionTitle'
import { GithubIcon, LinkedinIcon } from '../components/icons'

export function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard indisponível — o usuário ainda pode usar o link mailto
    }
  }

  const contactLinks = [
    { label: 'E-mail', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
    {
      label: 'GitHub',
      value: '@' + profile.social.github.split('/').pop(),
      href: profile.social.github,
      icon: GithubIcon,
    },
    {
      label: 'LinkedIn',
      value: '/' + profile.social.linkedin.split('/').pop(),
      href: profile.social.linkedin,
      icon: LinkedinIcon,
    },
    ...(profile.resumeUrl && profile.resumeUrl !== '#'
      ? [{ label: 'Currículo', value: 'Baixar PDF', href: profile.resumeUrl, icon: Download }]
      : []),
    ...(profile.social.other ?? []).map((o) => ({ label: o.label, value: o.url, href: o.url, icon: Mail })),
  ]

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="section-container">
        <SectionTitle
          index="07"
          title="Contato"
          description="Vamos conversar sobre oportunidades, projetos ou colaborações."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-border bg-surface p-6 sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-border p-5 transition-colors hover:border-accent/50 hover:bg-surface-hover"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-transform group-hover:scale-105">
                  <link.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-mono uppercase tracking-wider text-text-dim">{link.label}</p>
                  <p className="truncate font-medium text-text">{link.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-6 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
            <p className="text-sm text-text-dim">Prefere copiar meu e-mail diretamente?</p>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-accent" aria-hidden="true" />
                  Copiado!
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" aria-hidden="true" />
                  Copiar e-mail
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
