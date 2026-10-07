import { contactLinks, siteConfig, team, type TeamMember } from "@/config/site";
import type { FaqItem, ServicePage } from "@/data/content";

/** Dados estruturados (schema.org/Organization) para buscadores. */
function toPerson(member: TeamMember) {
  return {
    "@type": "Person",
    name: member.name,
    jobTitle: member.role,
    ...(member.alumniOf ? { alumniOf: { "@type": "CollegeOrUniversity", name: member.alumniOf } } : {}),
    ...(member.linkedin ? { sameAs: [member.linkedin] } : {}),
  };
}

export function getOrganizationJsonLd() {
  const [founder] = team;

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    slogan: siteConfig.slogan,
    url: siteConfig.url,
    logo: `${siteConfig.url}/brand/emblem.webp`,
    description: siteConfig.description,
    areaServed: siteConfig.region,
    knowsAbout: [...siteConfig.knowsAbout],
    ...(contactLinks.email ? { email: contactLinks.email } : {}),
    ...(founder ? { founder: toPerson(founder) } : {}),
    member: team.map(toPerson),
    ...(contactLinks.github ? { sameAs: [contactLinks.github] } : {}),
  };
}

/** Dados estruturados (schema.org/Service) para uma página de serviço. */
export function getServiceJsonLd(service: Pick<ServicePage, "name" | "slug" | "metaDescription">) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: service.name,
    description: service.metaDescription,
    url: `${siteConfig.url}/servicos/${service.slug}`,
    areaServed: siteConfig.region,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

/** Dados estruturados (schema.org/FAQPage) a partir de uma lista de perguntas e respostas. */
export function getFaqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

/** Dados estruturados (schema.org/BreadcrumbList). `items` vai da home até a página atual. */
export function getBreadcrumbJsonLd(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.href}`,
    })),
  };
}

/** Serializa para <script type="application/ld+json"> sem permitir fechar a tag. */
export function serializeJsonLd(data: object) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
