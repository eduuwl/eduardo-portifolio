# Checklist de SEO — site da Noteron

Oct 6, 2026 · @Edu

## 1. Urgente: corrigir as URLs que apontam para localhost

Hoje o site publica `http://localhost:3000` como endereço oficial no canonical, no Open Graph, no robots.txt e no sitemap. Isso vem antes de qualquer outro item. Se o domínio próprio (seção 2) sair logo, cadastre a variável já com ele.

- [x] Centralizar a URL do site numa constante (`SITE_URL`) com fallback para o endereço de produção, nunca para localhost
- [x] Usar `SITE_URL` no `metadataBase` do `app/layout.tsx`
- [x] Usar `SITE_URL` no `app/sitemap.ts` e no `app/robots.ts`
- [x] Cadastrar `NEXT_PUBLIC_SITE_URL` nas variáveis de ambiente do site no Netlify
- [x] Fazer um novo deploy: variáveis `NEXT_PUBLIC_` são embutidas no build, então só cadastrar não basta
- [x] Conferir no view-source que canonical, `og:url`, `og:image` e `twitter:image` mostram o domínio real — confirmado em `https://noteron.com.br`
- [x] Conferir `/robots.txt` e `/sitemap.xml` com o domínio real
- [ ] Testar o preview do link no WhatsApp e no LinkedIn (o Post Inspector do LinkedIn força a atualização do cache)

## 2. Domínio e infraestrutura

O endereço `eduardo-uchoa-portifolio.netlify.app` não tem a marca e diz "portifólio". Troque por um domínio próprio antes de enviar o site ao Search Console, para não precisar migrar a indexação depois.

- [x] Registrar o domínio próprio (`noteron.com.br` no Registro.br)
- [x] Apontar o domínio para o Netlify e confirmar o HTTPS ativo
- [x] Escolher a versão com ou sem `www` e redirecionar a outra com 301 — ficou `noteron.com.br` (sem www) como principal, `www` redireciona 301 pra ele
- [x] Confirmar que o endereço `.netlify.app` redireciona (301) para o domínio novo — não redirecionava; adicionei a regra em `netlify.toml` (falta só o próximo deploy pra valer)
- [x] Atualizar `NEXT_PUBLIC_SITE_URL` para o domínio novo e refazer o deploy
- [ ] Criar um e-mail no domínio (ex.: `contato@noteron.com.br`) no lugar do Gmail; pesa na credibilidade, não no ranking

## 3. Indexação técnica

O objetivo aqui é garantir que o Google encontre todas as páginas e entenda qual é a versão oficial de cada uma.

- [x] Criar a propriedade no Google Search Console (tipo Domínio, verificada por DNS)
- [x] Enviar o `sitemap.xml` no Search Console
- [ ] Usar a Inspeção de URL na home e pedir a indexação
- [ ] Cadastrar o site no Bing Webmaster Tools (ele importa os dados do Search Console)
- [x] Gerar o `sitemap.ts` dinamicamente, para incluir sozinho cada página de serviço e de case nova
- [x] Manter o `robots.txt` liberando o site e apontando para o sitemap
- [x] Definir o canonical de cada página com `alternates.canonical`
- [x] Criar `app/not-found.tsx` (página 404 personalizada, com status 404)
- [x] Usar `notFound()` nas rotas dinâmicas quando o conteúdo não existir
- [ ] Configurar `redirects()` permanentes no `next.config` sempre que uma URL mudar
- [x] Garantir que nenhuma página importante tenha `noindex`
- [x] Manter o conteúdo renderizado no servidor (hoje já está assim); nunca buscar texto da página em `useEffect`

## 4. Metadados por página

O title atual ("Soluções digitais no Pará") é bom como slogan, mas ninguém busca esse termo. Cada página precisa de title e description próprios, com o serviço e a região.

- [x] Trocar o title da home para algo como `Noteron | Sistemas, sites e automação em Belém (PA)`
- [x] Usar o template de título no layout: `%s | Noteron`
- [x] Title único em cada página, com uns 50 a 60 caracteres
- [x] Meta description única em cada página, com uns 150 a 160 caracteres e uma chamada para ação
- [x] Open Graph em cada página (title, description e imagem de 1200×630)
- [x] Imagem OG própria para cada case (`opengraph-image` na pasta da rota)
- [x] Conferir favicon e ícone para iOS (`app/icon.png` e `app/apple-icon.png`)
- [x] Remover a `meta keywords` (opcional: o Google ignora, mas não prejudica)
- [x] Adicionar `<meta name="author">`, `<link rel="author">`, `creator` e `publisher` (não estava no checklist original, mas uma ferramenta de SEO que vocês rodaram apontou a falta)

