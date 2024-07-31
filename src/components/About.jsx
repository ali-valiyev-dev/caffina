import { subtitles, titles } from "../../constants";
import CustomButton from "./CustomButton";
import SectionSubtitle from "./SectionSubtitle";
import SectionTitle from "./SectionTitle";
import ShowcaseImage from "./ShowcaseImage";

const About = () => {
  return (
    <section className="relative px-10 xl:px-32 mt-16 xl:mt-32 max-lg:gap-12 flex flex-col lg:flex-row xl:justify-between">
      <div className="leftside relative z-30 flex justify-between">
        <ShowcaseImage
          mirror={false}
          imgSrc="/showcase-1.png"
        />

        <img
          className={"sm:hidden"}
          src="/star-mark-2.svg"
          alt="Star mark"
          width={100}
          height={100}
        />
      </div>

      <div className="rightside flex flex-col justify-center relative z-30 px-0 md:px-6 xl:px-0 lg:max-w-[457px]">
        <SectionTitle title={titles[1]} />
        <div className="my-9 lg:my-14">
          <SectionSubtitle subtitle={subtitles[1]} />
        </div>

        <div className="relative flex items-center justify-center">
          <img
            src="/bg-cooking-process.png"
            alt="Cooking Process"
          />

          <div className="absolute">
            <CustomButton
              title="&#9654; Cooking Process"
              width={222}
              widthMD={333}
              height={50}
              heightMD={75}
              titleSize={16}
              titleSizeMD={24}
            />
          </div>
        </div>
      </div>

      <img
        className="max-sm:hidden absolute top-0 right-0 z-10 "
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
