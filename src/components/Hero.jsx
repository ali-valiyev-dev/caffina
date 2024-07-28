import { titles, subtitles } from "../../constants";
import SectionTitle from "./SectionTitle";
import SectionSubtitle from "./SectionSubtitle";
import CustomButton from "./CustomButton";
import {
  BreakPointHooks,
  breakpointsTailwind,
} from "@react-hooks-library/core";

const Hero = () => {
  const { useSmaller } = BreakPointHooks(breakpointsTailwind);
  const smallerThanDesktop = useSmaller("lg");

  return (
    <section className="pt-14 lg:pt-20 relative lg:px-10 xl:px-32">
      <div className="hero-main flex-col-reverse lg:flex-row flex lg:justify-between">
        <div
          className="hero-text max-md:pl-6 max-lg:pt-7 max-md:pr-12 
        max-lg:pl-10 
        max-w-[574px] z-50">
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

          {/* <div className="">
            Stats
          </div> */}
        </div>

        <div className="max-lg:mx-auto min-w-[271px] relative max-w-[472px] z-20">
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

      {/* <div className="">
        White Banner
      </div> */}

      <img
        className="absolute -right-7 top-40 lg:right-0 lg:top-80"
        src="/wavy-lines-1.svg"
        alt="wavy lines"
      />
    </section>
  );
};

export default Hero;
