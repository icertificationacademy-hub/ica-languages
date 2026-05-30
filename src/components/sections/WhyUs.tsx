const photoCards = [
  {
    title: "Maestros capacitados",
    image: "/images/profe1.jpeg",
    position: "center top",
  },
  {
    title: "Flexibilidad de horarios",
    image: "/images/agenda.jpg",
    position: "center center",
  },
  {
    title: "Cursos variados",
    image: "/images/agenda2.jpeg",
    position: "center center",
  },
  {
    title: "Ambiente cómodo",
    image: "/images/agenda3.jpeg",
    position: "center center",
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
              className="relative rounded-2xl overflow-hidden aspect-[3/4] group cursor-default"
            >
              {/* Imagen de fondo */}
              <div
                className="absolute inset-0 bg-cover transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url('${card.image}')`,
                  backgroundPosition: card.position,
                }}
              />

              {/* Overlay gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

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
