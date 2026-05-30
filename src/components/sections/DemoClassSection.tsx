import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function DemoClassSection() {
  return (
    <section className="py-4 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/*
          IMAGEN DE FONDO — reemplaza /images/demo-class.jpg
          con la foto de alumnos en la clase (la chica con laptop y el chico a su lado)
        */}
        <div
          className="relative rounded-3xl overflow-hidden min-h-[420px] flex items-center bg-cover bg-center"
          style={{ backgroundImage: "url('/images/clasemuestra.jpeg')", backgroundPosition: "center 10%" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/55 rounded-3xl" />

          {/* Contenido */}
          <div className="relative z-10 px-8 sm:px-14 py-16 max-w-2xl">
            <h2
              className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Agenda una clase muestra
            </h2>
            <p className="text-white/85 text-lg leading-relaxed mb-8">
              Conoce nuestra metodología y resuelve todas tus dudas. Agenda una clase
              muestra gratuita y vive la experiencia ICA Languages. Te damos las
              herramientas, tú das el primer paso.
            </p>
            <Link
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hola, quiero reservar mi lugar para una clase muestra gratuita`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 bg-white hover:bg-slate-100 text-slate-900 font-black text-sm tracking-widest rounded-full transition-all shadow-lg hover:shadow-xl border-2 border-white"
            >
              RESERVA TU LUGAR
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
