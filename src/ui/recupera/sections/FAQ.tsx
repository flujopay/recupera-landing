"use client";

import { DropDownCard } from "@/ui/shared/DropDownCard";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "¿Cuánto toma ver resultados?",
    answer: "Primeros contactos en 48-72h. Acuerdos típicamente en 2 semanas.",
  },
  {
    question: "¿Qué pasa si no recuperan nada?",
    answer: "No pagas nada. Modelo 100% contingente.",
  },
  {
    question: "¿Se preservan las relaciones?",
    answer:
      "Nuestro enfoque profesional preserva vínculos comerciales. 40 años de experiencia Recsa.",
  },
  {
    question: "¿Trabajan solo cartera vencida?",
    answer:
      "Sí, cartera +60 días vencida. Para cobranza preventiva, usa la plataforma Sena.",
  },
  {
    question: "¿En qué países operan?",
    answer:
      "15 países LATAM: Chile, Perú, Colombia, México, Argentina, Brasil, y más.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div id="preguntas-frecuentes" className="bg-white py-12 md:py-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-12">
        <div className="text-left mb-12">
          <h2 className="text-brand-primary-dark text-3xl md:text-4xl font-extrabold mb-4">
            Preguntas <span className="text-brand-primary">frecuentes</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <DropDownCard
              key={index}
              isOpen={openIndex === index}
              customClassName="bg-white border-2 border-slate-200 rounded-2xl shadow-sm"
              contentHead={
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full px-6 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-all duration-300"
                >
                  <span className="text-brand-primary-dark font-bold text-xl pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-6 w-6 text-brand-primary transition-transform duration-300 shrink-0 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
              }
              contentDetail={
                <div className="px-6 mb-6 pt-2">
                  <p className="text-slate-600 text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};
