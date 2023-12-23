"use client";
import BulletNotes from "../../components/BulletNotes";
import ContentLayout from "../../components/ContentLayout";
import HockeyIMG from "../../../public/images/headers/hockey.jpg";
import ArticleHeader from "../../components/ArticleHeader";
import EmailForm from "../../components/EmailForm";
import TransitionEffect from "../../components/TransitionEffect";
import { useEffect, useState } from "react";

export default function AboutPage() {
  const [forceAnimation, setForceAnimation] = useState(false);

  // triggered once
  useEffect(() => {
    setForceAnimation(true);
  }, []);
  return (
    <>
      {forceAnimation ? <TransitionEffect /> : null}
      <ContentLayout>
        <ArticleHeader
          src={HockeyIMG}
          title="About me"
          subTitle="August 26, 2003"
        />
        <p className="text-sm">
          Welcome to my portfolio! I'm a 2003-born Computer Science student at
          the University of Toronto who loves coding and solving problems. As a
          semi-pro hockey player from Toronto, I bring teamwork and discipline
          from the ice to software development. I'm on a journey to become a
          software engineer, blending my academic studies, coding passion, and
          Toronto roots. Explore my portfolio to see how these elements come
          together!
        </p>
        <BulletNotes
          title="Awards and Honors"
          notes={[
            "George F. Dufton Post-Secondary Academic Scholarship Winner",
            "On UofT's Dean's List for aquiring a 3.84s GPA in first year",
            "Ontario Scholar Award for achieving a 96% average",
            "Honours Math Science and Technology Program Graduate",
          ]}
        />
        <h1 className="text-2xl font-bold mt-12">Lets get in touch</h1>
        <p className="text-grey text-xs mb-8">I love hearing from people </p>
        <EmailForm />
      </ContentLayout>
    </>
  );
}
