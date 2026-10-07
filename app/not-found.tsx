import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ButtonLink } from "@/components/ui/ButtonLink";

export const metadata: Metadata = {
  title: "Página não encontrada",
  description: "A página que você procura não existe ou foi movida.",
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main
        id="conteudo"
        tabIndex={-1}
        className="container-page flex min-h-dvh flex-col items-center justify-center py-32 text-center outline-none"
      >
        <p className="heading-brand text-xs text-leaf">Erro 404</p>
        <h1 className="mt-4 font-display text-[clamp(2rem,6vw,3.2rem)] font-bold tracking-[-0.02em]">
          Essa página não existe.
        </h1>
        <p className="mt-4 max-w-md text-lg text-muted">
          O endereço pode ter mudado ou nunca existiu. Volte para a página inicial da Noteron.
        </p>
        <ButtonLink href="/" className="mt-10">
          Voltar ao início
        </ButtonLink>
      </main>
      <Footer />
    </>
  );
}
