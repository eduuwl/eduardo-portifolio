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
  },
  {
    slug: "automacao-vendas-ia",
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
};

export const services: Service[] = [
  {
    title: "Sites e landing pages",
    description: "Rápidos, bonitos no celular e prontos para aparecer no Google.",
    icon: Globe,
  },
  {
    title: "Marketing e SEO",
    description: "Estratégia, conteúdo e otimização para sua empresa ser encontrada no Google e atrair clientes.",
    icon: SearchCheck,
  },
  {
    title: "Sistemas web",
    description: "Cadastros, controles e fluxos internos em um sistema feito para a sua operação.",
    icon: LayoutDashboard,
  },
  {
    title: "APIs",
    description: "Backends organizados que deixam seus sistemas conversarem com qualquer outro.",
    icon: Webhook,
  },
  {
    title: "Automações",
    description: "Tarefas repetitivas viram rotinas que rodam sozinhas, com Python, navegador ou n8n.",
    icon: Workflow,
  },
  {
    title: "Integrações",
    description: "Ferramentas que hoje não se falam passam a trocar dados, sem copiar e colar.",
    icon: Cable,
  },
  {
    title: "Dashboards",
    description: "Os números da empresa reunidos em painéis claros para acompanhar e decidir.",
    icon: ChartColumn,
  },
  {
    title: "Inteligência artificial",
    description: "IA aplicada onde dá retorno: atendimento, classificação e apoio a processos.",
    icon: BrainCircuit,
  },
  {
    title: "Projetos sob medida",
    description: "Quando nenhuma ferramenta pronta serve, desenhamos uma do zero para você.",
    icon: Puzzle,
  },
];
