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
          <p className="mb-4">
            <strong>FLUJOLINK CHILE SpA</strong>, sociedad constituida bajo las
            leyes de la República de Chile, <strong>RUT N° 77891013-6</strong>, con
            domicilio en <strong>ESTADO 369 OF 200</strong>, comuna de <strong>Santiago</strong>,
            Región <strong>METROPOLITANA</strong>, Chile (en adelante, «
            <strong>Flujolink</strong>»), pone a disposición de la persona
            natural o jurídica que acepte estos Términos (el «Usuario») la
            plataforma de cobranza y los servicios asociados denominados{" "}
            <strong>“Recupero Plus”</strong>.
          </p>

          <p className="mb-4">
            Estas condiciones contractuales (los «<strong>Términos</strong>»)
            rigen la relación jurídica y comercial entre Flujolink y el Usuario
            respecto del acceso y uso de la Plataforma y de los Servicios. Al
            aceptar estos Términos mediante firma electrónica simple, el Usuario
            manifiesta haber leído, comprendido y aceptado íntegramente el
            contenido del presente instrumento y de sus Anexos.
          </p>

          <p className="mb-6">
            Los registros electrónicos (IP, dispositivo, medio, fecha, hora y
            versión de los Términos) quedarán resguardados por Flujolink y
            constituirán prueba suficiente de aceptación.
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
              <li>
                Disponibilidad: Flujolink se compromete a una disponibilidad
                mensual de la Plataforma no inferior al noventa y ocho por
                ciento (98%), excluyendo mantenimientos programados comunicados
                con veinticuatro (24) horas de anticipación.
              </li>
              <li>
                Soporte: horario de atención lunes a viernes de 08:30 a 18:30
                (GMT-3). Tiempo de respuesta inicial: ocho (8) horas hábiles.
              </li>
              <li>
                Fuerza mayor: ninguna Parte será responsable por incumplimientos
                causados por eventos fuera de su control razonable (fallas
                masivas de internet, desastres naturales, huelgas generales,
                actos de autoridad, etc.).
              </li>
            </ul>
          </Section>

          {/* 10. RESPONSABILIDAD */}
          <Section title="10. LIMITACIÓN DE RESPONSABILIDAD">
            <p>
              La responsabilidad total de Flujolink, contractual o
              extracontractual, ante el Usuario o terceros, se limitará al monto
              total de Fees Fijos y Comisiones pagados por el Usuario a
              Flujolink en los doce (12) meses anteriores al hecho generador.
            </p>
            <p>
              En ningún caso Flujolink será responsable por daños indirectos,
              lucro cesante, pérdida de datos o reputación.
            </p>
          </Section>

          {/* 11. PROPIEDAD INTELECTUAL */}
          <Section title="11. PROPIEDAD INTELECTUAL">
            <p>
              Flujolink retiene todos los derechos de propiedad intelectual
              sobre la Plataforma, su código fuente, bases de datos, marcas y
              documentación.
            </p>
            <p>
              Flujolink otorga al Usuario una licencia limitada, no exclusiva,
              no transferible y revocable para acceder y utilizar la Plataforma
              conforme a estos Términos.
            </p>
          </Section>

          {/* 12. CESIÓN */}
          <Section title="12. CESIÓN Y SUBCONTRATACIÓN">
            <p>
              El Usuario no podrá ceder este contrato sin autorización escrita
              de Flujolink.
            </p>
            <p>
              Flujolink podrá subcontratar servicios de terceros
              (subprocesadores), garantizando que dichos terceros mantengan
              niveles de protección equivalentes a los aquí previstos.
            </p>
          </Section>

          {/* 13. LEY */}
          <Section title="13. RESOLUCIÓN DE CONFLICTOS Y LEY APLICABLE">
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <span className="font-bold">Negociación directa:</span> las
                Partes procurarán resolver de buena fe cualquier controversia
                mediante negociación directa durante un plazo de quince (15)
                días corridos.
              </li>
              <li>
                <span className="font-bold">Arbitraje:</span> si no se alcanza
                solución, toda controversia será sometida a arbitraje
                institucional administrado por el Centro de Arbitraje y
                Mediación de la Cámara de Comercio de Santiago (CCS), conforme a
                su reglamento vigente.
              </li>
              <li>
                <span className="font-bold">Sede y árbitro:</span> la sede será
                Santiago de Chile, y el arbitraje será conducido por un (1)
                árbitro arbitrador. El laudo será definitivo y vinculante.
              </li>
              <li>
                <span className="font-bold">Ley aplicable: </span> estos
                Términos se regirán por las leyes de la República de Chile.
              </li>
            </ul>
          </Section>

          {/* ANEXO A */}
          <section className="mt-12">
            <h2 className="text-brand-primary-dark text-lg md:text-2xl font-extrabold mb-4">
              ANEXO A: ACUERDO DE TRATAMIENTO DE DATOS PERSONALES (DPA)
            </h2>

            <h3 className="text-lg font-semibold mt-6 mb-2">
              1. Responsable del tratamiento
            </h3>
            <p className="mb-4">
              <strong>FLUJOLINK CHILE SpA</strong>, RUT N° <strong>77891013-6</strong>,
              con domicilio en <strong>ESTADO 369 OF 200</strong>, comuna de <strong>Santiago</strong>,
              Región <strong>METROPOLITANA</strong>, Chile.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">
              2. Finalidades del tratamiento
            </h3>
            <p className="mb-2">
              Flujolink tratará los datos personales del Usuario para:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>
                Gestión contractual y precontractual: alta del Usuario,
                evaluación comercial, facturación, cobranza y atención de
                requerimientos.
              </li>
              <li>
                Acceso y operación de la Plataforma: creación de cuentas,
                autenticación, perfiles y trazabilidad de gestiones.
              </li>
              <li>
                Soporte y comunicaciones: atención por correo, chat y teléfono.
              </li>
              <li>
                Seguridad y continuidad operativa: monitoreo de accesos,
                prevención de fraude, respaldo y auditoría.
              </li>
              <li>
                Cumplimiento legal: atención de requerimientos tributarios,
                contables o judiciales.
              </li>
              <li>
                Comunicaciones informativas o comerciales: sobre mejoras o
                novedades del servicio, según autorización del Usuario.
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-6 mb-2">
              3. Destinatarios y transferencias
            </h3>
            <p className="mb-4">
              Flujolink podrá compartir información con proveedores
              tecnológicos, asesores legales, auditores y entidades financieras
              cuando sea necesario para la ejecución del servicio.
            </p>
            <p className="mb-4">
              Asimismo, Flujolink podrá efectuar transferencias internacionales
              de datos, especialmente para servicios de almacenamiento en la
              nube, asegurando estándares razonables de seguridad y
              confidencialidad.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">
              4. Plazo de conservación
            </h3>
            <p className="mb-4">
              Los datos personales serán conservados mientras exista relación
              contractual y posteriormente por los plazos necesarios para
              cumplimiento de obligaciones legales y prescripción de acciones.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">
              5. Derechos del titular
            </h3>
            <p className="mb-4">
              El Usuario podrá ejercer los derechos de acceso, rectificación,
              cancelación y oposición conforme a la Ley N° 19.628, solicitándolo
              al correo{" "}
              <a
                href="mailto:hola@somossena.com"
                className="text-blue-600 hover:underline"
              >
                hola@somossena.com
              </a>
              .
            </p>
          </section>

          {/* ANEXO B */}
          <section className="mt-12">
            <h2 className="text-brand-primary-dark text-lg md:text-2xl font-extrabold mb-4">
              ANEXO B: FEE FIJO Y CONDICIONES COMERCIALES
            </h2>

            <p>
              El Fee Fijo mensual será el indicado en la propuesta comercial
              aceptada por el Usuario, y se facturará mensualmente por
              adelantado.
            </p>
          </section>
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
