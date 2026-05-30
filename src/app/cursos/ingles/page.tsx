import type { Metadata } from "next";
import CoursePageTemplate from "@/components/ui-custom/CoursePageTemplate";
import { courses } from "@/data/site";

export const metadata: Metadata = {
  title: "Curso de Inglés",
  description:
    "Aprende inglés con clases dinámicas, grupos pequeños y enfoque conversacional en ICA Languages, Apizaco Tlaxcala.",
};

export default function InglesPage() {
  const course = courses.find((c) => c.id === "ingles")!;
  return (
    <CoursePageTemplate
      title={course.title}
      subtitle={course.subtitle}
      description={course.description}
      icon={course.icon}
      color="blue"
      features={course.features}
      levels={course.levels}
    />
  );
}
