import Hero from '@/components/Hero';
import Services from '@/components/Services';
import SplitSection from '@/components/SplitSection';
import ProcessSteps from '@/components/ProcessSteps';
import Reviews from '@/components/Reviews';
import WhyVirtual from '@/components/WhyVirtual';
import BookingSection from '@/components/BookingSection';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <ProcessSteps />
      <Reviews />
      <SplitSection
        title="Close Your Deal"
        goldText="From Anywhere"
        description="No more rushing to a lawyer's office during work hours. Our fully virtual process lets you complete your real estate transaction from home, the office, or anywhere with an internet connection. We handle purchases, sales, refinancing, and more—all with the same care and expertise you'd expect in person."
        imageSrc="https://picsum.photos/seed/virtual1/800/600"
        imageAlt="Virtual meeting"
        ctaText="Get Started"
        ctaHref="#book"
      />
      <WhyVirtual />
      <BookingSection />
      <CTASection variant="home" />
    </main>
  );
}
