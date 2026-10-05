import { FeaturedProjectCard } from "@/components/projects/FeaturedProjectCard";
import { OtherProjects } from "@/components/projects/OtherProjects";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { featuredProjects } from "@/data/content";

export function Projects() {
  return (
    <Section id="projetos" className="border-t border-line py-24 sm:py-32">
      <SectionHeader id="projetos" title="Projetos" lead="Alguns trabalhos que já estão rodando." />

      <div className="mt-14 space-y-6">
        {featuredProjects.map((project, i) => (
          // Os cards alternam o lado da ilustração
          <FeaturedProjectCard key={project.slug} project={project} reversed={i % 2 === 1} />
        ))}
      </div>

      <OtherProjects />
    </Section>
  );
}
