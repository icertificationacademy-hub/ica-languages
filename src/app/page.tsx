import Hero from "@/components/sections/Hero";
import CoursesGrid from "@/components/sections/CoursesGrid";
import CertificationsSection from "@/components/sections/CertificationsSection";
import WhyUs from "@/components/sections/WhyUs";
import StatsSection from "@/components/sections/StatsSection";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CoursesGrid />
      <CertificationsSection />
      <StatsSection />
      <WhyUs />
      <Testimonials />
      <CTASection />
    </>
  );
}
