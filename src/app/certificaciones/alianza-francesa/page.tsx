import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Alianza Francesa - Certificaciones DELF y DALF",
  description:
    "Certifica tu nivel de francés con DELF y DALF. Preparación oficial en ICA Languages, Apizaco Tlaxcala.",
};

const diplomas = [
  { code: "DELF A1", level: "A1", description: "Primeros pasos en el idioma francés." },
  { code: "DELF A2", level: "A2", description: "Comunicación básica en situaciones cotidianas." },
  { code: "DELF B1", level: "B1", description: "Independencia comunicativa en francés." },
  { code: "DELF B2", level: "B2", description: "Comprensión sólida y expresión fluida." },
  { code: "DALF C1", level: "C1", description: "Nivel avanzado, acceso a universidades francesas." },
  { code: "DALF C2", level: "C2", description: "Maestría completa del idioma francés." },
];

export default function AlianzaFrancesaPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-purple-700 to-purple-900 text-white pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-5xl mb-4">🏅</div>
            <h1
              className="text-4xl sm:text-5xl font-bold mb-4"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Alianza Francesa
            </h1>
            <p className="text-xl text-white/80 mb-4">
              Certificaciones DELF y DALF reconocidas mundialmente
            </p>
            <p className="text-white/70 leading-relaxed mb-8">
              Obtén tu diploma oficial de francés con el respaldo de la Alianza Francesa,
              la institución cultural y lingüística más importante del mundo francófono.
            </p>
            <Link
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hola, quiero información sobre las certificaciones DELF/DALF`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold rounded-xl transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Solicitar Información
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Diplomas disponibles
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {diplomas.map((d) => (
              <div
                key={d.code}
                className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full text-sm font-bold bg-purple-100 text-purple-700">
                    {d.code}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                    Nivel {d.level}
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{d.description}</p>
                <div className="flex items-center gap-2 text-purple-600 text-sm font-medium">
                  <CheckCircle className="w-4 h-4" />
                  Preparación incluida
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
