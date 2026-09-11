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
import { DrawerProvider } from "@/lib/DrawerContext";

export const metadata = {
  title: "Travelogue — Cinematic Trip Planning",
  description: "A cinematic way to plan a trip — curated destinations, real itineraries, one seamless booking flow.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-arctic text-white font-sans antialiased">
        <DrawerProvider>
          <CustomCursor />
          <Nav />
          <main className="pt-28">{children}</main>
          <Footer />
          <CheckoutDrawer />
        </DrawerProvider>
      </body>
    </html>
  );
}
