import { sectionTitleId, type SectionId } from "@/config/site";
import { cn } from "@/lib/cn";

type SectionHeaderProps = {
  id: SectionId;
  title: string;
  lead?: React.ReactNode;
  className?: string;
};

/** Título em caixa alta com um fio embaixo, como no manual da marca. */
export function SectionHeader({ id, title, lead, className }: SectionHeaderProps) {
  return (
    <header data-reveal className={cn("max-w-3xl", className)}>
      <h2 id={sectionTitleId(id)} className="heading-brand text-sm text-fg sm:text-base">
        {title}
      </h2>
      <span aria-hidden className="mt-4 block h-px w-full max-w-md bg-gradient-to-r from-line-strong to-transparent" />
      {lead ? (
        <p className="mt-6 font-display text-2xl leading-snug font-semibold text-balance text-fg sm:text-[2rem]">
          {lead}
        </p>
      ) : null}
    </header>
  );
}
