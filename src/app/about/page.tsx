"use client";
import BulletNotes from "../../components/BulletNotes";
import ContentLayout from "../../components/ContentLayout";
import HockeyIMG from "../../../public/images/headers/hockey.jpg";
import ArticleHeader from "../../components/ArticleHeader";
import EmailForm from "../../components/EmailForm";
import TransitionEffect from "../../components/TransitionEffect";
import getLoad from "../lib/getLoad";

export default async function AboutPage() {
  // await getLoad();
  return (
    <>
      <TransitionEffect />
      <ContentLayout>
        <ArticleHeader
          src={HockeyIMG}
          title="About me"
          subTitle="August 26, 2003"
        />
        <p className="text-sm">
          As a dedicated Computer Science student at the University of Toronto,
          my academic journey has been a dynamic exploration of both theoretical
          concepts and hands-on applications. The rigorous coursework,
          complemented by practical projects and collaborative endeavors, has
          equipped me with a comprehensive skill set essential for a career in
          computer science. Through coursework emphasizing algorithms, data
          structures, and software development methodologies, I have gained a
          deep understanding of the theoretical underpinnings of the field.
        </p>
        <p className="text-sm mt-5">
          Additionally, engaging in real-world projects, both individually and
          as part of a team, has allowed me to apply these concepts in practical
          scenarios, refining my problem-solving abilities and enhancing my
          coding proficiency.
        </p>
        <BulletNotes
          title="Awards"
          notes={[
            "Foundations of Computer Science I & II",
            "Software Design",
            "Theory of Computation",
            "Computer Organization & Programming",
            "Object-Oriented Programming",
            "Statistical Reasoning",
          ]}
        />
        <h1 className="text-2xl font-bold mt-12">Lets get in touch</h1>
        <p className="text-grey text-xs mb-8">I love hearing from people </p>
        <EmailForm />
      </ContentLayout>
    </>
  );
}
