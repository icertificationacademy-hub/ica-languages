import Link from "next/link";

export default function CertificationsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/*
            IMAGEN IZQUIERDA — reemplaza con tu imagen real de alumna con certificado FCE
            Archivo sugerido: /images/cert-alumna-fce.jpg
          */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <div
              className="w-full aspect-[4/3] bg-cover bg-center bg-no-repeat rounded-2xl"
              style={{ backgroundImage: "url('/images/cert-alumna-fce.jpg')" }}
            >
              {/* Placeholder mientras no hay imagen */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center rounded-2xl">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🎓</div>
                  <div className="inline-block bg-blue-700 text-white font-black text-xl px-6 py-2 rounded-lg mb-3">
                    CERTIFICACIÓN
                  </div>
                  <div className="bg-blue-500 text-white font-black text-3xl px-6 py-2 rounded-lg mb-3">
                    FCE
                  </div>
                  <p className="text-blue-800 text-sm font-semibold">(FIRST CERTIFICATE IN ENGLISH)</p>
                  <div className="mt-4 bg-slate-900 text-white font-bold px-5 py-2 rounded-full inline-block text-sm">
                    ¡CERTIFÍCATE CON NOSOTROS!
                  </div>
                </div>
              </div>
            </div>

            {/* Dots indicadores (simulando slideshow) */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`rounded-full transition-all ${
                    i === 1 ? "w-4 h-2 bg-white" : "w-2 h-2 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Texto derecho */}
          <div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Certificaciones Internacionales
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              <strong>En ICA Languages, tu preparación tiene respaldo internacional.</strong>{" "}
              Supera tus metas con <strong>certificaciones oficiales</strong> de instituciones
              reconocidas como <strong>Cambridge</strong> y la{" "}
              <strong>Alianza Francesa</strong>. Nuestro compromiso es que tu esfuerzo
              tenga un valor real,{" "}
              <strong>válido a nivel nacional e internacional.</strong>
            </p>

            {/* Logos instituciones */}
            <div className="flex flex-wrap items-center gap-8">
              {/* Cambridge */}
              <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  {/* Escudo Cambridge (SVG simplificado) */}
                  <svg width="32" height="32" viewBox="0 0 100 100" fill="none">
                    <rect width="100" height="100" rx="4" fill="#c8102e"/>
                    <text x="50" y="65" textAnchor="middle" fill="white" fontSize="42" fontWeight="bold">C</text>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">University of</div>
                    <div className="text-xl font-black text-slate-800 leading-none">CAMBRIDGE</div>
                  </div>
                </div>
              </div>

              {/* Alianza Francesa */}
              <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full border-2 border-red-600 flex items-center justify-center text-red-600 font-black text-sm">
                    af
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-bold text-slate-700 leading-tight">Alianza</div>
                    <div className="text-sm font-bold text-slate-700 leading-tight">Francesa</div>
                  </div>
                </div>
              </div>

              {/* Oxford */}
              <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <svg width="32" height="32" viewBox="0 0 100 100" fill="none">
                    <rect width="100" height="100" rx="4" fill="#002147"/>
                    <text x="50" y="65" textAnchor="middle" fill="white" fontSize="38" fontWeight="bold">O</text>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">University of</div>
                    <div className="text-xl font-black text-slate-800 leading-none">OXFORD</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
