import { useState, useEffect } from "react";
import { Logo } from "../common";
import { navLinks } from "/constants";
import { MobileNavbar, NavLink, NavLinksWrapper } from "../components";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-dark text-cappuccino mx-auto max-w-screen-2xl flex items-center justify-between px-6 lg:px-10 py-2 lg:py-5 xl:px-32 max-lg:fixed z-[1000] w-full transition-shadow duration-500 ${
        isScrolled ? "shadow-md" : ""
      }`}>
      <div className="flex justify-between w-full">
        <Logo />
        <button
          type="button"
          aria-label="Open Menu"
          className="lg:hidden flex items-center justify-center"
          onClick={() => setIsOpen(true)}>
          <Icon
            icon="mdi:menu"
            width={32}
            height={32}
          />
        </button>
      </div>

      <div className="hidden lg:flex">
        <NavLinksWrapper>
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              {...link}
            />
          ))}
        </NavLinksWrapper>
      </div>

      <MobileNavbar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </nav>
  );
};

export default Navbar;
