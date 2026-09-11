import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/500.css";
import "@fontsource/fraunces/600.css";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import CheckoutDrawer from "@/components/CheckoutDrawer";
import CookieConsent from "@/components/CookieConsent";
import { DrawerProvider } from "@/lib/DrawerContext";

export const metadata = {
  metadataBase: new URL("https://travelogue-ashy.vercel.app"),
  title: { default: "Travelogue — Cinematic Trip Planning", template: "%s | Travelogue" },
  description: "A cinematic way to plan a trip across Asia — curated destinations, real itineraries, and one seamless booking request flow.",
  keywords: ["Asia travel", "Japan travel", "Sri Lanka travel", "Maldives travel", "Thailand travel", "cinematic travel planning"],
  openGraph: { title: "Travelogue — Cinematic Trip Planning", description: "Curated destinations and considered itineraries across Asia.", type: "website", images: [{ url: "/images/kyoto.webp", width: 1200, height: 800, alt: "Kyoto travel scene" }] },
  twitter: { card: "summary_large_image", title: "Travelogue — Cinematic Trip Planning", description: "Curated destinations and considered itineraries across Asia.", images: ["/images/kyoto.webp"] },
  icons: { icon: "/icon.svg" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return <html lang="en"><body className="bg-arctic text-white font-sans antialiased"><DrawerProvider><CustomCursor /><Nav /><main className="pt-28">{children}</main><Footer /><CheckoutDrawer /><CookieConsent /></DrawerProvider></body></html>;
}
