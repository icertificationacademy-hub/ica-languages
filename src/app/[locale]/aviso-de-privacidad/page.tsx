import type { Metadata } from "next";
import { setRequestLocale } from 'next-intl/server';
import { FileText } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (locale === "fr") return { title: "Politique de Confidentialité | ICA Languages" };
  if (locale === "en") return { title: "Privacy Policy | ICA Languages" };
  return { title: "Aviso de Privacidad | ICA Languages" };
}

export default async function AvisoDePrivacidadPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="bg-slate-50 min-h-screen pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Privacy Notice */}
        <div className="bg-white rounded-3xl border border-slate-100 p-8 sm:p-12 shadow-sm mb-8">
          <div className="flex items-center gap-3 bg-teal-50 text-teal-700 text-sm font-semibold px-4 py-1.5 rounded-full w-fit mb-6 border border-teal-100">
            <FileText className="w-4 h-4" /> Legal
          </div>

          {locale === "en" ? (
            <>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6 leading-tight" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                Privacy Notice
              </h1>
              <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-6">
                <p>The personal data (&quot;Data&quot;) requested is processed by <strong>ICA Languages</strong> (&quot;International Certification Academy&quot;), with address at <em>Av. Juárez No. 412 Col. Centro, Apizaco Tlax. C.P. 90300, México.</em>, for the purpose of providing the service you request, understanding your product or service needs, and being able to offer those best suited to your preferences; communicating promotions, handling complaints and clarifications, and where applicable, processing them for purposes compatible with those mentioned in this Privacy Notice.</p>
                <p>The Data may be transferred to subsidiary, affiliated and parent companies of ICA Languages, within national territory or abroad, without a commercial or unlawful purpose, solely to fulfill the same purposes established in the previous paragraph.</p>
                <p>The Data will be processed in accordance with the Federal Law on Protection of Personal Data Held by Private Parties. Confidentiality of the Data is guaranteed and it is protected by administrative, technical and physical security measures to prevent damage, loss, alteration, destruction, improper use, access or disclosure. Only authorized persons will have access to your Data.</p>
                <p>If any modification is made to this Privacy Notice, you will be informed on this website.</p>
                <p>You may exercise your rights of access, rectification, cancellation or opposition to the processing of your Data (ARCO rights) by submitting your request to: <strong>info@icalanguage.com.mx</strong> or in writing to: <em>Av. Juárez No. 412 Col. Centro, Apizaco Tlax. C.P. 90300, México.</em></p>
              </div>
            </>
          ) : locale === "fr" ? (
            <>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6 leading-tight" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                Avis de Confidentialité
              </h1>
              <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-6">
                <p>Les données personnelles (« Données ») demandées sont traitées par <strong>ICA Languages</strong> (« International Certification Academy »), dont l&apos;adresse est <em>Av. Juárez No. 412 Col. Centro, Apizaco Tlax. C.P. 90300, Mexique.</em>, dans le but de fournir le service que vous demandez, de comprendre vos besoins en produits ou services, et d&apos;être en mesure de vous proposer ceux qui correspondent le mieux à vos préférences ; de vous communiquer des promotions, de traiter les plaintes et clarifications, et le cas échéant, de les traiter à des fins compatibles avec celles mentionnées dans cet Avis.</p>
                <p>Les Données peuvent être transférées à des sociétés filiales et affiliées d&apos;ICA Languages, sur le territoire national ou à l&apos;étranger, sans but commercial ni illicite, uniquement pour remplir les mêmes objectifs établis dans le paragraphe précédent.</p>
                <p>Les Données seront traitées conformément à la Loi fédérale sur la protection des données personnelles détenues par des particuliers. La confidentialité des Données est garantie et elles sont protégées par des mesures de sécurité administratives, techniques et physiques pour éviter tout dommage, perte, altération, destruction, utilisation, accès ou divulgation inappropriés. Seules les personnes autorisées auront accès à vos Données.</p>
                <p>Si une modification est apportée au présent Avis de Confidentialité, vous en serez informé sur ce même site internet.</p>
                <p>Vous pouvez exercer vos droits d&apos;accès, de rectification, d&apos;annulation ou d&apos;opposition au traitement de vos Données (droits ARCO) en soumettant votre demande à : <strong>info@icalanguage.com.mx</strong> ou par écrit à : <em>Av. Juárez No. 412 Col. Centro, Apizaco Tlax. C.P. 90300, Mexique.</em></p>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6 leading-tight" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                Aviso de Privacidad
              </h1>
              <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-6">
                <p>Los datos personales (&quot;los Datos&quot;) solicitados, son tratados por <strong>ICA Languages</strong> (&quot;International Certification Academy&quot;), con domicilio en <em>Av. Juárez No. 412 Col. Centro, Apizaco Tlax. C.P. 90300, México.</em>, con la finalidad de brindarle el servicio que nos solicita, conocer sus necesidades de productos o servicios y estar en posibilidad de ofrecerle los que más se adecuen a sus preferencias; comunicarle promociones, atender quejas y aclaraciones, y en su caso, tratarlos para fines compatibles con los mencionados en este Aviso de Privacidad y que se consideren análogos para efectos legales.</p>
                <p>Los Datos podrían ser transferidos a sociedades subsidiarias, filiales, afiliadas y controladoras de ICA Languages, dentro de territorio nacional o en el extranjero sin un fin comercial, ni ilícito, sino únicamente para cumplir con los mismos fines establecidos en el párrafo anterior.</p>
                <p>Los Datos serán tratados de conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y su Reglamento. La confidencialidad de los Datos está garantizada y los mismos están protegidos por medidas de seguridad administrativas, técnicas y físicas, para evitar su daño, pérdida, alteración, destrucción, uso, acceso o divulgación indebida. Únicamente las personas autorizadas tendrán acceso a sus Datos.</p>
                <p>En caso de existir alguna modificación al presente Aviso de Privacidad se hará de su conocimiento en este mismo sitio de internet.</p>
                <p>Podrá ejercer los derechos de acceso, rectificación, cancelación u oposición al tratamiento de sus Datos (derechos ARCO), presentando su solicitud a través del correo electrónico: <strong>info@icalanguage.com.mx</strong> o por escrito a la dirección: <em>Av. Juárez No. 412 Col. Centro, Apizaco Tlax. C.P. 90300, México.</em></p>
              </div>
            </>
          )}
        </div>

        {/* Privacy Policies */}
        <div className="bg-white rounded-3xl border border-slate-100 p-8 sm:p-12 shadow-sm mb-8">
          {locale === "en" ? (
            <>
              <h2 className="text-2xl font-bold text-slate-900 mb-6" style={{ fontFamily: "var(--font-plus-jakarta)" }}>PRIVACY POLICIES</h2>
              <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-6">
                <p>Preserving your privacy and the security of your personal information is important to us. Please take a moment to read the following Privacy Policy and learn how we handle your personal information. As we continually improve and expand our services, this Policy may be modified, so we suggest you review it periodically.</p>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">PURPOSE</h3>
                <p>ICA Languages has adopted this Privacy Policy to inform you about its policies regarding information collected on this website. Use of this website constitutes your approval of this Privacy Policy and your consent to the practices it describes. This Privacy Policy applies exclusively to this website.</p>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">PERSONAL INFORMATION</h3>
                <p>Personal information is any information that concerns you and allows someone to contact you, for example, your name, address, phone number, email address or any other information sent to <em>www.icalanguages.com.mx</em> that allows identification.</p>
                <p>This website will not collect personal information unless you provide it. You can visit and browse ICA Languages without revealing personal information. This website may collect personal information through: registration forms, operations and activities on the site, and email or other voluntary communications.</p>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">USE OF INFORMATION</h3>
                <p>ICA Languages may use personal information collected through its website primarily to: verify user identity; open and maintain user accounts; process operations; provide services; improve the website; provide product or service updates and promotional information; and respond to your questions and comments.</p>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">DISCLOSURE OF INFORMATION</h3>
                <p>ICA Languages does not provide personal information to unaffiliated third parties for direct marketing. It may contract non-affiliated companies to help maintain its website. It may also disclose personal information related to legal requirements such as authorized subpoenas or government investigations.</p>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">CHILDREN&apos;S PRIVACY</h3>
                <p>This website is designed for persons 13 years of age or older. ICA Languages does not knowingly collect personal information from children under 13. If such information is received, it will be deleted from our systems.</p>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">COOKIES</h3>
                <p>The ICA Languages server may place a &quot;cookie&quot; on your computer to allow site navigation and personalization. Cookies allow us to recognize your computer while you browse and personalize your online experience. Most browsers have features to notify you when receiving a cookie or prevent cookies from being sent.</p>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">SECURITY</h3>
                <p>ICA Languages maintains physical, electronic and procedural safeguards to protect personal information. Transaction information is transmitted to and from ICA Languages in encrypted form. Access to your personal information is restricted to those with a legitimate need to know.</p>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">CHANGES TO THIS PRIVACY POLICY</h3>
                <p>ICA Languages reserves the right to modify or supplement this Policy at any time. If a material change is made, ICA Languages will post a notice on its home page with a link to the new policy.</p>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">CONTACT</h3>
                <p>If you have questions about this Privacy Policy, please visit our &quot;Contact&quot; section.</p>
              </div>
            </>
          ) : locale === "fr" ? (
            <>
              <h2 className="text-2xl font-bold text-slate-900 mb-6" style={{ fontFamily: "var(--font-plus-jakarta)" }}>POLITIQUES DE CONFIDENTIALITÉ</h2>
              <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-6">
                <p>Préserver votre vie privée et la sécurité de vos informations personnelles est important pour nous. Veuillez prendre un moment pour lire la Politique de Confidentialité suivante et vous informer sur la façon dont nous traitons vos informations personnelles. Comme nous améliorons continuellement nos services, cette Politique peut être modifiée, nous vous suggérons donc de la consulter périodiquement.</p>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">FINALITÉ</h3>
                <p>ICA Languages a adopté cette Politique de Confidentialité pour vous informer de ses politiques concernant les informations collectées sur ce site web. L&apos;utilisation de ce site web constitue votre approbation de cette Politique et votre consentement aux pratiques qu&apos;elle décrit. Cette Politique s&apos;applique exclusivement à ce site web.</p>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">INFORMATIONS PERSONNELLES</h3>
                <p>Les informations personnelles sont toutes les informations qui vous concernent et permettent à quelqu&apos;un de vous contacter, par exemple votre nom, adresse, numéro de téléphone, adresse e-mail ou toute autre information envoyée à <em>www.icalanguages.com.mx</em> permettant votre identification.</p>
                <p>Ce site web ne collectera pas d&apos;informations personnelles à moins que vous ne les fournissiez. Vous pouvez visiter et naviguer sur ICA Languages sans révéler d&apos;informations personnelles. Ce site peut collecter des informations personnelles via : des formulaires d&apos;inscription, des opérations et activités sur le site, et des e-mails ou autres communications volontaires.</p>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">UTILISATION DES INFORMATIONS</h3>
                <p>ICA Languages peut utiliser les informations personnelles collectées principalement pour : vérifier l&apos;identité des utilisateurs ; ouvrir et maintenir des comptes utilisateurs ; traiter des opérations ; fournir des services ; améliorer le site web ; fournir des mises à jour sur les produits ou services et des informations promotionnelles ; et répondre à vos questions et commentaires.</p>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">DIVULGATION D&apos;INFORMATIONS</h3>
                <p>ICA Languages ne fournit pas d&apos;informations personnelles à des tiers non affiliés à des fins de marketing direct. Elle peut contracter des entreprises non affiliées pour aider à maintenir son site web. Elle peut également divulguer des informations personnelles liées à des exigences légales telles que des assignations autorisées ou des enquêtes gouvernementales.</p>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">CONFIDENTIALITÉ DES MINEURS</h3>
                <p>Ce site web est conçu pour les personnes âgées de 13 ans ou plus. ICA Languages ne collecte pas sciemment d&apos;informations personnelles auprès de mineurs de moins de 13 ans. Si de telles informations sont reçues, elles seront supprimées de nos systèmes.</p>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">COOKIES</h3>
                <p>Le serveur d&apos;ICA Languages peut placer un « cookie » sur votre ordinateur pour permettre la navigation sur le site et sa personnalisation. Les cookies nous permettent de reconnaître votre ordinateur pendant votre navigation et de personnaliser votre expérience en ligne. La plupart des navigateurs disposent de fonctionnalités pour vous notifier lors de la réception d&apos;un cookie ou pour empêcher l&apos;envoi de cookies.</p>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">SÉCURITÉ</h3>
                <p>ICA Languages maintient des mesures de protection physiques, électroniques et procédurales pour protéger les informations personnelles. Les informations de transaction sont transmises à et depuis ICA Languages sous forme chiffrée. L&apos;accès à vos informations personnelles est restreint à ceux qui ont un besoin légitime de les connaître.</p>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">MODIFICATIONS DE CETTE POLITIQUE</h3>
                <p>ICA Languages se réserve le droit de modifier ou de compléter cette Politique à tout moment. En cas de modification substantielle, ICA Languages publiera un avis sur sa page d&apos;accueil avec un lien vers la nouvelle politique.</p>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">CONTACT</h3>
                <p>Si vous avez des questions sur cette Politique de Confidentialité, veuillez visiter notre section « Contact ».</p>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-slate-900 mb-6" style={{ fontFamily: "var(--font-plus-jakarta)" }}>POLÍTICAS DE PRIVACIDAD</h2>
              <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-6">
                <p>Preservar su privacidad y la seguridad de su información personal es importante para nosotros. Por favor, tómese un momento para leer la siguiente Política de Privacidad e informarse sobre cómo manejamos su información personal. Como continuamente mejoramos y ampliamos nuestros servicios, esta Política puede sufrir modificaciones, y por eso sugerimos que la revise periódicamente.</p>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">FINALIDAD</h3>
                <p>ICA Languages ha adoptado esta Política de Privacidad para informarle sobre sus políticas con respecto a la información que se recopile en este sitio web. La utilización de este sitio web constituye su aprobación de esta Política de Privacidad y su consentimiento con respecto a las prácticas que describe. Esta Política es exclusiva para este sitio web.</p>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">INFORMACIÓN PERSONAL</h3>
                <p>Información personal es toda aquella información que concierne a su persona y que le permite a alguien ponerse en contacto con usted, por ejemplo, su nombre, dirección, número de teléfono o de fax, dirección de correo electrónico o cualquier otra información que envíe a <em>www.icalanguages.com.mx</em> y que permita identificarle.</p>
                <p>Este sitio web no recopilará información personal a menos que usted la proporcione. Puede visitar y navegar el sitio web de ICA Languages sin revelar información personal. Este sitio web puede recopilar información personal mediante: formularios de registro, operaciones y actividades en el sitio, y correo electrónico u otras comunicaciones voluntarias.</p>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">USO DE LA INFORMACIÓN</h3>
                <p>ICA Languages puede utilizar la información personal recopilada principalmente para: verificar la identidad de los usuarios; abrir y mantener cuentas de usuarios; procesar operaciones; brindar servicios; mejorar el sitio web; proveer actualizaciones de productos o servicios y notificaciones de promociones; y responder sus preguntas, comentarios e instrucciones.</p>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">REVELACIÓN DE INFORMACIÓN</h3>
                <p>ICA Languages no provee información personal a terceros no afiliados para que la utilicen con el objetivo de comercializar directamente contigo. Puede contratar empresas no afiliadas para ayudar a mantener su sitio web. También puede revelar información personal relacionada con requisitos legales, tales como la respuesta a una citación autorizada o investigación gubernamental.</p>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">PRIVACIDAD DE LOS MENORES</h3>
                <p>Este sitio web está dirigido a personas de 13 años de edad o mayores. ICA Languages no solicita ni recopila información personal de menores de 13 años. Si se descubre que ha recibido dicha información, será borrada de sus sistemas.</p>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">&quot;COOKIES&quot; Y ANUNCIANTES</h3>
                <p>El servidor de ICA Languages puede colocar una &quot;cookie&quot; en su computadora para permitirle navegar el sitio web y personalizarlo. Las &quot;cookies&quot; nos permiten reconocer su computadora mientras navega nuestro sitio y nos ayuda a personalizar su experiencia en línea. La mayoría de los navegadores tienen características que pueden notificarle cuando reciba una &quot;cookie&quot; o evitar que le envíen &quot;cookies&quot;.</p>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">SEGURIDAD</h3>
                <p>ICA Languages mantiene resguardos físicos, electrónicos y de procedimiento para contribuir a la protección de la información personal. Si se ofrecen operaciones en el sitio, la información se transmite en forma encriptada. ICA Languages restringe el acceso autorizado a su información personal a aquellas personas que tienen un fin legítimo para conocer esa información.</p>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">CAMBIOS EN ESTA POLÍTICA DE PRIVACIDAD</h3>
                <p>ICA Languages se reserva el derecho de modificar o complementar esta Política en cualquier momento. Si se efectuase un cambio sustancial, ICA Languages publicará una notificación en su página de inicio y un enlace a la nueva política.</p>
                <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">CONTACTO</h3>
                <p>Si tiene preguntas sobre esta Política de Privacidad, por favor visite nuestra sección &quot;Contacto&quot;.</p>
              </div>
            </>
          )}
        </div>

        {/* IELTS Notice */}
        <div className="bg-amber-50 rounded-3xl border-2 border-amber-200 p-8 sm:p-12 shadow-sm">
          {locale === "en" ? (
            <>
              <h2 className="text-2xl font-bold text-amber-900 mb-6" style={{ fontFamily: "var(--font-plus-jakarta)" }}>Important IELTS Notice</h2>
              <div className="prose prose-amber max-w-none text-amber-950 text-sm sm:text-base leading-relaxed space-y-6">
                <p>ICA Languages is not responsible for any expenses related to the candidate&apos;s transportation to the chosen IELTS exam venue. This includes, but is not limited to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Transportation (air, land or sea)</li>
                  <li>Accommodation</li>
                  <li>Food</li>
                  <li>Travel insurance or other associated personal expenses</li>
                </ul>
                <p>The choice of exam venue is exclusively the candidate&apos;s decision. Therefore, any costs arising from that choice will be borne by the candidate, with no possibility of reimbursement or compensation from ICA Languages. By registering for the exam and/or requesting a venue change, the candidate confirms having read, understood and accepted this clause.</p>
              </div>
            </>
          ) : locale === "fr" ? (
            <>
              <h2 className="text-2xl font-bold text-amber-900 mb-6" style={{ fontFamily: "var(--font-plus-jakarta)" }}>Avis Important IELTS</h2>
              <div className="prose prose-amber max-w-none text-amber-950 text-sm sm:text-base leading-relaxed space-y-6">
                <p>ICA Languages n&apos;est pas responsable des frais liés au transport du candidat vers le lieu d&apos;examen IELTS choisi. Cela inclut, sans s&apos;y limiter :</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Transport (aérien, terrestre ou maritime)</li>
                  <li>Hébergement</li>
                  <li>Alimentation</li>
                  <li>Assurance voyage ou autres frais personnels associés</li>
                </ul>
                <p>Le choix du lieu d&apos;examen est exclusivement la décision du candidat. Par conséquent, tout coût découlant de ce choix sera à la charge du candidat, sans possibilité de remboursement ou de compensation de la part d&apos;ICA Languages. En s&apos;inscrivant à l&apos;examen et/ou en demandant un changement de lieu, le candidat confirme avoir lu, compris et accepté cette clause.</p>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-amber-900 mb-6" style={{ fontFamily: "var(--font-plus-jakarta)" }}>Aviso Importante IELTS</h2>
              <div className="prose prose-amber max-w-none text-amber-950 text-sm sm:text-base leading-relaxed space-y-6">
                <p>ICA Languages no se hace responsable por cualquier gasto relacionado con el traslado del candidato a la sede del examen IELTS elegida. Esto incluye, de manera enunciativa más no limitativa, los siguientes gastos:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Transporte (aéreo, terrestre o marítimo)</li>
                  <li>Hospedaje</li>
                  <li>Alimentación</li>
                  <li>Seguro de viaje u otros gastos personales asociados</li>
                </ul>
                <p>La elección de la sede del examen es decisión exclusiva del candidato. Por lo tanto, cualquier costo derivado de dicha elección correrá por cuenta del propio candidato, sin posibilidad de reembolso o compensación por parte de ICA Languages. Al registrarse para el examen y/o solicitar el cambio de sede, el candidato confirma que ha leído, comprendido y aceptado esta cláusula.</p>
              </div>
            </>
          )}
        </div>

      </div>
    </div>
  );
}
