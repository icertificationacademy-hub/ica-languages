import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { MessageCircle, Users, Monitor, MapPin, CheckCircle, Award, Globe } from "lucide-react";
import { siteConfig } from "@/data/site";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = { title: "Curso de Francés | ICA Languages" };

export default async function FrancesPage() {
  const t = await getTranslations("cursoFrances");
  const features = [
    { icon: <Award className="w-5 h-5" />, label: t("f1") },
    { icon: <Users className="w-5 h-5" />, label: t("f2") },
    { icon: <MapPin className="w-5 h-5" />, label: t("f3") },
    { icon: <Monitor className="w-5 h-5" />, label: t("f4") },
  ];
  const whyUs = [t("why1"), t("why2"), t("why3"), t("why4")];

  return (
    <>
      <section className="relative overflow-hidden bg-white pt-28 pb-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-100 rounded-full opacity-40 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 bg-violet-100 rounded-full opacity-40 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center pb-20">
            <div className="relative z-10 order-2 lg:order-1">
              <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
                <Globe className="w-4 h-4" /> {t("badge")}
              </span>
              <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 leading-tight mb-5" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                {t("title1")}{" "}
                <span className="relative text-purple-600">
                  {t("title2")}
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 220 12" fill="none">
                    <path d="M2 8 Q55 2 110 8 Q165 14 218 8" stroke="#d8b4fe" strokeWidth="4" strokeLinecap="round" fill="none"/>
                  </svg>
                </span>{" "}
                {t("title3")}
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg">{t("description")}</p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href={`https://wa.me/${siteConfig.whatsapp}?text=Hola, me interesa el curso de Francés`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-2xl shadow-lg shadow-purple-200 transition-all text-base">
                  <MessageCircle className="w-5 h-5" />{t("btnSchedule")}
                </Link>
                <Link href={`https://wa.me/${siteConfig.whatsapp}?text=Hola, quiero más información sobre el curso de Francés`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-2xl border-2 border-slate-200 transition-all text-base">
                  {t("btnInfo")}
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative w-[300px] h-[380px] sm:w-[360px] sm:h-[440px]">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-300 to-violet-500 rounded-[2.5rem] rotate-2" />
                <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden">
                  <Image src="/images/certifi1.png" alt="Certificación DELF ICA Languages" fill className="object-cover" priority />
                </div>
                <div className="absolute -bottom-5 -left-6 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center text-white"><Award className="w-5 h-5" /></div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">{t("certifyWith")}</p>
                    <p className="text-sm font-bold text-slate-800">DELF · DALF</p>
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

      <section className="bg-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-purple-100">
              <Image src="/images/frances.png" alt="Clases de francés en línea ICA Languages" width={600} height={400} className="object-cover object-center w-full h-72 sm:h-80" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur rounded-xl px-3 py-2 flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-bold text-slate-700">{t("liveClass")}</span>
              </div>
            </div>
            <div>
              <span className="inline-block bg-purple-200 text-purple-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">{t("diffLabel")}</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-8" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{t("diffTitle")}</h2>
              <div className="space-y-4">
                {whyUs.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-purple-100">
                    <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center shrink-0 font-bold text-sm">{i + 1}</div>
                    <p className="text-slate-600 text-sm leading-relaxed pt-0.5">{item}</p>
                  </div>
                ))}
              </div>
              <Link href={`https://wa.me/${siteConfig.whatsapp}?text=Hola, me interesa el curso de Francés`} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 mt-8 px-7 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-2xl shadow-lg shadow-purple-200 transition-all">
                <MessageCircle className="w-5 h-5" />{t("enrollBtn")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
