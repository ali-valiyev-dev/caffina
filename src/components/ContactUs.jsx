import { subtitles, titles } from "../../constants";
import SectionSubtitle from "./SectionSubtitle";
import SectionTitle from "./SectionTitle";
import ShowcaseImage from "./ShowcaseImage";

const ContactUs = () => {
  return (
    <section className="flex flex-col-reverse xl:flex-row justify-between relative px-10 xl:px-32 my-16 xl:my-32 max-lg:gap-12">
      <div className="xl:w-[390px] flex flex-col xl:gap-[72px] z-50">
        <SectionTitle title={titles[4]} />
        <div className="my-9 xl:my-0 ">
          <SectionSubtitle subtitle={subtitles[4]} />
        </div>

        <div className="text-white font-medium text-[32px] flex flex-col gap-5 xl:gap-7">
          <div className="flex items-center gap-2">
            <img
              className="w-10 xl:w-14"
              src="/instagram-icon.svg"
              alt="Instagram icon"
            />
            <span>@supercoffee</span>
          </div>

          <div className="flex items-center gap-2">
            <img
              className="w-10 xl:w-14 px-1 xl:px-[7px]"
              src="/phone-icon.svg"
              alt="Phone Icon"
            />
            <span>+7-999-999-99-99</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row-reverse md:justify-center xl:items-end gap-5 z-50">
        <ShowcaseImage
          mirror={true}
          imgSrc="/showcase-2.png"
        />

        <img
          className="sm:hidden"
          src="/star-mark-2.svg"
          alt="Star Mark"
          width={100}
          height={100}
        />
      </div>

      <img
        className="max-sm:hidden absolute top-40 right-0 z-10 "
        src="/wavy-lines-4-desktop.svg"
        alt="Decorative Wavy Lines"
      />
      <img
        className="sm:hidden absolute -top-10 right-0 z-10 "
        src="/wavy-lines-4-mobile.svg"
        alt="Decorative Wavy Lines"
      />
    </section>
  );
};

export default ContactUs;
