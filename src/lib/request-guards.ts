import { NextResponse } from 'next/server';

const rateLimitBuckets = new Map<string, { count: number; resetAt: number }>();

function normalizeOrigin(origin: string | null): string | null {
  if (!origin) {
    return null;
  }

  try {
    return new URL(origin).origin;
  } catch {
    return null;
  }
}

function getRequestOrigin(request: Request): string | null {
  const originHeader = normalizeOrigin(request.headers.get('origin'));
  if (originHeader) {
    return originHeader;
  }

  return normalizeOrigin(request.headers.get('referer'));
}

function getAllowedOrigins(request: Request): string[] {
  const configuredOrigins = [process.env.NEXT_PUBLIC_SITE_URL, process.env.SITE_URL]
    .map((value) => normalizeOrigin(value ?? null))
    .filter((value): value is string => Boolean(value));

  if (configuredOrigins.length > 0) {
    return Array.from(new Set(configuredOrigins));
  }

  const host = request.headers.get('host');
  if (!host) {
    return [];
  }

  const proto = request.headers.get('x-forwarded-proto') ?? 'https';
  return [`${proto}://${host}`];
}

function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0]?.trim() ?? 'unknown';
  }

  return request.headers.get('x-real-ip') ?? 'unknown';
}

function pruneRateLimitBuckets(now: number) {
  if (rateLimitBuckets.size < 2000) {
    return;
  }

  for (const [key, entry] of rateLimitBuckets.entries()) {
    if (entry.resetAt <= now) {
      rateLimitBuckets.delete(key);
    }
  }
}

export function enforceSameOrigin(request: Request) {
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  const requestOrigin = getRequestOrigin(request);
  const allowedOrigins = getAllowedOrigins(request);
  if (!requestOrigin || !allowedOrigins.includes(requestOrigin)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  return null;
}

export function enforceRateLimit(
  request: Request,
  routeKey: string,
  maxRequests: number,
  windowMs: number,
) {
  const now = Date.now();
  pruneRateLimitBuckets(now);

  const key = `${routeKey}:${getClientIp(request)}`;
  const current = rateLimitBuckets.get(key);

  if (!current || current.resetAt <= now) {
    rateLimitBuckets.set(key, { count: 1, resetAt: now + windowMs });
    return null;
  }

  if (current.count >= maxRequests) {
    const retryAfter = Math.max(1, Math.ceil((current.resetAt - now) / 1000));
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      {
        status: 429,
        headers: { 'Retry-After': String(retryAfter) },
      },
    );
  }

  current.count += 1;
  return null;
}

export function isFilled(value: unknown): boolean {
  return typeof value === 'string' && value.trim().length > 0;
}
