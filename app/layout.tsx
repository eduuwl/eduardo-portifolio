import type { Metadata, Viewport } from "next";
import { DM_Sans, Montserrat } from "next/font/google";
import { SplashScreen } from "@/components/layout/SplashScreen";
import { siteConfig } from "@/config/site";
import { getOrganizationJsonLd, serializeJsonLd } from "@/lib/structured-data";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  creator: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  // Mesmo valor de --color-bg em globals.css
  themeColor: "#111312",
  colorScheme: "dark",
};

/**
 * Roda antes da primeira pintura. Marca que há JS (para as animações de entrada
 * não "piscarem") e liga a tela de loading, a menos que o usuário peça menos
 * movimento. A trava encerra a tela sozinha se algo der errado.
 */
const bootScript = `(function(){
  var d = document.documentElement;
  d.classList.add("js");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  d.classList.add("splash-on");
  setTimeout(function(){
    if (!d.classList.contains("splash-on")) return;
    d.classList.remove("splash-on");
    window.dispatchEvent(new Event("splash:done"));
  }, 5000);
})()`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${dmSans.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Antes da pintura: marca que há JS e liga a tela de loading */}
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(getOrganizationJsonLd()) }}
        />
      </head>
      <body className="min-h-dvh">
        <a
          href="#conteudo"
          className="fixed top-3 left-3 z-[100] -translate-y-20 rounded-md bg-neon px-4 py-2 text-sm font-semibold text-bg transition-transform focus:translate-y-0"
        >
          Pular para o conteúdo
        </a>
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}
