import type { Metadata } from "next";
import Image from "next/image";
import { Award, Calendar, Lightbulb, CheckCircle, ArrowRight, MessageCircle, Star, Handshake, Globe, Shield, School, MapPin, Target, Compass } from "lucide-react";
import { siteConfig } from "@/data/site";
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from "@/i18n/navigation";

export const metadata: Metadata = {
  title: "Quiénes Somos | ICA Languages",
  description:
    "Conoce a ICA Languages, el centro de idiomas en Apizaco, Tlaxcala. Misión, visión, valores y equipo docente.",
};

const teamBase = [
  { name: "Ms. Nadia",     roleKey: "roleEnglish",       image: "/images/maestranadia.jpeg" },
  { name: "Ms. Karla",     roleKey: "roleEnglishJapFr",  image: "/images/maestrakarla.png" },
  { name: "Ms. Monserrat", roleKey: "roleEnglish",       image: "/images/maestramonserrat.png" },
  { name: "Mr. Emmanuel",  roleKey: "roleEnglishIt",     image: "/images/msestroemmanuel.png" },
  { name: "Ms. Yerith",    roleKey: "roleFrIt",          image: "/images/maestraYerith.png" },
  { name: "Mr. Raúl",      roleKey: "roleEnglish",       image: "/images/maestroraul.png" },
  { name: "Ms. Mariana",   roleKey: "roleEnglish",       image: "/images/maestramariana.png" },
  { name: "Ms. Katerine",  roleKey: "roleEnglish",       image: "/images/maestrakaterin.png" },
];

