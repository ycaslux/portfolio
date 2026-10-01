import type { Project } from './types'

// ====================================================================
// 🔧 PERSONALIZE AQUI — adicione seus projetos reais. Para incluir um
// novo projeto, basta copiar um objeto do array e preencher os campos.
// "featured: true" destaca o projeto com um card maior na listagem.
// ====================================================================
export const projects: Project[] = [
  {
    // TODO: título do projeto
    title: 'Nome do Projeto 1',
    // TODO: descrição curta (2-3 frases) explicando o problema e a solução
    description:
      'Descreva aqui o que o projeto faz, qual problema resolve e qual foi o seu papel no desenvolvimento.',
    // TODO: tecnologias usadas
    technologies: ['Python', 'Pandas', 'Power BI'],
    // TODO: imagem de preview. Coloque o arquivo em src/assets/images/
    image: '/images/project-placeholder.svg',
    // TODO: link do repositório no GitHub
    github: 'https://github.com/seu-usuario/projeto-1',
    // Opcional: link de demo ao vivo (remova a linha se não existir)
    demo: undefined,
    featured: true,
  },
  {
    title: 'Nome do Projeto 2',
    description:
      'Descreva aqui o que o projeto faz, qual problema resolve e qual foi o seu papel no desenvolvimento.',
    technologies: ['Python', 'Selenium', 'Automação'],
    image: '/images/project-placeholder.svg',
    github: 'https://github.com/seu-usuario/projeto-2',
    demo: undefined,
    featured: true,
  },
  {
    title: 'Nome do Projeto 3',
    description:
      'Descreva aqui o que o projeto faz, qual problema resolve e qual foi o seu papel no desenvolvimento.',
    technologies: ['React', 'TypeScript', 'SQL'],
    image: '/images/project-placeholder.svg',
    github: 'https://github.com/seu-usuario/projeto-3',
    demo: undefined,
    featured: false,
  },
]
