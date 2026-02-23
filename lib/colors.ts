export const colorMap = {
  emerald: {
    border: "hover:border-emerald-500/40",
    shadow: "hover:shadow-emerald-500/5",
    gradient: "from-emerald-500/[0.03]",
    iconBorder:
      "group-hover:border-emerald-500/50 group-hover:text-emerald-400",
  },
  sky: {
    border: "hover:border-sky-500/40",
    shadow: "hover:shadow-sky-500/5",
    gradient: "from-sky-500/[0.03]",
    iconBorder: "group-hover:border-sky-500/50 group-hover:text-sky-400",
  },
  violet: {
    border: "hover:border-violet-500/40",
    shadow: "hover:shadow-violet-500/5",
    gradient: "from-violet-500/[0.03]",
    iconBorder:
      "group-hover:border-violet-500/50 group-hover:text-violet-400",
  },
  amber: {
    border: "hover:border-amber-500/40",
    shadow: "hover:shadow-amber-500/5",
    gradient: "from-amber-500/[0.03]",
    iconBorder: "group-hover:border-amber-500/50 group-hover:text-amber-400",
  },
  rose: {
    border: "hover:border-rose-500/40",
    shadow: "hover:shadow-rose-500/5",
    gradient: "from-rose-500/[0.03]",
    iconBorder: "group-hover:border-rose-500/50 group-hover:text-rose-400",
  },
} as const;

export const iconColors = {
  emerald: "text-emerald-400",
  sky: "text-sky-400",
  violet: "text-violet-400",
  amber: "text-amber-400",
  rose: "text-rose-400",
} as const;

export const colorStyles = {
  emerald: {
    border: "hover:border-emerald-500/40",
    shadow: "hover:shadow-emerald-500/5",
    gradient: "from-emerald-500/[0.03]",
    iconBorder:
      "group-hover:border-emerald-500/50 group-hover:text-emerald-400",
    tag: "border-emerald-500/20 text-emerald-400/80",
    icon: "text-emerald-400",
  },
  sky: {
    border: "hover:border-sky-500/40",
    shadow: "hover:shadow-sky-500/5",
    gradient: "from-sky-500/[0.03]",
    iconBorder: "group-hover:border-sky-500/50 group-hover:text-sky-400",
    tag: "border-sky-500/20 text-sky-400/80",
    icon: "text-sky-400",
  },
  violet: {
    border: "hover:border-violet-500/40",
    shadow: "hover:shadow-violet-500/5",
    gradient: "from-violet-500/[0.03]",
    iconBorder:
      "group-hover:border-violet-500/50 group-hover:text-violet-400",
    tag: "border-violet-500/20 text-violet-400/80",
    icon: "text-violet-400",
  },
  amber: {
    border: "hover:border-amber-500/40",
    shadow: "hover:shadow-amber-500/5",
    gradient: "from-amber-500/[0.03]",
    iconBorder: "group-hover:border-amber-500/50 group-hover:text-amber-400",
    tag: "border-amber-500/20 text-amber-400/80",
    icon: "text-amber-400",
  },
  rose: {
    border: "hover:border-rose-500/40",
    shadow: "hover:shadow-rose-500/5",
    gradient: "from-rose-500/[0.03]",
    iconBorder: "group-hover:border-rose-500/50 group-hover:text-rose-400",
    tag: "border-rose-500/20 text-rose-400/80",
    icon: "text-rose-400",
  },
} as const;

export const colorConfig = {
  emerald: {
    badge: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
    heading: "text-emerald-400",
    accent: "bg-emerald-500",
    accentLight: "bg-emerald-500/10 text-emerald-400",
    tag: "border-emerald-500/20 text-emerald-400/80",
    border: "border-emerald-500/30",
    glow: "shadow-emerald-500/10",
    ctaBg: "bg-emerald-500 hover:bg-emerald-600 text-neutral-950",
  },
  sky: {
    badge: "border-sky-500/30 bg-sky-500/10 text-sky-300",
    heading: "text-sky-400",
    accent: "bg-sky-500",
    accentLight: "bg-sky-500/10 text-sky-400",
    tag: "border-sky-500/20 text-sky-400/80",
    border: "border-sky-500/30",
    glow: "shadow-sky-500/10",
    ctaBg: "bg-sky-500 hover:bg-sky-600 text-neutral-950",
  },
  violet: {
    badge: "border-violet-500/30 bg-violet-500/10 text-violet-300",
    heading: "text-violet-400",
    accent: "bg-violet-500",
    accentLight: "bg-violet-500/10 text-violet-400",
    tag: "border-violet-500/20 text-violet-400/80",
    border: "border-violet-500/30",
    glow: "shadow-violet-500/10",
    ctaBg: "bg-violet-500 hover:bg-violet-600 text-neutral-950",
  },
  amber: {
    badge: "border-amber-500/30 bg-amber-500/10 text-amber-300",
    heading: "text-amber-400",
    accent: "bg-amber-500",
    accentLight: "bg-amber-500/10 text-amber-400",
    tag: "border-amber-500/20 text-amber-400/80",
    border: "border-amber-500/30",
    glow: "shadow-amber-500/10",
    ctaBg: "bg-amber-500 hover:bg-amber-600 text-neutral-950",
  },
  rose: {
    badge: "border-rose-500/30 bg-rose-500/10 text-rose-300",
    heading: "text-rose-400",
    accent: "bg-rose-500",
    accentLight: "bg-rose-500/10 text-rose-400",
    tag: "border-rose-500/20 text-rose-400/80",
    border: "border-rose-500/30",
    glow: "shadow-rose-500/10",
    ctaBg: "bg-rose-500 hover:bg-rose-600 text-neutral-950",
  },
} as const;

export type ProjectColor = keyof typeof colorMap;
