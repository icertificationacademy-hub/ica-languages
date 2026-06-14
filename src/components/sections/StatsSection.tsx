"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

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

  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    if (!started) return;

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
      <div className="relative w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[220px] md:h-[220px]">
        <svg width="100%" height="100%" viewBox="0 0 220 220">
          <circle cx="110" cy="110" r={radius} fill="none" stroke="#e5e7eb" strokeWidth="12" />
          <circle
            cx="110" cy="110" r={radius}
            fill="none" stroke="#2563eb" strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            transform="rotate(-90 110 110)"
            style={{ transition: "stroke-dashoffset 0.05s linear" }}
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
          <svg className="w-8 h-8 fill-slate-500" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <span className="text-4xl font-bold text-slate-700 leading-none">
            {count}{suffix}
          </span>
        </div>
      </div>

      <p className="text-sm text-slate-500 font-medium">{label}</p>
    </div>
  );
}

export default function StatsSection() {
  const t = useTranslations("home");
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  const statsData = [
    { value: 4, suffix: "", label: t("statIdiomas"), percent: 4 },
    { value: 95, suffix: "%", label: t("statExito"), percent: 95 },
    { value: 80, suffix: "+", label: t("statEstudiantes"), percent: 80 },
  ];

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
        <h2
          className="text-3xl sm:text-4xl font-black text-slate-900 text-center mb-12"
          style={{ fontFamily: "var(--font-plus-jakarta)" }}
        >
          {t("statsTitle")}
        </h2>

        <div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16">
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
