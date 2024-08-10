import PropTypes from "prop-types";

const SectionSubtitle = ({ subtitle }) => {
  return (
    <p className="section-subtitle text-xs md:text-xl leading-5 md:leading-8 font-normal text-latte -tracking-[0.02em]">
      {subtitle}
    </p>
  );
};

SectionSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
};

export default SectionSubtitle;
