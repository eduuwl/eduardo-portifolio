import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  external?: boolean;
};

const base =
  "group inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium transition-[background-color,border-color,color,transform] duration-300 ease-out-soft active:scale-[0.98]";

const variants = {
  primary: "bg-accent text-bg hover:bg-fg",
  ghost: "border border-line-strong text-fg hover:border-fg/60 hover:bg-surface",
};

export function ButtonLink({ href, children, variant = "primary", className = "", external }: ButtonLinkProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
