"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useDrawer } from "@/lib/DrawerContext";
import { destinations } from "@/lib/destinations";

const ADDONS = [
  { id: "guide", label: "Private photography guide", price: 120 },
  { id: "transfer", label: "Premium airport transfer", price: 65 },
  { id: "insurance", label: "Full travel insurance", price: 45 },
];

export default function CheckoutDrawer() {
  const { isOpen, destination, closeDrawer } = useDrawer();
  const [step, setStep] = useState("details");
  const [selectedSlug, setSelectedSlug] = useState(destination?.slug || destinations[0].slug);
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState("");
  const [addons, setAddons] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (isOpen) {
      setSelectedSlug(destination?.slug || destinations[0].slug);
      setStep("details");
    }
  }, [isOpen, destination]);

  const selected = destinations.find((d) => d.slug === selectedSlug) || destinations[0];

  function toggleAddon(id) {
    setAddons((prev) => (prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]));
  }

  const addonTotal = addons.reduce((sum, id) => sum + (ADDONS.find((a) => a.id === id)?.price || 0), 0);
  const subtotal = selected.price * guests;
  const total = subtotal + addonTotal;

  function handleConfirm(e) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !date) return;
    setStep("confirmed");
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDrawer}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[90]"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 h-full w-full sm:w-[440px] bg-steel border-l border-white/10 z-[100] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <span className="font-display text-lg text-white">Book Experience</span>
                <button onClick={closeDrawer} aria-label="Close" className="text-slateSoft hover:text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {step === "confirmed" ? (
                <div className="text-center py-16">
                  <div className="w-14 h-14 rounded-full bg-mint/15 flex items-center justify-center mx-auto mb-6">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl text-white mb-3">Request sent</h3>
                  <p className="text-sm text-slateSoft mb-8 leading-relaxed">
                    Thanks, {name.split(" ")[0]}. A coordinator will confirm your {selected.name} trip by email within 24 hours.
                  </p>
                  <button onClick={closeDrawer} className="rounded-full bg-mint text-arctic text-sm font-semibold px-6 py-3">
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleConfirm} className="flex flex-col gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-slateSoft mb-2">Destination</label>
                    <select
                      value={selectedSlug}
                      onChange={(e) => setSelectedSlug(e.target.value)}
                      className="w-full rounded-lg bg-arctic border border-white/10 px-3 py-2.5 text-sm text-white focus:outline-none focus:border-mint"
                    >
                      {destinations.map((d) => (
                        <option key={d.slug} value={d.slug}>
                          {d.name}, {d.country}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slateSoft mb-2">Travel date</label>
                      <input
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full rounded-lg bg-arctic border border-white/10 px-3 py-2.5 text-sm text-white focus:outline-none focus:border-mint"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slateSoft mb-2">Guests</label>
                      <input
                        type="number"
                        min={1}
                        value={guests}
                        onChange={(e) => setGuests(Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-full rounded-lg bg-arctic border border-white/10 px-3 py-2.5 text-sm text-white focus:outline-none focus:border-mint"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slateSoft mb-2">Full name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-lg bg-arctic border border-white/10 px-3 py-2.5 text-sm text-white focus:outline-none focus:border-mint"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slateSoft mb-2">Email</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-lg bg-arctic border border-white/10 px-3 py-2.5 text-sm text-white focus:outline-none focus:border-mint"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slateSoft mb-3">Add-ons</label>
                    <div className="flex flex-col gap-2">
                      {ADDONS.map((a) => (
                        <label
                          key={a.id}
                          className="flex items-center justify-between rounded-lg border border-white/10 px-3 py-2.5 cursor-pointer hover:border-mint/50 transition-colors"
                        >
                          <span className="flex items-center gap-2.5 text-sm text-white">
                            <input
                              type="checkbox"
                              checked={addons.includes(a.id)}
                              onChange={() => toggleAddon(a.id)}
                              className="accent-mint w-4 h-4"
                            />
                            {a.label}
                          </span>
                          <span className="text-xs text-slateSoft">+${a.price}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl bg-arctic border border-white/10 p-4">
                    <div className="flex justify-between text-sm text-slateSoft mb-2">
                      <span>{selected.name} × {guests} guest{guests > 1 ? "s" : ""}</span>
                      <span>${subtotal.toLocaleString()}</span>
                    </div>
                    {addons.length > 0 && (
                      <div className="flex justify-between text-sm text-slateSoft mb-2">
                        <span>Add-ons</span>
                        <span>${addonTotal.toLocaleString()}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-base font-semibold text-white pt-2 border-t border-white/10 mt-2">
                      <span>Total</span>
                      <span>${total.toLocaleString()}</span>
                    </div>
                  </div>

                  <button type="submit" className="w-full rounded-full bg-mint text-arctic text-sm font-bold py-3.5 hover:bg-white transition-colors">
                    Confirm Request
                  </button>
                  <p className="text-[11px] text-slateSoft/60 text-center -mt-3">
                    No payment is taken now — a coordinator confirms availability first.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
