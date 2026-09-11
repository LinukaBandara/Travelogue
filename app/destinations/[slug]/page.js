"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { getDestination } from "@/lib/destinations";
import { useDrawer } from "@/lib/DrawerContext";

export default function DestinationPage({ params }) {
  const destination = getDestination(params.slug);
  const { openDrawer } = useDrawer();

  if (!destination) return notFound();

  return (
    <div>
      {/* HERO */}
      <section className="relative h-[52vh] min-h-[380px]">
        <img src={destination.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-arctic via-arctic/20 to-arctic/10" />
        <div className="relative h-full flex items-end mx-auto max-w-6xl px-6 pb-10">
          <div>
            <Link href="/" className="text-sm text-slateSoft hover:text-mint mb-4 inline-block">← All destinations</Link>
            <h1 className="font-display text-4xl md:text-6xl font-medium">{destination.name}</h1>
            <p className="text-slateSoft text-base mt-2">{destination.country}</p>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <p className="text-slateSoft text-base leading-relaxed mb-10">{destination.description}</p>

          <h3 className="text-xs font-semibold text-slateSoft tracking-wide mb-5">HIGHLIGHTS</h3>
          <ul className="flex flex-col gap-3 mb-12">
            {destination.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {h}
              </li>
            ))}
          </ul>

          <h3 className="text-xs font-semibold text-slateSoft tracking-wide mb-6">DAY BY DAY</h3>
          <div className="flex flex-col gap-6 mb-12">
            {destination.itinerary.map((day) => (
              <div key={day.day} className="flex gap-5">
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-steel border border-white/10 flex items-center justify-center text-xs font-bold text-mint">
                  {day.day}
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-1">{day.title}</h4>
                  <p className="text-sm text-slateSoft leading-relaxed">{day.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xs font-semibold text-slateSoft tracking-wide mb-4">INCLUDED</h3>
              <ul className="flex flex-col gap-2.5">
                {destination.inclusions.map((inc, i) => (
                  <li key={i} className="text-sm text-slateSoft flex gap-2">
                    <span className="text-mint">+</span>{inc}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-slateSoft tracking-wide mb-4">NOT INCLUDED</h3>
              <ul className="flex flex-col gap-2.5">
                {destination.exclusions.map((exc, i) => (
                  <li key={i} className="text-sm text-slateSoft flex gap-2">
                    <span className="text-slateSoft/50">–</span>{exc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="h-fit rounded-2xl border border-white/10 bg-steel p-6 sticky top-28">
          <div className="flex justify-between text-sm mb-4 pb-4 border-b border-white/10">
            <span className="text-slateSoft">Duration</span>
            <span className="font-semibold">{destination.duration}</span>
          </div>
          <div className="flex justify-between text-sm mb-6">
            <span className="text-slateSoft">Starting from</span>
            <span className="font-semibold text-lg">${destination.price.toLocaleString()}</span>
          </div>
          <button
            onClick={() => openDrawer(destination)}
            data-cursor-hover
            className="w-full rounded-full bg-mint text-arctic text-sm font-bold py-3.5 hover:bg-white transition-colors"
          >
            Book Experience
          </button>
        </div>
      </section>
    </div>
  );
}
