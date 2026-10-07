import { servicePages } from "@/data/content";
import { ogImageSize, renderBrandOgImage } from "@/lib/og";

export const alt = "Serviço da Noteron";
export const size = ogImageSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicePages.find((s) => s.slug === slug);

  return renderBrandOgImage({
    eyebrow: "Serviço · Noteron",
    title: service?.name ?? "Noteron",
    subtitle: service?.lead ?? "Soluções digitais no Pará",
  });
}
