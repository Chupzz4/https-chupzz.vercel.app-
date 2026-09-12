import { About } from "@/components/About";
import { Agents } from "@/components/Agents";
import { AutomationFlow } from "@/components/AutomationFlow";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Integrations } from "@/components/Integrations";
import { Metrics } from "@/components/Metrics";
import { Navbar } from "@/components/Navbar";
import { Portfolio } from "@/components/Portfolio";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-obsidian text-ivory">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <div id="main-content" tabIndex={-1}>
        <Hero />
        <Integrations />
        <About />
        <Services />
        <AutomationFlow />
        <Metrics />
        <Portfolio />
        <Agents />
        <Process />
        <Testimonials />
        <CTA />
      </div>
      <Footer />
    </main>
  );
}
