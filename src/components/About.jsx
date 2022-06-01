import React, { useEffect } from "react";
import laptop from "../assets/laptop.png";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p
            data-aos="fade-right"
            data-aos-duration="1000"
            className="uppercase tracking-widest text-[#5651e5] font-bold "
          >
            About
          </p>
          <h2
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="py-4 text-2xl sm:text-3xl"
          >
            About myself:
          </h2>
          <p
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-duration="1000"
            className="text-gray-600"
          >
            I began my learning in early 2019, soon i became engaged with
            programming and after learning the basics i decided to learn my
            first stack: React, Node, Express, and MongoDB. While taking
            certifications and courses (udemy, freecodecamp, cs50) i made
            several projects and kept on learning different technologies. As of
            now i've over 2 years of experience as a fullstack developer with a
            strong focus on the front-end, ready to make your ideas a reality.
          </p>
          <p
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-duration="1000"
            className="py-2 text-gray-600 underline cursor-pointer"
          >
            Check out some of my latest projects.
          </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="400"
          data-aos-duration="1000"
          className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300"
        >
          <img className="rounded-xl" src={laptop} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
