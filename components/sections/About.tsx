import { ProfilePhoto } from "@/components/ProfilePhoto";
import { SectionHeader } from "@/components/ui/SectionHeader";

const facts = [
  { label: "Graduação", value: "Análise e Desenvolvimento de Sistemas", detail: "UNAMA" },
  { label: "Pós-graduação", value: "Inteligência Artificial e Aprendizado de Máquina", detail: "UNAMA" },
  { label: "Atuação", value: "Desenvolvimento web, backend, APIs, integrações e análise de dados" },
  { label: "Foco", value: "Resolver problemas reais de quem usa o sistema" },
];

export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="border-t border-line py-24 sm:py-32">
      <div className="container-page">
        <SectionHeader
          index="01"
          label="Sobre"
          titleId="sobre-title"
          title={
            <>
              Entre o código e os dados, <span className="text-muted">sempre começando pelo problema.</span>
            </>
          }
        />

        <div className="mt-14 grid gap-14 md:grid-cols-12 md:gap-8">
          <div data-reveal className="md:col-span-3">
            <ProfilePhoto className="max-w-[240px] md:max-w-none md:-mt-2.5 md:-ml-2.5" />
          </div>

          <div
            data-reveal
            className="space-y-5 text-base leading-relaxed text-pretty text-muted sm:text-lg md:col-span-6"
          >
            <p>
              Sou <span className="text-fg">Eduardo Uchoa</span>, desenvolvedor e analista de dados. Me formei em
              Análise e Desenvolvimento de Sistemas na UNAMA e, depois, fiz pós-graduação em Inteligência Artificial e
              Aprendizado de Máquina, também na UNAMA.
            </p>
            <p>
              Tenho experiência com desenvolvimento web, backend, APIs, banco de dados, integrações e automação com
              Python, construindo sistemas para empresas. A análise de dados me ajuda a enxergar onde o processo
              realmente trava antes de propor qualquer solução.
            </p>
            <p>
              O que mais me motiva é pegar uma tarefa que consome horas de alguém, com planilha, copia e cola e
              retrabalho, e transformar em algo que simplesmente funciona. De preferência, construído junto com quem
              vai usar.
            </p>
          </div>

          <dl data-reveal className="self-start border-t border-line md:col-span-3">
            {facts.map((fact) => (
              <div key={fact.label} className="border-b border-line py-4">
                <dt className="font-mono text-[11px] tracking-wide text-subtle uppercase">{fact.label}</dt>
                <dd className="mt-1.5 text-sm leading-snug text-fg">
                  {fact.value}
                  {fact.detail ? <span className="text-muted"> — {fact.detail}</span> : null}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
