import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { OtherProject } from "@/data/content";

const statusLabel = {
  live: "No ar",
  prototype: "Protótipo",
};

export function OtherProjectCard({ project }: { project: OtherProject }) {
  const domain = project.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  // Verificado no build: só usa a captura se o arquivo existir em /public
  const hasImage = project.image ? existsSync(join(process.cwd(), "public", project.image)) : false;

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-500 hover:border-line-strong"
    >
      {/* Moldura de navegador com o domínio real */}
      <div className="flex items-center gap-3 border-b border-line px-4 py-3">
        <span
          aria-hidden
          className={`size-1.5 shrink-0 rounded-full ${project.status === "live" ? "bg-accent anim-pulse" : "bg-subtle"}`}
        />
        <span className="min-w-0 flex-1 truncate rounded-md bg-bg/70 px-2.5 py-1 font-mono text-[11px] text-muted">
          {domain}
        </span>
        <ArrowUpRight
          aria-hidden
          className="size-4 shrink-0 text-subtle transition-all duration-300 ease-out-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
        />
      </div>

      {hasImage ? (
        <div className="relative aspect-[16/9] overflow-hidden border-b border-line bg-bg">
          <Image
            src={project.image!}
            alt={`Página inicial do site ${project.name}`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-700 ease-out-soft group-hover:scale-[1.03]"
          />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
          <h4 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-accent">
            {project.name}
          </h4>
          <span
            className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] ${
              project.status === "live" ? "border-accent/40 text-accent" : "border-line-strong text-muted"
            }`}
          >
            {statusLabel[project.status]}
          </span>
        </div>
        <p className="mt-1 font-mono text-[11px] text-subtle">{project.kind}</p>
        <p className="mt-4 text-sm leading-relaxed text-pretty text-muted">{project.description}</p>
        <p className="mt-auto pt-5 font-mono text-[11px] text-subtle">{project.tech.join(" · ")}</p>
      </div>
      <span className="sr-only"> (abre o site em nova aba)</span>
    </a>
  );
}
