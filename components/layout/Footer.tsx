import { ArrowUp } from "lucide-react";
import Link from "next/link";
import { Wordmark } from "@/components/brand/Wordmark";
import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-8 py-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Wordmark className="text-xl" />
          <p className="mt-2 font-display text-[11px] font-medium tracking-[0.14em] text-subtle uppercase">
            {siteConfig.slogan}
          </p>
        </div>

        <div className="flex items-center justify-between gap-8 text-sm text-subtle sm:justify-end">
          <span>
            © {year} {siteConfig.name}
          </span>
          <Link href="/#inicio" className="group inline-flex items-center gap-2 transition-colors hover:text-neon">
            Voltar ao topo
            <ArrowUp className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden />
          </Link>
        </div>
      </div>
    </footer>
  );
}
