"use client";

import Link from "next/link";
import { useState } from "react";
import { useDrawer } from "@/lib/DrawerContext";

function ApertureLogo() {
  return (
    <svg width="30" height="30" viewBox="0 0 40 40" fill="none">
      <path d="M20 4 L28 20 L20 36" stroke="#34d399" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
      <circle cx="20" cy="20" r="13" stroke="#34d399" strokeWidth="1.2" opacity="0.5" />
      <path d="M20 20 L20 9 A11 11 0 0 1 29.5 15" stroke="#34d399" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M20 20 L29 25 A11 11 0 0 1 20.5 31" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" opacity="0.85" />
    </svg>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { openDrawer } = useDrawer();

  const links = [
    { href: "/", label: "Destinations" },
    { href: "/#feeds", label: "Cinematic Feeds" },
    { href: "/#packages", label: "Packages" },
    { href: "/#about", label: "About" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-arctic/60 backdrop-blur-xl px-5 py-3 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        <Link href="/" className="flex items-center gap-2.5">
          <ApertureLogo />
          <span className="font-display text-lg tracking-tight text-white">Travelogue</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.label} href={l.href} className="text-sm text-slateSoft hover:text-white transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => openDrawer(null)}
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-mint text-arctic text-sm font-semibold px-5 py-2.5 hover:bg-white transition-colors"
        >
          Book Trip
        </button>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="mx-auto max-w-6xl mt-2 rounded-2xl border border-white/10 bg-arctic/90 backdrop-blur-xl px-5 py-4 flex flex-col gap-1 md:hidden">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-sm text-slateSoft hover:text-white border-b border-white/5"
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              openDrawer(null);
            }}
            className="mt-3 rounded-full bg-mint text-arctic text-sm font-semibold px-5 py-3"
          >
            Book Trip
          </button>
        </div>
      )}
    </nav>
  );
}
