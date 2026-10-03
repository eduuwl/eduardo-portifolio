import { SectionHeader } from "@/components/ui/SectionHeader";
import { stackGroups } from "@/data/content";

export function Stack() {
  return (
    <section id="stack" aria-labelledby="stack-title" className="border-t border-line py-24 sm:py-32">
      <div className="container-page">
        <SectionHeader
          index="04"
          label="Tecnologias"
          titleId="stack-title"
          title={
            <>
              Ferramentas escolhidas pelo problema, <span className="text-muted">não pelo hype.</span>
            </>
          }
        />

        <div
          data-reveal
          className="mt-16 grid overflow-hidden rounded-3xl border border-line bg-line sm:mt-20 sm:grid-cols-2 lg:grid-cols-5"
          style={{ gap: "1px" }}
        >
          {stackGroups.map((group, i) => (
            <section
              key={group.name}
              aria-labelledby={`stack-${i}`}
              className="group flex flex-col bg-bg p-6 transition-colors duration-500 hover:bg-surface sm:p-7"
            >
              <div className="flex items-center justify-between font-mono text-[11px] text-subtle">
                <span>{String(i + 1).padStart(2, "0")}</span>
                <span
                  aria-hidden
                  className="size-1.5 rounded-full bg-line-strong transition-colors duration-300 group-hover:bg-accent"
                />
              </div>
              <h3 id={`stack-${i}`} className="mt-8 text-xl font-semibold tracking-tight">
                {group.name}
              </h3>
              <p className="mt-1.5 text-sm text-muted lg:min-h-10">{group.summary}</p>

              <ul className="mt-8 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-baseline gap-2.5 font-mono text-[13px] text-fg/85">
                    <span aria-hidden className="text-subtle">
                      ›
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
