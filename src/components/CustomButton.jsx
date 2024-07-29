import PropTypes from "prop-types";

const CustomButton = ({
  title,
  width,
  widthMD,
  height,
  heightMD,
  titleSize,
  titleSizeMD,
  bgColor,
  borderColor,
}) => {
  const backgroundColor = bgColor ? `bg-[${bgColor}]` : "bg-green-gradient";
  const bordersColor = borderColor ? `border-[${borderColor}]` : "border-none";

  return (
    <button
      className={`rounded-[83px] font-sans font-semibold -tracking-[0.02em] border text-white ${backgroundColor} ${bordersColor}
      `}>
      <span
        className="flex items-center justify-center md:hidden"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          fontSize: `${titleSize}px`,
        }}>
        {title}
      </span>
      <span
        className="hidden md:flex items-center justify-center"
        style={{
          width: `${widthMD}px`,
          height: `${heightMD}px`,
          fontSize: `${titleSizeMD}px`,
        }}>
        {title}
      </span>
    </button>
  );
};

CustomButton.propTypes = {
  title: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  widthMD: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  heightMD: PropTypes.number.isRequired,
  titleSize: PropTypes.number.isRequired,
  titleSizeMD: PropTypes.number.isRequired,
  bgColor: PropTypes.string,
  borderColor: PropTypes.string,
};

export default CustomButton;
