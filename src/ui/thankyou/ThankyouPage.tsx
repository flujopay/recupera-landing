"use client";

import { AssetImage } from "@/lib/utils/assets/image";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    fbq?: (...args: unknown[]) => void;
  }
}

export const ThankyouPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (!window.dataLayer) {
      window.dataLayer = [];
    }
    window.dataLayer.push({
      event: "conversion_event_signup_2",
      origin: "main",
    });
    if (window.fbq) {
      window.fbq("track", "Lead");
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#F9F9F9] flex flex-col">
      {/* Header */}
      <div className="w-full py-6 flex justify-center">
        <button onClick={() => router.push("/")} className="cursor-pointer">
          <Image src={AssetImage.logoBlack} alt="Sena" className="w-36" />
        </button>
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-4 pb-16">
        <div className="w-full max-w-lg">
          {/* Card */}
          <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-slate-100 overflow-hidden">
            {/* Top accent bar */}
            <div className="h-1.5 bg-linear-to-r from-brand-primary via-brand-primary to-brand-secondary" />

            <div className="px-8 pt-10 pb-10 md:px-12">
              {/* Success icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Title */}
              <h1 className="font-canaro text-brand-primary-dark text-2xl md:text-3xl font-extrabold text-center leading-tight mb-3">
                ¡Hemos recibido tus datos
                <br />
                <span className="text-brand-primary">correctamente!</span>
              </h1>

              {/* Description */}
              <p className="text-slate-600 text-center text-sm md:text-base leading-relaxed mb-2">
                En breve nos pondremos en contacto contigo para continuar con el proceso.
              </p>

              <p className="text-brand-primary-dark text-center text-sm md:text-base font-bold leading-relaxed mb-8">
                Si prefieres avanzar de inmediato, puedes agendar tu reunión ahora mismo.
              </p>

              {/* CTA */}
              <div className="flex justify-center">
                <Link
                  href="https://meetings.hubspot.com/francisco472"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-brand-secondary hover:bg-brand-secondary-dark text-white font-bold text-sm md:text-base px-6 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-brand-secondary/25 hover:scale-[1.02]"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M3 10H21" stroke="currentColor" strokeWidth="2" />
                    <path d="M8 14H8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M12 14H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M16 14H16.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M8 18H8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M12 18H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  Agendar mi reunión ahora
                </Link>
              </div>
            </div>
          </div>

          {/* Footer trust */}
          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="flex items-center gap-6 text-slate-400 text-xs">
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" /><path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Sin compromiso
              </span>
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" /><path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                30 min
              </span>
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" /></svg>
                Equipo experto
              </span>
            </div>

            <button
              onClick={() => router.push("/")}
              className="text-brand-primary text-sm font-semibold hover:underline cursor-pointer flex items-center gap-1"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Volver al inicio
            </button>

            <p className="text-slate-300 text-xs mt-2">
              Sena — <span className="font-caslon">El arte de cobrar bien</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
