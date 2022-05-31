import React from "react";

function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#ffffff] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/2501a2a8-46d7-489b-87a6-b8db98313f48"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#FFFFFF] text-[#000000]">
            Contact
          </p>
          <p className="text-[#000000] py-4">
            Submit the form below or email me at - javier.cavalli@gmail.com
          </p>
        </div>
        <input
          className="bg-[#f3eeee] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#f3eeee]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#f3eeee] p-2"
          name="message"
          id=""
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-[#000000] hover:text-[#FFFFFF] border-2 hover:bg-[#000000] hover:border-[#000000] ease-in-out duration-200 px-4 py-3 my-8 mx-auto flex items-center font-semibold">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
