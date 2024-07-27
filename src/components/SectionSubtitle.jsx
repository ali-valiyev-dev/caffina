import PropTypes from "prop-types";

const SectionSubtitle = ({ subtitle }) => {
  return (
    <p className="font-sans text-xs md:text-xl leading-5 md:leading-8 font-normal text-[#d9d9d9] -tracking-[0.02em]">
      {subtitle}
    </p>
  );
};

SectionSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
};

export default SectionSubtitle;
