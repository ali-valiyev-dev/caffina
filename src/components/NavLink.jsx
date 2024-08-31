import { handleSmoothScroll } from "../utils/helpers";
import PropTypes from "prop-types";

const NavLink = ({ href, label, setIsOpen }) => {
  return (
    <li className="text-center text-cappuccino hover:text-latte transition-all duration-200">
      <a
        href={href}
        className="text-xl md:text-2xl lg:text-xl text-nowrap"
        onClick={e => handleSmoothScroll(e, href, setIsOpen)}>
        {label}
      </a>
    </li>
  );
};

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  setIsOpen: PropTypes.func,
};
export default NavLink;
