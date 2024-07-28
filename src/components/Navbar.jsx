import { useState } from "react";
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex max-lg:justify-between items-center pt-6 lg:pt-12 px-6 lg:px-10 xl:px-32 gap-24">
      <Logo />
      {/* Desktop view Navbar */}
      <ul className="max-lg:hidden flex items-center justify-center gap-24 text-lg font-normal text-[#d9d9d9]">
        <li>
          <a
            className="hover:text-[#35C66B] transition-all duration-300"
            href="#">
            Home
          </a>
        </li>
        <li>
          <a
            className="hover:text-[#35C66B] transition-all duration-300"
            href="#">
            Select
          </a>
        </li>
        <li>
          <a
            className="hover:text-[#35C66B] transition-all duration-300"
            href="#">
            Shop
          </a>
        </li>
      </ul>

      {/* Mobile view Navbar */}
      <button
        type="button"
        className="lg:hidden w-10 h-4"
        onClick={() => setIsOpen(!isOpen)}>
        <img
          src="/hamburger-menu.svg"
          alt="hamburger menu"
        />
      </button>

      <div
        className={`absolute left-0 top-14 bg-[#121517] w-full overflow-hidden transition-max-height duration-500 ease-in-out z-50 ${
          isOpen ? "max-h-screen border-[#35C66B] border-b" : "max-h-0"
        }`}>
        <ul className="flex flex-col items-center justify-center my-10 text-xl font-normal text-[#d9d9d9]">
          <li
            className="w-full py-7 text-center active:bg-[#35C66B]"
            onClick={() => setIsOpen(!isOpen)}>
            <a href="#">Home</a>
          </li>
          <li
            className="w-full py-7 text-center active:bg-[#35C66B]"
            onClick={() => setIsOpen(!isOpen)}>
            <a href="#">Select</a>
          </li>
          <li
            className="w-full py-7 text-center active:bg-[#35C66B]"
            onClick={() => setIsOpen(!isOpen)}>
            <a href="#">Shop</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
