"use client";

import Image from "next/image";
import Link from "next/link";
import CinematicHero from "@/components/CinematicHero";
import { useDrawer } from "@/lib/DrawerContext";
import { destinations } from "@/lib/destinations";

const featured = destinations.find((d) => d.slug === "srilanka");
const destinationPreview = destinations.filter((d) => ["kyoto", "bali", "maldives"].includes(d.slug));

export default function Home() {
  const { openDrawer } = useDrawer();

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 md:px-6 pt-6 pb-20">
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

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold text-mint tracking-[0.2em] mb-4">THE TRAVELOGUE WAY</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">Travel should feel effortless.</h2>
            <p className="text-slateSoft mt-5 leading-relaxed">
              We handle the moving pieces so you can stay inside the experience.
              Every route is considered around timing, atmosphere, local detail, and breathing room.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
            {[
              ["01", "Curated routes", "Thoughtful journeys built around places worth slowing down for."],
              ["02", "Local perspective", "The quiet streets, local tables, and moments beyond the obvious checklist."],
              ["03", "One coordinator", "One seamless request flow from the first idea to the final transfer."],
            ].map(([number, title, text]) => (
              <div key={number} className="bg-arctic p-7 md:p-9 min-h-52">
                <span className="text-xs text-mint font-semibold tracking-widest">{number}</span>
                <h3 className="font-display text-2xl mt-8 mb-3">{title}</h3>
                <p className="text-sm text-slateSoft leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <p className="text-xs font-semibold text-mint tracking-[0.2em] mb-4">FEATURED JOURNEY</p>
            <h2 className="font-display text-4xl md:text-5xl">Sri Lanka, in the right light.</h2>
          </div>
          <Link href={`/destinations/${featured.slug}`} className="hidden md:block text-sm font-semibold hover:text-mint transition-colors">
            Explore journey →
          </Link>
        </div>
        <Link href={`/destinations/${featured.slug}`} className="group block relative overflow-hidden rounded-3xl min-h-[460px] md:min-h-[620px]">
          <Image
            src={featured.image}
            alt={`${featured.name}, ${featured.country}`}
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-7 md:p-12">
            <div className="flex flex-wrap gap-3 text-xs text-white/80 mb-4">
              <span>{featured.duration}</span><span>·</span><span>From ${featured.price.toLocaleString()}</span>
            </div>
            <h3 className="font-display text-4xl md:text-6xl text-white mb-3">{featured.name}</h3>
            <p className="max-w-xl text-sm md:text-base text-white/75 leading-relaxed">{featured.tagline}</p>
          </div>
        </Link>
        <Link href={`/destinations/${featured.slug}`} className="md:hidden inline-block mt-5 text-sm font-semibold hover:text-mint">Explore journey →</Link>
      </section>

      <section className="bg-white/[0.02] border-y border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="grid md:grid-cols-4 gap-8 md:gap-4 items-start">
            <div className="md:col-span-2">
              <p className="text-xs font-semibold text-mint tracking-[0.2em] mb-4">HOW IT WORKS</p>
              <h2 className="font-display text-4xl md:text-5xl leading-tight">From first idea to final frame.</h2>
            </div>
            {[
              ["01", "Discover", "Tell us where the story begins."],
              ["02", "Curate", "We shape the route around you."],
              ["03", "Experience", "Travel without managing the details."],
            ].map(([number, title, text]) => (
              <div key={number} className="border-t border-white/15 pt-5">
                <span className="text-xs text-mint font-semibold">{number}</span>
                <h3 className="font-display text-2xl mt-5 mb-2">{title}</h3>
                <p className="text-sm text-slateSoft leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-semibold text-mint tracking-[0.2em] mb-4">DESTINATIONS</p>
            <h2 className="font-display text-4xl md:text-5xl">Choose your next story.</h2>
          </div>
          <Link href="/destinations" className="text-sm font-semibold hover:text-mint transition-colors">View all →</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {destinationPreview.map((d) => (
            <Link href={`/destinations/${d.slug}`} key={d.slug} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-4">
                <Image src={d.image} alt={`${d.name}, ${d.country}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute left-5 right-5 bottom-5 text-white">
                  <p className="text-xs text-white/70 mb-1">{d.country}</p>
                  <h3 className="font-display text-3xl">{d.name}</h3>
                </div>
              </div>
              <p className="text-sm text-slateSoft">{d.duration} · from ${d.price.toLocaleString()}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 md:pb-28">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-14 text-center">
          <p className="text-xs font-semibold text-mint tracking-[0.2em] mb-4">YOUR NEXT FRAME</p>
          <h2 className="font-display text-4xl md:text-6xl max-w-3xl mx-auto leading-tight">Where will your story take you?</h2>
          <p className="text-slateSoft max-w-xl mx-auto mt-5 leading-relaxed">
            Start with a destination, a date, or simply an idea. We&apos;ll take it from there.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <button onClick={() => openDrawer(null)} className="rounded-full bg-mint text-arctic text-sm font-bold px-7 py-3.5 hover:bg-white transition-colors">Plan my trip</button>
            <Link href="/destinations" className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold hover:border-mint hover:text-mint transition-colors">Explore destinations</Link>
          </div>
        </div>
      </section>
    </>
  );
}
