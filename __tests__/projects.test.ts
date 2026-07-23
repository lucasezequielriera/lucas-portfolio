import { describe, it, expect } from "vitest";
import { projects } from "@/lib/projects";

describe("projects", () => {
  it("has at least one project", () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it("every project has required fields", () => {
    for (const p of projects) {
      expect(p.name).toBeTruthy();
      expect(p.slug).toBeTruthy();
      expect(p.url).toMatch(/^https?:\/\//);
      expect(p.description.es).toBeTruthy();
      expect(p.description.en).toBeTruthy();
      expect(p.longDescription.es).toBeTruthy();
      expect(p.longDescription.en).toBeTruthy();
      expect(p.problem.es).toBeTruthy();
      expect(p.problem.en).toBeTruthy();
      expect(p.solution.es).toBeTruthy();
      expect(p.solution.en).toBeTruthy();
      expect(p.tags.length).toBeGreaterThan(0);
      expect(p.year).toBeGreaterThanOrEqual(2020);
      expect(["emerald", "sky", "violet", "amber", "rose", "kolibri"]).toContain(
        p.color
      );
    }
  });

  it("has unique slugs", () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("media items have valid types", () => {
    for (const p of projects) {
      for (const m of p.media) {
        expect(["image", "video"]).toContain(m.type);
        expect(m.src).toBeTruthy();
      }
    }
  });
});
