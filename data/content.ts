import {
  BrainCircuit,
  Cable,
  ChartColumn,
  Globe,
  LayoutDashboard,
  Puzzle,
  SearchCheck,
  Webhook,
  Workflow,
  type LucideIcon,
} from "lucide-react";

/**
 * Conteúdo da página. Para adicionar um projeto, serviço ou tecnologia,
 * basta editar os arrays abaixo. Os componentes se ajustam sozinhos.
 */

/* ------------------------------------------------------------------
   Projetos
------------------------------------------------------------------- */

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectVisual = "tiranota" | "sales-flow";

export type ProjectMetric = {
  value: string;
  label: string;
};

export type Project = {
  slug: string;
  name: string;
  /** Linha curta abaixo do nome */
  kicker: string;
  description: string;
  problem: string;
  solution: string;
  /** Como o projeto foi construído/validado (opcional) */
  approach?: string[];
  tech: string[];
  /** Só preencha com resultados reais */
  metrics?: ProjectMetric[];
  /** Frase que acompanha as métricas */
  resultNote?: string;
  /** Repositório, demo, estudo de caso… Deixe vazio se não houver. */
  links?: ProjectLink[];
  /** Ilustração em CSS usada no card (não é captura de tela do sistema) */
  visual?: ProjectVisual;
  /** <title> da página /projetos/[slug] (50–60 caracteres). Sem isso, usa `name`. */
  metaTitle?: string;
  /** Meta description da página /projetos/[slug] (150–160 caracteres, com chamada para ação) */
  metaDescription?: string;
  /** Slugs de `servicePages` relacionados, exibidos como link na página do case */
  relatedServiceSlugs?: string[];
};

export const featuredProjects: Project[] = [
  {
    slug: "tiranota",
    name: "TiraNota",
    kicker: "Automação de emissão de notas fiscais de serviço",
    description:
      "Sistema que automatiza a emissão de notas fiscais de serviço a partir de dados em planilha, tirando da equipe um trabalho repetitivo que somava centenas de notas.",
    problem:
      "Funcionários emitiam centenas de notas fiscais manualmente, uma de cada vez. Um processo demorado, cansativo e sujeito a erros.",
    solution:
      "Uma automação em Python que processa os dados das planilhas Excel e conduz o navegador pela emissão de cada nota, no lugar do preenchimento manual.",
    approach: [
      "Conversa com quem emitia as notas",
      "Primeira versão em uso",
      "Feedback dos usuários",
      "Novas versões e refinamento",
      "Solução final",
    ],
    tech: ["Python", "Automação de navegador", "Excel", "Processamento de dados", "Automação de processos"],
    metrics: [
      { value: "~100", label: "notas geradas" },
      { value: "~40 min", label: "de execução" },
    ],
    resultNote: "Automação capaz de gerar aproximadamente 100 notas em cerca de 40 minutos.",
    links: [],
    visual: "tiranota",
    metaTitle: "TiraNota: automação de notas fiscais com Python",
    metaDescription:
      "Veja como automatizamos a emissão de notas fiscais de serviço com Python, reduzindo um trabalho manual que levava horas da equipe da cliente.",
    relatedServiceSlugs: ["automacao"],
  },
  {
    slug: "automacao-vendas-whatsapp",
    name: "Automação de vendas com IA",
    kicker: "Atendimento e vendas pelo WhatsApp",
    description:
      "Fluxo de automação para atendimento e vendas pelo WhatsApp, integrado a um catálogo de produtos e com IA apoiando a conversa comercial.",
    problem:
      "Vender pelo WhatsApp exige alguém sempre disponível para responder dúvidas, consultar produtos e conduzir a conversa até a venda.",
    solution:
      "Fluxos no n8n conectam o WhatsApp ao catálogo de produtos via APIs, automatizam etapas do atendimento e usam IA para auxiliar no processo comercial.",
    tech: ["n8n", "APIs", "WhatsApp", "IA", "Automação", "Integrações"],
    links: [],
    visual: "sales-flow",
    metaTitle: "Automação de vendas pelo WhatsApp com IA",
    metaDescription:
      "Veja como conectamos WhatsApp, catálogo de produtos e inteligência artificial em um fluxo de atendimento e vendas feito no n8n. Um case da Noteron.",
    relatedServiceSlugs: ["automacao", "inteligencia-artificial"],
  },
];

