import { Github, Linkedin, Instagram } from "lucide-react";

const LINKS = [
  { href: "https://github.com/lucasezequielriera", label: "GitHub", Icon: Github },
  { href: "https://linkedin.com/in/lucasezequielriera", label: "LinkedIn", Icon: Linkedin },
  { href: "https://instagram.com/lucasezequielriera", label: "Instagram", Icon: Instagram },
] as const;

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <nav aria-label="Redes sociales" className={`flex items-center gap-2 ${className}`}>
      {LINKS.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl transition hover:border-white/30 hover:bg-white/[0.08]"
        >
          <Icon className="h-[1.05rem] w-[1.05rem] text-white/50 transition group-hover:text-white" />
        </a>
      ))}
    </nav>
  );
}
