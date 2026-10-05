import { Mail, MessageCircle } from "lucide-react";
import { CircuitLines } from "@/components/brand/CircuitLines";
import { Emblem } from "@/components/brand/Emblem";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { HoverArrow } from "@/components/ui/HoverArrow";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getContactChannels, type ContactChannel, type ContactChannelId } from "@/config/site";
import { cn } from "@/lib/cn";
import { externalLinkProps } from "@/lib/links";

const icons: Record<ContactChannelId, React.ComponentType<{ className?: string }>> = {
  whatsapp: MessageCircle,
  email: Mail,
  linkedin: LinkedinIcon,
  github: GithubIcon,
};

export function Contact() {
  const channels = getContactChannels();

  return (
    <Section id="contato" className="isolate overflow-hidden border-t border-line py-24 sm:py-36">
      <CircuitLines className="absolute -right-20 bottom-0 -z-10 w-[560px] -scale-x-100 text-circuit/40 max-md:hidden" />
      <Emblem sizes="420px" className="absolute top-1/2 right-[6%] -z-10 hidden w-[380px] -translate-y-1/2 opacity-[0.12] xl:block" />

      <SectionHeader
        id="contato"
        title="Contato"
        lead={
          <>
            Tem um processo que poderia rodar sozinho? <span className="text-neon text-glow">Vamos conversar.</span>
          </>
        }
      />

      <p data-reveal className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted">
        Conte o que está tomando tempo da sua equipe. A gente responde rápido e, se fizer sentido, monta uma proposta sem
        compromisso.
      </p>

      <ul className="mt-12 grid max-w-4xl grid-cols-2 gap-3 lg:grid-cols-4">
        {channels.map((channel, i) => (
          <li key={channel.id} data-reveal style={{ "--reveal-delay": `${100 + i * 60}ms` }}>
            {/* O primeiro canal é o preferido e ganha destaque */}
            <ContactCard channel={channel} highlighted={i === 0} />
          </li>
        ))}
      </ul>
    </Section>
  );
}

function ContactCard({ channel, highlighted }: { channel: ContactChannel; highlighted: boolean }) {
  const Icon = icons[channel.id];

  const content = (
    <>
      <span className="flex items-center justify-between">
        <Icon className={cn("size-5", highlighted ? "text-neon" : "text-leaf")} />
        {channel.href ? <HoverArrow className="size-4" /> : null}
      </span>
      <span className="mt-8 block font-display text-base font-semibold">{channel.label}</span>
      <span className="mt-1 block truncate text-sm text-muted">{channel.href ? channel.hint : "Link em breve"}</span>
    </>
  );

  if (!channel.href) {
    return (
      <div
        aria-disabled="true"
        className="block h-full cursor-not-allowed rounded-lg border border-dashed border-line p-5 opacity-60"
      >
        {content}
      </div>
    );
  }

  return (
    <a
      href={channel.href}
      {...(channel.external ? externalLinkProps : {})}
      className={cn(
        "group block h-full rounded-lg border bg-surface p-5 transition-[border-color,box-shadow] duration-300",
        highlighted ? "border-neon/60 glow" : "border-line hover:border-neon/50 hover:glow",
      )}
    >
      {content}
    </a>
  );
}
