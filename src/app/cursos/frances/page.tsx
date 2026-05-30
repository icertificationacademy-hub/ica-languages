import type { Metadata } from "next";
import CoursePageTemplate from "@/components/ui-custom/CoursePageTemplate";
import { courses } from "@/data/site";

export const metadata: Metadata = {
  title: "Curso de Francés",
  description:
    "Aprende francés con enfoque cultural e inmersivo. Preparación para Alianza Francesa en ICA Languages, Apizaco.",
};

export default function FrancesPage() {
  const course = courses.find((c) => c.id === "frances")!;
  return (
    <CoursePageTemplate
      title={course.title}
      subtitle={course.subtitle}
      description={course.description}
      icon={course.icon}
      color="purple"
      features={course.features}
      levels={course.levels}
    />
  );
}
