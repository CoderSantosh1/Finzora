"use client"
import Hero from "@/components/FinZoraHero";
import Aboutus from "@/components/FinZoraAbout";
import FinZoraServices from "@/components/FinZoraServices";
import FinZoraWhyChooseUs from "@/components/FinZoraWhyChooseUs";
import FinZoraLoanCalculator from "@/components/FinZoraLoanCalculator";
import FinZoraTestimonials from "@/components/FinZoraTestimonials";
import FinZoraFAQs from "@/components/FinZoraFAQs";
import FinZoraContact from "@/components/FinZoraContact";
import FinZoraFooter from "@/components/FinZoraFooter";
import FinZoraMotion from "@/components/FinZoraMotion";

export default function Home() {
  return (
    <>
    <FinZoraMotion />
    <Hero />
    <Aboutus />
    <FinZoraServices />
    <FinZoraWhyChooseUs />
    <FinZoraLoanCalculator />
    <FinZoraTestimonials />
    <FinZoraFAQs />
    <FinZoraContact />
    <FinZoraFooter />
    </>
  );
}
