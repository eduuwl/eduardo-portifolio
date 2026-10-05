import { LinkedinIcon } from "@/components/ui/BrandIcons";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MemberPhoto } from "@/components/team/MemberPhoto";
import { team } from "@/config/site";
import { externalLinkProps } from "@/lib/links";

export function Team() {
  return (
    <Section id="equipe" className="border-t border-line py-24 sm:py-32">
      <SectionHeader id="equipe" title="Equipe" lead="Quem está por trás da Noteron." />

      <ul className="mt-14 grid gap-6 lg:grid-cols-2">
        {team.map((member, i) => (
          <li
            key={member.name}
            data-reveal
            style={{ "--reveal-delay": `${i * 80}ms` }}
            className="group grid gap-6 rounded-lg border border-line bg-surface p-5 transition-[border-color,box-shadow] duration-300 hover:border-neon/50 hover:glow sm:grid-cols-[200px_1fr] sm:p-6"
          >
            <MemberPhoto photo={member.photo} className="max-w-[260px] sm:max-w-none" />

            <div className="flex flex-col">
              <h3 className="font-display text-xl font-semibold">{member.name}</h3>
              <p className="heading-brand mt-1.5 text-[11px] text-leaf">{member.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-pretty text-muted">{member.bio}</p>

              {member.linkedin ? (
                <a
                  href={member.linkedin}
                  {...externalLinkProps}
                  className="mt-auto inline-flex items-center gap-2 self-start pt-6 text-sm text-subtle transition-colors hover:text-neon"
                >
                  <LinkedinIcon className="size-4" />
                  LinkedIn
                  <span className="sr-only"> de {member.name}</span>
                </a>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