export default async function NosotrosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("nosotros");

  const team = teamBase.map((m) => ({ ...m, role: t(m.roleKey as Parameters<typeof t>[0]) }));

  const whyUs = [
    { icon: <Award className="w-6 h-6" />, label: t("whyQuality"), color: "text-teal-600", bg: "bg-teal-100" },
    { icon: <CheckCircle className="w-6 h-6" />, label: t("whyCerts"), color: "text-blue-600", bg: "bg-blue-100" },
    { icon: <Calendar className="w-6 h-6" />, label: t("whyFlex"), color: "text-violet-600", bg: "bg-violet-100" },
    { icon: <Lightbulb className="w-6 h-6" />, label: t("whyMethod"), color: "text-amber-600", bg: "bg-amber-100" },
  ];

  const valores = [
    { icon: <Star className="w-5 h-5" />, color: "text-amber-500", bg: "bg-amber-50 border-amber-100", title: t("valor1Title"), desc: t("valor1Desc") },
    { icon: <Lightbulb className="w-5 h-5" />, color: "text-amber-500", bg: "bg-amber-50 border-amber-100", title: t("valor2Title"), desc: t("valor2Desc") },
    { icon: <Handshake className="w-5 h-5" />, color: "text-teal-600", bg: "bg-teal-50 border-teal-100", title: t("valor3Title"), desc: t("valor3Desc") },
    { icon: <Globe className="w-5 h-5" />, color: "text-blue-600", bg: "bg-blue-50 border-blue-100", title: t("valor4Title"), desc: t("valor4Desc") },
    { icon: <Shield className="w-5 h-5" />, color: "text-indigo-600", bg: "bg-indigo-50 border-indigo-100", title: t("valor5Title"), desc: t("valor5Desc") },
  ];

  return (
    <>
      {/* ── HERO ───────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pt-28 pb-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-100 rounded-full opacity-40 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 bg-blue-100 rounded-full opacity-40 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center pb-20">
            {/* Text */}
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-5 border border-teal-100 shadow-sm">
                <School className="w-4 h-4" /> {t("badge")}
              </span>
              <h1
                className="text-5xl sm:text-6xl font-extrabold text-slate-900 leading-tight mb-5"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                {t("title1")}{" "}
                <span className="relative text-teal-600">
                  {t("title2")}
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 140 12" fill="none">
                    <path d="M2 8 Q35 2 70 8 Q105 14 138 8" stroke="#99f6e4" strokeWidth="4" strokeLinecap="round" fill="none"/>
                  </svg>
                </span>
              </h1>
              <h2 className="text-2xl font-bold text-slate-700 mb-4">{t("subtitle")}</h2>
              <p className="text-base text-slate-500 leading-relaxed mb-8 max-w-lg">
                {t("description")}
              </p>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=Hola, quiero más información sobre ICA Languages`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-2xl shadow-lg shadow-teal-200 transition-all text-base"
              >
                <MessageCircle className="w-5 h-5" />
                {t("contactButton")}
              </a>
            </div>

            {/* Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-[340px] h-[400px] sm:w-[400px] sm:h-[460px]">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-300 to-blue-400 rounded-[2.5rem] -rotate-2" />
                <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden">
                  <Image
                    src="/images/nosotros1.png"
                    alt="Docente ICA Languages"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-5 -left-6 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-slate-100">
                  <div className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center text-white">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Apizaco</p>
                    <p className="text-sm font-bold text-slate-800">Tlaxcala</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <svg viewBox="0 0 1440 60" className="w-full block" preserveAspectRatio="none" style={{height: 60}}>
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f0fdfa"/>
        </svg>
      </section>

      {/* ── ENFOQUE ────────────────────────────────────── */}
      <section className="bg-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="inline-block bg-teal-200 text-teal-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
                {t("enfoqueLabel")}
              </span>
              <h2
                className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-5"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                {t("enfoqueTitle")}
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                {t("enfoqueText")}
              </p>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-teal-100 h-80">
              <Image
                src="/images/nosotros2.jpeg"
                alt="Clases ICA Languages"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── POR QUÉ ELEGIRNOS ─────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              {t("porQueLabel")}
            </span>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-slate-900"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              {t("porQueTitle")}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyUs.map((w) => (
              <div key={w.label} className="bg-slate-50 rounded-2xl border border-slate-100 p-7 flex flex-col items-center text-center gap-4 shadow-sm hover:shadow-md transition-all">
                <div className={`w-14 h-14 ${w.bg} ${w.color} rounded-2xl flex items-center justify-center`}>
                  {w.icon}
                </div>
                <p className="text-slate-800 font-semibold text-sm">{w.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISIÓN / VISIÓN ────────────────────────────── */}
      <section className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{backgroundImage: "radial-gradient(circle at 20% 50%, #5eead4 0%, transparent 50%), radial-gradient(circle at 80% 20%, #818cf8 0%, transparent 50%)"}} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <div className="w-12 h-12 bg-teal-500/20 text-teal-400 rounded-2xl flex items-center justify-center mb-5">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{t("misionTitle")}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{t("misionText")}</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mb-5">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{t("visionTitle")}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{t("visionText")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALORES ────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-teal-100 text-teal-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              {t("valoresLabel")}
            </span>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-slate-900"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              {t("valoresTitle")}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {valores.map((v) => (
              <div key={v.title} className="bg-slate-50 rounded-2xl border border-slate-100 p-7 flex items-start gap-4 shadow-sm hover:shadow-md transition-all duration-300">
                <div className={`w-12 h-12 ${v.bg} border rounded-xl flex items-center justify-center shrink-0 shadow-sm ${v.color}`}>
                  {v.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{v.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NUESTRO EQUIPO ─────────────────────────────── */}
      <section className="bg-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-teal-200 text-teal-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              {t("equipoLabel")}
            </span>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-slate-900"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              {t("equipoTitle")}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-3xl border border-slate-100 overflow-hidden flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="relative w-full aspect-[4/5] bg-slate-50 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="px-5 py-4">
                  <h3 className="text-base font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-xs text-teal-600 font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA join team */}
          <div className="mt-14 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white rounded-2xl border-2 border-teal-200 px-8 py-6 shadow-sm">
              <div className="text-left">
                <p className="font-bold text-slate-900">{t("ctaJoin")}</p>
                <p className="text-slate-500 text-sm">{t("ctaJoinSub")}</p>
              </div>
              <Link
                href="/nosotros/unete-al-equipo"
                className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl transition-all shrink-0"
              >
                {t("ctaJoinBtn")} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
