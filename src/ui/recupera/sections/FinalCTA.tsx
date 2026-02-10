"use client";

import { Button } from "@/ui/shared/Button";
import { ArrowRight, Shield } from "lucide-react";

export const FinalCTA = () => {
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
    <div className="py-12 md:py-20 bg-[#F9F9F9]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-12">
        <div className="text-left max-w-3xl mb-12">
          <h2 className="text-brand-primary-dark text-3xl md:text-4xl font-extrabold mb-4">
            Recupera lo que creías{" "}
            <span className="text-brand-primary">perdido</span>
          </h2>
          <p className="font-adobe text-black mt-2 text-lg leading-5">
            Sin riesgo. Sin costo inicial. Solo pagas por lo que recuperamos.
          </p>
        </div>
        <div className="text-center max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-6 text-center border border-slate-200 shadow-sm">
              <div className="text-3xl font-extrabold text-brand-primary mb-2">
                +85%
              </div>
              <div className="text-slate-600 text-sm font-medium">
                recuperación
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-slate-200 shadow-sm">
              <div className="text-3xl font-extrabold text-brand-primary mb-2">
                $0
              </div>
              <div className="text-slate-600 text-sm font-medium">inicial</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-slate-200 shadow-sm">
              <div className="text-3xl font-extrabold text-brand-primary mb-2">
                40+
              </div>
              <div className="text-slate-600 text-sm font-medium">
                años Recsa
              </div>
            </div>
          </div>

          <div className="mb-8">
            <Button
              text="Solicita Evaluación Gratuita"
              variant="secondaryFilled"
              size="lg"
              onClick={scrollToContact}
              rightIcon={<ArrowRight className="h-5 w-5" />}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-slate-500 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-brand-primary" />
              <span>Respuesta en 24h</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-brand-primary" />
              <span>Sin compromiso</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-brand-primary" />
              <span>Datos protegidos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
