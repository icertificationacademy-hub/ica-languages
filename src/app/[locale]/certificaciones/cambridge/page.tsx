import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { MessageCircle, Plane, TrendingUp, Award, FileCheck, GraduationCap, Briefcase, Globe } from "lucide-react";
import { siteConfig } from "@/data/site";
import { getTranslations, setRequestLocale } from 'next-intl/server';

export const metadata: Metadata = { title: "Certificaciones Cambridge | ICA Languages" };

const certificationsBase = [
  { code: "KET",   nameKey: "ketName",   level: "A2",      descKey: "ketDesc",   image: "/images/certifi2.png",      levelColor: "bg-slate-100 text-slate-600",  border: "border-slate-200",  accent: "bg-slate-50" },
  { code: "PET",   nameKey: "petName",   level: "B1",      descKey: "petDesc",   image: "/images/certifi3.png",      levelColor: "bg-blue-100 text-blue-700",    border: "border-blue-200",   accent: "bg-blue-50" },
  { code: "FCE",   nameKey: "fceName",   level: "B2",      descKey: "fceDesc",   image: "/images/certifi4.png",      levelColor: "bg-indigo-100 text-indigo-700",border: "border-indigo-200", accent: "bg-indigo-50" },
  { code: "CAE",   nameKey: "caeName",   level: "C1",      descKey: "caeDesc",   image: "/images/certifi5.png",      levelColor: "bg-purple-100 text-purple-700",border: "border-purple-200", accent: "bg-purple-50" },
  { code: "TKT",   nameKey: "tktName",   level: "Doc.",    descKey: "tktDesc",   image: "/images/certifi1.png",      levelColor: "bg-emerald-100 text-emerald-700",border:"border-emerald-200",accent: "bg-emerald-50" },
  { code: "IELTS", nameKey: "ieltsName", level: "A2 – C2", descKey: "ieltsDesc", image: "/images/certificaciones.png",levelColor: "bg-amber-100 text-amber-700",border: "border-amber-200",  accent: "bg-amber-50" },
];

