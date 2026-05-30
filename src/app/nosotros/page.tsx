import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, Heart, Target, Users, ArrowRight } from "lucide-react";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Quiénes Somos",
  description:
    "Conoce a ICA Languages, el centro de idiomas líder en Apizaco, Tlaxcala. Nuestra misión, visión y equipo.",
};

const values = [
  {
    icon: Heart,
    title: "Pasión por enseñar",
    description:
      "Creemos que aprender un idioma transforma vidas. Cada clase es una oportunidad de abrir nuevas puertas.",
    color: "text-red-500 bg-red-50",
  },
  {
    icon: Target,
    title: "Resultados reales",
    description:
      "No solo enseñamos gramática. Preparamos a nuestros estudiantes para comunicarse con confianza en el mundo real.",
    color: "text-blue-600 bg-blue-50",
  },
  {
    icon: Users,
    title: "Comunidad de aprendizaje",
    description:
      "Grupos pequeños que crean un ambiente cálido y de apoyo mutuo, donde todos se sienten seguros de practicar.",
    color: "text-green-600 bg-green-50",
  },
  {
    icon: GraduationCap,
    title: "Excelencia educativa",
    description:
      "Maestros certificados con metodologías modernas y materiales actualizados constantemente.",
    color: "text-amber-600 bg-amber-50",
  },
];

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5 mb-6">
              <span className="text-sm font-medium">Nuestra historia</span>
            </div>
            <h1
              className="text-4xl sm:text-5xl font-bold mb-5"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Quiénes Somos
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              ICA Languages es el centro de idiomas líder en Apizaco, Tlaxcala. Nació con
              una misión clara: hacer que aprender un idioma sea accesible, efectivo y
              transformador.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 mb-16">
            <div className="p-8 bg-blue-50 rounded-2xl border border-blue-100">
              <h2
                className="text-2xl font-bold text-blue-800 mb-4"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Nuestra Misión
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Proporcionar una educación de idiomas de calidad internacional en el corazón
                de Tlaxcala. En ICA Languages no solo aprendes un idioma, aprendes a usarlo.
                Transformamos estudiantes en comunicadores seguros y efectivos.
              </p>
            </div>
            <div className="p-8 bg-amber-50 rounded-2xl border border-amber-100">
              <h2
                className="text-2xl font-bold text-amber-800 mb-4"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Nuestra Visión
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Ser reconocidos como el centro de idiomas más confiable y efectivo en
                Tlaxcala, expandiendo horizontes lingüísticos para que nuestros estudiantes
                puedan comunicarse con el mundo sin barreras.
              </p>
            </div>
          </div>

          {/* Values */}
          <div>
            <h2
              className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 text-center"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Nuestros valores
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all text-center"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${v.color} flex items-center justify-center mx-auto mb-4`}
                  >
                    <v.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{v.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join team CTA */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-slate-100 p-8 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <h3
                className="text-xl font-bold text-slate-900 mb-1"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                ¿Quieres ser parte de nuestro equipo?
              </h3>
              <p className="text-slate-600 text-sm">
                Buscamos maestros apasionados por los idiomas y la educación.
              </p>
            </div>
            <Link
              href="/nosotros/unete-al-equipo"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-xl transition-all shrink-0"
            >
              Únete al Equipo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
