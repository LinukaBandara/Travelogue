"use client";

import CinematicHero from "@/components/CinematicHero";
import { useDrawer } from "@/lib/DrawerContext";

export default function Home() {
  const { openDrawer } = useDrawer();

  return (
    <section className="mx-auto max-w-6xl px-4 md:px-6 pt-6 pb-16">
      <div className="max-w-xl mb-10">
        <div className="text-xs font-semibold text-mint tracking-wide mb-4">
          SEVEN DESTINATIONS · ONE CINEMATIC ITINERARY
        </div>
        <h1 className="font-display text-4xl md:text-6xl font-medium leading-tight mb-5">
          Asia, <span className="text-mint">shot</span> like a film.
        </h1>
        <p className="text-slateSoft text-base leading-relaxed mb-8">
          Travelogue plans trips across Japan, Indonesia, Sri Lanka, Thailand,
          the Maldives, Singapore, and India — timed light, considered routes,
          and a single coordinator running the whole production.
        </p>
        <button
          onClick={() => openDrawer(null)}
          className="rounded-full bg-mint text-arctic text-sm font-bold px-6 py-3.5 hover:bg-white transition-colors"
        >
          Book Trip
        </button>
      </div>

      {/* Original cinematic expanding cards — intentionally preserved. */}
      <CinematicHero />
    </section>
  );
}
