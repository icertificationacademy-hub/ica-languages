import type { Metadata } from "next";
import { setRequestLocale } from 'next-intl/server';
import { FileText } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (locale === "fr") return { title: "Conditions Générales | ICA Languages" };
  if (locale === "en") return { title: "Terms and Conditions | ICA Languages" };
  return { title: "Términos y Condiciones | ICA Languages" };
}

export default async function TerminosYCondicionesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="bg-slate-50 min-h-screen pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-100 p-8 sm:p-12 shadow-sm">
          <div className="flex items-center gap-3 bg-teal-50 text-teal-700 text-sm font-semibold px-4 py-1.5 rounded-full w-fit mb-6 border border-teal-100">
            <FileText className="w-4 h-4" /> Legal
          </div>

          {locale === "en" ? (
            <>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mb-2 leading-tight" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                Terms and Conditions of Use
              </h1>
              <p className="text-xs text-slate-400 font-medium mb-8 uppercase tracking-wider">Last updated: January 27, 2026</p>
              <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-8">
                <p>Welcome to <strong>https://icalanguages.com.mx/</strong> (hereinafter, the "Site"). These Terms and Conditions govern your access to and use of the Site and related services. By accessing, browsing or interacting with this Site, you voluntarily accept these terms.</p>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">1. Definitions</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>User:</strong> Any person who accesses or uses the Site.</li>
                  <li><strong>Services:</strong> Courses, content, materials and tools offered by ICA Languages.</li>
                  <li><strong>Content:</strong> Texts, images, videos, audio, downloadable materials and any resource available on the Site.</li>
                </ul>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">2. Acceptance of Terms</h3>
                <p>By using this Site, you agree that:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>You have read, understood and agree to comply with these Terms.</li>
                  <li>You are responsible for any use made under your account or access.</li>
                  <li>If you do not agree with these Terms, do not use the Site or the Services.</li>
                </ul>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">3. Access and Registration</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>The Site may require registration with truthful and updated data (name, email, etc.).</li>
                  <li>You are responsible for the confidentiality of your account and password.</li>
                  <li>You must not share your account or allow unauthorized access.</li>
                </ul>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">4. Use of the Site and Services</h3>
                <h4 className="text-sm font-bold text-slate-900 mt-4 mb-2 uppercase tracking-wide">Permissions</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Use of the Site is personal and non-commercial.</li>
                  <li>You may view, reproduce or download Content only for your personal use.</li>
                </ul>
                <h4 className="text-sm font-bold text-slate-900 mt-6 mb-2 uppercase tracking-wide">Restrictions</h4>
                <p>You may not:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Copy, reproduce, distribute or resell the Content without permission.</li>
                  <li>Modify, adapt or transform the Content without authorization.</li>
                  <li>Use the Site for illegal or abusive purposes.</li>
                </ul>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">5. Payments and Billing</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Prices are shown in Mexican pesos (MXN).</li>
                  <li>Payments are processed through the methods available on the Site.</li>
                  <li>All applicable taxes are included (where applicable).</li>
                  <li>Billing is generated in the User&apos;s name according to the information provided.</li>
                </ul>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">6. Cancellation and Refund Policy</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Cancellations must be requested at least 48 hours in advance.</li>
                  <li>No refunds are granted for classes already taught.</li>
                  <li>Refunds are valid only if a technical failure attributable to the Site is demonstrated.</li>
                </ul>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">7. Intellectual Property</h3>
                <p>All content on the Site is the property of ICA Languages or its licensors and is protected by copyright and intellectual property laws.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Unauthorized use of the Content may violate national and international laws.</li>
                  <li>You do not acquire any intellectual property rights by accessing or using the Site.</li>
                </ul>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">8. Privacy and Data Protection</h3>
                <p>The processing of your personal information is governed by our Privacy Policy, which forms an integral part of these Terms and is available on the Site.</p>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">9. Links to Third-Party Sites</h3>
                <p>The Site may contain links to external sites. We are not responsible for the content, privacy practices or terms of those sites.</p>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">10. Limitation of Liability</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>The Site is offered &quot;as is&quot; and &quot;as available&quot;.</li>
                  <li>We do not guarantee that the Site or services will be uninterrupted or error-free.</li>
                  <li>In no event shall ICA Languages be liable for indirect, incidental, punitive or consequential damages.</li>
                </ul>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">11. Indemnification</h3>
                <p>You agree to defend, indemnify and hold harmless ICA Languages, its affiliates, employees and providers from any claim caused by your use of the Site or breach of these Terms.</p>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">12. Modifications to Terms</h3>
                <p>ICA Languages may modify these Terms at any time. New versions will be published on the Site and will take effect upon publication. Your continued use of the Site implies your acceptance of the new conditions.</p>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">13. Applicable Law and Jurisdiction</h3>
                <p>These Terms are governed by the laws of Mexico. Any dispute will be submitted to the competent courts of the state where ICA Languages operates.</p>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">14. Contact</h3>
                <p>If you have questions or comments about these Terms and Conditions, write to us at:<br />
                  ✉️ <a href="mailto:contacto@icalanguage.com.mx" className="text-teal-600 hover:text-teal-700 font-semibold underline">contacto@icalanguage.com.mx</a>
                </p>
              </div>
            </>
          ) : locale === "fr" ? (
            <>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mb-2 leading-tight" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                Conditions Générales d&apos;Utilisation
              </h1>
              <p className="text-xs text-slate-400 font-medium mb-8 uppercase tracking-wider">Dernière mise à jour : 27 janvier 2026</p>
              <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-8">
                <p>Bienvenue sur <strong>https://icalanguages.com.mx/</strong> (ci-après, le « Site »). Les présentes Conditions Générales régissent votre accès et votre utilisation du Site et des services associés. En accédant, en naviguant ou en interagissant sur ce Site, vous acceptez volontairement ces conditions.</p>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">1. Définitions</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Utilisateur :</strong> Toute personne qui accède ou utilise le Site.</li>
                  <li><strong>Services :</strong> Cours, contenus, matériaux et outils proposés par ICA Languages.</li>
                  <li><strong>Contenu :</strong> Textes, images, vidéos, audios, matériaux téléchargeables et toute ressource disponible sur le Site.</li>
                </ul>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">2. Acceptation des Conditions</h3>
                <p>En utilisant ce Site, vous acceptez que :</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Vous avez lu, compris et accepté de respecter ces Conditions.</li>
                  <li>Vous êtes responsable de toute utilisation effectuée sous votre compte ou accès.</li>
                  <li>Si vous n&apos;êtes pas d&apos;accord avec ces Conditions, n&apos;utilisez pas le Site ni les Services.</li>
                </ul>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">3. Accès et Inscription</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Le Site peut nécessiter une inscription avec des données véridiques et actualisées (nom, e-mail, etc.).</li>
                  <li>Vous êtes responsable de la confidentialité de votre compte et de votre mot de passe.</li>
                  <li>Vous ne devez pas partager votre compte ni permettre des accès non autorisés.</li>
                </ul>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">4. Utilisation du Site et des Services</h3>
                <h4 className="text-sm font-bold text-slate-900 mt-4 mb-2 uppercase tracking-wide">Autorisations</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>L&apos;utilisation du Site est personnelle et non commerciale.</li>
                  <li>Vous pouvez visualiser, reproduire ou télécharger le Contenu uniquement pour votre usage personnel.</li>
                </ul>
                <h4 className="text-sm font-bold text-slate-900 mt-6 mb-2 uppercase tracking-wide">Restrictions</h4>
                <p>Vous ne pouvez pas :</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Copier, reproduire, distribuer ou revendre le Contenu sans permission.</li>
                  <li>Modifier, adapter ou transformer le Contenu sans autorisation.</li>
                  <li>Utiliser le Site à des fins illégales ou abusives.</li>
                </ul>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">5. Paiements et Facturation</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Les prix sont affichés en pesos mexicains (MXN).</li>
                  <li>Les paiements sont traités via les méthodes disponibles sur le Site.</li>
                  <li>Toutes les taxes applicables sont incluses (le cas échéant).</li>
                  <li>La facturation est générée au nom de l&apos;Utilisateur selon les informations fournies.</li>
                </ul>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">6. Politique d&apos;Annulation et Remboursements</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Les annulations doivent être demandées au moins 48 heures à l&apos;avance.</li>
                  <li>Aucun remboursement n&apos;est accordé pour les cours déjà dispensés.</li>
                  <li>Les remboursements ne sont valides que si une défaillance technique imputable au Site est démontrée.</li>
                </ul>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">7. Propriété Intellectuelle</h3>
                <p>Tout le contenu du Site est la propriété d&apos;ICA Languages ou de ses concédants et est protégé par les lois sur le droit d&apos;auteur et la propriété intellectuelle.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>L&apos;utilisation non autorisée du Contenu peut violer les lois nationales et internationales.</li>
                  <li>Vous n&apos;acquérez aucun droit de propriété intellectuelle en accédant ou en utilisant le Site.</li>
                </ul>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">8. Confidentialité et Protection des Données</h3>
                <p>Le traitement de vos informations personnelles est régi par notre Politique de Confidentialité, qui fait partie intégrante de ces Conditions et est disponible sur le Site.</p>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">9. Liens vers des Sites Tiers</h3>
                <p>Le Site peut contenir des liens vers des sites externes. Nous ne sommes pas responsables du contenu, des pratiques de confidentialité ou des conditions de ces sites.</p>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">10. Limitation de Responsabilité</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Le Site est proposé « tel quel » et « selon disponibilité ».</li>
                  <li>Nous ne garantissons pas que le Site ou les services seront ininterrompus ou sans erreur.</li>
                  <li>En aucun cas ICA Languages ne sera responsable des dommages indirects, accessoires, punitifs ou consécutifs.</li>
                </ul>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">11. Indemnisation</h3>
                <p>Vous acceptez de défendre, d&apos;indemniser et de tenir indemne ICA Languages, ses affiliés, employés et prestataires de toute réclamation causée par votre utilisation du Site ou votre non-respect de ces Conditions.</p>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">12. Modifications des Conditions</h3>
                <p>ICA Languages peut modifier ces Conditions à tout moment. Les nouvelles versions seront publiées sur le Site et entreront en vigueur dès leur publication. Votre utilisation continue du Site implique votre acceptation des nouvelles conditions.</p>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">13. Loi Applicable et Juridiction</h3>
                <p>Ces Conditions sont régies par les lois du Mexique. Tout litige sera soumis aux tribunaux compétents de l&apos;État où opère ICA Languages.</p>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">14. Contact</h3>
                <p>Si vous avez des questions ou des commentaires sur ces Conditions Générales, écrivez-nous à :<br />
                  ✉️ <a href="mailto:contacto@icalanguage.com.mx" className="text-teal-600 hover:text-teal-700 font-semibold underline">contacto@icalanguage.com.mx</a>
                </p>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mb-2 leading-tight" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                Términos y Condiciones de Uso
              </h1>
              <p className="text-xs text-slate-400 font-medium mb-8 uppercase tracking-wider">
                Última actualización: 27 de enero de 2026
              </p>
              <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-8">
                <p>Bienvenido a <strong>https://icalanguages.com.mx/</strong> (en adelante, el &quot;Sitio&quot;). Estos Términos y Condiciones rigen tu acceso y uso del Sitio y los servicios relacionados. Al ingresar, navegar o interactuar en este Sitio, aceptas voluntariamente estos términos.</p>
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
                <p>Todo el contenido del Sitio es propiedad de ICA Languages o de sus licenciantes y está protegido por leyes de derechos de autor y propiedad intelectual.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>El uso no autorizado del Contenido puede violar leyes nacionales e internacionales.</li>
                  <li>No adquieres ningún derecho de propiedad intelectual por acceder o usar el Sitio.</li>
                </ul>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">8. Privacidad y Protección de Datos</h3>
                <p>El tratamiento de tu información personal se rige por nuestra Política de Privacidad, que forma parte integral de estos Términos y está disponible en el Sitio.</p>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">9. Enlaces a Sitios de Terceros</h3>
                <p>El Sitio puede contener enlaces a sitios externos. No somos responsables del contenido, prácticas de privacidad o términos de esos sitios.</p>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">10. Limitación de Responsabilidad</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>El Sitio se ofrece &quot;tal cual&quot; y &quot;según disponibilidad&quot;.</li>
                  <li>No garantizamos que el Sitio o los servicios sean ininterrumpidos o libres de errores.</li>
                  <li>En ningún caso ICA Languages será responsable por daños indirectos, incidentales, punitivos o consecuentes.</li>
                </ul>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">11. Indemnización</h3>
                <p>Aceptas defender, indemnizar y mantener indemne a ICA Languages, sus afiliados, empleados y proveedores ante cualquier reclamación causada por tu uso del Sitio o incumplimiento de estos Términos.</p>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">12. Modificaciones a los Términos</h3>
                <p>ICA Languages puede modificar estos Términos en cualquier momento. Las nuevas versiones se publicarán en el Sitio y entrarán en vigor desde su publicación. Tu uso continuado del Sitio implica tu aceptación de las nuevas condiciones.</p>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">13. Ley Aplicable y Jurisdicción</h3>
                <p>Estos Términos se rigen por las leyes de México. Cualquier disputa se someterá a los tribunales competentes del estado donde opere ICA Languages.</p>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">14. Contacto</h3>
                <p>Si tienes preguntas o comentarios sobre estos Términos y Condiciones, escríbenos a:<br />
                  ✉️ <a href="mailto:contacto@icalanguage.com.mx" className="text-teal-600 hover:text-teal-700 font-semibold underline">contacto@icalanguage.com.mx</a>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
