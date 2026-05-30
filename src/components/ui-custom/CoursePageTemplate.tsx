import Link from "next/link";
import { ArrowRight, CheckCircle, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";
import CTASection from "@/components/sections/CTASection";

interface Level {
  name: string;
  description: string;
}

interface CoursePageTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: "blue" | "amber" | "purple" | "green";
  features: string[];
  levels: string[];
  levelsDetails?: Level[];
  extraContent?: React.ReactNode;
}

const colorMap = {
  blue: {
    gradient: "from-blue-700 to-blue-900",
    badge: "bg-blue-100 text-blue-700",
    check: "text-blue-600",
    btn: "bg-blue-700 hover:bg-blue-800",
    accent: "border-blue-200 bg-blue-50",
  },
  amber: {
    gradient: "from-amber-500 to-orange-600",
    badge: "bg-amber-100 text-amber-700",
    check: "text-amber-600",
    btn: "bg-amber-500 hover:bg-amber-600",
    accent: "border-amber-200 bg-amber-50",
  },
  purple: {
    gradient: "from-purple-700 to-purple-900",
    badge: "bg-purple-100 text-purple-700",
    check: "text-purple-600",
    btn: "bg-purple-700 hover:bg-purple-800",
    accent: "border-purple-200 bg-purple-50",
  },
  green: {
    gradient: "from-green-700 to-green-900",
    badge: "bg-green-100 text-green-700",
    check: "text-green-600",
    btn: "bg-green-700 hover:bg-green-800",
    accent: "border-green-200 bg-green-50",
  },
};

export default function CoursePageTemplate({
  title,
  subtitle,
  description,
  icon,
  color,
  features,
  levels,
  levelsDetails,
  extraContent,
}: CoursePageTemplateProps) {
  const c = colorMap[color];

  return (
    <>
      {/* Hero */}
      <section className={`bg-gradient-to-br ${c.gradient} text-white pt-28 pb-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5 mb-6">
                <span className="text-sm font-medium">Curso</span>
              </div>
              <div className="text-5xl mb-4">{icon}</div>
              <h1
                className="text-4xl sm:text-5xl font-bold mb-4"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                {title}
              </h1>
              <p className="text-xl text-white/80 mb-3">{subtitle}</p>
              <p className="text-white/70 leading-relaxed mb-8">{description}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={`https://wa.me/${siteConfig.whatsapp}?text=Hola, me interesa el curso de ${title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold rounded-xl transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  Agendar Clase Muestra
                </Link>
                <Link
                  href={`https://wa.me/${siteConfig.whatsapp}?text=Hola, quiero más información sobre el curso de ${title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all"
                >
                  Más información
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Feature list card */}
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-4">¿Qué incluye este curso?</h3>
              <ul className="space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
                    <span className="text-white/90 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Levels */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Niveles disponibles
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {levels.map((level, i) => (
              <div
                key={level}
                className={`p-5 rounded-xl border ${c.accent} flex items-center gap-3`}
              >
                <div
                  className={`w-8 h-8 rounded-full ${c.btn.split(" ")[0]} flex items-center justify-center text-white font-bold text-sm shrink-0`}
                >
                  {i + 1}
                </div>
                <span className="font-medium text-slate-800">{level}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra content */}
      {extraContent && (
        <section className="py-12 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{extraContent}</div>
        </section>
      )}

      <CTASection />
    </>
  );
}
