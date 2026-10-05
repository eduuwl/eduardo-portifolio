"use client";

import { useEffect, useState } from "react";
import { Emblem } from "@/components/brand/Emblem";
import { Wordmark } from "@/components/brand/Wordmark";
import { siteConfig } from "@/config/site";

/** Tempo mínimo na tela, para a animação de "acender" chegar ao fim */
const MIN_VISIBLE_MS = 1500;
/** Depois do fade (globals.css), o nó sai do DOM */
const FADE_MS = 700;

export const SPLASH_DONE_EVENT = "splash:done";

/**
 * Tela de loading. Vem no HTML inicial (aparece antes de qualquer JS) e é
 * controlada pela classe .splash-on no <html>, colocada pelo script inline
 * do layout. O próprio script tem uma trava que encerra a tela sozinha.
 */
export function SplashScreen() {
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    // Desligada (menos movimento) ou já encerrada pela trava: só sai do DOM
    const active = root.classList.contains("splash-on");

    let waitTimer: number | undefined;
    let fadeTimer: number | undefined;
    const finish = () => {
      const wait = active ? Math.max(0, MIN_VISIBLE_MS - performance.now()) : 0;
      waitTimer = window.setTimeout(() => {
        if (root.classList.contains("splash-on")) {
          root.classList.remove("splash-on");
          window.dispatchEvent(new Event(SPLASH_DONE_EVENT));
        }
        fadeTimer = window.setTimeout(() => setMounted(false), FADE_MS);
      }, wait);
    };

    if (!active || document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });

    return () => {
      window.removeEventListener("load", finish);
      window.clearTimeout(waitTimer);
      window.clearTimeout(fadeTimer);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="splash" aria-hidden>
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="anim-glow absolute inset-[15%] -z-10 rounded-full bg-neon/20 blur-[50px]" />
          <Emblem sizes="140px" priority className="splash-emblem h-auto w-[120px] sm:w-[140px]" />
        </div>
        <Wordmark glow className="splash-wordmark mt-6 text-2xl sm:text-3xl" />
        <p className="splash-wordmark mt-2 font-display text-[10px] font-medium tracking-[0.2em] text-subtle uppercase">
          {siteConfig.tagline}
        </p>
        <div className="mt-8 h-px w-40 overflow-hidden bg-line-strong">
          <div className="splash-bar h-full w-full bg-neon shadow-[0_0_10px_var(--color-neon)]" />
        </div>
      </div>
    </div>
  );
}
