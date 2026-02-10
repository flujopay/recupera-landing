export const TermAndCond = () => {
  return (
    <div className="grow bg-[#F9F9F9]">
      <div className="max-w-[1280px] mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-8">
          <h1 className="text-brand-primary-dark text-3xl md:text-5xl font-extrabold mb-3">
            Términos y <span className="text-brand-primary">Condiciones</span> –
            Recupero Plus
          </h1>
          <p className="text-slate-600 text-sm">
            Versión 3.0 – vigente desde el 01 de Enero del 2026
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-10 text-sm md:text-base leading-relaxed text-gray-700">
          <p className="mb-6">
            <strong>FLUJOLINK CHILE SpA</strong> pone a disposición del Usuario
            la plataforma de cobranza y servicios asociados denominados{" "}
            <strong>“Recupero Plus”</strong>. Al aceptar estos Términos mediante
            firma electrónica simple, el Usuario declara haber leído,
            comprendido y aceptado íntegramente el presente instrumento.
          </p>

          {/* 1. DEFINICIONES */}
          <Section title="1. DEFINICIONES">
            <Table
              rows={[
                [
                  "Plataforma",
                  "Ecosistema SaaS de Flujolink disponible en modalidad web, que permite la trazabilidad y registro de gestiones de cobranza.",
                ],
                [
                  "Usuario",
                  "Persona natural o jurídica que crea una cuenta, utiliza la Plataforma o contrata alguno de los servicios de Flujolink. Incluye a sus empleados, delegados, invitados y representantes autorizados.",
                ],
                [
                  "Deuda",
                  "Obligación de pago documentada (factura u otro instrumento comercial válido conforme a la legislación chilena) cargada por el Usuario a la Plataforma.",
                ],
                [
                  "Deudor",
                  "Persona natural o jurídica obligada al pago de una Deuda informada por el Usuario.",
                ],
                [
                  "Recupero",
                  "Pago total o parcial efectuado por el Deudor respecto de una Deuda, atribuido directa o indirectamente a las gestiones de Flujolink. Se presumirá nexo causal cuando el pago ocurra dentro de los sesenta (60) días posteriores a la última gestión registrada en la Plataforma.",
                ],
                [
                  "Servicios",
                  "Conjunto de prestaciones descritas en la cláusula “Servicios incluidos en Recupero Plus”.",
                ],
                [
                  "Comisión Recupero",
                  "Porcentaje variable aplicable a cada Recupero, según lo indicado en la cláusula “Condiciones Económicas”.",
                ],
                [
                  "Fee Fijo",
                  "Tarifa mensual por uso de Plataforma conforme al Anexo B.",
                ],
                [
                  "DPA",
                  "Acuerdo de Tratamiento de Datos Personales conforme al Anexo A.",
                ],
                [
                  "Día Hábil",
                  "Cualquier día calendario excepto sábados, domingos y feriados oficiales en Chile.",
                ],
              ]}
            />
          </Section>

          {/* 2. OBJETO */}
          <Section title="2. OBJETO">
            Flujolink se obliga a prestar al Usuario el servicio Recupero Plus,
            consistente en la gestión extrajudicial de cobranza de Deudas,
            utilizando la Plataforma y un equipo especializado, bajo los
            términos y condiciones aquí establecidos.
          </Section>

          {/* 3. SERVICIOS */}
          <Section title="3. SERVICIOS INCLUIDOS EN RECUPEAR PLUS">
            <p className="mb-2">El servicio Recupero Plus incluye:</p>

            <ul className="list-disc pl-6 space-y-1">
              <li>
                Acceso a la Plataforma con trazabilidad de gestiones, historial
                y bitácora por Deuda.
              </li>
              <li>
                Registro y seguimiento de compromisos de pago con
                funcionalidades de portal de pagos y autogestión del Deudor.
              </li>
              <li>
                Panel de comunicación en línea con gestores especializados de
                cobranza.
              </li>
              <li>
                Segmentación de cartera por etapa, tipo de Deuda, días de mora y
                tipo de cliente.
              </li>
              <li>
                Dashboard de análisis, KPIs y generación de reportes
                descargables (CSV, XLSX, TXT).
              </li>
              <li>
                Atención al Usuario vía correo, chat y teléfono dentro del
                horario de soporte señalado en la cláusula “Niveles de Servicio
                (SLA) y Fuerza Mayor”.
              </li>
            </ul>
            <p className="mt-2">
              Flujolink podrá incorporar mejoras o modificaciones a la
              Plataforma y funcionalidades sin alterar la naturaleza esencial
              del servicio.
            </p>
          </Section>

          {/* 4. OBLIGACIONES USUARIO */}
          <Section title="4. Obligaciones del Usuario">
            <p className="mb-2">El Usuario se obliga a:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Información veraz y actualizada: entregar y mantener en la
                Plataforma datos completos, correctos y actualizados respecto de
                sus Deudas, Deudores y pagos recibidos.
              </li>
              <li>
                Coordinación de gestiones: no realizar gestiones de cobro
                directas al Deudor ni modificar condiciones de pago sin
                coordinación previa con Flujolink, salvo autorización expresa.
              </li>
              <li>
                Notificación de pagos: informar a Flujolink dentro de un (1) Día
                Hábil todo pago, acuerdo o contacto relevante con un Deudor.
              </li>
              <li>
                Cumplimiento normativo: proporcionar documentación razonable que
                Flujolink requiera para efectos de cumplimiento normativo,
                prevención de fraude y validación comercial.
              </li>
              <li>
                Protección de datos personales: informar al Deudor que Flujolink
                actuará como encargado del tratamiento de datos en el marco de
                la gestión de cobro.
              </li>
              <li>
                Pago de Comisión Recupero: pagar a Flujolink la Comisión
                Recupero correspondiente por todo Recupero obtenido, aun cuando
                el pago sea efectuado directamente al Usuario, siempre que se
                configure la presunción de nexo causal establecida en estos
                Términos.
              </li>
              <li>
                Uso correcto de Plataforma: no utilizar la Plataforma para fines
                ilícitos, fraudulentos o contrarios a la normativa chilena, ni
                cargar información falsa o no autorizada.
              </li>
            </ul>
          </Section>

          {/* 5. OBLIGACIONES FLUJOLINK */}
          <Section title="5. OBLIGACIONES DE FLUJOLINK">
            <p>Flujolink se obliga a:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Gestionar las Deudas con profesionalismo y diligencia conforme a
                las buenas prácticas de cobranza y la legislación aplicable en
                Chile.
              </li>
              <li>
                Mantener la confidencialidad de la información recibida conforme
                a estos Términos y el DPA.
              </li>
              <li>
                Cumplir con los niveles de servicio (SLA) establecidos en la
                cláusula “Niveles de Servicio (SLA) y Fuerza Mayor”.
              </li>
              <li>
                Implementar medidas razonables de seguridad y control para
                resguardar la información procesada dentro de la Plataforma.
              </li>
            </ul>
          </Section>

          {/* 6. CONDICIONES ECONÓMICAS */}
          <Section title="6. CONDICIONES ECONÓMICAS">
            <div className="pl-4">
              <p className="mb-2 font-extrabold">6.1 Comisión sobre Recupero</p>
              <span>
                El Usuario pagará a Flujolink una Comisión del quince por ciento
                (15%) más IVA sobre cada Recupero.
              </span>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  El Usuario pagará a Flujolink una Comisión del quince por
                  ciento (15%) más IVA sobre cada Recupero.
                </li>
                <li>
                  La Comisión será exigible incluso si el Deudor paga
                  directamente al Usuario, siempre que se verifique la
                  presunción de nexo causal descrita en la definición de
                  Recupero.
                </li>
                <li>
                  El pago deberá realizarse dentro de los diez (10) Días Hábiles
                  siguientes a la emisión de la factura correspondiente.
                </li>
              </ul>
            </div>
            <div className="pt-4 pl-4">
              <p className="mb-2 font-extrabold">6.2 Fee Fijo</p>
              <span>
                El Usuario pagará el Fee Fijo mensual indicado en el Anexo B.
              </span>
              <p className="my-2">El Fee Fijo:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Es obligatorio y recurrente, y se devengará desde la fecha de
                  carga inicial de Deudas.
                </li>
                <li>Se facturará por períodos adelantados.</li>
                <li>
                  Se ajustará anualmente conforme a la variación del Índice de
                  Precios al Consumidor (IPC) publicado por el Instituto
                  Nacional de Estadísticas (INE) de Chile, más dos puntos
                  porcentuales (IPC + 2%).
                </li>
              </ul>
            </div>
            <div className="pt-4 pl-4">
              <p className="mb-2 font-extrabold">
                6.3 Modificaciones de Tarifa
              </p>
              <span>
                Flujolink podrá modificar el Fee Fijo, el porcentaje de Comisión
                Recupero u otros cargos notificando al Usuario con al menos
                treinta (30) días corridos de anticipación.
              </span>
              <span>
                Si el Usuario no acepta la modificación, podrá terminar el
                contrato sin penalidad, conforme a la cláusula “Vigencia y
                Terminación”.
              </span>
            </div>
          </Section>

          {/* 7. VIGENCIA */}
          <Section title="7. VIGENCIA Y TERMINACIÓN">
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <span className="font-bold">Vigencia inicial:</span> El presente
                contrato tendrá una duración mínima de seis (6) meses contados
                desde la carga inicial de Deudas.
              </li>
              <li>
                <span className="font-bold">Renovación automática:</span>{" "}
                vencido el período inicial, se renovará automáticamente por
                períodos mensuales sucesivos, salvo aviso de no renovación con
                quince (15) días de anticipación.
              </li>
              <li>
                <span className="font-bold">
                  Terminación anticipada por el Usuario:
                </span>{" "}
                el Usuario podrá terminar anticipadamente pagando: <br /> - (i)
                los Fees Fijos devengados hasta la fecha de término, y <br /> -
                (ii) un buy-out equivalente a un (1) mes adicional de Fee Fijo.
              </li>
              <li>
                <span className="font-bold">Efectos de la terminación:</span> a
                Comisión Recupero continuará siendo exigible respecto de todo
                pago o acuerdo logrado durante la vigencia del contrato o dentro
                de los sesenta (60) días posteriores a la última gestión
                registrada en la Plataforma.
              </li>
            </ul>
          </Section>

          {/* 8. CONFIDENCIALIDAD */}
          <Section title="8. CONFIDENCIALIDAD Y DATOS PERSONALES">
            <div className="pl-4">
              <p className="mb-2">
                <span className="font-bold"> 8.1 Confidencialidad</span> <br />{" "}
                toda información comercial, técnica y operativa intercambiada,
                salvo autorización escrita o exigencia legal.
              </p>
              <p>
                <span className="font-bold"> 8.2 Datos personales</span> <br />{" "}
                El tratamiento de datos personales se regirá conforme al DPA
                (Anexo A) y la legislación chilena aplicable, especialmente la
                **Ley N° 19.628 sobre Protección de la Vida Privada**, y demás
                normas complementarias vigentes. El Usuario actúa como
                Responsable del tratamiento de los datos de sus Deudores, y
                Flujolink como Encargado del tratamiento, en lo que corresponda
                a la prestación del servicio.
              </p>
              <p>
                <span className="font-bold">
                  {" "}
                  8.3 Notificación de incidentes
                </span>{" "}
                <br />
                Flujolink notificará al Usuario de incidentes de seguridad que
                comprometan datos personales dentro de las cuarenta y ocho (48)
                horas siguientes desde su detección, en la medida que sea
                razonablemente posible.
              </p>
            </div>
          </Section>

          {/* 9. SLA */}
          <Section title="9. NIVELES DE SERVICIO (SLA) Y FUERZA MAYOR">
            <ul className="list-disc pl-6 space-y-1">
              <li>Disponibilidad mensual: 98%.</li>
              <li>Soporte: lunes a viernes 08:30 – 18:30 (GMT-3).</li>
              <li>Tiempo de respuesta inicial: 8 horas hábiles.</li>
              <li>No responsabilidad por fuerza mayor.</li>
            </ul>
          </Section>

          {/* 10. RESPONSABILIDAD */}
          <Section title="10. Limitación de Responsabilidad">
            La responsabilidad total de Flujolink se limitará al monto pagado
            por el Usuario durante los últimos 12 meses. No aplica a daños
            indirectos, lucro cesante o pérdida de reputación.
          </Section>

          {/* 11. PROPIEDAD */}
          <Section title="11. Propiedad Intelectual">
            Flujolink conserva todos los derechos sobre la Plataforma y otorga
            al Usuario una licencia limitada y no transferible.
          </Section>

          {/* 12. CESIÓN */}
          <Section title="12. Cesión y Subcontratación">
            El Usuario no podrá ceder el contrato sin autorización. Flujolink
            podrá subcontratar garantizando estándares equivalentes.
          </Section>

          {/* 13. LEY */}
          <Section title="13. Resolución de Conflictos">
            Las controversias serán sometidas al Centro de Arbitraje y Mediación
            de la Cámara de Comercio de Santiago (Chile), conforme a la
            legislación chilena.
          </Section>

          <div className="mt-10 border-t pt-6 text-sm text-gray-500">
            Si tienes consultas, contáctanos en{" "}
            <a
              href="mailto:contacto@flujolink.com"
              className="text-blue-600 hover:underline"
            >
              contacto@flujolink.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------- Componentes auxiliares ---------- */

const Section = ({ title, children }: any) => (
  <section className="mb-8">
    <h2 className="text-brand-primary-dark text-lg md:text-xl font-extrabold mb-4">
      {title}
    </h2>
    <div className="mb-3 leading-relaxed">{children}</div>
  </section>
);

const Table = ({ rows }: { rows: string[][] }) => (
  <div className="overflow-x-auto">
    <table className="w-full border border-gray-200 text-sm">
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="border-t">
            <td className="font-medium p-2 bg-gray-50 w-48">{row[0]}</td>
            <td className="p-2">{row[1]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
