import { describe, it, expect } from "vitest";
import { rateLimit } from "@/lib/rate-limit";

describe("rateLimit", () => {
  it("allows first request", () => {
    expect(rateLimit("test-ip-1").ok).toBe(true);
  });

  it("allows up to 5 requests from same IP", () => {
    const ip = "test-ip-2";
    for (let i = 0; i < 5; i++) {
      expect(rateLimit(ip).ok).toBe(true);
    }
  });

  it("blocks 6th request from same IP", () => {
    const ip = "test-ip-3";
    for (let i = 0; i < 5; i++) {
      rateLimit(ip);
    }
    expect(rateLimit(ip).ok).toBe(false);
  });

  it("allows requests from different IPs independently", () => {
    expect(rateLimit("ip-a").ok).toBe(true);
    expect(rateLimit("ip-b").ok).toBe(true);
    expect(rateLimit("ip-c").ok).toBe(true);
  });
});
