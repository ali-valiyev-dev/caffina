import PropTypes from "prop-types";
import classNames from "classnames";

const ShowcaseImage = ({ mirror, imgSrc, alt }) => {
  return (
    <div
      className={classNames(
        "relative w-[197px] md:w-[505px] h-[256px] md:h-[724px] flex items-end",
        {
          "justify-end": mirror,
        }
      )}>
      <div
        className={classNames(
          "absolute w-[163px] md:w-[465px] h-[240px] md:h-[684px] bg-[#237249] overflow-hidden clip-cut-edge",
          {
            "transform scale-x-[-1]": mirror,
          }
        )}
      />

      <div
        className={classNames(
          "relative w-[163px] md:w-[465px] h-[240px] md:h-[684px] overflow-hidden",
          {
            "-top-4 -left-4 md:-top-10 md:-left-10": mirror,
            "-top-4 -right-4 md:-top-10 md:-right-10": !mirror,
          }
        )}>
        <img
          src={imgSrc}
          alt={alt}
          className={classNames("w-full h-full clip-cut-edge", {
            "transform scale-x-[-1]": mirror,
          })}
        />

        <img
          className={classNames("max-md:hidden absolute -top-10", {
            "-left-10": mirror,
            "-right-10": !mirror,
          })}
          src="/star-mark-2.svg"
          alt=""
          width={250}
          height={250}
        />
      </div>
    </div>
  );
};

ShowcaseImage.propTypes = {
  mirror: PropTypes.bool.isRequired,
  imgSrc: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default ShowcaseImage;
