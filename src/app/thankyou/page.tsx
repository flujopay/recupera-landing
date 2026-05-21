import type { Metadata } from 'next'
import { ThankyouPage } from '@/ui/thankyou/ThankyouPage'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

const Thankyou = () => {
  return <ThankyouPage />
}

export default Thankyou
