import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0C0C0C] text-[#f7f7f7]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#f7f7f7]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Javier, nice to meet you, a little bit about myself.</p>
          </div>
          <div>
            <p>
              Freelance Web Designer and Developer based in Argentina.
              Experienced in designing and developing projects using MERN Stack.
              I enjoy building everything from small business sites to rich
              interactive web apps.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
