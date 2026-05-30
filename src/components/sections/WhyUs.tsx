const photoCards = [
  {
    title: "Maestros capacitados",
    /*
      IMAGEN: /images/why-maestros.jpg
      (foto de la maestra con saco negro)
    */
    image: "/images/why-maestros.jpg",
    placeholder: "bg-slate-400",
  },
  {
    title: "Flexibilidad de horarios",
    /*
      IMAGEN: /images/why-horarios.jpg
      (foto del calendario/agenda con pluma)
    */
    image: "/images/why-horarios.jpg",
    placeholder: "bg-slate-500",
  },
  {
    title: "Cursos variados",
    /*
      IMAGEN: /images/why-cursos.jpg
      (foto de alumna parada en el salón)
    */
    image: "/images/why-cursos.jpg",
    placeholder: "bg-slate-600",
  },
  {
    title: "Ambiente cómodo",
    /*
      IMAGEN: /images/why-ambiente.jpg
      (foto del salón de clases)
    */
    image: "/images/why-ambiente.jpg",
    placeholder: "bg-slate-700",
  },
];

export default function WhyUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <h2
          className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-4"
          style={{ fontFamily: "var(--font-plus-jakarta)" }}
        >
          ¿Por qué elegir ICA Languages?
        </h2>
        <p className="text-slate-600 text-center max-w-3xl mx-auto mb-10 text-base leading-relaxed">
          En ICA languages no solo aprendes un idioma, aprendes a usarlo. Nos enfocamos en
          una enseñanza práctica, cercana y efectiva, con maestros capacitados y un
          ambiente que motiva a crecer
        </p>

        {/* Grid de fotos */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {photoCards.map((card) => (
            <div
              key={card.title}
              className="relative rounded-2xl overflow-hidden aspect-[3/4] group"
            >
              {/*
                Fondo de imagen — cuando pongas la foto real, se verá automáticamente.
                Mientras tanto se muestra el color de placeholder.
              */}
              <div
                className={`absolute inset-0 ${card.placeholder} bg-cover bg-center transition-transform duration-500 group-hover:scale-105`}
                style={{ backgroundImage: `url('${card.image}')` }}
              />

              {/* Overlay gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Etiqueta inferior */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-bold text-base leading-tight drop-shadow-lg">
                  {card.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
