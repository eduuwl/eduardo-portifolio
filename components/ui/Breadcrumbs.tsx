import Link from "next/link";

export type Crumb = { name: string; href: string };

/** Trilha de navegação visível + acessível. O JSON-LD correspondente é gerado à parte. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Trilha de navegação" className="text-xs text-subtle">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1.5">
              {i > 0 ? <span aria-hidden>/</span> : null}
              {isLast ? (
                <span aria-current="page" className="text-fg">
                  {item.name}
                </span>
              ) : (
                <Link href={item.href} className="transition-colors hover:text-neon">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
