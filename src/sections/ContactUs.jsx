import { useEffect } from "react";
import { subtitles, titles } from "/constants";
import { Icon } from "@iconify/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { animateElements } from "../utils/Animations";
import { SectionSubtitle, SectionTitle, ShowcaseImage } from "../common";

gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {
  useEffect(() => {
    animateElements([
      {
        selector: ".animate-contacts-image",
        from: { opacity: 0, x: -20 },
      },
      {
        selector: ".animate-contacts-text",
        from: { opacity: 0, x: 20 },
      },
    ]);
  }, []);

  return (
    <section
      id="contacts"
      className="flex flex-col-reverse xl:flex-row justify-between relative px-6 lg:px-10 xl:px-32 py-14 xl:py-16 max-lg:gap-12">
      <div className="animate-contacts-image relative xl:w-[390px] flex flex-col xl:gap-[72px] z-50">
        <SectionTitle title={titles[4]} />
        <div className="my-9 xl:my-0">
          <SectionSubtitle subtitle={subtitles[4]} />
        </div>
        <div className=" font-medium text-xl xl:text-[32px] flex flex-col gap-5 xl:gap-7 text-cappuccino">
          <div className="flex items-center gap-2">
            <Icon
              icon="mdi:instagram"
              width={32}
              height={32}
            />
            <a
              href="#"
              rel="noopener noreferrer"
              className="hover:underline text-white">
              @supercoffee
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Icon
              icon="mdi:phone"
              width={32}
              height={32}
            />
            <a
              href="tel:+79999999999"
              className="hover:underline text-white">
              +7-999-999-99-99
            </a>
          </div>
        </div>
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
