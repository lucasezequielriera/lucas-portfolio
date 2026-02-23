import type { Locale } from "@/lib/dictionaries";
import { Nav } from "@/components/home/nav";
import { HeroSection } from "@/components/home/hero-section";
import { WorksSection } from "@/components/home/works-section";
import { ExperienceSection } from "@/components/home/experience-section";
import { StackSection } from "@/components/home/stack-section";
import { ServicesSection } from "@/components/home/services-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { ContactSection } from "@/components/home/contact-section";
import { WhatsAppFab } from "@/components/home/whatsapp-fab";
import { ScrollTopButton } from "@/components/home/scroll-top-button";
import { Footer } from "@/components/home/footer";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = locale as Locale;

  return (
    <main id="main-content" className="min-h-screen bg-neutral-950 text-neutral-100">
      <Nav locale={loc} />
      <HeroSection locale={loc} />
      <WorksSection locale={loc} />
      <ExperienceSection locale={loc} />
      <StackSection locale={loc} />
      <ServicesSection locale={loc} />
      <TestimonialsSection locale={loc} />
      <ContactSection locale={loc} />
      <WhatsAppFab />
      <ScrollTopButton locale={loc} />
      <Footer locale={loc} />
    </main>
  );
}
