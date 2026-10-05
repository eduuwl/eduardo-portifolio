# Noteron — Site institucional

Site da Noteron, startup paraense de soluções digitais. Feito com **Next.js (App Router)**, **TypeScript** e **Tailwind CSS 4**.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm run lint
```

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Nome, slogan, descrição e palavras-chave (SEO) | `config/site.ts` → `siteConfig` |
| Equipe (nomes, cargos, fotos) | `config/site.ts` → `team` |
| Links de contato (WhatsApp, e-mail, GitHub, LinkedIn) | `config/site.ts` → `contactLinks` |
| Seções e itens do menu | `config/site.ts` → `sections` |
| Projetos, processo, tecnologias e serviços | `data/content.ts` |
| Cores e fontes da marca | `app/globals.css` → `@theme` |

### Identidade visual

| Token | Cor | Uso |
| --- | --- | --- |
| `neon` | `#00FF3F` | Verde primário (brilho), destaques e botões |
| `leaf` | `#00CC00` | Verde de realce, rótulos e ícones |
| `circuit` | `#006655` | Trilhas de circuito decorativas |
| `surface` | `#1C1C1C` | Fundo dos cards |
| `muted` | `#BFBFBF` | Texto corrido |
| `fg` | `#FFFFFF` | Títulos |

Os títulos usam **Montserrat**, a fonte do Google mais próxima do wordmark. O texto corrido usa **DM Sans**.
O nome "NOTERON" é desenhado em texto (`components/brand/Wordmark.tsx`), com o "O" virando o símbolo de power.

### Arquivos da marca

- `public/brand/emblem.webp`: emblema com fundo transparente, recortado da arte original
- `app/icon.png` e `app/apple-icon.png`: ícones gerados a partir do emblema
- `app/opengraph-image.jpg`: imagem de compartilhamento (logo completo)

Se receber o logo em vetor (SVG) ou PNG transparente do designer, basta substituir esses arquivos mantendo os nomes.

### Links de contato

Enquanto um link estiver vazio (`""`), o card aparece como **"Link em breve"** e não leva a lugar nenhum.

### URL do site

Defina `NEXT_PUBLIC_SITE_URL` no ambiente de deploy (ex.: `https://noteron.com.br`).
Ela é usada no Open Graph, no `sitemap.xml` e no `robots.txt`.

### Adicionar projetos

- **Projeto em destaque:** adicione um item em `featuredProjects`. Campos como `metrics`, `approach` e `links` são opcionais. Só preencha com informações reais.
- **Sites e outros projetos:** adicione itens em `otherProjects` (`status: "live"` para site no ar, `"prototype"` para protótipo). Para mostrar uma captura no card, salve a imagem em `public/projects/` com o nome indicado em `image` (proporção 16:9).

## Estrutura

```
app/
  layout.tsx            metadata, JSON-LD, fontes
  page.tsx              composição das seções
  icon.png, apple-icon.png, opengraph-image.jpg
  sitemap.ts, robots.ts
components/
  brand/                Wordmark, Emblem, CircuitLines
  layout/               Header, Footer, RevealObserver
  sections/             Hero, About, Team, Services, Projects, Process, Technology, Contact
  projects/             cards de projeto e ilustrações em CSS/SVG
  team/MemberPhoto.tsx
  ui/                   Section, SectionHeader, ButtonLink, HoverArrow, BrandIcons
config/site.ts          dados da marca, links e lista de seções
data/content.ts         conteúdo da página
lib/                    helpers (cn, links externos, JSON-LD, arquivos em /public)
types/css.d.ts          permite CSS custom properties em `style`
```

## Acessibilidade e performance

- Todas as animações respeitam `prefers-reduced-motion`.
- Link "Pular para o conteúdo", foco visível, landmarks e títulos semânticos.
- Página 100% estática (prerender). A única dependência extra é `lucide-react` (ícones).

### Fotos da equipe

Salve as fotos em `public/` com o nome indicado em `team[].photo.src` (ex.: `public/andre.jpg`, proporção 4:5) e rode o build. Sem a foto, o card mostra o emblema da Noteron no lugar.
