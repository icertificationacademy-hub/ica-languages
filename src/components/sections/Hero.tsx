import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ paddingTop: "84px" }} /* altura exacta del navbar */
    >
      {/* ── IMAGEN DE FONDO ── */}
      <div
        className="absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: "url('/images/Inicio.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center 15%", /* rostros visibles en el tercio superior */
        }}
      />

      {/* Overlay uniforme */}
      <div className="absolute inset-0 bg-black/48" />

      {/* ── ESPACIO LIBRE ARRIBA — sólo 28vh, no todo ── */}
      <div className="h-[28vh]" />

      {/* ── CONTENIDO centrado-bajo ── */}
      <div className="relative z-10 w-full text-center px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4 drop-shadow-lg"
          style={{
            fontFamily: "var(--font-plus-jakarta)",
            textShadow: "0 2px 16px rgba(0,0,0,0.6)",
          }}
        >
          ¡Aprende inglés con confianza!
        </h1>

        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-xl mx-auto leading-relaxed drop-shadow">
          Clases prácticas, grupos pequeños y enfoque conversacional.
        </p>

        <Link
          href={`https://wa.me/${siteConfig.whatsapp}?text=Hola, me interesa agendar una clase muestra gratuita`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 bg-white hover:bg-slate-100 text-slate-900 font-bold text-base rounded-full transition-all shadow-xl hover:shadow-2xl hover:scale-105"
        >
          Agenda tu clase muestra
        </Link>
      </div>

      {/* ── BOTÓN WHATSAPP FLOTANTE ── */}
      <a
        href={`https://wa.me/${siteConfig.whatsapp}?text=Hola, quiero más información`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-3 rounded-full shadow-xl transition-all hover:scale-105"
        aria-label="Contáctanos por WhatsApp"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="text-sm">¡Contáctanos!</span>
      </a>
    </section>
  );
}
