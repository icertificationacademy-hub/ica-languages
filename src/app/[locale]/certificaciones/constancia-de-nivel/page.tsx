import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { MessageCircle, GraduationCap, Briefcase, FileText, Globe } from "lucide-react";
import { siteConfig } from "@/data/site";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = { title: "Constancia de Nivel | ICA Languages" };

export default async function ConstanciaNivelPage() {
  const t = await getTranslations("certConstancia");

  const usos = [
    { icon: <GraduationCap className="w-6 h-6" />, label: t("u1"), color: "text-cyan-600", bg: "bg-cyan-100" },
    { icon: <FileText className="w-6 h-6" />, label: t("u2"), color: "text-teal-600", bg: "bg-teal-100" },
    { icon: <Briefcase className="w-6 h-6" />, label: t("u3"), color: "text-sky-600", bg: "bg-sky-100" },
    { icon: <Globe className="w-6 h-6" />, label: t("u4"), color: "text-cyan-700", bg: "bg-cyan-100" },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-white pt-28 pb-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-100 rounded-full opacity-40 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 bg-teal-100 rounded-full opacity-40 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center pb-20">
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
                <FileText className="w-4 h-4" /> {t("badge")}
              </span>
              <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 leading-tight mb-5" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                {t("title1")}{" "}
                <span className="relative text-cyan-600">
                  {t("title2")}
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                    <path d="M2 8 Q50 2 100 8 Q150 14 198 8" stroke="#a5f3fc" strokeWidth="4" strokeLinecap="round" fill="none"/>
                  </svg>
                </span>{" "}
                {t("title3")}
              </h1>
              <p className="text-xl font-semibold text-slate-700 mb-4">{t("mcerTitle")}</p>
              <p className="text-base text-slate-500 leading-relaxed mb-8 max-w-lg">{t("description")}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href={`https://wa.me/${siteConfig.whatsapp}?text=Hola, quiero solicitar una Constancia de Nivel de Inglés`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-2xl shadow-lg shadow-cyan-200 transition-all text-base">
                  <MessageCircle className="w-5 h-5" />{t("btnRequest")}
                </Link>
                <Link href={`https://wa.me/${siteConfig.whatsapp}?text=Hola, quiero más información sobre las constancias de nivel`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-2xl border-2 border-slate-200 transition-all text-base">
                  {t("btnInfo")}
                </Link>
              </div>
            </div>
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-cyan-600 to-teal-700 rounded-3xl p-8 text-white shadow-2xl shadow-cyan-200">
                <h3 className="text-lg font-bold mb-6">{t("typesLabel")}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {usos.map((u) => (
                    <div key={u.label} className="bg-white/10 rounded-2xl p-4 flex flex-col items-start gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-white">{u.icon}</div>
                      <p className="text-white/90 text-sm font-medium leading-tight">{u.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg viewBox="0 0 1440 60" className="w-full block" preserveAspectRatio="none" style={{height: 60}}>
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#ecfeff"/>
        </svg>
      </section>

      <section className="bg-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-cyan-200 text-cyan-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">{t("typesLabel")}</span>
          </div>

          <div className="bg-white rounded-3xl border-2 border-cyan-200 overflow-hidden shadow-sm mb-8">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-72 lg:h-auto overflow-hidden bg-slate-100">
                <Image src="/images/constanciaCENNI.jpeg" alt="Constancia CENNI" fill className="object-contain p-6" />
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <span className="inline-block bg-cyan-100 text-cyan-700 text-xs font-bold px-3 py-1.5 rounded-full mb-4 w-fit">{t("cenniLabel")}</span>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-4" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{t("cenniTitle")}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{t("cenniDesc")}</p>
                <Link href={`https://wa.me/${siteConfig.whatsapp}?text=Hola, quiero información sobre la Constancia con validez CENNI`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-xl transition-all w-fit text-sm">
                  <MessageCircle className="w-4 h-4" />{t("cenniBtn")}
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl border-2 border-teal-200 overflow-hidden shadow-sm">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-10 flex flex-col justify-center order-2 lg:order-1">
                <span className="inline-block bg-teal-100 text-teal-700 text-xs font-bold px-3 py-1.5 rounded-full mb-4 w-fit">{t("tituloLabel")}</span>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-4" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{t("tituloTitle")}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{t("tituloDesc")}</p>
                <Link href={`https://wa.me/${siteConfig.whatsapp}?text=Hola, quiero información sobre la Constancia de Nivel para titulación`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl transition-all w-fit text-sm">
                  <MessageCircle className="w-4 h-4" />{t("tituloBtn")}
                </Link>
              </div>
              <div className="relative h-72 lg:h-auto overflow-hidden bg-slate-100 order-1 lg:order-2">
                <Image src="/images/Constanciatitulación.jpeg" alt="Constancia de nivel para titulación" fill className="object-contain p-6" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
