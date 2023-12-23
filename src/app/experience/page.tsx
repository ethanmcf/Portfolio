"use client";
import BulletNotes from "../../components/BulletNotes";
import ContentLayout from "../../components/ContentLayout";
import TangerineIMG from "../../../public/images/headers/tangerine.png";
import TileCoIncIMG from "../../../public/images/headers/tilecoinc.png";
import ArticleHeader from "../../components/ArticleHeader";
import TransitionEffect from "../../components/TransitionEffect";
import { useEffect, useState } from "react";
export default function ExperiencePage() {
  const [forceAnimation, setForceAnimation] = useState(false);
  // triggered once
  useEffect(() => {
    setForceAnimation(true);
  }, []);
  return (
    <>
      {forceAnimation ? <TransitionEffect /> : null}
      <ContentLayout>
        <TangerineExperience />
        <TileCoIncExperience />
      </ContentLayout>
    </>
  );
}
const TileCoIncExperience = () => {
  return (
    <>
      <ArticleHeader
        src={TileCoIncIMG}
        title="TileCo Inc"
        subTitle="May 2023 - August 2023"
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
        title="Skills developed"
        notes={[
          "Foundations of Computer Science I & II",
          "Software Design",
          "Theory of Computation",
          "Computer Organization & Programming",
          "Object-Oriented Programming",
          "Statistical Reasoning",
        ]}
      />
    </>
  );
};
const TangerineExperience = () => {
  return (
    <>
      <ArticleHeader
        src={TangerineIMG}
        title="Tangerine "
        subTitle="May 2023 - August 2023"
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
        title="Skills developed"
        notes={[
          "Foundations of Computer Science I & II",
          "Software Design",
          "Theory of Computation",
          "Computer Organization & Programming",
          "Object-Oriented Programming",
          "Statistical Reasoning",
        ]}
      />
    </>
  );
};
