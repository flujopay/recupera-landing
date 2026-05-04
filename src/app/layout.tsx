import { getCountriesServer } from '@/lib/services/countryService.server'
import { getIpInfoServer } from '@/lib/services/ipConfigService.server'
import { ModalRenderer } from '@/ui/shared/ModalRender'
import { Toast } from '@/ui/shared/Toast'
import Whatsapp from '@/ui/shared/WhatsApp'
import type { Metadata } from 'next'
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'
import { Suspense } from 'react'
import { adobeCleanFont, canaroFont, caslonFont } from './fonts'
import './globals.css'
import Providers from './providers'

export const metadata: Metadata = {
  title: 'Recupera - El mejor CRM de cobranza y pagos B2B',
  description:
    'Optimiza tu gestión de cobranza y pagos de facturas con Recupera, el CRM B2B que simplifica procesos, mejora la eficiencia y acelera tus ingresos.',
  keywords:
    'CRM cobranza, pagos B2B, facturación, gestión de pagos, CRM empresas, automatización de cobranza, Recupera',
  authors: [{ name: 'Recupera' }],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Recupera - El mejor CRM de cobranza y pagos B2B',
    description:
      'Con Recupera, simplifica y acelera la gestión de tus cobros y pagos. Una solución para empresas enfocada en eficiencia y resultados.',
    type: 'website',
    url: 'https://recupera.somossena.com',
    images: ['https://recupera.somossena.com/sena-crm-lite.jpg'],
    siteName: 'Recupera',
    locale: 'es_PE',
  },
  other: {
    'facebook-domain-verification': 'tyjmxihsgkrx666ql4rwmnhsftl6hv',
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [ipInfo, countries] = await Promise.all([getIpInfoServer(), getCountriesServer()])
  const country = ipInfo?.country || null

  return (
    <Providers country={country} countries={countries}>
      <html lang="es" dir="ltr">
        <GoogleTagManager gtmId="GTM-M9XSZFKQ" />
        <head>
          {/* Google Ads — Recupera (AW-17962976949 / conv: sCCeCNfunKccELWNtfVC) */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=AW-17962976949"
            strategy="afterInteractive"
          />
          <Script id="google-ads-recupera" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17962976949');
              gtag('config', 'G-RVBY3W52WS');
            `}
          </Script>
          {/* Meta Pixel — Recupera (2395310237641682) */}
          <Script id="meta-pixel-recupera" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
              n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
              (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '2395310237641682');
              fbq('track', 'PageView');
            `}
          </Script>
          <noscript>
            <img height="1" width="1" style={{ display: 'none' }}
              src="https://www.facebook.com/tr?id=2395310237641682&ev=PageView&noscript=1" alt="" />
          </noscript>
        </head>
        <body
          className={`${canaroFont.variable} ${adobeCleanFont.variable} ${caslonFont.variable} antialiased font-adobe`}
        >
          <Script id="disable-debugger" strategy="beforeInteractive">
            {`
              (function() {
                  const originalDebugger = window.debugger;
                  window.debugger = function() { return; };
              })();
            `}
          </Script>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-M9XSZFKQ"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
          <Suspense>{children}</Suspense>
          <ModalRenderer />
          <Toast />
          <Whatsapp message="Hola, vi su web y quiero saber más sobre Recupera y cómo funciona." animated />
        </body>
      </html>
    </Providers>
  )
}
