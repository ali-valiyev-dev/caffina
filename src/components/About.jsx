import { subtitles, titles } from "../../constants";
import CustomButton from "./CustomButton";
import PulsingShadow from "./PulsingShadow";
import SectionSubtitle from "./SectionSubtitle";
import SectionTitle from "./SectionTitle";
import ShowcaseImage from "./ShowcaseImage";

const About = () => {
  return (
    <section
      id="about"
      className="borders relative px-10 xl:px-32 py-8 xl:py-16 max-lg:gap-12 flex flex-col lg:flex-row xl:justify-between">
      <div className="relative z-30 flex justify-between">
        <ShowcaseImage
          mirror={false}
          imgSrc="/showcase-1.png"
        />

        <PulsingShadow position="bottom-40 left-40" />

        <img
          className="sm:hidden"
          src="/star-mark-2.svg"
          alt="Star mark"
          width={100}
          height={100}
        />
      </div>

      <div className="flex flex-col justify-center relative z-30 px-0 md:px-6 xl:px-0 lg:max-w-[457px]">
        <SectionTitle title={titles[1]} />
        <PulsingShadow position="top-40 right-40" />
        <div className="my-9 lg:my-14">
          <SectionSubtitle subtitle={subtitles[1]} />
        </div>

        <div className="relative flex items-center justify-center">
          <img
            src="/bg-cooking-process.png"
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
        alt="Decorative Wavy Lines"
      />
      <img
        className="sm:hidden absolute -top-10 right-0 z-10 "
        src="/wavy-lines-2-mobile.svg"
        alt="Decorative Wavy Lines"
      />
    </section>
  );
};

export default About;
