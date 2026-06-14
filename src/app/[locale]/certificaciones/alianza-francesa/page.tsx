import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { MessageCircle, Globe, FileCheck, TrendingUp, Clock, Award } from "lucide-react";
import { siteConfig } from "@/data/site";
import { getTranslations, setRequestLocale } from 'next-intl/server';

export const metadata: Metadata = { title: "Alianza Francesa – DELF y DALF | ICA Languages" };

const delfBase = [
  { code: "DELF A1", level: "A1", descKey: "delfA1Desc", border: "border-slate-200",  accent: "bg-slate-50",  badge: "bg-slate-100 text-slate-700" },
  { code: "DELF A2", level: "A2", descKey: "delfA2Desc", border: "border-blue-200",   accent: "bg-blue-50",   badge: "bg-blue-100 text-blue-700" },
  { code: "DELF B1", level: "B1", descKey: "delfB1Desc", border: "border-indigo-200", accent: "bg-indigo-50", badge: "bg-indigo-100 text-indigo-700" },
  { code: "DELF B2", level: "B2", descKey: "delfB2Desc", border: "border-violet-200", accent: "bg-violet-50", badge: "bg-violet-100 text-violet-700" },
];

const dalfBase = [
  { code: "DALF C1", level: "C1", descKey: "dalfC1Desc", border: "border-purple-200",  accent: "bg-purple-50",  badge: "bg-purple-100 text-purple-700" },
  { code: "DALF C2", level: "C2", descKey: "dalfC2Desc", border: "border-fuchsia-200", accent: "bg-fuchsia-50", badge: "bg-fuchsia-100 text-fuchsia-700" },
];

export default async function AlianzaFrancesaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("certAlianza");

  const delfLevels = delfBase.map((d) => ({ ...d, description: t(d.descKey as Parameters<typeof t>[0]) }));
  const dalfLevels = dalfBase.map((d) => ({ ...d, description: t(d.descKey as Parameters<typeof t>[0]) }));

  const whyCertify = [
    { icon: <Globe className="w-6 h-6" />, label: t("why1"), color: "text-purple-600", bg: "bg-purple-100" },
    { icon: <FileCheck className="w-6 h-6" />, label: t("why2"), color: "text-violet-600", bg: "bg-violet-100" },
    { icon: <TrendingUp className="w-6 h-6" />, label: t("why3"), color: "text-indigo-600", bg: "bg-indigo-100" },
    { icon: <Clock className="w-6 h-6" />, label: t("why4"), color: "text-purple-700", bg: "bg-purple-100" },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-white pt-28 pb-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-100 rounded-full opacity-40 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 bg-violet-100 rounded-full opacity-40 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center pb-20">
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
                <Award className="w-4 h-4" /> {t("badge")}
              </span>
              <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 leading-tight mb-5" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                {t("title1")}{" "}
                <span className="relative text-purple-600">
                  {t("title2")}
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                    <path d="M2 8 Q50 2 100 8 Q150 14 198 8" stroke="#d8b4fe" strokeWidth="4" strokeLinecap="round" fill="none"/>
                  </svg>
                </span>
              </h1>
              <p className="text-xl font-semibold text-slate-700 mb-4">{t("mcerTitle")}</p>
              <p className="text-base text-slate-500 leading-relaxed mb-8 max-w-lg">{t("description")}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href={`https://wa.me/${siteConfig.whatsapp}?text=Hola, quiero información sobre las certificaciones DELF/DALF`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-2xl shadow-lg shadow-purple-200 transition-all text-base">
                  <MessageCircle className="w-5 h-5" />{t("btnRequest")}
                </Link>
                <Link href={`https://wa.me/${siteConfig.whatsapp}?text=Hola, quiero asesoría sobre la certificación DELF o DALF`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-2xl border-2 border-slate-200 transition-all text-base">
                  {t("btnAdvisory")}
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-[300px] h-[370px] sm:w-[360px] sm:h-[430px]">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-300 to-violet-500 rounded-[2.5rem] rotate-2" />
                <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden">
                  <Image src="/images/certifi1.png" alt="Certificación DELF Alianza Francesa ICA Languages" fill className="object-cover" priority />
                </div>
                <div className="absolute -bottom-5 -left-6 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center text-xl">🇫🇷</div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">{t("certLabel")}</p>
                    <p className="text-sm font-bold text-slate-800">{t("certValue")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg viewBox="0 0 1440 60" className="w-full block" preserveAspectRatio="none" style={{height: 60}}>
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#faf5ff"/>
        </svg>
      </section>

      <section className="bg-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-purple-200 text-purple-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">{t("whyLabel")}</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{t("whyTitle")}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyCertify.map((item) => (
              <div key={item.label} className="bg-white rounded-2xl border border-purple-100 p-6 flex flex-col items-center text-center gap-4 shadow-sm">
                <div className={`w-12 h-12 ${item.bg} ${item.color} rounded-xl flex items-center justify-center`}>{item.icon}</div>
                <p className="text-slate-700 text-sm font-medium leading-relaxed">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">{t("delfLabel")}</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{t("delfTitle")}</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-sm leading-relaxed">{t("delfDesc")}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {delfLevels.map((d) => (
              <div key={d.code} className={`rounded-3xl border-2 ${d.border} ${d.accent} p-7`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl font-extrabold text-slate-800">{d.code}</span>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${d.badge}`}>{t("levelPrefix")} {d.level}</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-purple-200 text-purple-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">{t("dalfLabel")}</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{t("dalfTitle")}</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-sm leading-relaxed">{t("dalfDesc")}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {dalfLevels.map((d) => (
              <div key={d.code} className={`rounded-3xl border-2 ${d.border} bg-white p-8 flex flex-col gap-4 shadow-sm`}>
                <div className="flex items-center gap-3">
                  <span className="text-xl font-extrabold text-slate-800">{d.code}</span>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${d.badge}`}>{t("levelPrefix")} {d.level}</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{d.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href={`https://wa.me/${siteConfig.whatsapp}?text=Hola, quiero información sobre las certificaciones DELF/DALF`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold text-base rounded-2xl shadow-lg shadow-purple-200 transition-all">
              <MessageCircle className="w-5 h-5" />{t("ctaBtn")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
