import { cn } from "@/lib/cn";

/**
 * O segundo "O" de NOTERON é um símbolo de power, como no logo. O glifo fica por cima
 * da letra real (que segue no texto, só com cor transparente): assim leitores de tela,
 * busca e auditorias de acessibilidade continuam lendo "Noteron" certinho, sem precisar
 * de um texto duplicado em sr-only.
 */
function PowerO() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      aria-hidden
      className="pointer-events-none absolute inset-0 m-auto h-[0.86em] w-[0.86em] -translate-y-[0.06em] text-neon"
    >
      <path d="M17.6 5.9a9 9 0 1 1-11.2 0" />
      <path d="M12 2.6v8.2" />
    </svg>
  );
}

type WordmarkProps = {
  className?: string;
  /** Liga o brilho neon */
  glow?: boolean;
};

export function Wordmark({ className, glow = false }: WordmarkProps) {
  return (
    <span
      className={cn(
        "font-display font-medium tracking-[0.14em] text-neon uppercase",
        glow && "text-glow",
        className,
      )}
    >
      <span className="whitespace-nowrap">
        NOTER
        <span className="relative inline-block text-transparent">
          O
          <PowerO />
        </span>
        N
      </span>
    </span>
  );
}
