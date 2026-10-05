import { sectionTitleId, type SectionId } from "@/config/site";
import { cn } from "@/lib/cn";

type SectionProps = {
  id: SectionId;
  /** Substitui o espaçamento vertical padrão */
  className?: string;
  children: React.ReactNode;
};

/** Casca padrão das seções: âncora, rótulo acessível e container. */
export function Section({ id, className = "py-24 sm:py-32", children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={sectionTitleId(id)} className={cn("relative", className)}>
      <div className="container-page">{children}</div>
    </section>
  );
}
