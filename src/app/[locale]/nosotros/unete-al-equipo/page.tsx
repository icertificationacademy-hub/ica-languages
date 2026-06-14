import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { MessageCircle, MapPin, Clock, Monitor, GraduationCap, Smile, Handshake } from "lucide-react";
import { siteConfig } from "@/data/site";
import { getTranslations, setRequestLocale } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "uneteAlEquipo" });
  return {
    title: `${t("badge")} | ICA Languages`,
    description: t("description"),
  };
}

export default async function UneteAlEquipoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("uneteAlEquipo");

  const vacancies = [
    {
      title: t("v1Title"),
      subtitle: t("v1Subtitle"),
      icon: <GraduationCap className="w-6 h-6" />,
      modalidad: t("presencial"),
      modalidadIcon: <MapPin className="w-4 h-4" />,
      ubicacion: t("ubicacionPresencial"),
      horario: t("horarioVal"),
      extra: t("v1Extra"),
      color: "from-violet-500 to-purple-600",
      border: "border-violet-200",
      bg: "bg-violet-50",
      badge: "bg-violet-100 text-violet-700",
      btn: "bg-violet-600 hover:bg-violet-700",
      shadow: "shadow-violet-200",
    },
    {
      title: t("v2Title"),
      subtitle: t("v2Subtitle"),
      icon: <Smile className="w-6 h-6" />,
      modalidad: t("presencial"),
      modalidadIcon: <MapPin className="w-4 h-4" />,
      ubicacion: t("ubicacionPresencial"),
      horario: t("horarioVal"),
      extra: t("v2Extra"),
      color: "from-green-500 to-emerald-600",
      border: "border-emerald-200",
      bg: "bg-emerald-50",
      badge: "bg-emerald-100 text-emerald-700",
      btn: "bg-emerald-600 hover:bg-emerald-700",
      shadow: "shadow-emerald-200",
    },
    {
      title: t("v3Title"),
      subtitle: t("v3Subtitle"),
      icon: <Monitor className="w-6 h-6" />,
      modalidad: t("enLinea"),
      modalidadIcon: <Monitor className="w-4 h-4" />,
      ubicacion: t("ubicacionPresencial"),
      horario: t("horarioVal"),
      extra: t("v3Extra"),
      color: "from-blue-500 to-indigo-600",
      border: "border-blue-200",
      bg: "bg-blue-50",
      badge: "bg-blue-100 text-blue-700",
      btn: "bg-blue-600 hover:bg-blue-700",
      shadow: "shadow-blue-200",
    },
  ];

  return (
    <>
      {/* ── HERO ───────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pt-28 pb-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-100 rounded-full opacity-40 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 bg-blue-100 rounded-full opacity-40 blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-20 relative z-10">
          <span className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-5 border border-violet-100 shadow-sm">
            <Handshake className="w-4 h-4" /> {t("badge")}
          </span>
          <h1
            className="text-5xl sm:text-6xl font-extrabold text-slate-900 leading-tight mb-5"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            {t("title1")}{" "}
            <span className="relative text-violet-600">
              {t("title2")}
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 400 12" fill="none">
                <path d="M2 8 Q100 2 200 8 Q300 14 398 8" stroke="#ddd6fe" strokeWidth="4" strokeLinecap="round" fill="none"/>
              </svg>
            </span>
          </h1>
          <p className="text-xl font-semibold text-slate-700 mb-3">
            {t("subtitle")}
          </p>
          <p className="text-base text-slate-500 leading-relaxed max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        <svg viewBox="0 0 1440 60" className="w-full block" preserveAspectRatio="none" style={{height: 60}}>
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f5f3ff"/>
        </svg>
      </section>

      {/* ── VACANTES ───────────────────────────────────── */}
      <section className="bg-violet-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-7">
            {vacancies.map((v) => (
              <div
                key={v.title + v.subtitle}
                className={`rounded-3xl border-2 ${v.border} bg-white flex flex-col overflow-hidden shadow-sm`}
              >
                {/* Header con gradiente */}
                <div className={`bg-gradient-to-br ${v.color} p-6 text-white`}>
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-4 text-white">
                    {v.icon}
                  </div>
                  <h3 className="text-xl font-extrabold leading-tight" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                    {v.title}<br />
                    <span className="text-white/80">{v.subtitle}</span>
                  </h3>
                </div>

                {/* Cuerpo */}
                <div className="p-6 flex flex-col flex-1 gap-4">
                  <div className={`inline-flex items-center gap-2 ${v.badge} text-xs font-bold px-3 py-1.5 rounded-full w-fit`}>
                    {v.modalidadIcon}
                    {v.modalidad}
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-2 text-sm text-slate-600">
                      <MapPin className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                      <span>{v.ubicacion}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{t("horarioLabel")} {v.horario}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      {v.modalidadIcon && <span className="text-slate-400">{v.modalidadIcon}</span>}
                      <span>{v.extra}</span>
                    </div>
                  </div>

                  <Link
                    href={`https://wa.me/${siteConfig.whatsapp}?text=Hola, me interesa la vacante de ${v.title} ${v.subtitle} en ICA Languages`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 ${v.btn} text-white font-bold rounded-2xl shadow-lg ${v.shadow} transition-all text-sm`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    {t("sendCV")}
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