export type OtherProject = {
  name: string;
  /** Tipo de projeto, ex.: "E-commerce", "Site institucional" */
  kind: string;
  description: string;
  tech: string[];
  url: string;
  /** "live" = site de cliente no ar · "prototype" = protótipo/conceito */
  status: "live" | "prototype";
  /**
   * Captura de tela opcional, em /public. Ex.: "/projects/academia-belfort.jpg"
   * Se o arquivo não existir, o card mostra só a moldura com o domínio.
   */
  image?: string;
};

/**
 * Sites e projetos menores. Enquanto estiver vazio, a seção mostra
 * um estado "em breve" no lugar da lista.
 */
export const otherProjects: OtherProject[] = [
  {
    name: "Academia Belfort",
    kind: "Site institucional",
    description:
      "Site da academia, em Belém, com planos, grade de aulas, as duas unidades, perguntas frequentes, formulário de pré-matrícula e contato pelo WhatsApp.",
    tech: ["Next.js", "React"],
    url: "https://academiabelfort.com.br",
    status: "live",
    image: "/projects/academia-belfort.jpg",
  },
  {
    name: "Hello Ana Make",
    kind: "E-commerce",
    description:
      "Loja virtual de maquiagem e skincare, com catálogo por categorias, carrinho, favoritos, área do cliente e programa de recompensas.",
    tech: ["Next.js", "React"],
    url: "https://helloanamake.com.br",
    status: "live",
    image: "/projects/hello-ana-make.jpg",
  },
  {
    name: "Andrade & Martins Advocacia",
    kind: "Site para escritório de advocacia",
    description:
      "Site conceito para escritório de advocacia, com áreas de atuação, depoimentos e formulário para agendar consulta, além de contato pelo WhatsApp.",
    tech: ["React", "Tailwind CSS"],
    url: "https://andrade-e-martins-advocacia-frontend.netlify.app",
    status: "prototype",
    image: "/projects/andrade-martins.jpg",
  },
  {
    name: "Barbearia M&G",
    kind: "Landing page",
    description:
      "Landing page para barbearia no Telégrafo, em Belém, com serviços, horários, localização e agendamento direto pelo WhatsApp.",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "https://mg-barbearia-prototype.netlify.app",
    status: "prototype",
    image: "/projects/mg-barbearia.jpg",
  },
];

/* ------------------------------------------------------------------
   Processo
------------------------------------------------------------------- */

export type ProcessStep = {
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    title: "Entender",
    description:
      "Conversamos com quem vive o processo no dia a dia para descobrir onde o tempo está sendo perdido.",
  },
  {
    title: "Planejar",
    description: "Definimos escopo, dados e integrações e escolhemos o caminho mais simples que resolve.",
  },
  {
    title: "Desenvolver",
    description: "Entregamos em partes curtas, então desde cedo você já tem algo funcionando para testar.",
  },
  {
    title: "Refinar",
    description: "Colocamos nas mãos de quem vai usar, ouvimos o retorno e ajustamos o que for preciso.",
  },
  {
    title: "Entregar",
    description: "A solução entra em uso real, com a equipe sabendo operar e com suporte da Noteron.",
  },
];

/* ------------------------------------------------------------------
   Tecnologia
------------------------------------------------------------------- */

export type StackGroup = {
  name: string;
  items: string[];
};

export const stackGroups: StackGroup[] = [
  { name: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { name: "Backend", items: ["Node.js", "NestJS", "APIs REST", "Prisma"] },
  { name: "Dados", items: ["Python", "PostgreSQL", "Análise de dados", "Excel"] },
  { name: "Automação", items: ["n8n", "Automação de navegador", "Integrações", "WhatsApp"] },
  { name: "IA", items: ["Modelos de linguagem", "Aprendizado de máquina", "IA no atendimento"] },
];

/* ------------------------------------------------------------------
   Serviços
------------------------------------------------------------------- */

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  /** Página de serviço relacionada (ver `servicePages`). Omitido quando não há página própria. */
  href?: string;
};

