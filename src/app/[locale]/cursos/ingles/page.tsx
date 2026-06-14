import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { MessageCircle, Globe, Briefcase, GraduationCap, Monitor, MapPin, CheckCircle } from "lucide-react";
import { siteConfig } from "@/data/site";
import { getTranslations, setRequestLocale } from 'next-intl/server';

export const metadata: Metadata = {
  title: "Curso de Inglés | ICA Languages",
};

export default async function InglesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("cursoIngles");

  const reasons = [
    { icon: <Globe className="w-6 h-6" />, text: t("r1"), color: "text-blue-600", bg: "bg-blue-100" },
    { icon: <Briefcase className="w-6 h-6" />, text: t("r2"), color: "text-indigo-600", bg: "bg-indigo-100" },
    { icon: <GraduationCap className="w-6 h-6" />, text: t("r3"), color: "text-violet-600", bg: "bg-violet-100" },
  ];

  const features = [t("f1"), t("f2"), t("f3"), t("f4"), t("f5")];

  const modalities = [
    {
      icon: <MapPin className="w-7 h-7" />,
      title: t("presencialTitle"),
      description: t("presencialDesc"),
      image: "/images/clase-presencial.webp",
      imgPosition: "object-[center_20%]",
      color: "from-blue-500 to-blue-700",
      badge: "bg-blue-100 text-blue-700",
      border: "border-blue-200",
      bg: "bg-blue-50",
      perks: [t("presencialP1"), t("presencialP2"), t("presencialP3")],
    },
    {
      icon: <Monitor className="w-7 h-7" />,
      title: t("onlineTitle"),
      description: t("onlineDesc"),
      image: "/images/clase-online.png",
      imgPosition: "object-top",
      color: "from-indigo-500 to-indigo-700",
      badge: "bg-indigo-100 text-indigo-700",
      border: "border-indigo-200",
      bg: "bg-indigo-50",
      perks: [t("onlineP1"), t("onlineP2"), t("onlineP3")],
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-white pt-28 pb-0">
        <div className="absolute top-0 -right-32 w-[600px] h-[600px] bg-blue-100 rounded-full opacity-40 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 bg-indigo-100 rounded-full opacity-40 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center pb-20">
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
                <Globe className="w-4 h-4" /> {t("badge")}
              </span>
              <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 leading-tight mb-5" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                {t("title1")}{" "}
                <span className="relative text-blue-600">
                  {t("title2")}
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                    <path d="M2 8 Q75 2 150 8 Q225 14 298 8" stroke="#93c5fd" strokeWidth="4" strokeLinecap="round" fill="none"/>
                  </svg>
                </span>{" "}
                {t("title3")}
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg">{t("subtitle")}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href={`https://wa.me/${siteConfig.whatsapp}?text=Hola, me interesa el curso de Inglés`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg shadow-blue-200 transition-all text-base">
                  <MessageCircle className="w-5 h-5" />{t("btnSchedule")}
                </Link>
                <Link href={`https://wa.me/${siteConfig.whatsapp}?text=Hola, quiero más información sobre el curso de Inglés`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-2xl border-2 border-slate-200 transition-all text-base">
                  {t("btnInfo")}
                </Link>
              </div>
            </div>
            <div className="relative z-10 flex justify-center lg:justify-end">
              <div className="relative w-[340px] h-[400px] sm:w-[400px] sm:h-[460px]">
                {/* Fondo con gradiente */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] shadow-2xl shadow-blue-300 overflow-hidden">

                  {/* Círculos decorativos de fondo */}
                  <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/10 rounded-full" />
                  <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-indigo-900/30 rounded-full" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/5 rounded-full" />

                  {/* SVG ilustración principal */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-8">

                    {/* Banderas grandes */}
                    <div className="flex items-center gap-5">
                      <div className="flex flex-col items-center gap-2">
                        <div className="text-7xl drop-shadow-lg">🇺🇸</div>
                        <span className="text-white/70 text-xs font-semibold tracking-widest uppercase">USA</span>
                      </div>
                      <div className="w-px h-16 bg-white/20" />
                      <div className="flex flex-col items-center gap-2">
                        <div className="text-7xl drop-shadow-lg">🇬🇧</div>
                        <span className="text-white/70 text-xs font-semibold tracking-widest uppercase">UK</span>
                      </div>
                    </div>

                    {/* Texto ENGLISH grande */}
                    <div className="text-center mt-2">
                      <p className="text-white font-black tracking-[0.15em] text-4xl drop-shadow-md">ENGLISH</p>
                      <div className="flex items-center justify-center gap-2 mt-2">
                        <div className="h-px flex-1 bg-white/30" />
                        <p className="text-white/60 text-xs font-medium tracking-wider uppercase">Learn · Grow · Communicate</p>
                        <div className="h-px flex-1 bg-white/30" />
                      </div>
                    </div>

                    {/* Niveles A1–C2 */}
                    <div className="flex gap-2 mt-1">
                      {["A1","A2","B1","B2","C1","C2"].map((lvl) => (
                        <div key={lvl} className="w-10 h-10 bg-white/15 border border-white/30 rounded-xl flex items-center justify-center">
                          <span className="text-white text-xs font-bold">{lvl}</span>
                        </div>
                      ))}
                    </div>

                    {/* Estrellas decorativas */}
                    <div className="flex gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
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
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#eff6ff"/>
        </svg>
      </section>

      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="inline-block bg-blue-200 text-blue-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">{t("whyLabel")}</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-8" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{t("whyTitle")}</h2>
              <div className="space-y-5">
                {reasons.map((r, i) => (
                  <div key={i} className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-blue-100">
                    <div className={`w-12 h-12 ${r.bg} ${r.color} rounded-xl flex items-center justify-center shrink-0`}>{r.icon}</div>
                    <p className="text-slate-600 text-sm leading-relaxed pt-1">{r.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-[340px] h-[400px] sm:w-[400px] sm:h-[460px]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-indigo-400 rounded-[2.5rem] -rotate-2" />
                <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden">
                  <Image src="/images/clase-grupo.png" alt="Clases de inglés ICA Languages" fill className="object-cover object-center" />
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">{t("modalityLabel")}</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{t("modalityTitle")}</h2>
            <p className="text-slate-500 mt-3 max-w-lg mx-auto">{t("modalitySubtitle")}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {modalities.map((m) => (
              <div key={m.title} className={`rounded-3xl border-2 ${m.border} ${m.bg} overflow-hidden flex flex-col`}>
                <div className="relative h-52 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${m.color} opacity-30`} />
                  <Image src={m.image} alt={m.title} fill className={`object-cover ${m.imgPosition ?? ""}`} />
                  <div className={`absolute top-4 left-4 inline-flex items-center gap-2 ${m.badge} text-sm font-bold px-3 py-1.5 rounded-full`}>
                    {m.icon}{m.title}
                  </div>
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{m.description}</p>
                  <ul className="space-y-2 mt-auto">
                    {m.perks.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                        <CheckCircle className="w-4 h-4 text-blue-500 shrink-0" />{p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href={`https://wa.me/${siteConfig.whatsapp}?text=Hola, quiero información sobre el curso de Inglés`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base rounded-2xl shadow-lg shadow-blue-200 transition-all">
              <MessageCircle className="w-5 h-5" />{t("consultBtn")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
