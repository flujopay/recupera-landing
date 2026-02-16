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
            Fecha de actualización: viernes 17 de enero del 2025
          </p>
        </div>
        <section className="bg-white text-slate-700 font-normal text-sm md:text-base p-8 md:p-14 rounded-2xl shadow-sm">
          <p className="mb-4">
            La presente Política de Privacidad (junto con los Términos y
            Condiciones) tiene por finalidad informar a los usuarios sobre el
            tratamiento de los datos que se recogen, publican, procesan e
            intercambian, dentro del cumplimiento con la legislación vigente en
            Chile. Sena respeta su privacidad y se compromete a protegerla,
            junto con su información confidencial que hayamos recopilado por
            medio de las interacciones de los Usuarios con el sitio Web de Sena.
          </p>
          <p className="mb-4">
            El Usuario autoriza expresamente a Sena para tratar y utilizar los
            datos personales de acuerdo a la finalidad de los servicios, con
            ello autoriza expresamente a Sena para comunicar los datos a sus
            empresas relacionadas, y/o a terceras personas que tengan directa
            relación con el servicio ofrecido por Sena.
          </p>
          <p className="mb-4">
            Los datos personales proporcionados por las diferentes fuentes de
            información, y procesos de registro y autenticación, tienen por
            objeto identificar al Usuario, y solo serán utilizados para los
            fines que fueron suministrados, salvo que provengan de fuentes de
            acceso público. Los datos recogidos podrán ser conservados y
            tratados con fines estadísticos, siempre y cuando sea imposible la
            identificación de sus titulares utilizando medios técnicos
            razonables.
          </p>
          <p className="mb-4">
            En caso que se requiera la corrección o eliminación de datos, los
            Usuarios podrán solicitar la respectiva corrección y/o eliminación
            de la información y datos que se encuentren registrados o publicados
            en la plataforma o sitio web.
          </p>
          <p className="mb-4">
            Sena no revelará los datos personales de los usuarios a terceros,
            salvo que éstos actúen en su representación mediante mandato legal,
            que el titular de los mismos lo indique explícitamente o por
            imperativo legal. Si terceras partes se pusiesen en contacto con
            Sena solicitando datos de los usuarios, se les indicará que se
            comuniquen directamente con los respectivos usuarios, sin revelar
            información adicional de identificación o medios de contacto que no
            hayan sido previamente conocidos.
          </p>
          <p className="mb-4">
            Sena utiliza un sistema de encriptación con la finalidad de proteger
            la transferencia de información que aporte el Usuario en el sitio
            web.
          </p>
          <p className="mb-4">
            Sena realiza el almacenamiento de información de forma segura,
            estableciendo mecanismos de control sobre las posibles pérdidas, mal
            uso, alteración o entrega no autorizada de dicha información. Sin
            perjuicio de lo anterior, Sena no puede asegurar la inviolabilidad
            de sus sistemas de seguridad, reconociendo y asumiendo el Usuario la
            posibilidad de que sucedan contingencias, ya sea por caso fortuito,
            fuerza mayor o actos imputables de terceros.
          </p>
          <p>
            Sena se reserva el derecho de modificar la presente Política de
            Privacidad, con el objeto de adaptarla a cambios normativos, o
            reglamentarios, a prácticas generales de la industria o a políticas
            internas propias de Sena. Estas Políticas de Privacidad podrán ser
            modificadas por Sena, sin previo aviso, siendo obligación de los
            Usuarios revisar periódicamente las modificaciones o actualizaciones
            de la presente Política de Privacidad.
          </p>
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
