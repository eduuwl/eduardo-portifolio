/**
 * Configuração central do site.
 * Tudo que é pessoal (links, URL, textos de SEO) fica aqui para ser editado em um só lugar.
 */

export const siteConfig = {
  name: "Eduardo Uchoa",
  role: "Desenvolvedor & Analista de Dados",
  /**
   * URL pública do site (usada em Open Graph, sitemap e robots).
   * Defina NEXT_PUBLIC_SITE_URL no ambiente de deploy, ex.: https://eduardouchoa.dev
   */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  title: "Eduardo Uchoa — Desenvolvimento de software, automações e IA",
  shortTitle: "Eduardo Uchoa",
  description:
    "Desenvolvedor e analista de dados. Crio sistemas web, APIs, automações e soluções com IA sob medida, transformando processos manuais em software simples e confiável.",
  locale: "pt_BR",
  keywords: [
    "Eduardo Uchoa",
    "desenvolvedor",
    "analista de dados",
    "automação de processos",
    "sistemas web",
    "APIs",
    "inteligência artificial",
    "Python",
    "Next.js",
    "Node.js",
    "n8n",
  ],
} as const;

/**
 * Links de contato. Deixe a string vazia ("") enquanto não tiver o link:
 * o botão aparece como "em breve" e não leva a lugar nenhum.
 */
export const contactLinks = {
  /** Apenas dígitos, com DDI e DDD. Ex.: "5591999999999" */
  whatsappNumber: "5591989599238",
  whatsappMessage: "Olá, Eduardo! Vi seu portfólio e gostaria de conversar sobre um projeto.",
  /** Ex.: "contato@seudominio.com" */
  email: "eduardocs1964@gmail.com",
  /** URL completa. Ex.: "https://github.com/seu-usuario" */
  github: "https://github.com/eduuwl",
  /** URL completa. Ex.: "https://www.linkedin.com/in/seu-usuario" */
  linkedin: "https://www.linkedin.com/in/eduuwl",
};

/**
 * Foto de perfil exibida na seção "Sobre".
 * Coloque o arquivo em /public com este nome. Se o arquivo não existir,
 * a página mostra um placeholder no lugar.
 */
export const profilePhoto = {
  src: "/eduardo.jpg",
  alt: "Foto de Eduardo Uchoa",
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
      href: digits
        ? `https://wa.me/${digits}?text=${encodeURIComponent(whatsappMessage)}`
        : null,
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
      hint: "Trajetória profissional",
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

export const navItems = [
  { id: "sobre", label: "Sobre" },
  { id: "projetos", label: "Projetos" },
  { id: "processo", label: "Processo" },
  { id: "stack", label: "Stack" },
  { id: "servicos", label: "Serviços" },
] as const;
