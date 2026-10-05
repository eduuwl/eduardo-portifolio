import Link from "next/link";
import { cn } from "@/lib/cn";
import { externalLinkProps } from "@/lib/links";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  external?: boolean;
};

const base =
  "group inline-flex h-12 items-center justify-center gap-2.5 rounded-md px-6 font-display text-xs font-semibold tracking-[0.12em] uppercase transition-[background-color,border-color,color,box-shadow] duration-300";

const variants = {
  primary: "bg-neon text-bg hover:bg-leaf hover:glow",
  outline: "border border-line-strong text-fg hover:border-neon hover:text-neon",
};

export function ButtonLink({ href, children, variant = "primary", className, external }: ButtonLinkProps) {
  const classes = cn(base, variants[variant], className);

  if (external) {
    return (
      <a href={href} {...externalLinkProps} className={classes}>
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
