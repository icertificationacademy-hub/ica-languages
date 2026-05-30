import Image from "next/image";

const partners = [
  {
    name: "Galia",
    logo: "/images/empresa1.png",
    bg: "bg-blue-900",
  },
  {
    name: "Empresa colaboradora",
    logo: "/images/empresa2.png",
    bg: "bg-white",
  },
  {
    name: "Morena Mia Beauty",
    logo: "/images/empresa3.jpg",
    bg: "bg-black",
  },
];

export default function PartnersSection() {
  return (
    <section className="py-14 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">
          Empresas que confían en nosotros
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {partners.map((p) => (
            <div
              key={p.name}
              className={`relative w-32 h-20 rounded-xl overflow-hidden shadow-sm flex items-center justify-center ${p.bg}`}
            >
              <Image
                src={p.logo}
                alt={p.name}
                fill
                className="object-contain p-3"
                sizes="128px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
