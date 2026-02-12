import Link from "next/link";

export const TermAndCondPeru = () => {
  return (
    <div className="grow bg-[#F9F9F9]">
      <div className="max-w-[1280px] mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-8">
          <h1 className="text-brand-primary-dark text-2xl md:text-5xl font-extrabold mb-3">
            Términos y Condiciones{" "}
            <span className="text-brand-primary">
              &ldquo;Recupero Plus&rdquo;
            </span>
          </h1>
          <p className="text-slate-500 text-sm font-medium">
            Flujolink Perú &middot; Versión 3.0
          </p>
          <p className="text-slate-600 text-sm">
            Vigente desde el 01 de enero del 2026
          </p>
        </div>
        <section className="bg-white text-slate-700 font-normal text-sm md:text-base p-6 md:p-14 rounded-2xl shadow-sm space-y-10">
          {/* Preámbulo */}
          <div>
            <p className="leading-relaxed mb-3">
              <strong>SERVICIOS DE TECNOLOGÍA FLUJOLINK S.A.C.</strong>,
              sociedad constituida bajo las leyes de la República del Perú,
              identificada con RUC N.º 20614129183 y domicilio en Lima, Perú (en
              adelante, &laquo;<strong>Flujolink</strong>&raquo;), pone a
              disposición de la persona natural o jurídica que acepte estos
              Términos (el &laquo;Usuario&raquo;) la plataforma de cobranza y
              los servicios asociados denominados &ldquo;Recupero Plus&rdquo;.
            </p>
            <p className="leading-relaxed mb-3">
              Estas condiciones contractuales (los &laquo;
              <strong>Términos</strong>&raquo;) rigen la relación jurídica y
              comercial entre Flujolink y el Usuario respecto del acceso y uso
              de la Plataforma y de los Servicios. Al aceptar estos Términos
              mediante firma digital simple, el Usuario manifiesta haber leído,
              comprendido y aceptado íntegramente el contenido del presente
              instrumento y de sus Anexos.
            </p>
            <p className="leading-relaxed">
              Los registros electrónicos (IP, dispositivo, medio, fecha, hora y
              versión de los Términos) quedarán resguardados por Flujolink y
              constituirán prueba de aceptación.
            </p>
          </div>
          {/* 1. DEFINICIONES */}
          <div>
            <h2 className="text-brand-primary-dark text-lg md:text-xl font-extrabold mb-4 italic">
              1. Definiciones
            </h2>
            <div className="overflow-x-auto rounded-lg border border-slate-200">
              <table className="w-full text-sm md:text-base">
                <thead>
                  <tr className="bg-brand-primary text-white">
                    <th className="text-left px-4 py-3 font-bold w-1/4">
                      Término
                    </th>
                    <th className="text-left px-4 py-3 font-bold">
                      Definición
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold align-top">
                      Plataforma
                    </td>
                    <td className="px-4 py-3">
                      Ecosistema SaaS de Flujolink disponible en modalidad web,
                      que permite la trazabilidad total de gestiones de
                      cobranza.
                    </td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-semibold align-top">
                      Usuario
                    </td>
                    <td className="px-4 py-3">
                      Persona natural o jurídica que crea una cuenta, utiliza la
                      Plataforma o contrata alguno de los servicios de
                      Flujolink. Incluye a sus empleados, delegados, invitados y
                      representantes autorizados.
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold align-top">Deuda</td>
                    <td className="px-4 py-3">
                      Obligación de pago documentada (factura u otro título
                      valor) cargada por el Usuario a la Plataforma.
                    </td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-semibold align-top">
                      Recupero
                    </td>
                    <td className="px-4 py-3">
                      Pago total o parcial efectuado por el Deudor respecto de
                      una Deuda, atribuido –directa o indirectamente– a las
                      gestiones de Flujolink. Se presumirá nexo causal cuando el
                      pago ocurra dentro de los sesenta (60) días posteriores a
                      la última gestión documentada en la Plataforma.
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold align-top">
                      Servicios
                    </td>
                    <td className="px-4 py-3">
                      Conjunto de prestaciones descritas en la cláusula
                      &laquo;Servicios incluidos en Recupero Plus&raquo;.
                    </td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-semibold align-top">
                      Comisión Recupero
                    </td>
                    <td className="px-4 py-3">
                      Porcentaje variable detallado en la cláusula
                      &laquo;Condiciones Económicas&raquo; aplicable a cada
                      Recupero.
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold align-top">
                      Fee Fijo
                    </td>
                    <td className="px-4 py-3">
                      Tarifa mensual por uso de Plataforma conforme al Anexo B.
                    </td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-semibold align-top">DPA</td>
                    <td className="px-4 py-3">
                      Protección de Datos Personales conforme al Anexo A.
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold align-top">
                      Día Hábil
                    </td>
                    <td className="px-4 py-3">
                      Cualquier día calendario excepto sábados, domingos y
                      feriados oficiales.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* 2. OBJETO */}
          <div>
            <h2 className="text-brand-primary-dark text-lg md:text-xl font-extrabold mb-4 italic">
              2. Objeto
            </h2>
            <p className="leading-relaxed">
              Flujolink se obliga a prestar al Usuario el servicio Recupero
              Plus, consistente en la gestión extrajudicial de cobranza de
              Deudas, utilizando la Plataforma y un equipo especializado, bajo
              los términos y condiciones aquí establecidos.
            </p>
          </div>
          {/* 3. SERVICIOS INCLUIDOS */}
          <div>
            <h2 className="text-brand-primary-dark text-lg md:text-xl font-extrabold mb-4 italic">
              3. Servicios incluidos en &ldquo;Recupero Plus&rdquo;
            </h2>
            <ol className="list-decimal pl-6 space-y-2 leading-relaxed">
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
                horario de soporte señalado en la cláusula &laquo;Niveles de
                Servicio (SLA) y Fuerza Mayor&raquo;.
              </li>
            </ol>
          </div>
          {/* 4. OBLIGACIONES DEL USUARIO */}
          <div>
            <h2 className="text-brand-primary-dark text-lg md:text-xl font-extrabold mb-4 italic">
              4. Obligaciones del Usuario
            </h2>
            <ol className="list-decimal pl-6 space-y-3 leading-relaxed">
              <li>
                <strong>Información veraz y actualizada.</strong> El Usuario
                entregará y mantendrá en la Plataforma datos precisos de sus
                Deudas, Deudores y pagos recibidos.
              </li>
              <li>
                <strong>Coordinación de gestiones.</strong> El Usuario no
                realizará cobros directos a Deudores ni variará condiciones de
                pago sin coordinación previa con Flujolink.
              </li>
              <li>
                <strong>Notificación de pagos.</strong> El Usuario notificará a
                Flujolink dentro de un (1) Día Hábil, todo pago, acuerdo o
                contacto relevante con un Deudor.
              </li>
              <li>
                <strong>Cumplimiento normativo.</strong> El Usuario colaborará
                proporcionando documentación de identificación y soporte que
                requiera Flujolink para cumplir con la normativa de prevención
                de lavado de activos y financiamiento del terrorismo (LA/FT).
              </li>
              <li>
                <strong>Protección de Datos Personales.</strong> El Usuario
                deberá informar al Deudor que Flujolink será un encargado de
                tratamiento en relación a la gestión de cobro y que ante un
                incumplimiento respecto al pago, Flujolink podrá reportarlo a
                las diversas centrales de riesgo.
              </li>
              <li>
                El Usuario se obliga incondicionalmente a pagar la Comisión de
                Recupero a Flujolink, declarando que cualquier tipo de gestión
                paralela de cobranza, no tendrá efecto alguno sobre la
                obligación de pago de la Comisión. De igual forma, se obliga
                pagar las multas por mal uso de la plataforma.
              </li>
              <li>
                Una vez obtenido el Recupero, ya sea total o parcial, el Usuario
                se obliga a pagar la Comisión a Flujolink, dentro del plazo
                máximo de 72 horas.
              </li>
            </ol>
          </div>
          {/* 5. OBLIGACIONES DE FLUJOLINK */}
          <div>
            <h2 className="text-brand-primary-dark text-lg md:text-xl font-extrabold mb-4 italic">
              5. Obligaciones de Flujolink
            </h2>
            <ol className="list-decimal pl-6 space-y-2 leading-relaxed">
              <li>
                Gestionar las Deudas con profesionalismo y diligencia, conforme
                a la legislación aplicable y las buenas prácticas de cobranza.
              </li>
              <li>
                Mantener la confidencialidad de la información recibida, de
                conformidad con la Cláusula 10 y el DPA.
              </li>
              <li>
                Cumplir con los niveles de servicio (SLA) establecidos en la
                cláusula &laquo;Niveles de Servicio (SLA) y Fuerza Mayor&raquo;.
              </li>
              <li>
                Implementar controles y reportes de prevención de LA/FT según
                Resolución SBS 02648‑2024.
              </li>
            </ol>
          </div>
          {/* C. CONDICIONES ECONÓMICAS */}
          <div>
            <h2 className="text-brand-primary-dark text-xl md:text-2xl font-extrabold mb-6">
              C. Condiciones Económicas
            </h2>
            {/* Comisión sobre Recupero */}
            <div className="mb-6">
              <h3 className="text-brand-primary-dark text-base md:text-lg font-bold mb-3">
                6. Comisión sobre Recupero
              </h3>
              <p className="leading-relaxed mb-3">
                El Usuario pagará a Flujolink una{" "}
                <strong>Comisión del quince por ciento (15 %) más IGV</strong>{" "}
                sobre cada Recupero. La comisión será exigible, incluso si el
                Deudor paga directamente al Usuario, siempre que se verifique la
                presunción de nexo causal descrita en la definición de Recupero.
              </p>
              <p className="leading-relaxed">
                El pago deberá realizarse dentro de los diez (10) Días Hábiles
                siguientes a la emisión de la factura electrónica
                correspondiente.
              </p>
            </div>
            {/* Fee Fijo */}
            <div className="mb-6">
              <h3 className="text-brand-primary-dark text-base md:text-lg font-bold mb-3">
                7. Fee Fijo
              </h3>
              <p className="leading-relaxed mb-3">
                El Usuario pagará el Fee Fijo mensual indicado en el Anexo B. El
                Fee Fijo:
              </p>
              <ul className="list-disc pl-6 space-y-1 leading-relaxed">
                <li>
                  Es obligatorio, recurrente y devengará desde la fecha de carga
                  inicial de Deudas.
                </li>
                <li>Se facturará por períodos adelantados.</li>
                <li>
                  Se ajustará anualmente según el Índice de Precios al
                  Consumidor (IPC) publicado por el INEI, más dos puntos
                  porcentuales (IPC + 2 %).
                </li>
              </ul>
            </div>
          </div>
          {/* 8. MODIFICACIONES DE TARIFA */}
          <div>
            <h2 className="text-brand-primary-dark text-lg md:text-xl font-extrabold mb-4 italic">
              8. Modificaciones de tarifa
            </h2>
            <p className="leading-relaxed">
              Flujolink podrá modificar el Fee Fijo, el porcentaje de Comisión
              sobre Recupero u otros cargos notificando al Usuario con al menos
              treinta (30) días de anticipación. Si el Usuario no acepta la
              modificación, podrá terminar el contrato sin penalidad, conforme a
              las Cláusulas de &laquo;Vigencia y Terminación&raquo;.
            </p>
          </div>
          {/* 9. VIGENCIA Y TERMINACIÓN */}
          <div>
            <h2 className="text-brand-primary-dark text-lg md:text-xl font-extrabold mb-4 italic">
              9. Vigencia y terminación
            </h2>
            <ol className="list-decimal pl-6 space-y-3 leading-relaxed">
              <li>
                <strong>Vigencia inicial.</strong> El presente contrato tendrá
                una duración mínima de seis (6) meses contados desde la carga
                inicial de Deudas.
              </li>
              <li>
                <strong>Renovación automática.</strong> Vencido el período
                inicial, se renovará automáticamente por períodos mensuales
                sucesivos, salvo aviso de no renovación con quince (15) días de
                anticipación.
              </li>
              <li>
                <strong>Terminación anticipada por el Usuario.</strong> El
                Usuario podrá terminar anticipadamente pagando (i) los Fees
                Fijos devengados hasta la fecha de término y (ii) un buy‑out
                equivalente a un (1) mes adicional de Fee Fijo.
              </li>
              <li>
                <strong>Efectos de la terminación.</strong> La Comisión sobre
                Recupero continuará siendo exigible respecto de todo pago o
                acuerdo logrado durante la vigencia del contrato o dentro de los
                sesenta (60) días posteriores a la última gestión registrada.
              </li>
            </ol>
          </div>
          {/* 10. CONFIDENCIALIDAD Y DATOS PERSONALES */}
          <div>
            <h2 className="text-brand-primary-dark text-lg md:text-xl font-extrabold mb-4 italic">
              10. Confidencialidad y datos personales
            </h2>
            <ol className="list-decimal pl-6 space-y-3 leading-relaxed mb-4">
              <li>
                <strong>Confidencialidad.</strong> Las Partes mantendrán en
                reserva la información comercial, técnica y operativa
                intercambiada, salvo autorización escrita o exigencia legal.
              </li>
              <li>
                <strong>Datos personales.</strong> El tratamiento de datos se
                regirá conforme al DPA (Anexo A) y la Ley 29733 y su reglamento
                D.S. 003‑2013‑JUS (modificado por D.S. 016‑2024‑JUS). El Usuario
                actúa como Responsable de los datos de sus Deudores y Flujolink
                como Encargado.
              </li>
              <li>
                <strong>Notificación de brechas.</strong> Flujolink notificará
                al Usuario de incidentes de seguridad que comprometan datos
                personales dentro de las cuarenta y ocho (48) horas de su
                detección.
              </li>
            </ol>
            <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
              <h4 className="font-bold text-brand-primary-dark mb-3">
                10.4 Principios en la Protección de Datos Personales
              </h4>
              <p className="leading-relaxed mb-3">
                Flujolink declara que cumplirá con los siguientes principios
                recogidos en la Ley y Reglamento de Protección de Datos
                Personales:
              </p>
              <ul className="space-y-3 leading-relaxed">
                <li className="pl-4 border-l-2 border-brand-primary/20">
                  <strong>Principio de Legalidad.</strong> El Usuario no
                  transferirá a Flujolink datos obtenidos por medios
                  fraudulentos, desleales o ilícitos y verificará la licitud de
                  su origen.
                </li>
                <li className="pl-4 border-l-2 border-brand-primary/20">
                  <strong>Principio de Calidad.</strong> El Usuario entregará a
                  Flujolink datos veraces, completos y actualizados.
                </li>
                <li className="pl-4 border-l-2 border-brand-primary/20">
                  <strong>Principio de Consentimiento.</strong> Todo tratamiento
                  requerirá base legal; a falta de esta, el Usuario obtendrá el
                  consentimiento libre, previo, expreso, informado e inequívoco
                  para las finalidades indicadas, dejándolo registrado y
                  verificable, e informará claramente dichas finalidades a los
                  titulares.
                </li>
              </ul>
              <p className="leading-relaxed mt-3">
                El Usuario asume responsabilidad exclusiva y mantendrá indemne a
                Flujolink por daños, sanciones, reclamos o costos derivados del
                incumplimiento de los principios antes indicados. La ausencia de
                un consentimiento válido o las instrucciones para tratar datos
                con fines adicionales, harán responsable exclusivamente al
                Usuario y mantendrán indemne a Flujolink.
              </p>
            </div>
            <div className="mt-4">
              <p className="leading-relaxed mb-3">
                <strong>10.5 Boletines comerciales.</strong> El Usuario otorga a
                Flujolink autorización expresa e irrevocable para comunicar a
                centrales privadas de información de riesgos y/o boletines
                comerciales de terceros la existencia, estado y evolución de las
                Deudas, con el fin de coadyuvar a su recuperación, en
                cumplimiento de la Ley N.º 27489 y normas complementarias. El
                Usuario debe informar al Deudor que Flujolink realizará la
                gestión extrajudicial de cobranza de sus Deudas.
              </p>
              <p className="leading-relaxed">
                Flujolink se compromete a reportar únicamente información veraz,
                exacta y actualizada y a canalizar las solicitudes de
                rectificación o cancelación que correspondan conforme a los
                derechos ARCO.
              </p>
            </div>
          </div>
          {/* 11. SLA Y FUERZA MAYOR */}
          <div>
            <h2 className="text-brand-primary-dark text-lg md:text-xl font-extrabold mb-4 italic">
              11. Niveles de servicio (SLA) y fuerza mayor
            </h2>
            <ol className="list-decimal pl-6 space-y-3 leading-relaxed">
              <li>
                <strong>Disponibilidad.</strong> Flujolink se compromete a una
                disponibilidad mensual de la Plataforma no inferior al noventa y
                ocho por ciento (98 %), excluyendo mantenimientos programados
                comunicados con veinticuatro (24) horas de anticipación.
              </li>
              <li>
                <strong>Soporte.</strong> Horario de atención: lunes a viernes
                de 08:30 a 18:30 (GMT‑5). Tiempo de respuesta inicial: ocho (8)
                horas hábiles.
              </li>
              <li>
                <strong>Fuerza mayor.</strong> Ninguna Parte será responsable
                por incumplimientos causados por eventos fuera de su control
                razonable (huelgas, fallos de internet, desastres naturales,
                etc.).
              </li>
            </ol>
          </div>
          {/* 12. LIMITACIÓN DE RESPONSABILIDAD */}
          <div>
            <h2 className="text-brand-primary-dark text-lg md:text-xl font-extrabold mb-4 italic">
              12. Limitación de responsabilidad
            </h2>
            <p className="leading-relaxed">
              La responsabilidad total de Flujolink, contractual o
              extracontractual, ante el Usuario o terceros, se limitará al monto
              total de Fees Fijos y Comisiones pagados por el Usuario a
              Flujolink en los <strong>doce (12) meses anteriores</strong> al
              hecho generador. En ningún caso Flujolink será responsable por
              daños indirectos, lucro cesante, pérdida de datos o reputación.
            </p>
          </div>
          {/* 13. PROPIEDAD INTELECTUAL */}
          <div>
            <h2 className="text-brand-primary-dark text-lg md:text-xl font-extrabold mb-4 italic">
              13. Propiedad intelectual
            </h2>
            <ol className="list-decimal pl-6 space-y-2 leading-relaxed">
              <li>
                Flujolink retiene todos los derechos de propiedad intelectual
                sobre la Plataforma, su código fuente, bases de datos, marcas y
                documentación.
              </li>
              <li>
                Flujolink otorga al Usuario una licencia limitada, no exclusiva,
                no transferible y revocable para acceder y utilizar la
                Plataforma conforme a estos Términos.
              </li>
            </ol>
          </div>
          {/* 14. CESIÓN Y SUBCONTRATACIÓN */}
          <div>
            <h2 className="text-brand-primary-dark text-lg md:text-xl font-extrabold mb-4 italic">
              14. Cesión y subcontratación
            </h2>
            <p className="leading-relaxed">
              El Usuario no podrá ceder este contrato sin autorización escrita
              de Flujolink. Flujolink podrá subcontratar servicios de terceros
              (sub‑processors), garantizando que ofrezcan niveles de protección
              equivalentes a los aquí previstos.
            </p>
          </div>
          {/* 15. RESOLUCIÓN DE CONFLICTOS */}
          <div>
            <h2 className="text-brand-primary-dark text-lg md:text-xl font-extrabold mb-4 italic">
              15. Resolución de conflictos
            </h2>
            <ol className="list-decimal pl-6 space-y-2 leading-relaxed">
              <li>
                Las Partes procurarán resolver de buena fe toda controversia
                mediante negociación directa durante un plazo de quince (15)
                días.
              </li>
              <li>
                De no alcanzarse solución, la controversia se someterá a
                arbitraje institucional administrado por el Centro de Arbitraje
                de la Cámara de Comercio de Lima, conforme a su Reglamento, con
                sede en Lima y un (1) árbitro. El laudo será definitivo y
                vinculante.
              </li>
              <li>
                En tanto no se instale el tribunal arbitral, los jueces civiles
                de Lima Cercado serán competentes para medidas cautelares.
              </li>
            </ol>
          </div>
          {/* SEPARADOR */}
          <hr className="border-slate-200" />
          {/* ANEXO A */}
          <div>
            <h2 className="text-brand-primary-dark text-xl md:text-2xl font-extrabold mb-6">
              Anexo A — Información sobre el Tratamiento de Datos Personales del
              Usuario
            </h2>
            {/* A.1 Responsable */}
            <div className="mb-6">
              <h3 className="text-brand-primary-dark text-base md:text-lg font-bold mb-3">
                A.1 Responsable del tratamiento
              </h3>
              <p className="leading-relaxed">
                SERVICIOS DE TECNOLOGÍA FLUJOLINK S.A.C. (en adelante,
                &ldquo;Flujolink&rdquo;), RUC N.º 20614129183, con domicilio en
                Jr. Ocoña Nro. 160 Dpto. 6to, Lima. Dichos datos serán
                almacenados en el banco de datos personales denominado
                &ldquo;Clientes&rdquo; y &ldquo;Libro de Reclamaciones&rdquo;,
                cuyo registro se encuentra en trámite.
              </p>
            </div>
            {/* A.2 Finalidades */}
            <div className="mb-6">
              <h3 className="text-brand-primary-dark text-base md:text-lg font-bold mb-3">
                A.2 Finalidades del tratamiento
              </h3>
              <p className="leading-relaxed mb-3">
                Flujolink tratará los datos personales del Usuario para:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>
                  <strong>Gestión contractual y precontractual:</strong> alta
                  del Usuario, evaluación y administración de la relación
                  comercial, facturación, cobranzas y atención de
                  requerimientos.
                </li>
                <li>
                  <strong>Acceso y operación de la Plataforma:</strong> creación
                  de cuentas, autenticación, perfiles y trazabilidad de
                  gestiones/historial/bitácora vinculadas al uso de
                  &ldquo;Recupero Plus&rdquo;.
                </li>
                <li>
                  <strong>Soporte y comunicaciones:</strong> atención por
                  correo, chat y teléfono dentro del horario indicado en la
                  cláusula &laquo;Niveles de Servicio (SLA) y Fuerza
                  Mayor&raquo;.
                </li>
                <li>
                  <strong>Seguridad y continuidad operativa:</strong> monitoreo,
                  registro de accesos y eventos, prevención de fraude, copias de
                  respaldo y auditoría.
                </li>
                <li>
                  <strong>
                    Cumplimiento legal y requerimientos de autoridad:
                  </strong>{" "}
                  antifraude, tributario, contable y atención de mandatos de
                  autoridades competentes.
                </li>
                <li>
                  <strong>Comunicaciones informativas o comerciales:</strong>{" "}
                  sobre mejoras o novedades del servicio, cuando corresponda y
                  según las preferencias del Usuario.
                </li>
                <li>
                  <strong>Información generada automáticamente:</strong> para
                  fines estadísticos, históricos y científicos.
                </li>
              </ul>
            </div>
            {/* A.3 Destinatarios */}
            <div className="mb-6">
              <h3 className="text-brand-primary-dark text-base md:text-lg font-bold mb-3">
                A.3 Destinatarios (transferencias nacionales)
              </h3>
              <p className="leading-relaxed mb-3">
                Flujolink realiza la siguiente transferencia de datos personales
                a nivel nacional:
              </p>
              <ul className="list-disc pl-6 space-y-1 leading-relaxed mb-3">
                <li>Equifax Incorp Perú</li>
                <li>Experian Perú</li>
              </ul>
              <p className="leading-relaxed">
                Eventualmente podrán ser tratados por terceros aún no
                determinados tales como entidades bancarias, abogados,
                tribunales administrativos o judiciales en caso exista algún
                procedimiento o proceso legal. También podría compartirse su
                información personal con alguna entidad estatal siempre que
                exista una ley expresa o un mandato judicial al respecto.
                Adicionalmente, se podrían compartir sus datos personales en
                caso de venta, fusión, consolidación o adquisición de Flujolink.
              </p>
            </div>
            {/* A.4 Transferencia internacional */}
            <div className="mb-6">
              <h3 className="text-brand-primary-dark text-base md:text-lg font-bold mb-3">
                A.4 Transferencia internacional de datos (flujo transfronterizo)
              </h3>
              <p className="leading-relaxed mb-3">
                Flujolink realiza las siguientes transferencias de datos
                personales a nivel internacional:
              </p>
              <ul className="list-disc pl-6 space-y-1 leading-relaxed">
                <li>
                  <strong>Microsoft Corporation</strong>, domiciliado en One
                  Microsoft Way, Redmond, Washington 98052, Estados Unidos, para
                  el almacenamiento web de la información.
                </li>
                <li>
                  <strong>GoDaddy.com, LLC.</strong>, domiciliado en 14455 N.
                  Hayden Road, Scottsdale, Arizona, Estados Unidos, para el
                  alojamiento de la página web.
                </li>
              </ul>
            </div>
            {/* A.5 Plazo de conservación */}
            <div className="mb-6">
              <h3 className="text-brand-primary-dark text-base md:text-lg font-bold mb-3">
                A.5 Plazo de conservación
              </h3>
              <p className="leading-relaxed mb-3">
                Los datos personales relacionados con la relación contractual se
                conservarán durante <strong>diez (10) años</strong>, conforme a
                la legislación civil y de protección al consumidor aplicable.
                Mientras exista relación contractual, Flujolink tratará los
                datos personales para la ejecución y gestión de dicha relación.
                Una vez finalizada, conservará los datos debidamente bloqueados
                para atender eventuales obligaciones legales o requerimientos de
                autoridades competentes, Jueces o Tribunales, durante los plazos
                de prescripción correspondientes.
              </p>
              <p className="leading-relaxed mb-3">
                Los datos personales que tengan base legal se conservan mientras
                el consentimiento esté vigente o hasta cumplir la finalidad.
                Ante revocación u oposición, cesa el tratamiento y se bloquean o
                eliminan los datos, pudiendo conservarse identificadores mínimos
                en la lista de exclusión. La evidencia del consentimiento o
                revocación se guarda por el plazo de prescripción antes
                indicado. En caso de inactividad o falta de renovación, se
                eliminan o anonimizan, salvo otra base legal.
              </p>
              <p className="leading-relaxed">
                Flujolink efectuará una revisión trimestral de los datos
                almacenados en su banco de datos personales para verificar que
                se mantengan vigentes, necesarios y proporcionales a las
                finalidades para las cuales fueron recopilados.
              </p>
            </div>
            {/* A.6 Oficial */}
            <div className="mb-6">
              <h3 className="text-brand-primary-dark text-base md:text-lg font-bold mb-3">
                A.6 Oficial de Datos Personales – Contacto
              </h3>
              <p className="leading-relaxed">
                Flujolink no se encuentra obligado en designar formalmente a un
                Oficial de Datos Personales.
              </p>
            </div>
            {/* A.7 Decisiones automatizadas */}
            <div className="mb-6">
              <h3 className="text-brand-primary-dark text-base md:text-lg font-bold mb-3">
                A.7 Decisiones automatizadas
              </h3>
              <p className="leading-relaxed">
                Flujolink informa que no adopta decisiones que produzcan efectos
                jurídicos o afecten significativamente a los usuarios, basadas
                únicamente en tratamientos automatizados. Eventualmente se
                podrán implementar procesos de análisis de datos o modelos
                predictivos para mejorar los servicios (por ejemplo, desarrollo
                de algoritmos de <em>scoring</em> o personalización comercial).
                Estos procesos se aplicarán de manera agregada, sin identificar
                individualmente a clientes ni deudores. El Usuario podrá
                solicitar información adicional y ejercer sus derechos de
                conformidad con la Ley de Protección de Datos Personales y su
                Reglamento.
              </p>
            </div>
            {/* A.8 Derechos ARCO */}
            <div className="mb-6">
              <h3 className="text-brand-primary-dark text-base md:text-lg font-bold mb-3">
                A.8 Derechos ARCO y cómo ejercerlos
              </h3>
              <p className="leading-relaxed mb-3">
                La legislación peruana otorga a los titulares de datos
                personales los derechos de acceso, rectificación, cancelación,
                oposición, información, revocación y portabilidad. Puedes
                ejercer estos derechos dirigiendo tu solicitud al correo
                electrónico{" "}
                <a
                  href="mailto:hola@somossena.com"
                  className="text-brand-primary font-semibold hover:underline"
                >
                  hola@somossena.com
                </a>
                .
              </p>
              <p className="leading-relaxed">
                En caso de considerar que no has sido atendido en el ejercicio
                de tus derechos, tienes la posibilidad de presentar una
                reclamación ante la Autoridad Nacional de Protección de Datos
                Personales, acudiendo a la Mesa de Partes del Ministerio de
                Justicia y Derechos Humanos, ubicada en la Calle Scipion Llona
                N.º 350, distrito de Miraflores, provincia y departamento de
                Lima.
              </p>
            </div>
            {/* G) Actualizaciones */}
            <div className="mb-6">
              <h3 className="text-brand-primary-dark text-base md:text-lg font-bold mb-3">
                Actualizaciones del presente Anexo
              </h3>
              <p className="leading-relaxed">
                Flujolink podrá modificar y/o actualizar este Anexo para
                reflejar cambios normativos, operativos o en los servicios.
                Cualquier cambio material será informado al Usuario a través de
                los canales de contacto registrados o dentro de la Plataforma.
              </p>
            </div>
            {/* Declaración del Usuario */}
            <div className="bg-brand-primary/5 rounded-lg p-5 border border-brand-primary/15">
              <h3 className="text-brand-primary-dark text-base md:text-lg font-bold mb-3">
                Declaración del Usuario
              </h3>
              <p className="leading-relaxed mb-3">
                Al hacer clic en el checkbox{" "}
                <em>
                  &ldquo;He leído los términos y condiciones de servicios
                  complementarios de Flujolink y declaro haber sido informado
                  sobre el tratamiento de mis datos personales&rdquo;
                </em>
                , reconoces haber sido informado del tratamiento de tus datos
                personales de conformidad con el artículo 18.º de la Ley de
                Protección de Datos Personales.
              </p>
              <p className="leading-relaxed">
                El Usuario al hacer &ldquo;click&rdquo; en el checkbox que
                señala{" "}
                <em>
                  &ldquo;Acepto el envío de publicidad y marketing personalizado
                  sobre servicios, novedades, actividades y eventos de
                  Flujolink.&rdquo;
                </em>{" "}
                declara haber leído la Política de Privacidad y brindar su
                consentimiento para el tratamiento de datos personales en ese
                sentido, de conformidad con lo dispuesto por el artículo 13.º de
                la Ley N.º 29733, Ley de Protección de Datos Personales y los
                artículos 2, 3, 4, 5 y 6.º de su Reglamento, aprobado mediante
                Decreto Supremo N.º 016‑2024‑JUS.
              </p>
            </div>
          </div>
        </section>
        <div className="flex justify-center gap-6 py-12 flex-wrap">
          <Link
            href="/"
            className="text-brand-primary hover:text-brand-primary-dark font-semibold text-sm transition-colors cursor-pointer"
          >
            Inicio
          </Link>
          <span className="text-slate-300">|</span>
          <Link
            href="/privacy"
            className="text-brand-primary hover:text-brand-primary-dark font-semibold text-sm transition-colors cursor-pointer"
          >
            Política de Privacidad
          </Link>
          <span className="text-slate-300">|</span>
          <Link
            href="/term"
            className="text-brand-primary hover:text-brand-primary-dark font-semibold text-sm transition-colors cursor-pointer"
          >
            Términos y Condiciones
          </Link>
        </div>
      </div>
    </div>
  );
};
