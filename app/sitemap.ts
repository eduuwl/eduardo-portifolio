import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { featuredProjects, servicePages } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...servicePages.map((service) => ({
      url: `${siteConfig.url}/servicos/${service.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...featuredProjects.map((project) => ({
      url: `${siteConfig.url}/projetos/${project.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
