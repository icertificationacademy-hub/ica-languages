import { getTranslations } from "next-intl/server";

export default async function WhyUs() {
  const t = await getTranslations("home");

  const photoCards = [
    { titleKey: "whyCard1" as const, image: "/images/profe1.jpeg", position: "center top" },
    { titleKey: "whyCard2" as const, image: "/images/agenda.jpg", position: "center center" },
    { titleKey: "whyCard3" as const, image: "/images/agenda2.jpeg", position: "center center" },
    { titleKey: "whyCard4" as const, image: "/images/agenda3.jpeg", position: "center center" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2
          className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-4"
          style={{ fontFamily: "var(--font-plus-jakarta)" }}
        >
          {t("whyTitle")}
        </h2>
        <p className="text-slate-600 text-center max-w-3xl mx-auto mb-10 text-base leading-relaxed">
          {t("whySubtitle")}
        </p>

        {/* Photo grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {photoCards.map((card) => (
            <div
              key={card.titleKey}
              className="relative rounded-2xl overflow-hidden aspect-[3/4] group cursor-default"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url('${card.image}')`,
                  backgroundPosition: card.position,
                }}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-bold text-base leading-tight drop-shadow-lg">
                  {t(card.titleKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
