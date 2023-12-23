"use client";
import "../../styles/globals.css";
import BookSVG from "../../public/images/svgs/book.svg";
import UserSVG from "../../public/images/svgs/user.svg";
import ProjectSVG from "../../public/images/svgs/project.svg";
import InitialsLogo from "../../public/images/svgs/initials-logo.svg";
import BriefcaseSVG from "../../public/images/svgs/briefcase.svg";
import DevpostSVG from "../../public/images/svgs/devpost.svg";
import GithubSVG from "../../public/images/svgs/github.svg";
import LinkedinSVG from "../../public/images/svgs/linkedin.svg";
import ConstellationsSVG from "../../public/images/svgs/constellations.svg";
import DesktopRadialLightSVG from "../../public/images/svgs/desktop-radial-light.svg";
import MobileRadialLightSVG from "../../public/images/svgs/mobile-radial-light.svg";
import DownloadSVG from "../../public/images/svgs/download.svg";
import StyledExternalLink from "../components/StyledExternalLink";
import { ReactElement } from "react";
import RadioButton from "../components/RadioButton";
import { usePathname } from "next/navigation";
import { Links } from "../app/lib/LinksInterface";
import Link from "next/link";

const SocialLinks: Links[] = [
  {
    title: "Github",
    svg: <GithubSVG />,
    url: "https://github.com/ethanmcf",
  },
  {
    title: "Linkedin",
    svg: <LinkedinSVG />,
    url: "https://www.linkedin.com/in/ethanmcf/",
  },
  {
    title: "Devpost",
    svg: <DevpostSVG />,
    url: "https://devpost.com/ethanmcf?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav",
  },
];
const PageLinks: Links[] = [
  {
    title: "About",
    svg: <UserSVG />,
    url: "/",
  },
  {
    title: "Education",
    svg: <BookSVG />,
    url: "/education",
  },
  {
    title: "Experience",
    svg: <BriefcaseSVG />,
    url: "/experience",
  },
  {
    title: "Projects",
    svg: <ProjectSVG />,
    url: "/projects",
  },
];
export default function SplitLayout({ children }: { children?: ReactElement }) {
  const pathname = usePathname();

  return (
    <>
      <div className="lg:flex w-full overflow-x-hidden">
        <div
          className={
            "w-full lg:w-[calc(max(0rem,50%-34rem)+32rem)] bg-backgroundStart"
          }
        >
          <div className="relative lg:fixed flex w-full lg:mr-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] lg:overflow-y-auto lg:overflow-x-hidden lg:pl-[max(4rem,calc(50%-38rem))]">
            <div className="lg:absolute lg:inset-0 lg:-z-10 lg:overflow-hidden lg:right-[calc(max(0rem,50%-34rem)+32rem)] lg:min-w-[32rem]">
              <DesktopRadialLightSVG className="absolute -right-40 bottom-auto left-auto top-[-40%] h-[180%] w-[80rem] hidden lg:block" />
              <MobileRadialLightSVG className="absolute -bottom-48 left-[-40%] h-[80rem] w-[180%] block lg:hidden" />
            </div>
            <div className="mx-auto max-w-lg px-4 lg:px-0 lg:mx-0 lg:flex lg:h-screen lg:justify-end lg:w-[425px] lg:max-w-none lg:flex-col lg:before:flex-1 lg:before:pt-6">
              <div className="pb-16 pt-20 sm:pb-20 sm:pt-32 lg:py-20">
                <div className="relative">
                  <ConstellationsSVG
                    className="absolute -right-[100px] -top-[180px]"
                    style={{ rotate: "28deg", width: "800px" }}
                  />
                  <div className="flex items-center text-2xl font-semibold">
                    <InitialsLogo />
                    <h1 className="ml-4 mt-2 text-white">Ethan McFarland</h1>
                  </div>
                  <h1 className="mt-14 font-display text-4xl/tight font-extralight text-white">
                    Dedicated with a zeal for{" "}
                    <span className="text-blue">innovation and hard work</span>
                  </h1>
                  <p className="mt-4 text-sm/6 font-extralight text-white">
                    {"Balancing semi-pro hockey alongside pursuing Computer Science at U of T, " +
                      "I've honed time management skills, showcasing a passion for coding since " +
                      "age 15 and delivering enthusiasm and dedication to every project."}
                  </p>

                  <div className="mt-8 flex flex-wrap justify-center gap-y-3 sm:gap-x-2 lg:justify-start">
                    {PageLinks.map((link: Links, index: number) => (
                      <div key={index}>
                        <RadioButton
                          url={link.url}
                          svg={link.svg}
                          title={link.title}
                          active={pathname == link.url}
                        />
                      </div>
                    ))}
                  </div>
                  <div
                    className={
                      "relative mt-7 flex justify-center lg:justify-start"
                    }
                  >
                    <Link
                      className="relative px-4 py-2 overflow-hidden font-medium text-grey bg-white border border-white rounded-lg shadow-inner group"
                      download={true}
                      href={"/Resume.pdf"}
                    >
                      <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-grey group-hover:w-full ease" />
                      <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-grey group-hover:w-full ease" />
                      <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-grey group-hover:h-full ease" />
                      <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-grey group-hover:h-full ease" />
                      <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-backgroundEnd lg:bg-backgroundStart opacity-0 group-hover:opacity-100" />
                      <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease flex">
                        <span>Resume</span>
                        <DownloadSVG
                          className={"w-[20px] h-[20px] ml-2 mt-[1px]"}
                        />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 items-end justify-center pb-4 lg:pb-6">
                {SocialLinks.map((link: Links, index: number) => (
                  <div key={index}>
                    <StyledExternalLink
                      url={link.url}
                      svg={link.svg}
                      title={link.title}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
}
