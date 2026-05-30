import Image from "next/image";

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

export default function PartnersSection() {
  return (
    <section className="py-14 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-10">
          Empresas que confían en nosotros
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {partners.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl overflow-hidden shadow-md flex items-center justify-center transition-transform hover:scale-105 ${
                p.border ? "border border-slate-200" : ""
              }`}
              style={{
                backgroundColor: p.bg,
                width: "220px",
                height: "120px",
              }}
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
