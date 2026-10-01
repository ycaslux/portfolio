import { Navbar, type NavLink } from './components/Navbar'
import { Footer } from './components/Footer'
import { BackToTop } from './components/BackToTop'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Skills } from './sections/Skills'
import { Projects } from './sections/Projects'
import { Experience } from './sections/Experience'
import { Education } from './sections/Education'
import { Certifications } from './sections/Certifications'
import { Contact } from './sections/Contact'
import { experiences } from './data/experience'
import { education } from './data/education'
import { certifications } from './data/certifications'

const navLinks: NavLink[] = [
  { id: 'about', label: 'Sobre' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'projects', label: 'Projetos' },
  ...(experiences.length > 0 ? [{ id: 'experience', label: 'Experiência' }] : []),
  ...(education.length > 0 ? [{ id: 'education', label: 'Formação' }] : []),
  ...(certifications.length > 0 ? [{ id: 'certifications', label: 'Certificações' }] : []),
  { id: 'contact', label: 'Contato' },
]

function App() {
  return (
    <>
      <Navbar links={navLinks} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