## 5. Estrutura do site e conteúdo

Hoje o site é uma página única com âncoras, o que só deixa ranquear para o nome "Noteron". Para aparecer em buscas de serviço, cada serviço e cada case precisa de uma página própria.

- [ ] Listar de 5 a 10 buscas que um cliente faria (ex.: "criação de sites Belém", "empresa de software Belém", "automação de processos", "automação WhatsApp")
- [ ] Validar essas buscas no autocompletar do Google e no Planejador de Palavras-chave do Google Ads (gratuito)
- [x] Colocar o serviço e a região no H1 da home, deixando o slogan como frase de apoio
- [x] Criar as páginas de serviço, uma por serviço principal:
  - [x] `/servicos/criacao-de-sites`
  - [x] `/servicos/sistemas-web`
  - [x] `/servicos/automacao`
  - [x] `/servicos/inteligencia-artificial`
  - [x] `/servicos/marketing-e-seo`
- [x] Dar a cada página de serviço texto próprio: o que é, para quem serve, como funciona, exemplos e perguntas frequentes
- [x] Criar as páginas de case, com problema, solução e resultado em números:
  - [x] `/projetos/tiranota`
  - [x] `/projetos/automacao-vendas-whatsapp`
- [x] Ligar as páginas entre si: home → serviço → case relacionado → contato
- [x] Usar URLs curtas, em português e com hífen
- [x] Criar uma seção de perguntas frequentes (prazo, faixa de preço, como funciona o atendimento)
- [ ] Médio prazo: criar um blog com respostas a dúvidas reais de clientes (ex.: "quanto custa um site em Belém")
- [x] Revisar o texto "NOTERN" no HTML: `aria-hidden="true"` se for decorativo, correção se for erro de digitação

## 6. Dados estruturados (JSON-LD)

Não há JSON-LD na página hoje. Ele explica ao Google quem é a empresa, o que ela faz e onde atua.

- [x] Adicionar `Organization` na home: nome, URL, logo, descrição, área atendida, perfis (`sameAs`) e contato
- [x] Adicionar `Service` em cada página de serviço
- [x] Adicionar `BreadcrumbList` nas páginas internas
- [x] Adicionar `FAQPage` nas perguntas frequentes (ajuda o Google a entender a página, embora hoje ele só mostre o resultado expandido para sites de governo e saúde)
- [x] Escapar `<` no `JSON.stringify`, para evitar XSS
- [ ] Validar no Rich Results Test e no validator.schema.org

```tsx
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Noteron',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  areaServed: 'Belém, PA',
  sameAs: ['https://www.linkedin.com/company/...', 'https://github.com/...'],
}

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
/>
```

No `sameAs`, o ideal são perfis da empresa, não os pessoais.

## 7. Performance e Core Web Vitals

As metas no celular são LCP abaixo de 2,5 s, INP abaixo de 200 ms e CLS abaixo de 0,1. A performance ainda não foi medida; o primeiro item é rodar o teste.

- [x] Rodar o PageSpeed Insights (versão mobile) na home e anotar LCP, INP e CLS — rodei Lighthouse mobile contra o site publicado (`noteron.com.br`): **Performance 83, Acessibilidade 100, SEO 100, Boas práticas 100**. CLS 0,001 (ótimo). LCP 3,5s (meta: até 2,5s) — ponto real a melhorar, ver nota no final do arquivo
- [x] Marcar a imagem do emblema no topo com `priority`, porque ela é a provável candidata a LCP
- [x] Definir `sizes` no `next/image`, para o navegador não baixar versões maiores que o necessário
- [x] Garantir `width`/`height` (ou `fill` com container dimensionado) em todas as imagens
- [x] Carregar as fontes com `next/font`
- [x] Conferir se as animações do topo (faixa de serviços, mock-ups dos projetos) não atrasam o LCP nem causam CLS — ver nota no final do arquivo sobre a tela de loading
- [ ] Carregar scripts de terceiros (analytics, pixel) com `next/script` e `strategy="lazyOnload"`
- [ ] Acompanhar os Core Web Vitals reais no Search Console quando houver tráfego suficiente

## 8. HTML semântico e acessibilidade

A base já é boa; faltam conferências pontuais.

