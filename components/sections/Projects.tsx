import { ArrowUpRight, FolderPlus } from "lucide-react";
import { OtherProjectCard } from "@/components/OtherProjectCard";
import { SalesFlowVisual, TiraNotaVisual } from "@/components/ProjectVisuals";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { featuredProjects, otherProjects, type Project } from "@/data/content";

export function Projects() {
  const [main, ...rest] = featuredProjects;

  return (
    <section id="projetos" aria-labelledby="projetos-title" className="border-t border-line py-24 sm:py-32">
      <div className="container-page">
        <SectionHeader
          index="02"
          label="Projetos"
          titleId="projetos-title"
          title="Projetos que nasceram de problemas de verdade."
          intro="Cada projeto começa com uma pergunta simples: o que está tomando tempo, gerando erro ou travando o trabalho de alguém?"
        />

        <div className="mt-16 space-y-6 sm:mt-20">
          {main ? <ProjectCard project={main} featured /> : null}
          {rest.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <OtherProjects />
      </div>
    </section>
  );
}

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const titleId = `projeto-${project.slug}`;
  const hasLinks = project.links && project.links.length > 0;

  return (
    <article
      data-reveal
      aria-labelledby={titleId}
      className="group relative overflow-hidden rounded-3xl border border-line bg-surface transition-colors duration-500 hover:border-line-strong"
    >
      <div className="grid lg:grid-cols-12">
        {/* Conteúdo */}
        <div className={`flex flex-col p-6 sm:p-10 lg:col-span-7 lg:p-12 ${featured ? "" : "lg:order-2"}`}>
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-muted">
            {featured ? (
              <span className="rounded-full bg-accent px-2.5 py-1 font-medium text-bg">Projeto principal</span>
            ) : null}
            <span>{project.kicker}</span>
          </div>

          <h3
            id={titleId}
            className={`mt-6 font-semibold tracking-[-0.035em] ${
              featured ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl"
            }`}
          >
            {project.name}
          </h3>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-pretty text-muted sm:text-lg">
            {project.description}
          </p>

          <dl className="mt-10 grid gap-8 sm:grid-cols-2">
            <div>
              <dt className="font-mono text-[11px] tracking-wide text-subtle uppercase">Problema</dt>
              <dd className="mt-2 text-sm leading-relaxed text-fg/90">{project.problem}</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] tracking-wide text-subtle uppercase">Solução</dt>
              <dd className="mt-2 text-sm leading-relaxed text-fg/90">{project.solution}</dd>
            </div>
          </dl>

          {project.approach ? (
            <div className="mt-10">
              <p className="font-mono text-[11px] tracking-wide text-subtle uppercase">
                Construído junto com quem usa
              </p>
              <ol className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm text-muted">
                {project.approach.map((step, i) => (
                  <li key={step} className="flex items-center gap-2">
                    {i > 0 && (
                      <span aria-hidden className="text-subtle">
                        →
                      </span>
                    )}
                    <span className={i === project.approach!.length - 1 ? "text-fg" : undefined}>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          ) : null}

          <div className="mt-10">
            <p className="sr-only">Tecnologias e conceitos:</p>
            <ul className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-line-strong px-3 py-1 font-mono text-[11px] text-muted"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 pt-10">
            {hasLinks ? (
              project.links!.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-colors hover:text-accent"
                >
                  {link.label}
                  <ArrowUpRight className="size-4" />
                </a>
              ))
            ) : (
              <a
                href="#contato"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-colors hover:text-accent"
              >
                Saber mais sobre o projeto
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                <span className="sr-only"> {project.name}</span>
              </a>
            )}
          </div>
        </div>

        {/* Visual + resultado */}
        <div
          className={`relative flex flex-col border-t border-line bg-bg/40 lg:col-span-5 lg:border-t-0 ${
            featured ? "lg:border-l" : "lg:order-1 lg:border-r"
          }`}
        >
          <div aria-hidden className="absolute inset-0 bg-grid opacity-40 [background-size:28px_28px] mask-fade" />
          <div className="relative flex flex-1 flex-col justify-center py-4 transition-transform duration-700 ease-out-soft group-hover:scale-[1.015]">
            {project.visual === "tiranota" ? <TiraNotaVisual /> : null}
            {project.visual === "sales-flow" ? <SalesFlowVisual /> : null}
          </div>

          {project.metrics && project.metrics.length > 0 ? (
            <div className="relative border-t border-line p-6 sm:p-7">
              <p className="font-mono text-[11px] tracking-wide text-subtle uppercase">Resultado</p>
              <ul className="mt-3 flex items-end gap-8">
                {project.metrics.map((m) => (
                  <li key={m.label}>
                    <span className="block text-3xl font-semibold tracking-[-0.03em] text-accent sm:text-4xl">
                      {m.value}
                    </span>
                    <span className="mt-1 block text-sm text-muted">{m.label}</span>
                  </li>
                ))}
              </ul>
              {project.resultNote ? <p className="mt-3 text-xs text-muted">{project.resultNote}</p> : null}
            </div>
          ) : null}

          <p className="relative px-6 pb-5 font-mono text-[10px] text-subtle sm:px-7">
            Ilustração do fluxo — não é captura do sistema.
          </p>
        </div>
      </div>
    </article>
  );
}

function OtherProjects() {
  return (
    <div id="outros-projetos" className="mt-20 scroll-mt-20 sm:mt-24">
      <div data-reveal className="flex items-baseline justify-between gap-6 border-b border-line pb-4">
        <h3 className="text-lg font-semibold tracking-tight">Sites e outros projetos</h3>
        <span className="font-mono text-xs text-subtle">
          {otherProjects.length > 0 ? `${otherProjects.length.toString().padStart(2, "0")} projetos` : "em breve"}
        </span>
      </div>

      {otherProjects.length > 0 ? (
        <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {otherProjects.map((p, i) => (
            <li
              key={p.url}
              className="min-w-0"
              data-reveal
              style={{ "--reveal-delay": `${(i % 2) * 80}ms` } as React.CSSProperties}
            >
              <OtherProjectCard project={p} />
            </li>
          ))}
        </ul>
      ) : (
        <div
          data-reveal
          className="mt-6 flex flex-col items-start gap-4 rounded-2xl border border-dashed border-line-strong p-6 sm:flex-row sm:items-center sm:p-8"
        >
          <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-line text-muted">
            <FolderPlus className="size-4" aria-hidden />
          </span>
          <div>
            <p className="text-sm text-fg">Novos projetos estão sendo documentados.</p>
            <p className="mt-1 font-mono text-xs text-subtle">
              {"// estudos de caso, sistemas e experimentos entram aqui em breve"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
