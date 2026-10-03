/**
 * Conteúdo da página. Para adicionar um projeto, serviço ou tecnologia,
 * basta editar os arrays abaixo — os componentes se ajustam sozinhos.
 */

/* ------------------------------------------------------------------
   Projetos
------------------------------------------------------------------- */

export type ProjectLink = {
  label: string;
  href: string;
};

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
  visual?: "tiranota" | "sales-flow";
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
  number: string;
  title: string;
  /** Nome curto usado na animação do hero */
  short: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Entendo o problema",
    short: "entender",
    description:
      "Converso com quem vive o processo no dia a dia. Antes de escrever código, preciso saber onde está o gargalo e o que significa, na prática, resolver.",
  },
  {
    number: "02",
    title: "Planejo a solução",
    short: "planejar",
    description:
      "Defino escopo, dados e integrações, e escolho o caminho mais simples que resolve de verdade, sem complexidade que não se paga.",
  },
  {
    number: "03",
    title: "Desenvolvo",
    short: "desenvolver",
    description:
      "Construo em entregas curtas, para que exista algo funcionando e testável cedo, em vez de uma grande revelação no final.",
  },
  {
    number: "04",
    title: "Testo e refino",
    short: "refinar",
    description:
      "Coloco nas mãos de quem vai usar, ouço o feedback e ajusto. Software bom é o que se encaixa na rotina real das pessoas.",
  },
  {
    number: "05",
    title: "Entrego",
    short: "entregar",
    description:
      "A solução vai para o uso real, com a equipe sabendo operar e entendendo o que foi construído.",
  },
];

/* ------------------------------------------------------------------
   Tecnologias
------------------------------------------------------------------- */

export type StackGroup = {
  name: string;
  summary: string;
  items: string[];
};

export const stackGroups: StackGroup[] = [
  {
    name: "Frontend",
    summary: "Interfaces rápidas e responsivas",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML & CSS"],
  },
  {
    name: "Backend",
    summary: "APIs e regras de negócio",
    items: ["Node.js", "NestJS", "APIs REST", "Prisma"],
  },
  {
    name: "Dados",
    summary: "Modelagem, consulta e análise",
    items: ["Python", "PostgreSQL", "Banco de dados", "Análise de dados", "Excel"],
  },
  {
    name: "Automação",
    summary: "Processos que rodam sozinhos",
    items: ["Python", "n8n", "Automação de navegador", "Integrações"],
  },
  {
    name: "IA",
    summary: "Modelos aplicados a problemas reais",
    items: ["Inteligência Artificial", "Aprendizado de Máquina", "IA em atendimento"],
  },
];

/* ------------------------------------------------------------------
   Serviços
------------------------------------------------------------------- */

export type Service = {
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    title: "Sites e landing pages",
    description: "Páginas rápidas, responsivas e preparadas para busca, pensadas para apresentar e converter.",
  },
  {
    title: "Sistemas web",
    description: "Aplicações sob medida para organizar operações, cadastros e fluxos internos.",
  },
  {
    title: "APIs",
    description: "Backends e APIs REST bem estruturados, prontos para conversar com outros sistemas.",
  },
  {
    title: "Automações",
    description: "Tarefas repetitivas que viram rotinas automáticas, com Python, navegador ou n8n.",
  },
  {
    title: "Integrações entre sistemas",
    description: "Ferramentas que não conversam passam a trocar dados entre si, sem copiar e colar.",
  },
  {
    title: "Dashboards",
    description: "Dados espalhados organizados em painéis claros para acompanhar e decidir.",
  },
  {
    title: "Soluções com IA",
    description: "IA aplicada onde faz sentido: atendimento, classificação e apoio a processos.",
  },
  {
    title: "Sistemas personalizados",
    description: "Quando nenhuma ferramenta pronta serve, um sistema desenhado para o seu processo.",
  },
];
