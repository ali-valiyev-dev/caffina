import PropTypes from "prop-types";

const NavLinksWrapper = ({ children }) => {
  return (
    <ul className="flex flex-col lg:flex-row items-center gap-14 lg:gap-8 font-semibold">
      {children}
    </ul>
  );
};

NavLinksWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavLinksWrapper;
