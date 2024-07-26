import { useState } from "react";
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex max-md:justify-between items-center pt-6 md:pt-12 px-6 md:px-32 gap-24">
      <Logo />
      {/* Desktop view Navbar */}
      <ul className="max-md:hidden flex items-center justify-center gap-24 text-lg font-normal text-[#d9d9d9]">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Select</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
      </ul>

      {/* Mobile view Navbar */}
      <button
        type="button"
        className="md:hidden w-10 h-4"
        onClick={() => setIsOpen(!isOpen)}>
        <img
          src="/hamburger-menu.svg"
          alt="hamburger menu"
        />
      </button>

      <div
        className={`absolute left-0 top-14 bg-[#121517] w-full overflow-hidden transition-max-height duration-500 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}>
        <ul className="flex flex-col items-center justify-center gap-14 my-10 text-xl font-normal text-[#d9d9d9]">
          <li onClick={() => setIsOpen(!isOpen)}>
            <a href="#">Home</a>
          </li>
          <li onClick={() => setIsOpen(!isOpen)}>
            <a href="#">Select</a>
          </li>
          <li onClick={() => setIsOpen(!isOpen)}>
            <a href="#">Shop</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
