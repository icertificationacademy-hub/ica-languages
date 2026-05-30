"use client";

import { useEffect, useRef, useState } from "react";

const statsData = [
  { value: 4, suffix: "%", label: "Idiomas", percent: 4 },
  { value: 95, suffix: "%", label: "Éxito", percent: 95 },
  { value: 80, suffix: "+", label: "Estudiantes", percent: 80 },
];

function CircularProgress({
  percent,
  value,
  suffix,
  label,
  started,
}: {
  percent: number;
  value: number;
  suffix: string;
  label: string;
  started: boolean;
}) {
  const [count, setCount] = useState(0);
  const [progress, setProgress] = useState(0);

  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    if (!started) return;

    // Animar número
    const duration = 1800;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const p = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(eased * value));
      setProgress(Math.floor(eased * percent));
      if (p < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, value, percent]);

  return (
    <div className="flex flex-col items-center gap-3">
      {/* Círculo SVG */}
      <div className="relative">
        <svg width="180" height="180" viewBox="0 0 180 180">
          {/* Círculo de fondo (gris) */}
          <circle
            cx="90"
            cy="90"
            r={radius}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="10"
          />
          {/* Círculo de progreso (azul) */}
          <circle
            cx="90"
            cy="90"
            r={radius}
            fill="none"
            stroke="#2563eb"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            transform="rotate(-90 90 90)"
            style={{ transition: "stroke-dashoffset 0.05s linear" }}
          />
        </svg>

        {/* Contenido interior */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
          {/* Estrella */}
          <svg className="w-6 h-6 text-slate-500 fill-slate-500" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          {/* Número animado */}
          <span className="text-3xl font-bold text-slate-700 leading-none">
            {count}{suffix}
          </span>
        </div>
      </div>

      {/* Label */}
      <p className="text-sm text-slate-500 font-medium">{label}</p>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <h2
          className="text-3xl sm:text-4xl font-black text-slate-900 text-center mb-12"
          style={{ fontFamily: "var(--font-plus-jakarta)" }}
        >
          Resultados
        </h2>

        {/* Círculos */}
        <div className="flex flex-wrap justify-center gap-16">
          {statsData.map((stat) => (
            <CircularProgress
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              percent={stat.percent}
              started={started}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
