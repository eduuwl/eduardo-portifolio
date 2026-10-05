import { contactLinks, siteConfig, team, type TeamMember } from "@/config/site";

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
    logo: `${siteConfig.url}/icon.png`,
    description: siteConfig.description,
    areaServed: siteConfig.region,
    knowsAbout: [...siteConfig.knowsAbout],
    ...(contactLinks.email ? { email: contactLinks.email } : {}),
    ...(founder ? { founder: toPerson(founder) } : {}),
    member: team.map(toPerson),
    ...(contactLinks.github ? { sameAs: [contactLinks.github] } : {}),
  };
}

/** Serializa para <script type="application/ld+json"> sem permitir fechar a tag. */
export function serializeJsonLd(data: object) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
