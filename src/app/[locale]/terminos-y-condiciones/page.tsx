import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { FileText, ShieldAlert } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";
  return {
    title: isEs ? "Términos y Condiciones | ICA Languages" : "Terms and Conditions | ICA Languages",
    description: "Términos y Condiciones de Uso del sitio web de ICA Languages.",
  };
}

export default async function TerminosYCondicionesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isEs = locale === "es";

  return (
    <div className="bg-slate-50 min-h-screen pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Banner de Advertencia si no es Español */}
        {!isEs && (
          <div className="mb-8 p-4 bg-amber-50 border-2 border-amber-200 rounded-2xl flex gap-3.5 items-start shadow-sm">
            <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-amber-800">
                At this moment, this content is only available in Spanish. Sorry for the inconvenience.
              </p>
              {locale === "fr" && (
                <p className="text-xs text-amber-700/80 mt-1">
                  Pour le moment, ce contenu est uniquement disponible en espagnol. Désolé pour le dérangement.
                </p>
              )}
            </div>
          </div>
        )}

        {/* Contenido de Términos y Condiciones */}
        <div className="bg-white rounded-3xl border border-slate-100 p-8 sm:p-12 shadow-sm">
          <div className="flex items-center gap-3 bg-teal-50 text-teal-700 text-sm font-semibold px-4 py-1.5 rounded-full w-fit mb-6 border border-teal-100">
            <FileText className="w-4 h-4" /> Legal
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mb-2 leading-tight" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
            Términos y Condiciones de Uso
          </h1>
          <p className="text-xs text-slate-400 font-medium mb-8 uppercase tracking-wider">
            Última actualización: 27 de enero de 2026
          </p>

          <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-8">
            <p>
              Bienvenido a <strong>https://icalanguages.com.mx/</strong> (en adelante, el “Sitio”). Estos Términos y Condiciones rigen tu acceso y uso del Sitio y los servicios relacionados. Al ingresar, navegar o interactuar en este Sitio, aceptas voluntariamente estos términos.
            </p>

            <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">1. Definiciones</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Usuario:</strong> Cualquier persona que accede o utiliza el Sitio.</li>
              <li><strong>Servicios:</strong> Cursos, contenidos, materiales y herramientas ofrecidos por ICA Languages.</li>
              <li><strong>Contenido:</strong> Textos, imágenes, videos, audios, materiales descargables y cualquier recurso disponible en el Sitio.</li>
            </ul>

            <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">2. Aceptación de los Términos</h3>
            <p>Al utilizar este Sitio, aceptas que:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Has leído, entendido y aceptas cumplir estos Términos.</li>
              <li>Eres responsable de cualquier uso realizado bajo tu cuenta o acceso.</li>
              <li>Si no estás de acuerdo con estos Términos, no utilices el Sitio ni los Servicios.</li>
            </ul>

            <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">3. Acceso y Registro</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>El Sitio puede requerir registro con datos verídicos y actualizados (nombre, correo electrónico, etc.).</li>
              <li>Eres responsable de la confidencialidad de tu cuenta y contraseña.</li>
              <li>No debes compartir tu cuenta ni permitir accesos no autorizados.</li>
            </ul>

            <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">4. Uso del Sitio y de los Servicios</h3>
            <h4 className="text-sm font-bold text-slate-900 mt-4 mb-2 uppercase tracking-wide">Permisos</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>El uso del Sitio es personal, no comercial.</li>
              <li>Puedes visualizar, reproducir o descargar el Contenido solo para tu uso personal.</li>
            </ul>
            <h4 className="text-sm font-bold text-slate-900 mt-6 mb-2 uppercase tracking-wide">Restricciones</h4>
            <p>No puedes:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Copiar, reproducir, distribuir o revender el Contenido sin permiso.</li>
              <li>Modificar, adaptar o transformar el Contenido sin autorización.</li>
              <li>Utilizar el Sitio para fines ilegales o abusivos.</li>
            </ul>

            <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">5. Pagos y Facturación</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Los precios se muestran en pesos mexicanos (MXN).</li>
              <li>Los pagos se procesan a través de los métodos disponibles en el Sitio.</li>
              <li>Todos los impuestos aplicables están incluidos (cuando aplique).</li>
              <li>La facturación se genera a nombre del Usuario según los datos proporcionados.</li>
            </ul>

            <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">6. Política de Cancelación y Reembolsos</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Las cancelaciones deben solicitarse con al menos 48 horas de anticipación.</li>
              <li>No se otorgan reembolsos por clases ya impartidas.</li>
              <li>Reembolsos válidos solo si se demuestra falla técnica atribuible al Sitio.</li>
            </ul>

            <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">7. Propiedad Intelectual</h3>
            <p>
              Todo el contenido del Sitio es propiedad de ICA Languages o de sus licenciantes y está protegido por leyes de derechos de autor y propiedad intelectual.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>El uso no autorizado del Contenido puede violar leyes nacionales e internacionales.</li>
              <li>No adquieres ningún derecho de propiedad intelectual por acceder o usar el Sitio.</li>
            </ul>

            <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">8. Privacidad y Protección de Datos</h3>
            <p>
              El tratamiento de tu información personal se rige por nuestra Política de Privacidad, que forma parte integral de estos Términos y está disponible en el Sitio.
            </p>

            <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">9. Enlaces a Sitios de Terceros</h3>
            <p>
              El Sitio puede contener enlaces a sitios externos. No somos responsables del contenido, prácticas de privacidad o términos de esos sitios.
            </p>

            <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">10. Limitación de Responsabilidad</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>El Sitio se ofrece “tal cual” y “según disponibilidad”.</li>
              <li>No garantizamos que el Sitio o los servicios sean ininterrumpidos o libres de errores.</li>
              <li>En ningún caso ICA Languages será responsable por daños indirectos, incidentales, punitivos o consecuentes.</li>
            </ul>

            <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">11. Indemnización</h3>
            <p>
              Aceptas defender, indemnizar y mantener indemne a ICA Languages, sus afiliados, empleados y proveedores ante cualquier reclamación causada por tu uso del Sitio o incumplimiento de estos Términos.
            </p>

            <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">12. Modificaciones a los Términos</h3>
            <p>
              ICA Languages puede modificar estos Términos en cualquier momento. Las nuevas versiones se publicarán en el Sitio y entrarán en vigor desde su publicación. Tu uso continuado del Sitio implica tu aceptación de las nuevas condiciones.
            </p>

            <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">13. Ley Aplicable y Jurisdicción</h3>
            <p>
              Estos Términos se rigen por las leyes de México. Cualquier disputa se someterá a los tribunales competentes del estado donde opere ICA Languages.
            </p>

            <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">14. Contacto</h3>
            <p>
              Si tienes preguntas o comentarios sobre estos Términos y Condiciones, escríbenos a:<br />
              ✉️ <a href="mailto:contacto@icalanguage.com.mx" className="text-teal-600 hover:text-teal-700 font-semibold underline">contacto@icalanguage.com.mx</a>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
