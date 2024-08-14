import { events, subtitles, titles } from "../../constants";
import EventItem from "./EventItem";
import SectionSubtitle from "./SectionSubtitle";
import SectionTitle from "./SectionTitle";
import PulsingShadow from "./PulsingShadow";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { animateElements } from "../utils/Animations";

gsap.registerPlugin(ScrollTrigger);

const Events = () => {
  useEffect(() => {
    animateElements([
      {
        selector: ".animate-contacts-title",
        from: { opacity: 0, x: -1000 },
      },
      {
        selector: ".animate-events-first-row",
        from: { opacity: 0, x: 1000 },
      },
      {
        selector: ".animate-events-second-row",
        from: { opacity: 0, x: -1000 },
      },
    ]);
  }, []);

  const getColSpanClass = index => {
    if (index === events.length - 1) {
      return "col-span-6 xl:col-span-2 animate-events-second-row";
    }
    if (index > 1) {
      return "col-span-6 md:col-span-3 xl:col-span-2 animate-events-second-row";
    }
    return "col-span-6 md:col-span-3 xl:col-span-3 animate-events-first-row";
  };

  return (
    <section
      id="events"
      className="relative py-8 flex flex-col">
      <div className="animate-events-title xl:float-end max-xl:px-10 xl:pr-32 flex flex-col xl:flex-row-reverse xl:gap-[72px] xl:items-center z-50">
        <SectionTitle title={titles[3]} />
        <div className="my-9 xl:my-0 xl:w-[500px]">
          <SectionSubtitle subtitle={subtitles[3]} />
        </div>
      </div>

      <div className="grid grid-cols-6 gap-3 xl:gap-6 px-10 xl:px-32 xl:mt-14 z-50">
        {events.map((event, index) => (
          <div
            key={event.id}
            className={getColSpanClass(index)}>
            <EventItem
              image={event.image}
              title={event.title}
            />
          </div>
        ))}
      </div>

      <img
        className="max-xl:hidden absolute top-0 left-0 z-10"
        src="/wavy-lines-3.svg"
        alt=""
        aria-hidden="true"
      />
      <PulsingShadow position="bottom-72 right-96 z-10" />
      <PulsingShadow position="bottom-72 left-96 z-10" />
      <PulsingShadow position="top-1/2 left-1/2 z-10" />
    </section>
  );
};

export default Events;
