import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, MessageCircle, Send } from "lucide-react";
import { siteConfig } from "@/data/site";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Únete al Equipo",
  description:
    "Trabaja con nosotros en ICA Languages. Buscamos maestros de inglés y francés apasionados por la educación.",
};

const requirements = [
  "Licenciatura en idiomas, educación o área afín (o en curso)",
  "Nivel B2 o superior en inglés o francés (certificado o comprobable)",
  "Experiencia docente deseable (no indispensable)",
  "Habilidades de comunicación y trabajo en equipo",
  "Disponibilidad matutina, vespertina o nocturna",
  "Compromiso con el aprendizaje continuo",
];

const benefits = [
  "Sueldo competitivo + prestaciones",
  "Capacitación y desarrollo profesional continuo",
  "Ambiente de trabajo colaborativo y positivo",
  "Horarios flexibles adaptados a tu disponibilidad",
  "Descuento en cursos de idiomas para ti y familia",
  "Oportunidad de crecimiento dentro de la institución",
];

export default function UneteAlEquipoPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-5xl mb-4">🤝</div>
            <h1
              className="text-4xl sm:text-5xl font-bold mb-4"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Únete al Equipo ICA
            </h1>
            <p className="text-xl text-white/80 mb-4">
              Comparte tu pasión por los idiomas
            </p>
            <p className="text-white/70 leading-relaxed">
              En ICA Languages buscamos maestros comprometidos con la transformación
              educativa. Si tienes pasión por enseñar y dominas el inglés o el francés,
              ¡queremos conocerte!
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Requirements */}
            <div>
              <h2
                className="text-2xl font-bold text-slate-900 mb-6"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Perfil que buscamos
              </h2>
              <ul className="space-y-3">
                {requirements.map((req) => (
                  <li key={req} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                    <span className="text-slate-700 text-sm">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <h2
                className="text-2xl font-bold text-slate-900 mb-6"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Lo que ofrecemos
              </h2>
              <ul className="space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-slate-700 text-sm">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Apply CTA */}
          <div className="mt-12 p-8 bg-blue-50 rounded-2xl border border-blue-100 text-center">
            <h3
              className="text-xl font-bold text-slate-900 mb-2"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              ¿Listo para postularte?
            </h3>
            <p className="text-slate-600 mb-6">
              Envíanos tu CV y cuéntanos por qué te apasiona enseñar idiomas.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href={`https://wa.me/${siteConfig.whatsapp}?text=Hola, me interesa trabajar como maestro en ICA Languages`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-xl transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Enviar mensaje por WhatsApp
              </Link>
              <Link
                href={`mailto:${siteConfig.email}?subject=Solicitud de trabajo - Maestro de idiomas`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-semibold rounded-xl border border-slate-200 transition-all"
              >
                <Send className="w-5 h-5" />
                Enviar CV por email
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
