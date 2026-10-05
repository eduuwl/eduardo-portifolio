"use client";

import { useEffect } from "react";
import { SPLASH_DONE_EVENT } from "@/components/layout/SplashScreen";

/**
 * Observa todos os elementos com [data-reveal] e marca [data-shown] quando
 * entram na viewport. A animação em si é CSS (globals.css), e só acontece
 * quando há JS e o usuário não pediu menos movimento.
 * Enquanto a tela de loading estiver aberta, espera ela sair.
 */
export function RevealObserver() {
  useEffect(() => {
    let observer: IntersectionObserver | undefined;

    const start = () => {
      const elements = [...document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-shown])")];

      if (!("IntersectionObserver" in window)) {
        elements.forEach((el) => el.setAttribute("data-shown", ""));
        return;
      }

      // O que já está na tela aparece na hora, sem esperar o primeiro callback
      // do observer (que pode atrasar logo depois da tela de loading sair).
      const fold = window.innerHeight * 0.92;
      const pending = elements.filter((el) => {
        const { top, bottom } = el.getBoundingClientRect();
        if (top < fold && bottom > 0) {
          el.setAttribute("data-shown", "");
          return false;
        }
        return true;
      });

      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.setAttribute("data-shown", "");
              observer?.unobserve(entry.target);
            }
          }
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
      );

      pending.forEach((el) => observer?.observe(el));
    };

    if (document.documentElement.classList.contains("splash-on")) {
      window.addEventListener(SPLASH_DONE_EVENT, start, { once: true });
    } else {
      start();
    }

    return () => {
      window.removeEventListener(SPLASH_DONE_EVENT, start);
      observer?.disconnect();
    };
  }, []);

  return null;
}
