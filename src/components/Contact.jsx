import React, { useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import contact from "../assets/contact.svg";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="contact" className="w-full lg:h-screen  ">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p
          data-aos="fade-left"
          data-aos-duration="1000"
          className="tracking-widest uppercase text-[#5651e5] font-semibold text-xl "
        >
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 flex justify-center items-center">
            <div className="lg:p-4 h-full ">
              <div>
                <img
                  className="h-80 w-80 rounded-xl hover:scale-105 ease-in duration-300"
                  src={contact}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Get In Touch</h2>
                <p className="font-semibold">Email: javier.cavalli@gmail.com</p>
                <p className="py-4 font-semibold">
                  I am available for freelance or full-time positions.
                </p>
              </div>
              <div>
                <p className="font-semibold pt-15">Find me here!</p>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3.5 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3.5 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3.5 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3.5 cursor-pointer hover:scale-110 ease-in duration-300">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-6 flex justify-center items-center">
            <div className="p-4 font-semibold">
              <form
                method="POST"
                action="https://getform.io/f/2501a2a8-46d7-489b-87a6-b8db98313f48"
                className="flex flex-col max-w-[600px] w-full"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="3"
                  ></textarea>
                </div>
                <div className="justify-center items-center mx-auto pt-2">
                  <button className="transition ease-in-out hover:-translate-y-1 hover:scale-105 bg-[#000000] hover:bg-[#5651e5] text-center rounded-lg px-2 py-3 m-2 text-white font-bold text-lg">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
