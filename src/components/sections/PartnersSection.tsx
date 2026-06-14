import Image from "next/image";
import { getTranslations } from "next-intl/server";

const partners = [
  {
    name: "Galia — Cuidamos lo que + cuidas",
    logo: "/images/empresa1.png",
    bg: "#1a3a8f",        // azul oscuro de Galia
  },
  {
    name: "Empresa colaboradora",
    logo: "/images/empresa2.png",
    bg: "#ffffff",
    border: true,
  },
  {
    name: "Morena Mia Beauty",
    logo: "/images/empresa3.jpg",
    bg: "#000000",
  },
];

export default async function PartnersSection() {
  const t = await getTranslations("home");
  return (
    <section className="py-14 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-10">
          {t("partnersLabel")}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {partners.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl overflow-hidden shadow-md flex items-center justify-center transition-transform hover:scale-105 w-[240px] h-[130px] sm:w-[280px] sm:h-[150px] md:w-[300px] md:h-[160px] ${
                p.border ? "border border-slate-200" : ""
              }`}
              style={{ backgroundColor: p.bg }}
            >
              <Image
                src={p.logo}
                alt={p.name}
                fill
                className="object-contain p-4"
                sizes="220px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
