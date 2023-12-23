"use client";
import AboutPage from "./about/page";
import getLoad from "./lib/getLoad";

export default async function Home() {
  // await getLoad();
  return (
    <>
      <AboutPage />
    </>
  );
}
