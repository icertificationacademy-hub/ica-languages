import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { MessageCircle, BookOpen, Mic, Users, Brain, Trophy, Star, GraduationCap, Smile } from "lucide-react";
import { siteConfig } from "@/data/site";
import { getTranslations, setRequestLocale } from 'next-intl/server';

export const metadata: Metadata = { title: "Inglés para Niños | ICA Languages" };

export default async function InglesNinosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("cursoNinos");

  const features = [
    { title: t("w1Title"), description: t("w1Desc"), image: "/images/nino2.jpeg", color: "from-green-400 to-emerald-500", bg: "bg-green-50", border: "border-green-200", imgPosition: "object-center" },
    { title: t("w2Title"), description: t("w2Desc"), image: "/images/niño3.png", color: "from-pink-400 to-rose-500", bg: "bg-pink-50", border: "border-pink-200", imgPosition: "object-[center_10%]" },
    { title: t("w3Title"), description: t("w3Desc"), image: "/images/niño4.jpeg", color: "from-violet-400 to-purple-500", bg: "bg-violet-50", border: "border-violet-200", imgPosition: "object-[center_80%]" },
  ];

  const audience = [
    { icon: <Smile className="w-8 h-8" />, title: t("a1Title"), description: t("a1Desc"), color: "text-amber-600", bg: "bg-amber-100", textColor: "text-amber-700", bgCard: "bg-yellow-50/50", border: "border-yellow-100" },
    { icon: <GraduationCap className="w-8 h-8" />, title: t("a2Title"), description: t("a2Desc"), color: "text-sky-600", bg: "bg-sky-100", textColor: "text-sky-700", bgCard: "bg-sky-50/50", border: "border-sky-100" },
    { icon: <Mic className="w-8 h-8" />, title: t("a3Title"), description: t("a3Desc"), color: "text-emerald-600", bg: "bg-emerald-100", textColor: "text-emerald-700", bgCard: "bg-emerald-50/50", border: "border-emerald-100" },
  ];

  const benefits = [
    { icon: <MessageCircle className="w-8 h-8" />, title: t("b1Title"), description: t("b1Desc"), color: "text-green-600", bg: "bg-green-100" },
    { icon: <Star className="w-8 h-8" />, title: t("b2Title"), description: t("b2Desc"), color: "text-amber-600", bg: "bg-amber-100" },
    { icon: <Trophy className="w-8 h-8" />, title: t("b3Title"), description: t("b3Desc"), color: "text-violet-600", bg: "bg-violet-100" },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white pt-28 pb-0">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-green-200 rounded-full opacity-30 blur-3xl pointer-events-none" />
        <div className="absolute top-10 right-0 w-96 h-96 bg-yellow-200 rounded-full opacity-30 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center pb-16">
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
                <BookOpen className="w-4 h-4" /> {t("badge")}
              </span>
              <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 leading-tight mb-5" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                {t("title1")}{" "}
                <span className="text-green-500 relative">
                  {t("title2")}
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                    <path d="M2 8 Q75 2 150 8 Q225 14 298 8" stroke="#86efac" strokeWidth="4" strokeLinecap="round" fill="none"/>
                  </svg>
                </span>{" "}
                {t("title3")}
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg">{t("description")}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href={`https://wa.me/${siteConfig.whatsapp}?text=Hola, me interesa el curso de Inglés para Niños`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-2xl shadow-lg shadow-green-200 transition-all text-base">
                  <MessageCircle className="w-5 h-5" />{t("btnSchedule")}
                </Link>
                <Link href={`https://wa.me/${siteConfig.whatsapp}?text=Hola, quiero más información sobre el curso de Inglés para Niños`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-2xl border-2 border-slate-200 transition-all text-base">
                  {t("btnInfo")}
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-[340px] h-[420px] sm:w-[400px] sm:h-[480px]">
                <div className="absolute inset-0 bg-gradient-to-br from-green-300 to-emerald-400 rounded-[2.5rem] rotate-3" />
                <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden">
                  <Image src="/images/niño1.jpeg" alt="Niños aprendiendo inglés" fill className="object-cover object-[center_10%]" priority />
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg viewBox="0 0 1440 60" className="w-full block" preserveAspectRatio="none" style={{height: 60}}>
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f0fdf4"/>
        </svg>
      </section>

      {/* WHY US */}
      <section className="bg-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-green-200 text-green-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">{t("whyLabel")}</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{t("whyTitle")}</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-base">{t("whySubtitle")}</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className={`rounded-3xl overflow-hidden border ${f.border} ${f.bg} flex flex-col`}>
                <div className="relative h-52 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${f.color} opacity-20`} />
                  <Image src={f.image} alt={f.title} fill className={`object-cover ${f.imgPosition}`} />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIENCE + BENEFITS */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-yellow-100 text-yellow-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">{t("audienceLabel")}</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{t("audienceTitle")}</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {audience.map((a) => (
              <div key={a.title} className={`rounded-3xl border-2 ${a.border} ${a.bgCard} p-8 flex flex-col items-center text-center`}>
                <div className={`w-16 h-16 ${a.bg} ${a.color} rounded-2xl flex items-center justify-center mb-5 shadow-sm`}>{a.icon}</div>
                <h3 className={`text-lg font-bold mb-2 ${a.textColor}`}>{a.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{a.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-10">
            <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">{t("benefitsLabel")}</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{t("benefitsTitle")}</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-3xl border-2 border-slate-100 bg-slate-50 p-8 flex flex-col items-center text-center">
                <div className={`w-14 h-14 ${b.bg} ${b.color} rounded-2xl flex items-center justify-center mb-5`}>{b.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{b.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
