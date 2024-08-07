import { useState } from "react";
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <nav className="borders flex max-lg:justify-between items-center mt-6 lg:mt-12 px-6 lg:px-10 xl:px-32 gap-24">
      <Logo />
      {/* Desktop Navbar */}
      <ul className="max-lg:hidden flex items-center justify-center gap-24 text-lg font-normal text-[#d9d9d9]">
        <li>
          <a
            className="hover:text-[#35C66B] transition-all duration-300"
            href="#about"
            onClick={e => handleSmoothScroll(e, "about")}>
            How It&apos;s Made
          </a>
        </li>
        <li>
          <a
            className="hover:text-[#35C66B] transition-all duration-300"
            href="#products"
            onClick={e => handleSmoothScroll(e, "products")}>
            Products
          </a>
        </li>
        <li>
          <a
            className="hover:text-[#35C66B] transition-all duration-300"
            href="#events"
            onClick={e => handleSmoothScroll(e, "events")}>
            Events
          </a>
        </li>
        <li>
          <a
            className="hover:text-[#35C66B] transition-all duration-300"
            href="#contacts"
            onClick={e => handleSmoothScroll(e, "contacts")}>
            Contact Us
          </a>
        </li>
      </ul>

      {/* Mobile Navbar */}
      <button
        type="button"
        className="lg:hidden w-10 relative"
        onClick={() => setIsOpen(!isOpen)}>
        <span
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}>
          <span className="text-[#237249] leading-none font-bold text-3xl">
            &#10005;
          </span>
        </span>
        <span
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}>
          <img
            src="/hamburger-menu.svg"
            alt="hamburger menu"
          />
        </span>
      </button>

      <div
        className={`absolute left-0 top-14 md:top-16 bg-[#121517] w-full overflow-hidden transition-max-height duration-500 ease-in-out z-50 ${
          isOpen ? "max-h-screen border-[#35C66B] border-b" : "max-h-0"
        }`}>
        <ul className="flex flex-col items-center justify-center my-10 text-xl font-normal text-[#d9d9d9]">
          <li
            className="w-full py-7 text-center active:bg-[#35C66B]"
            onClick={() => setIsOpen(!isOpen)}>
            <a
              href="#about"
              onClick={e => handleSmoothScroll(e, "about")}>
              How It&apos;s Made
            </a>
          </li>
          <li
            className="w-full py-7 text-center active:bg-[#35C66B]"
            onClick={() => setIsOpen(!isOpen)}>
            <a
              href="#products"
              onClick={e => handleSmoothScroll(e, "products")}>
              Products
            </a>
          </li>
          <li
            className="w-full py-7 text-center active:bg-[#35C66B]"
            onClick={() => setIsOpen(!isOpen)}>
            <a
              href="#events"
              onClick={e => handleSmoothScroll(e, "events")}>
              Events
            </a>
          </li>
          <li
            className="w-full py-7 text-center active:bg-[#35C66B]"
            onClick={() => setIsOpen(!isOpen)}>
            <a
              href="#contacts"
              onClick={e => handleSmoothScroll(e, "contacts")}>
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
