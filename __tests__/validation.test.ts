import { describe, it, expect } from "vitest";
import {
  escapeHtml,
  validateContactForm,
  EMAIL_RE,
  MAX_NAME,
  MAX_EMAIL,
  MAX_MESSAGE,
  MIN_NAME,
  MIN_MESSAGE,
} from "@/lib/validation";

describe("escapeHtml", () => {
  it("escapes HTML special characters", () => {
    expect(escapeHtml('<script>alert("xss")</script>')).toBe(
      "&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;"
    );
  });

  it("escapes ampersands", () => {
    expect(escapeHtml("a & b")).toBe("a &amp; b");
  });

  it("escapes single quotes", () => {
    expect(escapeHtml("it's")).toBe("it&#039;s");
  });

  it("returns empty string unchanged", () => {
    expect(escapeHtml("")).toBe("");
  });

  it("leaves safe text unchanged", () => {
    expect(escapeHtml("Hello world 123")).toBe("Hello world 123");
  });
});

describe("EMAIL_RE", () => {
  it("matches valid emails", () => {
    expect(EMAIL_RE.test("user@example.com")).toBe(true);
    expect(EMAIL_RE.test("name+tag@sub.domain.org")).toBe(true);
  });

  it("rejects invalid emails", () => {
    expect(EMAIL_RE.test("no-at-sign")).toBe(false);
    expect(EMAIL_RE.test("@no-local.com")).toBe(false);
    expect(EMAIL_RE.test("user@")).toBe(false);
    expect(EMAIL_RE.test("user @space.com")).toBe(false);
  });
});

describe("validateContactForm", () => {
  const valid = { name: "Lucas", email: "a@b.com", message: "Hello world, this is a test message." };

  it("accepts valid input", () => {
    expect(validateContactForm(valid)).toEqual({ valid: true });
  });

  it("rejects empty name", () => {
    const result = validateContactForm({ ...valid, name: "" });
    expect(result.valid).toBe(false);
  });

  it("rejects short name", () => {
    const result = validateContactForm({ ...valid, name: "A" });
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toContain(`${MIN_NAME}`);
  });

  it("rejects too-long name", () => {
    const result = validateContactForm({ ...valid, name: "x".repeat(MAX_NAME + 1) });
    expect(result.valid).toBe(false);
  });

  it("rejects invalid email", () => {
    const result = validateContactForm({ ...valid, email: "bad" });
    expect(result.valid).toBe(false);
  });

  it("rejects too-long email", () => {
    const result = validateContactForm({ ...valid, email: "a@" + "b".repeat(MAX_EMAIL) + ".com" });
    expect(result.valid).toBe(false);
  });

  it("rejects empty message", () => {
    const result = validateContactForm({ ...valid, message: "" });
    expect(result.valid).toBe(false);
  });

  it("rejects short message", () => {
    const result = validateContactForm({ ...valid, message: "hi" });
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toContain(`${MIN_MESSAGE}`);
  });

  it("rejects too-long message", () => {
    const result = validateContactForm({ ...valid, message: "x".repeat(MAX_MESSAGE + 1) });
    expect(result.valid).toBe(false);
  });
});
