import PropTypes from "prop-types";
import CustomButton from "./CustomButton";

const EventItem = ({ image, title }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
      }}
      className=" h-[260px] flex justify-between flex-col bg-cover bg-center w-full px-6 py-8 rounded-[30px] overflow-hidden">
      <h3 className="text-3xl text-white font-medium max-w-[14rem] xl:max-w-[17rem] uppercase">
        {title}
      </h3>

      <CustomButton title="More" />
    </div>
  );
};

EventItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default EventItem;
