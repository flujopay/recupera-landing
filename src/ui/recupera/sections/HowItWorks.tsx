import {
  CheckCircle,
  FileSearch,
  Lightbulb,
  TrendingUp,
  Users,
} from "lucide-react";

const steps = [
  {
    title: "Evaluación Gratuita",
    description:
      "Analizamos tu cartera y priorizamos casos según probabilidad de recuperación.",
    timeline: "24-48 horas",
    icon: FileSearch,
  },
  {
    title: "Estrategia Personalizada",
    description:
      "Diseñamos plan de recuperación considerando industria, relación con deudores y objetivos.",
    timeline: "48 horas",
    icon: Lightbulb,
  },
  {
    title: "Gestión Humana + IA",
    description:
      "Equipo especializado negocia acuerdos de pago manteniendo profesionalismo.",
    timeline: "Continuo",
    icon: Users,
  },
  {
    title: "Recuperación + Dashboard",
    description:
      "Pagos directos a tu cuenta. Dashboard en tiempo real con progreso y proyecciones.",
    timeline: "Tiempo real",
    icon: TrendingUp,
  },
];

export const HowItWorks = () => {
  return (
    <div id="como-funciona" className="py-12 mx-auto max-w-[1280px]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-12">
        <div className="text-left mb-12">
          <h2 className="text-brand-primary-dark text-3xl md:text-4xl font-extrabold mb-4">
            De cartera vencida a{" "}
            <span className="text-brand-primary">dinero recuperado</span>
          </h2>
          <p className="font-adobe text-black mt-2 text-lg leading-5">
            Proceso probado con cientos de empresas B2B en 15 países de LATAM
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="h-full rounded-2xl bg-[#F9F9F9]  px-6 py-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-brand-secondary flex items-center justify-center shrink-0">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>

                <h3 className="mt-5 text-black font-extrabold uppercase leading-tight text-xl">
                  {step.title}
                </h3>

                <p className="mt-3 text-[#939393] text-md leading-5">
                  {step.description}
                </p>

                <div className="flex items-center gap-2 mt-5">
                  <CheckCircle className="h-4 w-4 text-[#939393] shrink-0" />
                  <span className="text-[#939393]">
                    Timeline:{" "}
                    <span className="font-semibold text-brand-primary">
                      {step.timeline}
                    </span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
