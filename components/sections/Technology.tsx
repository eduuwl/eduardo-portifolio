import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { stackGroups } from "@/data/content";

export function Technology() {
  return (
    <Section id="tecnologia" className="border-t border-line py-24 sm:py-32">
      <SectionHeader id="tecnologia" title="Tecnologia" lead="As ferramentas que usamos no dia a dia." />

      <dl data-reveal className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
        {stackGroups.map((group) => (
          <div key={group.name} className="border-t border-line-strong pt-5">
            <dt className="heading-brand text-xs text-leaf">{group.name}</dt>
            {group.items.map((item) => (
              <dd key={item} className="mt-2.5 text-[15px] text-fg/90">
                {item}
              </dd>
            ))}
          </div>
        ))}
      </dl>
    </Section>
  );
}
