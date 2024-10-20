import React from "react";

const ContactUs = () => {
  return (
    <footer className="bg-black text-white">
      <div className="lg:h-[100vh] w-screen relative flex flex-col lg:flex-row lg:justify-around lg:p-4 px-3 lg:items-center">
        <div className="lg:w-1/2 flex flex-col gap-3">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="py-2 px-5 bg-transparent border border-white rounded-full"
          />
          <input
            type="text"
            placeholder="Enter Your Name"
            className="py-2 px-5 bg-transparent border border-white rounded-full"
          />
          <input
            type="text"
            placeholder="Enter Your Phone Number"
            className="py-2 px-5 bg-transparent border border-white rounded-full"
          />
          <textarea
            placeholder="Enter Your Message"
            className="py-2 px-5 bg-transparent border border-white rounded-full resize-none flex itesms-center"
          ></textarea>
          <button className="bg-blue-500 transition hover:bg-blue-700 p-3 text-white rounded-md">
            Submit
          </button>
        </div>
        <div className="hidden lg:block lg:h-full w-1/2 relative">
          <iframe
            src="https://my.spline.design/robotfollowcursorforlandingpage-6b8203802612839e4440d96444b27223/"
            frameborder="0"
            width="100%"
            height="100%"
          ></iframe>
          <div className="absolute h-20 w-40 -bottom-0  right-0 bg-[#000000]"></div>
        </div>
      </div>
    </footer>
  );
};

export default ContactUs;
