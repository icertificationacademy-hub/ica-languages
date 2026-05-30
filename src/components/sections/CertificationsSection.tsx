"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const certImages = [
  { src: "/images/certifi1.png", alt: "Certificación DELF - ICA Languages" },
  { src: "/images/certifi2.png", alt: "Certificación TCE - Alumna ICA Languages" },
  { src: "/images/certifi3.png", alt: "Certificación TCE - Alumno ICA Languages" },
  { src: "/images/certifi4.png", alt: "Certificación TCE - ICA Languages" },
  { src: "/images/certifi5.png", alt: "Certificación DELF - ICA Languages" },
];

export default function CertificationsSection() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % certImages.length);
  }, []);

  const prev = () => {
    setCurrent((c) => (c - 1 + certImages.length) % certImages.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 3500);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── CARRUSEL ── */}
          <div className="relative group flex flex-col items-center">
            {/* Contenedor con tamaño fijo */}
            <div className="relative w-[420px] max-w-full h-[480px] rounded-2xl shadow-lg overflow-hidden bg-white">
              {certImages.map((img, i) => (
                <div
                  key={img.src}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                    i === current
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95 pointer-events-none"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={420}
                    height={480}
                    className="w-full h-full object-contain"
                    priority={i === 0}
                  />
                </div>
              ))}

              {/* Flechas — visibles al hover */}
              <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5 text-slate-700" />
              </button>
              <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-5 h-5 text-slate-700" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {certImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Imagen ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-5 h-2 bg-teal-600"
                      : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* ── TEXTO DERECHO ── */}
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

            {/* Logos */}
            <div className="flex flex-wrap items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded flex items-center justify-center bg-[#c8102e]">
                  <span className="text-white font-black text-sm">C</span>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold leading-none">University of</div>
                  <div className="text-lg font-black text-slate-800 leading-tight">CAMBRIDGE</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full border-2 border-red-600 flex items-center justify-center">
                  <span className="text-red-600 font-black text-sm italic">af</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-700 leading-tight">Alianza</div>
                  <div className="text-sm font-bold text-slate-700 leading-tight">Francesa</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded flex items-center justify-center bg-[#002147]">
                  <span className="text-white font-black text-sm">O</span>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold leading-none">University of</div>
                  <div className="text-lg font-black text-slate-800 leading-tight">OXFORD</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
