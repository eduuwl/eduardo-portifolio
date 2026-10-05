import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { services } from "@/data/content";

export function Services() {
  return (
    <Section id="servicos" className="border-t border-line py-24 sm:py-32">
      <SectionHeader id="servicos" title="Serviços" lead="O que podemos construir para a sua empresa." />

      <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ title, description, icon: Icon }, i) => (
          <li
            key={title}
            data-reveal
            style={{ "--reveal-delay": `${(i % 3) * 60}ms` }}
            className="group rounded-lg border border-line bg-surface p-6 transition-[border-color,box-shadow] duration-300 hover:border-neon/60 hover:glow"
          >
            <Icon aria-hidden strokeWidth={1.6} className="size-7 text-leaf transition-colors group-hover:text-neon" />
            <h3 className="mt-6 font-display text-base font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
