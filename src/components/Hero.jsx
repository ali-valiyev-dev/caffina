import { titles, subtitles } from "../../constants";
import SectionTitle from "./SectionTitle";
import SectionSubtitle from "./SectionSubtitle";
import CustomButton from "./CustomButton";

const Hero = () => {
  return (
    <section className="container">
      <div className="hero-main">
        <div className="hero-leftside">
          <SectionTitle title={titles[0]} />
          <SectionSubtitle subtitle={subtitles[0]} />

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

        <div className="images">
          <img
            className="absolute "
            src="/wavy-lines-1.svg"
            alt="wavy lines"
          />
          <img
            className="absolute "
            src="/hero-coffe-cup.svg"
            alt="coffee cup"
          />

          <img
            className="h-full w-full"
            src="/star-mark-1.svg"
            alt="star mark"
          />
        </div>
      </div>

      {/* <div className="">
        White Banner
      </div> */}
    </section>
  );
};

export default Hero;
