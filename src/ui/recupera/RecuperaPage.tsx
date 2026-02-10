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
