"use client";

import { Button } from "@/ui/shared/Button";
import { ArrowRight, Play } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
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
    <div className="relative overflow-hidden transition-all gap-6 bg-[#F9F9F9] p-4 md:p-6">
      <div className="max-w-[1280px] mx-auto px-4 py-8 md:py-16 md:pt-12 md:pb-8 relative z-10">
        <div className="text-center mx-auto">
          <div className="inline-flex items-center gap-2 bg-brand-primary/10 px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-4 md:mb-6">
            <span className="text-brand-primary-dark font-semibold text-xs md:text-sm">
              Recupera • Powered by Recsa
            </span>
          </div>

          <h1 className="text-brand-primary-dark font-canaro text-3xl md:text-5xl lg:text-7xl font-extrabold leading-tight">
            Tu cartera vencida no está{" "}
            <span className="text-brand-primary">perdida</span>
          </h1>

          <p className="text-black text-sm md:text-lg lg:text-xl mb-6 md:mb-8 mt-3 md:mt-4 max-w-3xl mx-auto leading-relaxed">
            Equipo especializado en recuperación + tecnología avanzada + 40 años
            de experiencia. Recuperamos sin romper relaciones.
          </p>

          <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center max-w-md md:max-w-none mx-auto">
            <Button
              text="Solicita Evaluación Gratuita"
              variant="secondaryFilled"
              size="md"
              onClick={() => scrollToSection("contacto")}
              rightIcon={<ArrowRight className="h-4 w-4 md:h-5 md:w-5" />}
              className="w-full md:w-auto text-sm md:text-base"
            />
            <Button
              text="Ver Cómo Funciona"
              variant="primaryInvertedFilled"
              size="md"
              onClick={() => scrollToSection("como-funciona")}
              leftIcon={<Play className="h-4 w-4 md:h-5 md:w-5" />}
              className="w-full md:w-auto text-sm md:text-base"
            />
          </div>
        </div>
      </div>

      {/* Stats Bar - sobresale del Hero hacia la siguiente sección */}
      <div className="max-w-[900px] mx-auto px-4 py-2 pb-8 md:py-4 md:pb-12">
        <div className="flex bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl overflow-hidden">
          <div className="flex-1 p-3 md:p-8 text-center">
            <div className="text-lg md:text-4xl font-extrabold text-brand-primary mb-0.5 md:mb-1">
              +85%
            </div>
            <div className="text-slate-600 text-[9px] md:text-sm font-medium leading-tight">
              Tasa de recuperación
            </div>
          </div>
          <div className="flex-1 p-3 md:p-8 text-center border-l border-r border-slate-200">
            <div className="text-lg md:text-4xl font-extrabold text-brand-primary mb-0.5 md:mb-1">
              15 países
            </div>
            <div className="text-slate-600 text-[9px] md:text-sm font-medium leading-tight">
              Presencia LATAM
            </div>
          </div>
          <div className="flex-1 p-3 md:p-8 text-center">
            <div className="text-lg md:text-4xl font-extrabold text-brand-primary mb-0.5 md:mb-1">
              40+ años
            </div>
            <div className="text-slate-600 text-[9px] md:text-sm font-medium leading-tight">
              Experiencia Recsa
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
