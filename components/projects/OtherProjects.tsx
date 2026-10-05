import { OtherProjectCard } from "@/components/projects/OtherProjectCard";
import { otherProjects } from "@/data/content";

export function OtherProjects() {
  if (otherProjects.length === 0) return null;

  return (
    <div id="outros-projetos" className="mt-20 scroll-mt-20">
      <div data-reveal>
        <h3 className="heading-brand text-sm text-fg">Sites e outros projetos</h3>
        <span
          aria-hidden
          className="draw-x mt-4 block h-px w-full max-w-md bg-gradient-to-r from-neon/70 via-line-strong to-transparent"
        />
      </div>

      <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
        {otherProjects.map((project, i) => (
          <li key={project.url} data-reveal style={{ "--reveal-delay": `${(i % 2) * 80}ms` }} className="min-w-0">
            <OtherProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}
