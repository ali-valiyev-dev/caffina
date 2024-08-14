import { useEffect } from "react";
import { subtitles, titles } from "../../constants";
import SectionSubtitle from "./SectionSubtitle";
import SectionTitle from "./SectionTitle";
import ShowcaseImage from "./ShowcaseImage";
import PulsingShadow from "./PulsingShadow";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { animateElements } from "../utils/Animations";

gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {
  useEffect(() => {
    animateElements([
      {
        selector: ".animate-contacts-image",
        from: { opacity: 0, x: -50 },
      },
      {
        selector: ".animate-contacts-text",
        from: { opacity: 0, x: 50 },
      },
    ]);
  }, []);

  return (
    <section
      id="contacts"
      className="flex flex-col-reverse xl:flex-row justify-between relative px-10 xl:px-32 py-8 xl:py-16 max-lg:gap-12">
      <div className="animate-contacts-image relative xl:w-[390px] flex flex-col xl:gap-[72px] z-50">
        <SectionTitle title={titles[4]} />
        <div className="my-9 xl:my-0">
          <SectionSubtitle subtitle={subtitles[4]} />
        </div>
        <div className="text-white font-medium text-xl xl:text-[32px] flex flex-col gap-5 xl:gap-7">
          <div className="flex items-center gap-2">
            <InstagramIcon
              className="text-cappuccino"
              style={{ fontSize: "1.2em" }}
            />
            <a
              href="#"
              rel="noopener noreferrer"
              className="hover:underline">
              @supercoffee
            </a>
          </div>
          <div className="flex items-center gap-2">
            <PhoneOutlinedIcon
              className="text-cappuccino"
              style={{ fontSize: "1.2em" }}
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

      <div className="animate-contacts-text relative flex flex-row-reverse md:justify-center xl:items-end gap-5 z-50">
        <ShowcaseImage
          mirror={true}
          imgSrc="/showcase-3.jpg"
        />
        <img
          className="sm:hidden h-max flex self-center"
          src="/beans-heart.png"
          alt=""
          aria-hidden="true"
          width={120}
          height={120}
        />
        <PulsingShadow position="top-40 right-80" />
      </div>

      <img
        className="max-sm:hidden absolute top-40 right-0 z-10"
        src="/wavy-lines-4-desktop.svg"
        alt=""
        aria-hidden="true"
      />
      <img
        className="sm:hidden absolute -top-10 right-0 z-10"
        src="/wavy-lines-4-mobile.svg"
        alt=""
        aria-hidden="true"
      />
    </section>
  );
};

export default ContactUs;
