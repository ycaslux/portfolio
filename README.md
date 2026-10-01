# Portfólio — Lucas Santos Gralha

Portfólio pessoal de desenvolvedor focado em **automação, Python, análise de dados e Power BI**, construído como uma single-page application moderna, responsiva e com dark mode.

## ✨ Funcionalidades

- Hero com apresentação, CTAs e links sociais
- Seções: Sobre, Habilidades, Projetos, Experiência, Formação, Certificações e Contato
- Seções de Experiência, Formação e Certificações se ocultam automaticamente se não houver dados
- Dark mode / light mode com persistência em `localStorage` (sem flash de tema ao carregar)
- Navbar fixa com indicador de seção ativa (scroll spy) e menu responsivo para mobile
- Animações sutis de entrada ao rolar a página (Framer Motion)
- Botão "Voltar ao topo"
- Cards de projeto com destaque para os principais trabalhos
- SEO básico (meta tags, Open Graph, Twitter Card) e acessibilidade (HTML semântico, `alt`, estados de foco)
- Dados centralizados em `src/data/` — fácil de atualizar sem mexer nos componentes

## 🛠️ Tecnologias

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) — build e dev server
- [Tailwind CSS v4](https://tailwindcss.com/) — estilização utilitária e tema claro/escuro
- [Framer Motion](https://motion.dev/) — animações
- [Lucide React](https://lucide.dev/) — ícones

## 📂 Estrutura do projeto

```text
portfolio/
├── public/
│   ├── favicon.svg
│   └── images/              # imagens estáticas (placeholders de projeto/avatar)
├── src/
│   ├── components/          # componentes reutilizáveis (Navbar, ProjectCard, etc.)
│   ├── sections/             # uma seção da página por arquivo (Hero, About, Skills...)
│   ├── data/                 # 🔧 dados do portfólio (edite aqui para personalizar)
│   ├── hooks/                 # hooks customizados (tema, scroll spy)
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .github/workflows/deploy.yml  # deploy automático para GitHub Pages
├── index.html                # meta tags de SEO ficam aqui
├── .gitignore
└── package.json
```

## 🚀 Como executar localmente

Pré-requisito: [Node.js](https://nodejs.org/) 20+ instalado.

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

## 📦 Build de produção

```bash
npm run build
npm run preview
```

Os arquivos otimizados são gerados em `dist/`.

## 🌐 Deploy

### GitHub Pages (automático, já configurado)

Este repositório já inclui um workflow em `.github/workflows/deploy.yml` que builda e publica o site a cada push na branch `main`.

1. Suba o projeto para um repositório no GitHub.
2. Em **Settings → Pages**, selecione **Source: GitHub Actions**.
3. Faça push na branch `main` — o site será publicado automaticamente em `https://seu-usuario.github.io/portfolio/`.
4. Atualize a URL em `index.html` (`og:url`, `canonical`, etc.) com o endereço final.

## 👤 Autor

**Lucas Santos Gralha** — Graduando em Ciência da Computação (UDF) e Estagiário de TI.

- GitHub: [github.com/ycaslux](https://github.com/ycaslux)
- LinkedIn: [linkedin.com/in/lucasgralhadev](https://linkedin.com/in/lucasgralhadev)
- E-mail: lgralhadev@gmail.com
