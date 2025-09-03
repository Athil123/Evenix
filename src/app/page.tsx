import { AboutSection } from "@/components/landing/about-section";
import { ContactSection } from "@/components/landing/contact-section";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { HeroSection } from "@/components/landing/hero-section";
import { ServicesSection } from "@/components/landing/services-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        {/* <TestimonialsSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
