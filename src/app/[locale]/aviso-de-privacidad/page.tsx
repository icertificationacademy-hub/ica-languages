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
    title: isEs ? "Aviso de Privacidad | ICA Languages" : "Privacy Notice | ICA Languages",
    description: "Aviso de Privacidad y Políticas de Privacidad de ICA Languages.",
  };
}

export default async function AvisoDePrivacidadPage({
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

        {/* Encabezado Principal */}
        <div className="bg-white rounded-3xl border border-slate-100 p-8 sm:p-12 shadow-sm mb-8">
          <div className="flex items-center gap-3 bg-teal-50 text-teal-700 text-sm font-semibold px-4 py-1.5 rounded-full w-fit mb-6 border border-teal-100">
            <FileText className="w-4 h-4" /> Legal
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6 leading-tight" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
            Aviso de Privacidad
          </h1>
          <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-6">
            <p>
              Los datos personales (“los Datos”) solicitados, son tratados por <strong>ICA Languages</strong> (“International Certification Academy”), con domicilio en <em>Av. Juárez No. 412 Col. Centro, Apizaco Tlax. C.P. 90300, México.</em>, con la finalidad de brindarle el servicio que nos solicita, conocer sus necesidades de productos o servicios y estar en posibilidad de ofrecerle los que más se adecuen a sus preferencias; comunicarle promociones, atender quejas y aclaraciones, y en su caso, tratarlos para fines compatibles con los mencionados en este Aviso de Privacidad y que se consideren análogos para efectos legales. En caso de formalizar con Usted la aceptación de algún producto o servicio ofrecido por ICA Languages, sus Datos serán utilizados para el cumplimiento de las obligaciones derivadas de esa relación jurídica.
            </p>
            <p>
              Los Datos podrían ser transferidos a sociedades subsidiarias, filiales, afiliadas y controladoras de ICA Languages, dentro de territorio nacional o en el extranjero sin un fin comercial, ni ilícito, sino únicamente para cumplir con los mismos fines establecidos en el párrafo anterior.
            </p>
            <p>
              Los Datos serán tratados de conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y su Reglamento (cuando este sea expedido). La confidencialidad de los Datos está garantizada y los mismos están protegidos por medidas de seguridad administrativas, técnicas y físicas, para evitar su daño, pérdida, alteración, destrucción, uso, acceso o divulgación indebida. Únicamente las personas autorizadas tendrán acceso a sus Datos.
            </p>
            <p>
              En caso de existir alguna modificación al presente Aviso de Privacidad se hará de su conocimiento en este mismo sitio de internet.
            </p>
            <p>
              Podrá ejercer los derechos de acceso, rectificación, cancelación u oposición al tratamiento de sus Datos (derechos ARCO), presentando su solicitud a través del correo electrónico: <strong>info@icalanguage.com.mx</strong> o por escrito a la dirección: <em>Av. Juárez No. 412 Col. Centro, Apizaco Tlax. C.P. 90300, México.</em> Dicha solicitud deberá contener por lo menos: (a) nombre y domicilio u otro medio para comunicarle la respuesta a su solicitud; (b) los documentos que acrediten su identidad o, en su caso, la representación legal; (c) la descripción clara y precisa de los datos personales respecto de los que se solicita ejercer alguno de los derechos ARCO, (d) la manifestación expresa para revocar su consentimiento al tratamiento de sus datos personales y por tanto, para que no se usen; (e) cualquier otro elemento que facilita la localización de los datos personales. ¿Cuándo puede usted ejercer sus derechos ARCO? En términos de la LFPDPPP, usted podrá iniciar el procedimiento de protección de derechos ARCO ante el Instituto Federal de Acceso a la Información y Protección de Datos Personales (IFAI) dentro de los 15 días siguientes a la fecha en que ICA Languages de respuesta a su solicitud o, si transcurrido el término que señala la Ley, ICA Languages no diera respuesta a su solicitud.
            </p>
          </div>
        </div>

        {/* Políticas de Privacidad */}
        <div className="bg-white rounded-3xl border border-slate-100 p-8 sm:p-12 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
            POLÍTICAS DE PRIVACIDAD
          </h2>
          <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-6">
            <p>
              Preservar su privacidad y la seguridad de su información personal es importante para nosotros. Por favor, tómese un momento para leer la siguiente Política de Privacidad e informarse sobre cómo manejamos su información personal. Como continuamente mejoramos y ampliamos nuestros servicios, esta Política puede sufrir modificaciones, y por eso sugerimos que la revise periódicamente. Si tiene preguntas acerca de nuestra Política de Privacidad, utilice el formulario que aparece en la sección “Contacto”.
            </p>
            
            <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">FINALIDAD</h3>
            <p>
              ICA Languages ha adoptado esta Política de Privacidad para informarle sobre sus políticas con respecto a la información que se recopile en este sitio web. La utilización de este sitio web constituye su aprobación de esta Política de Privacidad y su consentimiento con respecto a las prácticas que describe. Esta Política de Privacidad es exclusiva para este sitio web y no se aplica al manejo de su información personal recopilada por ICA Languages o sus afiliadas/propietarios y operadores por otros medios que no sean este sitio web.
            </p>

            <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">INFORMACIÓN PERSONAL</h3>
            <p>
              Información personal es toda aquella información que concierne a su persona y que le permite a alguien ponerse en contacto con usted, por ejemplo, su nombre, dirección, número de teléfono o de fax, dirección de correo electrónico o cualquier otra información que envíe a <em>www.icalanguages.com.mx</em> y que permita identificarle.
            </p>
            <p>
              Este sitio web no recopilará información personal a menos que usted la proporcione, por lo tanto, si no desea que recopilemos su información personal, por favor, no la envíe.
            </p>
            <p>
              Puede visitar y navegar el sitio web de ICA Languages sin revelar información personal. Puede elegir revelar información personal, misma que será protegida del modo que a continuación se describe. Este sitio web puede recopilar información personal mediante los siguientes métodos:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li><strong>Formularios de registro:</strong> Si se le ofrece la oportunidad de solicitar o inscribirte en línea a cursos o exámenes u optar por recibir información acerca de ICA Languages, debe solicitarla completando los formularios de registro en el sitio. Estos formularios requieren cierta información personal que puede incluir, entre otros, su nombre, dirección de correo electrónico, dirección postal, número de teléfono, temas que le interesen, escolaridad, conocimientos, etc.</li>
              <li><strong>Operaciones y actividades:</strong> si se registra como usuario o si realiza operaciones en este sitio web, recopilaremos información sobre las operaciones que realice mientras navega en el sitio web y otras actividades que realice en el sitio. Esta información puede incluir áreas del sitio web que visite, tipo de operaciones, contenido que visualice, descargue o envíe.</li>
              <li><strong>Correo electrónico y otras comunicaciones voluntarias:</strong> puede elegir comunicarse con nosotros por correo electrónico, por medio de nuestro sitio web, por teléfono, por escrito o por cualquier otro medio. Recopilamos la información que se incluye en estas comunicaciones, y dicha información puede ser personal.</li>
            </ul>
            <p>
              Cuando visite el sitio web de ICA Languages, como ocurre cuando visita la mayoría de los sitios web, se registra automáticamente cierta información anónima sobre usted, que puede incluir información acerca del navegador que utiliza, el nombre del servidor y la dirección IP a través de la cual accede a internet (tales como “aol.com” o “earthlink.net“), la fecha y la hora en las que accede al sitio, las páginas que visita mientras usted está en el sitio web de ICA Languages, y la dirección de internet del sitio web, si posee alguna, desde la cual accede directamente al sitio web de ICA Languages. Esta información no es personal.
            </p>

            <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">USO DE LA INFORMACIÓN</h3>
            <p>
              ICA Languages puede utilizar la información personal recopilada a través de su sitio web principalmente para fines tales como:
            </p>
            <p>
              Ayudar a establecer y verificar la identidad de los usuarios; abrir, mantener, administrar y atender las cuentas de usuarios o membresías que pudieran existir; procesar, atender o ejecutar operaciones y enviar comunicaciones relacionadas; brindar servicios y ayuda a los usuarios; mejorar el sitio web; incluida su adaptación a las preferencias de los usuarios; proveer a los usuarios con actualizaciones de productos o servicios, notificaciones de promociones y ofertas, y cualquier otra información acerca de ICA Languages y sus afiliadas; responder sus preguntas, comentarios e instrucciones; mantener la seguridad y la integridad de sus sistemas.
            </p>
            <p>
              ICA Languages utiliza la información anónima sobre navegación recopilada en forma automática por sus servidores principalmente para ayudar a administrar y mejorar su sitio web. ICA Languages también puede utilizar información anónima adicional para brindar información acerca de su sitio web a posibles socios comerciales y otras entidades no afiliadas. Esta información no es personal.
            </p>

            <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">REVELACIÓN DE INFORMACIÓN</h3>
            <p>
              ICA Languages no provee información personal a terceros no afiliados para que la utilicen con el objetivo de comercializar directamente contigo. ICA Languages puede contratar empresas no afiliadas para ayudar a mantener y operar su sitio web o para otros fines relacionados con el funcionamiento de su empresa, y dichas compañías pueden recibir tu información personal con esa finalidad. ICA Languages también puede revelar información personal relacionada con requisitos legales, tales como la respuesta a una citación autorizada, una investigación o pedido gubernamental u otras situaciones autorizadas por la ley.
            </p>

            <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">PRIVACIDAD DE LOS MENORES</h3>
            <p>
              Este sitio web está dirigido y diseñado para ser utilizado por personas de 13 años de edad o mayores. ICA Languages no aprobará solicitudes, ni establecerá o mantendrá registros de cualquier menor que ICA Languages sepa que es menor de 13 años de edad. ICA Languages no solicita ni recopila información personal de menores de 13 años de edad. No obstante, si ICA Languages descubre que ha recibido información personal de una persona que indica que él o ella es menor de 13 años, o de cualquier otra persona que ICA Languages tenga motivos para creer que es menor de 13 años, ICA Languages borrará dicha información de sus sistemas. Además, el padre o tutor del menor puede solicitar que la información sobre el menor se corrija o se borre de nuestros archivos enviando su solicitud desde nuestra sección “Contacto”. Solicitamos a los padres que supervisen a sus hijos mientras están en línea.
            </p>

            <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">“COOKIES” Y ANUNCIANTES</h3>
            <p>
              El servidor del sitio web de ICA Languages o los servidores de las empresas que suelen operar este sitio pueden colocar una “cookie” en su computadora para permitirle navegar el sitio web y personalizarlo. Una “cookie” es un pequeño fragmento de información que puede enviar nuestro servidor a su computadora, que luego será almacenado por su navegador en el disco rígido de su computadora. Las “cookies” nos permiten reconocer su computadora mientras navega nuestro sitio y nos ayuda a personalizar su experiencia en línea para adecuarla a sus necesidades. Las “cookies” también son útiles para permitir un inicio de sesión más eficiente para los usuarios, seguir el historial de operaciones y conservar la información entre sesiones. La información recopilada por las “cookies” también puede utilizarse para mejorar la funcionalidad del sitio web.
            </p>
            <p>
              La mayoría de los navegadores (tales como Microsoft Internet Explorer y Google) tienen características que pueden notificarle cuando reciba una “cookie” o evitar que le envíen “cookies”. Sin embargo, si desactiva las “cookies” no podrá utilizar algunas de las funciones personalizadas de este sitio web.
            </p>

            <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">ENLACES EXTERNOS</h3>
            <p>
              El sitio web de ICA Languages puede contener enlaces a otros sitios web que no son mantenidos ni están relacionados con ICA Languages. Estos enlaces se brindan como un servicio a los usuarios y no son patrocinados ni están afiliados a este sitio web ni a ICA Languages. ICA Languages no ha examinado ninguno de los hipervínculos hacia o desde este sitio web y no se responsabiliza del contenido o las prácticas de privacidad de otros sitios web. El usuario ingresa en los enlaces bajo su propia responsabilidad, e ICA Languages no emite declaraciones ni garantías sobre el contenido, integridad o exactitud de esos enlaces o de los hipervínculos a este sitio web. Los sitios web a los que se accede por medio de hipervínculos existentes en el sitio web de ICA Languages pueden utilizar “cookies”. ICA Languages recomienda que lea las políticas de privacidad de otros sitios web antes de proporcionar cualquier información personal. ICA Languages no respalda en forma implícita los sitios de terceros enlazados a este sitio web.
            </p>

            <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">SEGURIDAD</h3>
            <p>
              ICA Languages mantiene resguardos físicos, electrónicos y de procedimiento para contribuir a la protección de la información personal. Si se ofrecen operaciones en el sitio, la información de las operaciones se transmite hacia y desde ICA Languages en forma encriptada para proteger y evitar que dicha información sea interceptada. ICA Languages restringe el acceso autorizado a su información personal a aquellas personas que tienen un fin legítimo para conocer esa información para ofrecerle productos o servicios a usted y a aquellas personas que han autorizaron el acceso a dicha información. Sin embargo, tenga en cuenta que cualquier correo electrónico u otra transmisión de datos que nos envíe por internet puede no estar completamente protegida contra la intercepción no autorizada.
            </p>

            <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">ELECCIÓN/EXCLUSIÓN</h3>
            <p>
              Con el fin de brindarle un servicio, le enviaremos comunicaciones relacionadas con sus operaciones, la seguridad o la administración del sitio web. Cada tanto, ICA Languages y sus afiliadas pueden enviarle otros mensajes o actualizaciones sobre nuestro sitio web, ICA Languages o nuestras afiliadas, y sus promociones u otros servicios. Si no desea recibir comunicaciones relacionadas con seguridad o que no estén vinculadas a operaciones de ICA Languages y sus afiliadas, envíenos un correo electrónico con su solicitud desde nuestra sección “Contacto”.
            </p>

            <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">CAMBIOS EN ESTA POLÍTICA DE PRIVACIDAD</h3>
            <p>
              ICA Languages se reserva el derecho de modificar o complementar esta Política en cualquier momento. Si se efectuase un cambio sustancial en esta Política de Privacidad, ICA Languages publicará una notificación en su página de inicio y un enlace a la nueva política.
            </p>

            <h3 className="text-lg font-bold text-slate-950 mt-8 mb-3">CONTACTO</h3>
            <p>
              Si tiene preguntas sobre esta Política de Privacidad, el manejo de la información de ICA Languages o sobre las operaciones con nuestro Sitio Web, por favor visite nuestra sección “Contacto”.
            </p>
          </div>
        </div>

        {/* Aviso Importante IELTS */}
        <div className="bg-amber-50 rounded-3xl border-2 border-amber-200 p-8 sm:p-12 shadow-sm">
          <h2 className="text-2xl font-bold text-amber-900 mb-6" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
            Aviso Importante IELTS
          </h2>
          <div className="prose prose-amber max-w-none text-amber-950 text-sm sm:text-base leading-relaxed space-y-6">
            <p>
              ICA Languages no se hace responsable por cualquier gasto relacionado con el traslado del candidato a la sede del examen IELTS elegida. Esto incluye, de manera enunciativa más no limitativa, los siguientes gastos:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Transporte (aéreo, terrestre o marítimo)</li>
              <li>Hospedaje</li>
              <li>Alimentación</li>
              <li>Seguro de viaje u otros gastos personales asociados</li>
            </ul>
            <p>
              La elección de la sede del examen es decisión exclusiva del candidato. Por lo tanto, cualquier costo derivado de dicha elección correrá por cuenta del propio candidato, sin posibilidad de reembolso o compensación por parte de ICA Languages. Al registrarse para el examen y/o solicitar el cambio de sede, el candidato confirma que ha leído, comprendido y aceptado esta cláusula.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
