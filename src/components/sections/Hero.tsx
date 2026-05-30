"use client";

import Link from "next/link";
import { ArrowRight, Play, Star, Users, Award } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-amber-50" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(59,130,246,0.15) 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, rgba(245,158,11,0.12) 0%, transparent 50%)`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-full mb-6">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span className="text-xs font-semibold text-blue-700">
                Centro de Idiomas #1 en Apizaco, Tlaxcala
              </span>
            </div>

            {/* Heading */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-5"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              ¡Aprende inglés{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #1e40af, #3b82f6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                con confianza!
              </span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
              Clases prácticas, grupos pequeños y enfoque conversacional. En ICA
              Languages no solo aprendes un idioma,{" "}
              <strong className="text-slate-800">aprendes a usarlo.</strong>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link
                href={`https://wa.me/${siteConfig.whatsapp}?text=Hola, me interesa agendar una clase muestra gratuita`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-blue-200 hover:shadow-xl"
              >
                Agenda tu Clase Muestra
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/cursos/ingles"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-semibold rounded-xl border border-slate-200 transition-all"
              >
                <Play className="w-4 h-4 text-blue-600 fill-blue-600" />
                Ver Cursos
              </Link>
            </div>

            {/* Social Proof Pills */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {["bg-blue-500", "bg-amber-500", "bg-green-500", "bg-purple-500"].map(
                    (color, i) => (
                      <div
                        key={i}
                        className={`w-8 h-8 rounded-full ${color} border-2 border-white flex items-center justify-center text-white text-xs font-bold`}
                      >
                        {["M", "J", "L", "E"][i]}
                      </div>
                    )
                  )}
                </div>
                <div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-500">+500 estudiantes felices</p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-slate-100 shadow-sm">
                <Award className="w-4 h-4 text-amber-500" />
                <span className="text-xs font-medium text-slate-700">
                  Certificaciones Cambridge
                </span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-slate-100 shadow-sm">
                <Users className="w-4 h-4 text-blue-500" />
                <span className="text-xs font-medium text-slate-700">
                  Grupos máx. 8 personas
                </span>
              </div>
            </div>
          </div>

          {/* Right — Visual Card Stack */}
          <div className="relative lg:flex justify-center hidden">
            {/* Main card */}
            <div className="relative w-full max-w-md">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-slate-100">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm text-slate-500">Próxima clase</p>
                    <p className="font-bold text-slate-900">Inglés Intermedio B1</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-2xl">
                    🇺🇸
                  </div>
                </div>

                {/* Progress */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-slate-600 mb-2">
                    <span>Progreso del nivel</span>
                    <span className="font-semibold text-blue-700">68%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-blue-600 to-blue-400 h-2.5 rounded-full"
                      style={{ width: "68%" }}
                    />
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: "Lecciones", value: "24" },
                    { label: "Horas", value: "36" },
                    { label: "Nivel", value: "B1" },
                  ].map((item) => (
                    <div key={item.label} className="bg-slate-50 rounded-xl p-3 text-center">
                      <p className="font-bold text-slate-900 text-lg">{item.value}</p>
                      <p className="text-xs text-slate-500">{item.label}</p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={`https://wa.me/${siteConfig.whatsapp}?text=Hola, quiero agendar mi clase muestra`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-xl transition-all"
                >
                  Reserva tu lugar gratis
                </Link>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-amber-400 text-white font-bold text-sm px-3 py-1.5 rounded-full shadow-lg">
                ¡Gratis!
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3 border border-slate-100 flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  🏆
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Cambridge Prep</p>
                  <p className="text-xs text-slate-500">Certificación oficial</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 60L48 50C96 40 192 20 288 15C384 10 480 20 576 25C672 30 768 30 864 25C960 20 1056 10 1152 10C1248 10 1344 20 1392 25L1440 30V60H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
