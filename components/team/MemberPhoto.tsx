import Image from "next/image";
import { Emblem } from "@/components/brand/Emblem";
import type { TeamMember } from "@/config/site";
import { cn } from "@/lib/cn";
import { publicFileExists } from "@/lib/public-file";

export function MemberPhoto({ photo, className }: { photo: TeamMember["photo"]; className?: string }) {
  // Componente de servidor: verifica no build se a foto já foi adicionada em /public
  const hasPhoto = publicFileExists(photo.src);

  return (
    <div className={cn("relative aspect-[4/5] overflow-hidden rounded-md border border-line bg-bg", className)}>
      {hasPhoto ? (
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(min-width: 640px) 200px, 90vw"
          className="object-cover grayscale-[25%] transition-[filter] duration-700 group-hover:grayscale-0"
        />
      ) : (
        <div className="grid h-full place-items-center p-6">
          <Emblem sizes="160px" className="h-auto w-full opacity-70" />
        </div>
      )}
    </div>
  );
}
