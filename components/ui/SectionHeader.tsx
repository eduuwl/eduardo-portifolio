type SectionHeaderProps = {
  /** Índice da seção, ex.: "02" */
  index: string;
  label: string;
  /** id usado em aria-labelledby da <section> */
  titleId: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
};

export function SectionHeader({ index, label, titleId, title, intro }: SectionHeaderProps) {
  return (
    <header className="grid gap-6 md:grid-cols-12 md:gap-8">
      <p
        data-reveal
        className="flex items-center gap-3 self-start font-mono text-xs tracking-wide text-muted uppercase md:col-span-3 md:pt-4"
      >
        <span className="text-accent">{index}</span>
        <span aria-hidden className="h-px w-8 bg-line-strong" />
        {label}
      </p>
      <div className="md:col-span-9">
        <h2
          id={titleId}
          data-reveal
          className="max-w-3xl text-[clamp(1.875rem,4vw,3rem)] leading-[1.08] font-semibold tracking-[-0.03em] text-balance"
        >
          {title}
        </h2>
        {intro ? (
          <p
            data-reveal
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
            className="mt-5 max-w-2xl text-base leading-relaxed text-pretty text-muted sm:text-lg"
          >
            {intro}
          </p>
        ) : null}
      </div>
    </header>
  );
}
