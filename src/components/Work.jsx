import React, { useEffect } from "react";
import cryptosite from "../assets/cryptosite.png";
import darktheme from "../assets/darktheme.png";
import expensetracker from "../assets/expensetracker.png";
import ecommerce from "../assets/ecommerce.png";
import watchflix from "../assets/watchflix.png";
import dataapp from "../assets/dataapp.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Work = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div
      name="work"
      className="w-full xl:h-[50rem] 2xl:h-[40rem] text-[#5651E5] bg-[#ffffff]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div
          data-aos="fade-right"
          data-aso-delay="200"
          data-aos-duration="1500"
          className="pb-8 lg:mt-4"
        >
          <p className="text-4xl font-bold inline border-b-4 border-[#FFFFFF]">
            Work
          </p>
          <p
            data-aos="fade-right"
            data-aso-delay="200"
            data-aos-duration="1500"
            className="py-2 text-[#000000] font-semibold"
          >
            Check out some of my recent work:
          </p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="animation"
          >
            <div
              style={{ backgroundImage: `url(${dataapp})` }}
              className="transition ease-in-out hover:-translate-y-1 hover:scale-105 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  Data App
                </span>
                <div className="pt-8 text-center">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://merry-cascaron-69cc7f.netlify.app/"
                  >
                    <button className="transition ease-in-out hover:bg-[#5651E5] hover:text-white text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/JavierCavalli/react-tw-data-app-main"
                  >
                    <button className="transition ease-in-out hover:bg-[#5651E5] hover:text-white text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="200"
            className="animation"
          >
            <div
              style={{ backgroundImage: `url(${watchflix})` }}
              className="transition ease-in-out hover:-translate-y-1 hover:scale-105 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  Movie Api App
                </span>
                <div className="pt-8 text-center">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://watchflix-main.vercel.app/"
                  >
                    <button className="transition ease-in-out hover:bg-[#5651E5] hover:text-white text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/JavierCavalli/watchflix-main"
                  >
                    <button className="transition ease-in-out hover:bg-[#5651E5] hover:text-white text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="400"
            className="animation"
          >
            <div
              style={{ backgroundImage: `url(${ecommerce})` }}
              className="transition ease-in-out hover:-translate-y-1 hover:scale-105 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  Ecommerce Store
                </span>
                <div className="pt-8 text-center">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://ecommerce-sanity-eight.vercel.app/"
                  >
                    <button className="transition ease-in-out hover:bg-[#5651E5] hover:text-white text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/JavierCavalli/ecommerce-sanity"
                  >
                    <button className="transition ease-in-out hover:bg-[#5651E5] hover:text-white text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1800"
            data-aos-delay="200"
            className="animation"
          >
            <div
              style={{ backgroundImage: `url(${cryptosite})` }}
              className="transition ease-in-out hover:-translate-y-1 hover:scale-105 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  Crypto API
                </span>
                <div className="pt-8 text-center">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://incomparable-crumble-735f3a.netlify.app/"
                  >
                    <button className="transition ease-in-out hover:bg-[#5651E5] hover:text-white text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/JavierCavalli/Crypto-landingpage-main"
                  >
                    <button className="transition ease-in-out hover:bg-[#5651E5] hover:text-white text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            data-aos="fade-up"
            data-aos-duration="1800"
            data-aos-delay="600"
            className="animation"
          >
            <div
              style={{ backgroundImage: `url(${darktheme})` }}
              className="transition ease-in-out hover:-translate-y-1 hover:scale-105 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  Dark Theme UI
                </span>
                <div className="pt-8 text-center">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://spontaneous-travesseiro-fade16.netlify.app/"
                  >
                    <button className="transition ease-in-out hover:bg-[#5651E5] hover:text-white text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/JavierCavalli/dark-theme-main"
                  >
                    <button className="transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-[#5651E5] hover:text-white text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1800"
            data-aos-delay="800"
            className="animation"
          >
            <div
              style={{ backgroundImage: `url(${expensetracker})` }}
              className="transition ease-in-out hover:-translate-y-1 hover:scale-105 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  Expense Tracker
                </span>
                <div className="pt-8 text-center">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://aquamarine-nasturtium-4bf446.netlify.app/"
                  >
                    <button className="transition ease-in-out hover:bg-[#5651E5] hover:text-white text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/JavierCavalli/expense-tracker-react-main"
                  >
                    <button className="transition ease-in-out hover:bg-[#5651E5] hover:text-white text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
