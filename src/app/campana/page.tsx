import type { Metadata } from 'next'
import { CampanaPage } from '@/ui/campana/CampanaPage'

export const metadata: Metadata = {
  title: 'Recupera tu cartera vencida | Sena',
  description:
    'Empresa de cobranza B2B con publicación DICOM en Chile. Sin costo fijo, sin riesgo. Pagas solo si recuperamos.',
  robots: { index: false, follow: false },
}

export default function Campana() {
  return (
    <div className="w-full">
      <CampanaPage />
    </div>
  )
}
