# Eduardo Uchoa — Portfólio

Landing page / portfólio feita com **Next.js (App Router)**, **TypeScript** e **Tailwind CSS 4**.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm run lint
```

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Links de contato (WhatsApp, e-mail, GitHub, LinkedIn) | `config/site.ts` → `contactLinks` |
| Título, descrição e palavras-chave (SEO) | `config/site.ts` → `siteConfig` |
| Projetos, processo, tecnologias e serviços | `data/content.ts` |
| Cores e tipografia (tokens) | `app/globals.css` → `@theme` |

### Links de contato

Enquanto um link estiver vazio (`""`), o botão aparece como **"Link em breve"** e não leva a lugar nenhum.

```ts
export const contactLinks = {
  whatsappNumber: "5591999999999", // só dígitos, com DDI e DDD
  email: "voce@dominio.com",
  github: "https://github.com/seu-usuario",
  linkedin: "https://www.linkedin.com/in/seu-usuario",
};
```

GitHub e LinkedIn preenchidos também entram automaticamente no JSON-LD (`sameAs`).

### URL do site

Defina `NEXT_PUBLIC_SITE_URL` no ambiente de deploy (ex.: `https://eduardouchoa.dev`).
Ela é usada no Open Graph, no `sitemap.xml` e no `robots.txt`.

### Adicionar projetos

- **Projeto em destaque:** adicione um item em `featuredProjects`. Campos como `metrics`, `approach` e `links` são opcionais. Só preencha com informações reais.
- **Sites e outros projetos:** adicione itens em `otherProjects` (`status: "live"` para site no ar, `"prototype"` para protótipo). Para mostrar uma captura no card, salve a imagem em `public/projects/` com o nome indicado em `image` (ex.: `academia-belfort.jpg`, proporção 16:9) e rode o build. Sem a imagem, o card fica compacto (barra com o domínio + texto).
- **Links do projeto** (repositório, demo): preencha `links: [{ label: "Ver repositório", href: "https://..." }]`. Sem links, o card mostra "Saber mais sobre o projeto", que leva à seção de contato.

As ilustrações dos cards (`components/ProjectVisuals.tsx`) são feitas em CSS/SVG e indicam que não são capturas do sistema. Se tiver screenshots reais, troque o `visual` por uma imagem com `next/image` e um `alt` descritivo.

## Estrutura

```
app/
  layout.tsx            metadata, Open Graph, JSON-LD, fontes
  page.tsx              composição das seções
  opengraph-image.tsx   imagem de compartilhamento gerada no build
  icon.svg, apple-icon.tsx
  sitemap.ts, robots.ts
components/
  Header.tsx            navegação fixa com destaque da seção ativa + menu mobile
  HeroCode.tsx          painel de código animado do hero
  ProjectVisuals.tsx    ilustrações em CSS/SVG dos projetos
  RevealObserver.tsx    animação de entrada ao rolar
  sections/             Hero, About, Projects, Process, Stack, Services, Contact
  ui/                   SectionHeader, ButtonLink, BrandIcons
config/site.ts          dados pessoais e links
data/content.ts         conteúdo da página
```

## Acessibilidade e performance

- Todas as animações respeitam `prefers-reduced-motion`.
- Link "Pular para o conteúdo", foco visível, landmarks e títulos semânticos.
- Página 100% estática (prerender). As únicas dependências extras são `lucide-react` (ícones). Nenhuma biblioteca de animação: tudo é CSS e `IntersectionObserver`.
