import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-mono text-text-dim">
      {children}
    </span>
  )
}
