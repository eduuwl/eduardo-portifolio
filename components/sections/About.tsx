import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function About() {
  return (
    <Section id="sobre" className="border-t border-line py-24 sm:py-32">
      <SectionHeader id="sobre" title="Sobre nós" lead="Uma startup paraense de tecnologia." />

      <div data-reveal className="mt-12 max-w-3xl space-y-5 text-lg leading-relaxed text-pretty text-muted">
        <p>
          A Noteron nasceu no Pará para resolver um problema que a gente vê todo dia: empresas com bons produtos e boas
          equipes, mas presas a planilhas, retrabalho e processos feitos na mão.
        </p>
        <p>
          Nosso trabalho começa olhando essa rotina de perto. Entendemos para onde o tempo está indo e construímos a
          ferramenta certa para o caso, seja um site, um sistema interno, uma integração ou uma automação com IA.
        </p>
        <p>
          A Amazônia tem talento e potencial de sobra para inovar. Queremos que a tecnologia feita aqui chegue a quem
          mais precisa dela, com atendimento próximo e soluções que fazem sentido para a realidade da região.
        </p>
      </div>
    </Section>
  );
}
