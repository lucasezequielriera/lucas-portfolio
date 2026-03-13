import { describe, it, expect } from "vitest";
import { locales, defaultLocale } from "@/lib/dictionaries";

describe("i18n config", () => {
  it("exports configured locales", () => {
    expect(locales).toContain("es");
    expect(locales).toContain("en");
    expect(locales).toContain("fr");
    expect(locales.length).toBe(3);
  });

  it("defaults to Spanish", () => {
    expect(defaultLocale).toBe("es");
  });

  it("locale slugs are lowercase two-letter codes", () => {
    for (const l of locales) {
      expect(l).toMatch(/^[a-z]{2}$/);
    }
  });
});
