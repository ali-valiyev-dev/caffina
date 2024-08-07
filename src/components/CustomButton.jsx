import PropTypes from "prop-types";

const CustomButton = ({
  title,
  onClick,
  bgColor = "bg-green-gradient",
  borderColor = "border-none",
}) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-[83px] w-max font-sans font-semibold -tracking-[0.02em] flex items-center justify-center border text-white px-7 xl:px-10 py-3 xl:py-5 text-base lg:text-xl ${bgColor} ${borderColor}
      `}>
      {title}
    </button>
  );
};

CustomButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  bgColor: PropTypes.string,
  borderColor: PropTypes.string,
};

export default CustomButton;
