// Datos centrales del sitio ICA Languages
// Edita este archivo para actualizar contenido en todo el sitio

export const siteConfig = {
  name: "ICA Languages",
  tagline: "¡Aprende inglés con confianza!",
  description:
    "Clases prácticas, grupos pequeños y enfoque conversacional en Apizaco, Tlaxcala.",
  url: "https://icalanguages.com.mx",
  email: "ventas@icalanguage.com.mx",
  phone: "+52 241 155 7424",
  whatsapp: "5212411557424",
  address: "Av Juárez 412, Centro, 90300 Apizaco, Tlaxcala",
  campus: "https://campus.icalanguages.com.mx/login",
  social: {
    facebook: "https://facebook.com/icalanguages",
    instagram: "https://instagram.com/ica_languages",
    tiktok: "https://tiktok.com/@ica_languages",
    youtube: "https://youtube.com/@icalanguages",
  },
};

export const stats = [
  { value: 4, suffix: "", label: "Idiomas" },
  { value: 95, suffix: "%", label: "Éxito" },
  { value: 80, suffix: "+", label: "Estudiantes" },
];

export const navLinks = [
  { label: "Inicio", href: "/" },
  {
    label: "Cursos",
    href: "/cursos",
    children: [
      { label: "Inglés", href: "/cursos/ingles" },
      { label: "Inglés para Niños", href: "/cursos/ingles-ninos" },
      { label: "Francés", href: "/cursos/frances" },
      { label: "Inglés para Empresa", href: "/cursos/ingles-empresa" },
    ],
  },
  {
    label: "Certificaciones",
    href: "/certificaciones",
    children: [
      { label: "Cambridge", href: "/certificaciones/cambridge" },
      { label: "Alianza Francesa", href: "/certificaciones/alianza-francesa" },
      {
        label: "Constancia de Nivel",
        href: "/certificaciones/constancia-de-nivel",
      },
    ],
  },
  {
    label: "Nosotros",
    href: "/nosotros",
    children: [
      { label: "Quiénes Somos", href: "/nosotros" },
      { label: "Únete al Equipo", href: "/nosotros/unete-al-equipo" },
    ],
  },
];

export const courses = [
  {
    id: "ingles",
    title: "Inglés",
    subtitle: "Domina el idioma global",
    description:
      "Clases dinámicas con niveles bien estructurados y enfoque comunicativo. Aprende a hablar inglés con confianza desde tu primera clase.",
    href: "/cursos/ingles",
    icon: "🇺🇸",
    color: "blue",
    features: [
      "Grupos pequeños de máximo 8 personas",
      "Enfoque 100% conversacional",
      "Materiales incluidos",
      "Horarios flexibles AM / PM",
      "Niveles: Básico, Intermedio, Avanzado",
    ],
    levels: ["Básico A1-A2", "Intermedio B1-B2", "Avanzado C1-C2"],
  },
  {
    id: "ingles-ninos",
    title: "Inglés para Niños",
    subtitle: "El mejor momento para aprender",
    description:
      "Metodología lúdica diseñada para niños de 5 a 12 años. Aprendizaje natural a través de juegos, canciones y actividades interactivas.",
    href: "/cursos/ingles-ninos",
    icon: "👶",
    color: "amber",
    features: [
      "Para niños de 5 a 12 años",
      "Metodología lúdica y divertida",
      "Grupos por edad y nivel",
      "Material didáctico incluido",
      "Seguimiento personalizado",
    ],
    levels: ["Starter (5-7 años)", "Movers (8-10 años)", "Flyers (11-12 años)"],
  },
  {
    id: "frances",
    title: "Francés",
    subtitle: "La lengua del arte y la cultura",
    description:
      "Descubre la belleza del idioma francés con una metodología inmersiva. Conecta con la cultura francesa y abre puertas a Europa.",
    href: "/cursos/frances",
    icon: "🇫🇷",
    color: "purple",
    features: [
      "Profesores nativos certificados",
      "Enfoque cultural e inmersivo",
      "Preparación para Alianza Francesa",
      "Conversación desde el día uno",
      "Material audiovisual incluido",
    ],
    levels: ["Débutant A1-A2", "Intermédiaire B1-B2", "Avancé C1-C2"],
  },
  {
    id: "ingles-empresa",
    title: "Inglés para Empresa",
    subtitle: "Potencia tu equipo de trabajo",
    description:
      "Entrenamiento lingüístico personalizado para equipos corporativos. Comunicación efectiva en reuniones, presentaciones y negociaciones internacionales.",
    href: "/cursos/ingles-empresa",
    icon: "💼",
    color: "green",
    features: [
      "Capacitación in-company o en nuestras aulas",
      "Temario adaptado a tu industria",
      "Inglés de negocios y negociación",
      "Grupos privados por empresa",
      "Reportes de avance mensuales",
    ],
    levels: ["Comunicación básica", "Reuniones y presentaciones", "Negociación avanzada"],
  },
];

