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

            {/* Logos instituciones */}
            <div className="flex flex-wrap items-center gap-10">

              {/* Cambridge */}
              <div className="flex items-center gap-3">
                {/* Escudo Cambridge */}
                <svg width="44" height="52" viewBox="0 0 44 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 0L0 8V30C0 42 10 49 22 52C34 49 44 42 44 30V8L22 0Z" fill="#003087"/>
                  <path d="M22 4L4 11V30C4 40 12 46 22 49C32 46 40 40 40 30V11L22 4Z" fill="#003087" stroke="#C8A84B" strokeWidth="1"/>
                  <text x="22" y="22" textAnchor="middle" fill="#C8A84B" fontSize="9" fontWeight="bold" fontFamily="serif">CANTAB</text>
                  <path d="M8 26 Q22 20 36 26" stroke="#C8A84B" strokeWidth="0.8" fill="none"/>
                  <text x="22" y="34" textAnchor="middle" fill="white" fontSize="7" fontFamily="serif">✦ ✦ ✦</text>
                  <text x="22" y="43" textAnchor="middle" fill="#C8A84B" fontSize="6" fontFamily="serif">ALMA MATER</text>
                </svg>
                <div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest font-medium leading-none mb-0.5">University of</div>
                  <div className="text-xl font-black text-slate-900 leading-tight tracking-tight">CAMBRIDGE</div>
                </div>
              </div>

              {/* Alianza Francesa */}
              <div className="flex flex-col items-center gap-1">
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="26" cy="26" r="24" stroke="#c0392b" strokeWidth="1.5" fill="white"/>
                  <circle cx="26" cy="26" r="20" stroke="#c0392b" strokeWidth="0.5" fill="none"/>
                  {/* letra a */}
                  <text x="18" y="33" fill="#c0392b" fontSize="18" fontStyle="italic" fontFamily="Georgia, serif" fontWeight="bold">a</text>
                  {/* letra f */}
                  <text x="28" y="33" fill="#c0392b" fontSize="18" fontStyle="italic" fontFamily="Georgia, serif" fontWeight="bold">f</text>
                  {/* decoración superior */}
                  <path d="M14 18 Q26 12 38 18" stroke="#c0392b" strokeWidth="0.8" fill="none"/>
                  <path d="M14 34 Q26 40 38 34" stroke="#c0392b" strokeWidth="0.8" fill="none"/>
                </svg>
                <div className="text-center">
                  <div className="text-sm font-semibold text-slate-700 leading-tight">Alianza Francesa</div>
                </div>
              </div>

              {/* Oxford */}
              <div className="flex items-center gap-3">
                {/* Escudo Oxford */}
                <svg width="44" height="52" viewBox="0 0 44 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 0L0 8V30C0 42 10 49 22 52C34 49 44 42 44 30V8L22 0Z" fill="#003087"/>
                  <path d="M22 4L4 11V30C4 40 12 46 22 49C32 46 40 40 40 30V11L22 4Z" fill="#003087" stroke="#C8A84B" strokeWidth="1"/>
                  {/* libro abierto */}
                  <rect x="14" y="18" width="16" height="12" rx="1" fill="none" stroke="#C8A84B" strokeWidth="1"/>
                  <line x1="22" y1="18" x2="22" y2="30" stroke="#C8A84B" strokeWidth="1"/>
                  <text x="22" y="43" textAnchor="middle" fill="#C8A84B" fontSize="6" fontFamily="serif">DOMINUS</text>
                </svg>
                <div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest font-medium leading-none mb-0.5">University of</div>
                  <div className="text-xl font-black text-slate-900 leading-tight tracking-tight">OXFORD</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
