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

type CircuitLinesProps = {
  className?: string;
  /** Pulsos de "corrente" percorrendo as trilhas */
  animated?: boolean;
};

export function CircuitLines({ className, animated = false }: CircuitLinesProps) {
  return (
    <svg viewBox="0 0 440 360" fill="none" aria-hidden className={cn("pointer-events-none", className)}>
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {traces.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>

      {animated ? (
        <g stroke="var(--color-neon)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {traces.map((d, i) => (
            <path
              key={d}
              d={d}
              pathLength={100}
              className="anim-current"
              strokeDasharray="0 100"
              style={{ "--current-delay": `${i * 0.9}s`, filter: "drop-shadow(0 0 4px var(--color-neon))" }}
            />
          ))}
        </g>
      ) : null}

      <g fill="var(--color-bg)" stroke="currentColor" strokeWidth="1.5">
        {nodes.map(([cx, cy], i) => (
          <circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r="4.5"
            className={animated ? "anim-pulse" : undefined}
            style={animated ? { animationDelay: `${i * 0.4}s` } : undefined}
          />
        ))}
      </g>
    </svg>
  );
}
