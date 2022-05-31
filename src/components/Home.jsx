import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#ffffff]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#000000]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#000000]">
          Javier Cavalli &
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#000000]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#000000] py-4 max-w-[700px]">
          I’m a full-stack developer specializing in building responsive
          full-stack web applications.
        </p>
        <div>
          <Link to="work" smooth={true} duration={1000}>
            <button className="text-black group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#0A66C2] hover:border-black hover:-translate-y-0.5 transition">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
