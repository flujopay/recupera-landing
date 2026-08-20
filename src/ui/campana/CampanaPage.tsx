'use client'

import { AssetImage } from '@/lib/utils/assets/image'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense, useEffect, useState } from 'react'
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  DollarSign,
  MessageCircleOff,
  Users,
  TrendingUp,
  FileSearch,
} from 'lucide-react'
import { ContactForm } from '@/ui/recupera/sections/ContactForm'
import { Credibility } from '@/ui/recupera/sections/Credibility'
import { StickyMobileCTA } from '@/ui/recupera/sections/StickyMobileCTA'
import { Button } from '@/ui/shared/Button'

const scrollToId = (id: string) => {
  const el = document.getElementById(id)
  if (!el) return
  window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 72, behavior: 'smooth' })
}

export const CampanaPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-surface-secondary">
      {/* Header minimal — solo logo + teléfono */}
      <header className="w-full bg-white border-b border-border-default px-4 py-3">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between">
          <Link href="/">
            <Image src={AssetImage.logoBlack} alt="Sena" className="h-7 w-auto" priority />
          </Link>
          <a
            href="tel:+56944489673"
            className="hidden md:block text-sm font-semibold text-brand-primary-dark hover:text-brand-primary transition-colors"
          >
            +56 9 4448 9673
          </a>
          <button
            onClick={() => scrollToId('contacto')}
            className="md:hidden flex items-center gap-1.5 bg-brand-primary text-white text-sm font-bold px-4 py-2 rounded-lg active:scale-[0.97] transition-transform"
          >
            Solicitar evaluación
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="max-w-[1280px] mx-auto px-4 py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary-dark text-xs font-bold px-3 py-1.5 rounded-full mb-6">
              Empresa de cobranza B2B con publicación DICOM en Chile
            </div>

            <h1 className="font-canaro text-brand-primary-dark text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              Recupera tu cartera vencida.{' '}
              <span className="text-brand-primary">Pagas solo si lo logramos.</span>
            </h1>

            <p className="text-text-secondary text-base md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
              Sin costo fijo, sin riesgo. Solo pagas un porcentaje sobre lo que efectivamente recuperamos.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
              <Button
                text="Solicita Evaluación Gratuita"
                variant="secondaryFilled"
                size="lg"
                onClick={() => scrollToId('contacto')}
                rightIcon={<ArrowRight className="h-5 w-5" />}
                className="w-full sm:w-auto min-h-[48px]"
              />
              <Button
                text="Ver Cómo Funciona"
                variant="primaryInvertedFilled"
                size="lg"
                onClick={() => scrollToId('como-funciona')}
                className="w-full sm:w-auto min-h-[48px] border border-border-default"
              />
            </div>

            {/* Stats bar */}
            <div className="grid grid-cols-3 gap-4 bg-white rounded-2xl shadow-lg p-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-extrabold text-brand-primary mb-1">+85%</div>
                <div className="text-text-secondary text-xs md:text-sm font-medium leading-tight">
                  Tasa de recuperación
                </div>
              </div>
              <div className="text-center border-x border-border-default">
                <div className="text-2xl md:text-3xl font-extrabold text-brand-primary mb-1">15%</div>
                <div className="text-text-secondary text-xs md:text-sm font-medium leading-tight">
                  Comisión, solo si recuperamos
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-extrabold text-brand-primary mb-1">$0</div>
                <div className="text-text-secondary text-xs md:text-sm font-medium leading-tight">
                  Costo inicial
                </div>
              </div>
            </div>
          </div>
        </section>

        <Credibility />

        {/* Casos de uso — agitación */}
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-[1280px] mx-auto px-4">
            <h2 className="text-brand-primary-dark text-2xl md:text-3xl font-extrabold text-center mb-2">
              ¿Tu empresa está en alguno de estos casos?
            </h2>
            <p className="text-text-secondary text-center mb-10">
              Si tu cartera vencida se acumula, hay una forma de recuperarla sin arriesgar nada.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  icon: <Calendar className="h-6 w-6 text-brand-primary" />,
                  title: 'Facturas +90 días vencidas',
                  desc: 'Clientes corporativos con pagos atrasados que requieren negociación profesional.',
                },
                {
                  icon: <MessageCircleOff className="h-6 w-6 text-brand-primary" />,
                  title: 'Deudores que no responden',
                  desc: 'Clientes que dejaron de responder. La publicación en DICOM reactiva la conversación.',
                },
                {
                  icon: <DollarSign className="h-6 w-6 text-brand-primary" />,
                  title: 'Facturas de alto valor sin gestión activa',
                  desc: 'Cuando el monto justifica externalizar con especialistas que trabajan solo a contingencia.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-slate-50 rounded-2xl p-6 border border-border-default">
                  <div className="h-10 w-10 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-brand-primary-dark text-base mb-2">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cómo funciona */}
        <section id="como-funciona" className="py-12 md:py-16">
          <div className="max-w-[1280px] mx-auto px-4">
            <h2 className="text-brand-primary-dark text-2xl md:text-3xl font-extrabold text-center mb-10">
              ¿Cómo recuperamos tu cartera?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  icon: <FileSearch className="h-6 w-6 text-brand-primary" />,
                  step: '01',
                  title: 'Evaluación Gratuita',
                  desc: 'Analizamos tu cartera y priorizamos casos según probabilidad de recuperación. Resultado en 24-48 horas.',
                },
                {
                  icon: <Users className="h-6 w-6 text-brand-primary" />,
                  step: '02',
                  title: 'Gestión Humana + IA',
                  desc: 'Contactamos a tus deudores, con publicación DICOM cuando corresponde. Preservamos la relación donde es posible.',
                },
                {
                  icon: <TrendingUp className="h-6 w-6 text-brand-primary" />,
                  step: '03',
                  title: 'Recuperación + Dashboard',
                  desc: 'Pagos directos a tu cuenta. Dashboard en tiempo real con progreso y proyecciones.',
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-border-default"
                >
                  <div className="text-4xl font-extrabold text-brand-primary/20 mb-3">{item.step}</div>
                  <h3 className="font-bold text-brand-primary-dark text-base mb-2">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust signals */}
        <section className="bg-white py-10 border-y border-border-default">
          <div className="max-w-[1280px] mx-auto px-4">
            <div className="flex flex-col items-center gap-5">
              <div className="flex flex-wrap justify-center gap-5">
                {['Sin costo inicial', 'Sin compromiso', 'Respuesta en 24h', 'Modelo 100% contingente'].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-2 text-text-secondary text-sm">
                      <CheckCircle className="h-4 w-4 text-brand-primary shrink-0" />
                      <span>{item}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Contact form — inline, reusa el form real de Recupera (HubSpot + tracking) */}
        <Suspense>
          <ContactForm />
        </Suspense>
      </main>

      {/* Footer minimal */}
      <footer className="bg-white border-t border-border-default py-6 px-4">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-text-disabled">
          <Link href="/">
            <Image src={AssetImage.logoBlack} alt="Sena" className="h-5 w-auto opacity-60" loading="lazy" />
          </Link>
          <div className="flex gap-4">
            <Link href="/term" className="hover:text-text-secondary transition-colors">
              Términos
            </Link>
            <Link href="/privacy" className="hover:text-text-secondary transition-colors">
              Privacidad
            </Link>
            <a href="https://somossena.com" className="hover:text-text-secondary transition-colors">
              somossena.com
            </a>
          </div>
        </div>
      </footer>

      <StickyMobileCTA />
    </div>
  )
}