export default async function CambridgePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("certCambridge");

  const certifications = certificationsBase.map((c) => ({
    ...c,
    name: t(c.nameKey as Parameters<typeof t>[0]),
    description: t(c.descKey as Parameters<typeof t>[0]),
  }));

  const whyCambridge = [
    { icon: <Plane className="w-6 h-6" />, label: t("why1"), color: "text-sky-600", bg: "bg-sky-100" },
    { icon: <TrendingUp className="w-6 h-6" />, label: t("why2"), color: "text-blue-600", bg: "bg-blue-100" },
    { icon: <Award className="w-6 h-6" />, label: t("why3"), color: "text-indigo-600", bg: "bg-indigo-100" },
    { icon: <FileCheck className="w-6 h-6" />, label: t("why4"), color: "text-violet-600", bg: "bg-violet-100" },
    { icon: <GraduationCap className="w-6 h-6" />, label: t("why5"), color: "text-blue-700", bg: "bg-blue-100" },
    { icon: <Briefcase className="w-6 h-6" />, label: t("why6"), color: "text-sky-700", bg: "bg-sky-100" },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-white pt-28 pb-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full opacity-40 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 bg-sky-100 rounded-full opacity-40 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center pb-20">
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
                <GraduationCap className="w-4 h-4" /> {t("badge")}
              </span>
              <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 leading-tight mb-5" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                {t("title1")}{" "}
                <span className="relative text-blue-600">
                  {t("title2")}
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                    <path d="M2 8 Q50 2 100 8 Q150 14 198 8" stroke="#93c5fd" strokeWidth="4" strokeLinecap="round" fill="none"/>
                  </svg>
                </span>{" "}
                {t("title3")}
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg">{t("description")}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href={`https://wa.me/${siteConfig.whatsapp}?text=Hola, quiero información sobre las certificaciones Cambridge`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg shadow-blue-200 transition-all text-base">
                  <MessageCircle className="w-5 h-5" />{t("btnAdvisory")}
                </Link>
                <Link href={`https://wa.me/${siteConfig.whatsapp}?text=Hola, quiero más información sobre certificaciones`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-2xl border-2 border-slate-200 transition-all text-base">
                  {t("btnInfo")}
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              {/* Cambridge Certificate Card */}
              <div className="relative w-[320px] sm:w-[380px]">
                <div className="relative bg-white rounded-[2rem] shadow-2xl shadow-blue-200 overflow-hidden border border-blue-100 -rotate-1">
                  {/* Header azul Cambridge */}
                  <div className="bg-gradient-to-r from-blue-700 to-blue-900 px-6 py-5 flex items-center justify-between">
                    <div>
                      <p className="text-blue-200 text-xs font-semibold uppercase tracking-widest mb-1">University of Cambridge</p>
                      <p className="text-white text-lg font-extrabold leading-tight">English Language<br/>Assessment</p>
                    </div>
                    <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Niveles */}
                  <div className="px-6 py-5">
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-3">{t("certsAvailable")}</p>
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {[
                        { code: "KET", level: "A2", color: "bg-slate-100 text-slate-700" },
                        { code: "PET", level: "B1", color: "bg-blue-100 text-blue-700" },
                        { code: "FCE", level: "B2", color: "bg-indigo-100 text-indigo-700" },
                        { code: "CAE", level: "C1", color: "bg-purple-100 text-purple-700" },
                        { code: "TKT", level: "Doc.", color: "bg-emerald-100 text-emerald-700" },
                        { code: "IELTS", level: "A2–C2", color: "bg-amber-100 text-amber-700" },
                      ].map((c) => (
                        <div key={c.code} className={`rounded-xl p-2.5 text-center ${c.color}`}>
                          <p className="text-sm font-extrabold">{c.code}</p>
                          <p className="text-[10px] font-medium opacity-70">{c.level}</p>
                        </div>
                      ))}
                    </div>

                    {/* Barra de reconocimiento */}
                    <div className="bg-blue-50 rounded-xl px-4 py-3 flex items-center gap-3 border border-blue-100">
                      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
                        <Globe className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500">{t("recognizedIn")}</p>
                        <p className="text-sm font-bold text-slate-800">{t("countries130")}</p>
                      </div>
                    </div>
                  </div>

                  {/* Footer ICA */}
                  <div className="bg-slate-50 px-6 py-3 flex items-center justify-between border-t border-slate-100">
                    <p className="text-xs text-slate-400 font-medium">{t("officialPrep")}</p>
                    <Image src="/images/logo.png" alt="ICA Languages" width={80} height={20} className="h-5 w-auto object-contain opacity-60" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg viewBox="0 0 1440 60" className="w-full block" preserveAspectRatio="none" style={{height: 60}}>
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#eff6ff"/>
        </svg>
      </section>

      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-blue-200 text-blue-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">{t("whyLabel")}</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{t("whyTitle")}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyCambridge.map((item) => (
              <div key={item.label} className="bg-white rounded-2xl border border-blue-100 p-6 flex items-start gap-4 shadow-sm">
                <div className={`w-12 h-12 ${item.bg} ${item.color} rounded-xl flex items-center justify-center shrink-0`}>{item.icon}</div>
                <p className="text-slate-700 text-sm font-medium leading-relaxed pt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">{t("certsLabel")}</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{t("certsTitle")}</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-base">{t("certsSubtitle")}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {certifications.map((cert) => (
              <div key={cert.code} className={`rounded-3xl border-2 ${cert.border} ${cert.accent} overflow-hidden flex flex-col`}>
                <div className="relative h-52 overflow-hidden bg-white flex items-center justify-center">
                  {cert.code === "IELTS" ? (
                    <div className="w-full h-full bg-gradient-to-br from-amber-500 to-orange-600 flex flex-col items-center justify-center text-white px-6">
                      <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center border border-white/20 mb-2.5 shadow-inner">
                        <FileCheck className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-2xl font-black tracking-[0.15em]">IELTS</span>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-amber-100 mt-0.5">Official Test Preparation</span>
                    </div>
                  ) : (
                    <Image src={cert.image} alt={cert.name} fill className="object-contain p-4" />
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg font-extrabold text-slate-800">{cert.code}</span>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${cert.levelColor}`}>{t("levelPrefix")} {cert.level}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-3">{cert.name}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed flex-1">{cert.description}</p>
                  <Link href={`https://wa.me/${siteConfig.whatsapp}?text=Hola, quiero información sobre la certificación ${cert.code}`} target="_blank" rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl transition-all">
                    <MessageCircle className="w-4 h-4" />{t("moreInfo")}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
