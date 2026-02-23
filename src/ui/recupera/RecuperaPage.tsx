"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { Footer } from "../layout/Footer";
import { Header } from "../layout/Header";
import Whatsapp from "../shared/WhatsApp";
import { ContactForm } from "./sections/ContactForm";
import { Credibility } from "./sections/Credibility";
import { FAQ } from "./sections/FAQ";
import { FinalCTA } from "./sections/FinalCTA";
import { Hero } from "./sections/Hero";
import { HowItWorks } from "./sections/HowItWorks";
import { PricingModel } from "./sections/PricingModel";
import { Testimonials } from "./sections/Testimonials";
import { UseCases } from "./sections/UseCases";

export const RecuperaPage = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const section = searchParams.get("section");
    if (!section) return;

    const tryScroll = (attempts = 0) => {
      const element = document.getElementById(section);
      if (element) {
        const offset = 72;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      } else if (attempts < 10) {
        setTimeout(() => tryScroll(attempts + 1), 100);
      }
    };

    tryScroll();
  }, [searchParams]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header variant="primary" />
      <div className="grow">
        <Hero />
        <HowItWorks />
        <PricingModel />
        <Credibility />
        <UseCases />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <ContactForm />
      </div>
      <Footer />
      <Whatsapp
        message="Hola, quiero información sobre Recupera para gestionar mi cartera vencida."
        animated
      />
    </div>
  );
};