export const services: Service[] = [
  {
    title: "Sites e landing pages",
    description: "Rápidos, bonitos no celular e prontos para aparecer no Google.",
    icon: Globe,
    href: "/servicos/criacao-de-sites",
  },
  {
    title: "Marketing e SEO",
    description: "Estratégia, conteúdo e otimização para sua empresa ser encontrada no Google e atrair clientes.",
    icon: SearchCheck,
    href: "/servicos/marketing-e-seo",
  },
  {
    title: "Sistemas web",
    description: "Cadastros, controles e fluxos internos em um sistema feito para a sua operação.",
    icon: LayoutDashboard,
    href: "/servicos/sistemas-web",
  },
  {
    title: "APIs",
    description: "Backends organizados que deixam seus sistemas conversarem com qualquer outro.",
    icon: Webhook,
    href: "/servicos/sistemas-web",
  },
  {
    title: "Automações",
    description: "Tarefas repetitivas viram rotinas que rodam sozinhas, com Python, navegador ou n8n.",
    icon: Workflow,
    href: "/servicos/automacao",
  },
  {
    title: "Integrações",
    description: "Ferramentas que hoje não se falam passam a trocar dados, sem copiar e colar.",
    icon: Cable,
    href: "/servicos/automacao",
  },
  {
    title: "Dashboards",
    description: "Os números da empresa reunidos em painéis claros para acompanhar e decidir.",
    icon: ChartColumn,
    href: "/servicos/sistemas-web",
  },
  {
    title: "Inteligência artificial",
    description: "IA aplicada onde dá retorno: atendimento, classificação e apoio a processos.",
    icon: BrainCircuit,
    href: "/servicos/inteligencia-artificial",
  },
  {
    title: "Projetos sob medida",
    description: "Quando nenhuma ferramenta pronta serve, desenhamos uma do zero para você.",
    icon: Puzzle,
  },
];

/* ------------------------------------------------------------------
   Páginas de serviço (/servicos/[slug])
------------------------------------------------------------------- */

export type FaqItem = {
  question: string;
  answer: string;
};

