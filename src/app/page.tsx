import { About } from "@/components/About";
import { Benefits } from "@/components/Benefits";
import { Carousel } from "@/components/Carousel";
import { CTA } from "@/components/CTA";
import { GsapEffects } from "@/components/GsapEffects";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Portfolio } from "@/components/Portfolio";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-ink text-white">
      <GsapEffects />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Benefits />
      <Process />
      <Carousel />
      <Portfolio />
      <Testimonials />
      <CTA />
    </main>
  );
}
