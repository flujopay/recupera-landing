import { AssetImage } from '@/lib/utils/assets/image'
import Image from 'next/image'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Recuperamos el 78% de más de $2M que considerábamos pérdidas, sin dañar las relaciones con clientes clave.',
    author: 'CFO',
    company: 'Empresa distribuidora',
    recsa: false,
  },
  {
    quote:
      'El respaldo de Recsa es invaluable. Tienen negociadores que entienden el contexto B2B y saben cómo recuperar sin afectar la relación comercial.',
    author: 'Director Financiero',
    company: 'Empresa tecnológica',
    recsa: false,
  },
  {
    quote:
      'Llevamos más de un año trabajando con Sena. La combinación de tecnología y el equipo de Recsa detrás hace que los resultados sean consistentes, no un caso aislado.',
    author: 'Osvaldo Cáceres',
    company: 'KAM, RECSA',
    recsa: true,
  },
]

export const Testimonials = () => {
  return (
    <div className="bg-[#F9F9F9] py-12 md:py-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-12">
        <div className="text-left mb-12">
          <h2 className="text-brand-primary-dark text-3xl md:text-4xl font-extrabold mb-4">
            Casos de <span className="text-brand-primary">éxito</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow relative flex flex-col"
            >
              <Quote className="absolute top-5 right-5 h-6 w-6 text-brand-primary/8" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed mb-5 italic flex-1">"{testimonial.quote}"</p>
              <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                <div>
                  <p className="text-brand-primary-dark font-bold text-sm">{testimonial.author}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{testimonial.company}</p>
                </div>
                {testimonial.recsa && (
                  <Image src={AssetImage.byRecsa} alt="RECSA" className="h-6 w-auto opacity-70" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
