import Link from "next/link";

export const PrivacyContent = () => {
  return (
    <div className="grow bg-[#F9F9F9]">
      <div className="max-w-[1280px] mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-8">
          <h1 className="text-brand-primary-dark text-3xl md:text-5xl font-extrabold mb-3">
            Política de <span className="text-brand-primary">Privacidad</span>
          </h1>
          <p className="text-slate-600 text-sm">
            Última actualización: febrero 2026
          </p>
        </div>
        <section className="bg-white text-slate-700 font-normal text-sm md:text-base p-8 md:p-14 rounded-2xl shadow-sm space-y-8">
          
          {/* 1. Introducción */}
          <div>
            <h2 className="text-brand-primary-dark text-xl md:text-2xl font-bold mb-3">1. Introducción</h2>
            <p className="leading-relaxed">
              La presente Política de Privacidad (junto con los Términos y Condiciones del servicio) tiene por finalidad informar a los usuarios sobre el tratamiento de los datos personales que se recogen, publican, procesan e intercambian a través de la plataforma y servicios de SERVICIOS DE TECNOLOGÍA FLUJOLINK SpA (en adelante, "Sena"), en cumplimiento con la legislación vigente en Chile y demás normativa aplicable.
            </p>
            <p className="leading-relaxed mt-3">
              Sena es una plataforma SaaS B2B especializada en gestión de cuentas por cobrar (AR) y cuentas por pagar (AP), respaldada por Recsa. Sena respeta la privacidad de sus usuarios y clientes, y se compromete a proteger la información personal y confidencial recopilada por medio de las interacciones de los Usuarios con el sitio web www.somossena.com, sus subdominios, aplicaciones, plataformas SaaS y servicios asociados.
            </p>
            <p className="leading-relaxed mt-3">
              El Usuario, al utilizar los servicios de Sena, autoriza expresamente a Sena para tratar y utilizar los datos personales de acuerdo a la finalidad de los servicios descritos en esta Política.
            </p>
          </div>

          {/* 2. Responsable del Tratamiento */}
          <div>
            <h2 className="text-brand-primary-dark text-xl md:text-2xl font-bold mb-3">2. Responsable del Tratamiento</h2>
            <p className="leading-relaxed mb-2">El responsable del tratamiento de los datos personales es:</p>
            <p className="font-semibold">SERVICIOS DE TECNOLOGÍA FLUJOLINK SpA</p>
            <p className="mt-1">Correo electrónico: hola@somossena.com</p>
            <p>Sitio web: www.somossena.com</p>
          </div>

          {/* 3. Datos Personales que Recopilamos */}
          <div>
            <h2 className="text-brand-primary-dark text-xl md:text-2xl font-bold mb-3">3. Datos Personales que Recopilamos</h2>
            <p className="leading-relaxed mb-3">Sena puede recopilar y tratar las siguientes categorías de datos personales:</p>
            
            <h3 className="text-brand-primary-dark text-base md:text-lg font-semibold mb-2 mt-4">3.1 Datos de identificación</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Nombre y apellido</li>
              <li>RUT o identificador tributario</li>
              <li>Empresa y cargo</li>
              <li>Correo electrónico</li>
              <li>Número de teléfono</li>
            </ul>

            <h3 className="text-brand-primary-dark text-base md:text-lg font-semibold mb-2 mt-4">3.2 Datos contractuales y operativos</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Información de facturación y estado de pagos</li>
              <li>Historial de gestiones de cobranza</li>
              <li>Información comercial asociada a facturas</li>
            </ul>

            <h3 className="text-brand-primary-dark text-base md:text-lg font-semibold mb-2 mt-4">3.3 Datos técnicos</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Dirección IP</li>
              <li>Logs de acceso</li>
              <li>Información de navegador y dispositivo</li>
              <li>Tokens de autenticación</li>
            </ul>

            <h3 className="text-brand-primary-dark text-base md:text-lg font-semibold mb-2 mt-4">3.4 Datos provenientes de terceros</h3>
            <p className="leading-relaxed">Sena puede tratar información proveniente de:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Clientes empresa que cargan cartera</li>
              <li>Proveedores de mensajería</li>
              <li>Fuentes de acceso público conforme a la ley</li>
            </ul>
          </div>

          {/* 4. Finalidad del Tratamiento */}
          <div>
            <h2 className="text-brand-primary-dark text-xl md:text-2xl font-bold mb-3">4. Finalidad del Tratamiento</h2>
            <p className="leading-relaxed mb-3">
              Los datos personales proporcionados por las diferentes fuentes de información y procesos de registro y autenticación tienen por objeto identificar al Usuario, y serán utilizados exclusivamente para los fines que fueron suministrados, incluyendo:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Identificar a usuarios y clientes</li>
              <li>Gestionar procesos de cobranza y cuentas por cobrar/pagar</li>
              <li>Automatizar recordatorios y comunicaciones multicanal (WhatsApp, correo electrónico, SMS)</li>
              <li>Cumplir obligaciones contractuales con clientes empresa</li>
              <li>Cumplir obligaciones legales y regulatorias</li>
              <li>Mejorar la calidad del servicio y la experiencia del usuario</li>
              <li>Generar estadísticas agregadas no identificables</li>
            </ul>
            <p className="leading-relaxed mt-3">
              Sena no utilizará los datos para fines distintos a los aquí señalados, salvo que provengan de fuentes de acceso público.
            </p>
          </div>

          {/* 5. Base Legal del Tratamiento */}
          <div>
            <h2 className="text-brand-primary-dark text-xl md:text-2xl font-bold mb-3">5. Base Legal del Tratamiento</h2>
            <p className="leading-relaxed mb-2">El tratamiento de datos se fundamenta en:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>La ejecución de un contrato de servicios</li>
              <li>El consentimiento expreso del titular</li>
              <li>El cumplimiento de obligaciones legales</li>
              <li>Interés legítimo en la operación del servicio SaaS B2B</li>
            </ul>
            <p className="leading-relaxed mt-3">
              El Usuario autoriza expresamente a Sena para tratar sus datos conforme a las finalidades descritas en esta Política.
            </p>
          </div>

          {/* 6. Comunicación de Datos a Terceros */}
          <div>
            <h2 className="text-brand-primary-dark text-xl md:text-2xl font-bold mb-3">6. Comunicación de Datos a Terceros</h2>
            <p className="leading-relaxed mb-3">
              Sena no venderá ni comercializará datos personales de los usuarios.
            </p>
            <p className="leading-relaxed mb-3">
              Con la autorización del Usuario, Sena podrá comunicar los datos a sus empresas relacionadas (ej. Recsa) y/o a terceras personas que tengan directa relación con el servicio ofrecido, en los siguientes casos:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Cuando sea necesario para la ejecución del servicio contratado</li>
              <li>Cuando actúen empresas relacionadas</li>
              <li>Cuando intervengan proveedores tecnológicos que operen bajo acuerdos de confidencialidad</li>
              <li>Cuando sea exigido por autoridad competente o imperativo legal</li>
              <li>Cuando el titular de los datos lo indique explícitamente</li>
            </ul>
            <p className="leading-relaxed mt-3">
              Los proveedores tecnológicos pueden incluir servicios de infraestructura cloud, mensajería y correo electrónico transaccional, todos ellos operando bajo estándares de seguridad adecuados y acuerdos de confidencialidad.
            </p>
            <p className="leading-relaxed mt-3">
              Sena no revelará los datos personales de los usuarios a terceros no autorizados. Si terceras partes se pusiesen en contacto con Sena solicitando datos de los usuarios, se les indicará que se comuniquen directamente con los respectivos usuarios, sin revelar información adicional de identificación o medios de contacto que no hayan sido previamente conocidos.
            </p>
          </div>

          {/* 7. Conservación de los Datos */}
          <div>
            <h2 className="text-brand-primary-dark text-xl md:text-2xl font-bold mb-3">7. Conservación de los Datos</h2>
            <p className="leading-relaxed mb-2">Los datos personales serán conservados:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Mientras exista relación contractual vigente</li>
              <li>Mientras sean necesarios para cumplir fines legales o regulatorios</li>
              <li>Durante los plazos exigidos por normativa tributaria o comercial</li>
            </ul>
            <p className="leading-relaxed mt-3">
              Los datos recogidos podrán ser conservados y tratados con fines estadísticos, siempre y cuando sea imposible la identificación de sus titulares utilizando medios técnicos razonables.
            </p>
            <p className="leading-relaxed mt-3">
              Al término del contrato de servicios, los datos serán eliminados o devueltos de forma segura según los acuerdos contractuales aplicables.
            </p>
          </div>

          {/* 8. Derechos del Titular */}
          <div>
            <h2 className="text-brand-primary-dark text-xl md:text-2xl font-bold mb-3">8. Derechos del Titular</h2>
            <p className="leading-relaxed mb-2">El titular de los datos personales podrá ejercer los siguientes derechos:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Acceso:</strong> Conocer qué datos personales suyos están siendo tratados</li>
              <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos o incompletos</li>
              <li><strong>Cancelación:</strong> Solicitar la supresión de sus datos cuando ya no sean necesarios</li>
              <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos en determinadas circunstancias</li>
              <li><strong>Eliminación:</strong> Solicitar la eliminación de datos registrados o publicados en la plataforma</li>
            </ul>
            <p className="leading-relaxed mt-3">
              Las solicitudes deberán enviarse a: <strong>hola@somossena.com</strong>
            </p>
            <p className="leading-relaxed mt-2">
              Sena responderá dentro de los plazos establecidos por la ley.
            </p>
          </div>

          {/* 9. Transferencias Internacionales */}
          <div>
            <h2 className="text-brand-primary-dark text-xl md:text-2xl font-bold mb-3">9. Transferencias Internacionales</h2>
            <p className="leading-relaxed">
              Dado que Sena utiliza infraestructura cloud internacional, algunos datos pueden ser almacenados en servidores fuera de Chile, garantizando siempre estándares adecuados de protección y seguridad conforme a la legislación aplicable.
            </p>
          </div>

          {/* 10. Cookies y Tecnologías Similares */}
          <div>
            <h2 className="text-brand-primary-dark text-xl md:text-2xl font-bold mb-3">10. Cookies y Tecnologías Similares</h2>
            <p className="leading-relaxed mb-2">Sena puede utilizar cookies técnicas y analíticas estrictamente necesarias para:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Mejorar la experiencia del usuario</li>
              <li>Analizar comportamiento de navegación</li>
              <li>Optimizar funcionalidades de la plataforma</li>
            </ul>
            <p className="leading-relaxed mt-3">
              El usuario puede configurar su navegador para rechazar cookies.
            </p>
          </div>

          {/* 11. Modificaciones a esta Política */}
          <div>
            <h2 className="text-brand-primary-dark text-xl md:text-2xl font-bold mb-3">11. Modificaciones a esta Política</h2>
            <p className="leading-relaxed">
              Sena se reserva el derecho de modificar la presente Política de Privacidad, con el objeto de adaptarla a cambios normativos o reglamentarios, a prácticas generales de la industria o a políticas internas propias de Sena.
            </p>
            <p className="leading-relaxed mt-3">
              Las modificaciones serán publicadas en el sitio web y entrarán en vigencia desde su publicación. Es obligación de los Usuarios revisar periódicamente las modificaciones o actualizaciones de la presente Política de Privacidad.
            </p>
          </div>

          {/* 12. Contacto */}
          <div>
            <h2 className="text-brand-primary-dark text-xl md:text-2xl font-bold mb-3">12. Contacto</h2>
            <p className="leading-relaxed mb-2">
              Para cualquier consulta relacionada con esta Política de Privacidad o con el tratamiento de sus datos personales, puede comunicarse con nosotros a través de:
            </p>
            <p className="mt-2">Correo electrónico: <strong>hola@somossena.com</strong></p>
            <p>Sitio web: <strong>www.somossena.com</strong></p>
          </div>

        </section>
        <div className="flex justify-center gap-6 py-12">
          <Link
            href="/"
            className="text-brand-primary hover:text-brand-primary-dark font-semibold text-sm transition-colors"
          >
            Inicio
          </Link>
          <span className="text-slate-300">|</span>
          <Link
            href="/term"
            className="text-brand-primary hover:text-brand-primary-dark font-semibold text-sm transition-colors"
          >
            Términos y Condiciones
          </Link>
        </div>
      </div>
    </div>
  );
};
