import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div
      data-aos="fade-down"
      data-aos-duration="1500"
      className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#ffffff] text-[#0f0e0e] shadow-md z-100"
    >
      <div>
        <a href="/">
          <img src={Logo} alt="img" style={{ width: "50px" }} />
        </a>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex font-semibold">
        <li>
          <Link
            className="hover:text-[#4267B2] ease-in-out duration-200 "
            to="home"
            smooth={true}
            duration={300}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-[#4267B2] ease-in-out duration-200"
            to="about"
            smooth={true}
            duration={300}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-[#4267B2] ease-in-out duration-200"
            to="skills"
            smooth={true}
            duration={300}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-[#4267B2] ease-in-out duration-200"
            to="work"
            smooth={true}
            duration={300}
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-[#4267B2] ease-in-out duration-200"
            to="contact"
            smooth={true}
            duration={300}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#ffffff] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link
            className="hover:text-[#4267B2] ease-in-out duration-200"
            onClick={handleClick}
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link
            className="hover:text-[#4267B2] ease-in-out duration-200"
            onClick={handleClick}
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link
            className="hover:text-[#4267B2] ease-in-out duration-200"
            onClick={handleClick}
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link
            className="hover:text-[#4267B2] ease-in-out duration-200"
            onClick={handleClick}
            to="work"
            smooth={true}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link
            className="hover:text-[#4267B2] ease-in-out duration-200"
            onClick={handleClick}
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
