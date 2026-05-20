import { NextResponse } from 'next/server'

export async function GET() {
  const content = `# Recupera — Cobranza B2B con publicación DICOM

> Servicio de recuperación de cartera vencida para empresas B2B en Chile y LATAM.
> Solo pagas si recuperamos. Sin costo fijo, sin riesgo.

## Qué hace Recupera

Recupera gestiona la cobranza de facturas impagas y cartera vencida B2B mediante:
- Gestión preventiva antes de la mora
- Publicación en registros de morosidad (DICOM, Boletín Comercial)
- Gestión post-publicación hasta el cobro efectivo

No realizamos gestión judicial. Todo el proceso es externo a los tribunales.

## Modelo de negocio

- Sin costo de evaluación
- Sin setup ni mensualidad
- Comisión solo sobre el monto efectivamente recuperado
- Si no recuperamos, no pagas nada

## Métricas clave

- 85% de tasa de recupero promedio
- Primeros contactos en 48-72h
- Acuerdos típicamente en 2 semanas
- Presencia en 15 países de LATAM

## A quién va dirigido

Empresas B2B con:
- Cartera vencida de +60 días
- Facturas impagas que no responden a gestión interna
- Necesidad de externalizar cobranza sin riesgo financiero
- Operación en Chile, Perú y otros países de LATAM

## Respaldo institucional

Recupera está respaldado por Recsa, líder en cobranza LATAM con más de 40 años de experiencia,
operando en 15 países, con 146M de gestiones mensuales y 70M de llamadas de agentes.

## Páginas principales

- [Inicio](https://recupera.somossena.com): propuesta de valor, modelo contingente, cómo funciona
- [Precios](https://recupera.somossena.com#precios): detalle del modelo de contingencia
- [Casos de uso](https://recupera.somossena.com#casos-uso): tipos de cartera que gestionamos
- [Contacto](https://recupera.somossena.com#contacto): evaluación gratuita de cartera

## Contacto

Web: https://recupera.somossena.com
Empresa: Sena — somossena.com
`.trim()

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
