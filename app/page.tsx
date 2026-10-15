import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Positionnement from "@/components/Positionnement";
import Services from "@/components/Services";
import Realisations from "@/components/Realisations";
import Pourquoi from "@/components/Pourquoi";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

export default function Page() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Positionnement />
      <Services />
      <Realisations />
      <Pourquoi />
      <FAQ />
      <Contact />
      <Footer />
      <MobileCTA />
    </main>
  );
}
