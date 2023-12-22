import BulletNotes from "@src/components/BulletNotes";
import ContentLayout from "@src/components/ContentLayout";
import UoftIMG from "@public/images/headers/uoft.jpg";
import ArticleHeader from "@src/components/ArticleHeader";

export default function EducationPage() {
  return (
    <ContentLayout>
      <ArticleHeader
        src={UoftIMG}
        title="University of Toronto"
        subTitle="Graduating class of 2026"
      />
      <p className="text-sm">
        As a dedicated Computer Science student at the University of Toronto, my
        academic journey has been a dynamic exploration of both theoretical
        concepts and hands-on applications. The rigorous coursework,
        complemented by practical projects and collaborative endeavors, has
        equipped me with a comprehensive skill set essential for a career in
        computer science. Through coursework emphasizing algorithms, data
        structures, and software development methodologies, I have gained a deep
        understanding of the theoretical underpinnings of the field.
      </p>
      <p className="text-sm mt-5">
        Additionally, engaging in real-world projects, both individually and as
        part of a team, has allowed me to apply these concepts in practical
        scenarios, refining my problem-solving abilities and enhancing my coding
        proficiency.
      </p>
      <BulletNotes
        title="Related coursework"
        notes={[
          "Foundations of Computer Science I & II",
          "Software Design",
          "Theory of Computation",
          "Computer Organization & Programming",
          "Object-Oriented Programming",
          "Statistical Reasoning",
        ]}
      />
    </ContentLayout>
  );
}