export const certifications = [
  {
    id: "cambridge",
    title: "Cambridge",
    subtitle: "Reconocimiento mundial",
    description:
      "Certifica tu nivel de inglés con el respaldo de la Universidad de Cambridge, reconocida en más de 130 países.",
    href: "/certificaciones/cambridge",
    icon: "🎓",
    exams: ["KET (A2)", "PET (B1)", "FCE (B2)", "CAE (C1)", "CPE (C2)"],
  },
  {
    id: "alianza-francesa",
    title: "Alianza Francesa",
    subtitle: "Certificación oficial en francés",
    description:
      "Obtén tu diploma oficial de francés reconocido en todo el mundo con el respaldo de la Alianza Francesa.",
    href: "/certificaciones/alianza-francesa",
    icon: "🏅",
    exams: ["DELF A1", "DELF A2", "DELF B1", "DELF B2", "DALF C1", "DALF C2"],
  },
  {
    id: "constancia-de-nivel",
    title: "Constancia de Nivel",
    subtitle: "Acredita tu conocimiento",
    description:
      "Obtén una constancia oficial de ICA Languages que acredita tu nivel de idioma para trámites académicos y laborales.",
    href: "/certificaciones/constancia-de-nivel",
    icon: "📜",
    exams: ["Evaluación escrita", "Evaluación oral", "Comprensión auditiva"],
  },
];

export const testimonials = [
  {
    name: "María Fernanda Gutiérrez",
    role: "Estudiante de inglés",
    text: "ICA Languages cambió mi manera de ver el inglés. Los maestros son increíbles y el ambiente hace que aprender sea muy natural.",
    rating: 5,
    avatar: "MF",
  },
  {
    name: "José Antonio",
    role: "Inglés para empresa",
    text: "Gracias a ICA Languages pude comunicarme con mis clientes extranjeros. El curso corporativo está muy bien estructurado.",
    rating: 5,
    avatar: "JA",
  },
  {
    name: "Luis Ángel Hernández",
    role: "Certificación Cambridge",
    text: "Aprobé mi FCE de Cambridge gracias a la preparación que recibí aquí. Muy profesionales y dedicados a cada alumno.",
    rating: 5,
    avatar: "LH",
  },
  {
    name: "Estefany Aquino",
    role: "Curso de francés",
    text: "Empecé francés sin saber nada y en 6 meses ya podía mantener conversaciones básicas. Los grupos pequeños hacen toda la diferencia.",
    rating: 5,
    avatar: "EA",
  },
  {
    name: "Carlos Mendoza",
    role: "Inglés para niños",
    text: "Mi hijo lleva 8 meses y su progreso es increíble. Aprende jugando y siempre quiere ir a sus clases.",
    rating: 5,
    avatar: "CM",
  },
];

export const whyUs = [
  {
    title: "Maestros Capacitados",
    description:
      "Profesores certificados con metodología moderna y experiencia comprobada en la enseñanza de idiomas.",
    icon: "GraduationCap",
  },
  {
    title: "Flexibilidad de Horarios",
    description:
      "Horarios matutinos, vespertinos y nocturnos para que aprendas sin interrumpir tu rutina.",
    icon: "Clock",
  },
  {
    title: "Cursos Variados",
    description:
      "Inglés, francés, inglés para niños y cursos corporativos. Un idioma para cada meta.",
    icon: "BookOpen",
  },
  {
    title: "Ambiente Cómodo",
    description:
      "Instalaciones modernas y acogedoras en el centro de Apizaco, pensadas para el aprendizaje.",
    icon: "Home",
  },
];

export const partners = ["Galia", "Gobierno Municipal", "Morena"];
