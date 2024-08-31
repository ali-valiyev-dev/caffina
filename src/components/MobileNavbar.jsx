import { useEffect } from "react";
import { Icon } from "@iconify/react";
import { navLinks } from "/constants";
import { Logo } from "../common";
import { NavLinksWrapper, NavLink } from "../components";
import PropTypes from "prop-types";

const MobileNavbar = ({ isOpen, setIsOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div
      className={`bg-dark text-cappuccino fixed left-0 top-0 h-screen w-full lg:hidden flex flex-col items-center justify-center transition-all duration-500  overflow-hidden ease-in-out z-50 ${
        isOpen ? "max-h-full" : "max-h-0"
      }`}>
      <div className="flex items-center justify-between py-2 px-6 absolute top-0 left-0 w-full ">
        <Logo />
        <button
          type="button"
          aria-label="Close Menu"
          className="flex items-center justify-center"
          onClick={() => setIsOpen(false)}>
          <Icon
            icon="mdi:close"
            width={32}
            height={32}
          />
        </button>
      </div>

      <NavLinksWrapper>
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            setIsOpen={setIsOpen}
            {...link}
          />
        ))}
      </NavLinksWrapper>

      {/* <div className="absolute bottom-0 left-0 flex justify-center w-full gap-6 py-4">
          {SOCIAL_LINKS.map((link, index) => (
            <SocialLink
              key={index}
              {...link}
            />
          ))}

          <ResumeLink />
        </div> */}
    </div>
  );
};

MobileNavbar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default MobileNavbar;
