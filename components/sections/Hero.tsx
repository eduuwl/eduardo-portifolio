import { ArrowDown, ArrowUpRight } from "lucide-react";
import { HeroCode } from "@/components/HeroCode";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { siteConfig } from "@/config/site";

const focusAreas = ["Sistemas web", "Automações", "APIs & integrações", "Dados & IA"];

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* Grade técnica + um único brilho discreto */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid mask-fade opacity-60" />
      <div
        aria-hidden
        className="absolute top-10 right-[-10%] -z-10 size-[520px] rounded-full bg-accent/[0.06] blur-[120px]"
      />

      <div className="container-page grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <p
            data-reveal
            className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 py-1.5 pr-3.5 pl-2.5 font-mono text-xs text-muted"
          >
            <span aria-hidden className="size-1.5 rounded-full bg-accent" />
            <span className="hidden sm:inline">{siteConfig.name} · </span>
            {siteConfig.role}
          </p>

          <h1
            id="hero-title"
            data-reveal
            style={{ "--reveal-delay": "60ms" } as React.CSSProperties}
            className="mt-7 text-[clamp(2.6rem,6.4vw,4.75rem)] leading-[0.98] font-semibold tracking-[-0.045em] text-balance"
          >
            Transformo problemas reais em <span className="text-accent">software.</span>
          </h1>

          <p
            data-reveal
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            className="mt-7 max-w-xl text-lg leading-relaxed text-pretty text-muted"
          >
            Desenvolvo sistemas, automações e soluções digitais sob medida. Meu foco é pegar processos manuais e
            problemas complexos e transformá-los em soluções simples, automatizadas e escaláveis.
          </p>

          <div
            data-reveal
            style={{ "--reveal-delay": "180ms" } as React.CSSProperties}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <ButtonLink href="#projetos">
              Ver projetos
              <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </ButtonLink>
            <ButtonLink href="#contato" variant="ghost">
              Falar comigo
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </ButtonLink>
          </div>

          <ul
            data-reveal
            style={{ "--reveal-delay": "240ms" } as React.CSSProperties}
            aria-label="Áreas de atuação"
            className="mt-12 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-muted"
          >
            {focusAreas.map((area) => (
              <li key={area} className="flex items-center gap-2">
                <span aria-hidden className="size-1 rounded-full bg-line-strong" />
                {area}
              </li>
            ))}
          </ul>
        </div>

        <div
          data-reveal
          style={{ "--reveal-delay": "200ms" } as React.CSSProperties}
          className="lg:col-span-5"
        >
          <HeroCode />
        </div>
      </div>
    </section>
  );
}
