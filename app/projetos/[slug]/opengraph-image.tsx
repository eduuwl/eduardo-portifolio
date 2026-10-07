import { featuredProjects } from "@/data/content";
import { ogImageSize, renderBrandOgImage } from "@/lib/og";

export const alt = "Case da Noteron";
export const size = ogImageSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return featuredProjects.map((project) => ({ slug: project.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = featuredProjects.find((p) => p.slug === slug);

  return renderBrandOgImage({
    eyebrow: "Case · Noteron",
    title: project?.name ?? "Noteron",
    subtitle: project?.kicker ?? "Soluções digitais no Pará",
  });
}
