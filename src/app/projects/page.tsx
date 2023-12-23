"use client";
import BulletNotes from "../../components/BulletNotes";
import ContentLayout from "../../components/ContentLayout";
import ArticleHeader from "../../components/ArticleHeader";
import TransitionEffect from "../../components/TransitionEffect";
import { useEffect, useState } from "react";
import Connect4IMG from "../../../public/images/headers/connect4.jpg";
import MedicalIMG from "../../../public/images/headers/medical.jpg";
import TriviaIMG from "../../../public/images/headers/trivia.jpg";

export default function ProjectsPage() {
  const [forceAnimation, setForceAnimation] = useState(false);

  // triggered once
  useEffect(() => {
    setForceAnimation(true);
  }, []);
  return (
    <>
      {forceAnimation ? <TransitionEffect /> : null}
      <ContentLayout>
        <MedicalClinicProject />
        <MusicTriviaProject />
        <Connect4Project />
      </ContentLayout>
    </>
  );
}
const MedicalClinicProject = () => {
  return (
    <>
      <ArticleHeader
        src={MedicalIMG}
        title="Medical Clinic Wait Time Monitoring"
        subTitle="Team lead"
      />
      <p className="text-sm">
        I spearheaded the development of a real-time patient flow control
        website, seamlessly combining design and functionality. Using Figma, I
        crafted an intuitive user interface, while leveraging React.js for the
        development phase and Firebase for efficient data collection and user
        authentication. The integration of Jira Kanban Board allowed for
        effective task assignment within the team, fostering a streamlined
        development process. To ensure clarity and organization, I consistently
        updated a Confluence page for thorough code documentation, emphasizing
        the importance of clear communication and documentation in the
        development lifecycle.
      </p>
      <p className="text-sm mt-5">
        This project not only showcased my proficiency in web development but
        also highlighted my commitment to creating user-friendly and
        well-documented solutions in a collaborative environment.
      </p>
      <BulletNotes
        title="Skills developed"
        notes={["Web Design", "Word Press"]}
      />
    </>
  );
};
const MusicTriviaProject = () => {
  return (
    <>
      <ArticleHeader
        src={TriviaIMG}
        title="Music-Trivia"
        subTitle="Team member"
      />
      <p className="text-sm">
        I collaborated with classmates to implement test-driven development
        principles in the construction of a music-guessing trivia game using
        Java, SQLite, JUnit, and Clean Architecture. This project not only
        provided a hands-on experience in software development but also
        emphasized the importance of systematic testing and modular, clean code
        organization. Working as a team allowed us to leverage our collective
        skills and insights, contributing to the successful creation of a robust
        and engaging trivia game. This experience highlighted the significance
        of collaboration, efficient coding practices, and the implementation of
        testing methodologies in software development projects.
      </p>
      <BulletNotes
        title="Skills developed"
        notes={[
          "Java",
          "Test-Driven Development",
          "JUnit",
          "Collaborative coding",
        ]}
      />
    </>
  );
};
const Connect4Project = () => {
  return (
    <>
      <ArticleHeader
        src={Connect4IMG}
        title="Connect 4 AI"
        subTitle="Team lead"
      />
      <p className="text-sm">
        Collaborating within a group, I contributed heavily in the development
        of a Connect Four AI using Python, incorporating graphs, decision trees,
        and pygame for the graphical user interface. This project highlighted
        collective skills in algorithmic design and implementation, as well as
        the ability to integrate advanced AI techniques into an interactive
        interface using pygame. The Connect Four AI served as a testament to
        collaborative efforts, showcasing teamwork in crafting a solution that
        seamlessly combined strategic thinking with user-friendly design.
      </p>
      <BulletNotes
        title="Skills developed"
        notes={["Python", "PyGame", "Data structures"]}
      />
    </>
  );
};
