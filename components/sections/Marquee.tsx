import { services } from "@/data/content";

/** Faixa com os serviços rolando sem parar (para ao passar o mouse). */
export function Marquee() {
  const items = services.map((s) => s.title);

  return (
    <div className="marquee overflow-hidden border-y border-line bg-surface/60 py-5">
      {/* A lista aparece duas vezes para o loop não ter emenda; a cópia é ignorada por leitores de tela */}
      <div className="marquee-track flex w-max">
        {[false, true].map((isCopy) => (
          <ul key={String(isCopy)} aria-hidden={isCopy || undefined} className="flex shrink-0 items-center">
            {items.map((item) => (
              <li
                key={item}
                className="heading-brand flex items-center gap-8 pr-8 text-sm whitespace-nowrap text-muted sm:text-base"
              >
                {item}
                <span aria-hidden className="size-1.5 rotate-45 bg-neon shadow-[0_0_8px_var(--color-neon)]" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
