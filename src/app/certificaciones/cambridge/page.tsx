import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Certificaciones Cambridge",
  description:
    "Prepárate para las certificaciones Cambridge (KET, PET, FCE, CAE, CPE) en ICA Languages, Apizaco Tlaxcala.",
};

const exams = [
  {
    code: "KET",
    name: "Key English Test",
    level: "A2",
    description: "Nivel básico. Ideal para quienes comienzan a comunicarse en inglés.",
    color: "bg-slate-100 text-slate-700",
  },
  {
    code: "PET",
    name: "Preliminary English Test",
    level: "B1",
    description: "Nivel intermedio. Comunicación en situaciones cotidianas.",
    color: "bg-blue-100 text-blue-700",
  },
  {
    code: "FCE",
    name: "First Certificate in English",
    level: "B2",
    description: "Nivel avanzado-intermedio. El más solicitado por universidades y empresas.",
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    code: "CAE",
    name: "Certificate in Advanced English",
    level: "C1",
    description: "Nivel avanzado. Reconocido por miles de universidades mundialmente.",
    color: "bg-purple-100 text-purple-700",
  },
  {
    code: "CPE",
    name: "Certificate of Proficiency in English",
    level: "C2",
    description: "Nivel maestría. El más alto nivel de certificación Cambridge.",
    color: "bg-amber-100 text-amber-700",
  },
];

export default function CambridgePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5 mb-6">
              <span className="text-sm font-medium">Certificaciones Internacionales</span>
            </div>
            <div className="text-5xl mb-4">🎓</div>
            <h1
              className="text-4xl sm:text-5xl font-bold mb-4"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Certificaciones Cambridge
            </h1>
            <p className="text-xl text-white/80 mb-4">Reconocidas en más de 130 países</p>
            <p className="text-white/70 leading-relaxed mb-8">
              Certifica tu nivel de inglés con el respaldo de la Universidad de Cambridge,
              la institución de referencia mundial en evaluación de idiomas. ICA Languages
              te prepara para superar cada examen con confianza.
            </p>
            <Link
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hola, quiero información sobre las certificaciones Cambridge`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold rounded-xl transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Asesoría Gratuita
            </Link>
          </div>
        </div>
      </section>

      {/* Exams grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Exámenes disponibles
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {exams.map((exam) => (
              <div
                key={exam.code}
                className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-bold ${exam.color}`}
                  >
                    {exam.code}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                    Nivel {exam.level}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{exam.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {exam.description}
                </p>
                <div className="flex items-center gap-2 text-blue-600 text-sm font-medium">
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
