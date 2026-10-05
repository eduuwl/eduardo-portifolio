"use client";

import { useEffect } from "react";

/**
 * Passa a posição do mouse para o card com [data-spotlight] sob o cursor
 * (variáveis --mx/--my). O brilho em si é CSS, em globals.css.
 * Um único listener na página inteira, em vez de um por card.
 */
export function PointerGlow() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover)").matches) return;

    const onMove = (e: PointerEvent) => {
      const card = (e.target as Element | null)?.closest<HTMLElement>("[data-spotlight]");
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      card.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);

  return null;
}
