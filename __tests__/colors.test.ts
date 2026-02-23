import { describe, it, expect } from "vitest";
import { colorMap, iconColors, colorStyles, colorConfig } from "@/lib/colors";

describe("color utilities", () => {
  const expectedColors = ["emerald", "sky", "violet", "amber", "rose"];

  it("colorMap has all expected colors", () => {
    for (const c of expectedColors) {
      expect(colorMap).toHaveProperty(c);
      expect(colorMap[c as keyof typeof colorMap].border).toBeTruthy();
    }
  });

  it("iconColors has all expected colors", () => {
    for (const c of expectedColors) {
      expect(iconColors).toHaveProperty(c);
    }
  });

  it("colorStyles has all expected colors with tag and icon", () => {
    for (const c of expectedColors) {
      const style = colorStyles[c as keyof typeof colorStyles];
      expect(style.tag).toBeTruthy();
      expect(style.icon).toBeTruthy();
    }
  });

  it("colorConfig has all expected colors with ctaBg", () => {
    for (const c of expectedColors) {
      const config = colorConfig[c as keyof typeof colorConfig];
      expect(config.ctaBg).toBeTruthy();
      expect(config.badge).toBeTruthy();
    }
  });
});
