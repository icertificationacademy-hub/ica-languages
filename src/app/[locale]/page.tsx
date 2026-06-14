import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/sections/Hero";
import AptisSection from "@/components/sections/AptisSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import CoursesGrid from "@/components/sections/CoursesGrid";
import DemoClassSection from "@/components/sections/DemoClassSection";
import WhyUs from "@/components/sections/WhyUs";
import StatsSection from "@/components/sections/StatsSection";
import PartnersSection from "@/components/sections/PartnersSection";
import Testimonials from "@/components/sections/Testimonials";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <AptisSection />
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
