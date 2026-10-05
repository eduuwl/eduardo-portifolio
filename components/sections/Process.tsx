import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { processSteps } from "@/data/content";

export function Process() {
  return (
    <Section id="processo" className="border-t border-line bg-surface/40 py-24 sm:py-32">
      <SectionHeader
        id="processo"
        title="Como trabalhamos"
        lead="Antes de escrever código, a gente entende o seu negócio."
      />

      {/* As etapas ligadas por uma trilha de circuito */}
      <ol className="relative mt-16 grid gap-10 lg:grid-cols-5 lg:gap-6">
        <span
          aria-hidden
          className="absolute top-[9px] right-0 left-0 hidden h-px bg-gradient-to-r from-neon via-leaf to-circuit lg:block"
        />
        <span
          aria-hidden
          className="absolute top-2 bottom-2 left-[9px] w-px bg-gradient-to-b from-neon via-leaf to-circuit lg:hidden"
        />

        {processSteps.map((step, i) => (
          <li
            key={step.title}
            data-reveal
            style={{ "--reveal-delay": `${i * 70}ms` }}
            className="relative grid grid-cols-[auto_1fr] gap-x-6 lg:block"
          >
            <span aria-hidden className="relative z-10 block size-[19px] rounded-full border-2 border-neon bg-bg glow" />
            <div className="lg:mt-8">
              <h3 className="heading-brand text-sm text-fg">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-pretty text-muted">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
