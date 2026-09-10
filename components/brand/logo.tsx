import Image from "next/image";

// Ratio of the exported artwork (brand/logo.svg), used to derive the width.
const RATIO = 380.9 / 229.3;

const HEIGHTS = {
  sm: 20,
  md: 26,
  lg: 44,
} as const;

/**
 * The wordmark is served as the exported SVG rather than re-typeset in the
 * browser, so the site and the files in `brand/` can never drift apart — and the
 * display face no longer has to be downloaded just to render it.
 */
export function Logo({
  size = "md",
  className = "",
  priority = false,
}: {
  size?: keyof typeof HEIGHTS;
  className?: string;
  priority?: boolean;
}) {
  const height = HEIGHTS[size];
  return (
    <Image
      src="/brand/logo.svg"
      alt="Lucas Riera"
      width={Math.round(height * RATIO)}
      height={height}
      priority={priority}
      className={className}
    />
  );
}
