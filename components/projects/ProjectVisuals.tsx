import { Check } from "lucide-react";
import type { ProjectVisual } from "@/data/content";

/* Ilustrações construídas em CSS/SVG. Representam o fluxo de cada projeto;
   não são capturas de tela dos sistemas. */

const rows = Array.from({ length: 6 }, (_, i) => i);
const barWidths = [
  ["w-16", "w-10"],
  ["w-12", "w-14"],
  ["w-20", "w-8"],
  ["w-14", "w-12"],
  ["w-10", "w-16"],
  ["w-16", "w-9"],
];

export function TiraNotaVisual() {
  return (
    <div aria-hidden className="relative flex flex-col gap-5 p-5 sm:p-7">
      {/* Planilha de entrada */}
      <div className="overflow-hidden rounded-lg border border-line bg-bg/70">
        <div className="flex items-center justify-between border-b border-line px-3 py-2 text-[10px] text-subtle">
          <span>entrada.xlsx</span>
          <span>status</span>
        </div>
        <ul className="divide-y divide-line">
          {rows.map((i) => (
            <li
              key={i}
              className="anim-row flex items-center gap-3 px-3 py-2"
              style={{ "--row-delay": `${i * 0.75}s` }}
            >
              <span className="w-4 text-[10px] text-subtle">{i + 1}</span>
              <span className={`h-1.5 rounded-full bg-line-strong ${barWidths[i][0]}`} />
              <span className={`h-1.5 rounded-full bg-line-strong/70 ${barWidths[i][1]}`} />
              <span
                className="anim-check ml-auto grid size-4 place-items-center rounded-full bg-neon text-bg"
                style={{ "--row-delay": `${i * 0.75}s` }}
              >
                <Check className="size-2.5" strokeWidth={3} />
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Conector */}
      <div className="flex items-center gap-3 px-1 text-[10px] text-subtle">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-line-strong to-line-strong" />
        python · navegador
        <span className="h-px flex-1 bg-gradient-to-l from-transparent via-line-strong to-line-strong" />
      </div>

      {/* Notas emitidas */}
      <div className="relative mx-auto h-24 w-44">
        {[2, 1, 0].map((layer) => (
          <div
            key={layer}
            className="absolute inset-x-0 rounded-md border border-line-strong bg-surface-2 p-3"
            style={{
              top: `${layer * 8}px`,
              transform: `scale(${1 - layer * 0.06})`,
              opacity: 1 - layer * 0.3,
              zIndex: 3 - layer,
            }}
          >
            {layer === 0 ? (
              <div className="anim-doc">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-neon">NFS-e</span>
                  <span className="grid size-3.5 place-items-center rounded-full border border-neon text-neon">
                    <Check className="size-2" strokeWidth={3} />
                  </span>
                </div>
                <div className="mt-3 space-y-1.5">
                  <span className="block h-1 w-3/4 rounded-full bg-line-strong" />
                  <span className="block h-1 w-1/2 rounded-full bg-line-strong" />
                </div>
              </div>
            ) : (
              <div className="h-12" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const labelFont = { fontFamily: "var(--font-display)" };

export function SalesFlowVisual() {
  return (
    <div aria-hidden className="flex items-center justify-center p-5 sm:p-7">
      <svg viewBox="0 0 360 240" className="h-auto w-full max-w-md" fill="none">
        {/* Conexões */}
        <g stroke="var(--color-line-strong)" strokeWidth="1.25">
          <path d="M92 120 H150" className="anim-dash" strokeDasharray="4 8" />
          <path d="M210 108 C240 108 240 62 262 62" className="anim-dash" strokeDasharray="4 8" />
          <path d="M210 132 C240 132 240 178 262 178" className="anim-dash" strokeDasharray="4 8" />
          <path d="M300 196 C300 228 52 228 52 140" strokeDasharray="2 6" opacity="0.7" />
        </g>

        {/* WhatsApp */}
        <g>
          <rect x="12" y="98" width="80" height="44" rx="10" fill="var(--color-bg)" stroke="var(--color-line-strong)" />
          <text x="52" y="124" textAnchor="middle" fontSize="11" fill="var(--color-fg)" style={labelFont}>
            WhatsApp
          </text>
        </g>

        {/* n8n (orquestrador) */}
        <g>
          <rect x="150" y="94" width="60" height="52" rx="12" fill="var(--color-neon)" />
          <text x="180" y="124" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--color-bg)" style={labelFont}>
            n8n
          </text>
        </g>

        {/* Catálogo */}
        <g>
          <rect x="262" y="40" width="86" height="44" rx="10" fill="var(--color-bg)" stroke="var(--color-line-strong)" />
          <text x="305" y="66" textAnchor="middle" fontSize="11" fill="var(--color-fg)" style={labelFont}>
            catálogo
          </text>
        </g>

        {/* IA */}
        <g>
          <rect x="262" y="156" width="86" height="44" rx="10" fill="var(--color-bg)" stroke="var(--color-neon)" />
          <text x="305" y="182" textAnchor="middle" fontSize="11" fill="var(--color-neon)" style={labelFont}>
            IA
          </text>
        </g>

        <text x="176" y="222" textAnchor="middle" fontSize="9" fill="var(--color-subtle)" style={labelFont}>
          resposta ao cliente
        </text>
        <text x="121" y="112" textAnchor="middle" fontSize="8" fill="var(--color-subtle)" style={labelFont}>
          msg
        </text>
        <text x="238" y="80" textAnchor="middle" fontSize="8" fill="var(--color-subtle)" style={labelFont}>
          API
        </text>
      </svg>
    </div>
  );
}

/** Ilustração de cada projeto, indexada por `Project["visual"]`. */
export const projectVisuals: Record<ProjectVisual, React.ComponentType> = {
  tiranota: TiraNotaVisual,
  "sales-flow": SalesFlowVisual,
};
