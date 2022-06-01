import React, { useEffect } from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";
import Git from "../assets/git.png";
import GraphQl from "../assets/graphql.png";
import Express from "../assets/express.svg";
import Aos from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div name="skills" className="w-full h-screen bg-[#ffffff] text-[#000000]">
      {/* Container */}
      <div className="max-w-[1240px] m-auto mx-auto flex flex-col justify-center h-full">
        <div>
          <p
            data-aos="fade-left"
            data-aos-duration="1000"
            className="text-2xl sm:text-3xl font-bold tracking-widest uppercase text-[#5651e5] border-b-4 border-[#f7f7f7] "
          >
            Skills
          </p>
          <p
            data-aos="fade-left"
            data-aos-duration="1000"
            className="py-4 font-semibold"
          >
            These are the technologies I've worked with:
          </p>
        </div>

        <div className="w-full grid grid-cols-4 sm:grid-cols-4 gap-4 text-center py-8 font-semibold">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="shadow-md  hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="shadow-md hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="1000"
            className="shadow-md hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-4">JAVA SCRIPT</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="800"
            data-aos-duration="1000"
            className="shadow-md hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4">REACT</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="shadow-md hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="my-4">GITHUB</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
            className="shadow-md hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto" src={Node} alt="HTML icon" />
            <p className="my-4">NODE JS</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="1000"
            className="shadow-md hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto" src={Mongo} alt="HTML icon" />
            <p className="my-4">MONGO DB</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="800"
            data-aos-duration="1000"
            className="shadow-md hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto" src={Express} alt="HTML icon" />
            <p className="my-4">EXPRESS</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="shadow-md hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto" src={FireBase} alt="HTML icon" />
            <p className="my-4">FIREBASE</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
            className="shadow-md hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className="my-4">TAILWIND</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="1000"
            className="shadow-md hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto " src={GraphQl} alt="HTML icon" />
            <p className="my-4">GRAPHQL</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="800"
            data-aos-duration="1000"
            className="shadow-md hover:scale-110 duration-500"
          >
            <img className="w-20 mx-auto" src={Git} alt="HTML icon" />
            <p className="my-4">GIT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
