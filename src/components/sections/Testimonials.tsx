"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "María Fernanda Gutiérrez",
    role: "Alumno",
    text: "Me inscribí al curso de inglés y la verdad me está encantando. La maestra está muy bien preparada y explica superbién. ¡Excelente servicio!",
  },
  {
    name: "José Antonio",
    role: "Alumno",
    text: "Tomé un curso de preparación para certificación, aprendí bastante y obtuve un puntaje alto.",
  },
  {
    name: "Luis Ángel Hernandez",
    role: "Alumno",
    text: "Estoy en el curso de francés y enseñan muy bien. Recomiendo mucho la escuela.",
  },
  {
    name: "Estefany Aquino",
    role: "Alumno",
    text: "Me metí al curso de preparación para TOEFL porque lo necesitaba para la universidad y me gustó tanto la forma en que enseñaban que seguí en el curso de inglés regular.",
  },
];

// Ícono de persona
function PersonIcon() {
  return (
    <svg className="w-12 h-12 text-slate-600" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
    </svg>
  );
}

// Ícono de trofeo/podio amarillo
function TrophyIcon() {
  return (
    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
      {/* estrella */}
      <polygon points="24,4 27,14 38,14 29,21 32,32 24,25 16,32 19,21 10,14 21,14" fill="#f59e0b" />
      {/* podio izquierdo */}
      <rect x="6" y="30" width="10" height="14" rx="1" fill="#f59e0b" opacity="0.85"/>
      {/* podio centro */}
      <rect x="19" y="24" width="10" height="20" rx="1" fill="#f59e0b"/>
      {/* podio derecho */}
      <rect x="32" y="33" width="10" height="11" rx="1" fill="#f59e0b" opacity="0.85"/>
    </svg>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="bg-slate-50 rounded-2xl p-6 flex flex-col gap-4 shadow-sm border border-slate-100 h-full">
      {/* Header */}
      <div className="flex items-center gap-3">
        <PersonIcon />
        <div>
          <p className="font-bold text-slate-900 text-sm">{testimonial.name}</p>
          <p className="text-xs text-slate-500">{testimonial.role}</p>
        </div>
      </div>

      {/* Ícono trofeo centrado */}
      <div className="flex justify-center">
        <TrophyIcon />
      </div>

      {/* Texto */}
      <p className="text-sm text-slate-700 leading-relaxed">
        &ldquo;{testimonial.text}&rdquo;
      </p>
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [perPage, setPerPage] = useState(2);

  // Detectar tamaño pantalla
  useEffect(() => {
    const update = () => setPerPage(window.innerWidth >= 768 ? 2 : 1);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / perPage);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % totalSlides);
  }, [totalSlides]);

  const prev = () => setCurrent((c) => (c - 1 + totalSlides) % totalSlides);

  // Auto-avance cada 4s
  useEffect(() => {
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [next]);

  const visible = testimonials.slice(
    current * perPage,
    current * perPage + perPage
  );

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <h2
          className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-10"
          style={{ fontFamily: "var(--font-plus-jakarta)" }}
        >
          Lo que dicen nuestros estudiantes
        </h2>

        {/* Carrusel */}
        <div className="relative">
          {/* Cards visibles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 min-h-[260px]">
            {visible.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>

          {/* Flechas */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center shadow-sm transition-all"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5 text-slate-600" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-5 h-2 bg-blue-600"
                      : "w-2 h-2 bg-slate-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center shadow-sm transition-all"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5 text-slate-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
