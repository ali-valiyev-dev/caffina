import { titles, subtitles, stats } from "../../constants";
import SectionTitle from "./SectionTitle";
import SectionSubtitle from "./SectionSubtitle";
import CustomButton from "./CustomButton";
import Statistic from "./Statistic";
import PulsingShadow from "./PulsingShadow";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useEffect(() => {
    gsap.fromTo(
      ".animate-hero",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".animate-hero",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section
      id="hero"
      className="relative bg-transparent py-10 lg:py-20 lg:px-10 xl:px-32">
      <div className="animate-hero relative flex flex-col lg:flex-row lg:justify-between z-20">
        <div className=" max-w-[574px] max-md:pl-6 max-md:pr-12 max-lg:pt-7 max-lg:pl-10 z-30">
          <SectionTitle title={titles[0]} />
          <PulsingShadow position="top-25 left-20" />

          <div className="my-9 lg:my-14">
            <SectionSubtitle subtitle={subtitles[0]} />
          </div>
          <div className="flex gap-4">
            <CustomButton title="Select a coffee" />
            <CustomButton
              title="More"
              bgColor="#121416"
              borderColor="#FFF2E5"
            />
          </div>
          <div className="flex items-center mt-9 xl:mt-14 max-xl:justify-between xl:gap-12 z-30">
            {stats.map(({ label, total }, index) => (
              <Statistic
                key={index}
                label={label}
                total={total}
              />
            ))}
          </div>
        </div>

        <div className="  relative max-lg:mx-auto lg:w-[630px] xl:w-[630px] z-30">
          <img
            className="max-lg:px-16 hidden lg:flex"
            src="/coffee-beans.png"
            alt="Coffee Beans"
          />

          <PulsingShadow position="top-40 right-40" />
        </div>
      </div>

      <img
        className="hidden lg:flex absolute z-10 right-0 top-40"
        src="/wavy-lines-1.svg"
        alt=""
        aria-hidden="true"
      />
    </section>
  );
};

export default Hero;
