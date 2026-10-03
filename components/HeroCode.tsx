"use client";

import { useEffect, useState } from "react";
import { processSteps } from "@/data/content";

type Token = { t: string; c?: "kw" | "fn" | "var" | "com" | "punc" };

/* Pseudocódigo que descreve o processo de trabalho, linha a linha.
   `step` liga a linha à etapa correspondente em processSteps. */
const lines: { tokens: Token[]; step?: number }[] = [
  { tokens: [{ t: "# processo, não só código", c: "com" }] },
  {
    tokens: [
      { t: "def ", c: "kw" },
      { t: "resolver", c: "fn" },
      { t: "(problema):", c: "punc" },
    ],
  },
  {
    step: 0,
    tokens: [
      { t: "    contexto", c: "var" },
      { t: " = ", c: "punc" },
      { t: "entender", c: "fn" },
      { t: "(problema)", c: "punc" },
    ],
  },
  {
    step: 1,
    tokens: [
      { t: "    plano", c: "var" },
      { t: " = ", c: "punc" },
      { t: "planejar", c: "fn" },
      { t: "(contexto)", c: "punc" },
    ],
  },
  {
    step: 2,
    tokens: [
      { t: "    solucao", c: "var" },
      { t: " = ", c: "punc" },
      { t: "desenvolver", c: "fn" },
      { t: "(plano)", c: "punc" },
    ],
  },
  {
    step: 3,
    tokens: [
      { t: "    while not ", c: "kw" },
      { t: "validado", c: "fn" },
      { t: "(solucao):", c: "punc" },
    ],
  },
  {
    step: 3,
    tokens: [
      { t: "        solucao", c: "var" },
      { t: " = ", c: "punc" },
      { t: "refinar", c: "fn" },
      { t: "(feedback())", c: "punc" },
    ],
  },
  {
    step: 4,
    tokens: [
      { t: "    return ", c: "kw" },
      { t: "entregar", c: "fn" },
      { t: "(solucao)", c: "punc" },
    ],
  },
];

const tokenClass: Record<NonNullable<Token["c"]>, string> = {
  kw: "text-accent",
  fn: "text-fg",
  var: "text-muted",
  com: "text-subtle italic",
  punc: "text-subtle",
};

const STEP_MS = 2400;

export function HeroCode() {
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches || paused) return;

    const id = window.setInterval(() => {
      setStep((s) => (s + 1) % processSteps.length);
    }, STEP_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  const current = processSteps[step];

  return (
    <figure
      className="relative w-full overflow-hidden rounded-2xl border border-line bg-surface/80 shadow-[0_40px_120px_-40px_rgb(0_0_0/0.8)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <div className="flex items-center gap-2 font-mono text-xs text-muted">
          <span aria-hidden className="size-1.5 rounded-full bg-accent anim-pulse" />
          resolver.py
        </div>
        <span className="font-mono text-[11px] text-subtle">python</span>
      </div>

      <p className="sr-only">
        Pseudocódigo em Python que descreve meu processo: entender o problema, planejar, desenvolver, refinar com
        feedback até validar e entregar.
      </p>
      <pre aria-hidden className="overflow-x-auto py-4 font-mono text-[12px] leading-7 sm:text-[13px]">
        <code>
          {lines.map((line, i) => {
            const isActive = line.step === step;
            return (
              <span
                key={i}
                className={`relative flex pr-6 transition-colors duration-500 ${
                  isActive ? "bg-accent/[0.07]" : ""
                }`}
              >
                <span
                  aria-hidden
                  className={`absolute inset-y-0 left-0 w-0.5 transition-colors duration-500 ${
                    isActive ? "bg-accent" : "bg-transparent"
                  }`}
                />
                <span aria-hidden className="w-10 shrink-0 pr-4 text-right text-subtle/70 select-none">
                  {i + 1}
                </span>
                <span className="whitespace-pre">
                  {line.tokens.map((tok, j) => (
                    <span key={j} className={tok.c ? tokenClass[tok.c] : undefined}>
                      {tok.t}
                    </span>
                  ))}
                </span>
              </span>
            );
          })}
        </code>
      </pre>

      <figcaption aria-hidden className="border-t border-line px-4 py-3">
        <div className="flex items-center justify-between gap-4 font-mono text-[11px]">
          <span className="text-muted">
            <span className="text-accent">{current.number}</span>
            <span className="text-subtle"> / 05 · </span>
            {current.title.toLowerCase()}
            <span aria-hidden className="ml-0.5 inline-block text-accent anim-caret">
              _
            </span>
          </span>
          <ol className="flex gap-1">
            {processSteps.map((s, i) => (
              <li
                key={s.number}
                className={`h-1 w-5 rounded-full transition-colors duration-500 ${
                  i <= step ? "bg-accent" : "bg-line-strong"
                }`}
              />
            ))}
          </ol>
        </div>
      </figcaption>
    </figure>
  );
}
