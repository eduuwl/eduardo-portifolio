import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projectVisuals } from "@/components/projects/ProjectVisuals";
import { CountUp } from "@/components/ui/CountUp";
import type { Project } from "@/data/content";
import { cn } from "@/lib/cn";
import { externalLinkProps } from "@/lib/links";

const labelClass = "heading-brand text-[11px] text-leaf";
const linkClass =
  "group/link inline-flex items-center gap-1.5 font-display text-xs font-semibold tracking-[0.12em] text-fg uppercase transition-colors hover:text-neon";

type FeaturedProjectCardProps = {
  project: Project;
  reversed?: boolean;
  /** "h3" quando embutido sob o h2 da seção Projetos (home), "h1" quando é o título da página do case */
  headingLevel?: "h1" | "h3";
};

export function FeaturedProjectCard({ project, reversed = false, headingLevel = "h3" }: FeaturedProjectCardProps) {
  const titleId = `projeto-${project.slug}`;
  const Heading = headingLevel;
  const Visual = project.visual ? projectVisuals[project.visual] : null;
  const links = project.links ?? [];
  const approach = project.approach ?? [];
  const metrics = project.metrics ?? [];

  return (
    <article
      data-reveal
      data-spotlight
      aria-labelledby={titleId}
      className="overflow-hidden rounded-lg border border-line bg-surface transition-colors duration-500 hover:border-line-strong"
    >
      <div className="grid lg:grid-cols-12">
        <div className={cn("flex flex-col p-6 sm:p-10 lg:col-span-7", reversed && "lg:order-2")}>
          <p className={labelClass}>{project.kicker}</p>
          <Heading id={titleId} className="mt-4 font-display text-3xl font-bold tracking-[-0.01em] sm:text-4xl">
            {project.name}
          </Heading>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-pretty text-muted sm:text-lg">
            {project.description}
          </p>

          <dl className="mt-10 grid gap-8 sm:grid-cols-2">
            <div>
              <dt className={labelClass}>Problema</dt>
              <dd className="mt-2 text-sm leading-relaxed text-fg/90">{project.problem}</dd>
            </div>
            <div>
              <dt className={labelClass}>Solução</dt>
              <dd className="mt-2 text-sm leading-relaxed text-fg/90">{project.solution}</dd>
            </div>
          </dl>

          {approach.length > 0 ? (
            <div className="mt-10">
              <p className={labelClass}>Construído junto com quem usa</p>
              <ol className="mt-4 flex flex-wrap gap-2 text-sm">
                {approach.map((step, i) => (
                  <li
                    key={step}
                    className={cn(
                      "rounded border px-2.5 py-1",
                      i === approach.length - 1 ? "border-neon/50 text-neon" : "border-line-strong text-muted",
                    )}
                  >
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          ) : null}

          <p className="mt-10 text-sm text-subtle">
            <span className="sr-only">Tecnologias: </span>
            {project.tech.join(" / ")}
          </p>

          <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 pt-8">
            {links.length > 0 ? (
              links.map((link) => (
                <a key={link.href} href={link.href} {...externalLinkProps} className={linkClass}>
                  {link.label}
                  <ArrowUpRight className="size-4" aria-hidden />
                </a>
              ))
            ) : (
              <Link href="/#contato" className={linkClass}>
                Quero algo parecido
                <ArrowUpRight
                  aria-hidden
                  className="size-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                />
              </Link>
            )}
          </div>
        </div>

        <div
          className={cn(
            "flex flex-col border-t border-line bg-bg/60 lg:col-span-5 lg:border-t-0",
            reversed ? "lg:order-1 lg:border-r" : "lg:border-l",
          )}
        >
          <div className="flex flex-1 flex-col justify-center py-4">{Visual ? <Visual /> : null}</div>

          {metrics.length > 0 ? (
            <div className="border-t border-line p-6 sm:p-8">
              <p className={labelClass}>Resultado</p>
              <ul className="mt-3 flex items-end gap-10">
                {metrics.map((m) => (
                  <li key={m.label}>
                    <CountUp value={m.value} className="block font-display text-4xl font-bold text-neon text-glow tabular-nums" />
                    <span className="mt-1 block text-sm text-muted">{m.label}</span>
                  </li>
                ))}
              </ul>
              {project.resultNote ? <p className="mt-4 text-xs text-subtle">{project.resultNote}</p> : null}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
