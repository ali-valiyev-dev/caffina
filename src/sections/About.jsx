import { useEffect } from "react";
import { subtitles, titles } from "../../constants";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { animateElements } from "../utils/Animations";
import {
  SectionSubtitle,
  SectionTitle,
  ShowcaseImage,
  CustomButton,
} from "../common";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    animateElements([
      {
        selector: ".animate-about-image",
        from: { opacity: 0, x: -50 },
      },
      {
        selector: ".animate-about-text",
        from: { opacity: 0, x: 50 },
      },
    ]);
  }, []);

  return (
    <section
      id="about"
      className="relative px-6 lg:px-10 xl:px-32 py-8 xl:py-16 max-xl:gap-12 flex flex-col xl:flex-row xl:justify-between">
      <div className="animate-about-image relative z-30 flex justify-between md:justify-center items-center">
        <ShowcaseImage
          mirror={false}
          imgSrc="/interior-1.jpg"
        />
        <img
          className="sm:hidden h-max"
          src="/beans-heart.png"
          alt=""
          aria-hidden="true"
          width={120}
          height={120}
        />
      </div>

      <div className="animate-about-text flex flex-col justify-center relative z-30 xl:px-0 xl:max-w-[457px]">
        <SectionTitle title={titles[1]} />
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
