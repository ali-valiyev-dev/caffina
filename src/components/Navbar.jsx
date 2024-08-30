import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { Logo } from "../common";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#about", label: "How It's Made" },
    { href: "#products", label: "Products" },
    { href: "#events", label: "Events" },
    { href: "#contacts", label: "Contact Us" },
  ];

  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="flex items-center justify-between mt-6 lg:mt-12 px-6 lg:px-10 xl:px-32 gap-24 relative">
      <Logo />

      {/* Desktop Navbar */}
      <ul className="hidden lg:flex items-center justify-center gap-24 text-lg font-normal text-latte">
        {navItems.map(item => (
          <li key={item.href}>
            <a
              className="hover:text-espresso transition-all duration-300"
              href={item.href}
              onClick={e => handleSmoothScroll(e, item.href.substring(1))}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Navbar */}
      <button
        type="button"
        className="lg:hidden w-10 h-10 flex items-center justify-center text-cappuccino"
        onClick={() => setIsOpen(!isOpen)}>
        <MenuIcon style={{ fontSize: "40px" }} />
      </button>

      <div
        className={`absolute left-0 top-0 w-full bg-dark overflow-hidden transition-max-height duration-500 ease-in-out z-50 ${
          isOpen ? "max-h-screen border-b border-espresso" : "max-h-0"
        }`}>
        <div className="flex justify-between mt-6 lg:mt-12 px-6 lg:px-10 xl:px-32">
          <Logo />
          <button
            type="button"
            className="w-10 h-10 flex items-center justify-center text-cappuccino"
            onClick={() => setIsOpen(prev => !prev)}>
            <CloseIcon style={{ fontSize: "40px" }} />
          </button>
        </div>

        <ul className="flex flex-col items-center justify-center my-10 text-xl font-normal text-latte">
          {navItems.map(item => (
            <li
              key={item.href}
              className="w-full py-7 text-center hover:bg-espresso transition-all duration-300"
              onClick={() => setIsOpen(false)}>
              <a
                href={item.href}
                onClick={e => handleSmoothScroll(e, item.href.substring(1))}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
