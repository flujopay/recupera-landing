import { getCountriesServer } from "@/lib/services/countryService.server";
import { getIpInfoServer } from "@/lib/services/ipConfigService.server";
import { ModalRenderer } from "@/ui/shared/ModalRender";
import { Toast } from "@/ui/shared/Toast";
import Whatsapp from "@/ui/shared/WhatsApp";
import type { Metadata } from "next";
import Script from "next/script";
import { Suspense } from "react";
import { adobeCleanFont, canaroFont, caslonFont } from "./fonts";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Recupera - El mejor CRM de cobranza y pagos B2B",
  description:
    "Optimiza tu gestión de cobranza y pagos de facturas con Recupera, el CRM B2B que simplifica procesos, mejora la eficiencia y acelera tus ingresos.",
  keywords:
    "CRM cobranza, pagos B2B, facturación, gestión de pagos, CRM empresas, automatización de cobranza, Recupera",
  authors: [{ name: "Recupera" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Recupera - El mejor CRM de cobranza y pagos B2B",
    description:
      "Con Recupera, simplifica y acelera la gestión de tus cobros y pagos. Una solución para empresas enfocada en eficiencia y resultados.",
    type: "website",
    url: "https://recupera.somossena.com",
    images: ["https://recupera.somossena.com/sena-crm-lite.jpg"],
    siteName: "Recupera",
    locale: "es_PE",
  },
  other: {
    "facebook-domain-verification": "tyjmxihsgkrx666ql4rwmnhsftl6hv",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [ipInfo, countries] = await Promise.all([
    getIpInfoServer(),
    getCountriesServer(),
  ]);
  const country = ipInfo?.country || null;

  return (
    <Providers country={country} countries={countries}>
      <html lang="es" dir="ltr">
        <head>
          {/* Google Tag Manager Script (carga diferida) */}
          <Script id="gtm-script" strategy="lazyOnload">
            {`
                      (function(w,d,s,l,i){
                          w[l]=w[l]||[];
                          w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                          var f=d.getElementsByTagName(s)[0],
                          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                          j.async=true;
                          j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                          f.parentNode.insertBefore(j,f);
                          })(window,document,'script','dataLayer','GTM-T2QDCJ6C');
                          `}
          </Script>
          {/* Google Ads */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=AW-17962976949"
            strategy="afterInteractive"
          />
          <Script id="google-ads-config" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17962976949');
            `}
          </Script>
        </head>
        <body
          className={`${canaroFont.variable} ${adobeCleanFont.variable} ${caslonFont.variable} antialiased font-adobe`}
        >
          {/* Deshabilitar debugger statements */}
          <Script id="disable-debugger" strategy="beforeInteractive">
            {`
              (function() {
                  const originalDebugger = window.debugger;
                  window.debugger = function() {
                      // No hacer nada, deshabilitar pausas del debugger
                      return;
                  };
              })();
            `}
          </Script>
          {/* Fallback para Google Tag Manager */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-T2QDCJ6C"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          <Suspense>{children}</Suspense>
          <ModalRenderer />
          <Toast />
          <Whatsapp
            message="Hola, vi su web y quiero saber más sobre Recupera y cómo funciona."
            animated
          />
        </body>
      </html>
    </Providers>
  );
}
