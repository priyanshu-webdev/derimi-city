import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustIndicators } from "@/components/sections/TrustIndicators";
import { About } from "@/components/sections/About";
import { Amenities } from "@/components/sections/Amenities";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { RateChart } from "@/components/sections/RateChart";
import { Gallery } from "@/components/sections/Gallery";
import { Location } from "@/components/sections/Location";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-primary-black">
      <Navbar />
      <Hero />
      <TrustIndicators />
      <About />
      <Amenities />
      <WhyChoose />
      <RateChart />
      <Gallery />
      <Location />
      <ContactCTA />
      <Footer />
    </main>
  );
}
