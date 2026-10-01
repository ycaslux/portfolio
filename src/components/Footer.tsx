import { Mail } from 'lucide-react'
import { profile } from '../data/profile'
import { GithubIcon, LinkedinIcon } from './icons'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="section-container flex flex-col items-center gap-4 py-8 text-sm text-text-dim sm:flex-row sm:justify-between">
        <p>
          © {year} {profile.name}. Todos os direitos reservados.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-accent transition-colors"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-accent transition-colors"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="E-mail" className="hover:text-accent transition-colors">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
