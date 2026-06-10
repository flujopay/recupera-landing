'use client'

import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'

export const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const form = document.getElementById('contacto')
    if (!form) return

    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), {
      threshold: 0,
    })
    observer.observe(form)
    return () => observer.disconnect()
  }, [])

  const scrollToForm = () => {
    const element = document.getElementById('contacto')
    if (!element) return
    const offset = 72
    const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-slate-200 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] md:hidden">
      <button
        onClick={scrollToForm}
        className="w-full flex items-center justify-center gap-2 bg-brand-primary text-white font-bold py-3.5 px-6 rounded-xl text-base active:scale-[0.98] transition-transform"
      >
        Solicita Evaluación Gratuita
        <ArrowRight className="h-5 w-5" />
      </button>
    </div>
  )
}
