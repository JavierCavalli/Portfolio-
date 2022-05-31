import React from "react";
import { FaLinkedin, FaGithubSquare, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex items-center justify-center h-24 text-gray-300 bg-[#0C0C0C]">
      <a
        href="https://www.linkedin.com/in/javier-cavalli-050734228/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaLinkedin
          size={30}
          className="hover:text-[#0e76a8] ease-in-out duration-200"
        />
      </a>
      <a
        href="https://github.com/JavierCavalli"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithubSquare
          size={30}
          className="hover:text-[#9b59b6] ease-in-out duration-200"
        />
      </a>
      <a
        href="https://twitter.com/cavalli_javier"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitterSquare
          size={30}
          className="hover:text-[#1DA1F2] ease-in-out duration-200"
        />
      </a>
    </div>
  );
};

export default Footer;
