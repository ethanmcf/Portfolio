"use client";
import BulletNotes from "../../components/BulletNotes";
import ContentLayout from "../../components/ContentLayout";
import TangerineIMG from "../../../public/images/headers/tangerine.jpg";
import TileCoIncIMG from "../../../public/images/headers/tilecoinc.jpg";
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
        subTitle="Web Designer"
      />
      <p className="text-sm">
        {" During my tenure at TileCo Inc as a Web Designer, I actively contributed to the development of the " +
          "company's web design, overseeing tasks such as managing image updates and introducing new products. " +
          "In this role, I played a crucial part in maintaining the visual integrity of the web application by " +
          "consistently executing essential updates. Additionally, I facilitated the seamless introduction of " +
          "new products, ensuring a user-friendly and visually appealing online experience for customers."}
      </p>
      <p className="text-sm mt-5">
        This experience not only honed my skills in web design but also taught
        me the importance of proactive maintenance and the seamless integration
        of new features to enhance the overall user experience.
      </p>
      <BulletNotes
        title="Skills developed"
        notes={["Web Design", "Word Press"]}
      />
    </>
  );
};
const TangerineExperience = () => {
  return (
    <>
      <ArticleHeader
        src={TangerineIMG}
        title="Tangerine"
        subTitle="Quality Engineer"
      />
      <p className="text-sm">
        During my internship at Tangerine as a Quality Engineering Intern, I
        played a pivotal role in the regression team, ensuring the consistency
        and stability of software post-updates for mobile and web applications.
        I developed TypeScript scripts to expand test coverage and improve user
        interface functionality across both platforms.
      </p>
      <p className="text-sm mt-5">
        Noteworthy achievements during this period include the revitalization of
        the Selenium WebDriver implementation, boosting the speed of mobile web
        testing execution by over 25% and significantly benefiting offshore
        teams and remote employees. I also successfully presented enhanced
        Selenium WebDriver updates to senior management. Additionally, I
        developed Java scripts that accelerated the migration of API test
        scripts from Postman to Eclipse, markedly reducing the workload on my
        team and streamlining the transition process.
      </p>
      <p className="text-sm mt-5">
        This internship has equipped me with valuable skills in quality
        engineering, scripting, and project management, emphasizing the
        importance of innovation and efficiency in software testing.
      </p>
      <BulletNotes
        title="Skills developed"
        notes={[
          "Quality Assurance",
          "Agile Methodologies",
          "Jira",
          "Bug Tracking",
          "TypeScript",
          "Git",
        ]}
      />
    </>
  );
};
