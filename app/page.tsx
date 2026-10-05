import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PointerGlow } from "@/components/layout/PointerGlow";
import { RevealObserver } from "@/components/layout/RevealObserver";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Process } from "@/components/sections/Process";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Team } from "@/components/sections/Team";
import { Technology } from "@/components/sections/Technology";

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo" tabIndex={-1} className="outline-none">
        <Hero />
        <Marquee />
        <About />
        <Team />
        <Services />
        <Projects />
        <Process />
        <Technology />
        <Contact />
      </main>
      <Footer />
      <RevealObserver />
      <PointerGlow />
    </>
  );
}
