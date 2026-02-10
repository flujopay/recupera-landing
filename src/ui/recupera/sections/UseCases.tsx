import { Calendar, DollarSign, Globe, MessageCircleOff } from "lucide-react";

const useCases = [
  {
    title: "Facturas +90 días vencidas",
    description:
      "Clientes corporativos con pagos atrasados que requieren negociación profesional.",
    icon: Calendar,
  },
  {
    title: "Deudores que no responden",
    description:
      "Cuentas donde la comunicación se cortó pero la relación vale la pena preservar.",
    icon: MessageCircleOff,
  },
  {
    title: "Montos altos",
    description:
      "Facturas donde el expertise humano marca la diferencia en recuperación.",
    icon: DollarSign,
  },
  {
    title: "Expansión LATAM",
    description:
      "Empresas operando en múltiples países que necesitan gestión con conocimiento local.",
    icon: Globe,
  },
];

export const UseCases = () => {
  return (
    <div id="casos-uso" className="bg-white py-12 md:py-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-12">
        <div className="text-left mb-12">
          <h2 className="text-brand-primary-dark text-3xl md:text-4xl font-extrabold mb-4">
            ¿En qué casos <span className="text-brand-primary">funciona?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div
                key={index}
                className="bg-linear-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-brand-primary/10 p-4 rounded-xl group-hover:bg-brand-primary/20 transition-colors shrink-0">
                    <Icon className="h-6 w-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="text-brand-primary-dark text-xl font-bold mb-2">
                      {useCase.title}
                    </h3>
                    <p className="text-slate-600">{useCase.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
