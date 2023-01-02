import React, { useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import ReactTypingEffect from "react-typing-effect";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="2xl:mb-28 xl:mt-16 mt-24">
          <h1
            data-aos="fade-up"
            data-aos-mirror="false"
            data-aos-once="false"
            className="py-4 text-gray-700"
          >
            Hi, I&#39;m{" "}
            <span className="text-[#5651e5] text-4xl sm:text-5xl font-bold">
              {" "}
              Javier Cavalli
            </span>{" "}
          </h1>
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="mb-4 text-gray-700"
          >
            <ReactTypingEffect
              speed={100}
              eraseSpeed={100}
              eraseDelay={1000}
              typingDelay={300}
              cursor=" "
              text={[
                "<FullStack Dev />",
                "{UX/UI Designer}",
                "[Coffee, Lover]",
              ]}
            />
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="500"
            className="uppercase text-sm tracking-widest text-gray-600 font-bold mt-2"
          >
            LETS BUILD SOMETHING TOGETHER
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="700"
            className="py-4 text-gray-600 max-w-[70%] m-auto"
          >
            I’m a Freelance Web Designer and Developer based in Argentina.
            Experienced in designing and developing projects using MERN Stack. I
            enjoy building everything from small business sites to rich
            interactive web apps.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="2000"
              className="animation"
            >
              <a
                href="https://www.linkedin.com/in/javier-cavalli-050734228/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="hover:text-[#0e76a8] rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
              </a>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="800"
              data-aos-duration="2000"
              className="animation"
            >
              <a
                href="https://github.com/JavierCavalli"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="rounded-full hover:text-[#9b59b6] shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaGithub />
                </div>
              </a>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="1000"
              data-aos-duration="2000"
              className="animation"
            >
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=javier.cavalli@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="rounded-full hover:text-[#2c8951] shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                  <AiOutlineMail />
                </div>
              </a>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="1200"
              data-aos-duration="2000"
              className="animation"
            >
              <a
                href="https://www.docdroid.net/ajoMEEB/cv-pdf"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="rounded-full hover:text-[#bd3a3a] shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
