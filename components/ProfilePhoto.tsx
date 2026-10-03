import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import { profilePhoto } from "@/config/site";

/* Marcas de corte nos cantos — detalhe técnico em volta da foto */
const corners = [
  "top-0 left-0 border-t border-l",
  "top-0 right-0 border-t border-r",
  "bottom-0 left-0 border-b border-l",
  "bottom-0 right-0 border-b border-r",
];

export function ProfilePhoto({ className = "" }: { className?: string }) {
  // Componente de servidor: verifica no build se a foto já foi adicionada em /public
  const hasPhoto = existsSync(join(process.cwd(), "public", profilePhoto.src));

  return (
    <figure className={`group relative p-2.5 ${className}`}>
      {corners.map((pos) => (
        <span
          key={pos}
          aria-hidden
          className={`absolute size-4 border-line-strong transition-colors duration-500 group-hover:border-accent ${pos}`}
        />
      ))}

      <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-line bg-surface">
        {hasPhoto ? (
          <Image
            src={profilePhoto.src}
            alt={profilePhoto.alt}
            fill
            sizes="(min-width: 768px) 25vw, 240px"
            className="object-cover grayscale-[35%] transition-[filter,transform] duration-700 ease-out-soft group-hover:scale-[1.02] group-hover:grayscale-0"
          />
        ) : (
          <div className="grid h-full place-items-center bg-grid [background-size:24px_24px]">
            <div className="text-center">
              <span className="font-mono text-3xl font-semibold text-accent">eu</span>
              <p className="mt-2 font-mono text-[10px] text-subtle">foto em breve</p>
            </div>
          </div>
        )}
      </div>
    </figure>
  );
}
