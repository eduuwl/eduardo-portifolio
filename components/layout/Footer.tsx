import { ArrowUp } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
          <span className="font-medium text-fg">{siteConfig.name}</span>
          <span aria-hidden className="hidden h-3 w-px bg-line-strong sm:block" />
          <span>{siteConfig.role}</span>
        </div>

        <div className="flex items-center justify-between gap-6 sm:justify-end">
          <span className="font-mono text-xs text-subtle">© {year}</span>
          <a
            href="#inicio"
            className="group inline-flex items-center gap-2 font-mono text-xs transition-colors hover:text-fg"
          >
            Voltar ao topo
            <ArrowUp className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
