import { events, subtitles, titles } from "../../constants";
import EventItem from "./EventItem";
import SectionSubtitle from "./SectionSubtitle";
import SectionTitle from "./SectionTitle";
import PulsingShadow from "./PulsingShadow";

const Events = () => {
  return (
    <section
      id="events"
      className="borders relative py-8 flex flex-col ">
      <div className=" xl:float-end max-xl:px-10 xl:pr-32 flex flex-col xl:flex-row-reverse xl:gap-[72px] xl:items-center z-50">
        <SectionTitle title={titles[3]} />
        <div className="my-9 xl:my-0 xl:w-[500px]">
          <SectionSubtitle subtitle={subtitles[3]} />
        </div>
      </div>
      <div className="grid grid-cols-6 gap-3 xl:gap-6 px-10 xl:px-32 xl:mt-14 z-50">
        {events.map((event, index) => (
          <div
            key={event.id}
            className={`${
              index === events.length - 1
                ? "col-span-6 xl:col-span-2"
                : index > 1
                ? "col-span-6 md:col-span-3 xl:col-span-2"
                : "col-span-6 md:col-span-3 xl:col-span-3"
            }`}>
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
        alt="Decorative Wavy Lines"
      />
      <PulsingShadow position="bottom-72 right-96 z-10" />
      <PulsingShadow position="bottom-72 left-96 z-10" />
      <PulsingShadow position="top-1/2 left-1/2 z-10" />
    </section>
  );
};

export default Events;
