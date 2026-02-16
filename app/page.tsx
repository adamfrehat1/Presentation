import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Dashboard } from "@/components/Dashboard";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { TemplateGallery } from "@/components/TemplateGallery";
import { TrustedBy } from "@/components/TrustedBy";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Dashboard />
      <HowItWorks />
      <Features />
      <TemplateGallery />
      <TrustedBy />
      <Testimonials />
      <Footer />
    </main>
  );
}
