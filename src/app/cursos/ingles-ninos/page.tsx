import type { Metadata } from "next";
import CoursePageTemplate from "@/components/ui-custom/CoursePageTemplate";
import { courses } from "@/data/site";

export const metadata: Metadata = {
  title: "Inglés para Niños",
  description:
    "Curso de inglés para niños de 5 a 12 años con metodología lúdica en ICA Languages, Apizaco Tlaxcala.",
};

export default function InglesNinosPage() {
  const course = courses.find((c) => c.id === "ingles-ninos")!;
  return (
    <CoursePageTemplate
      title={course.title}
      subtitle={course.subtitle}
      description={course.description}
      icon={course.icon}
      color="amber"
      features={course.features}
      levels={course.levels}
    />
  );
}
