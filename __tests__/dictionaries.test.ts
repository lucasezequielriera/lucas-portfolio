import { describe, it, expect } from "vitest";
import { getDictionary, locales, defaultLocale } from "@/lib/dictionaries";

describe("getDictionary", () => {
  it("returns Spanish dictionary for 'es' locale", () => {
    const dict = getDictionary("es");
    expect(dict.nav.location).toBe("Madrid, España");
    expect(dict.meta.title).toContain("Lucas Riera");
  });

  it("returns English dictionary for 'en' locale", () => {
    const dict = getDictionary("en");
    expect(dict.nav.location).toBe("Madrid, Spain");
    expect(dict.meta.title).toContain("Lucas Riera");
  });

  it("returns French dictionary for 'fr' locale", () => {
    const dict = getDictionary("fr");
    expect(dict.nav.location).toBe("Madrid, Espagne");
    expect(dict.meta.title).toContain("Lucas Riera");
  });

  it("falls back to Spanish for unknown locale", () => {
    const dict = getDictionary("it" as never);
    expect(dict.nav.location).toBe("Madrid, España");
  });

  it("has consistent keys across all locales", () => {
    const esDictKeys = getLeafKeys(getDictionary("es"));
    const enDictKeys = getLeafKeys(getDictionary("en"));
    const frDictKeys = getLeafKeys(getDictionary("fr"));
    expect(esDictKeys.sort()).toEqual(enDictKeys.sort());
    expect(esDictKeys.sort()).toEqual(frDictKeys.sort());
  });

  it("locales array contains es, en and fr", () => {
    expect(locales).toContain("es");
    expect(locales).toContain("en");
    expect(locales).toContain("fr");
    expect(locales).toHaveLength(3);
  });

  it("default locale is es", () => {
    expect(defaultLocale).toBe("es");
  });

  it("description functions return strings with years", () => {
    const dict = getDictionary("es");
    const desc = dict.meta.description(5);
    expect(desc).toContain("5");
    expect(typeof desc).toBe("string");
  });

  it("footer rights function includes year", () => {
    const dict = getDictionary("en");
    const rights = dict.footer.rights(2026);
    expect(rights).toContain("2026");
    expect(rights).toContain("Lucas Riera");
  });

  it("all nav keys are non-empty strings", () => {
    for (const locale of locales) {
      const dict = getDictionary(locale);
      for (const [key, value] of Object.entries(dict.nav)) {
        expect(value, `nav.${key} in ${locale}`).toBeTruthy();
        expect(typeof value, `nav.${key} in ${locale}`).toBe("string");
      }
    }
  });
});

function getLeafKeys(obj: Record<string, unknown>, prefix = ""): string[] {
  const keys: string[] = [];
  for (const [k, v] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${k}` : k;
    if (v !== null && typeof v === "object" && !Array.isArray(v)) {
      keys.push(...getLeafKeys(v as Record<string, unknown>, path));
    } else {
      keys.push(path);
    }
  }
  return keys;
}
