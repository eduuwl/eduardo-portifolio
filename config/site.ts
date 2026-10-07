/**
 * Configuração central do site.
 * Dados da marca, links e textos de SEO ficam aqui para serem editados em um só lugar.
 */

/**
 * Endereço atual em produção (Netlify). Serve de rede de segurança: nunca cai
 * para localhost fora do ambiente de desenvolvimento, mesmo que NEXT_PUBLIC_SITE_URL
 * não tenha sido cadastrada no deploy. Troque para o domínio próprio assim que ele existir.
 */
const PRODUCTION_FALLBACK_URL = "https://eduardo-uchoa-portifolio.netlify.app";

export const siteConfig = {
  name: "Noteron",
  tagline: "Soluções digitais",
  slogan: "Conectando a Amazônia ao futuro digital",
  /**
   * URL pública do site (usada em metadataBase, Open Graph, sitemap e robots).
   * Defina NEXT_PUBLIC_SITE_URL no ambiente de deploy, ex.: https://noteron.com.br
   * (lembre-se: variáveis NEXT_PUBLIC_ só pegam em um novo deploy).
   */
  url: (
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.NODE_ENV === "development" ? "http://localhost:3000" : PRODUCTION_FALLBACK_URL)
  ).replace(/\/$/, ""),
  title: "Noteron | Sistemas, sites e automação em Belém (PA)",
  description:
    "A Noteron desenvolve sites, sistemas web e automações com IA para empresas do Pará. Peça um orçamento e converse com a gente.",
  locale: "pt_BR",
  region: "Pará",
  keywords: [
    "Noteron",
    "startup Pará",
    "desenvolvimento de software Belém",
    "automação de processos",
    "sistemas web",
    "APIs",
    "inteligência artificial",
    "marketing digital",
    "SEO",
    "n8n",
    "Next.js",
    "Python",
  ],
  /** Áreas de atuação (dados estruturados para buscadores) */
  knowsAbout: [
    "Desenvolvimento web",
    "Automação de processos",
    "Inteligência Artificial",
    "Análise de dados",
    "Integrações entre sistemas",
    "Marketing digital e SEO",
  ],
} as const;

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  /**
   * Foto em /public. Se o arquivo não existir, aparece o emblema da marca no lugar.
   * Proporção recomendada: 4:5.
   */
  photo: { src: string; alt: string };
  /** Perfil pessoal (opcional), exibido no card */
  linkedin?: string;
  /** Formação, usada só nos dados estruturados */
  alumniOf?: string;
};

/** Equipe exibida na seção "Equipe". O primeiro integrante é o fundador. */
export const team: TeamMember[] = [
  {
    name: "Eduardo Uchoa",
    role: "Fundador · Desenvolvimento",
    bio: "Formado em Análise e Desenvolvimento de Sistemas e pós-graduado em Inteligência Artificial e Aprendizado de Máquina pela UNAMA. Lidera a criação dos sistemas, automações e soluções com IA.",
    photo: { src: "/eduardo.jpg", alt: "Eduardo Uchoa, fundador da Noteron" },
    linkedin: "https://www.linkedin.com/in/eduuwl",
    alumniOf: "UNAMA",
  },
  {
    name: "André Uchoa",
    role: "Marketing e SEO",
    bio: "Cuida do marketing e do SEO. Trabalha para que os sites que entregamos sejam encontrados no Google e tragam clientes de verdade para quem contrata a Noteron.",
    photo: { src: "/andre.jpg", alt: "André Uchoa, responsável por marketing e SEO na Noteron" },
  },
];

/**
 * Links de contato. Deixe a string vazia ("") enquanto não tiver o link:
 * o card aparece como "em breve" e não leva a lugar nenhum.
 */
export const contactLinks = {
  /** Apenas dígitos, com DDI e DDD. Ex.: "5591999999999" */
  whatsappNumber: "5591989599238",
  whatsappMessage: "Olá! Vi o site da Noteron e gostaria de conversar sobre um projeto.",
  email: "eduardocs1964@gmail.com",
  /** URL completa. Ex.: "https://github.com/noteron" */
  github: "https://github.com/eduuwl",
  /** URL completa. Ex.: "https://www.linkedin.com/company/noteron" */
  linkedin: "https://www.linkedin.com/in/eduuwl",
};

export type ContactChannelId = "whatsapp" | "email" | "linkedin" | "github";

export type ContactChannel = {
  id: ContactChannelId;
  label: string;
  /** Texto curto exibido abaixo do rótulo */
  hint: string;
  /** null quando o link ainda não foi configurado */
  href: string | null;
  external: boolean;
};

export function getContactChannels(): ContactChannel[] {
  const { whatsappNumber, whatsappMessage, email, github, linkedin } = contactLinks;
  const digits = whatsappNumber.replace(/\D/g, "");

  return [
    {
      id: "whatsapp",
      label: "WhatsApp",
      hint: "Resposta mais rápida",
      href: digits ? `https://wa.me/${digits}?text=${encodeURIComponent(whatsappMessage)}` : null,
      external: true,
    },
    {
      id: "email",
      label: "E-mail",
      hint: email || "Para propostas detalhadas",
      href: email ? `mailto:${email}` : null,
      external: false,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      hint: "Novidades e bastidores",
      href: linkedin || null,
      external: true,
    },
    {
      id: "github",
      label: "GitHub",
      hint: "Código e experimentos",
      href: github || null,
      external: true,
    },
  ];
}

/**
 * Seções da página, na ordem em que aparecem.
 * `nav: null` deixa a seção fora do menu.
 */
export const sections = [
  { id: "sobre", nav: "Sobre nós" },
  { id: "equipe", nav: "Equipe" },
  { id: "servicos", nav: "Serviços" },
  { id: "projetos", nav: "Projetos" },
  { id: "processo", nav: null },
  { id: "tecnologia", nav: "Tecnologia" },
  { id: "contato", nav: "Contato" },
] as const;

export type SectionId = (typeof sections)[number]["id"];

export const navItems = sections.filter(
  (s): s is Extract<(typeof sections)[number], { nav: string }> => s.nav !== null,
);

export const sectionTitleId = (id: SectionId) => `${id}-title`;
