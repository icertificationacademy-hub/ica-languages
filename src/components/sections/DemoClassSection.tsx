import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/data/site";
import { getTranslations } from "next-intl/server";

export default async function DemoClassSection() {
  const t = await getTranslations("home");

  return (
    <section className="py-4 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative rounded-3xl overflow-hidden min-h-[480px] flex items-center bg-cover bg-center"
          style={{ backgroundImage: "url('/images/clasemuestra.jpeg')", backgroundPosition: "center 20%" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/55 rounded-3xl" />

          {/* Content */}
          <div className="relative z-10 px-6 sm:px-10 lg:px-14 py-12 sm:py-20 max-w-2xl">
            <h2
              className="text-2xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              {t("demoTitle")}
            </h2>
            <p className="text-white/85 text-lg leading-relaxed mb-8">
              {t("demoText")}
            </p>
            <Link
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hola, quiero reservar mi lugar para una clase muestra gratuita` as never}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 bg-white hover:bg-slate-100 text-slate-900 font-black text-sm tracking-widest rounded-full transition-all shadow-lg hover:shadow-xl border-2 border-white"
            >
              {t("demoButton")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
