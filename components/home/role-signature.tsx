const ROLE = "AI Product Engineer";

/**
 * The role reads as a line being typed into a terminal rather than a badge:
 * bracketed like the wordmark, letter-spaced wide, with a caret that keeps
 * blinking once the text has landed.
 *
 * Both animations are plain CSS. Driving nineteen letters through the animation
 * library meant nineteen components each running their own loop on the most
 * important page of the site, for an effect keyframes handle on their own — and
 * it lets this stay a server component.
 */
export function RoleSignature({ delay = 0 }: { delay?: number }) {
  const letters = ROLE.split("");
  const perLetter = 0.035;
  const settled = delay + letters.length * perLetter;

  return (
    <div className="flex items-center justify-center gap-2 font-[family-name:var(--font-geist-mono)] text-[0.6rem] uppercase sm:text-[0.7rem]">
      <span className="text-white/25">[</span>

      {/* Splitting the role into one span per letter is what makes the typing
          effect possible, but it also means crawlers and screen readers see
          "A I P r o d u c t". The real string is exposed once here, and the
          animated letters are hidden from the accessibility tree. */}
      <span className="sr-only">{ROLE}</span>

      <span aria-hidden="true" className="flex tracking-[0.34em] text-white/60">
        {letters.map((char, i) => (
          <span
            key={i}
            className={`animate-role-in ${char === " " ? "w-[0.34em]" : ""}`}
            style={{ animationDelay: `${delay + i * perLetter}s` }}
          >
            {char === " " ? " " : char}
          </span>
        ))}
      </span>

      <span
        aria-hidden="true"
        className="animate-caret -ml-[0.28em] h-[0.95em] w-[2px] bg-cyan-300"
        style={{ animationDelay: `${settled}s` }}
      />

      <span className="text-white/25">]</span>
    </div>
  );
}
