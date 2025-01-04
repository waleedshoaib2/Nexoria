import Navigation from "@/components/ui/navigation";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Portfolio from "@/components/sections/portfolio";
import Clients from "@/components/sections/clients";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="bg-background">
      <Navigation />
      <Hero />
      <Services />
      <Portfolio />
      <Clients />
      <Contact />
      <Footer />
    </main>
  );
}