import { existsSync } from "node:fs";
import { join } from "node:path";

/**
 * Verifica no build se um arquivo existe em /public.
 * Só pode ser usado em componentes de servidor.
 */
export function publicFileExists(src: string) {
  return existsSync(join(process.cwd(), "public", src));
}
