import { titles, subtitles, stats } from "../../constants";
import SectionTitle from "./SectionTitle";
import SectionSubtitle from "./SectionSubtitle";
import CustomButton from "./CustomButton";
import Statistic from "./Statistic";
import FeatureHighlights from "./FeatureHighlights";

const Hero = () => {
  return (
    <section className="relative bg-transparent mt-10 lg:mt-20 lg:px-10 xl:px-32">
      <div className="relative flex flex-col-reverse lg:flex-row lg:justify-between z-20">
        <div className="max-w-[574px] max-md:pl-6 max-md:pr-12 max-lg:pt-7 max-lg:pl-10 z-30">
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

        <div className="relative max-lg:mx-auto min-w-[271px] max-w-[472px] z-30">
          <img
            className="max-lg:px-16"
            src="/hero-coffee-cup.svg"
            alt="Coffee Cup"
          />

          <img
            className="absolute -top-10 right-10 w-[170px] lg:hidden"
            src="/star-mark-1-mobile.svg"
            alt=""
          />
          <img
            className="absolute -top-10 right-0 hidden lg:block"
            src="/star-mark-1-desktop.svg"
            alt=""
          />
        </div>
      </div>

      <div className="relative flex justify-center items-center mt-16 lg:mt-28 z-30">
        <FeatureHighlights />
      </div>

      <img
        className="absolute z-10 -right-7 top-40 lg:right-0 lg:top-80"
        src="/wavy-lines-1.svg"
        alt=""
      />
    </section>
  );
};

export default Hero;
