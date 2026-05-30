"use client";

import { useState, useEffect, useCallback } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "María Fernanda Gutiérrez",
    role: "Alumno",
    text: "Me inscribí al curso de inglés y la verdad me está encantando. La maestra está muy bien preparada y explica superbién. ¡Excelente servicio!",
    rating: 5,
    avatar: "MF",
    color: "bg-blue-500",
  },
  {
    name: "José Antonio",
    role: "Alumno",
    text: "Tomé un curso de preparación para certificación, aprendí bastante y obtuve un puntaje alto.",
    rating: 5,
    avatar: "JA",
    color: "bg-amber-500",
  },
  {
    name: "Luis Ángel Hernandez",
    role: "Alumno",
    text: "Estoy en el curso de francés y enseñan muy bien. Recomiendo mucho la escuela.",
    rating: 5,
    avatar: "LH",
    color: "bg-green-500",
  },
  {
    name: "Estefany Aquino",
    role: "Alumno",
    text: "Me metí al curso de preparación para TOEFL porque lo necesitaba para la universidad y me gustó tanto la forma en que enseñaban que seguí en el curso de inglés regular.",
    rating: 5,
    avatar: "EA",
    color: "bg-purple-500",
  },
  {
    name: "Luis Ángel Hernandez",
    role: "Alumno",
    text: "Estoy en el curso de francés y enseñan muy bien. Recomiendo mucho la escuela.",
    rating: 5,
    avatar: "LH",
    color: "bg-pink-500",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [perPage, setPerPage] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setPerPage(1);
      else if (window.innerWidth < 1024) setPerPage(2);
      else setPerPage(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / perPage);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % totalSlides);
  }, [totalSlides]);

  const prev = () => setCurrent((c) => (c - 1 + totalSlides) % totalSlides);

  useEffect(() => {
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [next]);

  const visible = testimonials.slice(current * perPage, current * perPage + perPage);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">
            Testimonios
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Lo que dicen nuestros estudiantes
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Historias reales de personas que transformaron su vida aprendiendo un idioma.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[280px]">
          {visible.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all flex flex-col"
            >
              <Quote className="w-8 h-8 text-blue-100 fill-blue-100 mb-4" />

              <div className="flex gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="text-slate-700 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 border-t border-slate-50 pt-4">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controles */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center shadow-sm transition-all"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5 text-slate-600" />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? "w-5 h-2 bg-blue-600" : "w-2 h-2 bg-slate-300"
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
    </section>
  );
}
