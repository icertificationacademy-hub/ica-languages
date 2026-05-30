import Link from "next/link";

const mainCourses = [
  {
    id: "ingles",
    title: "Curso de inglés",
    description:
      "Clases dinámicas, niveles bien estructurados y enfoque comunicativo. Aprende a expresarte con seguridad en inglés.",
    href: "/cursos/ingles",
    /*
      IMAGEN: /images/course-ingles.png (banderas USA+UK mezcladas, como en el original)
      O usa el emoji de placeholder
    */
    image: "/images/course-ingles.png",
    placeholder: "🇺🇸🇬🇧",
    borderColor: "#f87171", // rosa/rojo suave
    bgAccent: "rgba(248, 113, 113, 0.08)",
  },
  {
    id: "frances",
    title: "Curso de Francés",
    description:
      "Conecta con la cultura francesa mientras aprendes el idioma de forma práctica y divertida.",
    href: "/cursos/frances",
    image: "/images/course-frances.png",
    placeholder: "🇫🇷",
    borderColor: "#60a5fa", // azul
    bgAccent: "rgba(96, 165, 250, 0.08)",
  },
  {
    id: "ingles-empresa",
    title: "Inglés para Empresa",
    description:
      "Entrenamiento lingüístico para equipos de trabajo. Contenido adaptado a tu giro empresarial y metas profesionales.",
    href: "/cursos/ingles-empresa",
    image: "/images/course-empresa.png",
    placeholder: "🏢",
    borderColor: "#f87171",
    bgAccent: "rgba(248, 113, 113, 0.08)",
  },
];

export default function CoursesGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <h2
          className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-12"
          style={{ fontFamily: "var(--font-plus-jakarta)" }}
        >
          Tu próximo idioma comienza aquí
        </h2>

        {/* Cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {mainCourses.map((course) => (
            <div
              key={course.id}
              className="rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{
                border: `2px solid ${course.borderColor}`,
                backgroundColor: course.bgAccent,
              }}
            >
              {/* Título */}
              <div className="px-6 pt-6 pb-3">
                <h3
                  className="text-lg font-bold text-slate-900 mb-2"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  {course.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {course.description}
                </p>
              </div>

              {/*
                IMAGEN DEL CURSO — cuando tengas las imágenes, ponlas en /public/images/
                Por ahora muestra el placeholder emoji grande
              */}
              <div className="flex-1 flex items-center justify-center py-6 px-4">
                <div
                  className="w-32 h-32 rounded-full bg-cover bg-center bg-no-repeat flex items-center justify-center text-6xl"
                  style={{ backgroundImage: `url('${course.image}')` }}
                >
                  {/* Se muestra sólo si la imagen no carga */}
                  <span role="img" aria-label={course.title}>
                    {course.placeholder}
                  </span>
                </div>
              </div>

              {/* CTA */}
              <div className="px-6 pb-6">
                <Link
                  href={course.href}
                  className="flex items-center justify-center w-full py-3 bg-slate-900 hover:bg-slate-700 text-white font-bold text-sm rounded-full transition-all"
                >
                  Más información
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
