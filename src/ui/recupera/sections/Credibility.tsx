import {
  Award,
  DollarSign,
  Globe,
  PhoneCall,
  TrendingUp,
  Zap,
} from "lucide-react";

const stats = [
  {
    value: "146M",
    label: "gestiones mensuales",
    icon: Zap,
  },
  {
    value: "70M",
    label: "llamadas de agentes",
    icon: PhoneCall,
  },
  {
    value: "15",
    label: "países en LATAM",
    icon: Globe,
  },
  {
    value: "40+",
    label: "años de experiencia",
    icon: Award,
  },
  // {
  //   value: "$XXM",
  //   label: "recuperados mensualmente",
  //   icon: DollarSign,
  // },
  // {
  //   value: "XX%",
  //   label: "tasa promedio de recuperación",
  //   icon: TrendingUp,
  // },
];

export const Credibility = () => {
  return (
    <div id="credibilidad" className="bg-[#F9F9F9] py-12 md:py-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-12">
        <div className="text-left mb-12">
          <h2 className="text-brand-primary-dark text-3xl md:text-4xl font-extrabold mb-4">
            Respaldados por el líder en{" "}
            <span className="text-brand-primary">cobranza LATAM</span>
          </h2>
          <p className="font-adobe text-black mt-2 text-lg leading-5">
            Recsa lleva más de 40 años recuperando cartera compleja para
            empresas de todos los tamaños
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-all group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-primary/10 rounded-xl mb-4 group-hover:bg-brand-primary/20 transition-colors">
                  <Icon className="h-8 w-8 text-brand-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-extrabold text-brand-primary-dark mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-600 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-sm">
            <Award className="h-5 w-5 text-brand-primary" />
            <span className="text-brand-primary-dark font-semibold">
              Powered by Recsa
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
