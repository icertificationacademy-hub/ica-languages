import type { Metadata } from "next";
import CoursePageTemplate from "@/components/ui-custom/CoursePageTemplate";
import { courses } from "@/data/site";

export const metadata: Metadata = {
  title: "Inglés para Empresa",
  description:
    "Capacitación corporativa en inglés para equipos de trabajo. Comunicación efectiva en negocios internacionales.",
};

export default function InglesEmpresaPage() {
  const course = courses.find((c) => c.id === "ingles-empresa")!;
  return (
    <CoursePageTemplate
      title={course.title}
      subtitle={course.subtitle}
      description={course.description}
      icon={course.icon}
      color="green"
      features={course.features}
      levels={course.levels}
    />
  );
}
