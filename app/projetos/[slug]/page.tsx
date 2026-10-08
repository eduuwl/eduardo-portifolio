import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FeaturedProjectCard } from "@/components/projects/FeaturedProjectCard";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PointerGlow } from "@/components/layout/PointerGlow";
import { RevealObserver } from "@/components/layout/RevealObserver";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { featuredProjects, servicePages } from "@/data/content";
import { getBreadcrumbJsonLd, serializeJsonLd } from "@/lib/structured-data";

export function generateStaticParams() {
  return featuredProjects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/projetos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = featuredProjects.find((p) => p.slug === slug);
  if (!project) return {};

  const title = project.metaTitle ?? project.name;
  const description = project.metaDescription ?? project.description;

  return {
    title,
    description,
    alternates: { canonical: `/projetos/${project.slug}` },
    openGraph: { type: "website", title, description, url: `/projetos/${project.slug}` },
    twitter: { title, description },
  };
}

export default async function ProjectDetailPage({ params }: PageProps<"/projetos/[slug]">) {
  const { slug } = await params;
  const project = featuredProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  const relatedServices = (project.relatedServiceSlugs ?? [])
    .map((serviceSlug) => servicePages.find((s) => s.slug === serviceSlug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const breadcrumbItems: Crumb[] = [
    { name: "Início", href: "/" },
    { name: "Projetos", href: "/#projetos" },
    { name: project.name, href: `/projetos/${project.slug}` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(getBreadcrumbJsonLd(breadcrumbItems)) }}
      />

      <Header />
      <main id="conteudo" tabIndex={-1} className="outline-none">
        <div className="container-page pt-32 sm:pt-40">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <div className="container-page mt-10">
          <FeaturedProjectCard project={project} headingLevel="h1" />
        </div>

        {relatedServices.length > 0 ? (
          <div className="container-page mt-10">
            <h2 className="heading-brand text-xs text-fg">Serviço relacionado</h2>
            <ul className="mt-4 flex flex-wrap gap-3 text-sm">
              {relatedServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/servicos/${service.slug}`}
                    className="inline-flex items-center gap-1.5 rounded border border-line-strong px-3 py-1.5 text-fg transition-colors hover:border-neon hover:text-neon"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="container-page mt-14 pb-20 sm:pb-28">
          <ButtonLink href="/#contato">Quero um projeto assim</ButtonLink>
        </div>
      </main>
      <Footer />
      <RevealObserver />
      <PointerGlow />
    </>
  );
}
