import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

// Flag USA
function FlagUSA() {
  return (
    <svg viewBox="0 0 60 40" className="w-24 h-16 rounded-lg shadow-md" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="40" fill="#B22234"/>
      <rect y="3.07" width="60" height="3.07" fill="white"/>
      <rect y="9.23" width="60" height="3.07" fill="white"/>
      <rect y="15.38" width="60" height="3.07" fill="white"/>
      <rect y="21.54" width="60" height="3.07" fill="white"/>
      <rect y="27.69" width="60" height="3.07" fill="white"/>
      <rect y="33.85" width="60" height="3.07" fill="white"/>
      <rect width="24" height="21.54" fill="#3C3B6E"/>
    </svg>
  );
}

// Flag UK
function FlagUK() {
  return (
    <svg viewBox="0 0 60 40" className="w-24 h-16 rounded-lg shadow-md" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="40" fill="#012169"/>
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="white" strokeWidth="6"/>
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" strokeWidth="4"/>
      <path d="M30,0 V40 M0,20 H60" stroke="white" strokeWidth="10"/>
      <path d="M30,0 V40 M0,20 H60" stroke="#C8102E" strokeWidth="6"/>
    </svg>
  );
}

// Flag France
function FlagFR() {
  return (
    <svg viewBox="0 0 60 40" className="w-28 h-20 rounded-lg shadow-md" xmlns="http://www.w3.org/2000/svg">
      <rect width="20" height="40" fill="#002395"/>
      <rect x="20" width="20" height="40" fill="white"/>
      <rect x="40" width="20" height="40" fill="#ED2939"/>
    </svg>
  );
}

// Company icon
function IconEmpresa() {
  return (
    <svg viewBox="0 0 60 60" className="w-20 h-20" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="15" width="40" height="42" rx="2" fill="#94a3b8"/>
      <rect x="10" y="15" width="40" height="42" rx="2" fill="url(#grad)"/>
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#64748b"/>
          <stop offset="100%" stopColor="#475569"/>
        </linearGradient>
      </defs>
      <rect x="16" y="5" width="28" height="12" rx="1" fill="#475569"/>
      {[0,1,2].map(col => [0,1,2,3].map(row => (
        <rect key={`${col}-${row}`} x={16 + col*11} y={22 + row*10} width="7" height="6" rx="1" fill="#7dd3fc" opacity="0.9"/>
      )))}
      <rect x="24" y="45" width="12" height="12" rx="1" fill="#334155"/>
    </svg>
  );
}

export default async function CoursesGrid() {
  const t = await getTranslations("home");

  const mainCourses = [
    {
      id: "ingles",
      title: t("courseInglesTitle"),
      description: t("courseInglesDesc"),
      href: "/cursos/ingles" as const,
      borderColor: "#f87171",
      bgAccent: "rgba(248, 113, 113, 0.08)",
      icon: <div className="flex gap-2 items-center justify-center"><FlagUSA /><FlagUK /></div>,
    },
    {
      id: "frances",
      title: t("courseFrancesTitle"),
      description: t("courseFrancesDesc"),
      href: "/cursos/frances" as const,
      borderColor: "#60a5fa",
      bgAccent: "rgba(96, 165, 250, 0.08)",
      icon: <div className="flex items-center justify-center"><FlagFR /></div>,
    },
    {
      id: "ingles-empresa",
      title: t("courseEmpresaTitle"),
      description: t("courseEmpresaDesc"),
      href: "/cursos/ingles-empresa" as const,
      borderColor: "#f87171",
      bgAccent: "rgba(248, 113, 113, 0.08)",
      icon: <div className="flex items-center justify-center"><IconEmpresa /></div>,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-12"
          style={{ fontFamily: "var(--font-plus-jakarta)" }}
        >
          {t("coursesTitle")}
        </h2>

        <div className="grid sm:grid-cols-3 gap-6">
          {mainCourses.map((course) => (
            <div
              key={course.id}
              className="rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ border: `2px solid ${course.borderColor}`, backgroundColor: course.bgAccent }}
            >
              <div className="px-6 pt-6 pb-3">
                <h3 className="text-lg font-bold text-slate-900 mb-2" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                  {course.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{course.description}</p>
              </div>

              <div className="flex-1 flex items-center justify-center py-6 px-4">
                {course.icon}
              </div>

              <div className="px-6 pb-6">
                <Link
                  href={course.href}
                  className="flex items-center justify-center w-full py-3 bg-slate-900 hover:bg-slate-700 text-white font-bold text-sm rounded-full transition-all"
                >
                  {t("masInfo")}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
