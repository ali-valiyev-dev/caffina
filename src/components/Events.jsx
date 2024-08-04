import { events, subtitles, titles } from "../../constants";
import EventItem from "./EventItem";
import SectionSubtitle from "./SectionSubtitle";
import SectionTitle from "./SectionTitle";

const Events = () => {
  return (
    <section className="mt-16 xl:mt-24 flex flex-col">
      <div className=" xl:float-end max-xl:px-10 xl:pr-32 flex flex-col xl:flex-row-reverse xl:gap-[72px] xl:items-center">
        <SectionTitle title={titles[3]} />
        <div className="my-9 xl:my-0 xl:w-[500px]">
          <SectionSubtitle subtitle={subtitles[3]} />
        </div>
      </div>

      <div className="grid grid-cols-6 gap-3 xl:gap-6 px-10 xl:px-32 xl:mt-14">
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
    </section>
  );
};

export default Events;
