import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { MessageCircle, CheckCircle, Clock, TrendingUp, DollarSign, Globe, Award, BookOpen, Zap } from "lucide-react";
import { siteConfig } from "@/data/site";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = { title: "Certificación APTIS | ICA Languages" };

export default async function AptisPage() {
  const t = await getTranslations("certAptis");

  const reasons = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: t("r1Title"),
      desc: t("r1Desc"),
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: t("r2Title"),
      desc: t("r2Desc"),
      color: "text-amber-600",
      bg: "bg-amber-100",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: t("r3Title"),
      desc: t("r3Desc"),
      color: "text-emerald-600",
      bg: "bg-emerald-100",
    },
  ];

  const levels = [
    { level: "A1", label: "Básico", color: "bg-slate-100 text-slate-700" },
    { level: "A2", label: "Elemental", color: "bg-blue-100 text-blue-700" },
    { level: "B1", label: "Intermedio", color: "bg-indigo-100 text-indigo-700" },
    { level: "B2", label: "Intermedio Alto", color: "bg-violet-100 text-violet-700" },
    { level: "C1", label: "Avanzado", color: "bg-purple-100 text-purple-700" },
    { level: "C2", label: "Maestría", color: "bg-rose-100 text-rose-700" },
  ];

  const benefits = [
    t("b1"),
    t("b2"),
    t("b3"),
    t("b4"),
    t("b5"),
    t("b6"),
  ];

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-white pt-28 pb-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-50 rounded-full opacity-60 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 bg-orange-50 rounded-full opacity-60 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center pb-20">
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 bg-red-100 text-red-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
                <Award className="w-4 h-4" /> {t("badge")}
              </span>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-5"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                {t("title1")}{" "}
                <span className="relative text-red-600">
                  {t("title2")}
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                    <path d="M2 8 Q50 2 100 8 Q150 14 198 8" stroke="#fca5a5" strokeWidth="4" strokeLinecap="round" fill="none" />
                  </svg>
                </span>{" "}
                {t("title3")}
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg">{t("description")}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={`https://wa.me/${siteConfig.whatsapp}?text=Hola, quiero información sobre la certificación APTIS` as never}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-2xl shadow-lg shadow-red-200 transition-all text-base"
                >
                  <MessageCircle className="w-5 h-5" /> {t("btnAdvisory")}
                </Link>
                <Link
                  href={`https://wa.me/${siteConfig.whatsapp}?text=Hola, quiero más información sobre APTIS` as never}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-2xl border-2 border-slate-200 transition-all text-base"
                >
                  {t("btnInfo")}
                </Link>
              </div>
            </div>

            {/* Certificate card */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-[300px] sm:w-[360px]">
                <div className="relative bg-white rounded-[2rem] shadow-2xl shadow-red-100 overflow-hidden border border-red-100 rotate-1">
                  <div className="bg-gradient-to-r from-red-600 to-rose-700 px-6 py-5 flex items-center justify-between">
                    <div>
                      <p className="text-red-200 text-xs font-semibold uppercase tracking-widest mb-1">British Council</p>
                      <p className="text-white text-lg font-extrabold leading-tight">APTIS<br />Assessment</p>
                    </div>
                    <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="px-6 py-5">
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-3">Niveles disponibles</p>
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {levels.map((l) => (
                        <div key={l.level} className={`rounded-xl p-2.5 text-center ${l.color}`}>
                          <p className="text-sm font-extrabold">{l.level}</p>
                          <p className="text-[9px] font-medium opacity-70 leading-tight mt-0.5">{l.label}</p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-red-50 rounded-xl px-4 py-3 flex items-center gap-3 border border-red-100">
                      <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center shrink-0">
                        <Globe className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500">Reconocida en</p>
                        <p className="text-sm font-bold text-slate-800">+100 países</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-50 px-6 py-3 flex items-center justify-between border-t border-slate-100">
                    <p className="text-xs text-slate-400 font-medium">Preparación oficial</p>
                    <span className="text-xs font-bold text-red-700">ICA Languages</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg viewBox="0 0 1440 60" className="w-full block" preserveAspectRatio="none" style={{ height: 60 }}>
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#fff1f2" />
        </svg>
      </section>

      {/* ── ¿POR QUÉ APTIS? ── */}
      <section className="bg-red-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-red-200 text-red-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">{t("whyLabel")}</span>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-slate-900"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              {t("whyTitle")}
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {reasons.map((r, i) => (
              <div key={i} className="bg-white rounded-2xl border border-red-100 p-7 flex flex-col items-start gap-4 shadow-sm">
                <div className={`w-12 h-12 ${r.bg} ${r.color} rounded-xl flex items-center justify-center shrink-0`}>
                  {r.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-800 mb-1">{r.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFICIOS ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">{t("benefitsLabel")}</span>
              <h2
                className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-8"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                {t("benefitsTitle")}
              </h2>
              <ul className="space-y-4">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <p className="text-slate-700 text-sm leading-relaxed">{b}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-red-600 to-rose-700 rounded-3xl p-8 text-white shadow-xl shadow-red-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold">{t("aboutTitle")}</h3>
              </div>
              <p className="text-white/85 text-sm leading-relaxed mb-6">{t("aboutText")}</p>
              <div className="grid grid-cols-2 gap-3">
                {levels.map((l) => (
                  <div key={l.level} className="bg-white/15 rounded-xl px-3 py-2.5 flex items-center gap-2">
                    <span className="text-sm font-extrabold">{l.level}</span>
                    <span className="text-[11px] text-white/70">{l.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-white mb-4"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            {t("ctaTitle")}
          </h2>
          <p className="text-slate-400 mb-8 text-lg">{t("ctaSubtitle")}</p>
          <Link
            href={`https://wa.me/${siteConfig.whatsapp}?text=Hola, quiero prepararme para la certificación APTIS en ICA Languages` as never}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-bold rounded-2xl shadow-lg transition-all text-base"
          >
            <MessageCircle className="w-5 h-5" /> {t("ctaBtn")}
          </Link>
        </div>
      </section>
    </>
  );
}
