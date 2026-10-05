import { cn } from "@/lib/cn";

/** O segundo "O" de NOTERON é um símbolo de power, como no logo. */
function PowerO() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      aria-hidden
      className="inline-block h-[0.86em] w-[0.86em] -translate-y-[0.06em] align-middle"
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
      <span className="sr-only">Noteron</span>
      <span aria-hidden className="whitespace-nowrap">
        NOTER
        <PowerO />N
      </span>
    </span>
  );
}