export type ServicePage = {
  slug: string;
  name: string;
  /** <title> da página (50–60 caracteres) */
  metaTitle: string;
  /** Meta description da página (150–160 caracteres, com chamada para ação) */
  metaDescription: string;
  /** Frase de apoio abaixo do H1 */
  lead: string;
  summary: string;
  /** O que está incluso, em bullets */
  includes: string[];
  /** Para quem é esse serviço */
  forWho: string;
  /** Nomes em `otherProjects` usados como exemplo */
  exampleProjectNames?: string[];
  /** Slugs em `featuredProjects` usados como exemplo (link para /projetos/[slug]) */
  exampleCaseSlugs?: string[];
  faq: FaqItem[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "criacao-de-sites",
    name: "Criação de sites",
    metaTitle: "Criação de sites e landing pages em Belém (PA)",
    metaDescription:
      "Criamos sites institucionais e landing pages rápidos, responsivos e prontos para aparecer no Google, feitos para empresas do Pará. Peça um orçamento.",
    lead: "Sites rápidos, bonitos no celular e prontos para aparecer no Google.",
    summary:
      "Desenvolvemos sites institucionais e landing pages para empresas e profissionais do Pará. O foco é sempre o mesmo: carregar rápido, funcionar bem no celular e ajudar a conquistar clientes pela internet.",
    includes: [
      "Design pensado para o seu público e para conversão",
      "Site responsivo, rápido e testado no celular",
      "Otimização básica de SEO e de imagem para redes sociais",
      "Formulário de contato e botão de WhatsApp",
      "Deploy, domínio e certificado de segurança (HTTPS) configurados",
    ],
    forWho: "Empresas que ainda não têm site, ou que têm um site antigo, lento ou difícil de atualizar.",
    exampleProjectNames: ["Academia Belfort", "Hello Ana Make"],
    faq: [
      {
        question: "Quanto tempo leva para o site ficar pronto?",
        answer:
          "Depende do tamanho do site. Uma landing page costuma ser mais rápida que um site institucional completo. Definimos um prazo logo na primeira conversa, depois de entender o que você precisa.",
      },
      {
        question: "Quanto custa um site?",
        answer:
          "O valor varia de acordo com o número de páginas, as funcionalidades e o design. Conversamos primeiro sobre o seu projeto e passamos um orçamento sem compromisso.",
      },
      {
        question: "Como funciona o atendimento depois da entrega?",
        answer:
          "Ficamos disponíveis por WhatsApp e e-mail para ajustes, dúvidas e manutenção depois que o site entra no ar.",
      },
    ],
  },
  {
    slug: "sistemas-web",
    name: "Sistemas web",
    metaTitle: "Sistemas web, APIs e dashboards em Belém (PA)",
    metaDescription:
      "Desenvolvemos sistemas web, APIs e dashboards sob medida para organizar cadastros, controles e fluxos internos da sua empresa. Fale com a Noteron.",
    lead: "Cadastros, controles e fluxos internos em um sistema feito para a sua operação.",
    summary:
      "Criamos sistemas web, APIs e dashboards sob medida, para organizar processos que hoje ainda dependem de planilhas, papel ou retrabalho manual.",
    includes: [
      "Sistema web sob medida, acessível de qualquer lugar",
      "APIs para seus sistemas conversarem entre si",
      "Dashboards com os números da empresa reunidos",
      "Área de login e controle de acesso quando necessário",
      "Banco de dados estruturado para crescer com o negócio",
    ],
    forWho:
      "Empresas que precisam organizar cadastros, controles ou rotinas internas que hoje são manuais ou estão espalhados em planilhas.",
    exampleProjectNames: ["Hello Ana Make"],
    faq: [
      {
        question: "O sistema fica pronto rápido?",
        answer:
          "Sistemas web variam bastante de escopo, por isso entregamos em partes curtas: desde o início você já tem algo funcionando para testar, em vez de esperar tudo pronto de uma vez.",
      },
      {
        question: "Quanto custa um sistema sob medida?",
        answer: "Depende das telas, regras e integrações necessárias. Mapeamos o processo com você antes de fechar um valor.",
      },
      {
        question: "Minha equipe vai saber usar o sistema?",
        answer:
          "Sim. Antes da entrega final, explicamos o funcionamento para quem vai usar no dia a dia e seguimos dando suporte depois.",
      },
    ],
  },
  {
    slug: "automacao",
    name: "Automação de processos",
    metaTitle: "Automação de processos e integrações",
    metaDescription:
      "Automatizamos tarefas repetitivas com Python, automação de navegador, n8n e integrações entre sistemas, para a sua equipe focar no que importa.",
    lead: "Tarefas repetitivas virando rotinas que rodam sozinhas.",
    summary:
      "Automatizamos processos manuais e repetitivos com Python, automação de navegador, n8n e integrações entre sistemas, para a sua equipe parar de perder tempo com trabalho que o computador pode fazer.",
    includes: [
      "Mapeamento do processo atual, passo a passo",
      "Automação com Python ou automação de navegador",
      "Fluxos de integração no n8n entre ferramentas que hoje não se falam",
      "Testes com dados reais antes de entrar em uso",
      "Acompanhamento depois que a automação entra em uso",
    ],
    forWho: "Empresas com alguma tarefa manual, repetitiva e demorada, feita sempre do mesmo jeito.",
    exampleCaseSlugs: ["tiranota", "automacao-vendas-whatsapp"],
    faq: [
      {
        question: "Que tipo de tarefa pode ser automatizada?",
        answer:
          "Qualquer rotina repetitiva que siga um padrão: emissão de documentos, preenchimento de planilhas, cadastro de dados, respostas padronizadas e tarefas parecidas.",
      },
      {
        question: "Quanto tempo leva para automatizar um processo?",
        answer:
          "Depende da complexidade do processo e de quantos sistemas estão envolvidos. No case do TiraNota, por exemplo, a automação chegou a gerar cerca de 100 notas em 40 minutos.",
      },
      {
        question: "Preciso trocar de sistema para automatizar?",
        answer: "Na maioria das vezes não. A automação é construída em torno das ferramentas que você já usa.",
      },
    ],
  },
  {
    slug: "inteligencia-artificial",
    name: "Inteligência artificial",
    metaTitle: "Inteligência artificial para empresas do Pará",
    metaDescription:
      "Aplicamos inteligência artificial em atendimento, classificação e apoio a processos de empresas do Pará. Fale com a Noteron e veja onde a IA se encaixa.",
    lead: "IA aplicada onde dá retorno: atendimento, classificação e apoio a processos.",
    summary:
      "Usamos inteligência artificial para apoiar etapas específicas do seu negócio, como conversas de atendimento e vendas, em vez de prometer uma IA que resolve tudo de uma vez.",
    includes: [
      "Apoio de IA em conversas de atendimento e vendas",
      "Classificação automática de mensagens, documentos ou dados",
      "Integração da IA com WhatsApp e outros canais",
      "Ajuste fino para a linguagem e o processo do seu negócio",
      "Acompanhamento dos resultados depois da entrada em uso",
    ],
    forWho:
      "Empresas que já têm um volume de atendimento ou de dados onde a IA realmente ajuda, sem depender dela para decisões críticas sozinha.",
    exampleCaseSlugs: ["automacao-vendas-whatsapp"],
    faq: [
      {
        question: "A IA substitui o atendimento humano?",
        answer:
          "Não necessariamente. Em geral, ela apoia etapas do atendimento, como consultar o catálogo e conduzir o início da conversa, com uma pessoa assumindo quando necessário.",
      },
      {
        question: "Quais dados a IA usa?",
        answer:
          "Depende do projeto: pode ser o catálogo de produtos, o histórico de conversas ou outra base de dados sua. Definimos isso junto com você antes de começar.",
      },
      {
        question: "Como medir se a IA está ajudando?",
        answer: "Acompanhamos indicadores combinados com você, como tempo de resposta e conversas que avançam até a venda.",
      },
    ],
  },
  {
    slug: "marketing-e-seo",
    name: "Marketing e SEO",
    metaTitle: "Marketing digital e SEO para empresas do Pará",
    metaDescription:
      "Estratégia, conteúdo e otimização para sua empresa aparecer no Google e atrair clientes de verdade na internet. Converse com a Noteron sobre o seu caso.",
    lead: "Estratégia, conteúdo e otimização para sua empresa aparecer no Google.",
    summary:
      "Cuidamos do marketing e do SEO para que os sites que entregamos, e os que você já tem, sejam encontrados no Google e tragam clientes de verdade, não só visitas.",
    includes: [
      "Pesquisa das buscas que o seu cliente realmente faz",
      "Otimização de SEO técnico (títulos, descrições, estrutura)",
      "Conteúdo pensado para responder dúvidas reais do seu cliente",
      "Acompanhamento de posição no Google e de cliques",
      "Ajustes contínuos conforme os resultados chegam",
    ],
    forWho: "Empresas que já têm um site, mas não aparecem no Google nas buscas que importam para o negócio.",
    faq: [
      {
        question: "Em quanto tempo o site aparece no Google?",
        answer:
          "SEO é um trabalho contínuo, não instantâneo: os primeiros efeitos costumam aparecer em semanas, e os resultados mais fortes vêm com meses de trabalho constante.",
      },
      {
        question: "Marketing e SEO têm um valor fixo?",
        answer: "Não, varia com o tamanho do site e a concorrência das buscas desejadas. Avaliamos o seu caso antes de propor um valor.",
      },
      {
        question: "Preciso ter site para contratar SEO?",
        answer: "É o ideal, mas se você ainda não tem, podemos cuidar das duas coisas juntas: a criação do site já pensada para SEO.",
      },
    ],
  },
];
