import Hero from "@/components/Hero";
import Positionnement from "@/components/Positionnement";
import Pillars from "@/components/Pillars";
import Pourquoi from "@/components/Pourquoi";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

export default function Page() {
  return (
    <main className="relative">
      <Hero />
      <Positionnement />
      <Pillars />
      <Pourquoi />
      <Contact />
      <Footer />
      <MobileCTA />
    </main>
  );
}
