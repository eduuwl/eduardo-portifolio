import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { featuredProjects, otherProjects, servicePages } from "@/data/content";
import { externalLinkProps } from "@/lib/links";
import { getBreadcrumbJsonLd, getFaqJsonLd, getServiceJsonLd, serializeJsonLd } from "@/lib/structured-data";

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/servicos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = servicePages.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/servicos/${service.slug}` },
    openGraph: {
      type: "website",
      title: service.metaTitle,
      description: service.metaDescription,
      url: `/servicos/${service.slug}`,
    },
    twitter: { title: service.metaTitle, description: service.metaDescription },
  };
}

export default async function ServiceDetailPage({ params }: PageProps<"/servicos/[slug]">) {
  const { slug } = await params;
  const service = servicePages.find((s) => s.slug === slug);
  if (!service) notFound();

  const exampleCases = (service.exampleCaseSlugs ?? [])
    .map((caseSlug) => featuredProjects.find((p) => p.slug === caseSlug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const exampleSites = (service.exampleProjectNames ?? [])
    .map((name) => otherProjects.find((p) => p.name === name))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const breadcrumbItems: Crumb[] = [
    { name: "Início", href: "/" },
    { name: "Serviços", href: "/#servicos" },
    { name: service.name, href: `/servicos/${service.slug}` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(getServiceJsonLd(service)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(getFaqJsonLd(service.faq)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(getBreadcrumbJsonLd(breadcrumbItems)) }}
      />

      <Header />
      <main id="conteudo" tabIndex={-1} className="outline-none">
        <section className="container-page pt-32 pb-20 sm:pt-40 sm:pb-28">
          <Breadcrumbs items={breadcrumbItems} />

          <p className="heading-brand mt-10 text-xs text-leaf">Serviço</p>
          <h1 className="mt-4 font-display text-[clamp(2.2rem,5.4vw,3.6rem)] font-bold tracking-[-0.02em] text-balance">
            {service.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-pretty text-muted">{service.lead}</p>

          <div className="mt-14 grid gap-14 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="max-w-2xl text-base leading-relaxed text-pretty text-fg/90">{service.summary}</p>

              <h2 className="heading-brand mt-10 text-xs text-fg">O que está incluso</h2>
              <ul className="mt-4 space-y-2.5 text-sm text-muted">
                {service.includes.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-neon" />
                    {item}
                  </li>
                ))}
              </ul>

              <h2 className="heading-brand mt-10 text-xs text-fg">Para quem é</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">{service.forWho}</p>

              {exampleCases.length > 0 || exampleSites.length > 0 ? (
                <div className="mt-10">
                  <h2 className="heading-brand text-xs text-fg">Exemplos</h2>
                  <ul className="mt-4 flex flex-wrap gap-3 text-sm">
                    {exampleCases.map((project) => (
                      <li key={project.slug}>
                        <Link
                          href={`/projetos/${project.slug}`}
                          className="inline-flex items-center gap-1.5 rounded border border-line-strong px-3 py-1.5 text-fg transition-colors hover:border-neon hover:text-neon"
                        >
                          {project.name}
                        </Link>
                      </li>
                    ))}
                    {exampleSites.map((project) => (
                      <li key={project.name}>
                        <a
                          href={project.url}
                          {...externalLinkProps}
                          className="inline-flex items-center gap-1.5 rounded border border-line-strong px-3 py-1.5 text-fg transition-colors hover:border-neon hover:text-neon"
                        >
                          {project.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="mt-14">
                <ButtonLink href="/#contato">Falar sobre o meu projeto</ButtonLink>
              </div>
            </div>

            <div>
              <h2 className="heading-brand text-xs text-fg">Perguntas frequentes</h2>
              <dl className="mt-4 space-y-6">
                {service.faq.map((item) => (
                  <div key={item.question}>
                    <dt className="font-display text-sm font-semibold text-fg">{item.question}</dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-muted">{item.answer}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
