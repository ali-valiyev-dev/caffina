import PropTypes from "prop-types";

const SectionTitle = ({ title }) => {
  const words = title.split(" ");
  const lastWord = words.pop();

  return (
    <h2 className="section-title leading-[52px] md:leading-[87px] text-white text-5xl md:text-[80px] font-extrabold -tracking-[0.03em]">
      <span className=" text-nowrap">{words.join(" ")}</span> <br />
      <span className="text-transparent bg-clip-text bg-espresso-gradient">
        {lastWord}
      </span>
    </h2>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
