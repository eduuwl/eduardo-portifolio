import Image from "next/image";
import { HoverArrow } from "@/components/ui/HoverArrow";
import type { OtherProject } from "@/data/content";
import { cn } from "@/lib/cn";
import { externalLinkProps } from "@/lib/links";
import { publicFileExists } from "@/lib/public-file";

const statusLabel: Record<OtherProject["status"], string> = {
  live: "No ar",
  prototype: "Protótipo",
};

export function OtherProjectCard({ project }: { project: OtherProject }) {
  const domain = project.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  const isLive = project.status === "live";
  // Verificado no build: só usa a captura se o arquivo existir em /public
  const image = project.image && publicFileExists(project.image) ? project.image : null;

  return (
    <a
      href={project.url}
      {...externalLinkProps}
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-surface transition-[border-color,box-shadow] duration-300 hover:border-neon/50 hover:glow"
    >
      {image ? (
        <div className="relative aspect-[16/9] overflow-hidden border-b border-line bg-bg">
          <Image
            src={image}
            alt={`Página inicial do site ${project.name}`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-700 ease-out-soft group-hover:scale-[1.03]"
          />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h4 className="font-display text-lg font-semibold transition-colors group-hover:text-neon">
              {project.name}
            </h4>
            <p className="mt-0.5 text-sm text-subtle">{project.kind}</p>
          </div>
          <HoverArrow className="mt-1 size-5" />
        </div>

        <p className="mt-4 text-sm leading-relaxed text-pretty text-muted">{project.description}</p>

        <div className="mt-auto flex items-center justify-between gap-4 pt-6 text-xs">
          <span className="truncate text-subtle">{domain}</span>
          <span
            className={cn(
              "inline-flex shrink-0 items-center gap-1.5 font-display font-semibold tracking-[0.1em] uppercase",
              isLive ? "text-neon" : "text-subtle",
            )}
          >
            <span aria-hidden className={cn("size-1.5 rounded-full", isLive ? "bg-neon anim-pulse" : "bg-subtle")} />
            {statusLabel[project.status]}
          </span>
        </div>
      </div>
      <span className="sr-only"> (abre o site em nova aba)</span>
    </a>
  );
}
