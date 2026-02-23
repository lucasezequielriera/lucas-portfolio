import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("resend", () => ({
  Resend: vi.fn().mockImplementation(() => ({
    emails: {
      send: vi.fn().mockResolvedValue({ data: { id: "test-id" }, error: null }),
    },
  })),
}));

import { POST } from "@/app/api/contact/route";
import { NextRequest } from "next/server";

function makeReq(body: Record<string, unknown>) {
  return new NextRequest("http://localhost/api/contact", {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });
}

beforeEach(() => {
  vi.clearAllMocks();
});

describe("POST /api/contact", () => {
  it("returns 400 for missing fields", async () => {
    const res = await POST(makeReq({ name: "", email: "", message: "" }));
    expect(res.status).toBe(400);
    const data = await res.json();
    expect(data.error).toBeDefined();
  });

  it("returns 400 for invalid email", async () => {
    const res = await POST(
      makeReq({ name: "Lucas", email: "not-an-email", message: "Hello world this is a test" })
    );
    expect(res.status).toBe(400);
  });

  it("returns 400 for short message", async () => {
    const res = await POST(
      makeReq({ name: "Lucas", email: "a@b.com", message: "hi" })
    );
    expect(res.status).toBe(400);
  });

  it("silently succeeds when honeypot is filled", async () => {
    const res = await POST(
      makeReq({
        name: "Bot",
        email: "bot@bot.com",
        message: "spam spam spam",
        website: "http://spam.com",
      })
    );
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.success).toBe(true);
  });

  it("sends email for valid input", async () => {
    const res = await POST(
      makeReq({
        name: "Lucas",
        email: "test@example.com",
        message: "Hello, this is a valid test message for the form.",
      })
    );
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.success).toBe(true);
    expect(data.id).toBe("test-id");
  });
});
