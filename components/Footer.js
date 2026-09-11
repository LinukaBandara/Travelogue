"use client";

import Link from "next/link";
import { useState } from "react";
import { destinations } from "@/lib/destinations";

const ARK_II_URL = "https://ark-ii.studio";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="border-t border-white/10 bg-steel/40 mt-32">
      <div className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="font-display text-xl text-white mb-3">Travelogue</div>
          <p className="text-sm text-slateSoft leading-relaxed max-w-[240px]">
            A cinematic way to plan a trip — curated destinations, real itineraries, one seamless booking flow.
          </p>
          <a
            href={ARK_II_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-xs font-semibold text-white hover:text-mint transition-colors"
          >
            Crafted by ARK II
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div>
          <div className="text-xs font-semibold text-white mb-4 tracking-wide">Destinations</div>
          <div className="flex flex-col gap-2.5">
            {destinations.slice(0, 5).map((d) => (
              <Link key={d.slug} href={`/destinations/${d.slug}`} className="text-sm text-slateSoft hover:text-mint transition-colors">{d.name}</Link>
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs font-semibold text-white mb-4 tracking-wide">Platform</div>
          <div className="flex flex-col gap-2.5">
            <Link href="/#packages" className="text-sm text-slateSoft hover:text-mint transition-colors">Packages</Link>
            <Link href="/#feeds" className="text-sm text-slateSoft hover:text-mint transition-colors">Cinematic Feeds</Link>
            <Link href="/#about" className="text-sm text-slateSoft hover:text-mint transition-colors">About</Link>
          </div>
        </div>

        <div>
          <div className="text-xs font-semibold text-white mb-4 tracking-wide">Get route ideas</div>
          {subscribed ? (
            <p className="text-sm text-mint">You're on the list.</p>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); if (email.trim()) setSubscribed(true); }} className="flex gap-2">
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" aria-label="Email for route ideas" className="flex-1 min-w-0 rounded-lg bg-arctic border border-white/10 px-3 py-2.5 text-sm text-white placeholder:text-slateSoft/50 focus:outline-none focus:border-mint" />
              <button type="submit" className="rounded-lg bg-mint text-arctic text-sm font-semibold px-4 py-2.5 flex-shrink-0">Join</button>
            </form>
          )}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-5 flex flex-col sm:flex-row justify-between gap-2 text-xs text-slateSoft/70">
          <span>© 2026 Travelogue</span>
          <span>Cinematic trip planning, done properly.</span>
        </div>
      </div>
    </footer>
  );
}
