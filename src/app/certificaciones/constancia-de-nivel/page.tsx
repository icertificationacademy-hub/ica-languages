import type { Metadata } from "next";
import Link from "next/link";
import { FileText, CheckCircle, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Constancia de Nivel",
  description:
    "Obtén tu constancia oficial de nivel de idioma en ICA Languages para trámites académicos y laborales.",
};

const steps = [
  { step: "01", title: "Solicita tu evaluación", desc: "Contáctanos para agendar tu fecha de evaluación." },
  { step: "02", title: "Presentas el examen", desc: "Evaluación escrita, oral y de comprensión auditiva." },
  { step: "03", title: "Recibes tu constancia", desc: "Documento oficial firmado y sellado por ICA Languages." },
];

export default function ConstanciaNivelPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-700 to-slate-900 text-white pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-5xl mb-4">📜</div>
            <h1
              className="text-4xl sm:text-5xl font-bold mb-4"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Constancia de Nivel
            </h1>
            <p className="text-xl text-white/80 mb-4">
              Acredita tu conocimiento del idioma
            </p>
            <p className="text-white/70 leading-relaxed mb-8">
              Obtén una constancia oficial de ICA Languages que certifica tu nivel actual
              de inglés o francés. Válida para procesos de contratación, admisión escolar
              y trámites gubernamentales.
            </p>
            <Link
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hola, quiero solicitar una Constancia de Nivel`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold rounded-xl transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Solicitar Constancia
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl sm:text-3xl font-bold text-slate-900 mb-10"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            ¿Cómo obtener tu constancia?
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div
                key={s.step}
                className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-all"
              >
                <span className="text-4xl font-black text-slate-200 block mb-3">
                  {s.step}
                </span>
                <h3 className="font-bold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-blue-50 rounded-2xl border border-blue-100">
            <div className="flex items-start gap-3">
              <FileText className="w-6 h-6 text-blue-600 mt-0.5 shrink-0" />
              <div>
                <h3 className="font-bold text-slate-900 mb-2">
                  ¿Para qué sirve la constancia?
                </h3>
                <ul className="space-y-2">
                  {[
                    "Procesos de selección laboral",
                    "Admisión a universidades y posgrados",
                    "Trámites migratorios",
                    "Acreditación de conocimientos para bolsa de trabajo",
                    "Requisitos gubernamentales",
                  ].map((use) => (
                    <li key={use} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                      {use}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