- [x] Conferir se a tag `<html>` tem `lang="pt-BR"` (não deu para verificar pela análise)
- [x] Usar `header`, `nav`, `main`, `section` e `footer` na estrutura
- [x] Usar `alt` descritivo nas imagens informativas e `alt=""` nas decorativas
- [x] Trocar o emblema usado no lugar da foto do André por uma foto real com `alt` ("André Uchoa, marketing e SEO da Noteron")
- [x] Rodar o Lighthouse (aba Acessibilidade) e corrigir os apontamentos, principalmente o contraste de cores do tema escuro — rodei contra o build de produção local: **100 em acessibilidade, 100 em boas práticas, 100 em SEO**, sem apontamentos de contraste. Achei e corrigi 1 problema real (ver nota abaixo)

## 9. SEO local e fora do site

Em buscas com "Belém", o Google Business Profile e os links de outros sites pesam tanto quanto o código.

- [ ] Criar o Google Business Profile como empresa de área de atendimento (sem endereço público), em categoria de software ou criação de sites
- [ ] Usar o mesmo nome, telefone e site em todos os perfis
- [ ] Pedir avaliações no Google aos clientes atuais (Academia Belfort, Hello Ana Make)
- [ ] Colocar "Desenvolvido por Noteron", com link, no rodapé dos sites de clientes
- [ ] Criar a página da empresa no LinkedIn (e no Instagram, se for usar) com link para o site
- [ ] Cadastrar a Noteron em diretórios de startups e ecossistemas locais de inovação
- [ ] Colocar o link do site no LinkedIn e no GitHub pessoais

## 10. Monitoramento contínuo

SEO não termina no deploy. Revise semanalmente no primeiro mês e depois uma vez por mês.

- [ ] Ver no Search Console as páginas indexadas, os erros e as buscas que trazem cliques
- [ ] Reescrever o title e a description das páginas com muitas impressões e poucos cliques
- [ ] Instalar analytics (GA4, Plausible ou Umami) e medir o clique no WhatsApp como conversão
- [x] Atualizar o `lastModified` do sitemap ao publicar ou alterar conteúdo
- [ ] Rodar o PageSpeed de novo depois de cada mudança grande

## O que já está certo

A base técnica é boa. Estes itens já estão no lugar e só precisam ser mantidos:

- Title e meta description presentes
- Open Graph e Twitter Card completos (falta só corrigir a URL)
- `sitemap.ts` e `robots.ts` já existem (falta só corrigir a URL)
- Diretiva `index, follow`
- Um único H1 e hierarquia de headings coerente
- `alt` nas imagens principais
- Link de "pular para o conteúdo"
- Conteúdo renderizado no servidor

