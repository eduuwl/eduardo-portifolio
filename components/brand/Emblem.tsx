import Image from "next/image";
import emblem from "@/public/brand/emblem.webp";

type EmblemProps = {
  className?: string;
  /** Tamanhos para o next/image escolher a resolução certa */
  sizes: string;
  priority?: boolean;
  /** Vazio quando o emblema é só decorativo (ao lado do nome da marca, por exemplo) */
  alt?: string;
};

/** Emblema da Noteron: guardião da floresta segurando a folha e a seta de circuito. */
export function Emblem({ className, sizes, priority, alt = "" }: EmblemProps) {
  return <Image src={emblem} alt={alt} sizes={sizes} priority={priority} className={className} />;
}
