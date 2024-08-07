import { subtitles, titles } from "../../constants";
import SectionSubtitle from "./SectionSubtitle";
import SectionTitle from "./SectionTitle";
import ShowcaseImage from "./ShowcaseImage";
import PulsingShadow from "./PulsingShadow";

const ContactUs = () => {
  return (
    <section
      id="contacts"
      className="borders flex flex-col-reverse xl:flex-row justify-between relative px-10 xl:px-32 py-8 xl:py-16 max-lg:gap-12">
      <div className="relative xl:w-[390px] flex flex-col xl:gap-[72px] z-50">
        <SectionTitle title={titles[4]} />
        <div className="my-9 xl:my-0">
          <SectionSubtitle subtitle={subtitles[4]} />
        </div>

        <div className="text-white font-medium text-[32px] flex flex-col gap-5 xl:gap-7">
          <div className="flex items-center gap-2">
            <img
              className="w-10 xl:w-14"
              src="/instagram-icon.svg"
              alt=""
            />
            <a
              href="#"
              rel="noopener noreferrer"
              className="hover:underline">
              @supercoffee
            </a>
          </div>

          <div className="flex items-center gap-2">
            <img
              className="w-10 xl:w-14 px-1 xl:px-[7px]"
              src="/phone-icon.svg"
              alt=""
            />
            <a
              href="tel:+79999999999"
              className="hover:underline">
              +7-999-999-99-99
            </a>
          </div>
        </div>

        <PulsingShadow position="top-40 left-40" />
      </div>

      <div className="relative flex flex-row-reverse md:justify-center xl:items-end gap-5 z-50">
        <ShowcaseImage
          mirror={true}
          imgSrc="/showcase-2.png"
        />

        <img
          className="sm:hidden"
          src="/star-mark-2.svg"
          alt=""
          width={100}
          height={100}
        />

        <PulsingShadow position="top-40 right-80" />
      </div>

      <img
        className="max-sm:hidden absolute top-40 right-0 z-10"
        src="/wavy-lines-4-desktop.svg"
        alt=""
      />
      <img
        className="sm:hidden absolute -top-10 right-0 z-10"
        src="/wavy-lines-4-mobile.svg"
        alt=""
      />
    </section>
  );
};

export default ContactUs;
