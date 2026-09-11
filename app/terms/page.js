export const metadata = { title: "Terms & Conditions", description: "Terms and conditions for using Travelogue and submitting travel requests." };

export default function TermsPage() {
  return <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
    <p className="text-xs font-semibold text-mint tracking-wide mb-4">LEGAL</p>
    <h1 className="font-display text-4xl md:text-6xl mb-6">Terms & Conditions</h1>
    <p className="text-sm text-slateSoft mb-12">Last updated: September 11, 2026</p>
    <div className="space-y-10 text-sm text-slateSoft leading-relaxed">
      <section><h2 className="text-white text-xl font-semibold mb-3">Service</h2><p>Travelogue presents curated travel ideas and facilitates trip-request conversations. A request is not a confirmed booking until the details, availability, price, and applicable terms are confirmed separately.</p></section>
      <section><h2 className="text-white text-xl font-semibold mb-3">Prices and availability</h2><p>Displayed prices are starting estimates and may change with dates, availability, suppliers, taxes, exchange rates, or requested additions.</p></section>
      <section><h2 className="text-white text-xl font-semibold mb-3">Accuracy</h2><p>We aim to keep destination and itinerary information useful and current, but travel conditions, opening hours, transport schedules, weather, and entry requirements can change.</p></section>
      <section><h2 className="text-white text-xl font-semibold mb-3">User submissions</h2><p>You agree to provide accurate information when submitting a request and not to use forms for unlawful, abusive, automated, or malicious activity.</p></section>
      <section><h2 className="text-white text-xl font-semibold mb-3">Third-party services</h2><p>Travel arrangements may involve airlines, hotels, guides, transport providers, and other third parties whose own terms may apply.</p></section>
      <section><h2 className="text-white text-xl font-semibold mb-3">Changes</h2><p>Travelogue may update these terms as the service changes. The latest version published on this page applies to future use.</p></section>
    </div>
  </article>;
}
