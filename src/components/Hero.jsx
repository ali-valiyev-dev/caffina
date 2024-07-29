import { titles, subtitles, stats } from "../../constants";
import SectionTitle from "./SectionTitle";
import SectionSubtitle from "./SectionSubtitle";
import CustomButton from "./CustomButton";
import {
  BreakPointHooks,
  breakpointsTailwind,
} from "@react-hooks-library/core";
import Statistic from "./Statistic";
import FeatureHighlights from "./FeatureHighlights";

const Hero = () => {
  const { useSmaller } = BreakPointHooks(breakpointsTailwind);
  const smallerThanDesktop = useSmaller("lg");

  return (
    <section className="bg-transparent pt-14 lg:pt-20 relative lg:px-10 xl:px-32">
      <div className="flex-col-reverse lg:flex-row flex lg:justify-between relative z-20">
        <div
          className="hero-text max-md:pl-6 max-lg:pt-7 max-md:pr-12 
        max-lg:pl-10 
        max-w-[574px] z-30">
          <SectionTitle title={titles[0]} />
          <div className="my-9 lg:my-14">
            <SectionSubtitle subtitle={subtitles[0]} />
          </div>

          <div className="flex gap-4">
            <CustomButton
              title="Select a coffee"
              width={222}
              widthMD={333}
              height={50}
              heightMD={75}
              titleSize={16}
              titleSizeMD={24}
            />
            <CustomButton
              title="More"
              width={113}
              widthMD={168}
              height={50}
              heightMD={75}
              titleSize={16}
              titleSizeMD={24}
              bgColor="#121517"
              borderColor="#dadada"
            />
          </div>

          <div className="flex items-center max-xl:justify-between xl:gap-12 mt-14 z-30">
            {stats.map((stat, index) => (
              <Statistic
                key={index}
                label={stat.label}
                total={stat.total}
              />
            ))}
          </div>
        </div>

        <div className="max-lg:mx-auto min-w-[271px] relative max-w-[472px] z-30">
          <img
            className="max-lg:px-16"
            src="/hero-coffee-cup.svg"
            alt="coffee cup"
          />

          {smallerThanDesktop ? (
            <img
              className="absolute -top-10 right-10 w-[170px]"
              src="/star-mark-1-mobile.svg"
              alt="star mark"
            />
          ) : (
            <img
              className="absolute -top-10 right-0"
              src="/star-mark-1-desktop.svg"
              alt="star mark"
            />
          )}
        </div>
      </div>

      <div className="relative z-30 flex justify-center items-center mt-16 lg:mt-28">
        <FeatureHighlights />
      </div>

      <img
        className="absolute z-10 -right-7 top-40 lg:right-0 lg:top-80"
        src="/wavy-lines-1.svg"
        alt="wavy lines"
      />
    </section>
  );
};

export default Hero;
