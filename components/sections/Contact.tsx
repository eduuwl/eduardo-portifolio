import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { getContactChannels, type ContactChannelId } from "@/config/site";

const icons: Record<ContactChannelId, React.ComponentType<{ className?: string }>> = {
  whatsapp: MessageCircle,
  email: Mail,
  linkedin: LinkedinIcon,
  github: GithubIcon,
};

export function Contact() {
  const channels = getContactChannels();

  return (
    <section
      id="contato"
      aria-labelledby="contato-title"
      className="relative isolate overflow-hidden border-t border-line py-24 sm:py-36"
    >
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid mask-fade opacity-50" />

      <div className="container-page">
        <p data-reveal className="flex items-center gap-3 font-mono text-xs tracking-wide text-muted uppercase">
          <span className="text-accent">06</span>
          <span aria-hidden className="h-px w-8 bg-line-strong" />
          Contato
        </p>

        <h2
          id="contato-title"
          data-reveal
          className="mt-8 max-w-4xl text-[clamp(2.25rem,5.5vw,4.25rem)] leading-[1.02] font-semibold tracking-[-0.04em] text-balance"
        >
          Tem um problema que pode ser resolvido com tecnologia?{" "}
          <span className="text-accent">Vamos conversar.</span>
        </h2>

        <p
          data-reveal
          style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
          className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted"
        >
          Conte o que está tomando tempo da sua equipe ou o que você quer tirar do papel. A gente olha junto e vê qual é
          o caminho mais simples para resolver.
        </p>

        <ul className="mt-14 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {channels.map((channel, i) => {
            const Icon = icons[channel.id];
            const inner = (
              <>
                <span className="flex items-center justify-between">
                  <Icon className="size-5" />
                  {channel.href ? (
                    <ArrowUpRight
                      aria-hidden
                      className="size-4 text-subtle transition-all duration-300 ease-out-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                    />
                  ) : null}
                </span>
                <span className="mt-6 block text-base font-semibold tracking-tight sm:mt-10 sm:text-lg">
                  {channel.label}
                </span>
                <span className="mt-1 block truncate text-sm text-muted">
                  {channel.href ? channel.hint : "Link em breve"}
                </span>
              </>
            );

            return (
              <li
                key={channel.id}
                data-reveal
                style={{ "--reveal-delay": `${120 + i * 60}ms` } as React.CSSProperties}
              >
                {channel.href ? (
                  <a
                    href={channel.href}
                    {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className={`group block h-full rounded-2xl border p-5 transition-colors sm:p-6 duration-300 ${
                      i === 0
                        ? "border-accent/40 bg-accent/[0.06] hover:border-accent"
                        : "border-line bg-surface/60 hover:border-line-strong hover:bg-surface"
                    }`}
                  >
                    {inner}
                  </a>
                ) : (
                  <div
                    aria-disabled="true"
                    className="block h-full cursor-not-allowed rounded-2xl border border-dashed border-line p-5 opacity-60 sm:p-6"
                  >
                    {inner}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
