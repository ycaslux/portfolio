export interface Profile {
  name: string
  role: string
  tagline: string
  location: string
  summary: string
  about: string[]
  focusAreas: string[]
  goals: string
  email: string
  resumeUrl: string
  social: {
    github: string
    linkedin: string
    other?: { label: string; url: string }[]
  }
  photo: string
}

export interface SkillCategory {
  category: string
  icon: string
  items: string[]
}

export interface Project {
  title: string
  description: string
  technologies: string[]
  image: string
  github: string
  demo?: string
  featured: boolean
}

export interface Experience {
  company: string
  role: string
  period: string
  location: string
  activities: string[]
}

export interface Education {
  course: string
  institution: string
  period: string
  status?: string
}

export interface Certification {
  name: string
  issuer: string
  year: string
  url?: string
}
