"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { destinations } from "@/lib/destinations";
import { useDrawer } from "@/lib/DrawerContext";

export default function CinematicHero() {
  const [activeSlug, setActiveSlug] = useState(destinations[0].slug);
  const { openDrawer } = useDrawer();

  return (
    <div>
      <div className="flex items-baseline justify-between mb-5">
        <span className="text-xs text-slateSoft hidden md:inline">hover to explore</span>
        <span className="text-xs text-slateSoft md:hidden">swipe to explore</span>
      </div>

      <div className="flex gap-1.5 h-[64vh] md:h-[60vh] overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
        {destinations.map((d) => {
          const isActive = d.slug === activeSlug;
          return (
            <motion.div
              key={d.slug}
              onMouseEnter={() => setActiveSlug(d.slug)}
              onClick={() => setActiveSlug(d.slug)}
              onFocus={() => setActiveSlug(d.slug)}
              tabIndex={0}
              role="button"
              aria-label={`Expand ${d.name}, ${d.country}`}
              data-cursor-hover
              animate={{ flex: isActive ? 5.2 : 1 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl overflow-hidden cursor-pointer flex-shrink-0 w-[78vw] md:w-auto snap-center bg-steel"
            >
              <motion.img
                src={d.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                animate={{
                  scale: isActive ? 1.06 : 1,
                  filter: isActive ? "grayscale(0) brightness(1)" : "grayscale(0.4) brightness(0.75)",
                }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/20" />

              <div className="absolute left-4 right-4 bottom-4 flex items-end justify-between gap-2">
                <div>
                  <span
                    className={`block text-[10px] font-semibold text-mint mb-1.5 transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {d.duration.toUpperCase()} · FROM ${d.price}
                  </span>
                  <h3
                    className={`font-display font-medium text-white whitespace-nowrap transition-all duration-300 ${
                      isActive ? "text-2xl md:text-3xl [writing-mode:horizontal-tb] rotate-0" : "text-sm [writing-mode:vertical-rl] rotate-180"
                    }`}
                  >
                    {d.name}
                  </h3>
                  <span
                    className={`block text-xs text-slateSoft mt-1 transition-opacity duration-300 delay-100 ${
                      isActive ? "opacity-100" : "opacity-0 h-0"
                    }`}
                  >
                    {d.country}
                  </span>
                </div>

                <Link
                  href={`/destinations/${d.slug}`}
                  data-cursor-hover
                  onClick={(e) => e.stopPropagation()}
                  className={`flex-shrink-0 w-9 h-9 rounded-full bg-white/10 backdrop-blur flex items-center justify-center transition-all duration-300 hover:bg-mint hover:text-arctic ${
                    isActive ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
                  }`}
                  aria-label={`View ${d.name}`}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
