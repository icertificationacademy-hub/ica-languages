import Hero from "@/components/sections/Hero";
import CertificationsSection from "@/components/sections/CertificationsSection";
import CoursesGrid from "@/components/sections/CoursesGrid";
import DemoClassSection from "@/components/sections/DemoClassSection";
import WhyUs from "@/components/sections/WhyUs";
import StatsSection from "@/components/sections/StatsSection";
import PartnersSection from "@/components/sections/PartnersSection";
import Testimonials from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CertificationsSection />
      <CoursesGrid />
      <DemoClassSection />
      <WhyUs />
      <StatsSection />
      <PartnersSection />
      <Testimonials />
    </>
  );
}
