import { GraduationCap, Clock, BookOpen, Home } from "lucide-react";
import { whyUs } from "@/data/site";

const icons: Record<string, React.ElementType> = {
  GraduationCap,
  Clock,
  BookOpen,
  Home,
};

export default function WhyUs() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">
            ¿Por qué elegirnos?
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            ¿Por qué elegir ICA Languages?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Somos más que una escuela de idiomas. Somos tu comunidad de aprendizaje.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUs.map((item, i) => {
            const Icon = icons[item.icon] || GraduationCap;
            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-100 rounded-xl flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-6 h-6 text-blue-700" />
                </div>
                <h3
                  className="font-bold text-slate-900 mb-2"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
