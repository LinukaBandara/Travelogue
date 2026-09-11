"use client";

import Image from "next/image";
import Link from "next/link";
import CinematicHero from "@/components/CinematicHero";
import { destinations } from "@/lib/destinations";
import { useDrawer } from "@/lib/DrawerContext";

export default function Home() {
  const { openDrawer } = useDrawer();

  return (
    <div>
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 pt-6 pb-10">
        <div className="max-w-xl mb-10">
          <div className="text-xs font-semibold text-mint tracking-wide mb-4">SEVEN DESTINATIONS · ONE CINEMATIC ITINERARY</div>
          <h1 className="font-display text-4xl md:text-6xl font-medium leading-tight mb-5">
            Asia, <span className="text-mint">shot</span> like a film.
          </h1>
          <p className="text-slateSoft text-base leading-relaxed mb-8">
            Travelogue plans trips across Japan, Indonesia, Sri Lanka, Thailand, the Maldives, Singapore, and India — timed light, considered routes, and a single coordinator running the whole production.
          </p>
          <div className="flex flex-wrap gap-3">
            <button onClick={() => openDrawer(null)} className="rounded-full bg-mint text-arctic text-sm font-bold px-6 py-3.5">
              Book Trip
            </button>
            <a href="#feeds" className="rounded-full border border-white/15 text-sm font-semibold px-6 py-3.5 hover:border-mint transition-colors">
              Watch the feeds
            </a>
          </div>
        </div>

        <CinematicHero />
      </section>

      {/* BANNER */}
      <section className="relative h-[46vh] my-20">
        <Image
          src="/images/maldives.webp"
          alt="Aerial view of the Maldives islands and lagoon"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-arctic via-arctic/40 to-arctic/10" />
        <div className="relative h-full flex items-end mx-auto max-w-6xl px-6 pb-10">
          <p className="font-display text-2xl md:text-3xl text-white max-w-md">
            Every story on this site started with one seaplane transfer.
          </p>
        </div>
      </section>

      {/* CINEMATIC FEEDS */}
      <section id="feeds" className="mx-auto max-w-6xl px-6 py-10 scroll-mt-28">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="font-display text-2xl md:text-3xl">Cinematic feeds</h2>
          <span className="text-xs text-slateSoft">unedited, on location</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Image src="/images/bangkok.webp" alt="Bangkok street scene" width={800} height={600} sizes="(max-width: 768px) 50vw, 25vw" className="rounded-xl w-full h-48 object-cover col-span-2 md:col-span-1" />
          <Image src="/images/singapore.webp" alt="Singapore city scene" width={800} height={600} sizes="(max-width: 768px) 50vw, 25vw" className="rounded-xl w-full h-48 object-cover" />
          <Image src="/images/srilanka.webp" alt="Sri Lankan landscape" width={800} height={600} sizes="(max-width: 768px) 50vw, 25vw" className="rounded-xl w-full h-48 object-cover" />
          <Image src="/images/india.webp" alt="Indian travel scene" width={800} height={600} sizes="(max-width: 768px) 50vw, 25vw" className="rounded-xl w-full h-48 object-cover" />
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="mx-auto max-w-6xl px-6 py-20 scroll-mt-28">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="font-display text-2xl md:text-3xl">Every destination, priced</h2>
        </div>
        <div className="border-t border-white/10">
          {destinations.map((d) => (
            <div key={d.slug} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-6 border-b border-white/10">
              <div className="max-w-md">
                <Link href={`/destinations/${d.slug}`} className="text-lg font-semibold hover:text-mint transition-colors">
                  {d.name}, {d.country}
                </Link>
                <p className="text-sm text-slateSoft mt-1">{d.tagline}</p>
              </div>
              <div className="flex items-center gap-5 flex-shrink-0">
                <span className="text-sm text-slateSoft">{d.duration}</span>
                <span className="font-semibold">${d.price.toLocaleString()}</span>
                <button
                  onClick={() => openDrawer(d)}
                  className="rounded-full border border-white/15 text-xs font-semibold px-4 py-2 hover:border-mint hover:text-mint transition-colors"
                >
                  Book
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-20 scroll-mt-28 border-t border-white/10">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-xs font-semibold text-mint tracking-wide mb-4">ABOUT TRAVELOGUE</p>
            <h2 className="font-display text-3xl md:text-4xl leading-tight">A trip should feel like a story, not a spreadsheet.</h2>
          </div>
          <div className="text-sm text-slateSoft leading-relaxed space-y-4">
            <p>Travelogue turns carefully selected destinations into considered, day-by-day journeys. Each route is built around pace, place, timing, and the moments worth remembering.</p>
            <p>Choose a destination, explore the itinerary, then send a request. A coordinator reviews the details before anything is confirmed.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
