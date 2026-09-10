const SIZES = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-2xl",
} as const;

/**
 * `[LR.]` — the brackets run larger than the letters so they read as a frame
 * enclosing the monogram rather than as punctuation beside it. Everything is
 * pure white except the period, which carries the single accent.
 */
export function Logo({
  size = "md",
  className = "",
}: {
  size?: keyof typeof SIZES;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex items-center gap-[0.14em] font-[family-name:var(--font-display)] ${SIZES[size]} font-extrabold leading-none tracking-[-0.02em] text-white ${className}`}
    >
      <span className="text-[1.5em] font-medium leading-none">[</span>
      <span>
        LR<span className="text-cyan-300">.</span>
      </span>
      <span className="text-[1.5em] font-medium leading-none">]</span>
    </span>
  );
}
