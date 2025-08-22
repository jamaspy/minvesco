import ContactSection from "@/components/sections/contact-section";
import HeroSection from "@/components/sections/hero-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      {/* <OfferingsSection /> */}
      <ContactSection />
    </main>
  );
}
