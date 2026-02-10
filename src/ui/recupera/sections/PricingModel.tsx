"use client";

import { Button } from "@/ui/shared/Button";
import { ArrowRight, CheckCircle, DollarSign } from "lucide-react";

export const PricingModel = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      const offset = 72;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div id="precios" className="bg-white py-12 md:py-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-12">
        <div className="text-left mb-12">
          <h2 className="text-brand-primary-dark text-3xl md:text-4xl font-extrabold mb-4">
            Solo pagas por lo que{" "}
            <span className="text-brand-primary">recuperamos</span>
          </h2>
          <p className="font-adobe text-black mt-2 text-lg leading-5">
            Si no recuperamos, no pagas nada
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Modelo explicado */}
          <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border-2 border-brand-primary/20">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-brand-primary/10 px-4 py-2 rounded-full mb-4">
                <DollarSign className="h-5 w-5 text-brand-primary" />
                <span className="font-bold text-brand-primary-dark">
                  Modelo Contingente
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-primary-dark mb-3">
                Cobramos un % del monto recuperado
              </h3>
              <p className="text-lg text-slate-600 font-semibold">
                Cero riesgo para ti
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-slate-50 rounded-xl p-6 text-center border-2 border-slate-200">
                <div className="text-4xl font-extrabold text-brand-primary mb-2">
                  $0
                </div>
                <div className="text-slate-700 font-semibold">Evaluación</div>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 text-center border-2 border-slate-200">
                <div className="text-4xl font-extrabold text-brand-primary mb-2">
                  $0
                </div>
                <div className="text-slate-700 font-semibold">Setup</div>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 text-center border-2 border-brand-primary">
                <div className="text-4xl font-extrabold text-brand-primary mb-2">
                  %
                </div>
                <div className="text-slate-700 font-semibold">
                  Solo sobre monto recuperado
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-brand-primary-dark">
                <CheckCircle className="h-5 w-5 text-brand-primary" />
                <span className="font-semibold">Intereses 100% alineados</span>
              </div>
              <div className="flex items-center gap-2 text-brand-primary-dark">
                <CheckCircle className="h-5 w-5 text-brand-primary" />
                <span className="font-semibold">ROI garantizado</span>
              </div>
              <div className="flex items-center gap-2 text-brand-primary-dark">
                <CheckCircle className="h-5 w-5 text-brand-primary" />
                <span className="font-semibold">Transparencia total</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              text="Solicita tu Cotización Personalizada"
              variant="secondaryFilled"
              size="lg"
              onClick={scrollToContact}
              rightIcon={<ArrowRight className="h-5 w-5" />}
            />
            <p className="italic text-sm mt-4">
              La comisión varía según volumen, antigüedad y complejidad.
              <br />
              Respuesta en 24h.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
