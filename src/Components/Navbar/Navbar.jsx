import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { TiThMenuOutline } from "react-icons/ti";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav
      className="bg-black p-3 m-auto shadow-md w-full fixed top-0 left-0 right-0"
      style={{ zIndex: 100 }}
    >
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div
          className="text-white hidden sm:block text-sm sm:text-xl font-bold font-sans mb-3 sm:mb-0"
          onClick={scrollToTop}
          style={{ cursor: "pointer" }}
        >
          Piyush Mishra
        </div>
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-white cursor-pointer text-[12px] hover:text-[#bf9467] poppins"
          >
            <TiThMenuOutline className="text-[20px]" />
          </button>
        </div>
        <div
          className={`${
            menuOpen ? "flex-col bg-transparent" : "hidden"
          } flex-col sm:flex-row sm:flex space-x-4`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-white ml-4 cursor-pointer text-[12px] sm:text-[12px] hover:text-[#bf9467] poppins block sm:inline "
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-white cursor-pointer text-[12px] sm:text-[12px] hover:text-[#bf9467] poppins block sm:inline"
          >
            About
          </Link>
          <Link
            to="experience"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-white  cursor-pointer text-[12px] sm:text-[12px] hover:text-[#bf9467] poppins  block sm:inline"
          >
            Experience
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-white cursor-pointer text-[12px] sm:text-[12px] hover:text-[#bf9467] poppins  block sm:inline"
          >
            Projects
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-white text-[12px] cursor-pointer sm:text-[12px] hover:text-[#bf9467] poppins  block sm:inline"
          >
            Services
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-white cursor-pointer text-[12px] sm:text-[12px] hover:text-[#bf9467] poppins  block sm:inline"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
