// La identidad del sitio es monocroma: el color lo aportan los logos de cada
// producto, no la interfaz. Todas las claves comparten el mismo tratamiento
// neutro y se conservan sólo para no romper los tipos de `Project.color`.
const NEUTRAL = {
  border: "hover:border-white/25",
  shadow: "hover:shadow-white/5",
  gradient: "from-white/[0.04]",
  iconBorder: "group-hover:border-white/30 group-hover:text-white",
  tag: "border-white/10 text-white/50",
  icon: "text-white/70",
  badge: "border-white/15 bg-white/[0.06] text-white/70",
  heading: "text-cyan-300/80",
  accent: "bg-white/40",
  accentLight: "bg-white/10 text-white/70",
  glow: "shadow-white/5",
  ctaBg: "bg-white hover:bg-white/90 text-black",
} as const;

export const colorMap = {
  emerald: NEUTRAL, sky: NEUTRAL, violet: NEUTRAL,
  amber: NEUTRAL, rose: NEUTRAL, kolibri: NEUTRAL,
} as const;

export const iconColors = {
  emerald: NEUTRAL.icon, sky: NEUTRAL.icon, violet: NEUTRAL.icon,
  amber: NEUTRAL.icon, rose: NEUTRAL.icon, kolibri: NEUTRAL.icon,
} as const;

export const colorStyles = colorMap;
export const colorConfig = colorMap;

export type ProjectColor = keyof typeof colorMap;
