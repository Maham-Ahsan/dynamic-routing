import React from "react";

const Navbar = () => {
  return (
    <nav className=" py-1 px-6 sticky">
      <ul className="flex gap-5 lg:gap-16 min-h-20 items-center 0 justify-center md:flex text-yellow-400">
        <li >
          <a
            href="#hero"
            className="text-gray-700 hover:text-cyan-700 font-medium transition duration-300"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#country"
            className="text-gray-700 hover:text-cyan-700 font-medium transition duration-300"
          >
            Country
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="text-gray-700 hover:text-cyan-700 font-medium transition duration-300"
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-gray-700 hover:text-cyan-700 font-medium transition duration-300"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
