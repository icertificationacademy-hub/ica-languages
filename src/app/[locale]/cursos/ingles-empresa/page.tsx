import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { MessageCircle, Monitor, MapPin, Clock, Users, Calendar, Award, Handshake, Building2, Globe, UserCheck, Plane, Briefcase } from "lucide-react";
import { siteConfig } from "@/data/site";
import { getTranslations, setRequestLocale } from 'next-intl/server';

export const metadata: Metadata = { title: "Inglés para Empresa | ICA Languages" };

export default async function InglesEmpresaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("cursoEmpresa");

  const whyUs = [
    { icon: <Monitor className="w-6 h-6" />, label: t("w1"), color: "text-teal-600", bg: "bg-teal-100" },
    { icon: <Award className="w-6 h-6" />, label: t("w2"), color: "text-emerald-600", bg: "bg-emerald-100" },
    { icon: <Handshake className="w-6 h-6" />, label: t("w3"), color: "text-green-600", bg: "bg-green-100" },
    { icon: <Clock className="w-6 h-6" />, label: t("w4"), color: "text-teal-700", bg: "bg-teal-100" },
    { icon: <Users className="w-6 h-6" />, label: t("w5"), color: "text-emerald-700", bg: "bg-emerald-100" },
    { icon: <Calendar className="w-6 h-6" />, label: t("w6"), color: "text-green-700", bg: "bg-green-100" },
  ];

  const audience = [
    { icon: <Building2 className="w-7 h-7" />, label: t("a1"), color: "text-teal-700", bg: "bg-teal-100", border: "border-teal-200", card: "bg-teal-50" },
    { icon: <Globe className="w-7 h-7" />, label: t("a2"), color: "text-emerald-700", bg: "bg-emerald-100", border: "border-emerald-200", card: "bg-emerald-50" },
    { icon: <Award className="w-7 h-7" />, label: t("a3"), color: "text-green-700", bg: "bg-green-100", border: "border-green-200", card: "bg-green-50" },
    { icon: <UserCheck className="w-7 h-7" />, label: t("a4"), color: "text-teal-700", bg: "bg-teal-100", border: "border-teal-200", card: "bg-teal-50" },
    { icon: <Plane className="w-7 h-7" />, label: t("a5"), color: "text-emerald-700", bg: "bg-emerald-100", border: "border-emerald-200", card: "bg-emerald-50" },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white pt-28 pb-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-100 rounded-full opacity-40 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 bg-emerald-100 rounded-full opacity-40 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center pb-20">
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
                <Briefcase className="w-4 h-4" /> {t("badge")}
              </span>
              <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 leading-tight mb-5" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                {t("title1")}{" "}
                <span className="relative text-teal-600">
                  {t("title2")}
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 280 12" fill="none">
                    <path d="M2 8 Q70 2 140 8 Q210 14 278 8" stroke="#99f6e4" strokeWidth="4" strokeLinecap="round" fill="none"/>
                  </svg>
                </span>{" "}
                {t("title3")}
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg">{t("description")}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href={`https://wa.me/${siteConfig.whatsapp}?text=Hola, me interesa el curso de Inglés para Empresa`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-2xl shadow-lg shadow-teal-200 transition-all text-base">
                  <MessageCircle className="w-5 h-5" />{t("btnSchedule")}
                </Link>
                <Link href={`https://wa.me/${siteConfig.whatsapp}?text=Hola, quiero más información sobre Inglés para Empresa`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-2xl border-2 border-slate-200 transition-all text-base">
                  {t("btnInfo")}
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-[340px] h-[400px] sm:w-[400px] sm:h-[460px]">
                {/* Fondo con gradiente */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-emerald-700 rounded-[2.5rem] shadow-2xl shadow-teal-300 overflow-hidden">
                  {/* Círculos decorativos */}
                  <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/10 rounded-full" />
                  <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-emerald-900/30 rounded-full" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/5 rounded-full" />

                  {/* Ilustración corporativa */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-8 text-center">
                    {/* Iconos de negocios grandes */}
                    <div className="flex items-center gap-6 text-white/95">
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
                          <Building2 className="w-7 h-7 text-teal-200" />
                        </div>
                        <span className="text-white/75 text-[10px] font-bold tracking-widest uppercase">Company</span>
                      </div>
                      <div className="w-px h-10 bg-white/20" />
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
                          <Handshake className="w-7 h-7 text-teal-200" />
                        </div>
                        <span className="text-white/75 text-[10px] font-bold tracking-widest uppercase">Deal</span>
                      </div>
                      <div className="w-px h-10 bg-white/20" />
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
                          <Globe className="w-7 h-7 text-teal-200" />
                        </div>
                        <span className="text-white/75 text-[10px] font-bold tracking-widest uppercase">Global</span>
                      </div>
                    </div>

                    {/* Texto principal */}
                    <div className="mt-2">
                      <p className="text-white font-black tracking-[0.18em] text-3xl sm:text-4xl drop-shadow-md">BUSINESS</p>
                      <p className="text-teal-200 font-extrabold tracking-[0.12em] text-xl sm:text-2xl mt-0.5">ENGLISH</p>
                      <div className="flex items-center justify-center gap-2 mt-3">
                        <div className="h-px w-8 bg-white/30" />
                        <p className="text-white/70 text-[10px] font-medium tracking-wider uppercase">Professional · Corporate · Communication</p>
                        <div className="h-px w-8 bg-white/30" />
                      </div>
                    </div>

                    {/* Estrellas o insignias */}
                    <div className="flex gap-1.5 mt-2 bg-white/10 px-4 py-2 rounded-full border border-white/10">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-300 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
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

      {/* WHY US */}
      <section className="bg-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-teal-200 text-teal-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">{t("whyLabel")}</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{t("whyTitle")}</h2>
            <p className="text-slate-500 mt-3 max-w-lg mx-auto">{t("whySubtitle")}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUs.map((item) => (
              <div key={item.label} className="bg-white rounded-2xl border border-teal-100 p-6 flex items-start gap-4 shadow-sm">
                <div className={`w-12 h-12 ${item.bg} ${item.color} rounded-xl flex items-center justify-center shrink-0`}>{item.icon}</div>
                <p className="text-slate-700 text-sm font-medium leading-relaxed pt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="inline-block bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">{t("audienceLabel")}</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-8" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{t("audienceTitle")}</h2>
              <div className="space-y-4">
                {audience.map((a) => (
                  <div key={a.label} className={`flex items-start gap-4 rounded-2xl border-2 ${a.border} ${a.card} p-5`}>
                    <div className={`w-12 h-12 ${a.bg} ${a.color} rounded-xl flex items-center justify-center shrink-0`}>{a.icon}</div>
                    <p className="text-slate-700 text-sm leading-relaxed pt-2">{a.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-teal-100 aspect-video w-full h-auto bg-slate-950">
                <video
                  src="/images/Video-Galia.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/10 to-transparent pointer-events-none" />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl px-5 py-4 z-10">
                <p className="text-xs text-slate-500 font-medium mb-1">{t("modalityLabel")}</p>
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 bg-teal-100 text-teal-700 text-xs font-bold px-3 py-1.5 rounded-full">
                    <MapPin className="w-3.5 h-3.5" /> {t("presencial")}
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-full">
                    <Monitor className="w-3.5 h-3.5" /> {t("online")}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 text-center">
            <Link href={`https://wa.me/${siteConfig.whatsapp}?text=Hola, quiero información sobre el curso de Inglés para Empresa`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-bold text-base rounded-2xl shadow-lg shadow-teal-200 transition-all">
              <MessageCircle className="w-5 h-5" />{t("ctaBtn")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
