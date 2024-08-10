import PropTypes from "prop-types";

const SectionTitle = ({ title }) => {
  return (
    <h2 className="section-title leading-[52px] md:leading-[87px] text-white text-5xl md:text-[80px] font-extrabold -tracking-[0.03em]">
      {`${title.split(" ").slice(0, -1).join(" ")} `} <br />
      <span className="text-transparent bg-clip-text bg-espresso-gradient">
        {`${title.split(" ").slice(-1)}`}
      </span>
    </h2>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
