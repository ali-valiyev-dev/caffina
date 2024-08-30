import PropTypes from "prop-types";

const SectionSubtitle = ({ subtitle }) => {
  return (
    <p className="section-subtitle text-xs md:text-xl leading-5 md:leading-8 font-normal text-latte tracking-tight">
      {subtitle}
    </p>
  );
};

SectionSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
};

export default SectionSubtitle;
