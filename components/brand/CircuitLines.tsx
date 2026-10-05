import { cn } from "@/lib/cn";

/* Trilhas de circuito, o mesmo motivo que corre por dentro do emblema.
   Puramente decorativo. */
const traces = [
  "M0 60 H140 L170 90 H310",
  "M0 120 H90 L130 160 H260 L290 130 H420",
  "M40 220 H200 L230 190 H360",
  "M0 280 H160 L200 320 H330",
];

const nodes: [number, number][] = [
  [310, 90],
  [420, 130],
  [360, 190],
  [330, 320],
  [140, 60],
  [90, 120],
];

export function CircuitLines({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 440 360" fill="none" aria-hidden className={cn("pointer-events-none", className)}>
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {traces.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <g fill="var(--color-bg)" stroke="currentColor" strokeWidth="1.5">
        {nodes.map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4.5" />
        ))}
      </g>
    </svg>
  );
}
