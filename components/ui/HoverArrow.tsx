import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

/** Seta ↗ que se desloca e acende ao passar o mouse sobre o `.group` pai. */
export function HoverArrow({ className }: { className?: string }) {
  return (
    <ArrowUpRight
      aria-hidden
      className={cn(
        "shrink-0 text-subtle transition-[color,translate] duration-300 ease-out-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-neon",
        className,
      )}
    />
  );
}
