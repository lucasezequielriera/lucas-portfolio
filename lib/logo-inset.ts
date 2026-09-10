import type { Project } from "./projects";

/** Padding used inside the square logo chips, per box size. */
const INSET = {
  default: { sm: "p-1", md: "p-1.5", lg: "p-2" },
  roomy: { sm: "p-2", md: "p-3", lg: "p-3.5" },
} as const;

export function logoInsetClass(
  project: Pick<Project, "logoInset">,
  size: "sm" | "md" | "lg"
) {
  return INSET[project.logoInset ?? "default"][size];
}
