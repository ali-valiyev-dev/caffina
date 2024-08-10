import { useEffect } from "react";
import { subtitles, titles } from "../../constants";
import CustomButton from "./CustomButton";
import PulsingShadow from "./PulsingShadow";
import SectionSubtitle from "./SectionSubtitle";
import SectionTitle from "./SectionTitle";
import ShowcaseImage from "./ShowcaseImage";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    gsap.fromTo(
      ".animate-about-image",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".animate-about-image",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
    gsap.fromTo(
      ".animate-about-text",
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".animate-about-text",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section
      id="about"
      className="relative px-10 xl:px-32 py-8 xl:py-16 max-xl:gap-12 flex flex-col xl:flex-row xl:justify-between">
      <div className="animate-about-image relative z-30 flex justify-between md:justify-center items-center">
        <ShowcaseImage
          mirror={false}
          imgSrc="/interior-1.jpg"
        />

        <PulsingShadow position="bottom-40 left-40" />

        <img
          className="sm:hidden h-max"
          src="/beans-heart.png"
          alt=""
          aria-hidden="true"
          width={120}
          height={120}
        />
      </div>

      <div className="animate-about-text flex flex-col justify-center relative z-30 px-0 md:px-6 xl:px-0 lg:max-w-[457px]">
        <SectionTitle title={titles[1]} />
        <PulsingShadow position="top-40 right-40" />
        <div className="my-9 lg:my-14">
          <SectionSubtitle subtitle={subtitles[1]} />
        </div>

        <div className="relative flex items-center justify-center">
          <img
            src="/cooking-process.jpg"
            alt="Cooking Process"
          />

          <div className="absolute">
            <CustomButton title="&#9654; Cooking Process" />
          </div>
        </div>
      </div>

      <img
        className="max-sm:hidden absolute top-40 right-0 z-10 "
        src="/wavy-lines-2-desktop.svg"
        alt=""
        aria-hidden="true"
      />
      <img
        className="sm:hidden absolute -top-10 right-0 z-10 "
        src="/wavy-lines-2-mobile.svg"
        alt=""
        aria-hidden="true"
      />
    </section>
  );
};

export default About;
