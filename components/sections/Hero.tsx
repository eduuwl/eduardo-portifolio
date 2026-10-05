import { ArrowDown, ArrowRight } from "lucide-react";
import { CircuitLines } from "@/components/brand/CircuitLines";
import { Emblem } from "@/components/brand/Emblem";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative isolate overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <CircuitLines className="absolute top-20 -right-10 -z-10 w-[640px] -scale-x-100 text-circuit/45 max-lg:hidden" animated />

      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p data-reveal className="heading-brand text-[11px] text-leaf sm:text-xs">
            {siteConfig.tagline} · feito no {siteConfig.region}
          </p>

          <h1
            id="hero-title"
            data-reveal
            style={{ "--reveal-delay": "60ms" }}
            className="mt-6 font-display text-[clamp(2.4rem,5.6vw,4.4rem)] leading-[1.04] font-bold tracking-[-0.02em] text-balance"
          >
            Conectando a Amazônia ao <span className="neon-on text-neon text-glow">futuro digital.</span>
          </h1>

          <p
            data-reveal
            style={{ "--reveal-delay": "120ms" }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-pretty text-muted"
          >
            A Noteron desenvolve sistemas, automações e soluções com inteligência artificial para empresas da região.
            Pegamos o trabalho manual que trava a sua operação e transformamos em software que roda sozinho.
          </p>

          <div data-reveal style={{ "--reveal-delay": "180ms" }} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#contato">
              Fale com a gente
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </ButtonLink>
            <ButtonLink href="#projetos" variant="outline">
              Ver projetos
              <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </ButtonLink>
          </div>
        </div>

        <div data-reveal style={{ "--reveal-delay": "200ms" }} className="relative mx-auto w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[460px]">
          <div aria-hidden className="anim-glow absolute inset-[12%] -z-10 rounded-full bg-neon/15 blur-[90px]" />
          <div className="anim-float">
            <Emblem
              alt="Emblema da Noteron: um guardião da floresta com uma folha em uma mão e uma seta de circuito na outra"
              sizes="(min-width: 1024px) 460px, 80vw"
              priority
              className="anim-flicker h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
