import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { titles, subtitles, stats } from "../../constants";
import SectionTitle from "./SectionTitle";
import SectionSubtitle from "./SectionSubtitle";
import CustomButton from "./CustomButton";
import Statistic from "./Statistic";
import PulsingShadow from "./PulsingShadow";
import { animateElements } from "../utils/Animations";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useEffect(() => {
    animateElements([
      {
        selector: ".animate-hero-text",
        from: { opacity: 0, x: -50 },
      },
      {
        selector: ".animate-hero-stats",
        from: { opacity: 0, x: -50 },
      },
      {
        selector: ".animate-hero-img",
        from: { opacity: 0, x: 50 },
      },
    ]);
  }, []);

  return (
    <section
      id="hero"
      className="relative bg-transparent py-10 lg:py-20 lg:px-10 xl:px-32">
      <div className="relative flex flex-col lg:flex-row lg:justify-between z-20">
        {/* Text and Buttons */}
        <div className="animate-hero-text max-w-[574px] px-6 lg:px-10 pt-7 lg:pt-0 z-30">
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

          <div className="animate-hero-stats flex items-center mt-9 xl:mt-14 gap-12 z-30">
            {stats.map(({ label, total }, index) => (
              <Statistic
                key={index}
                label={label}
                total={total}
              />
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="animate-hero-img relative max-lg:mx-auto lg:w-[630px] z-30">
          <img
            className="hidden lg:block w-full"
            src="/coffee-beans.png"
            alt="Coffee Beans"
          />
          <PulsingShadow position="top-40 right-40" />
        </div>
      </div>

      {/* Background Decoration */}
      <img
        className="hidden lg:block absolute right-0 top-40 z-10"
        src="/wavy-lines-1.svg"
        alt="Decorative Wavy Lines"
        aria-hidden="true"
      />
    </section>
  );
};

export default Hero;
