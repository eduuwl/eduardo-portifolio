"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Emblem } from "@/components/brand/Emblem";
import { Wordmark } from "@/components/brand/Wordmark";
import { navItems } from "@/config/site";
import { cn } from "@/lib/cn";

export function Header() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Fundo do header aparece só depois de rolar um pouco
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Destaca no menu a seção visível
  useEffect(() => {
    const targets = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Menu mobile: trava o scroll e fecha com Esc
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        scrolled || open ? "border-line bg-bg/90 backdrop-blur-md" : "border-transparent",
      )}
    >
      {/* Progresso de leitura da página */}
      <span
        aria-hidden
        className="scroll-progress absolute inset-x-0 -bottom-px h-0.5 bg-neon shadow-[0_0_10px_var(--color-neon)]"
      />

      <div className="container-page flex h-16 items-center justify-between gap-6">
        <a href="#inicio" onClick={close} className="flex items-center gap-2.5" aria-label="Noteron, voltar ao início">
          <Emblem sizes="36px" priority className="size-9 object-contain" />
          <Wordmark className="text-base" />
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center font-display text-[11px] font-semibold tracking-[0.14em] uppercase">
            {navItems.map((item, i) => {
              const isActive = active === item.id;
              return (
                <li key={item.id} className="flex items-center">
                  {i > 0 && <span aria-hidden className="h-3 w-px bg-line-strong" />}
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "px-4 py-2 transition-colors",
                      isActive ? "text-neon text-glow" : "text-muted hover:text-fg",
                    )}
                  >
                    {item.nav}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="grid size-10 place-items-center rounded-md text-fg lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Menu móvel"
        hidden={!open}
        className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-bg lg:hidden"
      >
        <ul className="container-page flex flex-col py-6">
          {navItems.map((item) => (
            <li key={item.id} className="border-b border-line">
              <a
                href={`#${item.id}`}
                onClick={close}
                className="heading-brand block py-5 text-lg text-fg transition-colors active:text-neon"
              >
                {item.nav}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
