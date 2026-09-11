export const metadata = { title: "Privacy Policy", description: "Travelogue's privacy policy and information about how we handle submitted information." };

export default function PrivacyPage() {
  return <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
    <p className="text-xs font-semibold text-mint tracking-wide mb-4">LEGAL</p>
    <h1 className="font-display text-4xl md:text-6xl mb-6">Privacy Policy</h1>
    <p className="text-sm text-slateSoft mb-12">Last updated: September 11, 2026</p>
    <div className="space-y-10 text-sm text-slateSoft leading-relaxed">
      <section><h2 className="text-white text-xl font-semibold mb-3">Information we collect</h2><p>When you submit a trip or contact request, we may receive the information you choose to provide, such as your name, email address, travel preferences, dates, and message.</p></section>
      <section><h2 className="text-white text-xl font-semibold mb-3">How we use information</h2><p>We use submitted information to respond to requests, plan trips, improve the service, and communicate about an inquiry you initiated. We do not sell personal information.</p></section>
      <section><h2 className="text-white text-xl font-semibold mb-3">Cookies</h2><p>Travelogue may use essential browser storage for preferences such as cookie-consent status. Optional analytics will only be enabled after consent where required.</p></section>
      <section><h2 className="text-white text-xl font-semibold mb-3">Third parties</h2><p>Service providers may process information when necessary to operate forms, hosting, analytics, or booking-related functionality. We aim to limit shared information to what those services require.</p></section>
      <section><h2 className="text-white text-xl font-semibold mb-3">Your choices</h2><p>You can request access to, correction of, or deletion of information you have submitted by contacting Travelogue through the available contact channel.</p></section>
      <section><h2 className="text-white text-xl font-semibold mb-3">Contact</h2><p>For privacy questions, please use the Travelogue contact or trip-request flow.</p></section>
    </div>
  </article>;
}
