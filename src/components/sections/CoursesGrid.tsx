import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { courses } from "@/data/site";

const colorMap: Record<string, { bg: string; text: string; border: string; btn: string }> = {
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-700",
    border: "border-blue-100",
    btn: "bg-blue-700 hover:bg-blue-800",
  },
  amber: {
    bg: "bg-amber-50",
    text: "text-amber-700",
    border: "border-amber-100",
    btn: "bg-amber-500 hover:bg-amber-600",
  },
  purple: {
    bg: "bg-purple-50",
    text: "text-purple-700",
    border: "border-purple-100",
    btn: "bg-purple-700 hover:bg-purple-800",
  },
  green: {
    bg: "bg-green-50",
    text: "text-green-700",
    border: "border-green-100",
    btn: "bg-green-700 hover:bg-green-800",
  },
};

export default function CoursesGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">
            Nuestros Cursos
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Tu próximo idioma comienza aquí
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Elige el programa que mejor se adapte a tus metas. Todos nuestros cursos
            incluyen grupos pequeños y enfoque conversacional.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => {
            const colors = colorMap[course.color] || colorMap.blue;
            return (
              <div
                key={course.id}
                className="group relative bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col"
              >
                {/* Top accent */}
                <div className={`h-1.5 w-full ${colors.btn.split(" ")[0]}`} />

                <div className="p-6 flex flex-col flex-1">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 ${colors.bg} rounded-2xl flex items-center justify-center text-3xl mb-4`}
                  >
                    {course.icon}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-lg font-bold text-slate-900 mb-1"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    {course.title}
                  </h3>
                  <p className={`text-sm font-medium ${colors.text} mb-3`}>
                    {course.subtitle}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-5 flex-1">
                    {course.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-1.5 mb-6">
                    {course.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircle className={`w-4 h-4 ${colors.text} mt-0.5 shrink-0`} />
                        <span className="text-xs text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href={course.href}
                    className={`flex items-center justify-center gap-2 w-full py-2.5 ${colors.btn} text-white text-sm font-semibold rounded-xl transition-all`}
                  >
                    Más información
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
