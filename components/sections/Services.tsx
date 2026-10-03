import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { services } from "@/data/content";

export function Services() {
  return (
    <section id="servicos" aria-labelledby="servicos-title" className="border-t border-line py-24 sm:py-32">
      <div className="container-page">
        <SectionHeader
          index="05"
          label="Serviços"
          titleId="servicos-title"
          title="O que eu posso construir para você."
          intro="Do site que apresenta o seu negócio ao sistema que organiza a operação por trás dele."
        />

        <ul className="mt-16 grid border-t border-line sm:mt-20 md:grid-cols-2 md:gap-x-12">
          {services.map((service, i) => (
            <li key={service.title} data-reveal className="border-b border-line">
              <a
                href="#contato"
                className="group flex items-start gap-5 py-6 sm:gap-8 sm:py-7"
              >
                <span className="pt-1 font-mono text-xs text-subtle transition-colors group-hover:text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1">
                  <span className="block text-lg font-semibold tracking-tight transition-colors sm:text-xl">
                    {service.title}
                  </span>
                  <span className="mt-1.5 block text-sm leading-relaxed text-muted">{service.description}</span>
                </span>
                <ArrowUpRight
                  aria-hidden
                  className="mt-1 size-5 shrink-0 text-subtle transition-all duration-300 ease-out-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
