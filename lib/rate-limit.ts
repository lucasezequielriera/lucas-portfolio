const rateMap = new Map<string, { count: number; resetTime: number }>();

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;

export function rateLimit(ip: string): { ok: boolean } {
  const now = Date.now();
  const entry = rateMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateMap.set(ip, { count: 1, resetTime: now + WINDOW_MS });
    return { ok: true };
  }

  entry.count++;
  if (entry.count > MAX_REQUESTS) return { ok: false };
  return { ok: true };
}
