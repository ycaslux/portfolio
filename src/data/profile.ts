import type { Profile } from './types'

// ====================================================================
// Dados principais exibidos no Hero, Sobre e Contato
// Preenchido a partir do currículo. Revise e ajuste onde achar necessário.
// ====================================================================
export const profile: Profile = {
  name: 'Lucas Santos Gralha',

  role: 'Graduando em Ciência da Computação · Estagiário de TI',

  tagline: 'Automatizando processos, analisando dados e construindo soluções eficientes com Python e Power BI.',

  location: 'Brasília, DF',

  summary:
    'Estudante de Ciência da Computação e Estagiário de TI, com foco em automação de processos, Python, dados e Power BI.',

  about: [
    'Estudante de Ciência da Computação com experiência prática como estagiário de TI em gestão pública. Tenho interesse em resolver problemas, aprender novas ferramentas e criar soluções eficientes nas áreas de desenvolvimento, dados, suporte técnico e automação de processos.',
    'Atualmente atuo como Estagiário de TI no Ministério da Gestão e Inovação em Serviços Públicos (MGI), desenvolvendo automações em Python, dashboards em Power BI e rotinas de tratamento de dados no dia a dia da gestão pública.',
  ],

  focusAreas: ['Desenvolvimento', 'Automação de Processos', 'Dados', 'Power BI', 'Suporte Técnico'],

  // TODO: revise o texto abaixo — foi inferido a partir do currículo, ajuste para refletir exatamente seus objetivos
  goals:
    'Busco crescer como desenvolvedor e evoluir para atuar com dados e automação, aplicando Python, Power BI e boas práticas em projetos que gerem impacto real.',

  email: 'lgralhadev@gmail.com',

  // Currículo em PDF, copiado para public/ a partir do arquivo enviado
  resumeUrl: '/curriculo-lucas-gralha.pdf',

  social: {
    github: 'https://github.com/ycaslux',
    linkedin: 'https://linkedin.com/in/lucasgralhadev',
    other: [
      // { label: 'WhatsApp', url: 'https://wa.me/55XXXXXXXXXXX' },
    ],
  },

  // TODO: o currículo tem uma foto, mas não foi possível extraí-la automaticamente.
  // Coloque sua foto em public/images/ (ex: avatar.jpg) e aponte o caminho abaixo.
  photo: '/images/avatar-placeholder.svg',
}
