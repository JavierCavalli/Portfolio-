import React from "react";
import {
  FaLinkedin,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { IoMdContact } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-[#0C0C0C]">
      <div className="flex items-center justify-center h-24 max-w-[1240px] mx-auto px-4 bg text-gray-300">
        <a
          href="https://www.linkedin.com/in/javier-cavalli-050734228/"
          target="_blank"
        >
          <FaLinkedin
            size={30}
            className="hover:text-[#0e76a8] ease-in-out duration-200"
          />
        </a>
        <a href="https://github.com/JavierCavalli" target="_blank">
          <FaGithubSquare
            size={30}
            className="hover:text-[#9b59b6] ease-in-out duration-200"
          />
        </a>
        <a href="https://twitter.com/cavalli_javier" target="_blank">
          <FaTwitterSquare
            size={30}
            className="hover:text-[#1DA1F2] ease-in-out duration-200"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
