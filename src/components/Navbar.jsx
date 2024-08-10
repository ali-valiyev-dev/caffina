import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "./Logo";

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
    <nav className="flex max-lg:justify-between items-center mt-6 lg:mt-12 px-6 lg:px-10 xl:px-32 gap-24">
      <Logo />

      {/* Desktop Navbar */}
      <ul className="max-lg:hidden flex items-center justify-center gap-24 text-lg font-normal text-latte">
        {navItems.map((item, index) => (
          <li key={index}>
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
        className="lg:hidden w-10 h-10 relative flex items-center text-cappuccino justify-center"
        onClick={() => setIsOpen(!isOpen)}>
        <MenuIcon style={{ fontSize: "40px" }} />
      </button>

      <div
        className={`absolute left-0 top-0 bg-dark w-full overflow-hidden transition-max-height duration-500 ease-in-out z-50 ${
          isOpen ? "max-h-screen border-espresso border-b" : "max-h-0"
        }`}>
        <div className="flex justify-between mt-6 lg:mt-12 px-6 lg:px-10 xl:px-32">
          <Logo />
          <button
            type="button"
            className="lg:hidden w-10 h-10 relative flex items-center text-cappuccino justify-center"
            onClick={() => setIsOpen(!isOpen)}>
            <CloseIcon style={{ fontSize: "40px" }} />
          </button>
        </div>

        <ul className="flex flex-col items-center justify-center my-10 text-xl font-normal text-latte">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="w-full py-7 text-center active:bg-espresso"
              onClick={() => setIsOpen(!isOpen)}>
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
