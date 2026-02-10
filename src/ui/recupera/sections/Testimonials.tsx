import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Recuperamos el 78% de +$2M que considerábamos pérdidas, sin dañar relaciones con clientes clave.",
    author: "CFO, Empresa Distribuidora",
    rating: 5,
  },
  {
    quote:
      "El respaldo de Recsa es invaluable. Son negociadores expertos que entienden el contexto B2B.",
    author: "Director Financiero, Empresa Tech",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <div className="bg-[#F9F9F9] py-12 md:py-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-12">
        <div className="text-left mb-12">
          <h2 className="text-brand-primary-dark text-3xl md:text-4xl font-extrabold mb-4">
            Casos de <span className="text-brand-primary">éxito</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow relative"
            >
              <div className="absolute top-4 right-4 opacity-[0.03]">
                <Quote className="h-8 w-8 text-slate-400" />
              </div>

              <div className="relative z-10">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 "
                      fill="currentColor"
                      color="text-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-slate-700 text-lg mb-6 italic">
                  "{testimonial.quote}"
                </p>

                <div className="border-t border-slate-200 pt-4">
                  <p className="text-brand-primary-dark font-semibold">
                    {testimonial.author}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
