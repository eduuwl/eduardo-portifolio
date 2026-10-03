import { SectionHeader } from "@/components/ui/SectionHeader";
import { processSteps } from "@/data/content";

export function Process() {
  return (
    <section id="processo" aria-labelledby="processo-title" className="border-t border-line py-24 sm:py-32">
      <div className="container-page">
        <SectionHeader
          index="03"
          label="Como eu trabalho"
          titleId="processo-title"
          title={
            <>
              Código é a etapa do meio. <span className="text-muted">Antes vem entender o negócio.</span>
            </>
          }
          intro="Um sistema só resolve quando se encaixa no jeito que as pessoas trabalham. Por isso o processo começa em conversa e termina em uso real, não em um repositório."
        />

        <ol className="relative mt-16 grid gap-0 sm:mt-20 lg:grid-cols-5 lg:gap-6">
          {/* Linha do tempo (desktop) */}
          <span aria-hidden className="absolute top-[7px] right-0 left-0 hidden h-px bg-line-strong lg:block" />

          {processSteps.map((step, i) => (
            <li
              key={step.number}
              data-reveal
              style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
              className="group relative grid grid-cols-[auto_1fr] gap-x-5 pb-10 last:pb-0 lg:block lg:pb-0"
            >
              {/* Linha do tempo (mobile) */}
              {i < processSteps.length - 1 && (
                <span aria-hidden className="absolute top-4 bottom-0 left-[7px] w-px bg-line-strong lg:hidden" />
              )}

              <span
                aria-hidden
                className="relative z-10 mt-0.5 block size-[15px] rounded-full border border-line-strong bg-bg transition-colors duration-300 group-hover:border-accent lg:mt-0"
              >
                <span className="absolute inset-[4px] rounded-full bg-line-strong transition-colors duration-300 group-hover:bg-accent" />
              </span>

              <div className="lg:mt-8">
                <p className="font-mono text-xs text-accent">{step.number}</p>
                <h3 className="mt-2 text-lg font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-pretty text-muted">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
