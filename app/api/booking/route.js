import { NextResponse } from "next/server";

const buckets = new Map();
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clientKey(request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}

export async function POST(request) {
  const key = clientKey(request);
  const now = Date.now();
  const recent = (buckets.get(key) || []).filter((time) => now - time < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS) return NextResponse.json({ error: "Too many requests. Please try again shortly." }, { status: 429 });
  recent.push(now);
  buckets.set(key, recent);

  try {
    const body = await request.json();
    const name = typeof body.name === "string" ? body.name.trim().slice(0, 100) : "";
    const email = typeof body.email === "string" ? body.email.trim().slice(0, 254) : "";
    const date = typeof body.date === "string" ? body.date.slice(0, 10) : "";
    const guests = Number(body.guests);
    const destination = typeof body.destination === "string" ? body.destination.trim().slice(0, 60) : "";
    const honeypot = typeof body.website === "string" ? body.website.trim() : "";

    if (honeypot) return NextResponse.json({ ok: true });
    if (!name || !EMAIL_RE.test(email) || !/^\d{4}-\d{2}-\d{2}$/.test(date) || !Number.isInteger(guests) || guests < 1 || guests > 20 || !destination) {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    // No secrets or privileged actions are performed here. A production booking backend should persist this through a protected service.
    return NextResponse.json({ ok: true, message: "Request accepted." });
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }
}