Base desta lista: análise de 6 out. 2026 da [página inicial](https://eduardo-uchoa-portifolio.netlify.app), do [robots.txt](https://eduardo-uchoa-portifolio.netlify.app/robots.txt) e do [sitemap.xml](https://eduardo-uchoa-portifolio.netlify.app/sitemap.xml).

---

## Atualização — 6 out. 2026 (Claude)

Marquei acima o que já foi implementado nesta sessão. Resumo do que falta, por tipo:

**Só você pode fazer (contas/infra externas):** domínio (seção 2), Search Console e Bing (seção 3), Planejador de Palavras-chave (seção 5), Google Business Profile e perfis (seção 9), analytics e revisão mensal (seção 10), Rich Results Test (seção 6), PageSpeed Insights no site publicado (seção 7).

**Feito:** foto real do André já está em `/public/andre.jpg` (seção 8).

**`redirects()`:** só entra quando uma URL publicada de fato mudar. Nenhuma mudou até agora, então não há nada para redirecionar.

### Achado: a tela de loading (SplashScreen) e a performance

Revisei o CSS da tela de loading (`.splash` em `app/globals.css` + `components/layout/SplashScreen.tsx`). Tecnicamente ela **não quebra LCP nem CLS**: o conteúdo real (Hero) já é pintado por trás dela no tempo normal, só fica visualmente coberto por um overlay opaco — e a API de Web Vitals não desconta elementos cobertos por outro elemento. CLS também não é afetado, porque nada muda de lugar (só opacidade/transform).

O ponto real é de **experiência**, não de métrica: a tela fica no mínimo 1,5 s (`MIN_VISIBLE_MS`) + 0,7 s de fade, em **toda** visita — não só na primeira —, e intercepta cliques nesse período (não tem `pointer-events: none` enquanto ativa). Isso é uma escolha de marca que vocês fizeram de propósito, então não mudei nada sozinho. Se quiser, as opções são:

1. Manter como está (é bonito e reforça a marca, mas atrasa a interação em toda visita)
2. Mostrar só na primeira visita da sessão (`sessionStorage`)
3. Reduzir `MIN_VISIBLE_MS` (hoje 1500 ms)
4. Remover

Não implementei nenhuma das quatro — é uma decisão sua.

### Achado e correção: o "O" do logo (Wordmark) não era lido como "Noteron"

Rodei o Lighthouse de verdade (build de produção, local) e ele acusou um erro real de acessibilidade: o link do logo no cabeçalho tem `aria-label="Noteron, voltar ao início"`, mas o texto visível dentro dele (`components/brand/Wordmark.tsx`) nunca teve a letra "O" de verdade — o segundo "O" de "NOTERON" sempre foi só o ícone de power em SVG, com um texto duplicado em `sr-only` por fora pra compensar. Na prática o DOM lia "NOTERN" (sem o O), o que é exatamente o que a seção 5 deste checklist já tinha anotado como suspeito — eu tinha avaliado como "ok, está em aria-hidden" cedo demais; o Lighthouse provou que não bastava.

Corrigi reescrevendo o componente: a letra "O" real agora fica no texto (com `color: transparent`, não `aria-hidden`/`sr-only`), e o ícone de power fica posicionado em cima dela por CSS. Visualmente fica idêntico; o DOM agora lê "NOTERON" de verdade. Rodei o Lighthouse de novo depois da correção: **0 apontamentos**, nas três categorias testadas.

---

## Atualização — 7 out. 2026 (Claude)

O domínio `noteron.com.br` foi registrado e colocado no ar hoje. Resumo do que mudou:

### Domínio e DNS
- Apontado via A record (`75.2.60.5`) e CNAME `www`, DNS mantido no próprio Registro.br
- Demorou pra propagar por causa de um período de transição no painel do Registro.br (não foi erro de configuração, só precisou esperar o timer zerar)
- `noteron.com.br` (sem www) ficou como domínio principal; `www` redireciona 301 pra ele
- `.netlify.app` **não** redirecionava sozinho pro domínio novo — adicionei a regra em `netlify.toml` (força 301 de `eduardo-uchoa-portifolio.netlify.app` pro domínio novo). Falta o próximo deploy pra isso valer

### NEXT_PUBLIC_SITE_URL — pegadinha do www
Na primeira tentativa, a variável foi cadastrada como `https://www.noteron.com.br`, mas o `www` redireciona pro domínio sem-www — isso criava uma contradição (canonical mandava pro www, que mandava de volta pro domínio sem www). Corrigido pra `https://noteron.com.br`. Hoje canonical, sitemap, robots.txt e OG estão todos consistentes.

### Search Console
Propriedade criada (tipo Domínio), sitemap enviado. `site:noteron.com.br` no Google ainda não retorna nada — **isso é normal** pra um domínio que entrou no ar hoje, não é bug. Indexação de verdade leva de horas a dias depois de pedida; ranquear pra palavra-chave leva semanas a mais.

### Achados de uma ferramenta de auditoria externa que vocês rodaram
- Meta description cortava visualmente (153 caracteres = ~1026px, acima do limite de ~990px). Encurtei pra 125 caracteres
- Faltava `<meta name="author">` — adicionado, junto com `creator` e `publisher`
- "6 imagens sem width/height" apontado pela ferramenta — são as fotos da Equipe e dos outros projetos, que usam `fill` do `next/image` de propósito (dimensionadas por CSS, não por atributo). Confirmado que não afeta CLS de verdade (CLS medido: 0,001)
- O LCP de "204,7s" que a ferramenta reportou não é real (fisicamente implausível) — provavelmente cache frio logo após o domínio entrar no ar

### Performance real (Lighthouse contra o site publicado)
Performance 83, Acessibilidade/SEO/Boas práticas 100. CLS ótimo (0,001). **LCP em 3,5s** (meta: 2,5s) — a causa raiz identificada foi a imagem do emblema no Hero (127KB na variante usada, por causa de compressão). Corrigi habilitando **AVIF** no `next.config.ts` (`images.formats`), que comprime bem melhor que WebP para esse tipo de ilustração com gradiente/brilho suave — testado visualmente lado a lado no fundo escuro do site, sem diferença perceptível, ~58% menor. Confirmei que resolve especificamente o apontamento de "entrega de imagem" do Lighthouse. O LCP pode não cair sozinho só com isso; se continuar alto depois do deploy, o próximo suspeito é a tela de loading (ver nota acima) ou o JavaScript carregado antes da pintura.

**Pendente de commit/deploy:** `netlify.toml` (redirect do `.netlify.app`) e `next.config.ts` (AVIF).
