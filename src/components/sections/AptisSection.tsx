import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/data/site";
import { getTranslations } from "next-intl/server";
import { Clock, Zap, DollarSign, ArrowRight } from "lucide-react";

export default async function AptisSection() {
  const t = await getTranslations("home");

  const reasons = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: t("aptisR1Title"),
      desc: t("aptisR1Desc"),
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: t("aptisR2Title"),
      desc: t("aptisR2Desc"),
      color: "text-amber-600",
      bg: "bg-amber-100",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: t("aptisR3Title"),
      desc: t("aptisR3Desc"),
      color: "text-emerald-600",
      bg: "bg-emerald-100",
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="inline-block bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3">
              British Council
            </span>
            <h2
              className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              {t("aptisTitle")}
            </h2>
            <p className="text-slate-500 mt-3 max-w-xl text-base">{t("aptisSubtitle")}</p>
          </div>
          <Link
            href="/certificaciones/aptis"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all text-sm shrink-0"
          >
            {t("aptisBtn")} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Reason cards */}
        <div className="grid sm:grid-cols-3 gap-5 mb-10">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`w-11 h-11 ${r.bg} ${r.color} rounded-xl flex items-center justify-center shrink-0`}>
                {r.icon}
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-800 mb-1">{r.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Banner strip */}
        <div className="bg-gradient-to-r from-red-600 to-rose-600 rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white text-center sm:text-left">
            <p className="font-black text-lg">{t("aptisBannerTitle")}</p>
            <p className="text-white/80 text-sm">{t("aptisBannerText")}</p>
          </div>
          <Link
            href={`https://wa.me/${siteConfig.whatsapp}?text=Hola, quiero información sobre la certificación APTIS` as never}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-100 text-red-700 font-bold rounded-xl transition-all text-sm shrink-0"
          >
            {t("aptisBannerBtn")}
          </Link>
        </div>
      </div>
    </section>
  );
}
